import { Button } from "@base-ui/react/button";
import { Input } from "@base-ui/react/input";
import { FiEye, FiEyeOff } from "react-icons/fi";
import type { InputHTMLAttributes } from "react";
import clsx from "clsx";
import { usePasswordStore } from "@/lib/stores/useShowPassword";

type IconPosition = "left" | "right";

type PasswordFieldProps = {
  label: string;
  fieldKey: string;
  iconPosition?: IconPosition;
  containerClassName?: string;
  inputClassName?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

export default function PasswordField({
  label,
  fieldKey,
  iconPosition = "right",
  containerClassName,
  inputClassName,
  ...props
}: PasswordFieldProps) {
  const isVisible = usePasswordStore((state) => state.isVisible(fieldKey));
  const toggle = usePasswordStore((state) => state.toggle);

  const isLeft = iconPosition === "left";
  const isRight = iconPosition === "right";

  return (
    <div className={clsx("space-y-2", containerClassName)}>
      <label className="text-slate-900 text-sm font-medium block">{label}</label>

      <div className="relative flex items-center">
        <Input
          {...props}
          type={isVisible ? "text" : "password"}
          className={clsx(
            "w-full text-sm text-slate-900 border border-slate-300 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600",
            isLeft ? "pl-10 pr-4" : "pl-4",
            isRight ? "pr-10" : "pr-4",
            inputClassName
          )}
        />

        <Button
          type="button"
          onClick={() => toggle(fieldKey)}
          className={clsx(
            "absolute cursor-pointer text-slate-400 hover:text-slate-600",
            isLeft ? "left-3" : "right-3"
          )}
        >
          {isVisible ? (
            <FiEyeOff className="w-[18px] h-[18px]" />
          ) : (
            <FiEye className="w-[18px] h-[18px]" />
          )}
        </Button>
      </div>
    </div>
  );
}