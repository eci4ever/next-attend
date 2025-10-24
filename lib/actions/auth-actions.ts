import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

export async function SignInAction(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const result = await auth.api.signInEmail({
    body: {
      email,
      password,
    },
  });

  return result;
}

export async function SignUpAction(prevState: any, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const result = await auth.api.signUpEmail({
    body: {
      name,
      email,
      password,
    },
  });

  return result;
}

// export async function SignOutAction() {
//   await auth.api.signOut({
//     headers: await headers(),
//   });
//   redirect("/signin");
// }
