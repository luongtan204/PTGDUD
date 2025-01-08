// Tinh diem trung binh
function tinhTrungBinh(diem1, diem2, diem3) {
    return (diem1 + diem2 + diem3) / 3;
}

// Du lieu kiem tra
const diemDolphins1 = tinhTrungBinh(96, 108, 89);
const diemKoalas1 = tinhTrungBinh(88, 91, 110);

const diemDolphinsBonus1 = tinhTrungBinh(97, 112, 101);
const diemKoalasBonus1 = tinhTrungBinh(109, 95, 123);

const diemDolphinsBonus2 = tinhTrungBinh(97, 112, 101);
const diemKoalasBonus2 = tinhTrungBinh(109, 95, 106);

// Ham so sanh va xac dinh doi thang cuoc
function xacDinhThangCuoc(diemDolphins, diemKoalas) {
    if (diemDolphins > diemKoalas && diemDolphins >= 100) {
        console.log('Dolphins thang cuoc!');
    } else if (diemKoalas > diemDolphins && diemKoalas >= 100) {
        console.log('Koalas thang cuoc!');
    } else if (diemDolphins === diemKoalas && diemDolphins >= 100 && diemKoalas >= 100) {
        console.log('Hai doi hoa nhau!');
    } else {
        console.log('Khong co doi nao thang cuoc!');
    }
}

// Kiem tra ket qua voi du lieu
console.log('Ket qua voi Du lieu 1:');
xacDinhThangCuoc(diemDolphins1, diemKoalas1);

console.log('Ket qua voi Du lieu Bonus 1:');
xacDinhThangCuoc(diemDolphinsBonus1, diemKoalasBonus1);

console.log('Ket qua voi Du lieu Bonus 2:');
xacDinhThangCuoc(diemDolphinsBonus2, diemKoalasBonus2);


