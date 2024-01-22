const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

// alice1State = alice1.animate(aliceTumbling, aliceTiming);


// First version with nesting
// console.log(alice1State.finished);

// alice1State.finished.then(() => {
//   alice2State = alice2.animate(aliceTumbling, aliceTiming);

//   alice2State.finished.then(() => {
//     alice3.animate(aliceTumbling, aliceTiming);
//   })
// });


// Second version avoiding nesting
// alice1.animate(aliceTumbling, aliceTiming).finished.then(() => {
//   return alice2.animate(aliceTumbling, aliceTiming).finished
// }).then(() => {
//   alice3.animate(aliceTumbling, aliceTiming).finished;
// })


// Third version using await and async
// async function aliceAnimation() {
//   await alice1.animate(aliceTumbling, aliceTiming).finished;
//   await alice2.animate(aliceTumbling, aliceTiming).finished;
//   alice3.animate(aliceTumbling, aliceTiming);
// }

// aliceAnimation();