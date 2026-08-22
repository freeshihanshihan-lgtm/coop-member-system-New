import { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

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

  // 1. Full Summary PDF Generator (සම්පූර්ණ සාමාජික නාම ලේඛනය)
  const generateSummaryPDF = () => {
    const doc = new jsPDF();

    // Header Title
    doc.setFontSize(14);
    doc.text("සීමාසහිත දෙවිනුවර විවිධ සේවා සමූපාකාර සමිතිය", 105, 15, { align: "center" });
    doc.setFontSize(12);
    doc.text("සාමාජික නාම ලේඛනය", 105, 23, { align: "center" });
    doc.setFontSize(10);
    doc.text("අංක 08 නාඹිඩුඅන්න ප්‍රාදේශිකය", 105, 29, { align: "center" });

    // Table Columns & Rows
    const tableColumn = ["අ.අ", "සා.අ", "නම", "ලිපිනය", "ජා.හැ.අ", "රැකියාව/මුදල"];
    const tableRows = members.map((m, index) => [
      index + 1,
      m.memberNo,
      m.fullName,
      m.address,
      m.nic,
      `${m.occupation} / Rs.${m.fee}`
    ]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 35,
      theme: 'grid',
      styles: { fontSize: 9, cellPadding: 2, halign: 'center' },
      headStyles: { fillColor: [230, 230, 230], textColor: [0, 0, 0], fontStyle: 'bold' }
    });

    const finalY = doc.lastAutoTable.finalY + 15;

    // Footer Declaration Text
    doc.setFontSize(8);
    const declarationText = "ඉහත අනු අංක ......... සිට ......... දක්වා වූ සාමාජිකයින් සී/ස දෙවිනුවර විවිධ සේවා සමූපාකාර සමිතියේ අංක ........ දරණ ................................. Pradeshiya වර්ෂ ........ මස ....... දින ........ට පෙර සාමාජිකත්වය ලබාගෙන ඇති වර්ෂ ....... මස ...... දින ....... ඡන්දය සඳහා සුදුසුකම් ඇති සාමාජිකයින්ගේ නාම ලේඛනය බව මෙයින් සහතික කරමු.";
    doc.text(doc.splitTextToSize(declarationText, 180), 15, finalY);

    // Signatures
    const sigY = finalY + 25;
    doc.text("............................", 30, sigY);
    doc.text("ලේකම්", 35, sigY + 5);

    doc.text("............................", 90, sigY);
    doc.text("ගරු අධ්‍යක්ෂක", 95, sigY + 5);

    doc.text("............................", 150, sigY);
    doc.text("ගරු සභාපති", 155, sigY + 5);

    doc.save("Member_List_Summary.pdf");
  };

  // 2. Individual Share Certificate PDF Generator (තනි පුද්ගල කොටස් සහතිකය)
  const generateCertificatePDF = (member) => {
    const doc = new jsPDF();

    // Header
    doc.setFontSize(14);
    doc.setTextColor(80, 20, 100);
    doc.text("සීමාසහිත දෙවිනුවර විවිධ සේවා සමූපාකාර සමිතිය", 105, 20, { align: "center" });
    
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text("Multi-Purpose Co-operative Societies Ltd - Devinuwara", 105, 27, { align: "center" });
    doc.text("No: 111, Tangalle Road, Devinuwara | Tel: 041-4935340", 105, 33, { align: "center" });
    
    doc.line(10, 38, 200, 38);

    // Certificate Title
    doc.setFontSize(16);
    doc.text("සාමාජික කොටස් සහතිකය", 105, 52, { align: "center" });

    // Details List
    doc.setFontSize(11);
    let startY = 70;
    const lineSpacing = 10;

    const details = [
      { label: "සාමාජිකයාගේ නම (Name)", value: member.fullName },
      { label: "ලිපිනය (Address)", value: member.address },
      { label: "ජා.හැ.අ. (NIC No)", value: member.nic },
      { label: "සාමාජික අංකය (Member No)", value: member.memberNo },
      { label: "සාමාජිකත්වය ලබාගත් දිනය (Joined Date)", value: member.joinDate },
      { label: "රැකියාව (Occupation)", value: member.occupation },
      { label: "ලබාගත් කොටස් ප්‍රමාණය/මුදල (Fee/Amount)", value: `Rs. ${member.fee}` }
    ];

    details.forEach(item => {
      doc.text(`${item.label}`, 30, startY);
      doc.text(":", 95, startY);
      doc.text(`${item.value}`, 100, startY);
      startY += lineSpacing;
    });

    // Bottom Signatures
    const sigY = 170;
    doc.text("...................................", 35, sigY);
    doc.text("සාමාන්‍යාධිකාරී", 45, sigY + 6);

    // Circle Seal Representation
    doc.setDrawColor(180, 50, 50);
    doc.circle(105, sigY - 5, 15);
    doc.setFontSize(8);
    doc.text("සමිතියේ", 105, sigY - 7, { align: "center" });
    doc.text("මුද්‍රාව", 105, sigY - 2, { align: "center" });

    doc.setFontSize(11);
    doc.text("...................................", 140, sigY);
    doc.text("ගරු සභාපති", 150, sigY + 6);

    doc.save(`Certificate_${member.memberNo}.pdf`);
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif', maxWidth: '1000px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center', color: '#1a365d' }}>
        සාමාජික කළමනාකරණ පද්ධතිය <br/>
        <span style={{ fontSize: '18px', color: '#4a5568' }}>(Member Management System)</span>
      </h1>

      {/* Input Form */}
      <form onSubmit={handleSubmit} style={{ background: '#f7fafc', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '30px' }}>
        <h3 style={{ marginTop: 0 }}>නව සාමාජිකයෙකු ඇතුළත් කිරීම / Add New Member</h3>
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
        <button type="submit" style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#2b6cb0', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}>
          සාමාජිකයා එකතු කරන්න / Add Member
        </button>
      </form>

      {/* Actions and Table */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <h2>සාමාජික ලැයිස්තුව / Member List ({members.length})</h2>
        {members.length > 0 && (
          <button onClick={generateSummaryPDF} style={{ padding: '10px 15px', backgroundColor: '#2f855a', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            📄 මුළු නාම ලේඛනයම PDF ලෙස Download කරන්න
          </button>
        )}
      </div>

      <table border="1" cellPadding="8" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', borderColor: '#cbd5e0' }}>
        <thead>
          <tr style={{ background: '#edf2f7' }}>
            <th>සා.අංකය</th>
            <th>නම</th>
            <th>ජා.හැ.අ</th>
            <th>ලිපිනය</th>
            <th>මුදල</th>
            <th>ක්‍රියාකාරකම් (Action)</th>
          </tr>
        </thead>
        <tbody>
          {members.length === 0 ? (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center' }}>තවමත් සාමාජිකයින් ඇතුළත් කර නොමැත.</td>
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
                  <button onClick={() => generateCertificatePDF(m)} style={{ padding: '5px 10px', backgroundColor: '#d69e2e', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
                    📜 සහතිකය (PDF)
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
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
