"use strict";
exports.__esModule = true;
var point_1 = require("./point");
var point = new point_1.Point(1, 2);
// let x = point.x; //isso retorna o método get, (a variável x recebe o valor que retornou de X do objeto point)
// point.x = 10; //isso altera o valor de x, de acordo com o método set
point.draw();
