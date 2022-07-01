import React, { useState } from 'react';
import Menu from './component/Menu';
import Categories from './component/Categories';
import items from './pages/data';
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  return <h2>menu project setup</h2>;
}

export default App;