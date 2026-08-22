<!DOCTYPE html>
<html lang="si">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>සමූපාකාර සාමාජික කළමනාකරණය</title>
  <style>
    body {
      font-family: 'Iskoola Pota', 'Noto Sans Sinhala', Arial, sans-serif;
      margin: 0;
      padding: 20px;
      background-color: #f8fafc;
      color: #333;
    }
    .container {
      max-width: 1000px;
      margin: auto;
      background: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 2px solid #cbd5e1;
      padding-bottom: 15px;
      margin-bottom: 20px;
    }
    .header-title {
      text-align: center;
      flex-grow: 1;
    }
    .header-title h1 {
      color: #1a365d;
      margin: 0;
      font-size: 22px;
    }
    .header-title h3 {
      color: #4a5568;
      margin: 5px 0 0 0;
      font-weight: normal;
      font-size: 15px;
    }
    .logo-img {
      object-fit: contain;
    }
    form {
      background: #f1f5f9;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 30px;
    }
    .form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }
    .form-group {
      display: flex;
      flex-direction: column;
    }
    .form-group label {
      font-weight: bold;
      margin-bottom: 5px;
      font-size: 14px;
    }
    .form-group input, .form-group select {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 14px;
    }
    .btn {
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
      font-size: 14px;
    }
    .btn-submit { background: #2563eb; color: #fff; margin-top: 15px; }
    .btn-pdf { background: #16a34a; color: #fff; }
    .btn-cert { background: #d97706; color: #fff; padding: 5px 10px; font-size: 12px; }
    
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 15px;
    }
    th, td {
      border: 1px solid #cbd5e1;
      padding: 10px;
      text-align: left;
    }
    th { background: #f1f5f9; }

    /* PRINT LAYOUT (PDF) */
    @media screen {
      .print-only { display: none !important; }
    }
    @media print {
      .no-print { display: none !important; }
      .print-only { display: block !important; width: 100%; }
      body { background: #fff; padding: 0; }
      @page { size: A4; margin: 10mm; }
    }
  </style>
</head>
<body>

  <div class="container no-print">
    <!-- HEADER LOGOS -->
    <div class="header">
      <div style="width: 85px; height: 85px;">
        <svg viewBox="0 0 500 500" width="100%" height="100%">
          <circle cx="250" cy="250" r="240" fill="#d97706"/>
          <path d="M250 10 A240 240 0 0 1 490 250 L250 250 Z" fill="#16a34a"/>
          <path d="M490 250 A240 240 0 0 1 250 490 L250 250 Z" fill="#2563eb"/>
          <path d="M250 490 A240 240 0 0 1 10 250 L250 250 Z" fill="#c026d3"/>
          <circle cx="250" cy="250" r="200" fill="#ffffff"/>
          <circle cx="250" cy="250" r="160" fill="none" stroke="#000000" stroke-width="6"/>
          <circle cx="250" cy="250" r="110" fill="#000000"/>
          <circle cx="250" cy="250" r="75" fill="#ffffff"/>
          <g fill="#000000">
            <circle cx="200" cy="205" r="14"/><circle cx="250" cy="195" r="14"/><circle cx="300" cy="205" r="14"/>
            <path d="M185 225 L215 225 L210 280 L190 280 Z"/><path d="M235 215 L265 215 L260 280 L240 280 Z"/><path d="M285 225 L315 225 L310 280 L290 280 Z"/><path d="M215 195 L285 175 L280 165 L210 185 Z"/>
          </g>
          <path d="M100 210 Q120 120 210 110" stroke="#ca8a04" stroke-width="10" fill="none"/>
          <path d="M400 210 Q380 120 290 110" stroke="#ca8a04" stroke-width="10" fill="none"/>
          <text x="250" y="410" text-anchor="middle" font-size="28" font-weight="bold" font-family="Arial" fill="#000">සමූපාකාරය CO-OP</text>
        </svg>
      </div>
      <div class="header-title">
        <h1>සීමාසහිත දෙවිනුවර විවිධ සේවා සමූපාකාර සමිතිය</h1>
        <h3>සාමාජික කළමනාකරණ පද්ධතිය (Member Management System)</h3>
      </div>
      <div style="width: 110px; height: 55px;">
        <svg viewBox="0 0 350 160" width="100%" height="100%">
          <g fill="#f97316">
            <path d="M 70 100 C 40 100 20 80 20 50 C 20 20 40 0 70 0 C 95 0 115 15 118 38 L 88 38 C 85 28 78 22 70 22 C 55 22 48 34 48 50 C 48 66 55 78 70 78 C 78 78 85 72 88 62 L 118 62 C 115 85 95 100 70 100 Z"/>
            <circle cx="160" cy="50" r="50"/><circle cx="160" cy="50" r="23" fill="#ffffff"/>
            <circle cx="250" cy="50" r="50"/><circle cx="250" cy="50" r="23" fill="#ffffff"/>
            <path d="M 300 0 L 330 0 L 330 110 C 330 135 310 150 285 150 L 285 125 C 298 125 300 118 300 108 L 300 88 C 292 96 280 100 268 100 C 240 100 220 80 220 50 C 220 20 240 0 268 0 C 280 0 292 4 300 12 Z M 275 22 C 260 22 250 34 250 50 C 250 66 260 78 275 78 C 290 78 300 66 300 50 C 300 34 290 22 275 22 Z"/>
          </g>
        </svg>
      </div>
    </div>

    <!-- ADD FORM -->
    <form id="memberForm">
      <h3 style="margin-top:0; color:#2563eb;">නව සාමාජිකයෙකු ඇතුළත් කිරීම</h3>
      <div class="form-grid">
        <div class="form-group"><label>1. සාමාජික අංකය:</label><input type="text" id="memberNo" required></div>
        <div class="form-group"><label>2. සාමාජික වූ දිනය:</label><input type="date" id="joinDate" required></div>
        <div class="form-group"><label>3. සම්පූර්ණ නම:</label><input type="text" id="fullName" required></div>
        <div class="form-group"><label>4. ලිපිනය:</label><input type="text" id="address" required></div>
        <div class="form-group"><label>5. හැඳුනුම්පත් අංකය:</label><input type="text" id="nic" required></div>
        <div class="form-group"><label>6. සාමාජික මුදල (LKR):</label><input type="number" id="fee" required></div>
        <div class="form-group"><label>7. රැකියාව:</label><input type="text" id="occupation" required></div>
        <div class="form-group">
          <label>8. ප්‍රාදේශිකය Select:</label>
          <select id="region">
            <option value="ගන්දර">1. ගන්දර</option>
            <option value="කන්දගොඩැල්ල">2. කන්දගොඩැල්ල</option>
            <option value="කපුගම">3. කපුගම</option>
            <option value="අපරැක්ක">4. අපරැක්ක</option>
            <option value="නා ඔටුන්න">5. නා ඔටුන්න</option>
          </select>
        </div>
      </div>
      <button type="submit" class="btn btn-submit">+ සාමාජිකයා එකතු කරන්න</button>
    </form>

    <!-- LIST & FILTER -->
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 10px;">
      <h2>සාමාජික ලැයිස්තුව</h2>
      <div>
        <label><b>Filter:</b> </label>
        <select id="filterRegion" onchange="renderTable()">
          <option value="ALL">සියලුම ප්‍රාදේශික</option>
          <option value="ගන්දර">ගන්දර</option>
          <option value="කන්දගොඩැල්ල">කන්දගොඩැල්ල</option>
          <option value="කපුගම">කපුගම</option>
          <option value="අපරැක්ක">අපරැක්ක</option>
          <option value="නා ඔටුන්න">නා ඔටුන්න</option>
        </select>
        <button onclick="printSummary()" class="btn btn-pdf">📄 නාම ලේඛනය PDF ගන්න</button>
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th>සා.අංකය</th>
          <th>නම</th>
          <th>ජා.හැ.අ</th>
          <th>ප්‍රාදේශිකය</th>
          <th>මුදල</th>
          <th>ක්‍රියාකාරකම්</th>
        </tr>
      </thead>
      <tbody id="memberTableBody"></tbody>
    </table>
  </div>

  <!-- PRINT PRINT-ONLY PDF AREA -->
  <div id="printArea" class="print-only"></div>

  <script>
    let members = [];

    document.getElementById('memberForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const newMember = {
        memberNo: document.getElementById('memberNo').value,
        joinDate: document.getElementById('joinDate').value,
        fullName: document.getElementById('fullName').value,
        address: document.getElementById('address').value,
        nic: document.getElementById('nic').value,
        fee: document.getElementById('fee').value,
        occupation: document.getElementById('occupation').value,
        region: document.getElementById('region').value
      };
      members.push(newMember);
      this.reset();
      renderTable();
    });

    function renderTable() {
      const filter = document.getElementById('filterRegion').value;
      const tbody = document.getElementById('memberTableBody');
      tbody.innerHTML = '';

      const filtered = filter === 'ALL' ? members : members.filter(m => m.region === filter);

      if(filtered.length === 0) {
        tbody.innerHTML = '<tr><td colSpan="6" style="text-align:center;">සාමාජිකයින් නොමැත.</td></tr>';
        return;
      }

      filtered.forEach((m, idx) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${m.memberNo}</td>
          <td>${m.fullName}</td>
          <td>${m.nic}</td>
          <td><b>${m.region}</b></td>
          <td>Rs. ${m.fee}</td>
          <td><button onclick="printCertificate(${idx})" class="btn btn-cert">📜 කොටස් සහතිකය (PDF)</button></td>
        `;
        tbody.appendChild(tr);
      });
    }

    function printSummary() {
      const filter = document.getElementById('filterRegion').value;
      const filtered = filter === 'ALL' ? members : members.filter(m => m.region === filter);
      
      let rows = filtered.map((m, i) => `
        <tr>
          <td>${i + 1}</td>
          <td>${m.memberNo}</td>
          <td style="text-align:left">${m.fullName}</td>
          <td style="text-align:left">${m.address}</td>
          <td>${m.nic}</td>
          <td>${m.region}</td>
          <td>${m.fee}</td>
        </tr>
      `).join('');

      document.getElementById('printArea').innerHTML = `
        <div style="text-align:center; margin-bottom:20px;">
          <h2 style="margin:0;">සීමාසහිත දෙවිනුවර විවිධ සේවා සමූපාකාර සමිතිය</h2>
          <h3>${filter === 'ALL' ? 'මුළු සාමාජික නාම ලේඛනය' : filter + ' ප්‍රාදේශික සාමාජික නාම ලේඛනය'}</h3>
        </div>
        <table border="1" style="width:100%; border-collapse:collapse; text-align:center; font-size:12px;">
          <thead>
            <tr><th>අ.අ</th><th>සා.අ</th><th>නම</th><th>ලිපිනය</th><th>ජා.හැ.අ</th><th>ප්‍රාදේශිකය</th><th>මුදල</th></tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      `;
      window.print();
    }

    function printCertificate(index) {
      const m = members[index];
      document.getElementById('printArea').innerHTML = `
        <div style="border:2px solid #000; padding:15mm; min-height:250mm;">
          <h2 style="text-align:center;">සීමා සහිත දෙවිනුවර විවිධ සේවා සමූපාකාර සමිතිය</h2>
          <h1 style="text-align:center; margin:30px 0;">සාමාජික කොටස් සහතිකය</h1>
          <div style="font-size:16px; line-height:2.5; width:80%; margin:auto;">
            <div><b>සාමාජිකයාගේ නම:</b> ${m.fullName}</div>
            <div><b>ලිපිනය:</b> ${m.address}</div>
            <div><b>ජා.හැ.අ.:</b> ${m.nic}</div>
            <div><b>සාමාජික අංකය:</b> ${m.memberNo}</div>
            <div><b>දිනය:</b> ${m.joinDate}</div>
            <div><b>ප්‍රාදේශිකය:</b> ${m.region}</div>
            <div><b>කොටස් මුදල:</b> Rs. ${m.fee}</div>
          </div>
        </div>
      `;
      window.print();
    }

    renderTable();
  </script>
</body>
</html>
