import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import Fairy from './components/fairy'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <Fairy />
      </main>

      <Footer />
    </div>
  )
}

export default App