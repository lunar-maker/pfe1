"use client"
import { Button } from "@/components/ui/button"
import { Chat } from "@/components/chat"
import Link from "next/link"
import { useEffect, useState } from "react"
import {
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs"
import {
  FaArrowRight,
  FaCalendarAlt,
  FaChartLine,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaComments,
  FaFileMedical,
  FaHospital,
  FaPhone,
  FaQuoteLeft,
  FaShieldAlt,
  FaStar,
  FaUserMd,
  FaUsers,
  FaUserShield,
  FaHeartbeat,
  FaStethoscope,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa"

export default function HomePage() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false)
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  function toggleFAQ(index: number) {
    setActiveFAQ(activeFAQ === index ? null : index)
  }

  const faqs = [
    {
      question: "Comment prendre rendez-vous avec un médecin ?",
      answer:
        "Il suffit de créer un compte, de rechercher un médecin selon sa spécialité ou sa localisation, et de choisir un créneau disponible dans son agenda.",
    },
    {
      question: "Est-ce que mes données médicales sont sécurisées ?",
      answer:
        "Absolument. Nous utilisons les plus hauts standards de cryptage et de sécurité pour protéger vos données médicales. Votre confidentialité est notre priorité.",
    },
    {
      question: "Puis-je annuler ou modifier un rendez-vous ?",
      answer:
        "Oui, vous pouvez facilement modifier ou annuler vos rendez-vous jusqu'à 24h avant la consultation via votre espace personnel.",
    },
    {
      question: "Comment accéder à mes ordonnances en ligne ?",
      answer:
        "Toutes vos ordonnances sont disponibles dans votre espace personnel, dans la section 'Mes ordonnances'. Vous pouvez les consulter et les télécharger à tout moment.",
    },
  ]

  const stats = [
    { number: "50K+", label: "Patients Satisfaits", icon: FaUsers },
    { number: "1000+", label: "Médecins Partenaires", icon: FaUserMd },
    { number: "100+", label: "Établissements", icon: FaHospital },
    { number: "98%", label: "Taux de Satisfaction", icon: FaChartLine },
  ]

  const features = [
    {
      icon: FaUserMd,
      title: "Trouvez un Médecin",
      description: "Recherchez et connectez-vous avec des professionnels de santé selon leur spécialité, leur localisation et leurs disponibilités.",
      color: "black from-blue-500 to-blue-600"
    },
    {
      icon: FaCalendarAlt,
      title: "Prise de Rendez-vous",
      description: "Planifiez vos rendez-vous facilement avec notre système de réservation intuitif et flexible en temps réel.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: FaFileMedical,
      title: "Gestion de Santé",
      description: "Suivez votre historique médical, vos rendez-vous et vos ordonnances en un seul endroit sécurisé.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: FaShieldAlt,
      title: "Sécurité Maximale",
      description: "Vos données médicales sont protégées par les plus hauts standards de sécurité et de confidentialité.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: FaClock,
      title: "Disponible 24/7",
      description: "Accédez à vos informations médicales et prenez rendez-vous à tout moment, jour et nuit.",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Médecins Proches",
      description: "Trouvez facilement des médecins dans votre région avec notre système de géolocalisation.",
      color: "from-orange-500 to-orange-600"
    }
  ]

  // const testimonials = [
  //   {
  //     name: "Kamar Neddama",
  //     role: "Patient",
  //     content:
  //       "MediConnect a révolutionné ma façon de gérer mes rendez-vous médicaux. Plus besoin d'appeler, tout est simple et rapide !",
  //     rating: 5,
  //     avatar: "KN"
  //   },
  //   {
  //     name: "Dr. Ibtihal",
  //     role: "Médecin",
  //     content:
  //       "Une plateforme intuitive qui me permet de mieux organiser mon cabinet et d'offrir un meilleur service à mes patients.",
  //     rating: 5,
  //     avatar: "DI"
  //   },
  //   {
  //     name: "Marwa Elomari",
  //     role: "Patient",
  //     content:
  //       "Le suivi de mes ordonnances et rendez-vous est maintenant un jeu d'enfant. Je recommande vivement !",
  //     rating: 5,
  //     avatar: "ME"
  //   }
  // ]

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16"
         style={{
    backgroundImage: "url('/hero.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-indigo-100/20"></div>
          
          <div className="relative container mx-auto px-4">
            <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
              <div className="flex-1 text-center lg:text-left">
                <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-blue-800">
                  <FaHeartbeat className="mr-2 h-4 w-4" />
                  <span className="text-sm font-medium">
                    La santé connectée de demain
                  </span>
                </div>
                
                <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                  Votre Santé,
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Notre Priorité
                  </span>
                </h1>
                
                <p className="mb-8 max-w-2xl text-xl text-gray-600">
                  Connectez-vous avec les meilleurs professionnels de santé,
                  prenez rendez-vous facilement et gérez votre parcours médical
                  en toute simplicité.
                </p>
                
                <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                  <SignUpButton>
                    <Button
                      size="lg"
                      className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Commencer Maintenant
                      <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </SignUpButton>
                  
                  <SignInButton>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
                    >
                      Se connecter
                    </Button>
                  </SignInButton>
                </div>
                
                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaCheckCircle className="text-green-500" />
                    <span>100% Sécurisé</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaCheckCircle className="text-green-500" />
                    <span>Support 24/7</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaCheckCircle className="text-green-500" />
                    <span>Confidentialité Garantie</span>
                  </div>
                </div>
              </div>
              
              <div className="relative flex-1">
                <div className="relative z-10">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    {/* <img
                      src="/hero-image.png"
                      alt="Healthcare professionals"
                      className="w-full transform transition-transform duration-500 hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://placehold.co/600x400/3B82F6/FFFFFF/png?text=MediConnect"
                      }}
                    /> */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
{/*                 
                {/* Floating Elements */}
                {/* <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-blue-100 opacity-80 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-indigo-100 opacity-60 animate-pulse delay-1000"></div> */} 
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group transform text-center transition-all duration-300 hover:scale-105"
                >
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 p-4 text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <stat.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="mb-2 text-3xl font-bold text-gray-900">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        {/* <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-24">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Nos Services Innovants
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Découvrez comment MediConnect révolutionne votre expérience de
                santé avec des services innovants et personnalisés.
              </p>
            </div>
            
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group transform rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className={`mb-6 inline-flex rounded-xl bg-gradient-to-r ${feature.color} p-4 text-white shadow-lg`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Testimonials Section */}
        {/* <section className="bg-white py-24">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Ce que disent nos utilisateurs
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Découvrez les expériences de nos patients et médecins avec
                MediConnect.
              </p>
            </div>
             
           <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group transform rounded-2xl bg-gradient-to-br from-gray-50 to-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-100"
                >
                  <div className="mb-6 flex items-center gap-2 text-2xl text-blue-500">
                    <FaQuoteLeft />
                  </div>
                  
                  <p className="mb-6 text-gray-600 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="h-4 w-4" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Security Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-24">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
                  Votre Santé, Notre Engagement
                </h2>
                <p className="mb-8 text-lg text-gray-600">
                  Nous nous engageons à protéger vos données médicales avec les plus hauts standards de sécurité.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 rounded-full bg-green-100 p-3">
                      <FaShieldAlt className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-gray-900">
                        Sécurité Maximale
                      </h3>
                      <p className="text-gray-600">
                        Vos données médicales sont protégées par les plus hauts
                        standards de sécurité et de cryptage.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1 rounded-full bg-blue-100 p-3">
                      <FaUserShield className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-gray-900">
                        Confidentialité Garantie
                      </h3>
                      <p className="text-gray-600">
                        Vos informations personnelles sont traitées avec la plus
                        grande confidentialité et respect.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1 rounded-full bg-purple-100 p-3">
                      <FaStethoscope className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-gray-900">
                        Expertise Médicale
                      </h3>
                      <p className="text-gray-600">
                        Nous collaborons avec des professionnels de santé qualifiés
                        pour vous offrir les meilleurs soins.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 rotate-3 transform rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 opacity-20"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="/hero2.jpg"
                    alt="Security"
                    className="w-full transform transition-transform duration-500 hover:scale-105"
                    
                
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white py-24">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Questions fréquentes
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Trouvez rapidement des réponses à vos questions les plus
                courantes.
              </p>
            </div>
            
            <div className="mx-auto max-w-3xl">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="mb-4 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="font-semibold text-gray-900">
                      {faq.question}
                    </span>
                    {activeFAQ === index ? (
                      <FaChevronUp className="text-blue-500 transition-transform duration-200" />
                    ) : (
                      <FaChevronDown className="text-gray-400 transition-transform duration-200" />
                    )}
                  </button>
                  {activeFAQ === index && (
                    <div className="border-t border-gray-100 bg-gray-50 px-6 pb-6 pt-4 text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-24 text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          
          <div className="relative container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
                Prêt à révolutionner votre expérience de santé ?
              </h2>
              <p className="mb-8 text-xl text-blue-100">
                Rejoignez des milliers de patients qui font confiance à MediConnect
                pour gérer leur santé au quotidien.
              </p>
              
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <SignUpButton>
                  <Button
                    size="lg"
                    className="group bg-white text-blue-600 hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Commencer Gratuitement
                    <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </SignUpButton>
                
                <SignInButton>
                  <Button
  variant="outline"
  size="lg"
  className="border-blue-600 bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300"
>
  Se connecter
</Button>
                </SignInButton>
              </div>
              
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-blue-100">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-300" />
                  <span>Inscription gratuite</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-300" />
                  <span>Sans engagement</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-300" />
                  <span>Support 24/7</span>
                </div>
              </div>
            </div>
          </div>
     <div className="fixed bottom-8 right-8 z-50">
              <Link href="/chat">
                <Button
                  variant="secondary"
            className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-500 to-green-500 px-6 py-3 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
                >
            <FaComments className="h-5 w-5 transition-transform group-hover:scale-110" />
            <span className="font-medium">Assistant AI</span>
                </Button>
              </Link>
            </div> </section>

      </main>
    </div>
  )
}