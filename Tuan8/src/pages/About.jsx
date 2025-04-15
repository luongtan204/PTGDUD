import React from 'react';
import MainLayout from '../layouts/MainLayout';
import SectionLayout from '../layouts/SectionLayout';

const About = () => {
  return (
    <MainLayout>
      {/* Section 1 */}
      <SectionLayout
        title="About Us"
        subtitle="Learn more about our mission and values"
      >
        <p className="text-gray-700">
          Welcome to Cheffify, your go-to platform for discovering amazing recipes and cooking tips.
        </p>
      </SectionLayout>

      {/* Section 2 */}
      <SectionLayout title="Our Team">
        <p className="text-gray-700">
          Our team is dedicated to bringing you the best culinary experiences.
        </p>
      </SectionLayout>
    </MainLayout>
  );
};

export default About;