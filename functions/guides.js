exports.handler = async (event, context) => {
  const guides = [
    { title: 'Beat all Zelda Bosses Like a Boss', author: 'Mario' },
    { title: 'Mario Kart Shortcuts You Never Knew Existed', author: 'Luigi' },
    { title: 'Ultimate Street Fighter Guide', author: 'Ryuken' },
  ];

  if (context.clientContext.user) {
    return {
      statusCode: 200,
      body: JSON.stringify(guides),
    };
  }

  return {
    statusCode: 401,
    body: JSON.stringify({
      message: 'ah,ah,ah you must be logged in to see this content',
    }),
  };
};
