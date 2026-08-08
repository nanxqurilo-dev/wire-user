import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal/legal-page";

export const metadata: Metadata = { title: "Terms and Conditions", description: "Terms governing use of the Corvex Steel Wires website and its general informational content.", alternates: { canonical: "/terms" } };

const sections: LegalSection[] = [
  { title: "Website use", paragraphs: ["These terms govern access to and use of the Corvex Steel Wires website. By using the site, you agree to use it lawfully and not to interfere with its operation, attempt unauthorised access, introduce malicious material, misrepresent identity, or use content in a misleading manner."] },
  { title: "Informational content", paragraphs: ["Website content provides general product, capability, industry, and decision guidance. It is not a project design, engineering certification, safety method, legal opinion, or guarantee of suitability. Final decisions require approved project documents and review by appropriately qualified parties."] },
  { title: "Products and specifications", paragraphs: ["Images, diagrams, dimensions, materials, performance descriptions, availability, and configurations may change or require project-specific confirmation. Only an authorised quotation, order acknowledgement, drawing, specification, or contract defines the agreed supply."] },
  { title: "Enquiries and quotations", paragraphs: ["Submitting or preparing an enquiry does not create a contract, reserve production capacity, confirm price, or commit delivery. Quotations may be subject to validity periods, taxes, freight, minimum quantities, technical clarifications, credit approval, and separate commercial conditions."] },
  { title: "Intellectual property", paragraphs: ["The Corvex name, logo, website design, original text, graphics, and other materials are protected by applicable intellectual-property laws. Limited viewing and printing for legitimate project evaluation is permitted. Reproduction, redistribution, modification, or commercial exploitation requires written permission."] },
  { title: "Third-party links", paragraphs: ["External links may be provided for convenience. Corvex does not control or endorse third-party content, security, availability, or privacy practices and is not responsible for losses arising solely from use of those services."] },
  { title: "Liability", paragraphs: ["To the extent permitted by law, Corvex does not warrant uninterrupted access or error-free website content and excludes liability for indirect or consequential loss arising from reliance on general website information. Nothing in these terms excludes rights or liabilities that cannot lawfully be excluded."] },
  { title: "Changes and governing terms", paragraphs: ["Corvex may update the website and these terms. The revision date identifies the current version. Any project supply remains governed by the specific contractual documents agreed for that transaction, which take precedence over these website terms where they conflict."] },
];

export default function TermsPage() { return <LegalPage eyebrow="Legal" title="Website terms" summary="The ground rules for using this website and understanding the limits of general product and project information." updated="8 August 2026" sections={sections} />; }
