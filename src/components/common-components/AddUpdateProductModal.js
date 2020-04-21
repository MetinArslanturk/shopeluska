import React from 'react';
import { connect } from 'react-redux';
import { startAddProduct, startUpdateProduct } from '../../actions/products'
import { Form, Input, Modal, Select } from 'antd';

const { Option } = Select;

export const AddUpdateProductModal = ({ isOpen, startAddProduct, startUpdateProduct, isUpdate, productData, handleClose, handleSave }) => {
    const [form] = Form.useForm();

    const onFinish = values => {
        values.price = Number(values.price);
        values.stock = Number(values.stock);

        if (!isUpdate) {
            startAddProduct(values).then(res => {
                handleSave(res);
            }).catch(err => {
                // optional action
            });
        } else {
            values._id = productData._id;
            startUpdateProduct(values).then(res => {
                handleSave(res);
            }).catch(err => {
                // optional action
            });
        }

    };



    const initialValues = isUpdate ? productData : { name: '', description: '', price: 0.0, stock: 0, imageUrl: '', category: undefined };


    // Tricky solution for logical error in ant design setting form initial value dynamically
    if (isOpen) {
        setTimeout(() => {
            form.setFieldsValue(initialValues);
        }, 100);
    }


    return (
        <>
            <Modal
                title={isUpdate ? 'Update Product' : 'Add Product'}
                visible={isOpen}
                onCancel={handleClose}
                okButtonProps={{ onClick: () => { form.submit() } }}
            >
                <Form
                    name="basic"
                    form={form}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Name"
                        name="name"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Description"
                        name="description"
                    >
                        <Input.TextArea rows={4} />
                    </Form.Item>
                    <Form.Item
                        name="category"
                        label="Category"
                        hasFeedback
                    >
                        <Select placeholder="Please select category" removeIcon>
                            <Option value="clothing">Clothing</Option>
                            <Option value="shoes">Shoes</Option>
                            <Option value="accessories">Accessories</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Price"
                        name="price"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Stock"
                        name="stock"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Image Url"
                        name="imageUrl"
                    >
                        <Input />
                    </Form.Item>

                </Form>
            </Modal>
        </>
    );
}

const mapDispatchToProps = (dispatch) => ({
    startAddProduct: (productData) => dispatch(startAddProduct(productData)),
    startUpdateProduct: (productData) => dispatch(startUpdateProduct(productData))
});

export default connect(undefined, mapDispatchToProps)(AddUpdateProductModal)
