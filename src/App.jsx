import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Menu, X, Users, Target, TrendingUp, BarChart3, CheckCircle } from 'lucide-react';

const ParkourPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const slides = [
    { id: 0, title: 'Portada', icon: Target },
    { id: 1, title: 'Introducción', icon: Users },
    { id: 2, title: 'Objetivos', icon: CheckCircle },
    { id: 3, title: 'Población y Muestra', icon: Users },
    { id: 4, title: 'Metodología', icon: BarChart3 },
    { id: 5, title: 'Diseño Experimental', icon: TrendingUp },
    { id: 6, title: 'Resultados Descriptivos', icon: BarChart3 },
    { id: 7, title: 'Análisis Chi-Cuadrado', icon: TrendingUp },
    { id: 8, title: 'Conclusiones', icon: CheckCircle }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => {
    setCurrentSlide(index);
    setShowMenu(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Navegación Superior */}
      <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-50 backdrop-blur-md z-50 px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-xl font-bold bg-gradient-to-r from-yellow-400 via-blue-400 to-red-400 bg-clip-text text-transparent">
            Parkour Colombia
          </h1>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="p-2 hover:bg-white hover:bg-opacity-10 rounded-lg transition-all"
          >
            {showMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Panel de Navegación Lateral */}
      <div
        className={`fixed top-16 right-0 h-full bg-black bg-opacity-90 backdrop-blur-md z-40 transform transition-transform duration-300 ${
          showMenu ? 'translate-x-0' : 'translate-x-full'
        } w-80`}
      >
        <div className="p-6 space-y-2 overflow-y-auto h-full">
          <h2 className="text-lg font-bold mb-4 text-yellow-400">Índice de Contenido</h2>
          {slides.map((slide, index) => {
            const Icon = slide.icon;
            return (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`w-full text-left p-4 rounded-lg transition-all flex items-center gap-3 ${
                  currentSlide === index
                    ? 'bg-gradient-to-r from-yellow-500 via-blue-500 to-red-500 text-white font-bold'
                    : 'hover:bg-white hover:bg-opacity-10 text-gray-300'
                }`}
              >
                <Icon size={20} />
                <span>{slide.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="pt-20 pb-20 px-6 max-w-7xl mx-auto">
        {/* Slide 0: Portada */}
        {currentSlide === 0 && (
          <div className="min-h-screen flex flex-col justify-center items-center text-center space-y-8 animate-fade-in">
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 via-blue-400 to-red-400 rounded-full"></div>
            <h1 className="text-6xl font-bold leading-tight">
              ¿Influye el tiempo de práctica en la{' '}
              <span className="bg-gradient-to-r from-yellow-400 via-blue-400 to-red-400 bg-clip-text text-transparent">
                motivación
              </span>{' '}
              de los practicantes de Parkour en Colombia?
            </h1>
            <div className="space-y-2 text-xl text-gray-300">
              <p>Andrés Felipe Vélez</p>
              <p>Juan Pablo Avendaño Duque</p>
              <p>Juan Daniel Rodriguez Giraldo</p>
            </div>
            <div className="text-lg text-gray-400">
              <p>Universidad Católica de Oriente</p>
              <p>Estadística Inferencial - 2025-2</p>
            </div>
          </div>
        )}

        {/* Slide 1: Introducción */}
        {currentSlide === 1 && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
              Introducción
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-gray-300">
                  El <strong className="text-yellow-400">Parkour</strong> es una actividad deportiva que incluye disciplina física y mental, con el objetivo de superar obstáculos mediante movimientos libres y eficientes.
                </p>
                <p className="text-gray-300">
                  Más allá del aspecto técnico, el Parkour implica un componente psicológico importante, donde la <strong className="text-blue-400">motivación personal</strong> influye en el progreso de sus practicantes.
                </p>
                <div className="bg-gradient-to-r from-yellow-500 to-red-500 p-1 rounded-lg">
                  <div className="bg-gray-900 p-6 rounded-lg">
                    <p className="text-xl font-bold text-center">
                      Pregunta de Investigación
                    </p>
                    <p className="text-center mt-4 text-gray-300">
                      ¿Existe alguna relación entre la motivación para practicar Parkour y las horas semanales dedicadas a esta actividad?
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-900 bg-opacity-30 p-6 rounded-xl border border-blue-500">
                  <h3 className="text-2xl font-bold text-blue-400 mb-4">Población</h3>
                  <p className="text-4xl font-bold text-center">1,690</p>
                  <p className="text-center text-gray-300">miembros de Parkour Colombia</p>
                </div>
                <div className="bg-yellow-900 bg-opacity-30 p-6 rounded-xl border border-yellow-500">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4">Muestra</h3>
                  <p className="text-4xl font-bold text-center">51</p>
                  <p className="text-center text-gray-300">participantes analizados</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Slide 2: Objetivos */}
        {currentSlide === 2 && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
              Objetivos del Estudio
            </h2>
            <div className="bg-gradient-to-r from-yellow-500 to-red-500 p-1 rounded-xl">
              <div className="bg-gray-900 p-8 rounded-xl">
                <h3 className="text-3xl font-bold text-yellow-400 mb-4">Objetivo General</h3>
                <p className="text-xl text-gray-300">
                  Determinar si existe asociación entre las horas de práctica semanal y la motivación principal para practicar Parkour en los miembros del grupo Parkour Colombia.
                </p>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-blue-400 mt-8">Objetivos Específicos</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Describir la distribución de las horas de práctica semanal, del género y de la motivación principal',
                'Calcular frecuencias y porcentajes para cada categoría',
                'Aplicar la prueba de Chi-cuadrado de independencia',
                'Analizar la relación entre género, horas y motivación',
                
                'Calcular intervalos de confianza para proporciones'
              ].map((obj, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-blue-900 bg-opacity-20 p-6 rounded-xl border border-blue-700">
                  <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-300">{obj}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Slide 3: Población y Muestra */}
        {currentSlide === 3 && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
              Población y Muestra
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-yellow-600 to-red-600 p-8 rounded-xl text-center">
                <Users size={48} className="mx-auto mb-4" />
                <p className="text-6xl font-bold mb-2">1,690</p>
                <p className="text-xl">Población Total</p>
                <p className="text-sm mt-2 opacity-80">Miembros de Parkour Colombia</p>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-xl text-center">
                <BarChart3 size={48} className="mx-auto mb-4" />
                <p className="text-6xl font-bold mb-2">51</p>
                <p className="text-xl">Respuestas Recibidas</p>
                <p className="text-sm mt-2 opacity-80">Cuestionarios completos</p>
              </div>
              <div className="bg-gradient-to-br from-green-600 to-teal-600 p-8 rounded-xl text-center">
                <CheckCircle size={48} className="mx-auto mb-4" />
                <p className="text-6xl font-bold mb-2">51</p>
                <p className="text-xl">Muestra Analizada</p>
                <p className="text-sm mt-2 opacity-80">Con autorización de uso</p>
              </div>
            </div>
            <div className="bg-gray-800 bg-opacity-50 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Tipo de Muestreo</h3>
              <p className="text-xl text-gray-300">
                <strong className="text-blue-400">Muestreo no probabilístico por autoselección</strong>
              </p>
              <p className="text-gray-400 mt-4">
                Típico en estudios realizados en comunidades virtuales donde los participantes eligen voluntariamente formar parte de la investigación.
              </p>
            </div>
          </div>
        )}

        {/* Slide 4: Metodología */}
        {currentSlide === 4 && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
              Metodología de Recolección
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Variable Explicativa</h3>
                <p className="text-3xl font-bold mb-2">Horas de Práctica</p>
                <p className="text-sm opacity-80">Ordinal por rangos</p>
                <div className="mt-4 space-y-2">
                  <div className="bg-black bg-opacity-30 p-2 rounded">1-3 horas</div>
                  <div className="bg-black bg-opacity-30 p-2 rounded">4-6 horas</div>
                  <div className="bg-black bg-opacity-30 p-2 rounded">7-10 horas</div>
                  <div className="bg-black bg-opacity-30 p-2 rounded">+10 horas</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Variable de Respuesta</h3>
                <p className="text-3xl font-bold mb-2">Motivación</p>
                <p className="text-sm opacity-80">Categórica nominal</p>
                <div className="mt-4 space-y-2">
                  <div className="bg-black bg-opacity-30 p-2 rounded">Diversión</div>
                  <div className="bg-black bg-opacity-30 p-2 rounded">Superación Personal</div>
                  <div className="bg-black bg-opacity-30 p-2 rounded">Ejercicio</div>
                  <div className="bg-black bg-opacity-30 p-2 rounded">Socializar</div>
                  <div className="bg-black bg-opacity-30 p-2 rounded">Competencia</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-yellow-600 to-orange-600 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Variable Contextual</h3>
                <p className="text-3xl font-bold mb-2">Género</p>
                <p className="text-sm opacity-80">Categórica dicotómica</p>
                <div className="mt-4 space-y-2">
                  <div className="bg-black bg-opacity-30 p-2 rounded">Hombre</div>
                  <div className="bg-black bg-opacity-30 p-2 rounded">Mujer</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 bg-opacity-50 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Estrategias Estadísticas</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-900 bg-opacity-30 p-4 rounded-lg">
                  <p className="font-bold text-yellow-400">Chi-cuadrado de independencia</p>
                  <p className="text-sm text-gray-300 mt-2">Determinar asociación entre variables categóricas</p>
                </div>
                <div className="bg-blue-900 bg-opacity-30 p-4 rounded-lg">
                  <p className="font-bold text-yellow-400">Intervalos de Confianza</p>
                  <p className="text-sm text-gray-300 mt-2">Inferir parámetros poblacionales al 90%</p>
                </div>
                <div className="bg-blue-900 bg-opacity-30 p-4 rounded-lg">
                  <p className="font-bold text-yellow-400">Análisis Descriptivo</p>
                  <p className="text-sm text-gray-300 mt-2">Frecuencias y porcentajes por categoría</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Slide 5: Diseño Experimental */}
        {currentSlide === 5 && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
              Diseño Experimental 2×3
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4">Factor A: Motivación (2 niveles)</h3>
                  <div className="space-y-3">
                    <div className="bg-black bg-opacity-40 p-4 rounded-lg">
                      <p className="font-bold text-yellow-400">Intrínseca</p>
                      <p className="text-sm mt-2">Ejercicio, Diversión, Superación Personal</p>
                    </div>
                    <div className="bg-black bg-opacity-40 p-4 rounded-lg">
                      <p className="font-bold text-blue-400">Extrínseca</p>
                      <p className="text-sm mt-2">Competencia, Socializar</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4">Factor B: Práctica (3 niveles)</h3>
                  <div className="space-y-3">
                    <div className="bg-black bg-opacity-40 p-3 rounded-lg">
                      <p className="font-bold">Bajo:</p>
                      <p className="text-sm">1-3 horas semanales</p>
                    </div>
                    <div className="bg-black bg-opacity-40 p-3 rounded-lg">
                      <p className="font-bold">Medio:</p>
                      <p className="text-sm">4-6 horas semanales</p>
                    </div>
                    <div className="bg-black bg-opacity-40 p-3 rounded-lg">
                      <p className="font-bold">Alto:</p>
                      <p className="text-sm">7+ horas semanales</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">6 Tratamientos</h3>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { t: 'T1', mot: 'Intrínseca', pract: 'Bajo', n: 5, moda: 'Diversión' },
                    { t: 'T2', mot: 'Intrínseca', pract: 'Medio', n: 12, moda: 'Superación' },
                    { t: 'T3', mot: 'Intrínseca', pract: 'Alto', n: 10, moda: 'Ejercicio' },
                    { t: 'T4', mot: 'Extrínseca', pract: 'Bajo', n: 3, moda: 'Competencia' },
                    { t: 'T5', mot: 'Extrínseca', pract: 'Medio', n: 10, moda: 'Mixta' },
                    { t: 'T6', mot: 'Extrínseca', pract: 'Alto', n: 11, moda: 'Socializar' }
                  ].map((item) => (
                    <div key={item.t} className="bg-gradient-to-br from-gray-700 to-gray-800 p-4 rounded-xl border border-gray-600">
                      <p className="text-2xl font-bold text-yellow-400 mb-2">{item.t}</p>
                      <p className="text-xs text-gray-400">{item.mot}</p>
                      <p className="text-xs text-gray-400">{item.pract}</p>
                      <p className="text-3xl font-bold text-blue-400 my-2">n={item.n}</p>
                      <p className="text-xs text-green-400">Moda: {item.moda}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Slide 6: Resultados Descriptivos */}
        {currentSlide === 6 && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
              Resultados Descriptivos
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Género */}
              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Género</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Hombre</span>
                      <span className="font-bold text-blue-400">78.4%</span>
                    </div>
                    <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600" style={{width: '78.4%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Mujer</span>
                      <span className="font-bold text-pink-400">21.6%</span>
                    </div>
                    <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-pink-500 to-pink-600" style={{width: '21.6%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Horas de Práctica */}
              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Horas Semanales</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Bajo (1-3h)</span>
                      <span className="font-bold text-green-400">15.7%</span>
                    </div>
                    <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 to-green-600" style={{width: '15.7%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Medio (4-6h)</span>
                      <span className="font-bold text-yellow-400">45.1%</span>
                    </div>
                    <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-yellow-500 to-yellow-600" style={{width: '45.1%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Alto (7+h)</span>
                      <span className="font-bold text-red-400">39.2%</span>
                    </div>
                    <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-red-500 to-red-600" style={{width: '39.2%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Motivación */}
              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Motivación</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Intrínseca</span>
                      <span className="font-bold text-purple-400">52.9%</span>
                    </div>
                    <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600" style={{width: '52.9%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Extrínseca</span>
                      <span className="font-bold text-cyan-400">47.1%</span>
                    </div>
                    <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-500 to-cyan-600" style={{width: '47.1%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabla de Contingencia */}
            <div className="bg-gray-800 bg-opacity-50 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">
                Tabla de Contingencia: Horas × Motivación
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-center">
                  <thead>
                    <tr className="bg-gradient-to-r from-yellow-600 to-red-600">
                      <th className="p-4 rounded-tl-lg">Horas</th>
                      <th className="p-4">Intrínseca</th>
                      <th className="p-4">Extrínseca</th>
                      <th className="p-4 rounded-tr-lg">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-blue-900 bg-opacity-30">
                      <td className="p-4 font-bold">Bajo</td>
                      <td className="p-4">5</td>
                      <td className="p-4">3</td>
                      <td className="p-4 font-bold">8</td>
                    </tr>
                    <tr className="bg-blue-900 bg-opacity-20">
                      <td className="p-4 font-bold">Medio</td>
                      <td className="p-4">12</td>
                      <td className="p-4">10</td>
                      <td className="p-4 font-bold">22</td>
                    </tr>
                    <tr className="bg-blue-900 bg-opacity-30">
                      <td className="p-4 font-bold">Alto</td>
                      <td className="p-4">10</td>
                      <td className="p-4">11</td>
                      <td className="p-4 font-bold">21</td>
                    </tr>
                    <tr className="bg-gradient-to-r from-purple-600 to-pink-600 font-bold">
                      <td className="p-4 rounded-bl-lg">Total</td>
                      <td className="p-4">27</td>
                      <td className="p-4">24</td>
                      <td className="p-4 rounded-br-lg">51</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Slide 7: Análisis Chi-Cuadrado */}
        {currentSlide === 7 && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
              Prueba Chi-Cuadrado de Independencia
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-600 to-pink-600 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4">Hipótesis</h3>
                  <div className="space-y-4 bg-black bg-opacity-40 p-4 rounded-lg">
                    <div>
                      <p className="font-bold text-yellow-400">H₀ (Nula):</p>
                      <p className="text-2xl mt-2">La motivación es independiente de las horas de práctica</p>
                    </div>
                    <div>
                      <p className="font-bold text-blue-400">H₁ (Alternativa):</p>
                      <p className="text-2xl mt-2">La motivación depende de las horas de práctica</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl border border-gray-700">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4">Parámetros</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-blue-900 bg-opacity-30 p-3 rounded">
                      <span className='text-2xl'>Nivel de significancia (α)</span>
                      <span className="text-2xl font-bold text-blue-400">0.10</span>
                    </div>
                    <div className="flex justify-between items-center bg-purple-900 bg-opacity-30 p-3 rounded">
                      <span className='text-2xl'>Grados de libertad</span>
                      <span className="text-2xl font-bold text-purple-400">2</span>
                    </div>
                    <div className="flex justify-between items-center bg-green-900 bg-opacity-30 p-3 rounded">
                      <span className='text-2xl'>Nivel de confianza</span>
                      <span className="text-2xl font-bold text-green-400">90%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-yellow-600 to-orange-600 p-8 rounded-xl text-center">
                  <h3 className="text-xl font-bold mb-4">Estadístico Chi-Cuadrado Calculado</h3>
                  <p className="text-6xl font-bold mb-2">χ² = 0.555</p>
                  <p className="text-2xl opacity-80">Valor del estadístico de prueba</p>
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-xl text-center">
                  <h3 className="text-xl font-bold mb-4">Valor p</h3>
                  <p className="text-6xl font-bold mb-2">p ≈ 0.758</p>
                  <p className="text-2xl opacity-80">Probabilidad asociada</p>
                </div>

                <div className="bg-gradient-to-r from-green-600 to-teal-600 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 text-center">Decisión</h3>
                  <div className="bg-black bg-opacity-40 p-4 rounded-lg text-center">
                    <p className="text-lg mb-2">p (0.758) {'>'} α (0.10)</p>
                    <p className="text-2xl font-bold text-yellow-400">NO se rechaza H₀</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500 via-blue-500 to-red-500 p-1 rounded-xl">
              <div className="bg-gray-900 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-center mb-4 text-yellow-400">Interpretación</h3>
                <p className="text-xl text-center text-gray-300 leading-relaxed">
                  Con un <strong className="text-blue-400">90% de confianza</strong>, no se encuentra evidencia estadística suficiente para afirmar que el tipo de motivación dependa del nivel de horas de práctica semanal. Las variables se comportan como <strong className="text-green-400">independientes</strong>.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Slide 8: Conclusiones */}
        {currentSlide === 8 && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
              Conclusiones
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-900 to-purple-900 p-6 rounded-xl border border-blue-500">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">Hallazgo Principal</h3>
                <p className="text-gray-300 leading-relaxed">
                  No existe asociación significativa entre las horas de práctica semanal y el tipo de motivación (χ² = 0.555, p = 0.758).
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-900 to-teal-900 p-6 rounded-xl border border-green-500">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">Implicación Práctica</h3>
                <p className="text-gray-300 leading-relaxed">
                  La motivación para practicar Parkour no depende de cuántas horas se entrene a la semana.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-900 to-orange-900 p-6 rounded-xl border border-yellow-500">
                <h3 className="text-xl font-bold text-blue-400 mb-4">Perfil de la Comunidad</h3>
                <p className="text-gray-300 leading-relaxed">
                  Predominancia masculina (78.4%) con práctica mayormente media-alta y motivaciones intrínsecas destacadas.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-900 to-red-900 p-6 rounded-xl border border-pink-500">
                <h3 className="text-xl font-bold text-blue-400 mb-4">Factores Motivacionales</h3>
                <p className="text-gray-300 leading-relaxed">
                  La motivación está más vinculada a factores personales, identitarios y sociales que al nivel de intensidad del entrenamiento.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-1 rounded-xl">
              <div className="bg-gray-900 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4 text-center">Recomendaciones Futuras</h3>
                <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                    <p>Incorporar variables como años de experiencia en la práctica</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                    <p>Analizar diferentes estilos de práctica dentro del Parkour</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                    <p>Estudiar la participación en grupos y comunidades locales</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                    <p>Explorar la percepción de riesgo y su impacto en la motivación</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12 space-y-4">
              <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 via-blue-400 to-red-400 rounded-full mx-auto"></div>
              <p className="text-2xl font-bold text-gray-300">¡Gracias por su atención!</p>
              <p className="text-gray-400">Universidad Católica de Oriente - 2025</p>
            </div>
          </div>
        )}
      </div>

      {/* Controles de Navegación */}
      <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-50 backdrop-blur-md p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button
            onClick={prevSlide}
            className="p-3 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full hover:scale-110 transition-transform"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">
              {currentSlide + 1} / {slides.length}
            </span>
            <span className="text-lg font-bold">{slides[currentSlide].title}</span>
          </div>
          
          <button
            onClick={nextSlide}
            className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:scale-110 transition-transform"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ParkourPresentation;