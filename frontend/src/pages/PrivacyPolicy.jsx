import { useEffect } from "react";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full min-h-screen bg-[#FAF3E0] py-8 px-2 sm:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#4A5A6A] mb-4">Privacy Policy</h1>
        <p className="text-gray-700 mb-2">
          <strong>Effective Date:</strong> [Insert Date]<br />
          <strong>Last Updated:</strong> [Insert Date]
        </p>
        <p className="text-gray-700 mb-6">
          At FixMyFit, we respect our customer’s privacy and are committed to protecting their personal data. This Privacy Policy explains how we collect, use, and protect customer’s information in compliance with the General Data Protection Regulation (GDPR) (EU 2016/679) and Czech data protection laws.
        </p>
        <h2 className="text-xl font-semibold text-[#4A5A6A] mt-8 mb-2">Who We Are</h2>
        <p className="text-gray-700 mb-4">
          FixMyFit operates as a cloth repair and cloths selling service provider in the Czech Republic. With the aim to store data for legal reasons, we collect and process the following types of personal data:
        </p>
        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li><strong>Identity data:</strong> Name, surname</li>
          <li><strong>Contact data:</strong> Phone number, email address, store address</li>
          <li><strong>Transaction data:</strong> Service details, invoices, payment information</li>
          <li><strong>Communication data:</strong> Messages and interactions with us</li>
          <li><strong>Website data:</strong> Essential cookies for proper webpage functionality</li>
        </ul>
        <h2 className="text-xl font-semibold text-[#4A5A6A] mt-8 mb-2">Customer Support Policy</h2>
        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li><strong>Customer satisfaction first:</strong> We aim to provide high-quality repairs and excellent customer service. If you have any concerns, please contact us immediately.</li>
          <li><strong>Contact methods:</strong> Customers can reach us via phone, email, or in-store visits during business hours.</li>
          <li><strong>Response time:</strong> We strive to respond to all inquiries within 24 hours.</li>
        </ul>
        <h2 className="text-xl font-semibold text-[#4A5A6A] mt-8 mb-2">Why We Collect Customer’s Data</h2>
        <p className="text-gray-700 mb-2">We process your personal data for the following lawful purposes under GDPR:</p>
        <div className="overflow-x-auto">
          <table className="w-full mb-4 border border-[#BFA181] rounded text-gray-700">
            <thead>
              <tr className="bg-[#F6E7D8]">
                <th className="p-2 border-b border-[#BFA181] text-left">Purpose</th>
                <th className="p-2 border-b border-[#BFA181] text-left">Legal Basis under GDPR</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-b border-[#BFA181]">Processing and completing orders</td>
                <td className="p-2 border-b border-[#BFA181]">Contractual necessity (Art. 6(1)(b))</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[#BFA181]">Customer support and inquiries</td>
                <td className="p-2 border-b border-[#BFA181]">Contractual and pre-contractual necessity (Art. 6(1)(b)), Legitimate interest (Art. 6(1)(f))</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[#BFA181]">Sending service updates or marketing (if opted-in)</td>
                <td className="p-2 border-b border-[#BFA181]">Legitimate interest (Art. 6(1)(f)), Consent (Art. 6(1)(a))</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[#BFA181]">Compliance with legal and tax obligations</td>
                <td className="p-2 border-b border-[#BFA181]">Legal obligation (Art. 6(1)(c))</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 className="text-xl font-semibold text-[#4A5A6A] mt-8 mb-2">Data Sharing and Third Parties</h2>
        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>We do not sell or share customer’s personal information with third parties, except in the following cases:</li>
          <li><strong>Service providers:</strong> Payment processors, IT support, or courier services (only when necessary).</li>
          <li><strong>Legal compliance:</strong> If required by law, tax authorities, or regulatory bodies.</li>
          <li>All third parties are required to comply with GDPR and maintain the confidentiality of customer data.</li>
        </ul>
        <h2 className="text-xl font-semibold text-[#4A5A6A] mt-8 mb-2">Data Retention</h2>
        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li><strong>Invoices and financial records:</strong> Kept for 4-5 years (as per Czech tax laws).</li>
          <li><strong>General inquiries and communication:</strong> Retained for up to 1 year.</li>
          <li><strong>Marketing communications:</strong> Until you withdraw consent.</li>
          <li>After the retention period, your data will be securely deleted or anonymized.</li>
        </ul>
        <h2 className="text-xl font-semibold text-[#4A5A6A] mt-8 mb-2">Your Rights under GDPR</h2>
        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>✅ Right to access – Request a copy of your personal data.</li>
          <li>✅ Right to rectification – Correct any inaccurate or incomplete data.</li>
          <li>✅ Right to erasure ("Right to be forgotten") – Request deletion of your data, except where legally required.</li>
          <li>✅ Right to withdraw consent – Stop receiving marketing communications at any time.</li>
          <li>✅ Right to restrict processing – Limit how we use your data.</li>
          <li>✅ Right to data portability – Request a transfer of your data to another service provider.</li>
          <li>✅ Right to object – Object to processing based on legitimate interests.</li>
          <li>To exercise these rights, please contact us at <a href="mailto:fixmyfit@gmail.com" className="underline text-[#4A5A6A]">fixmyfit@gmail.com</a> or our helpline number.</li>
        </ul>
        <h2 className="text-xl font-semibold text-[#4A5A6A] mt-8 mb-2">Cookies Policy</h2>
        <p className="text-gray-700 mb-4">
          Our website uses cookies to enhance user experience and collect analytics. You can manage cookie preferences in your browser settings.
        </p>
        <h2 className="text-xl font-semibold text-[#4A5A6A] mt-8 mb-2">Security Measures</h2>
        <p className="text-gray-700 mb-4">
          We implement technical and organizational security measures to protect your data from unauthorized access, loss, or misuse.
        </p>
        <h2 className="text-xl font-semibold text-[#4A5A6A] mt-8 mb-2">Updates to this Policy</h2>
        <p className="text-gray-700 mb-4">
          We may update this policy from time to time to comply with legal changes and make customer’s privacy secure. The latest version will always be available on our website.
        </p>
        <h2 className="text-xl font-semibold text-[#4A5A6A] mt-8 mb-2">Contact Us</h2>
        <p className="text-gray-700 mb-2">
          For any questions about this policy or your data rights, please contact us:
        </p>
        <ul className="ml-6 text-gray-700 mb-2">
          <li>📍 Address: ………</li>
          <li>📧 Email: <a href="mailto:fixmyfit@gmail.com" className="underline text-[#4A5A6A]">fixmyfit@gmail.com</a></li>
        </ul>
        <p className="text-gray-500 text-xs mt-6">
          Current date: Tuesday, April 22, 2025, 6:03 PM IST
        </p>
      </div>
    </main>
  );
}
