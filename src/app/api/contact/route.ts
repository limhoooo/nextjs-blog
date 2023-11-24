import { sendEmail } from "@/service/email/email";
import * as yup from "yup";

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

type ResponseParameters = {
  message: string;
};

type ResponseOptions = {
  status: number;
};

const response = (
  { message }: ResponseParameters,
  { status }: ResponseOptions
) => {
  return new Response(JSON.stringify({ message }), { status });
};
export async function POST(req: Request) {
  const body = await req.json();
  if (!bodySchema.isValidSync(body)) {
    return response({ message: "메일 전송에 실패함" }, { status: 400 });
  }
  return sendEmail(body)
    .then(() =>
      response({ message: "메일을 성공적으로 보냈음" }, { status: 200 })
    )
    .catch((err) => {
      console.error(err);
      return response({ message: "메일 전송에 실패함" }, { status: 500 });
    });
}
