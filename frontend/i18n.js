function toggleLang() {
  const current = document.documentElement.lang;
  const th = {
    title: "จองมอเตอร์ไซค์",
    name: "ชื่อ",
    phone: "เบอร์โทร",
    moto: "เลือกรถ",
    pick: "วันรับรถ",
    return: "วันคืนรถ"
  };
  const en = {
    title: "Motorbike Booking",
    name: "Name",
    phone: "Phone Number",
    moto: "Select Motorbike",
    pick: "Pickup Date",
    return: "Return Date"
  };
  const lang = current === "th" ? en : th;
  document.documentElement.lang = current === "th" ? "en" : "th";
  document.getElementById("title").textContent = lang.title;
  document.getElementById("label-name").textContent = lang.name;
  document.getElementById("label-phone").textContent = lang.phone;
  document.getElementById("label-moto").textContent = lang.moto;
  document.getElementById("label-pick").textContent = lang.pick;
  document.getElementById("label-return").textContent = lang.return;
}
