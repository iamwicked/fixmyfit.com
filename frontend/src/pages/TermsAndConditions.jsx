import { useEffect } from "react";

export default function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full min-h-screen bg-[#FAF3E0] py-8 px-2 sm:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#4A5A6A] mb-4">Terms and Conditions</h1>
        <p className="text-gray-700 mb-2">
          <strong>Effective Date:</strong> [Insert Date]<br />
          <strong>Last Updated:</strong> [Insert Date]
        </p>
        <p className="text-gray-700 mb-6">
          Welcome to FixMyFit! Our terms and conditions govern your use of our services. By accessing or using our services, you agree to the following:
        </p>
        <h2 className="text-xl font-semibold text-[#4A5A6A] mt-8 mb-2">Service Terms</h2>
        <ul className="list-disc ml-6 text-gray-700 mb-4 space-y-1">
          <li><strong>Order acceptance:</strong> We reserve the right to accept or decline any order based on time availability, repair within our expertise, feasibility, fabric condition, or complexity.</li>
          <li><strong>Inspection before repair:</strong> If order is accepted, all items will be inspected before repair. If additional work is required, we will notify the customer for approval before proceeding.</li>
          <li><strong>Timeframes:</strong> Estimated completion times are provided upon order placement. Generally, we repair and deliver orders within 7 to 15 days, but delays may occur due to complexity or unforeseen circumstances. Urgent repairs may be accommodated with an express service fee.
            <ul className="ml-6 list-disc">
              <li>Standard repair: 7-15 days</li>
              <li>Express repair: 1-4 days (additional charges apply)</li>
            </ul>
          </li>
          <li><strong>Quality assurance:</strong> We guarantee our repair work for 15 days under standard conditions. During high demand, processing time may extend to 30–40 days or longer. If the repair fails due to workmanship issues, we will fix it free of charge.</li>
          <li><strong>Customer responsibility:</strong> Customers must ensure items are clean, non-dusty, and disclose any pre-existing damage or special requirements.</li>
          <li><strong>Pricing & payment:</strong> All prices are in CZK (Czech Koruna) and include VAT where applicable. Payment is required in advance or during pickup unless agreed otherwise.</li>
        </ul>
        <h2 className="text-xl font-semibold text-[#4A5A6A] mt-8 mb-2">Refund & Return Policy</h2>
        <ul className="list-disc ml-6 text-gray-700 mb-4 space-y-1">
          <li><strong>Service issues:</strong> If you are unsatisfied, please notify us within 7 days of service completion. We will inspect the issue and attempt to resolve it as per your satisfaction level if possible.</li>
          <li><strong>No refunds:</strong> Since this is a service-based business, we do not offer cash refunds once the repair work has been completed. However, we may offer a free correction if the issue is due to our workmanship. A refund will be provided if we are unable to repair your cloth(es). The refund process may take 10-15 days depending on your bank processing.</li>
          <li><strong>Uncollected Items:</strong> Items must be collected within 30 days of notification. Items not collected within 30 days of completion may be donated or disposed of without compensation.</li>
          <li><strong>Service adjustment:</strong> If a customer is unsatisfied with the repair, we will offer one free adjustment within 7 days of pickup.</li>
        </ul>
        <h2 className="text-xl font-semibold text-[#4A5A6A] mt-8 mb-2">Damage, Liability, & Disclaimer</h2>
        <ul className="list-disc ml-6 text-gray-700 mb-4 space-y-1">
          <li><strong>Pre-existing damage / Customer’s own risk:</strong> We handle garments with care, but we are not liable for pre-existing damage, color fading, shrinkage, or unexpected reactions during repairs.</li>
          <li><strong>Lost or damaged items:</strong> While we take utmost care, in the unlikely event of loss or damage due to our negligence or misplacement of an item(s), compensation will be limited to only the current value of the item or 2x the service cost (excluding sentimental value), this cost may change based on a fair assessment.</li>
          <li><strong>Third-party services:</strong> If we recommend external services (e.g., dry cleaning), we are not responsible for their performance.</li>
        </ul>
        <h2 className="text-xl font-semibold text-[#4A5A6A] mt-8 mb-2">Cancellations & Changes</h2>
        <ul className="list-disc ml-6 text-gray-700 mb-4 space-y-1">
          <li><strong>Cancellation before repair:</strong> You can cancel your order within 24 hours of placing it for a full refund.</li>
          <li><strong>Cancellation after repair starts:</strong> Once the repair process has begun, cancellations are not allowed. If work has already begun, a partial refund may be issued depending on the progress.</li>
        </ul>
        <h2 className="text-xl font-semibold text-[#4A5A6A] mt-8 mb-2">Privacy & Data Protection</h2>
        <p className="text-gray-700 mb-4">
          We collect and process customer data in compliance with EU GDPR. For details, please review our <a href="/privacy-policy" className="underline text-[#4A5A6A]">Privacy Policy</a>.
        </p>
        <h2 className="text-xl font-semibold text-[#4A5A6A] mt-8 mb-2">Dispute Resolution</h2>
        <p className="text-gray-700 mb-4">
          In case of disputes, we encourage direct communication with us to find a possible resolution. If unresolved, disputes will be handled under Czech law through the Czech Trade Inspection Authority.
        </p>
        <h2 className="text-xl font-semibold text-[#4A5A6A] mt-8 mb-2">Changes to Terms</h2>
        <p className="text-gray-700 mb-4">
          We reserve the right to update these Terms. The latest version will always be available on our website.
        </p>
        <h2 className="text-xl font-semibold text-[#4A5A6A] mt-8 mb-2">Contact Us</h2>
        <ul className="ml-6 text-gray-700 mb-2">
          <li>📍 Address: ……</li>
          <li>📧 Email: <a href="mailto:fixmyfit@gmail.com" className="underline text-[#4A5A6A]">fixmyfit@gmail.com</a></li>
        </ul>
        <p className="text-gray-500 text-xs mt-6">
          Current date: Tuesday, April 22, 2025, 6:05 PM IST
        </p>
      </div>
    </main>
  );
}
