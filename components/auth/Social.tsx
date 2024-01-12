"use client";

import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";

import { DEFAULT_LOGIN_REDIRECT } from "@/route";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export const Social = () => {
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl");
  const onClick = (provider: "google") => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="flex item w-full gap-x-2">
      <Button
        className="w-full"
        size="lg"
        variant="outline"
        onClick={() => onClick("google")}>
        <FcGoogle />
      </Button>
    </div>
  );
};
