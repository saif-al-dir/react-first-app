import React from 'react';
import Hero from './components/Hero/Hero';
import Container from './components/Container/Container';
import SearchForm from './components/SearchForm/SearchForm';
import List from './components/List/List'; // Assuming List is another component

const App = () => {
  return (
    <Container>
      <Hero />
      <SearchForm />
      <List />
    </Container>
  );
};

export default App;