// เรามี Array numbers ซึ่งบรรจุตัวเลข ให้เขียน Algorithm เพื่อหาว่าผลรวมที่กำหนดให้ มาจากการบวกกันระหว่างสมาชิกสองตัวไหนใน Array
// เช่น ถ้า `numbers =  [2, 7, 11, 15]` ผลรวมเท่ากับ `9` ตัว Algorithm จะแสดงผลลัพธ์ออกมาเป็น `[0, 1]`
// คือตำแหน่งของสมาชิกสองตัวใน Array ที่บวกกันแล้วได้ผลลัพธ์เท่ากับ `9` (จาก 2 + 7)
// ถ้า `numbers =  [2, 7, 11, 15]` ผลรวมเท่ากับ `23` ตัว Algorithm จะแสดงผลลัพธ์ออกมาเป็น `[]`
// หรือ Empty Array เนื่องจากไม่มีสมาชิกตัวใดที่บวกกันแล้วได้ผลลัพธ์เท่ากับ `23`

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    const currentNum = numbers[i]; //2
    const findnum = target - currentNum; //7

    for (let j = 0; j < i; j++) {
      if (numbers[j] === findnum) {
        return [j, i];
      }
    }
  }

  return [];
}

const numbers = [11, 2, 7, 15];
const target1 = 9;
const target2 = 23;

console.log(twoSum(numbers, target1));
console.log(twoSum(numbers, target2));
