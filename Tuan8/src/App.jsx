import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SectionLayout from './layouts/SectionLayout';
import RecipeOfTheDay from './components/RecipeOfTheDay';
import RecipeList from './components/RecipeList';
import VideoRecipes from './components/VideoRecipes';
import EditorsPick from './components/EditorsPick';
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
      <SectionLayout >
      <EditorsPick></EditorsPick>
      </SectionLayout>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;