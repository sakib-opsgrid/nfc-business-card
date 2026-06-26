function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

document.getElementById('saveBtn').addEventListener('click', function () {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Sakib;Najmaz;;;',
    'FN:Najmaz Sakib',
    'TITLE:Senior Engineer, Service Assurance',
    'TEL;TYPE=CELL:+8801833020438',
    'EMAIL;TYPE=INTERNET:najmaz.sakib@gmail.com',
    'URL:https://sakib-opsgrid.github.io/portfolio/',
    'X-SOCIALPROFILE;TYPE=facebook:http://facebook.com/nickson.music',
    'X-SOCIALPROFILE;TYPE=linkedin:https://linkedin.com/in/najmaz-sakib',
    'END:VCARD'
  ].join('\r\n');

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Najmaz-Sakib.vcf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast('Contact saved ✓');
});
