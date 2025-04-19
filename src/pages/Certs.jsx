import React, { useState } from 'react';

export default function Certs() {
  const certs = {
    LLMs: [
      { title: 'LLM & Miccrosoft Azure Workshop', issuer: 'NTU CCDS', link: 'https://api.badgr.io/public/assertions/QbIopf_zSAGvDcn7tml5uA?identity__email=CLIM153%40E.NTU.EDU.SG' },
      { title: 'LangChain for LLM Application Development', issuer: 'DeepLearning.AI', link: 'https://learn.deeplearning.ai/accomplishments/4b40f07c-4886-4532-bbdf-208a18531db8?usp=sharing' },
      { title: 'How Transformer LLMs Work', issuer: 'DeepLearning.AI', link:'https://learn.deeplearning.ai/accomplishments/cc98e320-2c35-437a-bbd1-2454c9ae7e42?usp=sharing' },
      { title: 'Google Prompting Essentials', issuer: 'Coursera', link: 'https://coursera.org/share/bb2e05cc2cfd26d408486d1b75106d4c'}
    ],
    CV: [
      { title: 'Build a computer vision app with Azure Cognitive Services', issuer: 'Coursera', link: 'https://coursera.org/share/8e343bd1250622cd4aaec7d6ed6590cc'},
    ],
    'Deep Learning': [
      
    ],
    'Software Engineering': [
      
    ],
    'Machine Learning': [

    ],
    'Others': [
      { title: 'Aromatherapy', issuer: 'Coursera', link: 'https://coursera.org/share/5c7f9882c9b098cba77ede16308af7be'},
    ],
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Digital Certificates</h1>
      
      {/* Certificate Display */}
      {Object.entries(certs).map(([category, certificates]) => (
        <div key={category} className="mb-6">
          <h2 className="text-xl font-bold mb-2">{category}</h2>
          {certificates.length === 0 ? (
            <p className="text-gray-500">No certificates available.</p>
          ) : (
            <ul className="list-disc pl-5">
              {certificates.map((cert, index) => (
                <li key={index}>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    {cert.title} ({cert.issuer})
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}