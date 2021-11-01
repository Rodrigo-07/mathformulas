# MATHFORMULAS
### Video Demo:  <https://youtu.be/CYPGuk8ddr4>

![MathFormulas](https://user-images.githubusercontent.com/68949983/139709532-28dd9f85-5578-4151-be5d-a41558586feb.png)

#### It is a website to calculate the result of some mathematical formulas quickly

&nbsp;

## Description: 
This is my final project for CS50 Course. I used only HTML, CSS and JavaScript to create this website. No library or framework was used. At moment(10/31/2021) you can calculate the result of a quadratic equation, the the hypotenuse and cathetus of a right triangle, and 2 percentage calculation situations.

&nbsp;

## Website pages
### Quadratic Formula
On this page, you can calculate the x values of a quadratic equation.
 
![Quadratic formula _1](https://user-images.githubusercontent.com/68949983/139607788-428da3d5-8edf-40dc-8bb3-0410f0ae9430.png)

Just add the values of the a, b, c following the general formula. After that, is just to click on "calculate" and answer will appear bellow,

![Quadratic formula _2](https://user-images.githubusercontent.com/68949983/139607957-780a3a49-8a24-4326-84fc-30329b0dc29e.png)

It does not calculate complex numbers, so if your quadratic equation results are complex numbers, the answer will be "x1 and x2 are complex numbers!"

### Pythagorean Theorem
On this page, you can calculate the hypotenuse and cathetuses of a right triangle.

![Pythagorean_Theorem1](https://user-images.githubusercontent.com/68949983/139608192-a24f6fa2-e1cc-47de-be40-37c19ef5db56.png)

- a = Opposite cathetus
- b = Adjacent cathetus
- c = Hypotenuse

To use just add the values that you have and leave the value you want to find in black.

![Pythagorean_Theorem2](https://user-images.githubusercontent.com/68949983/139608439-1c7cc1c3-1c79-4012-8cae-b67c5899e605.png)

### Percentage
On this page, you can calculate percentage in two different situations.

![Percentage1](https://user-images.githubusercontent.com/68949983/139608576-a73b6a8b-9026-4bff-8a3d-c8ef87fdc5b1.png)

To use, just add the values and click on "calculate"

![Percentage2](https://user-images.githubusercontent.com/68949983/139608837-f117f9f6-9faf-4083-a108-becb642309e0.png)

&nbsp;

## Website code
### HTML
In the main folder, there are 3 html files:
- [index.html](https://github.com/Rodrigo-07/mathformulas/blob/4115378e8fe740183da0efba37bba8ef791561cd/index.html)
    This is the main page and where you can calculate the x values of a quadratic equation. 

- [percentage.html](https://github.com/Rodrigo-07/mathformulas/blob/4115378e8fe740183da0efba37bba8ef791561cd/percentage.html)
    Here you can calculate "What is x % of y ?"  and  "x is what % of y 
?"
- [pythagorean_theorem.html](https://github.com/Rodrigo-07/mathformulas/blob/4115378e8fe740183da0efba37bba8ef791561cd/pythagorean_theorem.html)
    Here you can calculate the hypotenuse and cathetus of a right triangle

The content of each file is the html code of the respective page.

### CSS
In the CSS folder, there is 3 files:
- [style.css](https://github.com/Rodrigo-07/mathformulas/blob/255197ba0fe8464b7ec2b1c03d2acf2ffe2d8296/css/style.css)
    This is the CSS code for the index page.

- [style2.css](https://github.com/Rodrigo-07/mathformulas/blob/255197ba0fe8464b7ec2b1c03d2acf2ffe2d8296/css/style2.css)
    This is the CSS code for the Pythagorean Theorem page.

- [style4.css](https://github.com/Rodrigo-07/mathformulas/blob/255197ba0fe8464b7ec2b1c03d2acf2ffe2d8296/css/style4.css)
    This is the CSS code for the percentage page.

Most of the times I used CSS id Selector.

### JavaScript
In the JS folder, there is 3 files:
- [script1.js](https://github.com/Rodrigo-07/mathformulas/blob/255197ba0fe8464b7ec2b1c03d2acf2ffe2d8296/js/script1.js)
    This is the JS code for the index page.

- [script2.js](https://github.com/Rodrigo-07/mathformulas/blob/255197ba0fe8464b7ec2b1c03d2acf2ffe2d8296/js/script2https://github.com/Rodrigo-07/mathformulas/blob/255197ba0fe8464b7ec2b1c03d2acf2ffe2d8296/js/script1.js.js)
    This is the JS code for the Pythagorean Theorem page.

- [script4.js](https://github.com/Rodrigo-07/mathformulas/blob/255197ba0fe8464b7ec2b1c03d2acf2ffe2d8296/js/script4.js)
    This is the JS code for the percentage page. Here I used 2 fuctions, one for each type of percertage.

To get values of the variables from the HTML pages, I used `document.getElementById`


This file should include your Project Title, the URL of your video (created in step 1 above) and a description of your project.
Your README.md file should be minimally multiple paragraphs in length, and should explain what your project is, what each of the files you wrote for the project contains and does, and if you debated certain design choices, explaining why you made them. Ensure you allocate sufficient time and energy to writing a README.md that you are proud of and that documents your project thoroughly. Be proud of it!
