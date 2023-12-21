function solution() {

  var sum = 0

  for(var i = 1 ; i <= 20 ; i ++) {
    if(i % 2 === 1) {
      sum += i
    }
  }

  console.log(sum)

}

var result = solution()
