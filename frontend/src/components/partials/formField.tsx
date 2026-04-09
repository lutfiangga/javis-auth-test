import { Input } from "@base-ui/react/input";
import type { ComponentType, InputHTMLAttributes } from "react";
import clsx from "clsx";

type IconPosition = "left" | "right";

type FormFieldProps = {
  label: string;
  icon?: ComponentType<{ className?: string }>;
  iconPosition?: IconPosition;
  containerClassName?: string;
  inputClassName?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function FormField({
  label,
  icon: Icon,
  iconPosition = "right",
  containerClassName,
  inputClassName,
  ...props
}: FormFieldProps) {
  const hasLeftIcon = !!Icon && iconPosition === "left";
  const hasRightIcon = !!Icon && iconPosition === "right";

  return (
    <div className={clsx("space-y-2", containerClassName)}>
      <label className="text-slate-900 text-sm font-medium block">{label}</label>

      <div className="relative flex items-center">
        <Input
          {...props}
          className={clsx(
            "w-full text-sm text-slate-900 border border-slate-300 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600",
            hasLeftIcon ? "pl-10 pr-4" : "pl-4",
            hasRightIcon ? "pr-10" : "pr-4",
            inputClassName
          )}
        />

        {Icon ? (
          <Icon
            className={clsx(
              "w-[18px] h-[18px] text-slate-400 absolute pointer-events-none",
              iconPosition === "left" ? "left-3" : "right-3"
            )}
          />
        ) : null}
      </div>
    </div>
  );
}