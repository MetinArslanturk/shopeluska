import React from 'react';
import { connect } from 'react-redux';
import ActionButton from '../ActionButton';
import AddUpdateProductModal from '../AddUpdateProductModal';
import { Table } from 'antd';

export class AdminPage extends React.Component {

    state = {
        addProductOpen: false,
        isUpdate: false,
        productData: {}
    };


    productColumns = [
        {
          title: 'Name',
          dataIndex: 'name'
        },
        {
          title: 'Description',
          dataIndex: 'description'
        },
        {
            title: 'Price',
            dataIndex: 'price'
        },
        {
          title: 'Stock',
          dataIndex: 'stock'
        },
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
                      onClickActionFunction={this.openAddUpdateProductModal}
                      itemToArguments={record}
                  />
              </span>
          ),
        },
      ];


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
                Manage Products <br />

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

                <Table columns={this.productColumns} dataSource={this.props.products} />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.products.products
})

export default connect(mapStateToProps)(AdminPage);