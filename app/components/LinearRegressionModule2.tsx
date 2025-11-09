'use client'

import { useEffect, useRef, useState } from 'react'

export default function LinearRegressionModule2() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [showLine, setShowLine] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw axes
    ctx.strokeStyle = '#333'
    ctx.lineWidth = 2

    // X-axis
    ctx.beginPath()
    ctx.moveTo(50, 350)
    ctx.lineTo(550, 350)
    ctx.stroke()

    // Y-axis
    ctx.beginPath()
    ctx.moveTo(50, 350)
    ctx.lineTo(50, 50)
    ctx.stroke()

    // Labels
    ctx.fillStyle = '#333'
    ctx.font = '14px Arial'
    ctx.fillText('Study Hours (Kitne Ghante Padha)', 200, 380)
    ctx.save()
    ctx.translate(20, 200)
    ctx.rotate(-Math.PI / 2)
    ctx.fillText('Marks (Score)', 0, 0)
    ctx.restore()

    // Data points
    const dataPoints = [
      { x: 1, y: 45, label: '1hr → 45%' },
      { x: 2, y: 55, label: '2hr → 55%' },
      { x: 3, y: 62, label: '3hr → 62%' },
      { x: 4, y: 70, label: '4hr → 70%' },
      { x: 5, y: 78, label: '5hr → 78%' },
      { x: 6, y: 85, label: '6hr → 85%' },
      { x: 7, y: 92, label: '7hr → 92%' }
    ]

    dataPoints.forEach(point => {
      const px = 50 + (point.x * 70)
      const py = 350 - (point.y * 3)

      ctx.fillStyle = '#667eea'
      ctx.beginPath()
      ctx.arc(px, py, 6, 0, Math.PI * 2)
      ctx.fill()

      ctx.fillStyle = '#333'
      ctx.font = '11px Arial'
      ctx.fillText(point.label, px + 10, py - 10)
    })

    // Draw line if enabled
    if (showLine) {
      ctx.strokeStyle = '#ff6b6b'
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.moveTo(50 + 70, 350 - 45 * 3)
      ctx.lineTo(50 + 7 * 70, 350 - 92 * 3)
      ctx.stroke()

      // Add prediction
      ctx.fillStyle = '#ff6b6b'
      ctx.font = 'bold 14px Arial'
      ctx.fillText('🔮 Prediction Line!', 300, 100)

      // Show prediction for 8 hours
      const px8 = 50 + (8 * 70)
      const py8 = 350 - (98 * 3)
      ctx.fillStyle = '#2ecc71'
      ctx.beginPath()
      ctx.arc(px8, py8, 8, 0, Math.PI * 2)
      ctx.fill()
      ctx.fillStyle = '#2ecc71'
      ctx.font = 'bold 12px Arial'
      ctx.fillText('8hr → 98% 🎯', px8 - 40, py8 - 15)
    }
  }, [showLine])

  return (
    <div className="content-section">
      <h2>Module 2: Linear Regression - Basic Idea 📈</h2>

      <div className="key-point">
        <strong>🎯 Simple Definition:</strong> Linear Regression matlab ek <span className="hinglish-text">seedhi line</span> draw karna
        jo data points se pass ho. Is line ki help se hum future ki <span className="hinglish-text">predictions</span> kar sakte hain!
      </div>

      <h3>Linear Matlab Kya? 🤔</h3>
      <p>
        <strong>"Linear"</strong> matlab <span className="hinglish-text">seedhi line</span> (straight line).
        Jab do cheezon mein <strong>seedha relation</strong> ho, to hum unhe linear relationship kehte hain.
      </p>

      <div className="visual-example">
        <h4>Linear Relationship Ke Examples:</h4>
        <div className="example-box">
          <p><strong>✅ Example 1: Study Hours aur Marks</strong></p>
          <ul style={{ marginLeft: '30px', marginTop: '10px', lineHeight: '2' }}>
            <li>1 hour padha → 45 marks mile</li>
            <li>2 hours padha → 55 marks mile</li>
            <li>3 hours padha → 62 marks mile</li>
            <li>4 hours padha → 70 marks mile</li>
          </ul>
          <p style={{ marginTop: '15px', color: '#667eea', fontWeight: 'bold' }}>
            ➡️ Dekho! Jitna zyada padhoge, utne zyada marks milenge. Ye hai LINEAR relationship! 📚
          </p>
        </div>

        <div className="example-box" style={{ marginTop: '20px' }}>
          <p><strong>✅ Example 2: Distance aur Petrol</strong></p>
          <ul style={{ marginLeft: '30px', marginTop: '10px', lineHeight: '2' }}>
            <li>10 km chalaye → 1 liter petrol use hua</li>
            <li>20 km chalaye → 2 liter petrol use hua</li>
            <li>30 km chalaye → 3 liter petrol use hua</li>
          </ul>
          <p style={{ marginTop: '15px', color: '#667eea', fontWeight: 'bold' }}>
            ➡️ Jitna zyada chaloge, utna zyada petrol lagega! 🚗
          </p>
        </div>

        <div className="example-box" style={{ marginTop: '20px' }}>
          <p><strong>✅ Example 3: Temperature aur Ice Cream Sales</strong></p>
          <ul style={{ marginLeft: '30px', marginTop: '10px', lineHeight: '2' }}>
            <li>25°C temperature → 50 ice creams biki</li>
            <li>30°C temperature → 80 ice creams biki</li>
            <li>35°C temperature → 110 ice creams biki</li>
          </ul>
          <p style={{ marginTop: '15px', color: '#667eea', fontWeight: 'bold' }}>
            ➡️ Jitna zyada garmi, utna zyada ice cream bikti hai! 🍦
          </p>
        </div>
      </div>

      <h3>Regression Matlab Kya? 🎯</h3>
      <p>
        <strong>"Regression"</strong> matlab <span className="hinglish-text">number predict karna</span>.
        Jab hume koi continuous value (jaise price, temperature, marks) predict karni ho, tab hum regression use karte hain.
      </p>

      <div className="comparison-table" style={{ marginTop: '20px' }}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Kya Predict Karta Hai</th>
            <th>Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Regression</strong></td>
            <td>Numbers / Continuous Values</td>
            <td>Ghar ki price: ₹50 lakh<br/>Temperature: 28°C<br/>Salary: ₹8 lakh/year</td>
          </tr>
          <tr>
            <td><strong>Classification</strong></td>
            <td>Categories / Yes/No</td>
            <td>Email: Spam ya Not Spam<br/>Disease: Hai ya Nahi<br/>Pass/Fail</td>
          </tr>
        </tbody>
      </div>

      <h3>Visual Example: Study Hours vs Marks 📊</h3>

      <div className="interactive-chart">
        <canvas
          ref={canvasRef}
          width={600}
          height={400}
          style={{ border: '1px solid #ddd', borderRadius: '8px', background: 'white' }}
        />
        <div className="button-group" style={{ marginTop: '20px' }}>
          <button
            className="btn btn-primary"
            onClick={() => setShowLine(!showLine)}
          >
            {showLine ? '❌ Line Hide Karo' : '✅ Prediction Line Dikhao'}
          </button>
        </div>
        <p style={{ marginTop: '15px', color: '#666', textAlign: 'center' }}>
          👆 Button click karke dekho kaise line se prediction hoti hai!
        </p>
      </div>

      <div className="visual-example">
        <h4>Is Graph Ko Samajhte Hain:</h4>
        <ul className="step-by-step">
          <li>
            <strong>Blue Points (Nile Dots):</strong> Ye actual data hai jo humne dekha hai.
            <p style={{ color: '#666', marginTop: '5px' }}>
              Har student kitne ghante pada aur kitne marks mile - ye sab real data hai.
            </p>
          </li>
          <li>
            <strong>Red Line (Lal Rekha):</strong> Ye prediction line hai!
            <p style={{ color: '#666', marginTop: '5px' }}>
              Is line ki help se hum future predictions kar sakte hain.
            </p>
          </li>
          <li>
            <strong>Green Point (Hara Dot):</strong> Ye naya prediction hai!
            <p style={{ color: '#666', marginTop: '5px' }}>
              Agar koi student 8 hours padhega, to line ke according usse 98% marks milne chahiye!
            </p>
          </li>
        </ul>
      </div>

      <h3>Linear Regression Ka Goal Kya Hai? 🎯</h3>

      <div className="key-point">
        <strong>Main Goal:</strong> Ek <span className="hinglish-text">BEST FIT LINE</span> dhundhna!
        <p style={{ marginTop: '15px' }}>
          Best fit line wo hoti hai jo sabhi data points ke <strong>sabse paas</strong> se guzarti hai.
          Aise line se predictions zyada accurate hoti hain.
        </p>
      </div>

      <div className="visual-example">
        <h4>Best Fit Line Kaise Milti Hai? 🔍</h4>
        <div className="example-box">
          <p><strong>Socho ek line draw karni hai jo sab points ke paas se ho:</strong></p>
          <ul style={{ marginLeft: '30px', marginTop: '15px', lineHeight: '2' }}>
            <li>
              <strong>Bad Line ❌:</strong> Jo kuch points se bahut door hai
              <p style={{ color: '#e74c3c', marginTop: '5px' }}>
                → Isse predictions galat hongi!
              </p>
            </li>
            <li>
              <strong>Good Line ✅:</strong> Jo sabhi points ke paas se guzarti hai
              <p style={{ color: '#2ecc71', marginTop: '5px' }}>
                → Isse predictions sahi hongi!
              </p>
            </li>
          </ul>
        </div>
      </div>

      <h3>Linear Regression Kab Use Karte Hain? 🤷‍♂️</h3>

      <table className="comparison-table">
        <thead>
          <tr>
            <th>Situation</th>
            <th>Question</th>
            <th>Linear Regression?</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ background: '#e8f5e9' }}>
            <td>Ghar Ki Price</td>
            <td>2000 sq ft ka ghar kitne ka hoga?</td>
            <td><strong style={{ color: '#2ecc71' }}>✅ YES! Number predict karna hai</strong></td>
          </tr>
          <tr style={{ background: '#e8f5e9' }}>
            <td>Sales Prediction</td>
            <td>Next month kitna revenue hoga?</td>
            <td><strong style={{ color: '#2ecc71' }}>✅ YES! Amount predict karna hai</strong></td>
          </tr>
          <tr style={{ background: '#e8f5e9' }}>
            <td>Student Marks</td>
            <td>5 hours padhne par kitne marks milenge?</td>
            <td><strong style={{ color: '#2ecc71' }}>✅ YES! Score predict karna hai</strong></td>
          </tr>
          <tr style={{ background: '#ffebee' }}>
            <td>Email Spam</td>
            <td>Ye email spam hai ya nahi?</td>
            <td><strong style={{ color: '#e74c3c' }}>❌ NO! Yes/No answer hai, number nahi</strong></td>
          </tr>
          <tr style={{ background: '#ffebee' }}>
            <td>Disease Detection</td>
            <td>Patient ko diabetes hai ya nahi?</td>
            <td><strong style={{ color: '#e74c3c' }}>❌ NO! Category hai, number nahi</strong></td>
          </tr>
        </tbody>
      </table>

      <h3>Real World Examples 🌍</h3>

      <div className="example-box">
        <h4 style={{ color: '#667eea' }}>1. 🏠 Real Estate (Property Business)</h4>
        <p><strong>Problem:</strong> Ghar ki price predict karni hai</p>
        <p><strong>Input:</strong> Ghar ka size (sq ft), location, rooms ki sankhya</p>
        <p><strong>Output:</strong> Price in Rupees (₹50 lakh, ₹1 crore, etc.)</p>
      </div>

      <div className="example-box" style={{ marginTop: '15px' }}>
        <h4 style={{ color: '#667eea' }}>2. 📈 Stock Market</h4>
        <p><strong>Problem:</strong> Stock ka price predict karna</p>
        <p><strong>Input:</strong> Past prices, trading volume, market trends</p>
        <p><strong>Output:</strong> Tomorrow ka stock price</p>
      </div>

      <div className="example-box" style={{ marginTop: '15px' }}>
        <h4 style={{ color: '#667eea' }}>3. 🌡️ Weather Prediction</h4>
        <p><strong>Problem:</strong> Temperature predict karna</p>
        <p><strong>Input:</strong> Past temperature data, humidity, season</p>
        <p><strong>Output:</strong> Kal ka temperature (28°C, 32°C, etc.)</p>
      </div>

      <div className="example-box" style={{ marginTop: '15px' }}>
        <h4 style={{ color: '#667eea' }}>4. 💰 Salary Prediction</h4>
        <p><strong>Problem:</strong> Experience ke hisaab se salary predict karna</p>
        <p><strong>Input:</strong> Years of experience, skills, education</p>
        <p><strong>Output:</strong> Expected salary (₹5 lakh, ₹10 lakh, etc.)</p>
      </div>

      <div className="key-point" style={{ marginTop: '30px' }}>
        <strong>🎓 Is Module Mein Humne Kya Seekha:</strong>
        <ul style={{ marginTop: '15px', marginLeft: '20px', lineHeight: '2' }}>
          <li><strong>Linear</strong> matlab seedhi line - do cheezon mein sidha relation</li>
          <li><strong>Regression</strong> matlab numbers predict karna</li>
          <li>Linear Regression = Seedhi line se numbers predict karna</li>
          <li>Best fit line dhundhna hai jo sabhi points ke paas se ho</li>
          <li>Jab continuous values predict karni ho tab use karte hain</li>
          <li>Real world examples: House prices, salary, temperature, etc.</li>
        </ul>
      </div>

      <div style={{ background: '#e8f5e9', borderRadius: '10px', padding: '20px', marginTop: '30px' }}>
        <h4 style={{ color: '#2e7d32' }}>✅ Next Module Mein Kya Seekhenge?</h4>
        <p style={{ marginTop: '10px', color: '#333' }}>
          Ab hum formula seekhenge - kaise mathematically line calculate karte hain.
          Par tension mat lo! Bina maths ke, simple examples se samjhayenge! 🎯
        </p>
      </div>
    </div>
  )
}
