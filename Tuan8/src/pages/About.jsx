import React from 'react';
import MainLayout from '../layouts/MainLayout';
import SectionLayout from '../layouts/SectionLayout';

const About = () => {
  return (
    <MainLayout>
      {/* Section 1: About Us */}
      <SectionLayout
        title="About Us"
        subtitle="Learn more about our mission and values"
        className="bg-gray-100 py-12"
      >
        <p className="text-gray-700">
          Welcome to Cheffify, your go-to platform for discovering amazing recipes and cooking tips.
        </p>
      </SectionLayout>

      {/* Section 2: Our Team */}
      <SectionLayout
        title="Our Team"
        className="bg-white py-12"
      >
        <p className="text-gray-700">
          Our team is dedicated to bringing you the best culinary experiences.
        </p>
      </SectionLayout>

      {/* Section 3: Contact Us */}
      <SectionLayout
        title="Contact Us"
        subtitle="We'd love to hear from you!"
        className="bg-gray-50 py-12"
      >
        <p className="text-gray-700">
          Feel free to reach out to us for any inquiries or feedback.
        </p>
      </SectionLayout>
    </MainLayout>
  );
};

export default About;