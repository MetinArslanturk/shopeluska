/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import { startDeleteProduct } from '../../../actions/products';
import { productColumns } from '../../../helpers/productColumns';
import ActionButton from '../../common-components/ActionButton';
import { deleteConfirm } from '../../common-components/ConfirmPopup';
import AddUpdateProductModal from '../../common-components/AddUpdateProductModal';

export class AdminPage extends React.Component {
    state = {
        addProductOpen: false,
        isUpdate: false,
        productData: {},
    };

    columns = [
        ...productColumns,
        {
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
                        id="delete-button"
                        onClickActionFunction={this.handleDelete}
                        itemToArguments={record}
                    />
                </span>
            ),
        },
    ];

    handleDeleteConfirm = (id) => {
        this.props.startDeleteProduct(id);
    };

    handleDelete = (record) => {
        deleteConfirm(this.handleDeleteConfirm, record._id);
    };

    handleClose = () => {
        this.setState(() => ({ addProductOpen: false }));
    };

    handleSave = (/* savedProduct */) => {
        this.setState(() => ({ addProductOpen: false }));
    };

    openAddUpdateProductModal = (record) => {
        this.setState(() => ({
            addProductOpen: true,
            isUpdate: !!record,
            productData: record,
        }));
    };

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
                    handleClose={this.handleClose}
                />
                <Table
                    columns={this.columns}
                    dataSource={this.props.products}
                />
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.products.products,
});

const mapDispatchToProps = (dispatch) => ({
    startDeleteProduct: (id) => dispatch(startDeleteProduct(id)),
});

AdminPage.propTypes = {
    products: PropTypes.array,
    startDeleteProduct: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
