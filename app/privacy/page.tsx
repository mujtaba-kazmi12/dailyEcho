import Footer from '../components/FooterWrapper';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | DailyEcho',
  description: 'Découvrez comment DailyEcho collecte, utilise et protège vos données personnelles.',
  keywords: 'confidentialité, données personnelles, RGPD, DailyEcho',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0f0f0f' }}>
      <main className="py-16">
        <div className="container mx-auto max-w-7xl px-6">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Politique de Confidentialité
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
                Chez <span className="text-white font-semibold">DailyEcho</span>, nous prenons très au sérieux la protection de vos données personnelles. Cette politique de confidentialité décrit comment nous collectons, utilisons, stockons et protégeons vos informations lorsque vous utilisez notre site web.
              </p>
              <p>
                En utilisant DailyEcho, vous acceptez les pratiques décrites dans cette politique de confidentialité.
              </p>
            </section>

            {/* Data Collection */}
            <section className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">1. Données que nous collectons</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#d61935' }}>
                    📧 Informations que vous nous fournissez
                  </h3>
                  <ul className="space-y-2 ml-6 list-disc">
                    <li>Nom et adresse e-mail (lors de l'inscription à notre newsletter)</li>
                    <li>Informations de contact (formulaire de contact)</li>
                    <li>Contenu soumis (articles, commentaires)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#d61935' }}>
                    🔍 Données collectées automatiquement
                  </h3>
                  <ul className="space-y-2 ml-6 list-disc">
                    <li>Adresse IP et localisation approximative</li>
                    <li>Type de navigateur et système d'exploitation</li>
                    <li>Pages visitées et durée de navigation</li>
                    <li>Cookies et technologies similaires</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Usage */}
            <section className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">2. Utilisation de vos données</h2>
              <p className="mb-4">Nous utilisons vos informations pour :</p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Vous envoyer notre newsletter (si vous y êtes abonné)</li>
                <li>Répondre à vos demandes et questions</li>
                <li>Améliorer notre contenu et nos services</li>
                <li>Analyser l'utilisation de notre site web</li>
                <li>Prévenir la fraude et assurer la sécurité</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </section>

            {/* Cookies */}
            <section className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">3. Cookies</h2>
              <p className="mb-4">
                Notre site utilise des cookies pour améliorer votre expérience. Les cookies sont de petits fichiers texte stockés sur votre appareil.
              </p>
              <div className="space-y-3">
                <div className="p-4 bg-gray-800 rounded">
                  <p className="font-bold text-white mb-1">🍪 Cookies essentiels</p>
                  <p className="text-sm">Nécessaires au fonctionnement du site (session, sécurité)</p>
                </div>
                <div className="p-4 bg-gray-800 rounded">
                  <p className="font-bold text-white mb-1">📊 Cookies analytiques</p>
                  <p className="text-sm">Nous aident à comprendre comment les visiteurs utilisent notre site</p>
                </div>
                <div className="p-4 bg-gray-800 rounded">
                  <p className="font-bold text-white mb-1">🎯 Cookies de personnalisation</p>
                  <p className="text-sm">Mémorisent vos préférences (langue, région)</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-400">
                Vous pouvez gérer ou désactiver les cookies dans les paramètres de votre navigateur.
              </p>
            </section>

            {/* Data Protection */}
            <section className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">4. Protection de vos données</h2>
              <p className="mb-4">
                Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données contre :
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>L'accès non autorisé</li>
                <li>La divulgation accidentelle</li>
                <li>La modification ou la destruction</li>
              </ul>
              <div className="mt-4 p-4 rounded" style={{ backgroundColor: '#d61935' }}>
                <p className="text-white font-semibold">
                  🔒 Vos données sont chiffrées lors de la transmission et stockées de manière sécurisée sur nos serveurs.
                </p>
              </div>
            </section>

            {/* Data Sharing */}
            <section className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">5. Partage de données</h2>
              <p className="mb-4">
                Nous ne vendons ni ne louons vos données personnelles à des tiers. Nous pouvons partager vos informations uniquement dans les cas suivants :
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li><span className="text-white font-semibold">Prestataires de services :</span> qui nous aident à exploiter notre site (hébergement, analytique)</li>
                <li><span className="text-white font-semibold">Obligations légales :</span> si requis par la loi ou pour protéger nos droits</li>
                <li><span className="text-white font-semibold">Avec votre consentement :</span> pour toute autre finalité avec votre accord explicite</li>
              </ul>
            </section>

            {/* Your Rights */}
            <section className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">6. Vos droits (RGPD)</h2>
              <p className="mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-800 rounded">
                  <p className="font-bold text-white mb-1">👁️ Droit d'accès</p>
                  <p className="text-sm">Accéder aux données que nous détenons sur vous</p>
                </div>
                <div className="p-4 bg-gray-800 rounded">
                  <p className="font-bold text-white mb-1">✏️ Droit de rectification</p>
                  <p className="text-sm">Corriger vos données inexactes</p>
                </div>
                <div className="p-4 bg-gray-800 rounded">
                  <p className="font-bold text-white mb-1">🗑️ Droit à l'effacement</p>
                  <p className="text-sm">Demander la suppression de vos données</p>
                </div>
                <div className="p-4 bg-gray-800 rounded">
                  <p className="font-bold text-white mb-1">🚫 Droit d'opposition</p>
                  <p className="text-sm">Vous opposer au traitement de vos données</p>
                </div>
                <div className="p-4 bg-gray-800 rounded">
                  <p className="font-bold text-white mb-1">📦 Droit à la portabilité</p>
                  <p className="text-sm">Recevoir vos données dans un format structuré</p>
                </div>
                <div className="p-4 bg-gray-800 rounded">
                  <p className="font-bold text-white mb-1">⏸️ Droit à la limitation</p>
                  <p className="text-sm">Limiter le traitement de vos données</p>
                </div>
              </div>
              <p className="mt-6 text-sm">
                Pour exercer ces droits, contactez-nous à : <a href="mailto:privacy@dailyecho.com" className="font-semibold hover:underline" style={{ color: '#d61935' }}>privacy@dailyecho.com</a>
              </p>
            </section>

            {/* Retention */}
            <section className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">7. Conservation des données</h2>
              <p>
                Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, sauf obligation légale de conservation plus longue.
              </p>
            </section>

            {/* Children */}
            <section className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">8. Protection des mineurs</h2>
              <p>
                Notre site n'est pas destiné aux enfants de moins de 16 ans. Nous ne collectons pas sciemment de données personnelles auprès de mineurs sans le consentement parental.
              </p>
            </section>

            {/* Changes */}
            <section className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">9. Modifications de cette politique</h2>
              <p>
                Nous pouvons mettre à jour cette politique de confidentialité périodiquement. La date de dernière mise à jour sera indiquée en haut de cette page. Nous vous encourageons à consulter régulièrement cette page.
              </p>
            </section>

            {/* Contact */}
            <section className="p-6 rounded-lg text-center" style={{ backgroundColor: '#d61935' }}>
              <h2 className="text-2xl font-bold text-white mb-4">Questions ?</h2>
              <p className="text-white mb-6">
                Pour toute question concernant cette politique de confidentialité ou vos données personnelles, n'hésitez pas à nous contacter.
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
