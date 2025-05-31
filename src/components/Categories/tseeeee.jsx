import React, { useState } from 'react';
import { Menu, Clock, Users, ChefHat, Star, Search, Filter, ArrowRight, Play, Heart } from 'lucide-react';

// Khmer recipe data
const khmerRecipes = [
  {
    id: 1,
    name: "អាម៉ុក (Fish Amok)",
    nameEn: "Fish Amok",
    category: "main",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400",
    cookTime: "45 mins",
    servings: 4,
    difficulty: "Medium",
    rating: 4.9,
    description: "Cambodia's national dish - creamy fish curry steamed in banana leaves",
    ingredients: [
      "500g white fish fillets (snakehead or catfish)",
      "400ml coconut milk",
      "2 tbsp Khmer curry paste (ប្រហុក)",
      "2 eggs",
      "2 tbsp fish sauce",
      "1 tbsp palm sugar",
      "4-5 kaffir lime leaves",
      "1 Thai eggplant, sliced",
      "Banana leaves for wrapping",
      "Thai basil for garnish"
    ],
    instructions: [
      "Cut fish into bite-sized pieces and marinate with salt",
      "Mix coconut milk with curry paste until smooth",
      "Beat eggs and gradually mix with coconut curry mixture",
      "Add fish sauce and palm sugar, stir well",
      "Add fish pieces and sliced eggplant to the mixture",
      "Line banana leaf cups with the mixture",
      "Steam for 20-25 minutes until set",
      "Garnish with lime leaves and Thai basil",
      "Serve hot with jasmine rice"
    ]
  },
  {
    id: 2,
    name: "សម្លម្ជូរ (Samlor Machu)",
    nameEn: "Sour Soup",
    category: "soup",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400",
    cookTime: "30 mins",
    servings: 6,
    difficulty: "Easy",
    rating: 4.7,
    description: "Traditional Khmer sour soup with fish and vegetables",
    ingredients: [
      "500g fish (catfish or snakehead)",
      "2 tomatoes, cut in wedges",
      "100g pineapple chunks",
      "100g bean sprouts",
      "4-5 okra, sliced",
      "2 tbsp tamarind paste",
      "2 tbsp fish sauce",
      "1 tbsp palm sugar",
      "3-4 Thai chilies",
      "Cilantro and mint for garnish"
    ],
    instructions: [
      "Clean and cut fish into steaks",
      "Boil water in a large pot",
      "Add tamarind paste and bring to boil",
      "Add fish and cook for 10 minutes",
      "Add tomatoes and pineapple, cook 5 minutes",
      "Add okra and bean sprouts",
      "Season with fish sauce and palm sugar",
      "Add chilies to taste",
      "Garnish with fresh herbs and serve"
    ]
  },
  {
    id: 3,
    name: "បាយឆា (Bai Cha)",
    nameEn: "Khmer Fried Rice",
    category: "rice",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400",
    cookTime: "20 mins",
    servings: 4,
    difficulty: "Easy",
    rating: 4.5,
    description: "Fragrant Cambodian-style fried rice with aromatic spices",
    ingredients: [
      "4 cups cooked jasmine rice (day-old)",
      "200g chicken or pork, diced",
      "2 eggs, beaten",
      "3 cloves garlic, minced",
      "2 shallots, sliced",
      "2 tbsp soy sauce",
      "1 tbsp oyster sauce",
      "1 tsp sugar",
      "Green onions, chopped",
      "Cucumber and tomato for serving"
    ],
    instructions: [
      "Heat oil in a wok over high heat",
      "Scramble eggs and set aside",
      "Stir-fry garlic and shallots until fragrant",
      "Add meat and cook until done",
      "Add rice, breaking up clumps",
      "Add soy sauce, oyster sauce, and sugar",
      "Toss everything together for 3-4 minutes",
      "Add scrambled eggs back to the wok",
      "Garnish with green onions and serve with fresh vegetables"
    ]
  },
  {
    id: 4,
    name: "នំបញ្ចុក (Num Banh Chok)",
    nameEn: "Khmer Noodles",
    category: "noodles",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400",
    cookTime: "1 hour",
    servings: 6,
    difficulty: "Hard",
    rating: 4.8,
    description: "Traditional breakfast noodles with fish-based curry",
    ingredients: [
      "500g fresh rice noodles",
      "300g fish fillets",
      "400ml coconut milk",
      "2 tbsp curry paste",
      "2 tbsp fish sauce",
      "1 tbsp palm sugar",
      "Banana flower, sliced thin",
      "Bean sprouts",
      "Cucumber, julienned",
      "Fresh herbs (mint, basil)",
      "Lime wedges"
    ],
    instructions: [
      "Prepare fresh rice noodles or soak dried ones",
      "Make fish curry by cooking fish with curry paste",
      "Add coconut milk and simmer until thick",
      "Season with fish sauce and palm sugar",
      "Prepare all fresh vegetables and herbs",
      "Arrange noodles in serving bowls",
      "Top with warm curry sauce",
      "Serve with fresh vegetables and herbs on the side",
      "Squeeze lime juice before eating"
    ]
  },
  {
    id: 5,
    name: "ស្ងាវ់ (Sngor)",
    nameEn: "Beef Lok Lak",
    category: "beef",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400",
    cookTime: "25 mins",
    servings: 4,
    difficulty: "Medium",
    rating: 4.6,
    description: "Cambodian stir-fried beef with black pepper sauce",
    ingredients: [
      "500g beef sirloin, cubed",
      "2 tbsp oyster sauce",
      "1 tbsp soy sauce",
      "1 tsp ground black pepper",
      "3 cloves garlic, minced",
      "1 onion, sliced",
      "2 tomatoes, cut in wedges",
      "Lettuce leaves",
      "Lime-pepper dipping sauce (ទឹកជ្រលក់)"
    ],
    instructions: [
      "Marinate beef with soy sauce and black pepper",
      "Heat oil in wok over high heat",
      "Stir-fry garlic until fragrant",
      "Add beef and cook quickly to keep tender",
      "Add onions and tomatoes",
      "Season with oyster sauce",
      "Serve over lettuce leaves",
      "Accompany with lime-pepper dipping sauce",
      "Serve with jasmine rice"
    ]
  },
  {
    id: 6,
    name: "នំអន្សម (Num Ansom)",
    nameEn: "Sticky Rice Cake",
    category: "dessert",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    cookTime: "2 hours",
    servings: 8,
    difficulty: "Hard",
    rating: 4.4,
    description: "Traditional Khmer sticky rice cake wrapped in banana leaves",
    ingredients: [
      "2 cups glutinous rice",
      "200g pork belly, diced",
      "100g mung beans, soaked",
      "2 tbsp soy sauce",
      "1 tbsp palm sugar",
      "Salt to taste",
      "Banana leaves",
      "Kitchen string"
    ],
    instructions: [
      "Soak glutinous rice overnight",
      "Cook mung beans until soft",
      "Season pork with soy sauce and sugar",
      "Clean and cut banana leaves into squares",
      "Layer rice, mung beans, and pork on leaves",
      "Wrap tightly and tie with string",
      "Boil wrapped cakes for 1.5-2 hours",
      "Let cool before unwrapping",
      "Serve at room temperature"
    ]
  }
];

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-red-600 to-yellow-500 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8" />
            <div>
              <span className="text-2xl font-bold">ម្ហូបខ្មែរ</span>
              <div className="text-sm opacity-90">Khmer Cuisine</div>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-yellow-200 transition-colors">ទំព័រដើម</a>
            <a href="#recipes" className="hover:text-yellow-200 transition-colors">មុខម្ហូប</a>
            <a href="#categories" className="hover:text-yellow-200 transition-colors">ប្រភេទ</a>
            <a href="#about" className="hover:text-yellow-200 transition-colors">អំពី</a>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-red-400">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="hover:text-yellow-200">ទំព័រដើម</a>
              <a href="#recipes" className="hover:text-yellow-200">មុខម្ហូប</a>
              <a href="#categories" className="hover:text-yellow-200">ប្រភេទ</a>
              <a href="#about" className="hover:text-yellow-200">អំពី</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Banner Component
