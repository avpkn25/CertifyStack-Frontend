import React from 'react';
import Navbar from '../../Navbar/Navbar'
import './Certifications.css';

const certificationsData = [
  {
    domain: 'AWS',
    certifications: [
      { name: 'AWS Certified Solutions Architect', link: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/' },
      { name: 'AWS Certified Developer', link: 'https://aws.amazon.com/certification/certified-developer-associate/' },
    ],
  },
  {
    domain: 'Red Hat',
    certifications: [
      { name: 'Red Hat Certified System Administrator (RHCSA)', link: 'https://www.redhat.com/en/services/certification/rhcsa' },
      { name: 'Red Hat Certified Enterprise Application Developer', link: 'https://www.redhat.com/en/services/certification/rhcead' },
    ],
  },
  {
    domain: 'Google Cloud',
    certifications: [
      { name: 'Google Associate Cloud Engineer', link: 'https://cloud.google.com/certification/cloud-engineer' },
      { name: 'Google Professional Cloud Architect', link: 'https://cloud.google.com/certification/cloud-architect' },
    ],
  },
  {
    domain: 'Microsoft',
    certifications: [
      { name: 'Microsoft Certified: Azure Fundamentals', link: 'https://learn.microsoft.com/en-us/certifications/azure-fundamentals/' },
      { name: 'Microsoft Certified: Azure Solutions Architect Expert', link: 'https://learn.microsoft.com/en-us/certifications/azure-solutions-architect/' },
    ],
  },
];

const Certifications = () => {
  return (
    <>
    <Navbar/>
    <div className="certifications-page"><br/><br/><br/>
      <h1  >Skill Certifications</h1>
      {certificationsData.map((domainData, index) => (
        <div key={index} className="domain-section">
          <h2>{domainData.domain}</h2>
          <ul>
            {domainData.certifications.map((cert, certIndex) => (
              <li key={certIndex}>
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  {cert.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </>
  );
};

export default Certifications;
