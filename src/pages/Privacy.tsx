import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <PageLayout>
      <PageHero
        title={
          <>
            Privacy <span className="text-primary">Policy</span>
          </>
        }
        description="How PiNE Cleaning collects, uses, and protects the information you share with us."
        backgroundImage="/contact-bg.png"
      />

      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-6 rounded-3xl border border-border bg-white p-8 text-muted-foreground shadow-xl">
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



