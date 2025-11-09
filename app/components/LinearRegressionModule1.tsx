'use client'

export default function LinearRegressionModule1() {
  return (
    <div className="content-section">
      <h2>Module 1: Machine Learning Kya Hai? 🤖</h2>

      <div className="visual-example">
        <h4>🎯 Pehle Real Life Example Se Samajhte Hain</h4>
        <div className="example-box">
          <p><strong>Scenario:</strong> Ek bachcha cycle chalana seekh raha hai</p>
          <ul style={{ marginLeft: '30px', marginTop: '15px', lineHeight: '2' }}>
            <li><strong>Pehli baar:</strong> Gir gaya ❌</li>
            <li><strong>Dusri baar:</strong> Thoda balance banaya, phir gir gaya ❌</li>
            <li><strong>Teesri baar:</strong> 5 second chala, phir gir gaya ⚠️</li>
            <li><strong>10-20 practice ke baad:</strong> Achhe se chala sakta hai! ✅</li>
          </ul>
          <p style={{ marginTop: '20px', color: '#667eea', fontWeight: 'bold' }}>
            Ye hai LEARNING - Practice se improve hona!
          </p>
        </div>
      </div>

      <h3>Machine Learning Exactly Aisa Hi Hai! 💡</h3>
      <p>
        Jaise insaan practice karke seekhta hai, <span className="hinglish-text">waise hi computer bhi data dekhkar seekhta hai</span>.
      </p>

      <div className="key-point">
        <strong>Simple Definition:</strong> Machine Learning matlab computer ko examples dikhakar sikhana,
        taaki wo khud se naye problems solve kar sake.
      </div>

      <h3>Normal Programming vs Machine Learning 🆚</h3>

      <div className="visual-example">
        <h4>Normal Programming (Traditional Way):</h4>
        <div className="example-box">
          <p><strong>Example: Email Ko "Good" Ya "Bad" Category Mein Daalna</strong></p>
          <ul className="step-by-step">
            <li>Programmer khud rules likhta hai:
              <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
                <li>"Agar email mein 'FREE' word hai → Bad email"</li>
                <li>"Agar email mein 'WINNER' hai → Bad email"</li>
                <li>"Agar email mein 'CLICK HERE' hai → Bad email"</li>
              </ul>
            </li>
            <li>Computer sirf un rules ko follow karta hai</li>
            <li><strong>Problem:</strong> Har possibility ke liye rule likhna impossible hai!</li>
          </ul>
        </div>

        <h4 style={{ marginTop: '30px' }}>Machine Learning Way (Smart Way):</h4>
        <div className="example-box">
          <p><strong>Same Example: Email Classification</strong></p>
          <ul className="step-by-step">
            <li>Hum computer ko 1000 examples dikhate hain:
              <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
                <li>500 good emails</li>
                <li>500 bad emails</li>
              </ul>
            </li>
            <li>Computer khud patterns seekh leta hai:
              <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
                <li>Bad emails mein kaun se words zyada aate hain</li>
                <li>Good emails ki kya style hoti hai</li>
                <li>Kis type ke sender ka email safe hota hai</li>
              </ul>
            </li>
            <li>Ab computer naye email ko bhi classify kar sakta hai! ✨</li>
          </ul>
        </div>
      </div>

      <h3>Machine Learning Ke Teen Main Types 📊</h3>

      <div className="example-box">
        <h4 style={{ color: '#667eea' }}>1. Supervised Learning (Teacher Ke Saath Seekhna) 👨‍🏫</h4>
        <p style={{ marginTop: '10px' }}>
          Jab hum computer ko <strong>questions AUR answers dono</strong> dikhate hain.
        </p>
        <p style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', marginTop: '10px' }}>
          <strong>Example:</strong> Hum computer ko fruits ki photos dikhate hain aur batate hain "ye apple hai", "ye banana hai".
          Baad mein computer khud naye fruit ko identify kar lega.
        </p>
        <p style={{ marginTop: '10px', color: '#764ba2' }}>
          <strong>📌 Linear Regression aur Logistic Regression dono Supervised Learning hain!</strong>
        </p>
      </div>

      <div className="example-box" style={{ marginTop: '20px' }}>
        <h4 style={{ color: '#667eea' }}>2. Unsupervised Learning (Khud Se Seekhna) 🔍</h4>
        <p style={{ marginTop: '10px' }}>
          Jab hum computer ko <strong>sirf questions</strong> dete hain, answers nahi. Computer ko khud patterns dhundhne padte hain.
        </p>
        <p style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', marginTop: '10px' }}>
          <strong>Example:</strong> Hum computer ko 1000 customers ka data dete hain. Computer khud groups banata hai:
          "Ye log zyada shopping karte hain", "Ye log sirf sale mein khareedte hain", etc.
        </p>
      </div>

      <div className="example-box" style={{ marginTop: '20px' }}>
        <h4 style={{ color: '#667eea' }}>3. Reinforcement Learning (Trial & Error Se Seekhna) 🎮</h4>
        <p style={{ marginTop: '10px' }}>
          Computer try karta hai, galti karta hai, reward milta hai ya punishment - aise seekhta hai.
        </p>
        <p style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', marginTop: '10px' }}>
          <strong>Example:</strong> Computer ko chess khelna sikha rahe ho. Har baar jab wo jeet jaata hai → reward.
          Jab haar jaata hai → punishment. Thousands games ke baad wo expert ban jaata hai!
        </p>
      </div>

      <h3>Machine Learning Kaise Kaam Karta Hai? (Step by Step) 🔄</h3>

      <div className="visual-example">
        <ul className="step-by-step">
          <li>
            <strong>Data Collection (Data Ikattha Karna):</strong><br/>
            Pehle hume data chahiye. Jitna zyada data, utna better learning.
            <p style={{ marginTop: '5px', color: '#666' }}>Example: Ghar ki prices, photos, customer records, etc.</p>
          </li>
          <li>
            <strong>Data Preparation (Data Ko Tayar Karna):</strong><br/>
            Data ko clean karna, organize karna.
            <p style={{ marginTop: '5px', color: '#666' }}>Example: Duplicates hatana, missing values bharna</p>
          </li>
          <li>
            <strong>Model Selection (Kaun Sa Algorithm Use Karenge):</strong><br/>
            Problem ke hisaab se algorithm choose karna.
            <p style={{ marginTop: '5px', color: '#666' }}>Example: Numbers predict karna hai? → Linear Regression!</p>
          </li>
          <li>
            <strong>Training (Sikhana):</strong><br/>
            Model ko data dikhana aur ussey seekhne dena.
            <p style={{ marginTop: '5px', color: '#666' }}>Ye sabse important step hai - computer isme patterns seekhta hai</p>
          </li>
          <li>
            <strong>Testing (Check Karna):</strong><br/>
            Model ko naye data par test karna - dekho kitna sahi predict kar raha hai.
            <p style={{ marginTop: '5px', color: '#666' }}>Agar accuracy kam hai, to wapas training improve karni padegi</p>
          </li>
          <li>
            <strong>Deployment (Use Karna):</strong><br/>
            Model tayar hai! Ab real world mein use kar sakte ho.
            <p style={{ marginTop: '5px', color: '#666' }}>Example: App ya website mein integrate karna</p>
          </li>
        </ul>
      </div>

      <h3>Machine Learning Kahan Use Hota Hai? 🌟</h3>

      <table className="comparison-table">
        <thead>
          <tr>
            <th>Field (Jagah)</th>
            <th>Use Case (Kaise Use Hota Hai)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>📧 Email</strong></td>
            <td>Spam emails ko automatically filter karna</td>
          </tr>
          <tr>
            <td><strong>🎬 Netflix/YouTube</strong></td>
            <td>Aapko pasand ki movies/videos recommend karna</td>
          </tr>
          <tr>
            <td><strong>🏥 Healthcare</strong></td>
            <td>X-ray dekhkar disease detect karna</td>
          </tr>
          <tr>
            <td><strong>🚗 Self-Driving Cars</strong></td>
            <td>Road dekhar khud drive karna</td>
          </tr>
          <tr>
            <td><strong>🗣️ Alexa/Siri</strong></td>
            <td>Voice sunkar samajhna aur jawab dena</td>
          </tr>
          <tr>
            <td><strong>🛒 E-commerce</strong></td>
            <td>Product recommendations, price prediction</td>
          </tr>
          <tr>
            <td><strong>💰 Banking</strong></td>
            <td>Fraud detection, loan approval</td>
          </tr>
          <tr>
            <td><strong>📱 Social Media</strong></td>
            <td>Face recognition, content moderation</td>
          </tr>
        </tbody>
      </table>

      <div className="key-point" style={{ marginTop: '30px' }}>
        <strong>🎓 Is Module Mein Humne Kya Seekha:</strong>
        <ul style={{ marginTop: '15px', marginLeft: '20px', lineHeight: '2' }}>
          <li>Machine Learning kya hai - computer ka data se seekhna</li>
          <li>Normal programming se ye kaise different hai</li>
          <li>Teen main types: Supervised, Unsupervised, Reinforcement</li>
          <li>Machine learning kaise kaam karta hai - 6 steps</li>
          <li>Real life mein kahan use hota hai</li>
        </ul>
      </div>

      <div style={{ background: '#e8f5e9', borderRadius: '10px', padding: '20px', marginTop: '30px' }}>
        <h4 style={{ color: '#2e7d32' }}>✅ Next Module Mein Kya Seekhenge?</h4>
        <p style={{ marginTop: '10px', color: '#333' }}>
          Ab hum Linear Regression ke baare mein seekhenge - ye sabse simple aur important machine learning algorithm hai.
          Hum samjhenge ki kaise ek seedhi line se future predictions kar sakte hain!
        </p>
      </div>
    </div>
  )
}
