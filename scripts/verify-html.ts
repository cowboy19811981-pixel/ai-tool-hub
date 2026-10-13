async function testHtml() {
  const res = await fetch("http://localhost:3000");
  const html = await res.text();
  console.log("HTML length:", html.length);
  
  const checks = [
    { label: "Fable 5.1", pass: html.includes("Fable 5.1") },
    { label: "Sonnet 3.7", pass: html.includes("Sonnet 3.7") },
    { label: "3.1 Pro", pass: html.includes("3.1 Pro") },
    { label: "3.8 Flash", pass: html.includes("3.8 Flash") },
    { label: "無料枠 badge", pass: html.includes("無料枠") },
    { label: "有料枠 badge", pass: html.includes("有料枠") },
    { label: "選べるモデル・プラン対応", pass: html.includes("選べるモデル・プラン対応") },
  ];

  checks.forEach((c) => {
    console.log(`[${c.pass ? "PASS" : "FAIL"}] ${c.label}`);
  });
}

testHtml().catch(console.error);