const Banner = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <section id="home" className="bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">
          រៀនធ្វើម្ហូបខ្មែរ
        </h1>
        <p className="text-xl mb-2">Learn to Cook Authentic Khmer Food</p>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Discover the rich flavors of Cambodia through traditional recipes passed down through generations. From Amok to Num Banh Chok, master the art of Khmer cooking.
        </p>
        
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="ស្វែងរកមុខម្ហូប... Search recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
            <Play className="mr-2 h-5 w-5" />
            ចាប់ផ្តើមធ្វើម្ហូប
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-colors">
            មើលមុខម្ហូប
          </button>
        </div>
      </div>
    </section>
  );
};

// Categories Component
const Categories = ({ onCategorySelect, selectedCategory }) => {
  const categories = [
    { name: 'ទាំងអស់', nameEn: 'All', icon: '🍽️', key: 'all' },
    { name: 'មុខម្ហូបសំខាន់', nameEn: 'Main Dishes', icon: '🍛', key: 'main' },
    { name: 'ស៊ុប', nameEn: 'Soups', icon: '🍲', key: 'soup' },
    { name: 'បាយ', nameEn: 'Rice', icon: '🍚', key: 'rice' },
    { name: 'មី', nameEn: 'Noodles', icon: '🍜', key: 'noodles' },
    { name: 'សាច់គោ', nameEn: 'Beef', icon: '🥩', key: 'beef' },
    { name: 'បង្អែម', nameEn: 'Desserts', icon: '🧁', key: 'dessert' }
  ];

  return (
    <section id="categories" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">ប្រភេទម្ហូប</h2>
          <p className="text-gray-600">Food Categories</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => onCategorySelect(category.key)}
              className={`p-6 rounded-xl transition-all duration-300 text-center ${
                selectedCategory === category.key
                  ? 'bg-red-500 text-white shadow-lg transform scale-105'
                  : 'bg-white hover:shadow-md hover:bg-red-50'
              }`}
            >
              <div className="text-3xl mb-2">{category.icon}</div>
              <div className="font-semibold text-sm mb-1">{category.name}</div>
              <div className="text-xs opacity-70">{category.nameEn}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

// Recipe Card Component
const RecipeCard = ({ recipe, onClick }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
      onClick={() => onClick(recipe)}
    >
      <div className="relative overflow-hidden rounded-t-xl">
        <img 
          src={recipe.image} 
          alt={recipe.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full p-2">
          <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors" />
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{recipe.name}</h3>
        <p className="text-gray-600 mb-2">{recipe.nameEn}</p>
        <p className="text-sm text-gray-500 mb-4">{recipe.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {recipe.cookTime}
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            {recipe.servings} people
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 mr-1 text-yellow-500" />
            {recipe.rating}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            recipe.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
            recipe.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {recipe.difficulty}
          </span>
          <button className="text-red-600 hover:text-red-800 font-semibold flex items-center">
            Cook Now <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Recipe Detail Modal
const RecipeDetail = ({ recipe, onClose }) => {
  if (!recipe) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl max-h-screen overflow-y-auto">
        <div className="relative">
          <img 
            src={recipe.image} 
            alt={recipe.name}
            className="w-full h-64 object-cover rounded-t-xl"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full p-2 hover:bg-white transition-colors"
          >
            <span className="text-xl font-bold">×</span>
          </button>
        </div>
        
        <div className="p-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{recipe.name}</h2>
            <p className="text-xl text-gray-600 mb-4">{recipe.nameEn}</p>
            <p className="text-gray-600">{recipe.description}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center">
              <Clock className="h-6 w-6 text-red-500 mr-2" />
              <div>
                <div className="font-semibold">Cook Time</div>
                <div className="text-sm text-gray-600">{recipe.cookTime}</div>
              </div>
            </div>
            <div className="flex items-center">
              <Users className="h-6 w-6 text-red-500 mr-2" />
              <div>
                <div className="font-semibold">Servings</div>
                <div className="text-sm text-gray-600">{recipe.servings} people</div>
              </div>
            </div>
            <div className="flex items-center">
              <Star className="h-6 w-6 text-yellow-500 mr-2" />
              <div>
                <div className="font-semibold">Rating</div>
                <div className="text-sm text-gray-600">{recipe.rating}/5</div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">គ្រឿងផ្សំ - Ingredients</h3>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">វិធីធ្វើ - Instructions</h3>
              <ol className="space-y-3">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const filteredRecipes = selectedCategory === 'all' 
    ? khmerRecipes 
    : khmerRecipes.filter(recipe => recipe.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Banner />
      <Categories 
        onCategorySelect={setSelectedCategory} 
        selectedCategory={selectedCategory} 
      />
      
      <section id="recipes" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              មុខម្ហូបខ្មែរប្រពៃណី
            </h2>
            <p className="text-gray-600">Traditional Khmer Recipes</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecipes.map((recipe) => (
              <RecipeCard 
                key={recipe.id} 
                recipe={recipe} 
                onClick={setSelectedRecipe}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedRecipe && (
        <RecipeDetail 
          recipe={selectedRecipe} 
          onClose={() => setSelectedRecipe(null)} 
        />
      )}
      
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <ChefHat className="h-8 w-8" />
            <span className="text-2xl font-bold">ម្ហូបខ្មែរ</span>
          </div>
          <p className="text-gray-400 mb-4">
            Preserving and sharing the authentic flavors of Cambodia
          </p>
          <p className="text-sm text-gray-500">
            © 2025 Khmer Cuisine. Made with ❤️ for food lovers everywhere.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;