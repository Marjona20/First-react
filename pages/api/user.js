// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



export default function handler(req, res) {
  console.log(req);
  res.status(200).json({ success: true, data: req.body.name.toUpperCase() })
}
