function countPrimeNumbers() {
    let count = 0;
    for (let i = 2; i <= 100; i++) {
      if (isPrime(i)) {
        count++;
      }
    }
    return count;
}

function repeatPrimeCount() {
    let count = 0;
    let repeat = 100;
    let startTime = performance.now();

    function startCount() {
        countPrimeNumbers();
        count++;
        if (count < repeat) {
            setTimeout(startCount, 0);
        } else {
            let endTime = performance.now();
            console.log(`Execution time of calculating prime numbers ${repeat} times was ${endTime - startTime} milliseconds.`);
        }
    }

    setTimeout(startCount, 0);
}

repeatPrimeCount();