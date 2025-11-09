'use client'

import { useState } from 'react'

export default function LinearRegressionModule5() {
  const [houseSize, setHouseSize] = useState(1500)
  const [experience, setExperience] = useState(3)

  // House price prediction (simplified)
  const predictHousePrice = (size: number) => {
    const pricePerSqFt = 3000
    const basePrice = 1000000
    return (pricePerSqFt * size + basePrice) / 100000
  }

  // Salary prediction (simplified)
  const predictSalary = (exp: number) => {
    const salaryPerYear = 80000
    const baseSalary = 300000
    return (salaryPerYear * exp + baseSalary) / 100000
  }

  return (
    <div className="content-section">
      <h2>Module 5: Real Life Examples & Practice 🌍</h2>

      <div className="key-point">
        <strong>🎯 Is Module Mein:</strong> Linear Regression ko real world mein kaise use karte hain?
        Practical examples, interactive demos, aur applications dekhenge!
      </div>

      <h3>Example 1: House Price Prediction 🏠</h3>

      <div className="visual-example">
        <h4>Problem Statement:</h4>
        <p>
          Real estate company ko ghar ki price predict karni hai taaki wo customers ko
          accurate price bata sake.
        </p>

        <div className="example-box" style={{ marginTop: '20px' }}>
          <p><strong>📊 Available Data:</strong></p>
          <table style={{ width: '100%', marginTop: '15px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#667eea', color: 'white' }}>
                <th style={{ padding: '12px' }}>House Size (sq ft)</th>
                <th style={{ padding: '12px' }}>Price (₹ Lakh)</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: '#f8f9fa' }}>
                <td style={{ padding: '12px', textAlign: 'center' }}>800</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>34</td>
              </tr>
              <tr>
                <td style={{ padding: '12px', textAlign: 'center' }}>1000</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>40</td>
              </tr>
              <tr style={{ background: '#f8f9fa' }}>
                <td style={{ padding: '12px', textAlign: 'center' }}>1200</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>46</td>
              </tr>
              <tr>
                <td style={{ padding: '12px', textAlign: 'center' }}>1500</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>55</td>
              </tr>
              <tr style={{ background: '#f8f9fa' }}>
                <td style={{ padding: '12px', textAlign: 'center' }}>2000</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>70</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="interactive-chart" style={{ marginTop: '30px' }}>
          <h4 style={{ marginBottom: '20px' }}>🎮 Interactive Prediction Tool</h4>
          <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '10px' }}>
            <label style={{ display: 'block', marginBottom: '15px', fontSize: '1.1rem', fontWeight: 'bold' }}>
              Ghar Ka Size: {houseSize} sq ft
            </label>
            <input
              type="range"
              min="500"
              max="3000"
              step="100"
              value={houseSize}
              onChange={(e) => setHouseSize(Number(e.target.value))}
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
              <div style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Predicted Price:</div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold' }}>
                ₹{predictHousePrice(houseSize).toFixed(2)} Lakh
              </div>
            </div>

            <div style={{ marginTop: '20px', background: 'white', padding: '20px', borderRadius: '10px' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>📐 Formula Used:</p>
              <code style={{ fontSize: '1.1rem', color: '#667eea' }}>
                Price = (3000 × Size) + 10,00,000
              </code>
              <p style={{ marginTop: '15px', color: '#666', fontSize: '0.95rem' }}>
                Matlab: Har sq ft ka ₹3000, aur base price ₹10 lakh
              </p>
            </div>
          </div>
          <p style={{ textAlign: 'center', marginTop: '15px', color: '#666' }}>
            👆 Slider move karo aur dekho price kaise change hoti hai!
          </p>
        </div>
      </div>

      <h3>Example 2: Salary Prediction 💰</h3>

      <div className="visual-example">
        <h4>Problem Statement:</h4>
        <p>
          Company ko employees ki salary predict karni hai unke experience ke basis par.
        </p>

        <div className="example-box" style={{ marginTop: '20px' }}>
          <p><strong>📊 Available Data:</strong></p>
          <table style={{ width: '100%', marginTop: '15px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#667eea', color: 'white' }}>
                <th style={{ padding: '12px' }}>Years of Experience</th>
                <th style={{ padding: '12px' }}>Salary (₹ Lakh/year)</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: '#f8f9fa' }}>
                <td style={{ padding: '12px', textAlign: 'center' }}>1</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>3.8</td>
              </tr>
              <tr>
                <td style={{ padding: '12px', textAlign: 'center' }}>2</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>4.6</td>
              </tr>
              <tr style={{ background: '#f8f9fa' }}>
                <td style={{ padding: '12px', textAlign: 'center' }}>3</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>5.4</td>
              </tr>
              <tr>
                <td style={{ padding: '12px', textAlign: 'center' }}>5</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>7.0</td>
              </tr>
              <tr style={{ background: '#f8f9fa' }}>
                <td style={{ padding: '12px', textAlign: 'center' }}>8</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>9.4</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="interactive-chart" style={{ marginTop: '30px' }}>
          <h4 style={{ marginBottom: '20px' }}>🎮 Interactive Salary Calculator</h4>
          <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '10px' }}>
            <label style={{ display: 'block', marginBottom: '15px', fontSize: '1.1rem', fontWeight: 'bold' }}>
              Years of Experience: {experience} years
            </label>
            <input
              type="range"
              min="0"
              max="15"
              step="1"
              value={experience}
              onChange={(e) => setExperience(Number(e.target.value))}
              style={{ width: '100%', height: '10px' }}
            />

            <div style={{
              background: 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)',
              color: 'white',
              padding: '30px',
              borderRadius: '15px',
              marginTop: '30px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Predicted Salary:</div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold' }}>
                ₹{predictSalary(experience).toFixed(2)} Lakh/year
              </div>
            </div>

            <div style={{ marginTop: '20px', background: 'white', padding: '20px', borderRadius: '10px' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>📐 Formula Used:</p>
              <code style={{ fontSize: '1.1rem', color: '#2ecc71' }}>
                Salary = (80,000 × Experience) + 3,00,000
              </code>
              <p style={{ marginTop: '15px', color: '#666', fontSize: '0.95rem' }}>
                Matlab: Har year ka ₹80,000 increment, starting salary ₹3 lakh
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3>Real World Applications 🌟</h3>

      <div className="example-box">
        <h4 style={{ color: '#667eea' }}>1. 🌡️ Temperature Prediction</h4>
        <p><strong>Industry:</strong> Weather Forecasting, Agriculture</p>
        <p><strong>Use Case:</strong> Past data se future temperature predict karna</p>
        <p><strong>Features:</strong> Previous temperatures, season, humidity, wind speed</p>
        <p><strong>Benefit:</strong> Farmers ko crop planning mein madad, people ko travel planning mein madad</p>
      </div>

      <div className="example-box" style={{ marginTop: '15px' }}>
        <h4 style={{ color: '#667eea' }}>2. 📈 Stock Price Prediction</h4>
        <p><strong>Industry:</strong> Finance, Trading</p>
        <p><strong>Use Case:</strong> Stock ki future price predict karna</p>
        <p><strong>Features:</strong> Historical prices, trading volume, market trends, company earnings</p>
        <p><strong>Benefit:</strong> Investors ko buy/sell decisions mein madad</p>
      </div>

      <div className="example-box" style={{ marginTop: '15px' }}>
        <h4 style={{ color: '#667eea' }}>3. 🚗 Car Price Prediction</h4>
        <p><strong>Industry:</strong> Automobile, E-commerce</p>
        <p><strong>Use Case:</strong> Used car ki fair price determine karna</p>
        <p><strong>Features:</strong> Car age, kilometers driven, brand, model, condition</p>
        <p><strong>Benefit:</strong> Buyers aur sellers ko fair deal milti hai</p>
      </div>

      <div className="example-box" style={{ marginTop: '15px' }}>
        <h4 style={{ color: '#667eea' }}>4. 📊 Sales Forecasting</h4>
        <p><strong>Industry:</strong> Retail, E-commerce</p>
        <p><strong>Use Case:</strong> Next month/quarter ki sales predict karna</p>
        <p><strong>Features:</strong> Past sales, season, marketing spend, holidays</p>
        <p><strong>Benefit:</strong> Inventory management, budget planning, hiring decisions</p>
      </div>

      <div className="example-box" style={{ marginTop: '15px' }}>
        <h4 style={{ color: '#667eea' }}>5. ⚡ Energy Consumption Prediction</h4>
        <p><strong>Industry:</strong> Utilities, Smart Homes</p>
        <p><strong>Use Case:</strong> Electricity consumption predict karna</p>
        <p><strong>Features:</strong> Time of day, temperature, day of week, appliances</p>
        <p><strong>Benefit:</strong> Energy saving, cost reduction, grid management</p>
      </div>

      <div className="example-box" style={{ marginTop: '15px' }}>
        <h4 style={{ color: '#667eea' }}>6. 🏥 Medical Predictions</h4>
        <p><strong>Industry:</strong> Healthcare</p>
        <p><strong>Use Case:</strong> Patient metrics predict karna (blood pressure, recovery time, etc.)</p>
        <p><strong>Features:</strong> Age, weight, medical history, lifestyle</p>
        <p><strong>Benefit:</strong> Early intervention, personalized treatment plans</p>
      </div>

      <h3>Linear Regression Ke Limitations 🚫</h3>

      <div className="visual-example">
        <h4>Kab Linear Regression Achha Kaam Nahi Karta:</h4>

        <div className="example-box">
          <p><strong>❌ 1. Non-Linear Relationships</strong></p>
          <p style={{ marginTop: '10px', lineHeight: '1.8' }}>
            Jab data mein curve ho, seedhi line se fit nahi hota.<br/>
            <span style={{ color: '#666', fontSize: '0.9rem' }}>
              Example: Population growth (exponential), product lifecycle (S-curve)
            </span>
          </p>
        </div>

        <div className="example-box" style={{ marginTop: '15px' }}>
          <p><strong>❌ 2. Outliers (Extreme Values)</strong></p>
          <p style={{ marginTop: '10px', lineHeight: '1.8' }}>
            Agar data mein kuch bahut alag values hain, to wo line ko bigaad dete hain.<br/>
            <span style={{ color: '#666', fontSize: '0.9rem' }}>
              Example: Sab ghar 30-50 lakh ke hain, par ek mansion 5 crore ka hai
            </span>
          </p>
        </div>

        <div className="example-box" style={{ marginTop: '15px' }}>
          <p><strong>❌ 3. Complex Patterns</strong></p>
          <p style={{ marginTop: '10px', lineHeight: '1.8' }}>
            Jab relationship bahut complex ho aur multiple interactions hon.<br/>
            <span style={{ color: '#666', fontSize: '0.9rem' }}>
              Example: Image recognition, voice recognition - yahan deep learning better hai
            </span>
          </p>
        </div>

        <div className="example-box" style={{ marginTop: '15px' }}>
          <p><strong>❌ 4. Categorical Outcomes</strong></p>
          <p style={{ marginTop: '10px', lineHeight: '1.8' }}>
            Jab output number nahi balki category ho (Yes/No, Type A/B/C).<br/>
            <span style={{ color: '#666', fontSize: '0.9rem' }}>
              Example: Spam detection, disease diagnosis - yahan classification algorithms chahiye
            </span>
          </p>
        </div>
      </div>

      <h3>Linear Regression Kab Use Karna Chahiye? ✅</h3>

      <table className="comparison-table">
        <thead>
          <tr>
            <th>Condition</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Linear Relationship</strong></td>
            <td>X aur Y mein approximately seedha relation ho</td>
          </tr>
          <tr>
            <td><strong>Continuous Output</strong></td>
            <td>Predict karna hai number/value, categories nahi</td>
          </tr>
          <tr>
            <td><strong>Limited Features</strong></td>
            <td>Zyada complex features nahi hain (agar hain to polynomial regression use karo)</td>
          </tr>
          <tr>
            <td><strong>Interpretability</strong></td>
            <td>Results ko explain karna zaroori hai (simple model hai to easy hai)</td>
          </tr>
          <tr>
            <td><strong>Baseline Model</strong></td>
            <td>Pehle simple model try karo, phir complex models par jao</td>
          </tr>
        </tbody>
      </table>

      <h3>Tips for Better Predictions 💡</h3>

      <div className="visual-example">
        <ul className="step-by-step">
          <li>
            <strong>More Data = Better Model</strong><br/>
            Jitna zyada data hoga, utni accurate predictions hongi
          </li>
          <li>
            <strong>Clean Your Data</strong><br/>
            Missing values, duplicates, errors ko pehle clean karo
          </li>
          <li>
            <strong>Feature Selection</strong><br/>
            Relevant features hi use karo - irrelevant features se accuracy kam hoti hai
          </li>
          <li>
            <strong>Handle Outliers</strong><br/>
            Extreme values ko identify karke handle karo (remove ya transform)
          </li>
          <li>
            <strong>Feature Scaling</strong><br/>
            Agar features ki ranges bahut different hain, to normalize karo
            <p style={{ color: '#666', marginTop: '5px', fontSize: '0.9rem' }}>
              Example: Size (1000-3000) aur Age (1-50) - scale mismatch hai
            </p>
          </li>
          <li>
            <strong>Test on New Data</strong><br/>
            Training data par hi test mat karo - fresh data par bhi check karo
          </li>
        </ul>
      </div>

      <h3>Evaluation Metrics 📊</h3>

      <div className="visual-example">
        <h4>Model Kitna Achha Hai - Kaise Measure Karein?</h4>

        <div className="example-box">
          <p><strong>1. Mean Squared Error (MSE)</strong></p>
          <p style={{ marginTop: '10px' }}>Average of squared differences between actual and predicted</p>
          <p style={{ background: '#f8f9fa', padding: '10px', marginTop: '10px', borderRadius: '5px' }}>
            <strong>Lower is better!</strong> MSE = 0 means perfect predictions
          </p>
        </div>

        <div className="example-box" style={{ marginTop: '15px' }}>
          <p><strong>2. R² Score (R-Squared)</strong></p>
          <p style={{ marginTop: '10px' }}>Model kitna achha fit hai - 0 to 1 scale par</p>
          <p style={{ background: '#f8f9fa', padding: '10px', marginTop: '10px', borderRadius: '5px' }}>
            <strong>Higher is better!</strong> R² = 1 means perfect fit, R² = 0 means no relation
          </p>
        </div>

        <div className="example-box" style={{ marginTop: '15px' }}>
          <p><strong>3. Mean Absolute Error (MAE)</strong></p>
          <p style={{ marginTop: '10px' }}>Average of absolute differences (simple average of errors)</p>
          <p style={{ background: '#f8f9fa', padding: '10px', marginTop: '10px', borderRadius: '5px' }}>
            <strong>Lower is better!</strong> Easy to interpret - actual error amount
          </p>
        </div>
      </div>

      <div className="key-point" style={{ marginTop: '30px' }}>
        <strong>🎓 Linear Regression Complete! Humne Kya Seekha:</strong>
        <ul style={{ marginTop: '15px', marginLeft: '20px', lineHeight: '2' }}>
          <li>Linear Regression kya hai - seedhi line se prediction</li>
          <li>Formula: y = mx + c</li>
          <li>Training kaise hoti hai - error minimize karna</li>
          <li>Real world applications - house prices, salaries, sales, etc.</li>
          <li>Limitations - kab use nahi karna chahiye</li>
          <li>Tips for better predictions aur evaluation metrics</li>
        </ul>
      </div>

      <div style={{ background: '#e3f2fd', borderRadius: '10px', padding: '25px', marginTop: '30px', border: '2px solid #2196f3' }}>
        <h4 style={{ color: '#1976d2', marginBottom: '15px' }}>🎉 Congratulations!</h4>
        <p style={{ color: '#333', fontSize: '1.1rem', lineHeight: '1.8' }}>
          Tumne Linear Regression ko completely samajh liya! 🎓<br/>
          <br/>
          Ab tum jaante ho ki kaise ek simple line se powerful predictions karte hain.
          Is knowledge ko use karke tum real-world problems solve kar sakte ho!
        </p>
      </div>

      <div style={{ background: '#e8f5e9', borderRadius: '10px', padding: '20px', marginTop: '30px' }}>
        <h4 style={{ color: '#2e7d32' }}>✅ Next: Logistic Regression</h4>
        <p style={{ marginTop: '10px', color: '#333' }}>
          Ab hum Logistic Regression sikhenge - ye tab use hota hai jab hume Yes/No,
          True/False jaise binary decisions lene hon! Classification ki amazing duniya mein chalo! 🚀
        </p>
      </div>
    </div>
  )
}
