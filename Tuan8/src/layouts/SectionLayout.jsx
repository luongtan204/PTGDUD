import React from 'react';

const SectionLayout = ({ children, className }) => {
  return (
    <section className={`container mx-auto  ${className}`}>
      {children}
    </section>
  );
};

export default SectionLayout;