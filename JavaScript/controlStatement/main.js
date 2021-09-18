// 조건문 (If statement)
const a = random()

// switch
switch(a) {
  case 0:
    console.log('a is 0')
    break
  case 2:
    console.log('a is 2')
    break
  case 4:
    console.log('a is 4')
    break
  default:
    console.log('rest.....')
}

// if
if (a === 0) {
  console.log('a is 0')
} else if(a === 2) {
  console.log('a is 2')
} else if (a === 4){
  console.log('a is 4')
} else {
  console.log('rest.....')
}

// 반복문 (For statement)
// for (시작조건; 종료조건; 변화조건)

const ulEl = document.querySelector('ul')

for(let i = 0; i < 10; i++){
  const li = document.createElement('li')
  li.textContent = `list-${i + 1}`
  if((i + 1) % 2 === 0){
    li.addEventListener('click', function(){
      console.log(li.textContent)
    })
  }
  ulEl.appendChild(li)
}

// while : 시작과 끝을 모를 때 (최소0번 최대 조건까지 수행)
const i = 0;

while ( i < 10 ) {
  // do something
  i++;
}

// do ~ while : 시작과 끝을 모를 때 (최소 1번 최대 조건까지 수행)
const i = 0;
do {
  alert(i);
  i++;
} while (i < 10)

// 분기문
// break : switch ~ case, 반복문을 빠져나갈 때
const i = 0;
while (i < 10) {
  if (i > 5) {
    break;
  }
  alert(i);
  i++;
}

// continue : 반복문에 수행을 건너뛸 때
const i = 0;
while (i < 10) {
  i++;
  if (i % 2 === 0) {
    continue;
  }
  alert(i);
}

// return : 값을 반환하거나 코드이 실행을 멈추고 호출한 곳으로 돌아갈 때
function text(x) {
  let i = 0;

  while (i < 6) {
    if (i == 3) {
      break;
    }
    i += 1;
  }
  return i * x;
}
