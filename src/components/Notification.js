import { notification } from 'antd';

const openNotification = (title = '', description = '', duration = 0, type = 'info') => {
    const args = {
      message: title,
      description,
      duration
    };
    notification[type](args);
  };

  export const showInfoNotification = (title, desc, duration) => {
    openNotification(title, desc, duration, 'info');
  };

  export const showErrorNotification = (title, desc, duration) => {
    openNotification(title, desc, duration, 'error');
  };

  export const showSuccessNotification = (title, desc, duration) => {
    openNotification(title, desc, duration, 'success');
  };

  export const showWarningNotification = (title, desc, duration) => {
    openNotification(title, desc, duration, 'warning');
  };

  export const destroyNotifications = () => {
    notification.destroy();
  }

  
