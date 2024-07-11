import React, { useState } from 'react';
import { useWhoisLookup } from '../utils/handleLookUpHook';
import Loader from './Loader';
import DomainInformation from './DomainInformation';
import ContactInformation from './ContactInformation';
import DomainForm from './DomainForm';

const WhoisLookup: React.FC = () => {
  const [infoType, setInfoType] = useState<'domain' | 'contact'>('domain'); // New state for information type

  const { data, error, isLoading, lookup } = useWhoisLookup();

  const handleLookup = (domain: string) => {
    lookup(domain);
  };

  return (
    <div className="min-h-screen min-w-[600px] bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-semibold mb-4">Whois Lookup</h1>
      <div className="flex flex-row gap-2 items-center mb-4">
        <DomainForm onSubmit={(domain) => handleLookup(domain)} />
      </div>
      <div className="mb-4">
        <label htmlFor="infoType" className="mr-2 font-semibold">Select Information Type:</label>
        <select
          id="infoType"
          value={infoType}
          onChange={(e) => setInfoType(e.target.value as 'domain' | 'contact')}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="domain">Domain Information</option>
          <option value="contact">Contact Information</option>
        </select>
      </div>
      {isLoading && <Loader />}
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {data && (
        <div className="w-full max-w-2xl bg-white p-4 rounded shadow-md">
          {infoType === 'domain' && (
            <DomainInformation data={data} />
          )}
          {infoType === 'contact' && (
            <>
            <ContactInformation data={data} />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default WhoisLookup;
