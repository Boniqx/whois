// src/components/ContactInformation.tsx

import React from 'react';

interface ContactInformationProps {
  data: {
    registrantName?: string;
    technicalContactName?: string;
    administrativeContactName?: string;
    contactEmail?: string;
  };
}

const ContactInformation: React.FC<ContactInformationProps> = ({ data }) => {
  return (
    <>
      <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 text-left font-semibold">Field</th>
            <th className="border border-gray-300 p-2 text-left font-semibold">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">Registrant Name</td>
            <td className="border border-gray-300 p-2">{data.registrantName || 'N/A'}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Technical Contact Name</td>
            <td className="border border-gray-300 p-2">{data.technicalContactName || 'N/A'}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Administrative Contact Name</td>
            <td className="border border-gray-300 p-2">{data.administrativeContactName || 'N/A'}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Contact Email</td>
            <td className="border border-gray-300 p-2">{data.contactEmail || 'N/A'}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ContactInformation;
