import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SectionLayout from './layouts/SectionLayout';
import RecipeOfTheDay from './components/RecipeOfTheDay';
import RecipeList from './components/RecipeList';
import VideoRecipes from './components/VideoRecipes';
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Recipe of the Day */}
      <SectionLayout className="bg-red-500 ">
        <RecipeOfTheDay></RecipeOfTheDay>
      </SectionLayout>

      {/* This Summer Recipes */}
      <SectionLayout >
        <RecipeList></RecipeList>
      </SectionLayout>

      {/* Recipes With Videos */}
      <SectionLayout >
        <VideoRecipes></VideoRecipes>
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