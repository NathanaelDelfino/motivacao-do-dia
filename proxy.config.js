const proxy = [
    {
      context: '/api',
      target: 'https://mentions-303120.rj.r.appspot.com/mentions',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;