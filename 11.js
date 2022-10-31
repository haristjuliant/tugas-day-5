const fruits = ['Jeruk', 'Pepaya', 'Jambu', 'Anggur', 'Melon']
const finding = "Jambu"

for (i = 0; i<=fruits.length; i++) {
    if (fruits[i] == finding) {
        fruits.splice(i,1)
        break;
    }
}

console.log(fruits)