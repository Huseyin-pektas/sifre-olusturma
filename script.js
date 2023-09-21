

const passwordBox = document.getElementById("password");

const upperCase = "ABCDEFGĞHIJKLMNOÖPRSTUVXYZ";
const lowerCase = "abcdefghijklmnoöprstuvxyz";
const number = "0123456789";
const symbol = "+-÷=<>≤≥≠√π∞Σ∫∆∠%&/(){}?*!'^^$";
const length = 20;
const allChars = upperCase + lowerCase + symbol + number;
//  burada rastgele şifre oluşturmak için bir fonksiyon oluşturduk
function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];


    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];

    }
    passwordBox.value = password;
    // console.log(password, "butona tıklanınca ne çıkıyor")
}
// burada şifre kopyalamak için fonksiyon oluşturduk.
function copyPassword() {

    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
    // şifre kopyalandıktan sonra inputun içini temizledik.
    passwordBox.value = "";
}
