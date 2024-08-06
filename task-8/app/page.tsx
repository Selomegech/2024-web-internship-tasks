import Image from "next/image";
import LoginForm from "@/app/UI/Loginform";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LoginForm />

    </main>
  );
}
