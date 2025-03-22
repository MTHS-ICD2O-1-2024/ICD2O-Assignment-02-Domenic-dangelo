// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: domenic dangelo
// Created on: feb 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates volume of a right triangular prism.
 */
function calculateVolumeOfRightTriangularPrism() {
  // input
  const baseOfRigthTriangularPrism = parseFloat(document.getElementById("base-of-right-triangular-prism").value)
  const heightOfRigthTriangularPrism = parseFloat(document.getElementById("height-of-right-triangular-prism").value)
  const lengthOfRigthTriangularPrism = parseFloat(document.getElementById("length-of-right-triangular-prism").value)

  // process
  const volumeOfRigthTriangularPrism = (baseOfRigthTriangularPrism * heightOfRigthTriangularPrism /2) * lengthOfRigthTriangularPrism

  // output
  document.getElementById("answer").innerHTML = "Volume is: " + volumeOfRigthTriangularPrism + " cm³"
}
