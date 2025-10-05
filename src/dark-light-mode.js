


// export function switcMode() {
//    const switcher = document.getElementById("switch");
//   switcher.addEventListener("click", function () {
//     document.documentElement.classList.toggle("dark"); // هنا بتغير الكلاس من الـ html
//   });
// }





export function switchMode() {
  const switcher = document.getElementById("switch");

  // أول حاجة، تأكد من الحالة الحالية عند تحميل الصفحة
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  // بعدين، عند الضغط على السويتش، غير الكلاس وحدث الـ localStorage
  switcher.addEventListener("click", function () {
    // التبديل بين الوضعين
    document.documentElement.classList.toggle("dark");

    // حفظ الحالة في localStorage
    if (document.documentElement.classList.contains('dark')) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
  });
}










