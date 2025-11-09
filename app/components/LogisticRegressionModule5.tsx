'use client'

import { useState } from 'react'

export default function LogisticRegressionModule5() {
  const [studyHours, setStudyHours] = useState(3)
  const [attendance, setAttendance] = useState(75)
  const [spamWords, setSpamWords] = useState(2)
  const [links, setLinks] = useState(3)

  // Simplified pass/fail prediction
  const predictPass = (hours: number, attend: number) => {
    const z = 1.5 * hours + 0.02 * attend - 6
    return 1 / (1 + Math.exp(-z))
  }

  // Simplified spam prediction
  const predictSpam = (words: number, numLinks: number) => {
    const z = 0.8 * words + 0.5 * numLinks - 3
    return 1 / (1 + Math.exp(-z))
  }

  return (
    <div className="content-section">
      <h2>Module 10: Real Applications & Practice 🌍</h2>

      <div className="key-point">
        <strong>🎯 Is Module Mein:</strong> Real-world applications dekhenge with
        <span className="hinglish-text"> interactive demos</span>! Practical examples aur use cases!
      </div>

      <h3>Example 1: Student Pass/Fail Prediction 📚</h3>

      <div className="visual-example">
        <h4>Problem Statement:</h4>
        <p style={{ lineHeight: '1.8' }}>
          College ko pehle se predict karna hai ki student pass hoga ya fail,
          taaki struggling students ki madad ki ja sake.
        </p>

        <div className="interactive-chart" style={{ marginTop: '30px' }}>
          <h4 style={{ marginBottom: '20px' }}>🎮 Interactive Prediction Tool</h4>

          <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '10px' }}>
            <div style={{ marginBottom: '30px' }}>
              <label style={{ display: 'block', marginBottom: '15px', fontSize: '1.1rem', fontWeight: 'bold' }}>
                Study Hours Per Day: {studyHours} hours
              </label>
              <input
                type="range"
                min="0"
                max="8"
                step="0.5"
                value={studyHours}
                onChange={(e) => setStudyHours(Number(e.target.value))}
                style={{ width: '100%', height: '10px' }}
              />
            </div>

            <div style={{ marginBottom: '30px' }}>
              <label style={{ display: 'block', marginBottom: '15px', fontSize: '1.1rem', fontWeight: 'bold' }}>
                Attendance: {attendance}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={attendance}
                onChange={(e) => setAttendance(Number(e.target.value))}
                style={{ width: '100%', height: '10px' }}
              />
            </div>

            {(() => {
              const prob = predictPass(studyHours, attendance)
              const willPass = prob >= 0.5

              return (
                <>
                  <div style={{
                    background: willPass ? 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)' : 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
                    color: 'white',
                    padding: '30px',
                    borderRadius: '15px',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Pass Probability:</div>
                    <div style={{ fontSize: '3rem', fontWeight: 'bold' }}>
                      {(prob * 100).toFixed(2)}%
                    </div>
                    <div style={{ fontSize: '1.5rem', marginTop: '20px', fontWeight: 'bold' }}>
                      {willPass ? '✅ Will PASS' : '❌ Will FAIL'}
                    </div>
                  </div>

                  <div style={{ marginTop: '20px', background: 'white', padding: '20px', borderRadius: '10px' }}>
                    <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>💡 Interpretation:</p>
                    {prob >= 0.9 ? (
                      <p style={{ color: '#2ecc71', fontSize: '1.1rem' }}>
                        <strong>Excellent!</strong> Bahut high probability - student pass hone wala hai! 🎉
                      </p>
                    ) : prob >= 0.7 ? (
                      <p style={{ color: '#27ae60', fontSize: '1.1rem' }}>
                        <strong>Good!</strong> Student likely pass hoga. Keep up the good work! 👍
                      </p>
                    ) : prob >= 0.5 ? (
                      <p style={{ color: '#f39c12', fontSize: '1.1rem' }}>
                        <strong>Borderline:</strong> Pass ho sakta hai par risky hai. Thoda aur effort chahiye! ⚠️
                      </p>
                    ) : prob >= 0.3 ? (
                      <p style={{ color: '#e67e22', fontSize: '1.1rem' }}>
                        <strong>At Risk:</strong> Student fail ho sakta hai. Extra help chahiye! 🚨
                      </p>
                    ) : (
                      <p style={{ color: '#c0392b', fontSize: '1.1rem' }}>
                        <strong>High Risk:</strong> Urgent intervention needed! Student ko bahut help chahiye! 🆘
                      </p>
                    )}

                    {!willPass && (
                      <div style={{ marginTop: '20px', background: '#fff3cd', padding: '15px', borderRadius: '8px' }}>
                        <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>📋 Recommendations:</p>
                        <ul style={{ marginLeft: '20px', lineHeight: '2' }}>
                          {studyHours < 3 && <li>Study hours badhao - at least 3-4 hours daily</li>}
                          {attendance < 75 && <li>Attendance improve karo - target 75%+</li>}
                          <li>Extra tutoring sessions attend karo</li>
                          <li>Doubt clearing sessions mein participate karo</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </>
              )
            })()}
          </div>
        </div>
      </div>

      <h3>Example 2: Email Spam Detection 📧</h3>

      <div className="visual-example">
        <h4>Problem Statement:</h4>
        <p style={{ lineHeight: '1.8' }}>
          Email service ko automatically spam emails filter karne hain,
          taaki users ko sirf important emails dikhen.
        </p>

        <div className="interactive-chart" style={{ marginTop: '30px' }}>
          <h4 style={{ marginBottom: '20px' }}>🎮 Spam Detector Demo</h4>

          <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '10px' }}>
            <div style={{ marginBottom: '30px' }}>
              <label style={{ display: 'block', marginBottom: '15px', fontSize: '1.1rem', fontWeight: 'bold' }}>
                Number of Spam Words: {spamWords}
              </label>
              <input
                type="range"
                min="0"
                max="10"
                step="1"
                value={spamWords}
                onChange={(e) => setSpamWords(Number(e.target.value))}
                style={{ width: '100%', height: '10px' }}
              />
              <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '10px' }}>
                Words like: FREE, WIN, WINNER, CLICK HERE, LIMITED TIME
              </p>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <label style={{ display: 'block', marginBottom: '15px', fontSize: '1.1rem', fontWeight: 'bold' }}>
                Number of Links: {links}
              </label>
              <input
                type="range"
                min="0"
                max="20"
                step="1"
                value={links}
                onChange={(e) => setLinks(Number(e.target.value))}
                style={{ width: '100%', height: '10px' }}
              />
            </div>

            {(() => {
              const prob = predictSpam(spamWords, links)
              const isSpam = prob >= 0.5

              return (
                <>
                  <div style={{
                    background: isSpam ? 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)' : 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)',
                    color: 'white',
                    padding: '30px',
                    borderRadius: '15px',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Spam Probability:</div>
                    <div style={{ fontSize: '3rem', fontWeight: 'bold' }}>
                      {(prob * 100).toFixed(2)}%
                    </div>
                    <div style={{ fontSize: '1.5rem', marginTop: '20px', fontWeight: 'bold' }}>
                      {isSpam ? '🚫 SPAM' : '✅ LEGITIMATE'}
                    </div>
                  </div>

                  <div style={{ marginTop: '20px', background: 'white', padding: '20px', borderRadius: '10px' }}>
                    <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>💡 Analysis:</p>
                    {prob >= 0.9 ? (
                      <p style={{ color: '#c0392b', fontSize: '1.1rem' }}>
                        <strong>Definitely Spam!</strong> Bahut clear indicators hain. Spam folder mein daal do! 🗑️
                      </p>
                    ) : prob >= 0.7 ? (
                      <p style={{ color: '#e67e22', fontSize: '1.1rem' }}>
                        <strong>Likely Spam:</strong> Probably spam hai. Move to spam folder. ⚠️
                      </p>
                    ) : prob >= 0.5 ? (
                      <p style={{ color: '#f39c12', fontSize: '1.1rem' }}>
                        <strong>Suspicious:</strong> Spam ho sakta hai. User ko warning dikha do. 🤔
                      </p>
                    ) : prob >= 0.2 ? (
                      <p style={{ color: '#27ae60', fontSize: '1.1rem' }}>
                        <strong>Probably Safe:</strong> Likely legitimate email hai. Inbox mein rakho. ✅
                      </p>
                    ) : (
                      <p style={{ color: '#2ecc71', fontSize: '1.1rem' }}>
                        <strong>Legitimate:</strong> Clean email! Inbox mein dikhao. 📬
                      </p>
                    )}

                    {isSpam && (
                      <div style={{ marginTop: '20px', background: '#ffebee', padding: '15px', borderRadius: '8px' }}>
                        <p style={{ fontWeight: 'bold', marginBottom: '10px', color: '#c62828' }}>🚨 Red Flags Detected:</p>
                        <ul style={{ marginLeft: '20px', lineHeight: '2' }}>
                          {spamWords > 2 && <li>Multiple spam keywords present</li>}
                          {links > 5 && <li>Too many links (suspicious)</li>}
                          {spamWords > 5 && <li>Excessive promotional language</li>}
                        </ul>
                      </div>
                    )}
                  </div>
                </>
              )
            })()}
          </div>
        </div>
      </div>

      <h3>Real World Applications 🌟</h3>

      <div className="example-box">
        <h4 style={{ color: '#667eea' }}>1. 🏥 Medical Diagnosis</h4>
        <p><strong>Problem:</strong> Disease hai ya nahi predict karna</p>
        <p><strong>Features:</strong> Age, symptoms, blood test results, medical history, BMI</p>
        <p><strong>Output:</strong> Probability of disease (0-1)</p>
        <p><strong>Use:</strong> Early detection, personalized treatment plans</p>
        <p style={{ background: '#e8f5e9', padding: '10px', borderRadius: '5px', marginTop: '10px' }}>
          <strong>Example:</strong> Diabetes prediction - 85% probability → Doctor ko alert, further tests
        </p>
      </div>

      <div className="example-box" style={{ marginTop: '15px' }}>
        <h4 style={{ color: '#667eea' }}>2. 💳 Credit Card Fraud Detection</h4>
        <p><strong>Problem:</strong> Transaction fraudulent hai ya legitimate</p>
        <p><strong>Features:</strong> Amount, location, time, merchant type, user history</p>
        <p><strong>Output:</strong> Fraud probability</p>
        <p><strong>Use:</strong> Real-time transaction blocking, customer alerts</p>
        <p style={{ background: '#e8f5e9', padding: '10px', borderRadius: '5px', marginTop: '10px' }}>
          <strong>Example:</strong> ₹50,000 transaction at 3 AM from foreign country → 95% fraud → Block!
        </p>
      </div>

      <div className="example-box" style={{ marginTop: '15px' }}>
        <h4 style={{ color: '#667eea' }}>3. 📱 Customer Churn Prediction</h4>
        <p><strong>Problem:</strong> Customer company chhod kar jayega ya nahi</p>
        <p><strong>Features:</strong> Usage frequency, complaints, tenure, plan type, support calls</p>
        <p><strong>Output:</strong> Churn probability</p>
        <p><strong>Use:</strong> Retention campaigns, special offers targeted users ko</p>
        <p style={{ background: '#e8f5e9', padding: '10px', borderRadius: '5px', marginTop: '10px' }}>
          <strong>Example:</strong> 70% churn risk → Send special discount offer, call customer care
        </p>
      </div>

      <div className="example-box" style={{ marginTop: '15px' }}>
        <h4 style={{ color: '#667eea' }}>4. 🏦 Loan Approval</h4>
        <p><strong>Problem:</strong> Loan approve karna hai ya nahi</p>
        <p><strong>Features:</strong> Income, credit score, employment history, existing debts, age</p>
        <p><strong>Output:</strong> Approval probability</p>
        <p><strong>Use:</strong> Automated loan decisions, risk assessment</p>
        <p style={{ background: '#e8f5e9', padding: '10px', borderRadius: '5px', marginTop: '10px' }}>
          <strong>Example:</strong> Credit score 750, stable job, low debt → 90% approval → Loan approved!
        </p>
      </div>

      <div className="example-box" style={{ marginTop: '15px' }}>
        <h4 style={{ color: '#667eea' }}>5. 🎯 Ad Click Prediction</h4>
        <p><strong>Problem:</strong> User ad par click karega ya nahi</p>
        <p><strong>Features:</strong> User demographics, browsing history, time of day, device type</p>
        <p><strong>Output:</strong> Click probability</p>
        <p><strong>Use:</strong> Ad targeting, budget optimization, ROI improvement</p>
        <p style={{ background: '#e8f5e9', padding: '10px', borderRadius: '5px', marginTop: '10px' }}>
          <strong>Example:</strong> 25-year-old interested in tech, evening time → 60% click rate → Show tech ads
        </p>
      </div>

      <div className="example-box" style={{ marginTop: '15px' }}>
        <h4 style={{ color: '#667eea' }}>6. 🚗 Insurance Premium Calculation</h4>
        <p><strong>Problem:</strong> Driver risky hai ya safe</p>
        <p><strong>Features:</strong> Age, driving history, car type, location, accidents</p>
        <p><strong>Output:</strong> Risk probability</p>
        <p><strong>Use:</strong> Premium calculation, policy decisions</p>
        <p style={{ background: '#e8f5e9', padding: '10px', borderRadius: '5px', marginTop: '10px' }}>
          <strong>Example:</strong> 18 years old, sports car, 2 accidents → 80% high risk → Higher premium
        </p>
      </div>

      <h3>Model Evaluation Metrics 📊</h3>

      <div className="visual-example">
        <h4>Classification Ke Liye Important Metrics:</h4>

        <div className="example-box">
          <p><strong>1. Accuracy (सटीकता)</strong></p>
          <div className="formula-box">
            <code>Accuracy = (Correct Predictions) / (Total Predictions)</code>
          </div>
          <p style={{ marginTop: '15px', lineHeight: '1.8' }}>
            <strong>Example:</strong> 100 emails mein se 95 correctly classify kiye → 95% accuracy<br/>
            <strong>Problem:</strong> Imbalanced data mein misleading ho sakta hai
          </p>
        </div>

        <div className="example-box" style={{ marginTop: '20px' }}>
          <p><strong>2. Precision (निशुद्धता)</strong></p>
          <div className="formula-box">
            <code>Precision = True Positives / (True Positives + False Positives)</code>
          </div>
          <p style={{ marginTop: '15px', lineHeight: '1.8' }}>
            <strong>Matlab:</strong> Jitne spam bataye, unmein se kitne actually spam the?<br/>
            <strong>Use:</strong> Jab false positives costly hon (important email spam mein na jaye)
          </p>
        </div>

        <div className="example-box" style={{ marginTop: '20px' }}>
          <p><strong>3. Recall (Sensitivity/संवेदनशीलता)</strong></p>
          <div className="formula-box">
            <code>Recall = True Positives / (True Positives + False Negatives)</code>
          </div>
          <p style={{ marginTop: '15px', lineHeight: '1.8' }}>
            <strong>Matlab:</strong> Jitne actual spam the, unmein se kitne pakde?<br/>
            <strong>Use:</strong> Jab false negatives costly hon (disease miss nahi hona chahiye)
          </p>
        </div>

        <div className="example-box" style={{ marginTop: '20px' }}>
          <p><strong>4. F1 Score</strong></p>
          <div className="formula-box">
            <code>F1 = 2 × (Precision × Recall) / (Precision + Recall)</code>
          </div>
          <p style={{ marginTop: '15px', lineHeight: '1.8' }}>
            <strong>Matlab:</strong> Precision aur Recall ka harmonic mean<br/>
            <strong>Use:</strong> Overall balanced metric - dono important hon to ye use karo
          </p>
        </div>

        <div className="example-box" style={{ marginTop: '20px' }}>
          <p><strong>5. ROC-AUC Score</strong></p>
          <p style={{ marginTop: '15px', lineHeight: '1.8' }}>
            <strong>ROC Curve:</strong> True Positive Rate vs False Positive Rate ka graph<br/>
            <strong>AUC:</strong> Area under curve - higher is better (0.5 = random, 1.0 = perfect)<br/>
            <strong>Use:</strong> Overall model quality assess karne ke liye
          </p>
        </div>
      </div>

      <h3>Confusion Matrix 🎯</h3>

      <div className="visual-example">
        <div className="example-box">
          <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
            <strong>Confusion Matrix</strong> ek table hai jo batata hai model ne kitne sahi aur galat predictions kiye.
          </p>

          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
            <thead>
              <tr>
                <th style={{ padding: '15px', border: '2px solid #333', background: '#667eea', color: 'white' }}></th>
                <th style={{ padding: '15px', border: '2px solid #333', background: '#667eea', color: 'white' }}>Predicted: No</th>
                <th style={{ padding: '15px', border: '2px solid #333', background: '#667eea', color: 'white' }}>Predicted: Yes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '15px', border: '2px solid #333', background: '#667eea', color: 'white', fontWeight: 'bold' }}>Actual: No</td>
                <td style={{ padding: '20px', border: '2px solid #333', background: '#e8f5e9', textAlign: 'center' }}>
                  <strong style={{ fontSize: '1.5rem', color: '#2ecc71' }}>TN</strong><br/>
                  <span style={{ fontSize: '0.9rem' }}>True Negative</span><br/>
                  <span style={{ fontSize: '0.85rem', color: '#666' }}>✅ Correctly predicted No</span>
                </td>
                <td style={{ padding: '20px', border: '2px solid #333', background: '#ffebee', textAlign: 'center' }}>
                  <strong style={{ fontSize: '1.5rem', color: '#e74c3c' }}>FP</strong><br/>
                  <span style={{ fontSize: '0.9rem' }}>False Positive</span><br/>
                  <span style={{ fontSize: '0.85rem', color: '#666' }}>❌ Wrong: Said Yes, was No</span>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '15px', border: '2px solid #333', background: '#667eea', color: 'white', fontWeight: 'bold' }}>Actual: Yes</td>
                <td style={{ padding: '20px', border: '2px solid #333', background: '#fff3cd', textAlign: 'center' }}>
                  <strong style={{ fontSize: '1.5rem', color: '#f57c00' }}>FN</strong><br/>
                  <span style={{ fontSize: '0.9rem' }}>False Negative</span><br/>
                  <span style={{ fontSize: '0.85rem', color: '#666' }}>❌ Wrong: Said No, was Yes</span>
                </td>
                <td style={{ padding: '20px', border: '2px solid #333', background: '#e8f5e9', textAlign: 'center' }}>
                  <strong style={{ fontSize: '1.5rem', color: '#2ecc71' }}>TP</strong><br/>
                  <span style={{ fontSize: '0.9rem' }}>True Positive</span><br/>
                  <span style={{ fontSize: '0.85rem', color: '#666' }}>✅ Correctly predicted Yes</span>
                </td>
              </tr>
            </tbody>
          </table>

          <div style={{ marginTop: '30px', background: '#e3f2fd', padding: '20px', borderRadius: '10px' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>Example: Disease Detection (100 patients)</p>
            <ul style={{ marginLeft: '20px', lineHeight: '2' }}>
              <li><strong>TN = 70:</strong> 70 healthy log correctly identified ✅</li>
              <li><strong>FP = 5:</strong> 5 healthy log ko disease bataya ❌ (False alarm)</li>
              <li><strong>FN = 3:</strong> 3 sick log ko healthy bataya ❌ (Dangerous!)</li>
              <li><strong>TP = 22:</strong> 22 sick log correctly identified ✅</li>
            </ul>
            <div style={{ marginTop: '20px', background: 'white', padding: '15px', borderRadius: '8px' }}>
              <strong>Metrics:</strong><br/>
              • Accuracy = (70+22)/100 = 92%<br/>
              • Precision = 22/(22+5) = 81.5%<br/>
              • Recall = 22/(22+3) = 88%<br/>
              • F1 Score = 2×(0.815×0.88)/(0.815+0.88) = 84.6%
            </div>
          </div>
        </div>
      </div>

      <h3>Tips for Better Models 💡</h3>

      <div className="visual-example">
        <ul className="step-by-step">
          <li>
            <strong>More Quality Data:</strong><br/>
            Jitna zyada relevant data, utna better model
          </li>
          <li>
            <strong>Feature Engineering:</strong><br/>
            Naye meaningful features banao existing data se
          </li>
          <li>
            <strong>Handle Imbalanced Data:</strong><br/>
            Agar ek class bahut zyada hai to special techniques use karo (SMOTE, class weights)
          </li>
          <li>
            <strong>Cross-Validation:</strong><br/>
            Multiple folds par test karo - single test se better evaluation
          </li>
          <li>
            <strong>Tune Threshold:</strong><br/>
            0.5 fixed nahi hai - problem ke hisaab se adjust karo
          </li>
          <li>
            <strong>Monitor in Production:</strong><br/>
            Real world mein performance track karo, retrain when needed
          </li>
        </ul>
      </div>

      <div className="key-point" style={{ marginTop: '30px' }}>
        <strong>🎓 Is Module Mein Humne Kya Seekha:</strong>
        <ul style={{ marginTop: '15px', marginLeft: '20px', lineHeight: '2' }}>
          <li>Real-world applications: Medical, fraud detection, churn prediction, etc.</li>
          <li>Interactive examples: Student prediction, spam detection</li>
          <li>Evaluation metrics: Accuracy, Precision, Recall, F1, ROC-AUC</li>
          <li>Confusion Matrix samjha - TP, TN, FP, FN</li>
          <li>Practical tips for better models</li>
          <li>When to use which metric based on problem type</li>
        </ul>
      </div>

      <div style={{ background: '#e3f2fd', borderRadius: '15px', padding: '30px', marginTop: '40px', border: '3px solid #2196f3' }}>
        <h3 style={{ color: '#1976d2', marginBottom: '20px', textAlign: 'center' }}>🎉 Course Complete! Congratulations! 🎉</h3>

        <div style={{ background: 'white', padding: '25px', borderRadius: '10px', marginBottom: '20px' }}>
          <h4 style={{ color: '#667eea', marginBottom: '15px' }}>📚 Tumne Kya Seekha:</h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <div>
              <p style={{ fontWeight: 'bold', color: '#2ecc71', marginBottom: '10px' }}>✅ Linear Regression</p>
              <ul style={{ marginLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
                <li>Numbers predict karna</li>
                <li>y = mx + c formula</li>
                <li>Training process</li>
                <li>Real applications</li>
              </ul>
            </div>
            <div>
              <p style={{ fontWeight: 'bold', color: '#2ecc71', marginBottom: '10px' }}>✅ Logistic Regression</p>
              <ul style={{ marginLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem' }}>
                <li>Classification problems</li>
                <li>Sigmoid function</li>
                <li>Probability predictions</li>
                <li>Model evaluation</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ background: 'white', padding: '25px', borderRadius: '10px', marginBottom: '20px' }}>
          <h4 style={{ color: '#667eea', marginBottom: '15px' }}>🚀 Ab Aage Kya?</h4>
          <ul style={{ marginLeft: '20px', lineHeight: '2' }}>
            <li><strong>Practice:</strong> Real datasets par try karo (Kaggle, UCI ML Repository)</li>
            <li><strong>Learn More Algorithms:</strong> Decision Trees, Random Forest, Neural Networks</li>
            <li><strong>Build Projects:</strong> Apne ideas ko implement karo</li>
            <li><strong>Join Communities:</strong> ML forums, Discord groups mein participate karo</li>
            <li><strong>Keep Learning:</strong> ML ki duniya bahut badi hai - explore karte raho!</li>
          </ul>
        </div>

        <div style={{ textAlign: 'center', padding: '20px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '10px', color: 'white' }}>
          <p style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '10px' }}>
            Tum ab Machine Learning jaante ho! 🎓
          </p>
          <p style={{ fontSize: '1.1rem' }}>
            Is knowledge ka use karke amazing things build karo! 💪
          </p>
          <p style={{ fontSize: '2rem', marginTop: '20px' }}>
            All the best! 🌟
          </p>
        </div>
      </div>
    </div>
  )
}
