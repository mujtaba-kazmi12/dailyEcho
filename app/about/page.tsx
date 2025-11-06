import Footer from '../components/FooterWrapper';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos de DailyEcho | Votre Source d\'Actualités',
  description: 'Découvrez DailyEcho, votre plateforme d\'actualités de confiance. Nous publions également les articles de nos contributeurs.',
  keywords: 'À propos, DailyEcho, actualités, blog, contributeurs',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0f0f0f' }}>
      <main className="py-16">
        <div className="container mx-auto max-w-7xl px-6">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              À propos de DailyEcho
            </h1>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#d61935' }}></div>
          </div>

          {/* Content */}
          <div className="space-y-8 text-gray-300 leading-relaxed">
            {/* Introduction */}
            <section className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">Qui sommes-nous ?</h2>
              <p className="mb-4">
                Bienvenue sur <span className="text-white font-semibold">DailyEcho</span>, votre source d'actualités de confiance pour rester informé sur les événements qui façonnent notre monde. Depuis notre création, nous nous engageons à fournir des informations précises, pertinentes et à jour sur une variété de sujets allant de la politique et l'économie aux sports, technologies et culture.
              </p>
              <p>
                Notre mission est simple : <span className="text-white font-semibold">vous tenir informé</span> avec du contenu de qualité, fiable et accessible à tous, où que vous soyez.
              </p>
            </section>

            {/* Our Values */}
            <section className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">Nos valeurs</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#d61935' }}>
                    📰 Intégrité journalistique
                  </h3>
                  <p className="text-sm">
                    Nous nous engageons à publier des informations vérifiées et objectives, sans parti pris.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#d61935' }}>
                    🌍 Couverture mondiale
                  </h3>
                  <p className="text-sm">
                    Des actualités locales aux événements internationaux, nous couvrons tout ce qui compte.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#d61935' }}>
                    ⚡ Rapidité et réactivité
                  </h3>
                  <p className="text-sm">
                    Nous mettons à jour nos contenus en temps réel pour vous tenir au courant des dernières nouvelles.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#d61935' }}>
                    👥 Communauté engagée
                  </h3>
                  <p className="text-sm">
                    Nous valorisons nos lecteurs et créons une plateforme ouverte au dialogue et au partage.
                  </p>
                </div>
              </div>
            </section>

            {/* Become a Contributor */}
            <section className="p-8 rounded-lg" style={{ backgroundColor: '#d61935' }}>
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  ✍️ Devenez contributeur !
                </h2>
                <p className="text-white mb-6 leading-relaxed">
                  Vous êtes passionné(e) par l'écriture et souhaitez partager vos connaissances ou votre expertise ? <span className="font-bold">DailyEcho accueille les contributions</span> de rédacteurs externes !
                </p>
                <div className="bg-white p-6 rounded-lg text-gray-800">
                  <h3 className="text-xl font-bold mb-3">Comment publier votre article ?</h3>
                  <ul className="text-left space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="font-bold mr-2" style={{ color: '#d61935' }}>1.</span>
                      <span>Rédigez votre article sur un sujet d'actualité ou de votre domaine d'expertise</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2" style={{ color: '#d61935' }}>2.</span>
                      <span>Contactez-nous via notre page de contact avec votre proposition</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2" style={{ color: '#d61935' }}>3.</span>
                      <span>Notre équipe examinera votre contenu et le publiera si approuvé</span>
                    </li>
                  </ul>
                  <p className="text-sm italic text-gray-600">
                    Tous les articles soumis doivent respecter nos standards éditoriaux et être originaux.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact CTA */}
            <section className="bg-gray-900 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Rejoignez notre communauté</h2>
              <p className="mb-6">
                Que vous soyez un lecteur fidèle ou un futur contributeur, nous serions ravis d'avoir de vos nouvelles.
              </p>
              <a 
                href="/contact" 
                className="inline-block px-8 py-4 text-white font-bold uppercase tracking-wide hover:opacity-90 transition-opacity rounded"
                style={{ backgroundColor: '#d61935' }}
              >
                Contactez-nous
              </a>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
