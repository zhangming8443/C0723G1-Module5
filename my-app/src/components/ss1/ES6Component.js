import React from "react";

function ES6Component() {
// ex1. Tạo một mảng mới chứa các số lớn hơn 5 từ mảng ban đầu (map).
    const func1 = (...arr) => {
        const newArray = arr.filter(n => n > 5);
        // ta truyền 1 hàm call back vào filter() như là đối số, phương thức filter() của mảng JS được sử dụng
        // để TẠO 1 MẢNG MỚI chứa các phần tử thỏa mãn 1 điều kiện nhất định
        return `EX1 - Mảng chứa các số lơn hơn 5: ` + newArray
    }
    console.log(func1([2, 8, 5, 9, 10, 3, 11]));


// ------------------------------------------------------END-------------------------------------------------------

// ex2. Sử dụng arrow function và reduce để tính tổng các phần tử trong mảng.
    const func2 = (...arr) => {
        const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        // Phương thức reduce() là một phương thức của mảng trong JavaScript,
        // được sử dụng để thực hiện 1 PHÉP TÍCH LŨY trên các phần tử của mảng
        // và trả về 1 GIÁ TRỊ DUY NHẤT.
        return (`EX2 - Tổng các phần tử trong mảng: ` + sum);
    }
    console.log(func2([1, 2, 3, 4, 5]));


// ------------------------------------------------------END-------------------------------------------------------

// ex3. Kiểm tra 1 mảng có chứa số V hay không nếu có trả về V không thì trả về "không tìm thấy" (some).
    const func3 = (targetNumber) => {
        const arrV = [1, 2, 3, 4, 5];
        const result = arrV.some(n => n === targetNumber);
        // Chúng ta sử TOÁN TỬ 3 NGÔI để kiểm tra kết quả của some()
        return result ? (`EX3 - Đã tìm thấy số ` + targetNumber) : `Không tìm thấy !`
    }
    console.log(func3(3));

// ------------------------------------------------------END-------------------------------------------------------

// ex4. Kiểm tra 1 mảng tất cả các phần tử trong mảng đó có lớn hơn 0 hay không? (every).
    const func4 = (...arr) => {
        const n = arr.every(number => number > 0);
        // Phương thức every() trong JavaScript được sử dụng để kiểm tra xem TẤT CẢ các phần tử trong một mảng
        // có thỏa mãn một điều kiện nhất định hay không
        return `EX4 - Các phần tử trong mảng > 0 : ` + n;
    }
    console.log(func4(3, [1, 2]));

// ------------------------------------------------------END-------------------------------------------------------

// ex5. 5. Tìm phần tử đầu tiên trong mảng lớn hơn 3.
    const func5 = (...arr) => {
        const n = arr.find(number => number > 3);
        // Phương thức find() sẽ trả về PHẦN TỬ ĐẦU TIÊN trong mảng thỏa mãn một điều kiện nhất định.
        return `EX5 - Phần tử đầu tiên trong mảng lớn hơn 3 là:  ` + n;
    }
    console.log(func5([-2, 3, 8, 10]));

// ------------------------------------------------------END-------------------------------------------------------\

// ex6. Sử dụng destructuring với rest parameter để trích xuất phần tử đầu tiên vào biến "first" và các phần tử còn lại vào một mảng mới "rest".
    const func6 = (...arr) => {
        const [first, ...rest] = arr;
        return `EX6 - biến first: ` + first + ` Mảng rest: ` + rest;
    }
    console.log(func6(1, 2, 3, 4, 5));

// ------------------------------------------------------END-------------------------------------------------------

// ex7. Sử dụng destructuring để trích xuất các giá trị "name" và "age" từ một mảng chứa các đối tượng "person".
    const person = [
        {
            name: 'Minh',
            age: 18
        },
        {
            name: 'Tuan',
            age: 19
        },
        {
            name: 'Toan',
            age: 20
        }
    ];

    const func7 = person.map(({name, age}) => `Name: ${name}, Age: ${age}`);
    console.log(`EX7 - Mảng đã trích xuất ` + func7);

// ------------------------------------------------------END-------------------------------------------------------

// ex8. Sử dụng Rest parameter và Spread operator để tạo một hàm nhận vào danh sách các số và trả về tổng của chúng.
    const func8 = (...numbers) => numbers.reduce((sum, n) => sum + n, 0);
    console.log(`EX8 - Tổng = ` + func8(1, 2, 3, 4, 5));

// ------------------------------------------------------END-------------------------------------------------------

// ex9. Sử dụng Rest parameter để nhận vào một danh sách tên và trả về chuỗi định dạng "Welcome, [tên1], [tên2], [tên3], ..." cho tất cả các tên.
    const func9 = (...names) => `Welcome, ${names.join(', ')}`;
// phương thức join() để nối các tên với dấu phẩy và khoảng trắng
    console.log(`EX9 - Chuỗi định dạng: ${func9('Minh', 'Nhi', 'Ngoc', 'Vy')}`);

// ------------------------------------------------------END-------------------------------------------------------

// ex10. Tạo một đối tượng "book" với thuộc tính "title", "author" và "pages" bằng cách sử dụng Enhanced object literals. Đối tượng "book" cũng có phương thức "displayInfo" để in ra thông tin về sách.
    var title = 'ABC';
    var author = 'Nguyen H';
    var pages = 133;


    const book = {
        title, author, pages,
        displayInfo() {
            console.log(this.title);
            console.log(this.author);
            console.log(this.pages);
        }
    };
    book.displayInfo();

    return (
        <div>
            <h1>Console log</h1>
        </div>
    );
}


export default ES6Component;
