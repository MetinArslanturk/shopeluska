import React from 'react';
import { connect } from 'react-redux';
import AddUpdateProductModal from '../AddProduct';

export class AdminPage extends React.Component {

    state = {
        addProductOpen: false,
        isUpdate: false,
        productData: {}
    }


    handleClose = () => {
        this.setState(() => ({ addProductOpen: false, isUpdate: false }));
    }

    handleSave = (savedProduct) => {
        this.setState(() => ({ addProductOpen: false, isUpdate: false }));
    }

    openAddNewProductModal = () => {
        this.setState(() => ({ addProductOpen: true, isUpdate: false }));
    }

    render() {
        return (
            <>
                Manage Products

                <button onClick={this.openAddNewProductModal}>Add</button>

                <AddUpdateProductModal
                    isOpen={this.state.addProductOpen}
                    isUpdate={this.state.isUpdate}
                    handleSave={this.handleSave}
                    handleClose={this.handleClose}>
                </AddUpdateProductModal>
            </>
        )
    }
}

export default connect(undefined)(AdminPage);