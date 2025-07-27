import React from 'react';

const plans = [
  {
    name: 'TPE',
    price: '79 000 DA (1ère année) puis 15 900 DA/an',
    features: [
      '✅', '✅', '✅', '✅', '✅ (10/mois)', '✅', '✅', '✅', '✅', '✅',
      'Jusqu’à 10 employés', 'Jusqu’à 1 000 personnes concernées', '➖', '➖', '➖', '➖', '1 utilisateur', '➖', '➖', 'Email', '3h one to one + formations groupées'
    ]
  },
  {
    name: 'PME',
    price: '189 000 DA (1ère année) puis 37 900 DA/an',
    features: [
      '✅', '✅', '✅', '✅', '✅ (100/mois)', '✅', '✅', '✅', '✅', '✅',
      'Jusqu’à 100 employés', 'Jusqu’à 10 000 personnes concernées', '✅', '➖', '➖', '✅', '10 utilisateurs', '➖', '➖', 'Email + Chat', '6h one to one + formations groupées'
    ]
  },
  {
    name: 'Grande entreprise',
    price: '420 000 DA (1ère année) puis 80 000 DA/an',
    features: [
      '✅', '✅', '✅', '✅', '✅ (Illimité)', '✅', '✅', '✅', '✅', '✅',
      'Illimité', 'Illimité', '✅', '✅', '✅', '✅', 'Illimité', '✅', '✅', 'Dédié', '12h one to one + formations groupées'
    ]
  }
];

const featureLabels = [
  'Tableau de bord',
  'Gestion des tâches',
  'Registre des traitements',
  'Registre des autorisations',
  'Demandes de droits',
  'Registre de violations',
  'Déclaration automatique à l’ANPDP',
  'Gestion sous-traitants',
  'Gestion des acteurs internes',
  'Logiciels & applications',
  'Signature en ligne de la charte / engagement',
  'Signature en ligne Notice d\'information',
  'Audits Traitement',
  'Audits sécurité',
  'Évaluation des sous-traitant',
  'Paramétrage avancé',
  'Multi-utilisateurs / Rôles',
  'Statistiques avancées',
  'API & intégrations',
  'Support',
  'Accompagnement en visioconférence'
];

const PricingPage = () => (
  <div className="pt-16 pb-20 bg-gray-50 min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-blue-900 text-center mb-10">Nos Tarifs</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow border border-gray-200">
          <thead>
            <tr>
              <th className="py-4 px-2 text-left text-lg font-semibold text-blue-900 border-b"></th>
              {plans.map(plan => (
                <th key={plan.name} className="py-4 px-6 text-center text-lg font-semibold text-blue-900 border-b">{plan.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {featureLabels.map((label, idx) => (
              <tr key={label} className="border-b last:border-b-0">
                <td className="py-3 px-2 font-medium text-gray-700">{label}</td>
                {plans.map(plan => (
                  <td key={plan.name} className="py-3 px-6 text-center">
                    {plan.features[idx]}
                  </td>
                ))}
              </tr>
            ))}
            <tr className="bg-gray-100">
              <td className="py-4 px-2 font-bold text-blue-900 text-lg">Tarif mensuel</td>
              {plans.map(plan => (
                <td key={plan.name} className="py-4 px-6 text-center font-bold text-lg text-violet-700">{plan.price}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default PricingPage;