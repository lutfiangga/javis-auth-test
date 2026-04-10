import { Button } from "@base-ui/react/button";
import { buttonVariants } from "../ui/button";
import { Loader2 } from "lucide-react";

type SubmitButtonProps = {
  children: React.ReactNode;
  isLoading?: boolean;
};

export default function SubmitButton({ children, isLoading }: SubmitButtonProps) {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={buttonVariants({
        size: "lg",
        className:
          "w-full shadow-xl py-2.5 px-4 text-[15px] font-medium tracking-wide rounded-lg text-white bg-blue-600! hover:bg-blue-700! focus:outline-none cursor-pointer flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed",
      })}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait...
        </>
      ) : (
        children
      )}
    </Button>
  );
}