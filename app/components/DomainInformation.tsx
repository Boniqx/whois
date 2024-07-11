
import React from 'react';
import TruncatedText from './TruncatedText';

interface DomainInformationProps {
  data: {
    domainName: string;
    registrarName: string;
    registrationDate: string;
    expirationDate: string;
    estimatedDomainAge: string;
    hostnames: string[];
  };
}

const DomainInformation: React.FC<DomainInformationProps> = ({ data }) => {
  return (
    <>
      <h2 className="text-lg font-semibold mb-2">Domain Information</h2>
      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 text-left font-semibold">Field</th>
            <th className="border border-gray-300 p-2 text-left font-semibold">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">Domain Name</td>
            <td className="border border-gray-300 p-2">{data.domainName}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Registrar Name</td>
            <td className="border border-gray-300 p-2">{data.registrarName}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Registration Date</td>
            <td className="border border-gray-300 p-2">{data.registrationDate}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Expiration Date</td>
            <td className="border border-gray-300 p-2">{data.expirationDate}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Estimated Domain Age</td>
            <td className="border border-gray-300 p-2">{data.estimatedDomainAge}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Hostnames</td>
            <td className="border border-gray-300 p-2">
              <TruncatedText text={data.hostnames.join(', ')} maxLength={25} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default DomainInformation;
