export default function handler (req, res) {

  if(req.method === "GET") handleGet(res);
  else res.status(405).send();

}

function handleGet(res) {
  res.status(200).send({
    id: 3,
    nome: 'Maria',
    email: "email@gmail.com"
  });
}
