'use client'

export default function LogisticRegressionModule4() {
  return (
    <div className="content-section">
      <h2>Module 9: Training Process & Optimization 🎯</h2>

      <div className="key-point">
        <strong>🎯 Is Module Mein:</strong> Logistic Regression model ko train kaise karte hain?
        Cost function kya hai? <span className="hinglish-text">Best weights</span> kaise dhundhte hain?
      </div>

      <h3>Training Ka Goal Kya Hai? 🏆</h3>

      <div className="visual-example">
        <div className="example-box">
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            <strong>Main Goal:</strong> Aise weights (w₁, w₂, w₃...) aur bias (b) dhundhna jo
            <span className="hinglish-text"> sabse accurate predictions</span> de.
          </p>

          <ul className="step-by-step" style={{ marginTop: '20px' }}>
            <li>
              <strong>Input:</strong> Training data (features aur labels)
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '5px' }}>
                Example: 1000 emails with their spam/not spam labels
              </p>
            </li>
            <li>
              <strong>Process:</strong> Different weights try karo, errors dekho, improve karo
            </li>
            <li>
              <strong>Output:</strong> Best weights jo minimum error dein
            </li>
            <li>
              <strong>Result:</strong> Trained model ready for predictions! ✅
            </li>
          </ul>
        </div>
      </div>

      <h3>Cost Function (Log Loss) 📊</h3>

      <div className="key-point">
        <strong>Cost Function</strong> batata hai ki humari predictions
        <span className="hinglish-text"> kitni galat</span> hain. Isko minimize karna hai!
      </div>

      <div className="visual-example">
        <h4>Linear vs Logistic: Cost Functions</h4>

        <div className="example-box">
          <p><strong>Linear Regression:</strong></p>
          <div className="formula-box">
            <code>Cost = Mean Squared Error (MSE)</code>
            <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#666' }}>
              Average of (Actual - Predicted)²
            </p>
          </div>
          <p style={{ marginTop: '15px', background: '#ffebee', padding: '15px', borderRadius: '8px' }}>
            <strong>❌ Problem:</strong> MSE logistic regression ke saath achha kaam nahi karta.
            Sigmoid function ke saath use karne par ye non-convex ban jaata hai
            (matlab multiple local minimums, best point dhundhna mushkil).
          </p>
        </div>

        <div className="example-box" style={{ marginTop: '20px' }}>
          <p><strong>Logistic Regression:</strong></p>
          <div className="formula-box">
            <code>Cost = Log Loss (Cross-Entropy Loss)</code>
            <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#666' }}>
              Special formula designed for classification
            </p>
          </div>
          <p style={{ marginTop: '15px', background: '#e8f5e9', padding: '15px', borderRadius: '8px' }}>
            <strong>✅ Benefit:</strong> Convex function hai - ek hi best point hai,
            dhundhna easy hai!
          </p>
        </div>
      </div>

      <h3>Log Loss Formula (Simple Explanation) 📐</h3>

      <div className="visual-example">
        <div className="formula-box">
          <p style={{ marginBottom: '15px' }}>Ek Single Example Ke Liye:</p>
          <code style={{ fontSize: '1rem' }}>
            Loss = -[y×log(p) + (1-y)×log(1-p)]
          </code>
          <p style={{ marginTop: '15px', fontSize: '0.9rem', color: '#666' }}>
            y = actual label (0 ya 1)<br/>
            p = predicted probability (0 se 1 ke beech)
          </p>
        </div>

        <div className="example-box" style={{ marginTop: '20px' }}>
          <h4>Formula Ko Simple Language Mein Samajhte Hain:</h4>

          <div style={{ background: '#e3f2fd', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Case 1: Actual Class = 1 (y=1)</p>
            <p style={{ lineHeight: '1.8' }}>
              Jab actual class 1 hai, to formula simplify ho kar ye ban jaata hai:<br/>
              <code style={{ fontSize: '1.1rem', marginTop: '10px', display: 'inline-block' }}>Loss = -log(p)</code>
            </p>
            <ul style={{ marginTop: '15px', marginLeft: '30px', lineHeight: '2' }}>
              <li>Agar p = 1 (100% confident, sahi prediction) → Loss = 0 ✅</li>
              <li>Agar p = 0.9 (90% confident) → Loss = 0.10 (thoda)</li>
              <li>Agar p = 0.5 (50% uncertain) → Loss = 0.69 (zyada)</li>
              <li>Agar p = 0.1 (10% confident, galat!) → Loss = 2.3 (bahut zyada) ❌</li>
            </ul>
            <p style={{ marginTop: '15px', color: '#1976d2', fontWeight: 'bold' }}>
              Matlab: Jitna kam confident (galat direction mein), utna zyada penalty!
            </p>
          </div>

          <div style={{ background: '#fff3cd', padding: '20px', borderRadius: '10px' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Case 2: Actual Class = 0 (y=0)</p>
            <p style={{ lineHeight: '1.8' }}>
              Jab actual class 0 hai, to formula ye ban jaata hai:<br/>
              <code style={{ fontSize: '1.1rem', marginTop: '10px', display: 'inline-block' }}>Loss = -log(1-p)</code>
            </p>
            <ul style={{ marginTop: '15px', marginLeft: '30px', lineHeight: '2' }}>
              <li>Agar p = 0 (0% confident class 1, sahi!) → Loss = 0 ✅</li>
              <li>Agar p = 0.1 (10% confident) → Loss = 0.10 (thoda)</li>
              <li>Agar p = 0.5 (50% uncertain) → Loss = 0.69 (zyada)</li>
              <li>Agar p = 0.9 (90% confident, galat!) → Loss = 2.3 (bahut zyada) ❌</li>
            </ul>
            <p style={{ marginTop: '15px', color: '#f57c00', fontWeight: 'bold' }}>
              Matlab: Jitna zyada confident (galat direction mein), utna zyada penalty!
            </p>
          </div>
        </div>
      </div>

      <h3>Examples Se Samajhte Hain 🔍</h3>

      <div className="visual-example">
        <div className="example-box">
          <p><strong>Scenario: Email Spam Detection</strong></p>

          <div style={{ marginTop: '20px' }}>
            <div style={{ background: '#e8f5e9', padding: '20px', borderRadius: '10px', marginBottom: '20px', border: '2px solid #2ecc71' }}>
              <p style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '15px' }}>
                ✅ Good Prediction:
              </p>
              <p><strong>Actual:</strong> Spam (y=1)</p>
              <p><strong>Predicted:</strong> p=0.95 (95% confident spam hai)</p>
              <div style={{ background: 'white', padding: '15px', borderRadius: '8px', marginTop: '15px' }}>
                <code style={{ display: 'block' }}>Loss = -log(0.95) = 0.051</code>
                <p style={{ marginTop: '10px', color: '#2e7d32', fontWeight: 'bold' }}>
                  Loss bahut kam - excellent prediction! 🎯
                </p>
              </div>
            </div>

            <div style={{ background: '#fff3cd', padding: '20px', borderRadius: '10px', marginBottom: '20px', border: '2px solid #f57c00' }}>
              <p style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '15px' }}>
                ⚠️ Uncertain Prediction:
              </p>
              <p><strong>Actual:</strong> Spam (y=1)</p>
              <p><strong>Predicted:</strong> p=0.6 (60% confident)</p>
              <div style={{ background: 'white', padding: '15px', borderRadius: '8px', marginTop: '15px' }}>
                <code style={{ display: 'block' }}>Loss = -log(0.6) = 0.511</code>
                <p style={{ marginTop: '10px', color: '#f57c00', fontWeight: 'bold' }}>
                  Loss medium - model uncertain hai, improve karna padega
                </p>
              </div>
            </div>

            <div style={{ background: '#ffebee', padding: '20px', borderRadius: '10px', border: '2px solid #e74c3c' }}>
              <p style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '15px' }}>
                ❌ Bad Prediction:
              </p>
              <p><strong>Actual:</strong> Spam (y=1)</p>
              <p><strong>Predicted:</strong> p=0.1 (10% confident - bilkul galat!)</p>
              <div style={{ background: 'white', padding: '15px', borderRadius: '8px', marginTop: '15px' }}>
                <code style={{ display: 'block' }}>Loss = -log(0.1) = 2.303</code>
                <p style={{ marginTop: '10px', color: '#c62828', fontWeight: 'bold' }}>
                  Loss bahut zyada - terrible prediction! Model ko bahut seekhna hai 😞
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3>Complete Training Process 🔄</h3>

      <div className="visual-example">
        <ul className="step-by-step">
          <li>
            <strong>Initialize Weights:</strong><br/>
            Random small values se shuru karo
            <div style={{ background: '#f8f9fa', padding: '15px', marginTop: '10px', borderRadius: '8px' }}>
              Example: w₁=0.01, w₂=-0.02, w₃=0.03, b=0
            </div>
          </li>
          <li>
            <strong>Forward Pass:</strong><br/>
            Har training example ke liye prediction karo
            <div style={{ background: '#f8f9fa', padding: '15px', marginTop: '10px', borderRadius: '8px' }}>
              1. Calculate z = wx + b<br/>
              2. Apply sigmoid: p = σ(z)<br/>
              3. Get probability prediction
            </div>
          </li>
          <li>
            <strong>Calculate Loss:</strong><br/>
            Har example ka loss calculate karo aur average nikalo
            <div style={{ background: '#f8f9fa', padding: '15px', marginTop: '10px', borderRadius: '8px' }}>
              Total Cost = Average of all individual losses
            </div>
          </li>
          <li>
            <strong>Backward Pass (Gradient Calculation):</strong><br/>
            Calculate karo ki weights ko kis direction mein change karna hai
            <div style={{ background: '#f8f9fa', padding: '15px', marginTop: '10px', borderRadius: '8px' }}>
              Gradients batate hain: loss kam karne ke liye weights ko increase ya decrease karna hai
            </div>
          </li>
          <li>
            <strong>Update Weights:</strong><br/>
            Weights ko thoda adjust karo loss kam karne ke liye
            <div style={{ background: '#f8f9fa', padding: '15px', marginTop: '10px', borderRadius: '8px' }}>
              w_new = w_old - learning_rate × gradient
            </div>
          </li>
          <li>
            <strong>Repeat:</strong><br/>
            Steps 2-5 ko baar baar karo jab tak loss minimum na ho jaye
            <div style={{ background: '#f8f9fa', padding: '15px', marginTop: '10px', borderRadius: '8px' }}>
              Usually hundreds ya thousands of iterations!
            </div>
          </li>
          <li>
            <strong>Model Ready!</strong><br/>
            Best weights mil gaye, ab naye data par predictions kar sakte ho
            <div style={{ background: '#e8f5e9', padding: '15px', marginTop: '10px', borderRadius: '8px', fontWeight: 'bold', color: '#2e7d32' }}>
              Training complete! 🎉
            </div>
          </li>
        </ul>
      </div>

      <h3>Gradient Descent (Detailed) 📉</h3>

      <div className="visual-example">
        <div className="example-box">
          <h4 style={{ color: '#667eea', marginBottom: '15px' }}>Kaise Kaam Karta Hai?</h4>

          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
            <strong>Gradient Descent</strong> ek algorithm hai jo <span className="hinglish-text">automatically</span> best weights dhundh leta hai.
          </p>

          <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>Pahaad Analogy (Detailed):</p>
            <ol style={{ marginLeft: '20px', lineHeight: '2' }}>
              <li>
                <strong>Starting Point:</strong> Tum ek pahaad par random jagah khade ho (random weights)
              </li>
              <li>
                <strong>Goal:</strong> Sabse niche valley tak pahunchna hai (minimum loss)
              </li>
              <li>
                <strong>Strategy:</strong> Har step par dekho - kis direction mein niche jaana hai?
              </li>
              <li>
                <strong>Take Step:</strong> Us direction mein thoda sa kadam chalo
              </li>
              <li>
                <strong>Repeat:</strong> Phir se direction check karo aur kadam chalo
              </li>
              <li>
                <strong>Stop:</strong> Jab niche pahunch jao (loss minimum ho gaya)
              </li>
            </ol>
          </div>

          <div style={{ background: 'white', padding: '20px', borderRadius: '10px', marginTop: '20px', border: '1px solid #ddd' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>Mathematical Update Rule:</p>
            <div className="formula-box">
              <code>w_new = w_old - α × ∂Loss/∂w</code>
            </div>
            <ul style={{ marginTop: '20px', lineHeight: '2' }}>
              <li><strong>w_old:</strong> Current weight value</li>
              <li><strong>α (alpha):</strong> Learning rate (step size)</li>
              <li><strong>∂Loss/∂w:</strong> Gradient (kis direction mein jaana hai)</li>
              <li><strong>w_new:</strong> Updated weight value</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Learning Rate Ka Role 🏃</h3>

      <table className="comparison-table">
        <thead>
          <tr>
            <th>Learning Rate</th>
            <th>Effect</th>
            <th>Problem</th>
            <th>When to Use</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Too Large<br/>(e.g., 1.0)</strong></td>
            <td>Bahut bade steps<br/>Fast movement</td>
            <td style={{ color: '#e74c3c' }}>❌ Overshoot - best point miss<br/>❌ Divergence - loss badhta rahega</td>
            <td>Generally avoid</td>
          </tr>
          <tr>
            <td><strong>Too Small<br/>(e.g., 0.00001)</strong></td>
            <td>Bahut chhote steps<br/>Slow movement</td>
            <td style={{ color: '#f57c00' }}>⚠️ Training bahut slow<br/>⚠️ Local minima mein fas sakte ho</td>
            <td>When close to minimum</td>
          </tr>
          <tr>
            <td><strong>Just Right<br/>(e.g., 0.01-0.1)</strong></td>
            <td>Balanced steps<br/>Steady progress</td>
            <td style={{ color: '#2ecc71' }}>✅ Fast + stable convergence<br/>✅ Finds good minimum</td>
            <td>Usually best choice</td>
          </tr>
        </tbody>
      </table>

      <h3>Stopping Criteria 🛑</h3>

      <div className="visual-example">
        <div className="example-box">
          <h4>Training Kab Rokni Hai?</h4>

          <ul className="step-by-step">
            <li>
              <strong>Maximum Iterations:</strong><br/>
              Pehle se decide kar lo - jaise 1000 iterations ya 100 epochs
              <div style={{ background: '#f8f9fa', padding: '10px', marginTop: '5px', borderRadius: '5px', fontSize: '0.9rem' }}>
                Simple aur predictable approach
              </div>
            </li>
            <li>
              <strong>Loss Threshold:</strong><br/>
              Jab loss ek certain value se kam ho jaye
              <div style={{ background: '#f8f9fa', padding: '10px', marginTop: '5px', borderRadius: '5px', fontSize: '0.9rem' }}>
                Example: Stop when loss &lt; 0.01
              </div>
            </li>
            <li>
              <strong>No Improvement:</strong><br/>
              Kai iterations tak loss improve nahi hua
              <div style={{ background: '#f8f9fa', padding: '10px', marginTop: '5px', borderRadius: '5px', fontSize: '0.9rem' }}>
                Example: Last 50 iterations mein 0.001 se kam change
              </div>
            </li>
            <li>
              <strong>Validation Loss:</strong><br/>
              Validation set par loss check karo - overfitting se bachne ke liye
              <div style={{ background: '#f8f9fa', padding: '10px', marginTop: '5px', borderRadius: '5px', fontSize: '0.9rem' }}>
                If validation loss badhne laga to stop - overfitting ho raha hai
              </div>
            </li>
          </ul>
        </div>
      </div>

      <h3>Batch Training vs Online Learning 📦</h3>

      <table className="comparison-table">
        <thead>
          <tr>
            <th>Method</th>
            <th>Description</th>
            <th>Pros</th>
            <th>Cons</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Batch Gradient Descent</strong></td>
            <td>Sabhi training examples ek saath use karo</td>
            <td>• Stable updates<br/>• Smooth convergence</td>
            <td>• Slow for large datasets<br/>• More memory needed</td>
          </tr>
          <tr>
            <td><strong>Stochastic (Online)</strong></td>
            <td>Ek-ek example par update karo</td>
            <td>• Fast updates<br/>• Less memory<br/>• Can escape local minima</td>
            <td>• Noisy updates<br/>• Less stable</td>
          </tr>
          <tr>
            <td><strong>Mini-Batch<br/>(Most Common)</strong></td>
            <td>Small groups (32, 64, 128) par update</td>
            <td style={{ color: '#2ecc71' }}>• Best of both worlds!<br/>• Fast + stable<br/>• Efficient</td>
            <td>• Need to tune batch size</td>
          </tr>
        </tbody>
      </table>

      <h3>Regularization (Overfitting Se Bachna) 🛡️</h3>

      <div className="visual-example">
        <div className="example-box">
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
            <strong>Regularization</strong> ek technique hai jo model ko <span className="hinglish-text">zyada complex</span> banne se rokti hai.
            Isse overfitting kam hota hai.
          </p>

          <div style={{ background: '#e3f2fd', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>L2 Regularization (Ridge):</p>
            <div className="formula-box">
              <code>Cost = Log_Loss + λ × (w₁² + w₂² + w₃² + ...)</code>
            </div>
            <p style={{ marginTop: '15px', lineHeight: '1.8' }}>
              • λ (lambda) = regularization strength<br/>
              • Bade weights ko penalty milti hai<br/>
              • Model simple rehta hai, generalize better karta hai
            </p>
          </div>

          <div style={{ background: '#fff3cd', padding: '20px', borderRadius: '10px' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>L1 Regularization (Lasso):</p>
            <div className="formula-box">
              <code>Cost = Log_Loss + λ × (|w₁| + |w₂| + |w₃| + ...)</code>
            </div>
            <p style={{ marginTop: '15px', lineHeight: '1.8' }}>
              • Absolute values use karta hai<br/>
              • Kuch weights ko 0 bana deta hai (feature selection)<br/>
              • Sparse models banata hai
            </p>
          </div>
        </div>
      </div>

      <div className="key-point" style={{ marginTop: '30px' }}>
        <strong>🎓 Is Module Mein Humne Kya Seekha:</strong>
        <ul style={{ marginTop: '15px', marginLeft: '20px', lineHeight: '2' }}>
          <li>Training ka goal: Best weights dhundhna jo minimum loss de</li>
          <li>Log Loss (Cross-Entropy) - classification ke liye special cost function</li>
          <li>Training process: Forward pass → Loss calculate → Gradients → Update weights</li>
          <li>Gradient Descent automatically best weights dhundhta hai</li>
          <li>Learning rate step size control karta hai</li>
          <li>Stopping criteria - kab training rokni hai</li>
          <li>Mini-batch training best balance deta hai</li>
          <li>Regularization overfitting se bachata hai</li>
        </ul>
      </div>

      <div style={{ background: '#e8f5e9', borderRadius: '10px', padding: '20px', marginTop: '30px' }}>
        <h4 style={{ color: '#2e7d32' }}>✅ Next Module Mein Kya Seekhenge?</h4>
        <p style={{ marginTop: '10px', color: '#333' }}>
          Ab hum real-world applications dekhenge! Spam detection, disease prediction, customer churn -
          practical examples ke saath interactive demos! 🚀
        </p>
      </div>
    </div>
  )
}
