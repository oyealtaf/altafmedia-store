/* ============================================================
   STORE CONFIG — AltafMedia Store
   ------------------------------------------------------------
   Yahan apni ASLI details lagayein:
   1. whatsapp: apna WhatsApp number country code ke saath,
      baghair + ya space ke. Misal: "923417774924"
   2. payments: apne JazzCash / Easypaisa / Bank account numbers.
   Neeche di gayi values sirf PLACEHOLDER hain — inhein
   badlay baghair site par payment instructions ghalat ayengi.
   ============================================================ */
const STORE = {
  name: "AltafMedia Store",
  tagline: "Premium PSD Templates",
  currency: "Rs",

  // PLACEHOLDER — apna WhatsApp number lagayein (country code ke saath)
  whatsapp: "923001234567",

  payments: {
    jazzcash: {
      title: "JazzCash",
      number: "0300-1234567",          // PLACEHOLDER
      accountName: "Your Name"          // PLACEHOLDER — account holder ka naam
    },
    easypaisa: {
      title: "Easypaisa",
      number: "0300-1234567",          // PLACEHOLDER
      accountName: "Your Name"          // PLACEHOLDER — account holder ka naam
    },
    bank: {
      title: "Bank Transfer",
      bankName: "Your Bank",           // PLACEHOLDER
      accountTitle: "Your Name",       // PLACEHOLDER
      iban: "PK00YOUR0000000000000000" // PLACEHOLDER
    },
    binancepay: {
      title: "Binance Pay",
      payId: "YOUR-BINANCE-PAY-ID",    // PLACEHOLDER — apna Binance Pay ID ya Binance email lagayein
      accountName: "Your Name",        // PLACEHOLDER — Binance account ka naam
      currency: "USDT"                 // customer Rs total ke barabar USDT bhejega
    }
  },

  supportNote: "Your files will be sent to your WhatsApp after payment verification."
};
