import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const { pathname } = useLocation();
  const isContactPage = pathname === "/contact";

  return (
    <div className="relative min-h-screen flex flex-col">
      {isContactPage && (
        <div className="absolute inset-0">
          <img
            src="/new-images/8 - pine trees.webp"
            alt=""
            className="h-full w-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,16,10,0.72)_0%,rgba(10,22,13,0.55)_45%,rgba(9,18,12,0.74)_100%)]" />
        </div>
      )}
      <Navigation />
      <main className="relative z-10 flex-1">
        {children}
      </main>
      <div className="relative z-10">
        <Footer useBackground={!isContactPage} />
      </div>
    </div>
  );
};

export default PageLayout;