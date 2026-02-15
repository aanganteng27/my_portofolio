// src/pages/Home.jsx
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div className="animate-fade-in">
      <Hero />
      {/* Kamu bisa tambah section lain di sini nanti */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <p className="text-slate-400">Section ini akan muncul di halaman Home.</p>
      </section>
    </div>
  )
}

export default Home