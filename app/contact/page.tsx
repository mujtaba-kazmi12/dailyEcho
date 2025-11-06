import Footer from '../components/FooterWrapper';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contactez-nous | DailyEcho',
  description: 'Contactez l\'équipe DailyEcho pour vos questions, suggestions ou propositions d\'articles.',
  keywords: 'contact, DailyEcho, proposer un article, contribution',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0f0f0f' }}>
      <main className="py-16">
        <div className="container mx-auto max-w-7xl px-6">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contactez-nous
            </h1>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#d61935' }}></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Une question, une suggestion, ou envie de publier votre article ? N'hésitez pas à nous contacter !
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-6">Envoyez-nous un message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 rounded"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Adresse e-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 rounded"
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-semibold mb-2">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-red-500 rounded"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="article">Proposer un article</option>
                    <option value="question">Question générale</option>
                    <option value="feedback">Commentaire/Suggestion</option>
                    <option value="partnership">Partenariat</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 rounded resize-none"
                    placeholder="Décrivez votre demande en détail..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-white font-bold uppercase tracking-wide hover:opacity-90 transition-opacity rounded"
                  style={{ backgroundColor: '#d61935' }}
                >
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Contact Info & Submit Article */}
            <div className="space-y-6">
              {/* Submit Your Article */}
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#d61935' }}>
                <h3 className="text-2xl font-bold text-white mb-4">
                  📝 Publiez votre article
                </h3>
                <p className="text-white mb-4 leading-relaxed">
                  Vous avez une histoire à raconter ? Un sujet d'expertise à partager ? 
                  <span className="font-bold"> DailyEcho publie les articles de contributeurs externes !</span>
                </p>
                <div className="bg-white p-4 rounded text-gray-800 space-y-3">
                  <h4 className="font-bold text-lg">Ce que nous recherchons :</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Articles originaux et bien recherchés</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Contenu pertinent et d'actualité</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Perspective unique ou expertise dans un domaine</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Respect des normes éditoriales</span>
                    </li>
                  </ul>
                  <p className="text-xs italic text-gray-600 pt-2">
                    Utilisez le formulaire ci-contre en sélectionnant "Proposer un article" pour soumettre votre contribution.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Informations de contact</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#d61935' }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <p className="text-sm">contact@dailyecho.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#d61935' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-white">Adresse</p>
                      <p className="text-sm">Paris, France</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#d61935' }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-white">Disponibilité</p>
                      <p className="text-sm">Lun - Ven : 9h00 - 18h00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Suivez-nous</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full hover:opacity-80 transition-opacity" style={{ backgroundColor: '#d61935' }}>
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full hover:opacity-80 transition-opacity" style={{ backgroundColor: '#d61935' }}>
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full hover:opacity-80 transition-opacity" style={{ backgroundColor: '#d61935' }}>
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
