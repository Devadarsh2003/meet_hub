import { Button } from "@/components/ui/button";
import { SignedOut, SignInButton, UserButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";


export default function Home() {
  return (
    <div className='m-10'>
      <SignedOut>
        <SignInButton />
      </SignedOut>
        <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
