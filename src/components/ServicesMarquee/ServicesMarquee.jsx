import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import './ServicesMarquee.css';

export default function ServicesMarquee() {
  const services = siteConfig.marqueeItems && siteConfig.marqueeItems.length > 0
    ? siteConfig.marqueeItems
    : [
        'Micropigmentação Fio a Fio',
        'Design de Sobrancelhas Visagista',
        'Revitalização Labial',
        'Spa Facial & Limpeza Profunda',
        'Efeito Shadow Line',
        'Neutralização de Lábios Escuros',
        'Atendimento Masculino & Feminino',
        'Formação Profissional PMU',
        'Autoestima & Naturalidade'
      ];

  // Duplicamos a lista algumas vezes para garantir o loop contínuo perfeito na tela inteira
  const marqueeItems = [...services, ...services, ...services, ...services];

  return (
    <div className="services-marquee">
      <div className="services-marquee__track">
        {marqueeItems.map((service, index) => (
          <span key={index} className="services-marquee__item">
            {service}
            <span className="services-marquee__separator">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
