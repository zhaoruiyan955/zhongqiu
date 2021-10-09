const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

function star_game() {
  var level = {
      one: '6',
      two: '6', // 六子
      three: '6', // 五子
      four: '6',
      five: '5',
      six: '4',
      seven: '3',
      eight: '2',
      nine: '1',
      ten: '0'
    },
    this_level; // 存储当前等级
  var NumberArr = [];
  var return_list = [];

  //  生成随机数据
  // var a = 3,
  //   b = 3,
  //   c = 3,
  //   d = 3,
  //   e = 4,
  //   f = 4;

  var a = Math.floor(Math.random() * 6) + 1,
    b = Math.floor(Math.random() * 6) + 1,
    c = Math.floor(Math.random() * 6) + 1,
    d = Math.floor(Math.random() * 6) + 1,
    e = Math.floor(Math.random() * 6) + 1,
    f = Math.floor(Math.random() * 6) + 1;
  NumberArr.push(a, b, c, d, e, f);
  NumberArr.sort();
  return_list['num'] = NumberArr;
  var isfour = 0;

  for (var i = 0; i < NumberArr.length; i++) {
    if (NumberArr[i] == 4) {
      isfour = isfour + 1;
    }
  }
  switch (isfour) {
    case 1:
      var top_num=[];
      for (var i = 0; i < NumberArr.length; i++) {
        // 1 2 2 2 2 4
        console.log(NumberArr)
        //存储当前相同的数量，判断是否为四进
        var ContrastArr = [];
        for (var j = 0; j < NumberArr.length; j++) {
          // 1 2 2 2 2 4
          // console.log(NumberArr[i])
          if (NumberArr[i] == NumberArr[j]) {
            console.log(NumberArr[i])
            ContrastArr.push(NumberArr[j]);
          }
          console.log(ContrastArr);
        }
        if(ContrastArr.length>top_num.length){
          top_num=ContrastArr;
        }
      }
      console.log(top_num)
        // 等到上面遍历执行完再进行判断属于哪个级别
        if (top_num.length === 4) {
          this_level = level.seven; //四进
          break;
        } else if (top_num.length === 5) {
          this_level = level.three; //五红
          break;
        } else if (top_num.length === 6) {
          this_level = level.two; //六红
          break;
        } else {
          // 判断一下，是 "对堂"" or ”一秀“，对堂就是顺子，123456，一秀就是一个只有4；
          var isContinuityArray = false;
          var array = NumberArr;
          var arrayCount = array.length;
          for (var i = 0; i < arrayCount; i++) {
            var currentArr = Number(array[i]) + 1;
            var nestArr = Number(array[i + 1]);
            if (i + 1 == arrayCount) {
              currentArr = Number(array[i]);
              nestArr = Number(array[i]);
            }
            if (currentArr != nestArr) {
              isContinuityArray = false;
              break;
            } else {
              isContinuityArray = true;
            }
          }
          if (isContinuityArray) {
            this_level = level.five;
            break;
          } else {
            this_level = level.nine;
            break;
          }
        };
      
      break;

    case 2:
      for (var i = 0; i < NumberArr.length; i++) {
        var ContrastArr = [];
        for (var j = 0; j < NumberArr.length; j++) {
          if (NumberArr[i] == NumberArr[j]) {
            ContrastArr.push(NumberArr[j]);
          }
        }
        // 判断是 4进 or 二举
        if (ContrastArr.length === 4) {
          this_level = level.seven;
          break;
        } else {
          this_level = level.eight;
        }
      };
      break;
    case 3:
      this_level = level.six;
      break;
    case 4:
      // 判断是 "普通状元" or "状元插金花"，普通就是4个四，插金花就是  4个四 + 2个1 ；
      var one = 0;
      for (var i = 0; i < NumberArr.length; i++) {
        if (NumberArr[i] === 1) {
          one = one + 1;
        }
      }
      if (one == 2) {
        this_level = level.one; // 插金花
      } else {
        this_level = level.four; //普通状元
      }
      break;
    case 5:
      this_level = level.three; // 五红五子
      break;
    case 6:
      this_level = level.two; //六红六子
      break;
    default:
      // 就是页面都没有四,来判断是否属于 “五子” 和 “六子” 和 “四进” 中的哪一种;
      for (var i = 0; i < NumberArr.length; i++) {
        var ContrastArr = [];
        for (var j = 0; j < NumberArr.length; j++) {
          if (NumberArr[i] == NumberArr[j]) {
            ContrastArr.push(NumberArr[j]);
          }
        }
        if (ContrastArr.length === 4) {
          this_level = level.seven; //四进
          break;
        } else if (ContrastArr.length === 5) {
          this_level = level.three; //五子
          break;
        } else if (ContrastArr.length === 6) {
          this_level = level.two; //六子
          break;
        } else {
          this_level = level.ten;
        }
      };
      break;
  }
  return_list['name'] = this_level;
  return_list['code'] = 200;
  return return_list;
}
module.exports = {
  formatTime,
  star_game: star_game,
}