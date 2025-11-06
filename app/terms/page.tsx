import Footer from '../components/FooterWrapper';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conditions d\'Utilisation | DailyEcho',
  description: 'Lisez les conditions d\'utilisation de DailyEcho avant d\'utiliser notre plateforme.',
  keywords: 'conditions, utilisation, termes, DailyEcho, légal',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0f0f0f' }}>
      <main className="py-16">
        <div className="container mx-auto max-w-7xl px-6">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Conditions d'Utilisation
            </h1>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#d61935' }}></div>
            <p className="text-gray-400 text-sm">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-gray-300 leading-relaxed">
            {/* Introduction */}
            <section className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p className="mb-4">
                Bienvenue sur <span className="text-white font-semibold">DailyEcho</span>. En accédant et en utilisant ce site web, vous acceptez d'être lié par les présentes conditions d'utilisation, toutes les lois et réglementations applicables.
              </p>
              <p className="font-semibold text-white">
                Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.
              </p>
            </section>

            {/* Acceptance */}
            <section className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptation des conditions</h2>
              <p>
                L'utilisation de DailyEcho implique l'acceptation pleine et entière des présentes conditions d'utilisation. Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications prendront effet dès leur publication sur cette page.
              </p>
            </section>

            {/* Access */}
            <section className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">2. Accès au site</h2>
              <ul className="space-y-3 ml-6 list-disc">
                <li>L'accès à DailyEcho est gratuit et ouvert à tous</li>
                <li>Nous nous réservons le droit de restreindre ou suspendre l'accès sans préavis</li>
                <li>Vous êtes responsable de la sécurité de votre connexion internet</li>
                <li>Certains services peuvent nécessiter une inscription préalable</li>
              </ul>
            </section>

            {/* Content Usage */}
            <section className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">3. Utilisation du contenu</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#d61935' }}>
                    ✅ Vous pouvez :
                  </h3>
                  <ul className="space-y-2 ml-6 list-disc text-sm">
                    <li>Lire et consulter les articles gratuitement</li>
                    <li>Partager nos articles via les réseaux sociaux</li>
                    <li>Citer nos articles avec attribution appropriée</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#d61935' }}>
                    ❌ Vous ne pouvez pas :
                  </h3>
                  <ul className="space-y-2 ml-6 list-disc text-sm">
                    <li>Reproduire, copier ou redistribuer notre contenu sans autorisation</li>
                    <li>Utiliser notre contenu à des fins commerciales sans accord écrit</li>
                    <li>Modifier ou altérer nos articles</li>
                    <li>Supprimer les mentions de copyright ou d'attribution</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">4. Propriété intellectuelle</h2>
              <p className="mb-4">
                Tout le contenu présent sur DailyEcho (textes, images, logos, vidéos, etc.) est protégé par les lois sur la propriété intellectuelle et appartient à DailyEcho ou à ses contributeurs.
              </p>
              <div className="p-4 rounded" style={{ backgroundColor: '#d61935' }}>
                <p className="text-white font-semibold">
                  © {new Date().getFullYear()} DailyEcho. Tous droits réservés.
                </p>
              </div>
            </section>

            {/* User Content */}
            <section className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">5. Contenu soumis par les utilisateurs</h2>
              
              <div className="mb-4 p-4 bg-gray-800 rounded">
                <h3 className="text-lg font-bold text-white mb-2">📝 Pour les contributeurs</h3>
                <p className="text-sm mb-3">
                  Si vous soumettez un article ou du contenu à DailyEcho :
                </p>
                <ul className="space-y-2 ml-6 list-disc text-sm">
                  <li>Vous garantissez être l'auteur original du contenu</li>
                  <li>Vous accordez à DailyEcho une licence non exclusive pour publier votre contenu</li>
                  <li>Vous conservez vos droits d'auteur</li>
                  <li>Votre contenu ne doit pas enfreindre les droits de tiers</li>
                  <li>Vous acceptez nos standards éditoriaux et notre processus de révision</li>
                </ul>
              </div>

              <p className="text-sm text-gray-400">
                DailyEcho se réserve le droit de refuser, modifier ou retirer tout contenu soumis qui ne respecte pas nos directives éditoriales.
              </p>
            </section>

            {/* User Conduct */}
            <section className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">6. Comportement des utilisateurs</h2>
              <p className="mb-4">En utilisant DailyEcho, vous vous engagez à ne pas :</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-800 rounded">
                  <p className="font-bold text-white mb-2">🚫 Contenu illégal</p>
                  <p className="text-sm">Publier du contenu illégal, offensant ou diffamatoire</p>
                </div>
                <div className="p-4 bg-gray-800 rounded">
                  <p className="font-bold text-white mb-2">⚠️ Harcèlement</p>
                  <p className="text-sm">Harceler, menacer ou intimider d'autres utilisateurs</p>
                </div>
                <div className="p-4 bg-gray-800 rounded">
                  <p className="font-bold text-white mb-2">🦠 Malware</p>
                  <p className="text-sm">Transmettre des virus ou codes malveillants</p>
                </div>
                <div className="p-4 bg-gray-800 rounded">
                  <p className="font-bold text-white mb-2">🔓 Piratage</p>
                  <p className="text-sm">Tenter d'accéder aux systèmes non autorisés</p>
                </div>
                <div className="p-4 bg-gray-800 rounded">
                  <p className="font-bold text-white mb-2">📧 Spam</p>
                  <p className="text-sm">Envoyer du spam ou du contenu non sollicité</p>
                </div>
                <div className="p-4 bg-gray-800 rounded">
                  <p className="font-bold text-white mb-2">🎭 Usurpation</p>
                  <p className="text-sm">Se faire passer pour une autre personne ou entité</p>
                </div>
              </div>
            </section>

            {/* Links */}
            <section className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">7. Liens externes</h2>
              <p className="mb-4">
                DailyEcho peut contenir des liens vers des sites web externes. Nous ne sommes pas responsables du contenu, des politiques de confidentialité ou des pratiques de ces sites tiers.
              </p>
              <p className="text-sm text-gray-400">
                L'inclusion de liens ne signifie pas notre approbation de ces sites.
              </p>
            </section>

            {/* Disclaimer */}
            <section className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">8. Clause de non-responsabilité</h2>
              <p className="mb-4">
                Le contenu de DailyEcho est fourni à titre informatif uniquement. Nous nous efforçons de maintenir l'exactitude des informations, mais :
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Nous ne garantissons pas l'exactitude, l'exhaustivité ou l'actualité du contenu</li>
                <li>Les opinions exprimées dans les articles sont celles des auteurs</li>
                <li>DailyEcho ne peut être tenu responsable des décisions prises sur la base de nos contenus</li>
                <li>Nous ne garantissons pas l'absence d'interruptions ou d'erreurs</li>
              </ul>
            </section>

            {/* Limitation */}
            <section className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">9. Limitation de responsabilité</h2>
              <p>
                Dans la mesure permise par la loi, DailyEcho ne sera pas responsable des dommages directs, indirects, accessoires ou consécutifs résultant de :
              </p>
              <ul className="space-y-2 ml-6 list-disc mt-4">
                <li>L'utilisation ou l'impossibilité d'utiliser notre site</li>
                <li>Tout contenu obtenu via notre site</li>
                <li>Accès non autorisé à vos données</li>
                <li>Erreurs ou omissions dans le contenu</li>
              </ul>
            </section>

            {/* Indemnification */}
            <section className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">10. Indemnisation</h2>
              <p>
                Vous acceptez d'indemniser et de dégager DailyEcho de toute responsabilité concernant les réclamations résultant de votre utilisation du site ou de votre violation de ces conditions.
              </p>
            </section>

            {/* Governing Law */}
            <section className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">11. Loi applicable</h2>
              <p>
                Ces conditions d'utilisation sont régies par les lois françaises. Tout litige sera soumis à la compétence exclusive des tribunaux français.
              </p>
            </section>

            {/* Severability */}
            <section className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">12. Divisibilité</h2>
              <p>
                Si une disposition de ces conditions est jugée invalide ou inapplicable, les autres dispositions resteront pleinement en vigueur.
              </p>
            </section>

            {/* Contact */}
            <section className="p-6 rounded-lg text-center" style={{ backgroundColor: '#d61935' }}>
              <h2 className="text-2xl font-bold text-white mb-4">Questions sur nos conditions ?</h2>
              <p className="text-white mb-6">
                Pour toute question concernant ces conditions d'utilisation, n'hésitez pas à nous contacter.
              </p>
              <a 
                href="/contact" 
                className="inline-block px-8 py-3 bg-white font-bold uppercase tracking-wide hover:opacity-90 transition-opacity rounded"
                style={{ color: '#d61935' }}
              >
                Nous contacter
              </a>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
