import { Modal } from 'antd';
const { confirm } = Modal;

export const deleteConfirm = (onOkCallback, onOkArgument) => {
    confirm({
        title: 'Do you want to delete these item?',
        content: 'Items will be removed permanently.',
        onOk: () => {
          onOkCallback(onOkArgument);
        },
        onCancel() {},
      });
}