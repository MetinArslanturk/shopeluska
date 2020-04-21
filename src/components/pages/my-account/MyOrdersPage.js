import React from 'react';
import { connect } from 'react-redux'
import { Table } from 'antd';

export class MyOrdersPage extends React.Component {
    columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          render: text => <>{text}</>,
        },
        {
          title: 'Age',
          dataIndex: 'age'
        },
        {
          title: 'Address',
          dataIndex: 'address'
        },
        {
          title: 'Action',
          dataIndex: 'action',
          render: (text, record) => (
            <span>
              <button style={{ marginRight: 16 }} onClick={this.clickd}>Invite {record.name}</button>
            </span>
          ),
        },
      ];
      data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ];

    clickd = () => {
        console.log('here');
    }
    render() {
        return (
            <>
                My Orders page.
                <Table columns={this.columns} dataSource={this.data} />
            </>
        )
    }
}

export default connect(undefined)(MyOrdersPage);