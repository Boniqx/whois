// src/api.ts

export interface WhoisResponse {
    domainName: string;
    registrarName: string;
    registrationDate: string;
    dataError?: string;
    expirationDate: string;
    estimatedDomainAge: string;
    hostnames: string[];
    registrantName?: string;
    technicalContactName?: string;
    administrativeContactName?: string;
    contactEmail?: string;
  }
  
  export const fetchWhoisData = async (
    domain: string,
    outputFormat: string = 'JSON'
  ): Promise<WhoisResponse> => {
    const url = `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=${process.env.NEXT_PUBLIC_WHOIS_API_KEY}&domainName=${domain}&outputFormat=${outputFormat}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
  
      // Here we map the response to our WhoisResponse interface
      const whoisData: WhoisResponse = {
        domainName: data.WhoisRecord.domainName,
        registrarName: data.WhoisRecord.registrarName,
        registrationDate: data.WhoisRecord.createdDate,
        expirationDate: data.WhoisRecord.expiresDate,
        estimatedDomainAge: data.WhoisRecord.estimatedDomainAge,
        hostnames: data.WhoisRecord.nameServers.hostNames || [],
        registrantName: data.WhoisRecord.registrant?.name,
        technicalContactName: data.WhoisRecord.technicalContact?.name,
        administrativeContactName: data.WhoisRecord.administrativeContact?.name,
        contactEmail: data.WhoisRecord.contactEmail,
        dataError: data.WhoisRecord.dataError,
      };
  
      return whoisData;
    } catch (error) {
      console.error('Failed to fetch Whois data:', error);
      throw error;
    }
  };
  