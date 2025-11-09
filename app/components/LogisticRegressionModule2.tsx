'use client'

import { useState, useEffect, useRef } from 'react'

export default function LogisticRegressionModule2() {
  const [inputValue, setInputValue] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const sigmoid = (x: number) => 1 / (1 + Math.exp(-x))

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw axes
    ctx.strokeStyle = '#333'
    ctx.lineWidth = 2

    // X-axis
    ctx.beginPath()
    ctx.moveTo(50, 200)
    ctx.lineTo(550, 200)
    ctx.stroke()

    // Y-axis
    ctx.beginPath()
    ctx.moveTo(300, 350)
    ctx.lineTo(300, 50)
    ctx.stroke()

    // Draw sigmoid curve
    ctx.strokeStyle = '#667eea'
    ctx.lineWidth = 3
    ctx.beginPath()

    for (let x = -6; x <= 6; x += 0.1) {
      const px = 300 + x * 40
      const py = 200 - sigmoid(x) * 140 + 70
      if (x === -6) {
        ctx.moveTo(px, py)
      } else {
        ctx.lineTo(px, py)
      }
    }
    ctx.stroke()

    // Draw labels
    ctx.fillStyle = '#333'
    ctx.font = '12px Arial'
    ctx.fillText('0', 285, 215)
    ctx.fillText('Input (x)', 520, 220)
    ctx.fillText('Output (Probability)', 310, 70)

    // Draw 0.5 line
    ctx.strokeStyle = '#e74c3c'
    ctx.lineWidth = 1
    ctx.setLineDash([5, 5])
    ctx.beginPath()
    ctx.moveTo(50, 130)
    ctx.lineTo(550, 130)
    ctx.stroke()
    ctx.setLineDash([])

    ctx.fillStyle = '#e74c3c'
    ctx.fillText('0.5 (50%)', 20, 135)

    // Draw 1.0 and 0.0 labels
    ctx.fillStyle = '#2ecc71'
    ctx.fillText('1.0', 275, 75)
    ctx.fillStyle = '#e74c3c'
    ctx.fillText('0.0', 275, 340)

    // Highlight current point
    const px = 300 + inputValue * 40
    const py = 200 - sigmoid(inputValue) * 140 + 70
    ctx.fillStyle = '#ff6b6b'
    ctx.beginPath()
    ctx.arc(px, py, 8, 0, Math.PI * 2)
    ctx.fill()

  }, [inputValue])

  return (
    <div className="content-section">
      <h2>Module 7: S-Curve (Sigmoid Function) Samajhna 〰️</h2>

      <div className="key-point">
        <strong>🎯 Is Module Mein:</strong> Sigmoid function kya hai? Ye kaise kaam karta hai?
        Kaise ye kisi bhi value ko <span className="hinglish-text">0 aur 1 ke beech</span> convert kar deta hai?
      </div>

      <h3>Sigmoid Function Kya Hai? 🪄</h3>

      <div className="visual-example">
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          <strong>Sigmoid</strong> ek <span className="hinglish-text">mathematical function</span> hai jo
          kisi bhi number (positive, negative, kitna bhi bada/chhota) ko <strong>0 aur 1 ke beech</strong> convert kar deta hai!
        </p>

        <div className="formula-box" style={{ marginTop: '20px' }}>
          <p style={{ marginBottom: '15px' }}>Sigmoid Function Formula:</p>
          <code>σ(x) = 1 / (1 + e^(-x))</code>
          <p style={{ marginTop: '15px', fontSize: '0.9rem', color: '#666' }}>
            Tension mat lo! Formula yaad karne ki zarurat nahi. Bas samajhna important hai ki ye kya karta hai.
          </p>
        </div>
      </div>

      <h3>Interactive Sigmoid Curve 📊</h3>

      <div className="interactive-chart">
        <canvas
          ref={canvasRef}
          width={600}
          height={400}
          style={{ border: '1px solid #ddd', borderRadius: '8px', background: 'white', marginBottom: '20px' }}
        />

        <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '10px' }}>
          <label style={{ display: 'block', marginBottom: '15px', fontSize: '1.1rem', fontWeight: 'bold' }}>
            Input Value (x): {inputValue.toFixed(1)}
          </label>
          <input
            type="range"
            min="-6"
            max="6"
            step="0.1"
            value={inputValue}
            onChange={(e) => setInputValue(Number(e.target.value))}
            style={{ width: '100%', height: '10px' }}
          />

          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '30px',
            borderRadius: '15px',
            marginTop: '30px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Output (Probability):</div>
            <div style={{ fontSize: '3rem', fontWeight: 'bold' }}>
              {sigmoid(inputValue).toFixed(4)}
            </div>
            <div style={{ fontSize: '1.5rem', marginTop: '10px' }}>
              ({(sigmoid(inputValue) * 100).toFixed(2)}%)
            </div>
          </div>

          <div style={{ marginTop: '20px', background: 'white', padding: '20px', borderRadius: '10px' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Interpretation:</p>
            {sigmoid(inputValue) < 0.5 ? (
              <p style={{ color: '#e74c3c', fontSize: '1.1rem', fontWeight: 'bold' }}>
                ❌ Class 0 (Probability &lt; 50%)
              </p>
            ) : (
              <p style={{ color: '#2ecc71', fontSize: '1.1rem', fontWeight: 'bold' }}>
                ✅ Class 1 (Probability ≥ 50%)
              </p>
            )}
          </div>
        </div>

        <p style={{ textAlign: 'center', marginTop: '20px', color: '#666' }}>
          👆 Slider move karo aur dekho kaise output hamesha 0 aur 1 ke beech rahta hai!
        </p>
      </div>

      <h3>Sigmoid Curve Ke Important Points 🎯</h3>

      <div className="visual-example">
        <ul className="step-by-step">
          <li>
            <strong>Jab x = 0:</strong><br/>
            Output exactly 0.5 (50%) hota hai
            <div style={{ background: '#f8f9fa', padding: '15px', marginTop: '10px', borderRadius: '8px' }}>
              Ye middle point hai - equal chance for both classes
            </div>
          </li>
          <li>
            <strong>Jab x bahut positive ho (jaise 5, 10, 100):</strong><br/>
            Output 1 (100%) ke karib chala jaata hai
            <div style={{ background: '#e8f5e9', padding: '15px', marginTop: '10px', borderRadius: '8px' }}>
              Matlab: Almost certain ki Class 1 hai ✅
            </div>
          </li>
          <li>
            <strong>Jab x bahut negative ho (jaise -5, -10, -100):</strong><br/>
            Output 0 (0%) ke karib chala jaata hai
            <div style={{ background: '#ffebee', padding: '15px', marginTop: '10px', borderRadius: '8px' }}>
              Matlab: Almost certain ki Class 0 hai ❌
            </div>
          </li>
          <li>
            <strong>Jab x 0 ke aas-paas ho (-2 se +2):</strong><br/>
            Output 0.1 se 0.9 ke beech hota hai
            <div style={{ background: '#fff3cd', padding: '15px', marginTop: '10px', borderRadius: '8px' }}>
              Matlab: Uncertain zone - predictions less confident ⚠️
            </div>
          </li>
        </ul>
      </div>

      <h3>Examples Se Samajhte Hain 📚</h3>

      <div className="visual-example">
        <div className="example-box">
          <p><strong>Example Values:</strong></p>
          <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#667eea', color: 'white' }}>
                <th style={{ padding: '12px' }}>Input (x)</th>
                <th style={{ padding: '12px' }}>Sigmoid Output</th>
                <th style={{ padding: '12px' }}>Percentage</th>
                <th style={{ padding: '12px' }}>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: '#ffebee' }}>
                <td style={{ padding: '12px', textAlign: 'center' }}>-10</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>0.000045</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>0.0045%</td>
                <td style={{ padding: '12px' }}>Almost 0 - Class 0 confirmed</td>
              </tr>
              <tr>
                <td style={{ padding: '12px', textAlign: 'center' }}>-5</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>0.0067</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>0.67%</td>
                <td style={{ padding: '12px' }}>Very low - Class 0</td>
              </tr>
              <tr style={{ background: '#f8f9fa' }}>
                <td style={{ padding: '12px', textAlign: 'center' }}>-2</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>0.119</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>11.9%</td>
                <td style={{ padding: '12px' }}>Low - Class 0</td>
              </tr>
              <tr style={{ background: '#fff3cd' }}>
                <td style={{ padding: '12px', textAlign: 'center' }}>0</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>0.5</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>50%</td>
                <td style={{ padding: '12px' }}>Boundary - Uncertain</td>
              </tr>
              <tr style={{ background: '#f8f9fa' }}>
                <td style={{ padding: '12px', textAlign: 'center' }}>2</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>0.881</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>88.1%</td>
                <td style={{ padding: '12px' }}>High - Class 1</td>
              </tr>
              <tr>
                <td style={{ padding: '12px', textAlign: 'center' }}>5</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>0.9933</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>99.33%</td>
                <td style={{ padding: '12px' }}>Very high - Class 1</td>
              </tr>
              <tr style={{ background: '#e8f5e9' }}>
                <td style={{ padding: '12px', textAlign: 'center' }}>10</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>0.99995</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>99.995%</td>
                <td style={{ padding: '12px' }}>Almost 1 - Class 1 confirmed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3>Why S-Shape? Kyu Curve S Jaisa Hai? 🤔</h3>

      <div className="visual-example">
        <div className="example-box">
          <p><strong>S-Curve Ki Characteristics:</strong></p>
          <ul className="step-by-step">
            <li>
              <strong>Smooth Transition:</strong><br/>
              0 se 1 tak gradually change hota hai, suddenly nahi
              <div style={{ background: '#f8f9fa', padding: '10px', marginTop: '5px', borderRadius: '5px', fontSize: '0.9rem' }}>
                Real life mein bhi decisions aise hote hain - gradually confidence badhta hai
              </div>
            </li>
            <li>
              <strong>Bounded Output:</strong><br/>
              Output kabhi 0 se niche ya 1 se upar nahi jaata
              <div style={{ background: '#f8f9fa', padding: '10px', marginTop: '5px', borderRadius: '5px', fontSize: '0.9rem' }}>
                Perfect for probabilities jo 0-1 ke beech hone chahiye
              </div>
            </li>
            <li>
              <strong>Steep in Middle:</strong><br/>
              0 ke aas-paas bahut fast change hota hai
              <div style={{ background: '#f8f9fa', padding: '10px', marginTop: '5px', borderRadius: '5px', fontSize: '0.9rem' }}>
                Clear separation between two classes - good decision boundary
              </div>
            </li>
            <li>
              <strong>Flat at Extremes:</strong><br/>
              Very positive aur very negative values par change slow hai
              <div style={{ background: '#f8f9fa', padding: '10px', marginTop: '5px', borderRadius: '5px', fontSize: '0.9rem' }}>
                Jab confident ho tab thoda sa change zyada farak nahi dalta
              </div>
            </li>
          </ul>
        </div>
      </div>

      <h3>Real World Analogy 🌍</h3>

      <div className="visual-example">
        <div className="example-box">
          <p><strong>Light Switch vs Dimmer Switch 💡</strong></p>

          <div style={{ marginTop: '20px' }}>
            <div style={{ background: '#ffebee', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>❌ Normal Classification (Sharp Boundary):</p>
              <p style={{ lineHeight: '1.8' }}>
                Light switch ki tarah - ya to ON (1) ya OFF (0). Koi beech ki state nahi.<br/>
                <span style={{ fontSize: '0.9rem', color: '#666' }}>
                  Problem: Uncertainty handle nahi kar sakta. Agar 49.9% confidence hai to OFF, 50.1% hai to ON?
                </span>
              </p>
            </div>

            <div style={{ background: '#e8f5e9', padding: '20px', borderRadius: '10px' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>✅ Sigmoid (Smooth Boundary):</p>
              <p style={{ lineHeight: '1.8' }}>
                Dimmer switch ki tarah - gradually brightness badhta hai 0% se 100% tak.<br/>
                <span style={{ fontSize: '0.9rem', color: '#666' }}>
                  Benefit: Uncertainty ko represent kar sakta hai. 60% confident = thoda bright, 90% confident = bahut bright
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="example-box" style={{ marginTop: '20px' }}>
          <p><strong>Door Opening Analogy 🚪</strong></p>
          <p style={{ marginTop: '15px', lineHeight: '1.8' }}>
            Socho ek door hai jo gradually khulta hai:
          </p>
          <ul style={{ marginLeft: '30px', marginTop: '15px', lineHeight: '2' }}>
            <li><strong>x = -10:</strong> Door bilkul band hai (0% open)</li>
            <li><strong>x = -2:</strong> Door thoda sa khula hai (12% open)</li>
            <li><strong>x = 0:</strong> Door half way open hai (50% open)</li>
            <li><strong>x = 2:</strong> Door kaafi khula hai (88% open)</li>
            <li><strong>x = 10:</strong> Door completely khula hai (100% open)</li>
          </ul>
          <p style={{ marginTop: '15px', color: '#667eea', fontWeight: 'bold', background: '#e3f2fd', padding: '15px', borderRadius: '8px' }}>
            Sigmoid function bhi aise hi gradually transition karta hai! 🎯
          </p>
        </div>
      </div>

      <h3>Logistic Regression Mein Kaise Use Hota Hai? 🔗</h3>

      <div className="visual-example">
        <ul className="step-by-step">
          <li>
            <strong>Step 1: Linear Calculation</strong><br/>
            Pehle normal linear regression ki tarah calculate karo
            <div className="formula-box" style={{ marginTop: '10px' }}>
              <code>z = mx + c</code>
              <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#666' }}>
                Ye koi bhi value ho sakti hai: -100, 5, 200, kuch bhi
              </p>
            </div>
          </li>
          <li>
            <strong>Step 2: Sigmoid Apply Karo</strong><br/>
            Ab is z ko sigmoid function se pass karo
            <div className="formula-box" style={{ marginTop: '10px' }}>
              <code>Probability = σ(z) = 1 / (1 + e^(-z))</code>
              <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#666' }}>
                Ab output 0 aur 1 ke beech aa gaya!
              </p>
            </div>
          </li>
          <li>
            <strong>Step 3: Decision Lena</strong><br/>
            Probability dekh kar final class decide karo
            <div style={{ background: '#f8f9fa', padding: '15px', marginTop: '10px', borderRadius: '8px' }}>
              If Probability ≥ 0.5 → Class 1<br/>
              If Probability &lt; 0.5 → Class 0
            </div>
          </li>
        </ul>
      </div>

      <h3>Complete Example 🎓</h3>

      <div className="visual-example">
        <div className="example-box">
          <p><strong>Problem: Email Spam Detection</strong></p>

          <div style={{ marginTop: '20px' }}>
            <p style={{ fontWeight: 'bold', background: '#e3f2fd', padding: '15px', borderRadius: '8px' }}>
              Suppose hamara model ne seekha hai:<br/>
              z = 2×(number_of_spam_words) - 5
            </p>

            <div style={{ marginTop: '20px' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>Email 1: 1 spam word hai</p>
              <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', marginBottom: '10px' }}>
                <strong>Step 1:</strong> z = 2×1 - 5 = -3
              </div>
              <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', marginBottom: '10px' }}>
                <strong>Step 2:</strong> P = sigmoid(-3) = 0.047 (4.7%)
              </div>
              <div style={{ background: '#e8f5e9', padding: '15px', borderRadius: '8px' }}>
                <strong>Decision:</strong> P &lt; 0.5 → <strong>Not Spam</strong> ✅
              </div>
            </div>

            <div style={{ marginTop: '30px' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>Email 2: 3 spam words hain</p>
              <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', marginBottom: '10px' }}>
                <strong>Step 1:</strong> z = 2×3 - 5 = 1
              </div>
              <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', marginBottom: '10px' }}>
                <strong>Step 2:</strong> P = sigmoid(1) = 0.731 (73.1%)
              </div>
              <div style={{ background: '#ffebee', padding: '15px', borderRadius: '8px' }}>
                <strong>Decision:</strong> P ≥ 0.5 → <strong>Spam</strong> 🚫
              </div>
            </div>

            <div style={{ marginTop: '30px' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>Email 3: 5 spam words hain</p>
              <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', marginBottom: '10px' }}>
                <strong>Step 1:</strong> z = 2×5 - 5 = 5
              </div>
              <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', marginBottom: '10px' }}>
                <strong>Step 2:</strong> P = sigmoid(5) = 0.993 (99.3%)
              </div>
              <div style={{ background: '#ffebee', padding: '15px', borderRadius: '8px' }}>
                <strong>Decision:</strong> P ≥ 0.5 → <strong>Definitely Spam!</strong> 🚫
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="key-point" style={{ marginTop: '30px' }}>
        <strong>🎓 Is Module Mein Humne Kya Seekha:</strong>
        <ul style={{ marginTop: '15px', marginLeft: '20px', lineHeight: '2' }}>
          <li>Sigmoid function kisi bhi number ko 0-1 ke beech convert kar deta hai</li>
          <li>S-shaped curve hota hai - smooth transition 0 se 1 tak</li>
          <li>x = 0 par output exactly 0.5 hota hai</li>
          <li>Positive x → output 1 ki taraf jaata hai</li>
          <li>Negative x → output 0 ki taraf jaata hai</li>
          <li>Output probability represent karta hai (0-100%)</li>
          <li>Logistic regression mein: Linear calculation → Sigmoid → Decision</li>
        </ul>
      </div>

      <div style={{ background: '#e8f5e9', borderRadius: '10px', padding: '20px', marginTop: '30px' }}>
        <h4 style={{ color: '#2e7d32' }}>✅ Next Module Mein Kya Seekhenge?</h4>
        <p style={{ marginTop: '10px', color: '#333' }}>
          Ab hum complete logistic regression formula samjhenge, aur ye linear regression se
          exactly kaise different hai - detailed comparison ke saath! 🎯
        </p>
      </div>
    </div>
  )
}
