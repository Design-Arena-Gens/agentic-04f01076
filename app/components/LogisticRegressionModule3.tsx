'use client'

export default function LogisticRegressionModule3() {
  return (
    <div className="content-section">
      <h2>Module 8: Logistic Regression Formula & Working 📐</h2>

      <div className="key-point">
        <strong>🎯 Is Module Mein:</strong> Complete logistic regression formula samajhenge,
        aur ye linear regression se <span className="hinglish-text">kaise different</span> hai - step by step!
      </div>

      <h3>Complete Logistic Regression Formula 📝</h3>

      <div className="formula-box">
        <p style={{ marginBottom: '15px', fontSize: '1.1rem' }}>Step-wise Formula:</p>
        <div style={{ background: 'white', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Step 1: Linear Combination</p>
          <code style={{ fontSize: '1.3rem' }}>z = w₁x₁ + w₂x₂ + ... + b</code>
          <p style={{ marginTop: '10px', color: '#666', fontSize: '0.9rem' }}>
            (Ye linear regression jaisa hi hai!)
          </p>
        </div>
        <div style={{ background: 'white', padding: '20px', borderRadius: '10px', marginTop: '15px' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Step 2: Sigmoid Transformation</p>
          <code style={{ fontSize: '1.3rem' }}>P(y=1) = σ(z) = 1 / (1 + e^(-z))</code>
          <p style={{ marginTop: '10px', color: '#666', fontSize: '0.9rem' }}>
            (Ye probability deta hai ki Class 1 hai)
          </p>
        </div>
        <p style={{ marginTop: '20px', fontSize: '0.95rem', color: '#666', textAlign: 'center' }}>
          Notation: w = weights (m ki tarah), b = bias (c ki tarah), x = features
        </p>
      </div>

      <h3>Linear vs Logistic: Side-by-Side Comparison 🔄</h3>

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
            <td><strong>Basic Formula</strong></td>
            <td><code>y = mx + c</code></td>
            <td><code>z = wx + b</code><br/>(then apply sigmoid)</td>
          </tr>
          <tr>
            <td><strong>Output Range</strong></td>
            <td>Any value<br/>(-∞ to +∞)</td>
            <td>0 to 1<br/>(probability)</td>
          </tr>
          <tr>
            <td><strong>Output Type</strong></td>
            <td>Continuous number</td>
            <td>Probability → Category</td>
          </tr>
          <tr>
            <td><strong>Graph Shape</strong></td>
            <td>Straight line</td>
            <td>S-curve (sigmoid)</td>
          </tr>
          <tr>
            <td><strong>Use Case</strong></td>
            <td>Predict numbers<br/>(price, temperature)</td>
            <td>Predict categories<br/>(yes/no, spam/not spam)</td>
          </tr>
          <tr>
            <td><strong>Error Function</strong></td>
            <td>MSE (Mean Squared Error)</td>
            <td>Log Loss (Cross-Entropy)</td>
          </tr>
          <tr>
            <td><strong>Example</strong></td>
            <td>House price = ₹50 lakh</td>
            <td>Is spam? Probability = 0.8<br/>(80% chance)</td>
          </tr>
        </tbody>
      </table>

      <h3>Detailed Formula Breakdown 🔍</h3>

      <div className="visual-example">
        <div className="example-box">
          <h4 style={{ color: '#667eea', marginBottom: '15px' }}>Part 1: Weights aur Features</h4>

          <div className="formula-box">
            <code>z = w₁x₁ + w₂x₂ + w₃x₃ + ... + b</code>
          </div>

          <ul style={{ marginTop: '20px', lineHeight: '2' }}>
            <li>
              <strong>x₁, x₂, x₃:</strong> Input features (data jo tumhare paas hai)
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '5px' }}>
                Example: email length, number of links, sender reputation
              </p>
            </li>
            <li>
              <strong>w₁, w₂, w₃:</strong> Weights (har feature kitna important hai)
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '5px' }}>
                Example: w₁=2.5, w₂=-1.0, w₃=3.2 (training se milte hain)
              </p>
            </li>
            <li>
              <strong>b:</strong> Bias (base value, starting point)
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '5px' }}>
                Example: b = -2.0
              </p>
            </li>
          </ul>
        </div>

        <div className="example-box" style={{ marginTop: '20px' }}>
          <h4 style={{ color: '#667eea', marginBottom: '15px' }}>Part 2: Sigmoid Function</h4>

          <div className="formula-box">
            <code>P(y=1|x) = 1 / (1 + e^(-z))</code>
          </div>

          <p style={{ marginTop: '20px', lineHeight: '1.8' }}>
            <strong>Matlab:</strong> Given features x, Class 1 hone ki probability kya hai?
          </p>

          <ul style={{ marginTop: '20px', lineHeight: '2' }}>
            <li>
              <strong>P(y=1|x):</strong> Probability ki y=1 (Class 1) hai, given x features
            </li>
            <li>
              <strong>e:</strong> Euler's number (approximately 2.718) - ek mathematical constant
            </li>
            <li>
              <strong>Output:</strong> 0 se 1 ke beech ki value (probability)
            </li>
          </ul>
        </div>
      </div>

      <h3>Complete Example With Numbers 🔢</h3>

      <div className="visual-example">
        <div className="example-box">
          <p><strong>Problem: Student Pass/Fail Prediction</strong></p>
          <p style={{ marginTop: '15px' }}>
            <strong>Features:</strong><br/>
            • x₁ = Study hours per day<br/>
            • x₂ = Attendance percentage<br/>
            • x₃ = Previous test score
          </p>

          <div style={{ background: '#e3f2fd', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>Trained Model (weights jo training se mile):</p>
            <code style={{ fontSize: '1.1rem' }}>z = 1.5×(hours) + 0.02×(attendance) + 0.05×(prev_score) - 6</code>
            <p style={{ marginTop: '10px', color: '#666', fontSize: '0.9rem' }}>
              w₁=1.5, w₂=0.02, w₃=0.05, b=-6
            </p>
          </div>

          <div style={{ marginTop: '30px', padding: '20px', background: '#f8f9fa', borderRadius: '10px' }}>
            <p style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '20px' }}>
              Student 1: Raj
            </p>
            <ul style={{ lineHeight: '2', marginLeft: '20px' }}>
              <li>Study hours = 3 hours/day</li>
              <li>Attendance = 85%</li>
              <li>Previous score = 70</li>
            </ul>

            <div style={{ background: 'white', padding: '15px', borderRadius: '8px', marginTop: '20px' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Step 1: Calculate z</p>
              <code style={{ fontSize: '1rem', display: 'block', marginTop: '10px' }}>
                z = 1.5×3 + 0.02×85 + 0.05×70 - 6
              </code>
              <code style={{ fontSize: '1rem', display: 'block', marginTop: '5px' }}>
                z = 4.5 + 1.7 + 3.5 - 6
              </code>
              <code style={{ fontSize: '1rem', display: 'block', marginTop: '5px', color: '#667eea', fontWeight: 'bold' }}>
                z = 3.7
              </code>
            </div>

            <div style={{ background: 'white', padding: '15px', borderRadius: '8px', marginTop: '15px' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Step 2: Apply Sigmoid</p>
              <code style={{ fontSize: '1rem', display: 'block', marginTop: '10px' }}>
                P = 1 / (1 + e^(-3.7))
              </code>
              <code style={{ fontSize: '1rem', display: 'block', marginTop: '5px' }}>
                P = 1 / (1 + 0.0247)
              </code>
              <code style={{ fontSize: '1rem', display: 'block', marginTop: '5px', color: '#667eea', fontWeight: 'bold' }}>
                P = 0.976 (97.6%)
              </code>
            </div>

            <div style={{ background: '#e8f5e9', padding: '20px', borderRadius: '8px', marginTop: '15px', border: '2px solid #2ecc71' }}>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#2e7d32' }}>
                ✅ Prediction: PASS (97.6% confident)
              </p>
            </div>
          </div>

          <div style={{ marginTop: '30px', padding: '20px', background: '#f8f9fa', borderRadius: '10px' }}>
            <p style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '20px' }}>
              Student 2: Priya
            </p>
            <ul style={{ lineHeight: '2', marginLeft: '20px' }}>
              <li>Study hours = 1 hour/day</li>
              <li>Attendance = 60%</li>
              <li>Previous score = 45</li>
            </ul>

            <div style={{ background: 'white', padding: '15px', borderRadius: '8px', marginTop: '20px' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Step 1: Calculate z</p>
              <code style={{ fontSize: '1rem', display: 'block', marginTop: '10px' }}>
                z = 1.5×1 + 0.02×60 + 0.05×45 - 6
              </code>
              <code style={{ fontSize: '1rem', display: 'block', marginTop: '5px' }}>
                z = 1.5 + 1.2 + 2.25 - 6
              </code>
              <code style={{ fontSize: '1rem', display: 'block', marginTop: '5px', color: '#e74c3c', fontWeight: 'bold' }}>
                z = -1.05
              </code>
            </div>

            <div style={{ background: 'white', padding: '15px', borderRadius: '8px', marginTop: '15px' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Step 2: Apply Sigmoid</p>
              <code style={{ fontSize: '1rem', display: 'block', marginTop: '10px' }}>
                P = 1 / (1 + e^(1.05))
              </code>
              <code style={{ fontSize: '1rem', display: 'block', marginTop: '5px' }}>
                P = 1 / (1 + 2.858)
              </code>
              <code style={{ fontSize: '1rem', display: 'block', marginTop: '5px', color: '#e74c3c', fontWeight: 'bold' }}>
                P = 0.259 (25.9%)
              </code>
            </div>

            <div style={{ background: '#ffebee', padding: '20px', borderRadius: '8px', marginTop: '15px', border: '2px solid #e74c3c' }}>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#c62828' }}>
                ❌ Prediction: FAIL (only 25.9% chance to pass)
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3>Decision Boundary In Detail 🚦</h3>

      <div className="visual-example">
        <h4>Decision Rule:</h4>
        <div style={{ background: 'white', padding: '25px', borderRadius: '10px', border: '2px solid #667eea' }}>
          <div style={{ marginBottom: '20px' }}>
            <p style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '10px' }}>Standard Threshold = 0.5</p>
            <ul style={{ marginLeft: '30px', lineHeight: '2' }}>
              <li>If P ≥ 0.5 → Predict Class 1 ✅</li>
              <li>If P &lt; 0.5 → Predict Class 0 ❌</li>
            </ul>
          </div>

          <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>Threshold Ko Adjust Bhi Kar Sakte Hain:</p>
            <ul style={{ marginLeft: '20px', lineHeight: '2' }}>
              <li>
                <strong>Conservative (0.7):</strong> Zyada sure hona chahte ho
                <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '5px' }}>
                  Example: Medical diagnosis - galti nahi karni
                </p>
              </li>
              <li>
                <strong>Aggressive (0.3):</strong> Kam confidence par bhi action lena hai
                <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '5px' }}>
                  Example: Spam detection - thoda zyada emails spam mein daal do, important miss mat karo
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Why Not Use Linear Regression? Recap 🤔</h3>

      <div className="visual-example">
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#667eea', color: 'white' }}>
              <th style={{ padding: '15px' }}>Issue</th>
              <th style={{ padding: '15px' }}>Linear Regression</th>
              <th style={{ padding: '15px' }}>Logistic Regression</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ background: '#f8f9fa' }}>
              <td style={{ padding: '15px' }}><strong>Output Range</strong></td>
              <td style={{ padding: '15px', color: '#e74c3c' }}>Can be &lt;0 or &gt;1<br/>❌ Invalid probabilities</td>
              <td style={{ padding: '15px', color: '#2ecc71' }}>Always 0 to 1<br/>✅ Valid probabilities</td>
            </tr>
            <tr>
              <td style={{ padding: '15px' }}><strong>Interpretation</strong></td>
              <td style={{ padding: '15px', color: '#e74c3c' }}>Hard to interpret<br/>❌ What does 1.5 mean?</td>
              <td style={{ padding: '15px', color: '#2ecc71' }}>Easy to interpret<br/>✅ Direct probability</td>
            </tr>
            <tr style={{ background: '#f8f9fa' }}>
              <td style={{ padding: '15px' }}><strong>Decision Making</strong></td>
              <td style={{ padding: '15px', color: '#e74c3c' }}>Unclear boundary<br/>❌ Where to cut?</td>
              <td style={{ padding: '15px', color: '#2ecc71' }}>Clear threshold<br/>✅ Use 0.5 or adjust</td>
            </tr>
            <tr>
              <td style={{ padding: '15px' }}><strong>Extreme Values</strong></td>
              <td style={{ padding: '15px', color: '#e74c3c' }}>Unbounded<br/>❌ Can go to infinity</td>
              <td style={{ padding: '15px', color: '#2ecc71' }}>Bounded<br/>✅ Stays in 0-1</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Multiple Features Example 🎯</h3>

      <div className="visual-example">
        <div className="example-box">
          <p><strong>Email Spam Detection With Multiple Features</strong></p>

          <div className="formula-box" style={{ marginTop: '20px' }}>
            <code style={{ fontSize: '1rem' }}>
              z = w₁×(word_count) + w₂×(num_links) + w₃×(has_unsubscribe)<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;+ w₄×(sender_reputation) + b
            </code>
          </div>

          <p style={{ marginTop: '20px', lineHeight: '1.8' }}>
            <strong>Suppose Training Se Ye Weights Mile:</strong><br/>
            • w₁ = 0.001 (har word ka small contribution)<br/>
            • w₂ = 0.8 (links bahut important indicator)<br/>
            • w₃ = -2.0 (unsubscribe link hona GOOD sign hai, negative weight)<br/>
            • w₄ = -1.5 (achha reputation = less spam)<br/>
            • b = 1.0
          </p>

          <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>Email Analysis:</p>
            <ul style={{ lineHeight: '2', marginLeft: '20px' }}>
              <li>Word count = 200</li>
              <li>Number of links = 10</li>
              <li>Has unsubscribe = 0 (no)</li>
              <li>Sender reputation = 2 (scale 0-10, lower is worse)</li>
            </ul>

            <div style={{ background: 'white', padding: '15px', borderRadius: '8px', marginTop: '20px' }}>
              <code style={{ fontSize: '0.95rem', display: 'block' }}>
                z = 0.001×200 + 0.8×10 + (-2.0)×0 + (-1.5)×2 + 1.0
              </code>
              <code style={{ fontSize: '0.95rem', display: 'block', marginTop: '5px' }}>
                z = 0.2 + 8.0 + 0 - 3.0 + 1.0
              </code>
              <code style={{ fontSize: '0.95rem', display: 'block', marginTop: '5px', color: '#667eea', fontWeight: 'bold' }}>
                z = 6.2
              </code>
            </div>

            <div style={{ background: 'white', padding: '15px', borderRadius: '8px', marginTop: '15px' }}>
              <code style={{ fontSize: '0.95rem', display: 'block' }}>
                P = sigmoid(6.2) = 0.998
              </code>
            </div>

            <div style={{ background: '#ffebee', padding: '20px', borderRadius: '8px', marginTop: '15px', border: '2px solid #e74c3c' }}>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#c62828' }}>
                🚫 99.8% SPAM! (10 links + no unsubscribe + bad reputation)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="key-point" style={{ marginTop: '30px' }}>
        <strong>🎓 Is Module Mein Humne Kya Seekha:</strong>
        <ul style={{ marginTop: '15px', marginLeft: '20px', lineHeight: '2' }}>
          <li>Complete logistic regression formula: z = wx + b, then P = sigmoid(z)</li>
          <li>Weights (w) aur bias (b) training se milte hain</li>
          <li>Linear regression vs Logistic regression detailed comparison</li>
          <li>Decision boundary/threshold kaise kaam karta hai (usually 0.5)</li>
          <li>Complete examples with numbers - step by step calculation</li>
          <li>Multiple features kaise use karte hain</li>
          <li>Why logistic regression classification ke liye better hai</li>
        </ul>
      </div>

      <div style={{ background: '#e8f5e9', borderRadius: '10px', padding: '20px', marginTop: '30px' }}>
        <h4 style={{ color: '#2e7d32' }}>✅ Next Module Mein Kya Seekhenge?</h4>
        <p style={{ marginTop: '10px', color: '#333' }}>
          Ab hum training process dekhenge - logistic regression model ko train kaise karte hain?
          Cost function kya hai? Kaise best weights dhundhte hain? Sab detail mein! 🚀
        </p>
      </div>
    </div>
  )
}
