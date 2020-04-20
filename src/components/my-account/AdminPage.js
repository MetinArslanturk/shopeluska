import React from 'react';
import { connect } from 'react-redux';
import {startDeleteProduct } from '../../actions/products';
import { productColumns } from '../../helpers/productColumns';
import ActionButton from '../ActionButton';
import { deleteConfirm } from '../ConfirmPopup'
import AddUpdateProductModal from '../AddUpdateProductModal';
import { Table } from 'antd';

export class AdminPage extends React.Component {

    state = {
        addProductOpen: false,
        isUpdate: false,
        productData: {}
    };

    columns = [...productColumns, {
        title: 'Actions',
        dataIndex: 'action',
        render: (text, record) => (
            <span>
                <ActionButton
                    text="Edit"
                    onClickActionFunction={this.openAddUpdateProductModal}
                    itemToArguments={record}
                />
  
                <ActionButton
                    text="Delete"
                    onClickActionFunction={this.handleDelete}
                    itemToArguments={record}
                />
            </span>
        ),
      }];


    handleDeleteConfirm = (id) => {
        this.props.startDeleteProduct(id);
    }

    handleDelete = (record) => {
        deleteConfirm(this.handleDeleteConfirm, record._id);
    };

    handleClose = () => {
        this.setState(() => ({ addProductOpen: false }));
    }

    handleSave = (savedProduct) => {
        this.setState(() => ({ addProductOpen: false }));
    }

    openAddUpdateProductModal = (record) => {
            this.setState(() => ({ addProductOpen: true, isUpdate: !!record, productData: record }));
    }

    render() {
        return (
            <>
                <h2>Manage Products</h2> <br />

                <div className="align-to-right">
                    <ActionButton
                        text="Add New Product"
                        type="primary"
                        onClickActionFunction={this.openAddUpdateProductModal}
                        itemToArguments={undefined}
                    />
                </div>

                <AddUpdateProductModal
                    isOpen={this.state.addProductOpen}
                    isUpdate={this.state.isUpdate}
                    productData={this.state.productData}
                    handleSave={this.handleSave}
                    handleClose={this.handleClose}>
                </AddUpdateProductModal>

                <Table columns={this.columns} dataSource={this.props.products} />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.products.products
});

const mapDispatchToProps = (dispatch) => ({
    startDeleteProduct: (id) => dispatch(startDeleteProduct(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);