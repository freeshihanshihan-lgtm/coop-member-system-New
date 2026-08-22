'use client';

import { useState, useRef } from 'react';

// DIRECT BASE64 LOGOS (NO FILE PATH ISSUES)
const RoundCoopLogo = () => (
  <svg viewBox="0 0 500 500" width="100%" height="100%">
    <defs>
      <clipPath id="circleClip">
        <circle cx="250" cy="250" r="240" />
      </clipPath>
    </defs>
    {/* Rainbow Border Rings */}
    <g clipPath="url(#circleClip)">
      <path d="M 250,10 A 240,240 0 0,1 490,250 L 250,250 Z" fill="#d97706" />
      <path d="M 490,250 A 240,240 0 0,1 250,490 L 250,250 Z" fill="#16a34a" />
      <path d="M 250,490 A 240,240 0 0,1 10,250 L 250,250 Z" fill="#2563eb" />
      <path d="M 10,250 A 240,240 0 0,1 250,10 L 250,250 Z" fill="#c026d3" />
      {/* Inner White Circle */}
      <circle cx="250" cy="250" r="215" fill="#ffffff" />
      {/* Black Outer Ring */}
      <circle cx="250" cy="250" r="170" fill="none" stroke="#000000" strokeWidth="6" />
      {/* Center Gear */}
      <circle cx="250" cy="250" r="115" fill="#000000" />
      <circle cx="250" cy="250" r="80" fill="#ffffff" />
      {/* Inner Figures */}
      <g fill="#000000">
        <circle cx="195" cy="205" r="15" />
        <circle cx="250" cy="195" r="15" />
        <circle cx="305" cy="205" r="15" />
        <path d="M 180,225 L 210,225 L 205,285 L 185,285 Z" />
        <path d="M 235,215 L 265,215 L 260,285 L 240,285 Z" />
        <path d="M 290,225 L 320,225 L 315,285 L 295,285 Z" />
        <path d="M 210,195 L 290,175 L 285,160 L 205,180 Z" />
      </g>
      {/* Paddy ears */}
      <path d="M 100,210 Q 120,120 210,110" stroke="#ca8a04" strokeWidth="10" fill="none" />
      <path d="M 400,210 Q 380,120 290,110" stroke="#ca8a04" strokeWidth="10" fill="none" />
      {/* Text Arc */}
      <text x="250" y="420" textAnchor="middle" fontSize="28" fontWeight="bold" fontFamily="'Iskoola Pota', Arial" fill="#000">සමූපාකාරය CO-OP</text>
    </g>
  </svg>
);

const CoopTextLogo = () => (
  <svg viewBox="0 0 350 160" width="100%" height="100%">
    <g fill="#f97316">
      <path d="M 70 100 C 40 100 20 80 20 50 C 20 20 40 0 70 0 C 95 0 115 15 118 38 L 88 38 C 85 28 78 22 70 22 C 55 22 48 34 48 50 C 48 66 55 78 70 78 C 78 78 85 72 88 62 L 118 62 C 115 85 95 100 70 100 Z" />
      <circle cx="160" cy="50" r="50" />
      <circle cx="160" cy="50" r="23" fill="#ffffff" />
      <circle cx="250" cy="50" r="50" />
      <circle cx="250" cy="50" r="23" fill="#ffffff" />
      <path d="M 300 0 L 330 0 L 330 110 C 330 135 310 150 285 150 L 285 125 C 298 125 300 118 300 108 L 300 88 C 292 96 280 100 268 100 C 240 100 220 80 220 50 C 220 20 240 0 268 0 C 280 0 292 4 300 12 Z M 275 22 C 260 22 250 34 250 50 C 250 66 260 78 275 78 C 290 78 300 66 300 50 C 300 34 290 22 275 22 Z" />
    </g>
  </svg>
);

