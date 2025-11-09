'use client'

export default function LogisticRegressionModule1() {
  return (
    <div className="content-section">
      <h2>Module 6: Logistic Regression Kya Hai? 🎯</h2>

      <div className="key-point">
        <strong>🎯 Simple Definition:</strong> Logistic Regression ek algorithm hai jo
        <span className="hinglish-text"> Yes/No, True/False, 0/1</span> jaise questions ka answer deta hai.
        Isko <strong>Classification</strong> kehte hain!
      </div>

      <h3>Linear vs Logistic Regression 🆚</h3>

      <table className="comparison-table">
        <thead>
          <tr>
            <th>Aspect</th>
            <th>Linear Regression</th>
            <th>Logistic Regression</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Output Type</strong></td>
            <td>Continuous number<br/>(45, 67.5, 100, etc.)</td>
            <td>Category/Class<br/>(Yes/No, 0/1, True/False)</td>
          </tr>
          <tr>
            <td><strong>Task Name</strong></td>
            <td>Regression</td>
            <td>Classification</td>
          </tr>
          <tr>
            <td><strong>Line Shape</strong></td>
            <td>Straight line (any values)</td>
            <td>S-shaped curve (0 to 1)</td>
          </tr>
          <tr>
            <td><strong>Examples</strong></td>
            <td>• Ghar ki price<br/>• Temperature<br/>• Salary amount</td>
            <td>• Email spam hai ya nahi<br/>• Pass ya fail<br/>• Disease hai ya nahi</td>
          </tr>
        </tbody>
      </table>

      <h3>Classification Kya Hai? 🏷️</h3>

      <div className="visual-example">
        <h4>Simple Explanation:</h4>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          <strong>Classification</strong> matlab cheezों ko <span className="hinglish-text">categories mein dalna</span>.
          Jaise fruits ko "Apple" ya "Orange" mein categorize karna, emails ko "Spam" ya "Not Spam" mein dalna.
        </p>

        <div className="example-box" style={{ marginTop: '20px' }}>
          <p><strong>Real Life Example: Post Office</strong></p>
          <p style={{ marginTop: '15px', lineHeight: '1.8' }}>
            Post office mein letters ko cities ke hisaab se sort karte hain:<br/>
            • Mumbai wale ek group mein<br/>
            • Delhi wale dusre group mein<br/>
            • Bangalore wale teesre group mein
          </p>
          <p style={{ marginTop: '15px', color: '#667eea', fontWeight: 'bold' }}>
            Ye hai Classification - cheezों ko groups/categories mein sort karna! 📮
          </p>
        </div>
      </div>

      <h3>Binary Classification 🎭</h3>

      <div className="key-point">
        <strong>Binary Classification:</strong> Jab <span className="hinglish-text">sirf 2 categories</span> hon.
        <br/>Logistic Regression mainly binary classification ke liye use hota hai!
      </div>

      <div className="visual-example">
        <h4>Binary Classification Ke Examples:</h4>

        <div className="example-box">
          <p><strong>✅ Example 1: Email Spam Detection 📧</strong></p>
          <ul style={{ marginLeft: '30px', marginTop: '15px', lineHeight: '2' }}>
            <li><strong>Category 1:</strong> Spam (unwanted email) ❌</li>
            <li><strong>Category 2:</strong> Not Spam (legitimate email) ✅</li>
          </ul>
          <p style={{ marginTop: '15px', background: '#f8f9fa', padding: '15px', borderRadius: '8px' }}>
            <strong>Input:</strong> Email ka content, sender, subject<br/>
            <strong>Output:</strong> Spam (1) ya Not Spam (0)
          </p>
        </div>

        <div className="example-box" style={{ marginTop: '20px' }}>
          <p><strong>✅ Example 2: Loan Approval 💰</strong></p>
          <ul style={{ marginLeft: '30px', marginTop: '15px', lineHeight: '2' }}>
            <li><strong>Category 1:</strong> Approved (loan mil gaya) ✅</li>
            <li><strong>Category 2:</strong> Rejected (loan nahi mila) ❌</li>
          </ul>
          <p style={{ marginTop: '15px', background: '#f8f9fa', padding: '15px', borderRadius: '8px' }}>
            <strong>Input:</strong> Salary, credit score, employment history<br/>
            <strong>Output:</strong> Approved (1) ya Rejected (0)
          </p>
        </div>

        <div className="example-box" style={{ marginTop: '20px' }}>
          <p><strong>✅ Example 3: Disease Diagnosis 🏥</strong></p>
          <ul style={{ marginLeft: '30px', marginTop: '15px', lineHeight: '2' }}>
            <li><strong>Category 1:</strong> Disease Present (bimari hai) ⚠️</li>
            <li><strong>Category 2:</strong> Disease Absent (bimari nahi hai) ✅</li>
          </ul>
          <p style={{ marginTop: '15px', background: '#f8f9fa', padding: '15px', borderRadius: '8px' }}>
            <strong>Input:</strong> Symptoms, test results, medical history<br/>
            <strong>Output:</strong> Positive (1) ya Negative (0)
          </p>
        </div>

        <div className="example-box" style={{ marginTop: '20px' }}>
          <p><strong>✅ Example 4: Student Pass/Fail 📚</strong></p>
          <ul style={{ marginLeft: '30px', marginTop: '15px', lineHeight: '2' }}>
            <li><strong>Category 1:</strong> Pass (exam mein pass) ✅</li>
            <li><strong>Category 2:</strong> Fail (exam mein fail) ❌</li>
          </ul>
          <p style={{ marginTop: '15px', background: '#f8f9fa', padding: '15px', borderRadius: '8px' }}>
            <strong>Input:</strong> Study hours, attendance, previous scores<br/>
            <strong>Output:</strong> Pass (1) ya Fail (0)
          </p>
        </div>

        <div className="example-box" style={{ marginTop: '20px' }}>
          <p><strong>✅ Example 5: Customer Churn Prediction 📱</strong></p>
          <ul style={{ marginLeft: '30px', marginTop: '15px', lineHeight: '2' }}>
            <li><strong>Category 1:</strong> Will Leave (customer jayega) 😞</li>
            <li><strong>Category 2:</strong> Will Stay (customer rahega) 😊</li>
          </ul>
          <p style={{ marginTop: '15px', background: '#f8f9fa', padding: '15px', borderRadius: '8px' }}>
            <strong>Input:</strong> Usage pattern, complaints, tenure<br/>
            <strong>Output:</strong> Churn (1) ya Stay (0)
          </p>
        </div>
      </div>

      <h3>Linear Regression Se Problem Kya Thi? 🤔</h3>

      <div className="visual-example">
        <h4>Agar Hum Classification Ke Liye Linear Regression Use Karein:</h4>

        <div className="example-box">
          <p><strong>Example: Email Spam Detection</strong></p>
          <p style={{ marginTop: '15px' }}>
            Suppose hum kehte hain:<br/>
            • Spam = 1<br/>
            • Not Spam = 0
          </p>

          <div style={{ background: '#ffebee', padding: '20px', borderRadius: '10px', marginTop: '20px', border: '2px solid #e74c3c' }}>
            <p><strong>❌ Problem:</strong></p>
            <p style={{ marginTop: '10px', lineHeight: '1.8' }}>
              Linear regression koi bhi value predict kar sakta hai:<br/>
              • -0.5 (Negative? Ye kya hai? 😕)<br/>
              • 0.3 (30% spam? Matlab spam hai ya nahi? 🤷)<br/>
              • 1.5 (150% spam? Impossible! 😵)<br/>
              • 2.8 (280% spam? Kya matlab? 🤯)
            </p>
            <p style={{ marginTop: '15px', fontWeight: 'bold', color: '#c62828' }}>
              Humein toh sirf 0 ya 1 chahiye tha! Ye values ka kya karein?
            </p>
          </div>
        </div>

        <div className="example-box" style={{ marginTop: '20px' }}>
          <p><strong>Visualization:</strong></p>
          <div style={{ background: 'white', padding: '20px', borderRadius: '10px', border: '1px solid #ddd' }}>
            <p style={{ textAlign: 'center', marginBottom: '15px', fontWeight: 'bold' }}>
              Linear Regression Line (Classification Ke Liye)
            </p>
            <div style={{ position: 'relative', height: '200px', background: '#f8f9fa', borderRadius: '8px' }}>
              <div style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                height: '2px',
                background: '#333'
              }}></div>
              <div style={{
                position: 'absolute',
                left: '0',
                bottom: '0',
                top: '0',
                width: '2px',
                background: '#333'
              }}></div>
              <div style={{
                position: 'absolute',
                left: '10%',
                right: '10%',
                top: '10%',
                bottom: '10%',
                borderTop: '3px solid #e74c3c',
                transform: 'rotate(-20deg)',
                transformOrigin: 'left center'
              }}></div>
              <div style={{ position: 'absolute', right: '20px', top: '20px', color: '#e74c3c', fontWeight: 'bold' }}>
                2.5 😵
              </div>
              <div style={{ position: 'absolute', left: '30px', top: '80px', color: '#e74c3c', fontWeight: 'bold' }}>
                1.5
              </div>
              <div style={{ position: 'absolute', left: '50%', bottom: '70px', color: '#e74c3c', fontWeight: 'bold' }}>
                0.5
              </div>
              <div style={{ position: 'absolute', left: '20px', bottom: '30px', color: '#e74c3c', fontWeight: 'bold' }}>
                -0.5 😕
              </div>
            </div>
            <p style={{ marginTop: '15px', textAlign: 'center', color: '#666' }}>
              Line 0 aur 1 ke bahar bhi ja sakti hai - ye problem hai!
            </p>
          </div>
        </div>
      </div>

      <h3>Solution: Logistic Regression! 💡</h3>

      <div className="key-point">
        <strong>Smart Idea:</strong> Agar hum line ko <span className="hinglish-text">0 aur 1 ke beech</span> rakh sakein,
        to problem solve ho jayegi!
      </div>

      <div className="visual-example">
        <h4>Logistic Regression Kya Karta Hai:</h4>

        <div className="example-box">
          <p><strong>Magic Transformation! ✨</strong></p>
          <ul className="step-by-step">
            <li>
              Linear regression ki tarah calculation karta hai
            </li>
            <li>
              Phir ek <strong>special function</strong> (Sigmoid) use karta hai
            </li>
            <li>
              Ye function har value ko <strong>0 aur 1 ke beech</strong> convert kar deta hai!
            </li>
            <li>
              Ab output ek <strong>probability</strong> ban jaata hai
              <p style={{ color: '#666', marginTop: '5px', fontSize: '0.9rem' }}>
                Example: 0.8 = 80% chance ki spam hai
              </p>
            </li>
            <li>
              Probability ko dekh kar final decision lete hain
              <p style={{ color: '#666', marginTop: '5px', fontSize: '0.9rem' }}>
                Agar &gt; 0.5, to Class 1 (Spam)<br/>
                Agar ≤ 0.5, to Class 0 (Not Spam)
              </p>
            </li>
          </ul>
        </div>

        <div className="example-box" style={{ marginTop: '20px' }}>
          <p><strong>Visualization:</strong></p>
          <div style={{ background: 'white', padding: '20px', borderRadius: '10px', border: '1px solid #ddd' }}>
            <p style={{ textAlign: 'center', marginBottom: '15px', fontWeight: 'bold', color: '#667eea' }}>
              Logistic Regression S-Curve
            </p>
            <div style={{ position: 'relative', height: '200px', background: '#f8f9fa', borderRadius: '8px', padding: '20px' }}>
              <div style={{ textAlign: 'center', color: '#333', fontSize: '5rem' }}>
                ∼
              </div>
              <div style={{ position: 'absolute', right: '20px', top: '30px', background: '#2ecc71', color: 'white', padding: '5px 10px', borderRadius: '5px', fontWeight: 'bold' }}>
                1.0 (100%)
              </div>
              <div style={{ position: 'absolute', left: '50%', top: '45%', background: '#667eea', color: 'white', padding: '5px 10px', borderRadius: '5px', fontWeight: 'bold' }}>
                0.5 (50%)
              </div>
              <div style={{ position: 'absolute', left: '20px', bottom: '30px', background: '#e74c3c', color: 'white', padding: '5px 10px', borderRadius: '5px', fontWeight: 'bold' }}>
                0.0 (0%)
              </div>
            </div>
            <p style={{ marginTop: '15px', textAlign: 'center', color: '#2ecc71', fontWeight: 'bold' }}>
              ✅ Sabhi values 0 aur 1 ke beech hain!
            </p>
          </div>
        </div>
      </div>

      <h3>Probability Kya Hai? 🎲</h3>

      <div className="visual-example">
        <h4>Simple Explanation:</h4>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          <strong>Probability</strong> matlab <span className="hinglish-text">kitne chance</span> hain ki koi cheez ho.
          Ye 0 se 1 ke beech hota hai (ya 0% se 100% ke beech).
        </p>

        <div className="example-box" style={{ marginTop: '20px' }}>
          <p><strong>Probability Scale:</strong></p>
          <div style={{ marginTop: '20px' }}>
            <div style={{ background: 'linear-gradient(to right, #e74c3c, #f39c12, #2ecc71)', height: '40px', borderRadius: '10px', position: 'relative' }}>
              <div style={{ position: 'absolute', left: '0', top: '50px', fontWeight: 'bold' }}>0.0<br/>0%<br/>Impossible</div>
              <div style={{ position: 'absolute', left: '25%', top: '50px', fontWeight: 'bold' }}>0.25<br/>25%<br/>Unlikely</div>
              <div style={{ position: 'absolute', left: '50%', top: '50px', fontWeight: 'bold', transform: 'translateX(-50%)' }}>0.5<br/>50%<br/>Maybe</div>
              <div style={{ position: 'absolute', right: '25%', top: '50px', fontWeight: 'bold' }}>0.75<br/>75%<br/>Likely</div>
              <div style={{ position: 'absolute', right: '0', top: '50px', fontWeight: 'bold' }}>1.0<br/>100%<br/>Certain</div>
            </div>
          </div>
        </div>

        <div className="example-box" style={{ marginTop: '100px' }}>
          <p><strong>Real Examples:</strong></p>
          <ul style={{ marginLeft: '30px', marginTop: '15px', lineHeight: '2' }}>
            <li><strong>P = 0.1 (10%):</strong> Bahut kam chance - probably not spam</li>
            <li><strong>P = 0.3 (30%):</strong> Thoda chance hai - still probably not spam</li>
            <li><strong>P = 0.5 (50%):</strong> Equal chance - uncertain</li>
            <li><strong>P = 0.7 (70%):</strong> Achha chance hai - probably spam</li>
            <li><strong>P = 0.9 (90%):</strong> Bahut zyada chance - definitely spam</li>
          </ul>
        </div>
      </div>

      <h3>Decision Boundary (Threshold) 🚦</h3>

      <div className="key-point">
        <strong>Decision Boundary:</strong> Ek cutoff point jahan hum decide karte hain ki
        Class 0 hai ya Class 1. Usually <strong>0.5 (50%)</strong> use karte hain.
      </div>

      <div className="visual-example">
        <div className="example-box">
          <p><strong>Example: Email Spam Detection</strong></p>
          <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#667eea', color: 'white' }}>
                <th style={{ padding: '12px' }}>Probability</th>
                <th style={{ padding: '12px' }}>Interpretation</th>
                <th style={{ padding: '12px' }}>Decision (if threshold = 0.5)</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: '#ffebee' }}>
                <td style={{ padding: '12px', textAlign: 'center' }}>0.1</td>
                <td style={{ padding: '12px' }}>10% chance spam hai</td>
                <td style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold' }}>Not Spam ✅</td>
              </tr>
              <tr>
                <td style={{ padding: '12px', textAlign: 'center' }}>0.3</td>
                <td style={{ padding: '12px' }}>30% chance spam hai</td>
                <td style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold' }}>Not Spam ✅</td>
              </tr>
              <tr style={{ background: '#fff3cd' }}>
                <td style={{ padding: '12px', textAlign: 'center' }}>0.5</td>
                <td style={{ padding: '12px' }}>50% chance (boundary par)</td>
                <td style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold' }}>Not Spam ✅</td>
              </tr>
              <tr style={{ background: '#e8f5e9' }}>
                <td style={{ padding: '12px', textAlign: 'center' }}>0.7</td>
                <td style={{ padding: '12px' }}>70% chance spam hai</td>
                <td style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold' }}>Spam 🚫</td>
              </tr>
              <tr>
                <td style={{ padding: '12px', textAlign: 'center' }}>0.9</td>
                <td style={{ padding: '12px' }}>90% chance spam hai</td>
                <td style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold' }}>Spam 🚫</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="key-point" style={{ marginTop: '30px' }}>
        <strong>🎓 Is Module Mein Humne Kya Seekha:</strong>
        <ul style={{ marginTop: '15px', marginLeft: '20px', lineHeight: '2' }}>
          <li>Logistic Regression classification ke liye hai (Yes/No decisions)</li>
          <li>Binary classification = sirf 2 categories</li>
          <li>Linear regression classification ke liye achha nahi hai (values 0-1 ke bahar ja sakti hain)</li>
          <li>Logistic regression output ko 0-1 ke beech convert karta hai (probability)</li>
          <li>Probability se final decision lete hain (threshold use karke)</li>
          <li>Real examples: spam detection, loan approval, disease diagnosis</li>
        </ul>
      </div>

      <div style={{ background: '#e8f5e9', borderRadius: '10px', padding: '20px', marginTop: '30px' }}>
        <h4 style={{ color: '#2e7d32' }}>✅ Next Module Mein Kya Seekhenge?</h4>
        <p style={{ marginTop: '10px', color: '#333' }}>
          Ab hum S-Curve (Sigmoid Function) ko detail mein samjhenge - ye magic function jo
          kisi bhi number ko 0-1 ke beech convert kar deta hai! 🪄
        </p>
      </div>
    </div>
  )
}
