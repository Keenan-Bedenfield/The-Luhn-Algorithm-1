//make a react form that takes a credit card number and returns true/falseΩ

// function luhnAlgorithm(number) {
//     const numberStr = String(number).replace(/\D/g, ''); // Remove non-digit characters

//     const numDigits = numberStr.length;
//     const oddEven = numDigits % 2;

//     let total = 0;

//     for (let i = 0; i < numDigits; i++) {
//         const digit = parseInt(numberStr[i], 10);
//         if (i % 2 === oddEven) {
//             const doubledDigit = digit * 2;
//             total += doubledDigit < 10 ? doubledDigit : doubledDigit - 9;
//         } else {
//             total += digit;
//         }
//     }

//     return total % 10 === 0;
// }

function validCard({ cardNo }) {
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    const luhn = (num) => {
      const numberStr = String(num).replace(/\D/g, ""); // Remove non-digit characters

      const numDigits = numberStr.length;
      const oddEven = numDigits % 2;

      let total = 0;

      for (let i = 0; i < numDigits; i++) {
        const digit = parseInt(numberStr[i], 10);
        if (i % 2 === oddEven) {
          const doubledDigit = digit * 2;
          total += doubledDigit < 10 ? doubledDigit : doubledDigit - 9;
        } else {
          total += digit;
        }
      }

      return total % 10 === 0;
    };

    const isValid = luhn(cardNo);
    setIsValid(isValid);
  }, [cardNo]);

  // return (
  //   <div>
  //     {isValid === null && <p> Card number.</p>}
  //     {isValid === true && <p>Is valid.</p>}
  //     {isValid === false && <p>Not valid.</p>}
  //   </div>
  // );
}

console.log(validCard(1234567890123456));
console.log(validCard(4408041234567893));
console.log(validCard(38520000023237));
console.log(validCard(4222222222222));
