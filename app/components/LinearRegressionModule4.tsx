'use client'

import { useState } from 'react'

export default function LinearRegressionModule4() {
  const [step, setStep] = useState(0)

  const trainingSteps = [
    {
      title: 'Step 1: Random Values Se Shuru',
      m: 5,
      c: 10,
      error: 'Bahut zyada (500)',
      desc: 'Computer pehle random m aur c values try karta hai'
    },
    {
      title: 'Step 2: Error Dekha',
      m: 7,
      c: 20,
      error: 'Kam hua (300)',
      desc: 'Error calculate kiya - kitna galat prediction tha'
    },
    {
      title: 'Step 3: Thoda Adjust Kiya',
      m: 9,
      c: 35,
      error: 'Aur kam (150)',
      desc: 'Values ko thoda adjust karke error kam kiya'
    },
    {
      title: 'Step 4: Best Values Mil Gayi!',
      m: 10,
      c: 40,
      error: 'Bahut kam (20)',
      desc: 'Perfect values mil gayi - ab predictions accurate hain!'
    }
  ]

  return (
    <div className="content-section">
      <h2>Module 4: Model Ko Train Karna 🎯</h2>

      <div className="key-point">
        <strong>🎯 Is Module Mein:</strong> Computer kaise <span className="hinglish-text">khud se</span> best line dhundhta hai?
        Training process kya hai? Errors kaise kam karte hain? Sab visual examples se samjhenge!
      </div>

      <h3>Training Ka Matlab Kya? 🏋️</h3>

      <div className="visual-example">
        <h4>Cycle Chalana Seekhne Ki Tarah:</h4>
        <div className="example-box">
          <ul className="step-by-step">
            <li>
              <strong>Pehli koshish:</strong> Gir gaye (बड़ी error) ❌
            </li>
            <li>
              <strong>Dusri koshish:</strong> Balance banaya, par phir gir gaye (error kam hui) ⚠️
            </li>
            <li>
              <strong>Teesri koshish:</strong> 10 seconds chale (error aur kam) 🎯
            </li>
            <li>
              <strong>Practice karte rahe:</strong> Ab achhe se chala sakte hain! (minimum error) ✅
            </li>
          </ul>
          <p style={{ marginTop: '20px', color: '#667eea', fontWeight: 'bold' }}>
            Machine Learning mein bhi exactly yahi process hota hai!
          </p>
        </div>
      </div>

      <h3>Error Kya Hota Hai? ❌</h3>

      <p>
        <strong>Error</strong> matlab <span className="hinglish-text">galti</span>. Jab humari prediction aur actual value mein farak ho.
      </p>

      <div className="visual-example">
        <h4>Error Ko Samajhte Hain:</h4>
        <div className="example-box">
          <p><strong>Example: Student Marks Prediction</strong></p>
          <table style={{ width: '100%', marginTop: '15px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#667eea', color: 'white' }}>
                <th style={{ padding: '12px', textAlign: 'left' }}>Student</th>
                <th style={{ padding: '12px', textAlign: 'center' }}>Actual Marks</th>
                <th style={{ padding: '12px', textAlign: 'center' }}>Predicted Marks</th>
                <th style={{ padding: '12px', textAlign: 'center' }}>Error</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: '#f8f9fa' }}>
                <td style={{ padding: '12px' }}>Raj</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>85</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>80</td>
                <td style={{ padding: '12px', textAlign: 'center', color: '#e74c3c', fontWeight: 'bold' }}>5</td>
              </tr>
              <tr>
                <td style={{ padding: '12px' }}>Priya</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>70</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>75</td>
                <td style={{ padding: '12px', textAlign: 'center', color: '#e74c3c', fontWeight: 'bold' }}>5</td>
              </tr>
              <tr style={{ background: '#f8f9fa' }}>
                <td style={{ padding: '12px' }}>Amit</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>92</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>88</td>
                <td style={{ padding: '12px', textAlign: 'center', color: '#e74c3c', fontWeight: 'bold' }}>4</td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginTop: '20px', background: '#fff3cd', padding: '15px', borderRadius: '8px' }}>
            <strong>Total Error:</strong> 5 + 5 + 4 = 14<br/>
            <strong>Goal:</strong> Is error ko <span className="hinglish-text">minimum</span> karna hai!
          </p>
        </div>
      </div>

      <h3>Training Process - Step By Step 🔄</h3>

      <div className="interactive-chart">
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h4 style={{ color: '#667eea', marginBottom: '20px' }}>
            {trainingSteps[step].title}
          </h4>
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '30px',
            borderRadius: '15px',
            marginBottom: '20px'
          }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '15px' }}>
              <strong>Current Formula:</strong>
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>
              y = {trainingSteps[step].m}x + {trainingSteps[step].c}
            </div>
            <div style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
              <strong>Error Level:</strong> {trainingSteps[step].error}
            </div>
          </div>
          <p style={{
            background: '#f8f9fa',
            padding: '20px',
            borderRadius: '10px',
            fontSize: '1.1rem',
            color: '#333'
          }}>
            {trainingSteps[step].desc}
          </p>
        </div>

        <div className="button-group" style={{ justifyContent: 'center' }}>
          <button
            className="btn btn-secondary"
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
            style={{ opacity: step === 0 ? 0.5 : 1 }}
          >
            ← Previous Step
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setStep(Math.min(trainingSteps.length - 1, step + 1))}
            disabled={step === trainingSteps.length - 1}
            style={{ opacity: step === trainingSteps.length - 1 ? 0.5 : 1 }}
          >
            Next Step →
          </button>
        </div>

        <p style={{ textAlign: 'center', marginTop: '20px', color: '#666' }}>
          👆 Buttons click karke dekho training kaise hoti hai!
        </p>
      </div>

      <h3>Training Process Detail Mein 📖</h3>

      <div className="visual-example">
        <ul className="step-by-step">
          <li>
            <strong>Initialization (Shuruat):</strong><br/>
            Computer random values se shuru karta hai
            <div style={{ background: '#f8f9fa', padding: '15px', marginTop: '10px', borderRadius: '8px' }}>
              Example: m = 5, c = 10 (random values)
            </div>
          </li>
          <li>
            <strong>Prediction Karna:</strong><br/>
            Current values se sabhi data points ke liye prediction karo
            <div style={{ background: '#f8f9fa', padding: '15px', marginTop: '10px', borderRadius: '8px' }}>
              Example: Agar x = 3, to y = 5×3 + 10 = 25 (prediction)
            </div>
          </li>
          <li>
            <strong>Error Calculate Karna:</strong><br/>
            Dekho predictions actual values se kitne door hain
            <div style={{ background: '#f8f9fa', padding: '15px', marginTop: '10px', borderRadius: '8px' }}>
              Example: Actual value = 30, Predicted = 25<br/>
              Error = 30 - 25 = 5
            </div>
          </li>
          <li>
            <strong>Values Adjust Karna:</strong><br/>
            Error kam karne ke liye m aur c ko thoda change karo
            <div style={{ background: '#f8f9fa', padding: '15px', marginTop: '10px', borderRadius: '8px' }}>
              Example: m = 5 → 5.5 (thoda badha diya)<br/>
              c = 10 → 11 (thoda badha diya)
            </div>
          </li>
          <li>
            <strong>Repeat Karo:</strong><br/>
            Steps 2-4 ko baar baar karo jab tak error minimum na ho jaye
            <div style={{ background: '#f8f9fa', padding: '15px', marginTop: '10px', borderRadius: '8px' }}>
              Ye process hundreds ya thousands baar hota hai!
            </div>
          </li>
          <li>
            <strong>Best Model Ready!</strong><br/>
            Jab error bahut kam ho jaye, training complete!
            <div style={{ background: '#e8f5e9', padding: '15px', marginTop: '10px', borderRadius: '8px', fontWeight: 'bold', color: '#2e7d32' }}>
              Ab ye model use karke accurate predictions kar sakte hain! ✅
            </div>
          </li>
        </ul>
      </div>

      <h3>Cost Function Kya Hai? 📊</h3>

      <div className="key-point">
        <strong>Cost Function</strong> (ya <strong>Loss Function</strong>) ek formula hai jo batata hai humari predictions
        <span className="hinglish-text"> kitni galat</span> hain.
      </div>

      <div className="visual-example">
        <h4>Sabse Common: Mean Squared Error (MSE)</h4>

        <div className="formula-box">
          <p style={{ marginBottom: '10px' }}>Formula (Simple Language Mein):</p>
          <code>Error = Average of (Actual - Predicted)²</code>
          <p style={{ marginTop: '15px', fontSize: '0.9rem', color: '#666' }}>
            Har point ka error nikalo, square karo, sab ka average nikalo
          </p>
        </div>

        <div className="example-box" style={{ marginTop: '20px' }}>
          <p><strong>Example Calculation:</strong></p>
          <table style={{ width: '100%', marginTop: '15px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#667eea', color: 'white' }}>
                <th style={{ padding: '10px' }}>Actual</th>
                <th style={{ padding: '10px' }}>Predicted</th>
                <th style={{ padding: '10px' }}>Difference</th>
                <th style={{ padding: '10px' }}>Squared</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: '#f8f9fa' }}>
                <td style={{ padding: '10px', textAlign: 'center' }}>50</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>48</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>2</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>4</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', textAlign: 'center' }}>70</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>75</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>-5</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>25</td>
              </tr>
              <tr style={{ background: '#f8f9fa' }}>
                <td style={{ padding: '10px', textAlign: 'center' }}>85</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>82</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>3</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>9</td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginTop: '20px', background: '#fff3cd', padding: '15px', borderRadius: '8px' }}>
            <strong>MSE = (4 + 25 + 9) / 3 = 38 / 3 = 12.67</strong><br/>
            <br/>
            Goal: Is MSE ko minimize karna hai!
          </p>
        </div>

        <div className="key-point" style={{ marginTop: '20px' }}>
          <strong>Kyu Square Karte Hain? 🤔</strong>
          <ul style={{ marginTop: '10px', marginLeft: '20px', lineHeight: '2' }}>
            <li>Negative aur positive errors cancel na hon (2 aur -2 = 0 na ho)</li>
            <li>Badi errors ko zyada penalty milti hai (5 ka square = 25, 1 ka square = 1)</li>
            <li>Calculations easy ho jati hain</li>
          </ul>
        </div>
      </div>

      <h3>Gradient Descent - The Magic Algorithm! 🪄</h3>

      <div className="key-point">
        <strong>Gradient Descent</strong> wo algorithm hai jo automatically m aur c ki
        <span className="hinglish-text"> best values</span> dhundh leta hai!
      </div>

      <div className="visual-example">
        <h4>Pahaad Se Niche Utarne Ki Tarah:</h4>
        <div className="example-box">
          <p><strong>Imagine karo:</strong></p>
          <p style={{ marginTop: '15px', lineHeight: '1.8' }}>
            Tum ek pahaad par ho, andhera hai, aur tumhe sabse niche (valley) tak pahunchna hai.
            Tum kya karoge?
          </p>
          <ul className="step-by-step" style={{ marginTop: '20px' }}>
            <li>
              Apne aas-paas feel karoge - kis direction mein niche ki taraf dhal hai
            </li>
            <li>
              Us direction mein thoda sa kadam chaloge
            </li>
            <li>
              Phir se check karoge - aur kis taraf niche hai
            </li>
            <li>
              Baar baar yahi karoge jab tak sabse niche point tak nahi pahunch jate
            </li>
          </ul>
          <p style={{ marginTop: '20px', color: '#667eea', fontWeight: 'bold', background: '#e3f2fd', padding: '15px', borderRadius: '8px' }}>
            Gradient Descent exactly yahi karta hai!<br/>
            <br/>
            • Pahaad = Error/Cost Function<br/>
            • Niche utarna = Error kam karna<br/>
            • Har kadam = m aur c ko adjust karna<br/>
            • Sabse niche point = Minimum error (best model!)
          </p>
        </div>
      </div>

      <h3>Learning Rate Kya Hai? 🏃</h3>

      <div className="visual-example">
        <div className="example-box">
          <p><strong>Learning Rate</strong> decide karta hai <span className="hinglish-text">kitne bade steps</span> lene hain.</p>

          <div style={{ marginTop: '20px' }}>
            <div style={{ background: '#ffebee', padding: '15px', borderRadius: '8px', marginBottom: '15px' }}>
              <p><strong>❌ Agar Learning Rate Bahut Bada:</strong></p>
              <p style={{ marginTop: '10px' }}>
                Bahut bade steps loge → Overshoot ho jayega → Best point miss ho jayega<br/>
                <span style={{ fontSize: '0.9rem', color: '#666' }}>Jaise pahaad se utarte waqt bhagte hue jaoge to gir jaoge!</span>
              </p>
            </div>

            <div style={{ background: '#fff3cd', padding: '15px', borderRadius: '8px', marginBottom: '15px' }}>
              <p><strong>⚠️ Agar Learning Rate Bahut Chhota:</strong></p>
              <p style={{ marginTop: '10px' }}>
                Bahut chhote steps loge → Training bahut slow hogi → Bahut time lagega<br/>
                <span style={{ fontSize: '0.9rem', color: '#666' }}>Jaise pahaad se rengke utarte ho - safe hai par bahut slow!</span>
              </p>
            </div>

            <div style={{ background: '#e8f5e9', padding: '15px', borderRadius: '8px' }}>
              <p><strong>✅ Perfect Learning Rate:</strong></p>
              <p style={{ marginTop: '10px' }}>
                Na bahut bada, na bahut chhota → Fast aur safe dono<br/>
                <span style={{ fontSize: '0.9rem', color: '#666' }}>Normal walking speed - steady aur safe!</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3>Training Ko Rokna Kab Hai? 🛑</h3>

      <div className="visual-example">
        <h4>Training Stop Karne Ke Signals:</h4>
        <ul className="step-by-step">
          <li>
            <strong>Error Bahut Kam Ho Gaya:</strong><br/>
            Jab error acceptable level tak aa jaye
            <div style={{ background: '#f8f9fa', padding: '10px', marginTop: '5px', borderRadius: '5px', fontSize: '0.9rem' }}>
              Example: Error 0.01 se kam ho gaya
            </div>
          </li>
          <li>
            <strong>Error Ab Kam Nahi Ho Raha:</strong><br/>
            Kai iterations ke baad bhi error same hai
            <div style={{ background: '#f8f9fa', padding: '10px', marginTop: '5px', borderRadius: '5px', fontSize: '0.9rem' }}>
              Matlab best point mil gaya!
            </div>
          </li>
          <li>
            <strong>Maximum Iterations Complete:</strong><br/>
            Pehle se decide kiya tha kitne iterations karenge
            <div style={{ background: '#f8f9fa', padding: '10px', marginTop: '5px', borderRadius: '5px', fontSize: '0.9rem' }}>
              Example: 1000 iterations ya 100 epochs
            </div>
          </li>
        </ul>
      </div>

      <h3>Overfitting vs Underfitting ⚖️</h3>

      <table className="comparison-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Kya Hota Hai</th>
            <th>Problem</th>
            <th>Solution</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ background: '#ffebee' }}>
            <td><strong>Underfitting 📉</strong></td>
            <td>Model bahut simple hai, data ko samajh hi nahi paya</td>
            <td>Training data par bhi kharab performance</td>
            <td>More complex model use karo, more features add karo</td>
          </tr>
          <tr style={{ background: '#e8f5e9' }}>
            <td><strong>Good Fit ✅</strong></td>
            <td>Perfect balance - data ko achhe se samjha</td>
            <td>Training aur new data dono par achhi performance</td>
            <td>Yahi chahiye!</td>
          </tr>
          <tr style={{ background: '#ffebee' }}>
            <td><strong>Overfitting 📈</strong></td>
            <td>Model ne training data ko ratt liya (memorize kar liya)</td>
            <td>Training par perfect, par new data par fail</td>
            <td>Simpler model, more data, regularization</td>
          </tr>
        </tbody>
      </table>

      <div className="visual-example" style={{ marginTop: '20px' }}>
        <h4>Example Se Samajhte Hain:</h4>
        <div className="example-box">
          <p><strong>Exam Ki Taiyari Jaisa Hai:</strong></p>
          <ul style={{ marginLeft: '30px', marginTop: '15px', lineHeight: '2' }}>
            <li>
              <strong>Underfitting:</strong> Bilkul padhe hi nahi, concepts samajh nahi aaye → Fail ❌
            </li>
            <li>
              <strong>Good Fit:</strong> Concepts samjhe, practice ki, types of questions samjhe → Pass with good marks ✅
            </li>
            <li>
              <strong>Overfitting:</strong> Sirf sample papers ratt liye, concepts nahi samjhe → Sample paper wale questions aa gaye to sahi, naye questions mein fail ❌
            </li>
          </ul>
        </div>
      </div>

      <div className="key-point" style={{ marginTop: '30px' }}>
        <strong>🎓 Is Module Mein Humne Kya Seekha:</strong>
        <ul style={{ marginTop: '15px', marginLeft: '20px', lineHeight: '2' }}>
          <li>Training process kya hai - error ko minimize karna</li>
          <li>Cost function (MSE) errors ko measure karta hai</li>
          <li>Gradient Descent automatically best values dhundhta hai</li>
          <li>Learning rate step size control karta hai</li>
          <li>Overfitting aur underfitting se bachna chahiye</li>
          <li>Training tab stop karte hain jab error minimum ho jaye</li>
        </ul>
      </div>

      <div style={{ background: '#e8f5e9', borderRadius: '10px', padding: '20px', marginTop: '30px' }}>
        <h4 style={{ color: '#2e7d32' }}>✅ Next Module Mein Kya Seekhenge?</h4>
        <p style={{ marginTop: '10px', color: '#333' }}>
          Ab hum real-life examples dekhenge! Practical applications, code examples,
          aur interactive demos se Linear Regression ko action mein dekhenge! 🚀
        </p>
      </div>
    </div>
  )
}
