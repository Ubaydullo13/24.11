// 81

function bogin(word) {
    let unlilar = "aeiouyAEIOUY";
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (unlilar.includes(word[i])) {
            count++;
        }
    }
    return count;
}

console.log(bogin("Hehehehehehe"));
console.log(bogin("bobobobobobobobo"));
console.log(bogin("NANANA"));

// 82
function ascii(belgi) {
    // Ushbu metodi ishlatib belginig ASCII kodini olish
    var asciiKod = belgi.charCodeAt(0);
    return asciiKod;
  }
  
  console.log(ascii("A"));
  console.log(ascii("m"));
  console.log(ascii("["));
  console.log(ascii("\\"));

//   83

function tengmi(soz1, soz2) {
    var lowerSoz1 = soz1.toLowerCase();
    var lowerSoz2 = soz2.toLowerCase();
    return lowerSoz1 === lowerSoz2;
  }

  console.log(tengmi("hello", "hELLo"));
  console.log(tengmi("motive", "emotive"));
  console.log(tengmi("venom", "VENOM"));
  console.log(tengmi("mask", "mAskinG")); 

//   84

function belgiSoni(word) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
      count++;
    }
    return count;
  }
  
  console.log(belgiSoni("Hello World"));
  console.log(belgiSoni("Edabit"));
  console.log(belgiSoni("wash your hands!"));

//   85
function endCorona(tuzalganlar, yangiKasallar, hozirdaKasallar) {
    const TuzalishKuni = Math.ceil(hozirdaKasallar / (tuzalganlar - yangiKasallar + 1));
    return TuzalishKuni;
  }
  
  console.log(endCorona(4000, 2000, 77000));
  console.log(endCorona(3000, 2000, 50699));
  console.log(endCorona(30000, 25000, 390205));

//   86
function double(arr) {
    let result = [];
    arr.forEach(item => {
      result.push(item * 2);
    });
    return result;
  }
  
  console.log(double([2, 5, 3])); 
  console.log(double([1, 86, -5]));
  console.log(double([5, 382, 0]));

//   87
function wordLengths(words) {
    let lengths = [];
    words.forEach(word => {
      lengths.push(word.length);
    });
    return lengths;
  }
  
  console.log(wordLengths(["hello", "world"]));
  console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"])); 
  console.log(wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]));
  
  
// 88
function taksi(umumiySumma) {
    const startNarxi = 4000;
    const kilometrNarxi = 1000;
  
    const startKmSummasi = startNarxi;
    const qolganSumma = umumiySumma - startKmSummasi;
  
    const qolganKM = Math.ceil(qolganSumma / kilometrNarxi);
    const umumiyKM = qolganKM + 1;
  
    return umumiyKM;
  }
  
  console.log(taksi(4000));
  console.log(taksi(7000));
  console.log(taksi(5000));
  
//   89

// 90

function boshJoy(matn) {
    const natija = matn.split('').join(' ');
    return natija;
  }
  
  console.log(boshJoy("space"));
  console.log(boshJoy("far out"));
  console.log(boshJoy("elongated musk"));

//   91

function oxirgiBelgiTakrorlab(string, son) {
    return string + string.slice(-1).repeat(son - 1);
  }
  
  console.log(oxirgiBelgiTakrorlab("Hello", 3)); // "Hellooo"
  console.log(oxirgiBelgiTakrorlab("hey", 6)); // "heyyyyyy"
  console.log(oxirgiBelgiTakrorlab("excuse me what?", 5)); // "excuse me what?????"
  
  
  
