import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: ReactNode;
  description?: ReactNode;
  backgroundImage: string;
  children?: ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}

const PageHero = ({
  title,
  description,
  backgroundImage,
  children,
  align = "center",
  className,
  titleClassName,
}: PageHeroProps) => {
  const isCentered = align === "center";

  return (
    <section
      className={cn(
        "relative flex min-h-[420px] items-center overflow-hidden pt-32 pb-20 md:min-h-[480px] md:pt-40 md:pb-24",
        className
      )}
    >
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt=""
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,18,12,0.68)_0%,rgba(17,32,20,0.58)_35%,rgba(17,32,20,0.72)_100%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "space-y-6",
            isCentered
              ? "mx-auto max-w-4xl text-center"
              : "max-w-3xl text-left"
          )}
        >
          <h1
            className={cn(
              "text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl",
              titleClassName
            )}
          >
            {title}
          </h1>

          {description ? (
            <p
              className={cn(
                "max-w-3xl text-lg leading-relaxed text-white/85 md:text-xl",
                isCentered ? "mx-auto" : "mx-0"
              )}
            >
              {description}
            </p>
          ) : null}

          {children ? (
            <div
              className={cn(
                "flex flex-col gap-4 pt-2 sm:flex-row",
                isCentered ? "justify-center" : "justify-start"
              )}
            >
              {children}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
