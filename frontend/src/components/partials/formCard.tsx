import type { ReactNode } from "react";
import clsx from "clsx";

type FormCardProps = {
  title: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  cardClassName?: string;
  wrapperClassName?: string;
};

export default function FormCard({
  title,
  description,
  children,
  footer,
  imageSrc,
  imageAlt = "auth image",
  imagePosition = "right",
  cardClassName,
  wrapperClassName,
}: FormCardProps) {
  const hasImage = !!imageSrc;

  return (
    <section className="min-h-screen flex items-center justify-center overflow-hidden">
      <div className={clsx("py-6 px-4 w-full", wrapperClassName)}>
        <div
          className={clsx(
            "grid items-center gap-6 max-w-6xl w-full mx-auto",
            hasImage ? "lg:grid-cols-2" : "lg:grid-cols-1"
          )}
        >
          {hasImage && imagePosition === "left" ? (
            <div>
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full aspect-71/50 max-lg:w-4/5 mx-auto block object-cover"
              />
            </div>
          ) : null}

          <div
            className={clsx(
              "border border-slate-300 bg-white rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-lg:mx-auto z-10 w-full",
              cardClassName
            )}
          >
            <div className="mb-6">
              <h1 className="text-slate-900 text-3xl font-semibold">{title}</h1>
              {description ? (
                <p className="text-slate-600 text-[15px] mt-4 leading-relaxed">
                  {description}
                </p>
              ) : null}
            </div>

            {children}

            {footer ? <div className="mt-6">{footer}</div> : null}
          </div>

          {hasImage && imagePosition === "right" ? (
            <div>
              <img
                src={imageSrc}
                alt={imageAlt}
                className="hidden lg:block w-full aspect-71/50 max-lg:w-4/5 mx-auto object-cover"
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}