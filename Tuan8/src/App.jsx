import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SectionLayout from './layouts/SectionLayout';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Recipe of the Day */}
      <SectionLayout className="bg-red-500 py-12">
        <h2 className="text-2xl font-bold text-gray-800">Recipe of the Day</h2>
        <p className="text-gray-600 mt-4">
          Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, and balsamic vinegar.
        </p>
      </SectionLayout>

      {/* This Summer Recipes */}
      <SectionLayout className="bg-blue-900 py-12">
        <h2 className="text-2xl font-bold text-gray-800">This Summer Recipes</h2>
        <p className="text-gray-600 mt-4">
          We have all your Independence Day sweets covered.
        </p>
      </SectionLayout>

      {/* Recipes With Videos */}
      <SectionLayout className="bg-red-500 py-12">
        <h2 className="text-2xl font-bold text-gray-800">Recipes With Videos</h2>
        <p className="text-gray-600 mt-4">
          Cooking up culinary creations with step-by-step videos.
        </p>
      </SectionLayout>

      {/* Editor's Pick */}
      <SectionLayout className="bg-gray-100 py-12">
        <h2 className="text-2xl font-bold text-gray-800">Editor's Pick</h2>
        <p className="text-gray-600 mt-4">
          Curated culinary delights: handpicked favorites by our expert editors!
        </p>
      </SectionLayout>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;