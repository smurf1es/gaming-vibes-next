exports.handler = async () => {
  console.log('function runs');

  const data = {
    name: 'Luigi',
    age: 31,
    job: 'Pizza Seller',
  };
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
