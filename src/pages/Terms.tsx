import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <PageLayout>
      <PageHero
        title={
          <>
            Terms of <span className="text-primary">Service</span>
          </>
        }
        description="The basic conditions for using the website and requesting services from PiNE Cleaning."
        backgroundImage="/new-images/8 - pine trees.webp"
      />

      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-6 rounded-3xl border border-border bg-white p-8 text-muted-foreground shadow-xl">
            <p>
              By using this site or submitting a contact form, you agree that we may
              contact you about your project by phone or email. Estimates are based
              on the information you provide and may be adjusted after an on-site
              inspection.
            </p>
            <p>
              All work is performed according to the scope agreed upon in writing
              with you. Scheduling is subject to availability and weather conditions.
              Payment terms and warranties may vary by service and will be discussed
              with you before work begins.
            </p>
            <p>
              If you have any questions about these terms, please{" "}
              <Link to="/contact" className="text-primary hover:text-primary-glow">
                contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Terms;



