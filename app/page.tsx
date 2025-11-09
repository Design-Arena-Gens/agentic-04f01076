'use client'

import { useState } from 'react'
import LinearRegressionModule1 from './components/LinearRegressionModule1'
import LinearRegressionModule2 from './components/LinearRegressionModule2'
import LinearRegressionModule3 from './components/LinearRegressionModule3'
import LinearRegressionModule4 from './components/LinearRegressionModule4'
import LinearRegressionModule5 from './components/LinearRegressionModule5'
import LogisticRegressionModule1 from './components/LogisticRegressionModule1'
import LogisticRegressionModule2 from './components/LogisticRegressionModule2'
import LogisticRegressionModule3 from './components/LogisticRegressionModule3'
import LogisticRegressionModule4 from './components/LogisticRegressionModule4'
import LogisticRegressionModule5 from './components/LogisticRegressionModule5'

const modules = [
  {
    id: 1,
    title: 'Module 1: Machine Learning Kya Hai?',
    description: 'Pehle samjhenge ki machine learning kya hota hai, basic concept, aur kaise computer seekhta hai',
    component: LinearRegressionModule1
  },
  {
    id: 2,
    title: 'Module 2: Linear Regression - Basic Idea',
    description: 'Linear Regression kya hai? Seedhi line se prediction kaise karte hain - bilkul simple example ke saath',
    component: LinearRegressionModule2
  },
  {
    id: 3,
    title: 'Module 3: Linear Regression - Formula Samajhna',
    description: 'Formula kaise kaam karta hai - bina mathematics ke, visual examples ke saath',
    component: LinearRegressionModule3
  },
  {
    id: 4,
    title: 'Module 4: Linear Regression - Model Ko Train Karna',
    description: 'Computer kaise seekhta hai? Step by step samajhenge training process',
    component: LinearRegressionModule4
  },
  {
    id: 5,
    title: 'Module 5: Linear Regression - Real Life Examples',
    description: 'Real duniya mein kahan use hota hai? Practice examples aur interactive demos',
    component: LinearRegressionModule5
  },
  {
    id: 6,
    title: 'Module 6: Logistic Regression Kya Hai?',
    description: 'Yes/No questions ka answer dena - Classification ki duniya mein welcome',
    component: LogisticRegressionModule1
  },
  {
    id: 7,
    title: 'Module 7: Logistic Regression - S-Curve Samajhna',
    description: 'Sigmoid function kya hai? Kaise 0 se 1 tak probability milti hai',
    component: LogisticRegressionModule2
  },
  {
    id: 8,
    title: 'Module 8: Logistic Regression - Formula & Working',
    description: 'Logistic regression ka formula, aur ye Linear se kaise different hai',
    component: LogisticRegressionModule3
  },
  {
    id: 9,
    title: 'Module 9: Logistic Regression - Training Process',
    description: 'Model ko train karna, predictions improve karna, accuracy badhana',
    component: LogisticRegressionModule4
  },
  {
    id: 10,
    title: 'Module 10: Logistic Regression - Real Applications',
    description: 'Spam detection, disease prediction, aur bahut kuch - real examples',
    component: LogisticRegressionModule5
  }
]

export default function Home() {
  const [activeModule, setActiveModule] = useState<number | null>(null)

  const ActiveComponent = activeModule ? modules.find(m => m.id === activeModule)?.component : null

  return (
    <div className="container">
      <div className="header">
        <h1>🎓 Machine Learning Hinglish Guide</h1>
        <p>Linear & Logistic Regression - Bilkul Simple Language Mein</p>
        <p style={{ fontSize: '0.9rem', marginTop: '10px' }}>Koi maths ki tension nahi! Sab kuch visual aur step-by-step sikhenge</p>
      </div>

      {!activeModule ? (
        <>
          <div style={{ background: 'white', borderRadius: '15px', padding: '30px', marginBottom: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
            <h2 style={{ color: '#667eea', marginBottom: '20px' }}>📚 Course Overview</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333' }}>
              Is course mein hum seekhenge machine learning ke do sabse important algorithms:
            </p>
            <ul style={{ fontSize: '1.1rem', lineHeight: '2', color: '#333', marginTop: '15px', marginLeft: '30px' }}>
              <li><strong>Linear Regression</strong> - Numbers predict karna (jaise: ghar ki price, temperature, etc.)</li>
              <li><strong>Logistic Regression</strong> - Yes/No decide karna (jaise: spam hai ya nahi, disease hai ya nahi)</li>
            </ul>
            <div style={{ background: '#e3f2fd', borderRadius: '10px', padding: '20px', marginTop: '20px', borderLeft: '5px solid #2196f3' }}>
              <strong style={{ color: '#1976d2' }}>🎯 Kiske liye hai ye course?</strong>
              <p style={{ marginTop: '10px', color: '#333' }}>Bilkul beginners ke liye! Agar aapko maths nahi aati, coding nahi aati - koi problem nahi. Hum sab kuch scratch se, visual examples ke saath sikhayenge.</p>
            </div>
          </div>

          <div className="modules-grid">
            {modules.map(module => (
              <div
                key={module.id}
                className="module-card"
                onClick={() => setActiveModule(module.id)}
              >
                <div className="topic-number">{module.id}</div>
                <h2>{module.title}</h2>
                <p>{module.description}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div style={{ marginBottom: '20px' }}>
            <button
              className="btn btn-secondary"
              onClick={() => setActiveModule(null)}
            >
              ← All Modules Par Wapas Jao
            </button>
          </div>
          {ActiveComponent && <ActiveComponent />}
          <div className="navigation-buttons">
            <button
              className="btn btn-secondary"
              onClick={() => {
                if (activeModule > 1) setActiveModule(activeModule - 1)
              }}
              disabled={activeModule === 1}
              style={{ opacity: activeModule === 1 ? 0.5 : 1 }}
            >
              ← Previous Module
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setActiveModule(null)}
            >
              All Modules
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                if (activeModule < modules.length) setActiveModule(activeModule + 1)
              }}
              disabled={activeModule === modules.length}
              style={{ opacity: activeModule === modules.length ? 0.5 : 1 }}
            >
              Next Module →
            </button>
          </div>
        </>
      )}
    </div>
  )
}