export default function Home() {
  const [members, setMembers] = useState([]);
  const [formData, setFormData] = useState({
    memberNo: '',
    joinDate: '',
    fullName: '',
    address: '',
    nic: '',
    fee: '',
    occupation: '',
    region: 'ගන්දර'
  });

  const [filterRegion, setFilterRegion] = useState('ALL');
  const [activePrint, setActivePrint] = useState(null);
  const printRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.memberNo || !formData.fullName) {
      alert('කරුණාකර අවශ්‍ය තොරතුරු ඇතුළත් කරන්න');
      return;
    }
    setMembers([...members, { ...formData, id: Date.now() }]);
    setFormData({
      memberNo: '',
      joinDate: '',
      fullName: '',
      address: '',
      nic: '',
      fee: '',
      occupation: '',
      region: 'ගන්දර'
    });
  };

  const handlePrint = (type) => {
    setActivePrint(type);
    setTimeout(() => {
      window.print();
    }, 300);
  };

  const filteredMembers = filterRegion === 'ALL' 
    ? members 
    : members.filter(m => m.region === filterRegion);

  return (
    <div style={{ fontFamily: "'Iskoola Pota', 'Noto Sans Sinhala', Arial, sans-serif", padding: '20px', maxWidth: '1000px', margin: 'auto' }}>
      
      {/* SCREEN VIEW */}
      <div className="no-print">
        
        {/* HEADER LOGOS */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #cbd5e1', paddingBottom: '15px', marginBottom: '20px' }}>
          <div style={{ width: '85px', height: '85px' }}>
            <RoundCoopLogo />
          </div>
          <div style={{ textAlign: 'center', flexGrow: 1 }}>
            <h1 style={{ color: '#1a365d', margin: '0', fontSize: '24px' }}>
              සීමාසහිත දෙවිනුවර විවිධ සේවා සමූපාකාර සමිතිය
            </h1>
            <h3 style={{ color: '#4a5568', margin: '5px 0 0 0', fontWeight: 'normal', fontSize: '16px' }}>
              සාමාජික කළමනාකරණ පද්ධතිය (Member Management System)
            </h3>
          </div>
          <div style={{ width: '110px', height: '55px' }}>
            <CoopTextLogo />
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', border: '1px solid #cbd5e1', marginBottom: '30px' }}>
          <h3 style={{ marginTop: 0, color: '#2563eb' }}>නව සාමාජිකයෙකු ඇතුළත් කිරීම / Add New Member</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            
            <div>
              <label>1. සාමාජික අංකය:</label>
              <input type="text" name="memberNo" value={formData.memberNo} onChange={handleChange} required style={inputStyle} />
            </div>

            <div>
              <label>2. සාමාජික වූ දිනය:</label>
              <input type="date" name="joinDate" value={formData.joinDate} onChange={handleChange} required style={inputStyle} />
            </div>

            <div>
              <label>3. සම්පූර්ණ නම:</label>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required style={inputStyle} />
            </div>

            <div>
              <label>4. ලිපිනය:</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} required style={inputStyle} />
            </div>

            <div>
              <label>5. හැඳුනුම්පත් අංකය:</label>
              <input type="text" name="nic" value={formData.nic} onChange={handleChange} required style={inputStyle} />
            </div>

            <div>
              <label>6. සාමාජික මුදල (LKR):</label>
              <input type="number" name="fee" value={formData.fee} onChange={handleChange} required style={inputStyle} />
            </div>

            <div>
              <label>7. රැකියාව:</label>
              <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} required style={inputStyle} />
            </div>

            <div>
              <label style={{ fontWeight: 'bold', color: '#1e3a8a' }}>8. ප්‍රාදේශිකය Select:</label>
              <select name="region" value={formData.region} onChange={handleChange} style={{ ...inputStyle, border: '2px solid #2563eb', fontWeight: 'bold' }}>
                <option value="ගන්දර">1. ගන්දර</option>
                <option value="කන්දගොඩැල්ල">2. කන්දගොඩැල්ල</option>
                <option value="කපුගම">3. කපුගම</option>
                <option value="අපරැක්ක">4. අපරැක්ක</option>
                <option value="නා ඔටුන්න">5. නා ඔටුන්න</option>
              </select>
            </div>

          </div>
          <button type="submit" style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}>
            + සාමාජිකයා එකතු කරන්න
          </button>
        </form>

        {/* MEMBER LIST & REGION FILTER */}
        <div style={{ background: '#fff', padding: '15px', borderRadius: '8px', border: '1px solid #cbd5e1', marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <h2>සාමාජික ලැයිස්තුව ({filteredMembers.length})</h2>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <label style={{ fontWeight: 'bold' }}>ප්‍රාදේශිකය අනුව Filter කරන්න:</label>
              <select value={filterRegion} onChange={(e) => setFilterRegion(e.target.value)} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #2563eb' }}>
                <option value="ALL">සියලුම ප්‍රාදේශික</option>
                <option value="ගන්දර">ගන්දර</option>
                <option value="කන්දගොඩැල්ල">කන්දගොඩැල්ල</option>
                <option value="කපුගම">කපුගම</option>
                <option value="අපරැක්ක">අපරැක්ක</option>
                <option value="නා ඔටුන්න">නා ඔටුන්න</option>
              </select>

              {filteredMembers.length > 0 && (
                <button onClick={() => handlePrint('summary')} style={{ padding: '8px 16px', backgroundColor: '#16a34a', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                  📄 {filterRegion === 'ALL' ? 'සියලුම' : filterRegion} නාම ලේඛනය PDF ගන්න
                </button>
              )}
            </div>
          </div>
        </div>

        <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', borderColor: '#cbd5e1' }}>
          <thead>
            <tr style={{ background: '#f1f5f9' }}>
              <th>සා.අංකය</th>
              <th>නම</th>
              <th>ජා.හැ.අ</th>
              <th>ප්‍රාදේශිකය</th>
              <th>මුදල</th>
              <th>ක්‍රියාකාරකම්</th>
            </tr>
          </thead>
          <tbody>
            {filteredMembers.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', color: '#64748b' }}>මෙම ප්‍රාදේශිකයේ සාමාජිකයින් නොමැත.</td>
              </tr>
            ) : (
              filteredMembers.map((m) => (
                <tr key={m.id}>
                  <td>{m.memberNo}</td>
                  <td>{m.fullName}</td>
                  <td>{m.nic}</td>
                  <td><b>{m.region}</b></td>
                  <td>Rs. {m.fee}</td>
                  <td>
                    <button onClick={() => handlePrint(m)} style={{ padding: '6px 12px', backgroundColor: '#d97706', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                      📜 තනි කොටස් සහතිකය (PDF)
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* PRINT AREA (PDF OUTPUT) */}
      <div className="print-only" ref={printRef}>
        
        {/* 1. REGION SUMMARY PDF */}
        {activePrint === 'summary' && (
          <div style={{ padding: '10mm', color: '#000' }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <h2 style={{ margin: '0', fontSize: '20px', textDecoration: 'underline' }}>සීමාසහිත දෙවිනුවර විවිධ සේවා සමූපාකාර සමිතිය</h2>
              <h3 style={{ margin: '5px 0', fontSize: '17px', textDecoration: 'underline' }}>
                {filterRegion === 'ALL' ? 'මුළු සාමාජික නාම ලේඛනය' : `${filterRegion} ප්‍රාදේශික සාමාජික නාම ලේඛනය`}
              </h3>
            </div>

            <table border="1" cellPadding="6" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', fontSize: '13px', borderColor: '#000' }}>
              <thead>
                <tr style={{ backgroundColor: '#f2f2f2' }}>
                  <th>අ.අ</th>
                  <th>සා.අ</th>
                  <th>නම</th>
                  <th>ලිපිනය</th>
                  <th>ජා.හැ.අ</th>
                  <th>ප්‍රාදේශිකය</th>
                  <th>මුදල (Rs.)</th>
                </tr>
              </thead>
              <tbody>
                {filteredMembers.map((m, idx) => (
                  <tr key={m.id}>
                    <td>{idx + 1}</td>
                    <td>{m.memberNo}</td>
                    <td style={{ textAlign: 'left' }}>{m.fullName}</td>
                    <td style={{ textAlign: 'left' }}>{m.address}</td>
                    <td>{m.nic}</td>
                    <td>{m.region}</td>
                    <td>{m.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p style={{ fontSize: '13px', marginTop: '30px', lineHeight: '1.8', textAlign: 'justify' }}>
              ඉහත අනු අංක .......... සිට .......... දක්වා වූ සාමාජිකයින් සී/ස දෙවිනුවර විවිධ සේවා සමූපාකාර සමිතියේ අංක .......... දරණ {filterRegion === 'ALL' ? 'ප්‍රාදේශිකයේ' : filterRegion + ' ප්‍රාදේශිකයේ'} වර්ෂ ........ මස ....... දින ........ට පෙර සාමාජිකත්වය ලබාගෙන ඇති වර්ෂ ....... මස ...... දින ....... ඡන්දය සඳහා සුදුසුකම් ඇති සාමාජිකයින්ගේ නාම ලේඛනය බව මෙයින් සහතික කරමු.
            </p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '60px', textAlign: 'center', fontSize: '13px' }}>
              <div>
                <div>...........................................</div>
                <div style={{ marginTop: '5px', fontWeight: 'bold' }}>ලේකම්</div>
              </div>
              <div>
                <div>...........................................</div>
                <div style={{ marginTop: '5px', fontWeight: 'bold' }}>ගරු අධ්‍යක්ෂක</div>
              </div>
              <div style={{ border: '2px solid #000', borderRadius: '50%', width: '70px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px' }}>
                සමිතියේ<br/>මුද්‍රාව
              </div>
              <div>
                <div>...........................................</div>
                <div style={{ marginTop: '5px', fontWeight: 'bold' }}>ගරු සභාපති</div>
              </div>
            </div>
          </div>
        )}

        {/* 2. SHARE CERTIFICATE PDF */}
        {activePrint && activePrint !== 'summary' && (
          <div style={{ border: '2px solid #000', padding: '10mm', minHeight: '270mm', position: 'relative', color: '#000', boxSizing: 'border-box' }}>
            
            {/* Header with Direct Embedded Vector Logos */}
            <div style={{ borderBottom: '3px solid #000', paddingBottom: '10px', marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                
                {/* Left Round Logo */}
                <div style={{ width: '85px', height: '85px' }}>
                  <RoundCoopLogo />
                </div>

                {/* Center Header Details */}
                <div style={{ textAlign: 'center', flexGrow: 1 }}>
                  <h2 style={{ margin: 0, color: '#312e81', fontSize: '22px', fontWeight: 'bold' }}>සීමා සහිත දෙවිනුවර විවිධ සේවා සමූපාකාර සමිතිය</h2>
                  <div style={{ fontSize: '13px', fontWeight: 'bold', margin: '2px 0' }}>අංක:111, තංගල්ල පාර, දෙවිනුවර</div>
                  <div style={{ fontSize: '15px', fontWeight: 'bold', color: '#000' }}>Multi-Purpose Co-operative Societies Ltd-Devinuwara</div>
                  <div style={{ fontSize: '11px', fontWeight: 'bold' }}>No: 111, Tangalle Road, Devinuwara &nbsp;&nbsp; 041-4935340/ 041-2224449</div>
                  <div style={{ fontSize: '12px', color: '#0000ff', textDecoration: 'underline', fontWeight: 'bold' }}>mpcsdevinuwara@gmail.com</div>
                </div>

                {/* Right Orange COOP Logo */}
                <div style={{ width: '100px', height: '45px' }}>
                  <CoopTextLogo />
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginTop: '10px', fontWeight: 'bold' }}>
                <div>මගේ අංකය: M/D/M/GM/ දෙවි/.........../...........</div>
                <div style={{ textAlign: 'right' }}>ලියාපදිංචි අංකය:<br/>මාර/දෙවි/05</div>
              </div>
            </div>

            {/* Title */}
            <div style={{ textAlign: 'center', margin: '35px 0' }}>
              <h1 style={{ fontSize: '32px', margin: 0, fontWeight: 'normal', fontFamily: 'serif' }}>සාමාජික කොටස් සහතිකය</h1>
            </div>

            {/* Form Fields */}
            <div style={{ width: '85%', margin: '0 auto', fontSize: '16px', lineHeight: '2.8' }}>
              <div style={{ display: 'flex' }}>
                <div style={{ width: '45%' }}>සාමාජිකයාගේ නම</div>
                <div style={{ width: '5%' }}>-</div>
                <div style={{ width: '50%', borderBottom: '1px dotted #000' }}>{activePrint.fullName}</div>
              </div>

              <div style={{ display: 'flex' }}>
                <div style={{ width: '45%' }}>ලිපිනය</div>
                <div style={{ width: '5%' }}>-</div>
                <div style={{ width: '50%', borderBottom: '1px dotted #000' }}>{activePrint.address}</div>
              </div>

              <div style={{ display: 'flex' }}>
                <div style={{ width: '45%' }}>ජා.හැ.අ.</div>
                <div style={{ width: '5%' }}>-</div>
                <div style={{ width: '50%', borderBottom: '1px dotted #000' }}>{activePrint.nic}</div>
              </div>

              <div style={{ display: 'flex' }}>
                <div style={{ width: '45%' }}>සාමාජික අංකය</div>
                <div style={{ width: '5%' }}>-</div>
                <div style={{ width: '50%', borderBottom: '1px dotted #000' }}>{activePrint.memberNo}</div>
              </div>

              <div style={{ display: 'flex' }}>
                <div style={{ width: '45%' }}>සාමාජිකත්වය ලබා ගත් දිනය</div>
                <div style={{ width: '5%' }}>-</div>
                <div style={{ width: '50%', borderBottom: '1px dotted #000' }}>{activePrint.joinDate}</div>
              </div>

              <div style={{ display: 'flex' }}>
                <div style={{ width: '45%' }}>ප්‍රාදේශිකය</div>
                <div style={{ width: '5%' }}>-</div>
                <div style={{ width: '50%', borderBottom: '1px dotted #000' }}>{activePrint.region}</div>
              </div>

              <div style={{ display: 'flex' }}>
                <div style={{ width: '45%' }}>ලබා ගත් කොටස් ප්‍රමාණය</div>
                <div style={{ width: '5%' }}>-</div>
                <div style={{ width: '50%', borderBottom: '1px dotted #000' }}>Rs. {activePrint.fee}</div>
              </div>
            </div>

            {/* Footer */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '60px', padding: '0 20px' }}>
              <div style={{ textAlign: 'center' }}>
                <div>...................................................</div>
                <div style={{ marginTop: '5px', fontSize: '14px' }}>සාමාන්‍යාධිකාරී</div>
              </div>

              <div style={{ position: 'relative', width: '110px', height: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg viewBox="0 0 100 100" width="100%" height="100%" style={{ position: 'absolute' }}>
                  <path d="M 50 0 L 58 15 L 75 3 L 77 22 L 96 18 L 90 36 L 100 50 L 90 64 L 96 82 L 77 78 L 75 97 L 58 85 L 50 100 L 42 85 L 25 97 L 23 78 L 4 82 L 10 64 L 0 50 L 10 36 L 4 18 L 23 22 L 25 3 L 42 15 Z" fill="#b91c1c" />
                </svg>
                <div style={{ position: 'relative', color: '#fff', fontSize: '11px', textAlign: 'center', fontWeight: 'bold', lineHeight: '1.3' }}>
                  සමිතියේ<br/>මුද්‍රාව
                </div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div>...................................................</div>
                <div style={{ marginTop: '5px', fontSize: '14px' }}>ගරු සභාපති</div>
              </div>
            </div>

          </div>
        )}

      </div>

      <style jsx global>{`
        @media screen {
          .print-only {
            display: none !important;
          }
        }
        @media print {
          body {
            background: #fff !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .no-print {
            display: none !important;
          }
          .print-only {
            display: block !important;
            width: 100% !important;
          }
          @page {
            size: A4;
            margin: 5mm;
          }
        }
      `}</style>

    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '8px',
  marginTop: '5px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  boxSizing: 'border-box'
};
