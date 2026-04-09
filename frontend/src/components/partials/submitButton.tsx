import { Button } from "@base-ui/react/button";
import { buttonVariants } from "../ui/button";

type SubmitButtonProps = {
  children: React.ReactNode;
};

export default function SubmitButton({ children }: SubmitButtonProps) {
  return (
    <Button
      type="submit"
      className={buttonVariants({
        size: "lg",
        className:
          "w-full shadow-xl py-2.5 px-4 text-[15px] font-medium tracking-wide rounded-lg text-white bg-blue-600! hover:bg-blue-700! focus:outline-none cursor-pointer",
      })}
    >
      {children}
    </Button>
  );
}