const PrivacyPolicy = () => {
  return (
    <div className="bg-[#f6f7fb] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-semibold text-[#2f3e6e] mb-4">
          Privacy Policy
        </h1>

        <p className="text-sm text-gray-500 mb-8">
          Effective Date: January 23, 2026
        </p>

        {/* Content */}
        <div className="space-y-8 text-gray-700 leading-relaxed text-sm md:text-base">
          
          <p>
            At AAMRK, we respect your privacy and are committed to protecting your personal
            information. This Privacy Policy explains how we collect, use, and safeguard your data
            when you use our website or services.
          </p>

          {/* Section */}
          <div>
            <h2 className="font-semibold text-[#2f3e6e] mb-2">
              Information We Collect
            </h2>
            <p>
              We may collect personal details such as your name, email address, phone number,
              shipping address, billing address, and payment details when you place an order,
              submit a form, or contact us.
            </p>
            <p className="mt-2">
              We may also collect technical information such as IP address, browser type, device
              information, pages visited, and usage data to improve our website performance and
              user experience.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="font-semibold text-[#2f3e6e] mb-2">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Process orders</li>
              <li>Deliver products</li>
              <li>Provide customer support</li>
              <li>Send order updates</li>
              <li>Improve our services</li>
              <li>Send promotional offers (only if you opt-in)</li>
            </ul>
          </div>

          {/* Section */}
          <div>
            <h2 className="font-semibold text-[#2f3e6e] mb-2">
              Payment Security
            </h2>
            <p>
              All payments are processed through secure third-party payment gateways. AAMRK does
              not store your card or payment details.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="font-semibold text-[#2f3e6e] mb-2">
              Cookies
            </h2>
            <p>
              We use cookies to enhance your browsing experience and analyze website traffic. You
              can disable cookies anytime through your browser settings if preferred.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="font-semibold text-[#2f3e6e] mb-2">
              Sharing of Information
            </h2>
            <p>
              We do not sell, rent, or trade your personal information. We may share it only with
              trusted partners such as payment processors, delivery services, and technical service
              providers to help fulfill orders and operate our services.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="font-semibold text-[#2f3e6e] mb-2">
              Data Protection
            </h2>
            <p>
              We implement appropriate technical and organizational security measures to protect
              your personal data. However, no online system can be completely secure.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="font-semibold text-[#2f3e6e] mb-2">
              Your Rights
            </h2>
            <p>
              You have the right to request access, correction, or deletion of your personal data
              by contacting us.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="font-semibold text-[#2f3e6e] mb-2">
              Children’s Privacy
            </h2>
            <p>
              Our website is not intended for children under 13 years of age. We do not knowingly
              collect information from minors.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="font-semibold text-[#2f3e6e] mb-2">
              Policy Updates
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on
              this page with the revised effective date.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-semibold text-[#2f3e6e] mb-2">
              Contact Us
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy, please contact us at:
            </p>
            <p className="mt-2">
              Email:{" "}
              <a
                href="mailto:info@aamrk.com"
                className="text-blue-600 hover:underline"
              >
                info@aamrk.com
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;