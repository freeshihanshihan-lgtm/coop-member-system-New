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
    occupation: ''
  });

  const [activePrint, setActivePrint] = useState(null); // null, 'summary', or member object
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
      occupation: ''
    });
  };

  // Trigger Print Window
  const handlePrint = (type) => {
    setActivePrint(type);
    setTimeout(() => {
      window.print();
    }, 300);
  };

  return (
    <div style={{ fontFamily: "'Iskoola Pota', 'Noto Sans Sinhala', Arial, sans-serif", padding: '20px', maxWidth: '1000px', margin: 'auto' }}>
      
      {/* SCREEN ONLY CONTENT (Web Application View) */}
      <div className="no-print">
        <h1 style={{ textAlign: 'center', color: '#1a365d', marginBottom: '5px' }}>
          සීමාසහිත දෙවිනුවර විවිධ සේවා සමූපාකාර සමිතිය
        </h1>
        <h3 style={{ textAlign: 'center', color: '#4a5568', marginTop: '0', fontWeight: 'normal' }}>
          සාමාජික කළමනාකරණ පද්ධතිය (Member Management System)
        </h3>

        {/* Form to Add Members */}
        <form onSubmit={handleSubmit} style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', border: '1px solid #cbd5e1', marginBottom: '30px' }}>
          <h3 style={{ marginTop: 0, color: '#2b6cb0' }}>නව සාමාජිකයෙකු ඇතුළත් කිරීම / Add New Member</h3>
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

          </div>
          <button type="submit" style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}>
            + සාමාජිකයා එකතු කරන්න / Add Member
          </button>
        </form>

        {/* Member Table Header & Action */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <h2>සාමාජික ලැයිස්තුව / Member List ({members.length})</h2>
          {members.length > 0 && (
            <button onClick={() => handlePrint('summary')} style={{ padding: '10px 18px', backgroundColor: '#16a34a', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '15px' }}>
              📄 මුළු නාම ලේඛනයම PDF ලෙස ගන්න
            </button>
          )}
        </div>

        {/* Table View */}
        <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', borderColor: '#cbd5e1' }}>
          <thead>
            <tr style={{ background: '#f1f5f9' }}>
              <th>සා.අංකය</th>
              <th>නම</th>
              <th>ජා.හැ.අ</th>
              <th>ලිපිනය</th>
              <th>මුදල</th>
              <th>ක්‍රියාකාරකම් (Actions)</th>
            </tr>
          </thead>
          <tbody>
            {members.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', color: '#64748b' }}>තවමත් සාමාජිකයින් ඇතුළත් කර නොමැත.</td>
              </tr>
            ) : (
              members.map((m) => (
                <tr key={m.id}>
                  <td>{m.memberNo}</td>
                  <td>{m.fullName}</td>
                  <td>{m.nic}</td>
                  <td>{m.address}</td>
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

      {/* PRINT-ONLY AREA (This part is formatted for A4 PDF Output) */}
      <div className="print-only" ref={printRef}>
        
        {/* 1. FULL SUMMARY LIST PDF FORMAT */}
        {activePrint === 'summary' && (
          <div style={{ padding: '10mm', color: '#000' }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <h2 style={{ margin: '0', fontSize: '20px', textDecoration: 'underline' }}>සීමාසහිත දෙවිනුවර විවිධ සේවා සමූපාකාර සමිතිය</h2>
              <h3 style={{ margin: '5px 0', fontSize: '17px', textDecoration: 'underline' }}>සාමාජික නාම ලේඛනය</h3>
              <p style={{ margin: '0', fontSize: '15px', fontWeight: 'bold', textDecoration: 'underline' }}>අංක 08 නාඹිඩුඅන්න ප්‍රාදේශිකය</p>
            </div>

            <table border="1" cellPadding="6" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', fontSize: '13px', borderColor: '#000' }}>
              <thead>
                <tr style={{ backgroundColor: '#f2f2f2' }}>
                  <th style={{ width: '8%' }}>අ.අ</th>
                  <th style={{ width: '12%' }}>සා.අ</th>
                  <th style={{ width: '30%' }}>නම</th>
                  <th style={{ width: '30%' }}>ලිපිනය</th>
                  <th style={{ width: '10%' }}>ජා.හැ.අ</th>
                  <th style={{ width: '10%' }}>කො.මු</th>
                </tr>
              </thead>
              <tbody>
                {members.map((m, idx) => (
                  <tr key={m.id}>
                    <td>{idx + 1}</td>
                    <td>{m.memberNo}</td>
                    <td style={{ textAlign: 'left' }}>{m.fullName}</td>
                    <td style={{ textAlign: 'left' }}>{m.address}</td>
                    <td>{m.nic}</td>
                    <td>{m.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p style={{ fontSize: '13px', marginTop: '30px', lineHeight: '1.8', textAlign: 'justify' }}>
              ඉහත අනු අංක .......... සිට .......... දක්වා වූ සාමාජිකයින් සී/ස දෙවිනුවර විවිධ සේවා සමූපාකාර සමිතියේ අංක .......... දරණ ................................. Pradeshiya වර්ෂ ........ මස ....... දින ........ට පෙර සාමාජිකත්වය ලබාගෙන ඇති වර්ෂ ....... මස ...... දින ....... ඡන්දය සඳහා සුදුසුකම් ඇති සාමාජිකයින්ගේ නාම ලේඛනය බව මෙයින් සහතික කරමු.
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
              <div style={{ border: '2px solid #000', borderRadius: '50%', width: '70px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', textAlign: 'center' }}>
                සමිතියේ<br/>මුද්‍රාව
              </div>
              <div>
                <div>...........................................</div>
                <div style={{ marginTop: '5px', fontWeight: 'bold' }}>ගරු සභාපති</div>
              </div>
            </div>
            
            <div style={{ textAlign: 'right', marginTop: '40px', fontSize: '11px' }}>1 | Page</div>
          </div>
        )}

        {/* 2. INDIVIDUAL SHARE CERTIFICATE PDF FORMAT */}
        {activePrint && activePrint !== 'summary' && (
          <div style={{ border: '3px double #000', padding: '15mm', minHeight: '260mm', position: 'relative', color: '#000' }}>
            
            {/* Header Header Info */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #000', paddingBottom: '10px' }}>
              {/* Left Logo */}
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', border: '2px solid #1e3a8a', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#1e3a8a', fontSize: '10px', textAlign: 'center', fontWeight: 'bold' }}>
                ⚙️ CO-OP <br/> ශ්‍රී ලංකා
              </div>

              {/* Title & Contact */}
              <div style={{ textAlign: 'center', flexGrow: 1, padding: '0 10px' }}>
                <h2 style={{ margin: 0, color: '#312e81', fontSize: '20px' }}>සීමා සහිත දෙවිනුවර විවිධ සේවා සමූපාකාර සමිතිය</h2>
                <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#111827', margin: '3px 0' }}>අංක:111, තංගල්ල පාර, දෙවිනුවර</div>
                <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#1e3a8a' }}>Multi-Purpose Co-operative Societies Ltd-Devinuwara</div>
                <div style={{ fontSize: '11px' }}>No: 111, Tangalle Road, Devinuwara &nbsp;|&nbsp; 041-4935340/ 041-2224449</div>
                <div style={{ fontSize: '11px', color: '#2563eb', textDecoration: 'underline' }}>mpcsdevinuwara@gmail.com</div>
              </div>

              {/* Right COOP Text Logo */}
              <div style={{ fontSize: '32px', fontWeight: '900', color: '#ea580c', fontStyle: 'italic', fontFamily: 'sans-serif' }}>
                coop
              </div>
            </div>

            {/* Reference Numbers */}
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginTop: '15px' }}>
              <div>මගේ අංකය: <b>M/D/M/GM/ දෙවි/.........../...........</b></div>
              <div>ලියාපදිංචි අංකය:<br/><b>මාර/දෙවි/05</b></div>
            </div>

            {/* Main Certificate Title */}
            <div style={{ textAlign: 'center', margin: '40px 0 30px 0' }}>
              <h1 style={{ fontSize: '28px', letterSpacing: '2px', margin: 0, textDecoration: 'underline' }}>සාමාජික කොටස් සහතිකය</h1>
            </div>

            {/* Certificate Details List */}
            <table style={{ width: '100%', fontSize: '16px', lineHeight: '2.5', margin: '0 auto', borderSpacing: '0 10px' }}>
              <tbody>
                <tr>
                  <td style={{ width: '40%', fontWeight: 'bold' }}>සාමාජිකයාගේ නම</td>
                  <td style={{ width: '5%' }}>-</td>
                  <td style={{ width: '55%', borderBottom: '1px dotted #000' }}>{activePrint.fullName}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>ලිපිනය</td>
                  <td>-</td>
                  <td style={{ borderBottom: '1px dotted #000' }}>{activePrint.address}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>ජා.හැ.අ.</td>
                  <td>-</td>
                  <td style={{ borderBottom: '1px dotted #000' }}>{activePrint.nic}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>සාමාජික අංකය</td>
                  <td>-</td>
                  <td style={{ borderBottom: '1px dotted #000' }}>{activePrint.memberNo}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>සාමාජිකත්වය ලබා ගත් දිනය</td>
                  <td>-</td>
                  <td style={{ borderBottom: '1px dotted #000' }}>{activePrint.joinDate}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>ප්‍රාදේශිකය / රැකියාව</td>
                  <td>-</td>
                  <td style={{ borderBottom: '1px dotted #000' }}>{activePrint.occupation}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold' }}>ලබා ගත් කොටස් ප්‍රමාණය / මුදල</td>
                  <td>-</td>
                  <td style={{ borderBottom: '1px dotted #000' }}>Rs. {activePrint.fee}</td>
                </tr>
              </tbody>
            </table>

            {/* Footer Signatures and Stamp */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '70px' }}>
              <div style={{ textAlign: 'center' }}>
                <div>...................................................</div>
                <div style={{ marginTop: '5px', fontWeight: 'bold', fontSize: '14px' }}>සාමාන්‍යාධිකාරී</div>
              </div>

              {/* Red Star Seal Graphic */}
              <div style={{ width: '110px', height: '110px', backgroundColor: '#991b1b', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '12px', textAlign: 'center', fontWeight: 'bold', lineHeight: '1.2' }}>
                සමිතියේ<br/>මුද්‍රාව
              </div>

              <div style={{ textAlign: 'center' }}>
                <div>...................................................</div>
                <div style={{ marginTop: '5px', fontWeight: 'bold', fontSize: '14px' }}>ගරු සභාපති</div>
              </div>
            </div>

          </div>
        )}

      </div>

      {/* Global CSS for Handling Print vs Screen Visibility */}
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
            margin: 10mm;
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
