import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
import SiteDescription from '../components/SiteDescription'

export default function Home() {
  return (
    <main>
      <SiteDescription />
      <SearchForm />
      <CocktailList />
    </main>
  )
}
