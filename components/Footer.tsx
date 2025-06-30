import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Footer = () => {
  return (
    <footer className="text-light-200 py-6">
      <div className="container mx-auto flex flex-col md:flex-row space-y-2 justify-between items-center">
        <p className="text-sm  hover:text-brand-100 transition-all">
          &copy; 2025 GulsahTurcihan
        </p>
        <nav>
          <ul className="flex space-x-4 text-sm">
            <li>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="link"
                    className="hover:underline hover:text-brand-100 cursor-pointer text-light-200"
                    aria-label="Open privacy policy"
                  >
                    Privacy
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl focus:ring-transparent">
                  <DialogHeader>
                    <DialogTitle className="py-4 text-center text-brand">
                      Privacy Policy
                    </DialogTitle>
                  </DialogHeader>
                  <div className="text-sm text-justify text-light-100 space-y-3 px-2">
                    <p>
                      <strong>Effective Date:</strong> 2025
                    </p>
                    <p>
                      Your privacy is important to us. This Privacy Policy
                      explains how we collect, use, and protect your information
                      when you use our Store Management System.
                    </p>
                    <p>
                      <strong>1. Information We Collect</strong>
                      <br />
                      We may collect account information, store data, and usage
                      data.
                    </p>
                    <p>
                      <strong>2. How We Use Your Information</strong>
                      <br />
                      To maintain and improve the service, respond to support
                      requests, and ensure security.
                    </p>
                    <p>
                      <strong>3. Data Security</strong>
                      <br />
                      We take reasonable measures to protect your data but
                      cannot guarantee complete security.
                    </p>
                    <p>
                      <strong>4. Third-Party Services</strong>
                      <br />
                      We do not share your personal data unless required for
                      essential functionality or by law.
                    </p>
                    <p>
                      <strong>5. Your Rights</strong>
                      <br />
                      You can access, correct, or request deletion of your data.
                    </p>
                    <p>
                      <strong>6. Changes</strong>
                      <br />
                      We may update this policy and will post changes here.
                    </p>
                    <p>
                      <strong>Contact Us</strong>
                      <br />
                      gulsahturcihan@gmail.com
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </li>
            <li>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="link"
                    className="hover:underline hover:text-brand-100 cursor-pointer text-light-200"
                    aria-label="Open privacy policy"
                  >
                    About us
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="py-4 text-center text-brand">
                      About Us
                    </DialogTitle>
                  </DialogHeader>
                  <div className="text-sm text-justify text-light-100 space-y-3 px-2">
                    <p>
                      <strong>Welcome to Store Management System</strong>
                    </p>
                    <p>
                      Our mission is to simplify and streamline store operations
                      through intuitive, user-friendly tools. We believe small
                      and medium businesses deserve powerful solutions that are
                      easy to use, accessible anywhere, and optimized for
                      efficiency. From product tracking to inventory control,
                      our goal is to provide a clean and reliable platform that
                      helps business owners focus on what matters—growing their
                      business. Built with modern technologies like Next.js,
                      TypeScript, and Tailwind CSS, our system ensures speed,
                      security, and scalability. Whether you&apos;re uploading
                      files, sharing data, or managing store content, Store
                      Management System offers a smooth and responsive
                      experience.
                    </p>
                    <p>
                      <strong>
                        Built with care, designed for productivity.
                      </strong>
                    </p>
                    <p>
                      Have questions or feedback?
                      <br />
                      <br />
                      <p>
                        <strong>Contact Us: </strong>
                        gulsahturcihan@gmail.com
                      </p>
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </li>
            <li>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="link"
                    className="hover:underline hover:text-brand-100 cursor-pointer text-light-200"
                    aria-label="Open privacy policy"
                  >
                    Contact us
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="py-4 text-center text-brand">
                      Contact us
                    </DialogTitle>
                  </DialogHeader>
                  <div className="text-sm text-justify text-light-100 space-y-3 px-2 mb-4">
                    <p>
                      <strong>We’d love to hear from you!</strong>
                    </p>
                    <p>
                      Have questions, suggestions, or just want to say hello?
                      We&apos;re here to help. You can reach us anytime via
                      email:
                    </p>
                    <p className="text-brand">
                      <strong>gulsahturcihan@gmail.com</strong>
                    </p>
                    <p>
                      <p>
                        <strong>
                          We’ll do our best to respond as quickly as possible.{" "}
                        </strong>
                      </p>
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
export default Footer;
