const handler = async (m, {conn, command}) => {
  console.log(Ivan);
  new Error('This is an error');
};
handler.command = /^(omg)$/i;
handler.owner = true;
export default handler;
