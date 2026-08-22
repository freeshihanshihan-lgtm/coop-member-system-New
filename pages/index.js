'use client';

import { useState, useRef } from 'react';

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
      alert('කරුණාකර අවශ්‍ය තොරතුරු ඇතුළත් කරන්න / Please fill required fields');
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
      
      {/* SCREEN ONLY VIEW */}
      <div className="no-print">
        
        {/* HEADER WITH REAL UPLOADED LOGOS */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #cbd5e1', paddingBottom: '15px', marginBottom: '20px' }}>
          <div style={{ width: '85px', height: '85px' }}>
            <img src="/logo-round.png" alt="Coop Round Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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
            <img src="/logo-coop.png" alt="Coop Text Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', border: '1px solid #cbd5e1', marginBottom: '30px' }}>
          <h3 style={{ marginTop: 0, color: '#2563eb' }}>නව සාමාජිකයෙකු ඇතුළත් කිරීම / Add New Member</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            
            <div>
              <label>1. සාමාජික අංකය / Member No:</label>
              <input type="text" name="memberNo" value={formData.memberNo} onChange={handleChange} required style={inputStyle} />
            </div>

            <div>
              <label>2. සාමාජික වූ දිනය / Date Joined:</label>
              <input type="date" name="joinDate" value={formData.joinDate} onChange={handleChange} required style={inputStyle} />
            </div>

            <div>
              <label>3. සම්පූර්ණ නම / Full Name:</label>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required style={inputStyle} />
            </div>

            <div>
              <label>4. ලිපිනය / Address:</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} required style={inputStyle} />
            </div>

            <div>
              <label>5. හැඳුනුම්පත් අංකය / NIC No:</label>
              <input type="text" name="nic" value={formData.nic} onChange={handleChange} required style={inputStyle} />
            </div>

            <div>
              <label>6. සාමාජික මුදල / Fee Amount (LKR):</label>
              <input type="number" name="fee" value={formData.fee} onChange={handleChange} required style={inputStyle} />
            </div>

            <div>
              <label>7. රැකියාව / Occupation:</label>
              <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} required style={inputStyle} />
            </div>

            <div>
              <label style={{ fontWeight: 'bold', color: '#1e3a8a' }}>8. ප්‍රාදේශිකය / Region Select:</label>
              <select name="region" value={formData.region} onChange={handleChange} style={{ ...inputStyle, border: '2px solid #2563eb', fontWeight: 'bold' }}>
                <option value="ගන්දර">1. ගන්දර (Gandara)</option>
                <option value="කන්දගොඩැල්ල">2. කන්දගොඩැල්ල (Kandagodella)</option>
                <option value="කපුගම">3. කපුගම (Kapugama)</option>
                <option value="අපරැක්ක">4. අපරැක්ක (Aparekka)</option>
                <option value="නා ඔටුන්න">5. නා ඔටුන්න (Na Otunna)</option>
              </select>
            </div>

          </div>
          <button type="submit" style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}>
            + සාමාජිකයා එකතු කරන්න / Add Member
          </button>
        </form>

        {/* MEMBER LIST & FILTER */}
        <div style={{ background: '#fff', padding: '15px', borderRadius: '8px', border: '1px solid #cbd5e1', marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <h2>සාමාජික ලැයිස්තුව ({filteredMembers.length})</h2>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <label style={{ fontWeight: 'bold' }}>ප්‍රාදේශිකය අනුව වෙන් කරන්න:</label>
              <select value={filterRegion} onChange={(e) => setFilterRegion(e.target.value)} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #2563eb' }}>
                <option value="ALL">සියලුම ප්‍රාදේශික (All Regions)</option>
                <option value="ගන්දර">ගන්දර (Gandara)</option>
                <option value="කන්දගොඩැල්ල">කන්දගොඩැල්ල (Kandagodella)</option>
                <option value="කපුගම">කපුගම (Kapugama)</option>
                <option value="අපරැක්ක">අපරැක්ක (Aparekka)</option>
                <option value="නා ඔටුන්න">නා ඔටුන්න (Na Otunna)</option>
              </select>

              {filteredMembers.length > 0 && (
                <button onClick={() => handlePrint('summary')} style={{ padding: '8px 16px', backgroundColor: '#16a34a', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                  📄 {filterRegion === 'ALL' ? 'සියලුම' : filterRegion} නාම ලේඛනය PDF ලෙස ගන්න
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

      {/* PRINT AREA (A4 OUTPUT) */}
      <div className="print-only" ref={printRef}>
        
        {/* 1. SUMMARY LIST PDF */}
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

        {/* 2. INDIVIDUAL SHARE CERTIFICATE PDF */}
        {activePrint && activePrint !== 'summary' && (
          <div style={{ border: '2px solid #000', padding: '10mm', minHeight: '270mm', position: 'relative', color: '#000', boxSizing: 'border-box' }}>
            
            {/* Header Header Info with Exact Logos */}
            <div style={{ borderBottom: '3px solid #000', paddingBottom: '10px', marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                
                {/* Left Co-op Round Logo */}
                <div style={{ width: '85px', height: '85px' }}>
                  <img src="/logo-round.png" alt="Coop Round Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>

                {/* Center Title Text */}
                <div style={{ textAlign: 'center', flexGrow: 1 }}>
                  <h2 style={{ margin: 0, color: '#312e81', fontSize: '22px', fontWeight: 'bold' }}>සීමා සහිත දෙවිනුවර විවිධ සේවා සමූපාකාර සමිතිය</h2>
                  <div style={{ fontSize: '13px', fontWeight: 'bold', margin: '2px 0' }}>අංක:111, තංගල්ල පාර, දෙවිනුවර</div>
                  <div style={{ fontSize: '15px', fontWeight: 'bold', color: '#000' }}>Multi-Purpose Co-operative Societies Ltd-Devinuwara</div>
                  <div style={{ fontSize: '11px', fontWeight: 'bold' }}>No: 111, Tangalle Road, Devinuwara &nbsp;&nbsp; 041-4935340/ 041-2224449</div>
                  <div style={{ fontSize: '12px', color: '#0000ff', textDecoration: 'underline', fontWeight: 'bold' }}>mpcsdevinuwara@gmail.com</div>
                </div>

                {/* Right Orange COOP Logo */}
                <div style={{ width: '110px', height: '55px' }}>
                  <img src="/logo-coop.png" alt="Coop Text Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
              </div>

              {/* Reference Reg Nos */}
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginTop: '10px', fontWeight: 'bold' }}>
                <div>මගේ අංකය: M/D/M/GM/ දෙවි/.........../...........</div>
                <div style={{ textAlign: 'right' }}>ලියාපදිංචි අංකය:<br/>මාර/දෙවි/05</div>
              </div>
            </div>

            {/* Main Certificate Title */}
            <div style={{ textAlign: 'center', margin: '35px 0' }}>
              <h1 style={{ fontSize: '32px', margin: 0, fontWeight: 'normal', fontFamily: 'serif' }}>සාමාජික කොටස් සහතිකය</h1>
            </div>

            {/* Exact Formatted Data Rows */}
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

            {/* Footer Signatures and Red Starburst Seal */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '60px', padding: '0 20px' }}>
              
              <div style={{ textAlign: 'center' }}>
                <div>...................................................</div>
                <div style={{ marginTop: '5px', fontSize: '14px' }}>සාමාන්‍යාධිකාරී</div>
              </div>

              {/* Exact Red Starburst Seal Graphic */}
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
