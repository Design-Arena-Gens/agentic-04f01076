'use client'

import { useState } from 'react'

export default function LinearRegressionModule3() {
  const [m, setM] = useState(10)
  const [c, setC] = useState(40)

  const calculateY = (x: number) => m * x + c

  return (
    <div className="content-section">
      <h2>Module 3: Linear Regression - Formula Samajhna 📐</h2>

      <div className="key-point">
        <strong>🎯 Is Module Mein:</strong> Hum formula samjhenge - par <span className="hinglish-text">bilkul simple tarike se</span>,
        bina heavy maths ke! Sab visual examples se sikhayenge.
      </div>

      <h3>Line Ka Basic Formula 📝</h3>

      <div className="formula-box">
        <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>Line Ka Sabse Famous Formula:</p>
        <code>y = mx + c</code>
        <p style={{ marginTop: '15px', fontSize: '0.95rem', color: '#666' }}>
          (Ye formula school mein bhi padhaya jata hai - straight line ka equation)
        </p>
      </div>

      <div className="visual-example">
        <h4>Formula Ke Har Part Ko Samajhte Hain:</h4>

        <div className="example-box">
          <p><strong style={{ color: '#667eea', fontSize: '1.2rem' }}>x (Input)</strong></p>
          <p style={{ marginTop: '10px' }}>
            Ye hai wo cheez jisko hum <span className="hinglish-text">jaante hain</span>. Jiska data humara paas hai.
          </p>
          <p style={{ marginTop: '10px', background: '#f8f9fa', padding: '15px', borderRadius: '8px' }}>
            <strong>Examples:</strong><br/>
            • Ghar ka size (sq ft)<br/>
            • Study hours<br/>
            • Years of experience<br/>
            • Temperature
          </p>
          <p style={{ marginTop: '10px', color: '#764ba2', fontWeight: 'bold' }}>
            ➡️ Isko "Independent Variable" ya "Feature" kehte hain
          </p>
        </div>

        <div className="example-box" style={{ marginTop: '20px' }}>
          <p><strong style={{ color: '#667eea', fontSize: '1.2rem' }}>y (Output)</strong></p>
          <p style={{ marginTop: '10px' }}>
            Ye hai wo cheez jo hume <span className="hinglish-text">predict karni hai</span>. Jo hume jaanna hai.
          </p>
          <p style={{ marginTop: '10px', background: '#f8f9fa', padding: '15px', borderRadius: '8px' }}>
            <strong>Examples:</strong><br/>
            • Ghar ki price (₹)<br/>
            • Exam marks<br/>
            • Salary amount<br/>
            • Tomorrow's temperature
          </p>
          <p style={{ marginTop: '10px', color: '#764ba2', fontWeight: 'bold' }}>
            ➡️ Isko "Dependent Variable" ya "Target" kehte hain
          </p>
        </div>

        <div className="example-box" style={{ marginTop: '20px' }}>
          <p><strong style={{ color: '#ff6b6b', fontSize: '1.2rem' }}>m (Slope/Dhal)</strong></p>
          <p style={{ marginTop: '10px' }}>
            Ye batata hai line kitni <span className="hinglish-text">teekhi</span> (steep) hai. Matlab x badhne par y kitna badhega.
          </p>
          <p style={{ marginTop: '10px', background: '#f8f9fa', padding: '15px', borderRadius: '8px' }}>
            <strong>Example:</strong> Agar m = 10 hai, matlab:<br/>
            • x mein 1 increase → y mein 10 increase ⬆️<br/>
            • x mein 2 increase → y mein 20 increase ⬆️⬆️<br/>
            <br/>
            <strong>Agar m = -5 hai, matlab:</strong><br/>
            • x mein 1 increase → y mein 5 decrease ⬇️
          </p>
          <p style={{ marginTop: '10px', color: '#764ba2', fontWeight: 'bold' }}>
            ➡️ Isko "Coefficient" ya "Weight" kehte hain
          </p>
        </div>

        <div className="example-box" style={{ marginTop: '20px' }}>
          <p><strong style={{ color: '#ff6b6b', fontSize: '1.2rem' }}>c (Y-Intercept)</strong></p>
          <p style={{ marginTop: '10px' }}>
            Ye <span className="hinglish-text">starting point</span> hai. Jab x = 0 ho, tab y ki value kya hogi.
          </p>
          <p style={{ marginTop: '10px', background: '#f8f9fa', padding: '15px', borderRadius: '8px' }}>
            <strong>Example:</strong> Agar c = 40 hai, matlab:<br/>
            • Jab x = 0, tab bhi y = 40 se shuru hoga<br/>
            <br/>
            <strong>Real life example:</strong><br/>
            Ghar ki price prediction mein: "Base price ₹10 lakh hai, uske upar size ke according badhegi"<br/>
            Yahan c = ₹10 lakh (base price)
          </p>
          <p style={{ marginTop: '10px', color: '#764ba2', fontWeight: 'bold' }}>
            ➡️ Isko "Bias" ya "Intercept" kehte hain
          </p>
        </div>
      </div>

      <h3>Interactive Example - Formula Ko Khelo! 🎮</h3>

      <div className="interactive-chart">
        <h4 style={{ marginBottom: '20px' }}>Example: Study Hours → Marks Prediction</h4>

        <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
          <div className="formula-box">
            <code>Marks = {m} × Hours + {c}</code>
          </div>

          <div style={{ marginTop: '30px' }}>
            <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
              m (Slope) ki value badlo: {m}
            </label>
            <input
              type="range"
              min="0"
              max="20"
              value={m}
              onChange={(e) => setM(Number(e.target.value))}
              style={{ width: '100%', height: '8px' }}
            />
            <p style={{ marginTop: '10px', color: '#666', fontSize: '0.9rem' }}>
              m = {m} ka matlab: Har ek hour padhne par {m} marks badh jayenge
            </p>
          </div>

          <div style={{ marginTop: '30px' }}>
            <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
              c (Starting Point) ki value badlo: {c}
            </label>
            <input
              type="range"
              min="0"
              max="80"
              value={c}
              onChange={(e) => setC(Number(e.target.value))}
              style={{ width: '100%', height: '8px' }}
            />
            <p style={{ marginTop: '10px', color: '#666', fontSize: '0.9rem' }}>
              c = {c} ka matlab: Bina padhe bhi {c} marks mil jayenge (base knowledge)
            </p>
          </div>
        </div>

        <div style={{ background: 'white', padding: '20px', borderRadius: '10px', border: '2px solid #667eea' }}>
          <h4 style={{ color: '#667eea', marginBottom: '15px' }}>📊 Predictions:</h4>
          {[1, 2, 3, 4, 5].map(hours => (
            <div key={hours} style={{
              padding: '15px',
              background: hours % 2 === 0 ? '#f8f9fa' : 'white',
              borderRadius: '8px',
              marginBottom: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ fontWeight: 'bold' }}>{hours} hour(s) padhne par:</span>
              <span style={{
                background: '#667eea',
                color: 'white',
                padding: '8px 20px',
                borderRadius: '20px',
                fontWeight: 'bold'
              }}>
                {calculateY(hours)} marks
              </span>
            </div>
          ))}
        </div>

        <p style={{ marginTop: '20px', textAlign: 'center', color: '#764ba2', fontWeight: 'bold' }}>
          👆 Sliders ko move karo aur dekho predictions kaise change hoti hain!
        </p>
      </div>

      <h3>Real Example Step-by-Step 🔍</h3>

      <div className="visual-example">
        <h4>Example: Ghar Ki Price Predict Karna</h4>

        <div className="example-box">
          <p><strong>Diya gaya data:</strong></p>
          <ul style={{ marginLeft: '30px', marginTop: '15px', lineHeight: '2' }}>
            <li>1000 sq ft ka ghar → ₹30 lakh</li>
            <li>1500 sq ft ka ghar → ₹40 lakh</li>
            <li>2000 sq ft ka ghar → ₹50 lakh</li>
            <li>2500 sq ft ka ghar → ₹60 lakh</li>
          </ul>
        </div>

        <div className="example-box" style={{ marginTop: '20px' }}>
          <p><strong>Pattern dhundhte hain:</strong></p>
          <ul className="step-by-step">
            <li>
              Har 500 sq ft badhne par price ₹10 lakh badhti hai
              <p style={{ color: '#666', marginTop: '5px' }}>
                Matlab har 1 sq ft badhne par ₹2000 badhti hai
              </p>
            </li>
            <li>
              Starting point (base price) kya hai?
              <p style={{ color: '#666', marginTop: '5px' }}>
                Agar 1000 sq ft = ₹30 lakh, aur har sq ft ka rate ₹2000 hai<br/>
                To: 1000 × 2000 = ₹20 lakh (size ka contribution)<br/>
                Base price = ₹30 lakh - ₹20 lakh = ₹10 lakh
              </p>
            </li>
          </ul>
        </div>

        <div className="formula-box" style={{ marginTop: '20px' }}>
          <p style={{ marginBottom: '15px' }}>Formula Ban Gaya:</p>
          <code>Price = 2000 × Size + 10,00,000</code>
          <p style={{ marginTop: '15px', fontSize: '0.95rem', color: '#666' }}>
            Yahan: m = 2000 (per sq ft rate), c = 10,00,000 (base price)
          </p>
        </div>

        <div className="example-box" style={{ marginTop: '20px' }}>
          <p><strong>Ab naya prediction karte hain:</strong></p>
          <p style={{ background: '#e3f2fd', padding: '15px', borderRadius: '8px', marginTop: '15px' }}>
            <strong>Question:</strong> 1800 sq ft ka ghar kitne ka hoga? 🤔
          </p>
          <p style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', marginTop: '15px' }}>
            <strong>Calculation:</strong><br/>
            Price = 2000 × 1800 + 10,00,000<br/>
            Price = 36,00,000 + 10,00,000<br/>
            Price = 46,00,000
          </p>
          <p style={{ background: '#e8f5e9', padding: '15px', borderRadius: '8px', marginTop: '15px', fontWeight: 'bold', color: '#2e7d32' }}>
            <strong>Answer:</strong> ₹46 lakh (₹46,00,000) 🎯
          </p>
        </div>
      </div>

      <h3>Machine Learning Mein Formula Kaise Use Hota Hai? 🤖</h3>

      <div className="key-point">
        <strong>Important Point:</strong> Hum m aur c ki values <span className="hinglish-text">manually nahi calculate karte</span>!
        Computer automatically best values dhundh leta hai.
      </div>

      <div className="visual-example">
        <h4>Process Kya Hai:</h4>
        <ul className="step-by-step">
          <li>
            <strong>Data Dete Hain:</strong><br/>
            Hum computer ko sirf data points dete hain (x aur y values)
          </li>
          <li>
            <strong>Computer Try Karta Hai:</strong><br/>
            Computer different m aur c values try karta hai
            <p style={{ color: '#666', marginTop: '5px' }}>
              Example: m=5, c=20 try kiya... m=10, c=15 try kiya... m=8, c=30 try kiya...
            </p>
          </li>
          <li>
            <strong>Best Values Dhundhta Hai:</strong><br/>
            Jo values sabse accurate predictions de, wo select karta hai
          </li>
          <li>
            <strong>Formula Ready!</strong><br/>
            Ab ye formula use karke naye predictions kar sakte hain
          </li>
        </ul>
      </div>

      <h3>Multiple Features Ka Kya? 🤔</h3>

      <div className="visual-example">
        <h4>Pehle (Simple Linear Regression):</h4>
        <div className="formula-box">
          <code>y = mx + c</code>
          <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#666' }}>
            Sirf EK feature (x) hai
          </p>
        </div>

        <h4 style={{ marginTop: '30px' }}>Agar Multiple Features Hon To (Multiple Linear Regression):</h4>
        <div className="formula-box">
          <code>y = m₁x₁ + m₂x₂ + m₃x₃ + c</code>
          <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#666' }}>
            Teen features hain: x₁, x₂, x₃
          </p>
        </div>

        <div className="example-box" style={{ marginTop: '20px' }}>
          <p><strong>Real Example: Ghar Ki Price (Multiple Features)</strong></p>
          <div className="formula-box">
            <code>Price = m₁×Size + m₂×Rooms + m₃×Age + c</code>
          </div>
          <ul style={{ marginTop: '15px', marginLeft: '30px', lineHeight: '2' }}>
            <li><strong>x₁ (Size):</strong> Ghar ka area in sq ft</li>
            <li><strong>x₂ (Rooms):</strong> Kitne rooms hain</li>
            <li><strong>x₃ (Age):</strong> Ghar kitna purana hai</li>
          </ul>
          <p style={{ marginTop: '15px', background: '#f8f9fa', padding: '15px', borderRadius: '8px' }}>
            <strong>Example Calculation:</strong><br/>
            Size = 2000 sq ft, Rooms = 3, Age = 5 years<br/>
            <br/>
            Price = (2000 × 2000) + (3 × 5,00,000) + (5 × -50,000) + 10,00,000<br/>
            Price = 40,00,000 + 15,00,000 - 2,50,000 + 10,00,000<br/>
            Price = ₹62.5 lakh
          </p>
        </div>
      </div>

      <h3>Key Concepts Recap 📚</h3>

      <table className="comparison-table">
        <thead>
          <tr>
            <th>Term</th>
            <th>Symbol</th>
            <th>Matlab Kya Hai</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Input Feature</strong></td>
            <td>x</td>
            <td>Jo data humara paas hai (size, hours, etc.)</td>
          </tr>
          <tr>
            <td><strong>Output/Target</strong></td>
            <td>y</td>
            <td>Jo predict karna hai (price, marks, etc.)</td>
          </tr>
          <tr>
            <td><strong>Slope/Weight</strong></td>
            <td>m</td>
            <td>x ka y par kitna effect hai</td>
          </tr>
          <tr>
            <td><strong>Intercept/Bias</strong></td>
            <td>c</td>
            <td>Starting value (jab x = 0)</td>
          </tr>
        </tbody>
      </table>

      <div className="key-point" style={{ marginTop: '30px' }}>
        <strong>🎓 Is Module Mein Humne Kya Seekha:</strong>
        <ul style={{ marginTop: '15px', marginLeft: '20px', lineHeight: '2' }}>
          <li>Linear Regression ka formula: <strong>y = mx + c</strong></li>
          <li>Formula ke har part ka matlab - x, y, m, c</li>
          <li>m (slope) batata hai kitna steep line hai</li>
          <li>c (intercept) batata hai starting point kya hai</li>
          <li>Multiple features bhi use kar sakte hain</li>
          <li>Computer automatically best m aur c values dhundh leta hai</li>
        </ul>
      </div>

      <div style={{ background: '#e8f5e9', borderRadius: '10px', padding: '20px', marginTop: '30px' }}>
        <h4 style={{ color: '#2e7d32' }}>✅ Next Module Mein Kya Seekhenge?</h4>
        <p style={{ marginTop: '10px', color: '#333' }}>
          Ab hum seekhenge ki computer best m aur c values kaise dhundhta hai!
          Training process kya hota hai, errors kaise kam karte hain - sab step by step samjhenge! 🚀
        </p>
      </div>
    </div>
  )
}
