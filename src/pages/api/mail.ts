// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sgMail from "@sendgrid/mail";
import type { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const mailInfo = {
    from_name: req.body.from_name,
    from_email: req.body.from_email,
    from_phone: req.body.from_phone,
    message: req.body.message,
  };

  const { from_name, from_email, from_phone, message } = mailInfo;

  const email = {
    to: process.env.SENDGRID_TO_EMAIL,
    from: process.env.SENDGRID_TO_EMAIL,
    subject: "Contato - Rio Bonito Privillège - Interesse",
    templateId: process.env.SENDGRID_TEMPLATE_ID,
    dynamic_template_data: {
      from_name,
      from_email,
      from_phone,
      message,
    },
  };

  sgMail.send(email);

  res.status(200).json({ message: "Email enviado com sucesso!" });
}
