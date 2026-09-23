console.log(" ІНСТРУКЦІЯ ");
console.log("Функція triangle() розв'язує прямокутний трикутник за двома заданими елементами та їх типами");
console.log("Типи: leg, hypotenuse, adjacent angle, opposite angle, angle");
console.log("Виклик: triangle(значення1, тип1, значення2, тип2)");
function triangle(element1, type1, element2, type2) {
    if (element1 <= 0 || element2 <= 0) {
        return "Zero or negative input";
    }
    const types = ["leg", "hypotenuse", "adjacent angle", "opposite angle", "angle"];

    if (!types.includes(type1) || !types.includes(type2)) {
        console.log("Неправильний тип аргументів, перечитайте інструкцію!");
        return "failed";
    }

    let a, b, c, alpha, beta;
  // 1. Катет і катет
    if (type1 === "leg" && type2 === "leg") {
        a = element1;
        b = element2;
        c = Math.sqrt(a * a + b * b);
        alpha = Math.atan(a / b) * 180 / Math.PI;
        beta = 90 - alpha;
    }
  // 2. Катет і гіпотенуза
    else if ((type1 === "leg" && type2 === "hypotenuse") || (type1 === "hypotenuse" && type2 === "leg")) {
        if (type1 === "leg") {
            a = element1;
            c = element2;
        } else {
            a = element2;
            c = element1;
        }

        if (a >= c) {
            console.log("Катет має бути меншим за гіпотенузу!");
            return "failed";
        }
        b = Math.sqrt(c * c - a * a);
        alpha = Math.asin(a / c) * 180 / Math.PI;
        beta = 90 - alpha;
     }
// 3. Гіпотенуза і кут
    else if ((type1 === "hypotenuse" && type2 === "angle") || (type1 === "angle" && type2 === "hypotenuse")) {
        if (type1 === "hypotenuse") {
            c = element1;
            alpha = element2;
        } else {
            c = element2;
            alpha = element1;
        }

        if (alpha >= 90) {
            console.log("Кут повинен бути гострим!");
            return "failed";
        }

        beta = 90 - alpha;

        a = c * Math.sin(alpha * Math.PI / 180);
        b = c * Math.cos(alpha * Math.PI / 180);
    }
// 4. Катет і прилеглий кут
     else if ((type1 === "leg" && type2 === "adjacent angle") || (type1 === "adjacent angle" && type2 === "leg")) {

        if (type1 === "leg") {
            a = element1;
            beta = element2;
        } else {
            a = element2;
            beta = element1;
        }

        if (beta >= 90) {
            console.log("Кут повинен бути гострим!");
            return "failed";
        }

        alpha = 90 - beta;

        b = a * Math.tan(beta * Math.PI / 180);
        c = a / Math.cos(beta * Math.PI / 180);
    }
// 5. Катет і протилежний кут
    else if ((type1 === "leg" && type2 === "opposite angle") || (type1 === "opposite angle" && type2 === "leg")) {

        if (type1 === "leg") {
            a = element1;
            alpha = element2;
        } else {
            a = element2;
            alpha = element1;
        }

        if (alpha >= 90) {
            console.log("Кут повинен бути гострим!");
            return "failed";
        }

        beta = 90 - alpha;

        c = a / Math.sin(alpha * Math.PI / 180);
        b = a / Math.tan(alpha * Math.PI / 180);
    }
else{
        console.log("Введено несумісну пару типів, перечитайте інструкцію!");
        return "failed";
    }

    console.log("Результат:");
    console.log("a =", a);
    console.log("b =", b);
    console.log("c =", c);
    console.log("alpha =", alpha);
    console.log("beta =", beta); 

    return "success";
}