var str = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let count = str.match(/love/gi);  //[ 'Love', 'love', 'love' ]
console.log(count.length); //3

var s='You cannot end a sentence with because because because is a conjunction';
var cnt = s.match(/because/gi); //[ 'because', 'because', 'because' ]
console.log(cnt.length); //3

const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

matches = txt.replace(/%/g, '')
console.log(matches) 
 //I am teacher and  I love teaching.There is nothing as more rewarding as educating and empowering people.I found teaching more interesting than any other jobs.Does this motivate you to be a teacher.

const text =  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
const arr  = text.match(/\d+/g);
const totalAnnualIncome = (+arr[0] + +arr[2]) * 12 + +arr[1];
console.log(totalAnnualIncome);