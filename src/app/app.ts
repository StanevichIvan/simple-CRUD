export const createApp = () => {
  return {
    listen(port = 4000) {
      console.log('listening', port);
    },
  };
};
