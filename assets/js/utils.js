import md5 from 'js-md5';

function uuid() {
    return md5(Math.random() + Date().toString() + Math.random())
}

function deToken(token) {
    if (token) {
        let Base64 = require('js-base64').Base64;
        let currentToken = token.split('.')[1];
        let string = Base64.decode(currentToken)
        let obj = JSON.parse(string)
        return obj;
    } else {
        return {}
    }
}

function uniq(array) {
    let temp = [];
    let index = [];
    let len = array.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (array[i].code === array[j].code) {
                i++;
                j = i;
            }
        }
        temp.push(array[i]);
        index.push(i);
    }
    return temp;
}

function round(number, precision) {
    return (Math.round(+ number + 'e' + precision) / Math.pow(10, precision)).toFixed(precision);
}

//媒体报告使用，返回2018、12/09 年、月/日两个数据
function formatTime(stemp) {
    let time = new Date(stemp)
    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    let date = time.getDate();
    if (month < 10) {
        month = '0' + month
    }
    if (date < 10) {
        date = '0' + date
    }
    return [year,month+'/'+date]
};
function stringToArray(arr){
    return arr.split(',');
};
function arrayRemove(arr,value){
    let removeindex = arr.indexOf(value);
      if (removeindex > -1) {
          arr.splice(removeindex, 1);
      }
};
  

// 对比当前时间是否在某一时间段
function checkTime(stime, etime) {
    //开始时间
    let startTime = new Date(stime);
    let startTimes = startTime.getTime();
    //结束时间
    let endTime = new Date(etime);
    let endTimes = endTime.getTime();
    //当前时间
    let thisDate = new Date();
    let nowTimes = thisDate.getTime();
    // 预热中
    if (nowTimes < startTimes) {
        return '预热中'
    } else if (nowTimes > endTimes) {
        return '已结束'
    } else {
        return '进行中'
    }
  }
// 日期格式化 例: 2019-11-21 13:30:00 => 11/21
function setDateThree(string) {
    let date = ''
    let arr = []
    if (string) {
        date = string.split(' ')[0]
        arr = date.split('-')
        return `${arr[1]}/${arr[2]}`
    } else {
        return ''
    }
}

// 日期格式化 例: 2019-11-21 13:30:00 => 13:30
function setDateFour(string) {
    let date = ''
    let arr = []
    if (string) {
        date = string.split(' ')[1]
        arr = date.split(':')
        return `${arr[0]}:${arr[1]}`
    } else {
        return ''
    }
}
// 日期格式化 例:2017-08-21 13:30:00=> 周x 使用:getWeek("2017-08-21")
//  *ios 手机不支持 2019-09-12这种格式的日期转换 
function getWeek(params) {
    let string = params.split(' ')[0]
    let arr = string.split('-')// 2019-09-12 转为 2019/09/12
    let date = new Date(`${arr[0]}/${arr[1]}/${arr[2]}`)
    let week = '';
    if(date.getDay() == '0') week = "周日"
    if(date.getDay() == '1') week = "周一"
    if(date.getDay() == '2') week = "周二"
    if(date.getDay() == '3') week = "周三"
    if(date.getDay() == '4') week = "周四"
    if(date.getDay() == '5') week = "周五"
    if (date.getDay() == '6') week = "周六"
    return week;
}
// 律所职务
function workType(type){
    let res
    switch(type){
        case 'FullTime':
        res='专职律师'
        break;
        case 'director':
        res='主任律师'
        break;
        case 'partner':
        res='合伙人律师'
        break;
        case 'partTime':
        res='兼职律师'
        break;
        case 'deputyDirector':
        res='副主任律师'
        break;
        case 'senior':
        res='资深律师'
        break;
        default:
        res=type
    }
    return res
}
// 擅长领域
function goodAtFields(val) {
    let result = []
    if (val) {
        let categories = ''; //存放类目
        if (val) {
            let att = val.split(","); //截取领域
            for (let i = 0; i < att.length; i++) {
                categories = categories + "" + att[i].split("|")[1]+' '
            }
        }
        //将字符串的形式的擅长领域截取成数组
        let goodAtFields=[]
        let field = categories.split(' '); //擅长领域
        for (var i=0 ; i< field.length ; i++){
            goodAtFields.push(field[i]);
        }
        //去重后的邻域
        for (var i = 0; i < goodAtFields.length; i++) {
            if(result.indexOf(goodAtFields[i])==-1){
                result.push(goodAtFields[i]);
            }
        }

        return result
        
    } else {
        return result
    }
}

// 从业年限
function workTime(stemp, type) {
    let time = new Date()
    let now = time.getFullYear();
    let start
    if (type == 'string') {
        if (stemp) {
            start = Number(stemp.slice(0, 4))
        }
    }
    if (type == 'number') {
        let startTime
        startTime = new Date(stemp)
        start = startTime.getFullYear()
    }
    if(  (now - start) == 0){
        return "--"
    }else{
        return now - start +'年'
    }
    
};
// 日期格式化 例: 2019-11-21 => 11月21日    
function setDateOne(string){
    let arr = []
    if (string) {
        arr = string.split('-')
        return `${arr[1]}月${arr[2]}日`
    } else {
        return ''
    }
}
export default {
    md5, 
    uuid, 
    deToken, 
    uniq,
    round,
    formatTime,
    stringToArray,
    arrayRemove,
    checkTime,
    setDateThree,
    setDateFour,
    getWeek,
    workType,
    goodAtFields,
    workTime,
    setDateOne
}