import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <PageLayout>
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold heading-caps text-foreground">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              This page explains how PiNE Cleaning collects, uses, and protects
              information when you use our website and services.
            </p>
          </div>

          <div className="space-y-6 text-muted-foreground">
            <p>
              We use the information you provide (such as your name, email, phone
              number, and project details) only to respond to your inquiries, provide
              estimates, and deliver our services. We do not sell your information to
              third parties.
            </p>
            <p>
              Basic analytics may be used to understand how visitors use our site so
              we can improve our content and services. Any analytics data is
              aggregated and not used to personally identify you.
            </p>
            <p>
              If you have questions about how your information is handled, you can
              reach out to us any time through our{" "}
              <Link to="/contact" className="text-primary hover:text-primary-glow">
                contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Privacy;



