import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import CardWrapper from "@/components/auth/Card-Wrapper";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      blackButtonHref="/auth/login"
      backButtonLabel="Back to login">
      <div className="w-full flex justify-center items-center">
        <ExclamationTriangleIcon className="text-destructive" />
      </div>
    </CardWrapper>
  );
};
