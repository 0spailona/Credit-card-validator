import toNumberWithLength from "../toNumberWithLength";
import constants from "../constants";
import paymentSystemsNames from "./paymentSystemsNames";

const max = true;
const min = false;
const len = constants.minSizeCardNumber;

const paymentSystemsData = [
  {
    IIN: [{min: toNumberWithLength([3, 4], len, min), max: toNumberWithLength([3, 4], len, max)},
      {min: toNumberWithLength([3, 7], len, min), max: toNumberWithLength([3, 7], len, max)}],
    name: paymentSystemsNames.amex
  },

  {
    IIN: [{min: toNumberWithLength([3, 6], len, min), max: toNumberWithLength([3, 6], len, max)},
      {min: toNumberWithLength([5, 4], len, min), max: toNumberWithLength([5, 4], len, max)},
      {min: toNumberWithLength([3, 0, 0], len, min), max: toNumberWithLength([3, 0, 5], len, max)}],
    name: paymentSystemsNames.diners
  },

  {
    IIN: [{min: toNumberWithLength([6, 0, 1, 1], len, min), max: toNumberWithLength([6, 0, 1, 1], len, max)},
      {min: toNumberWithLength([6, 2, 2, 1, 2, 6], len, min), max: toNumberWithLength([6, 2, 2, 9, 5, 2], len, max)},
      {min: toNumberWithLength([6, 4, 4], len, min), max: toNumberWithLength([6, 5], len, max)}],
    name: paymentSystemsNames.discover
  },

  {
    IIN: [{min: toNumberWithLength([3, 5, 2, 8], len, min), max: toNumberWithLength([3, 5, 8, 9], len, max)}],
    name: paymentSystemsNames.jcb
  },

  {
    IIN: [{min: toNumberWithLength([5, 1], len, min), max: toNumberWithLength([5, 5], len, max)},
      {min: toNumberWithLength([2, 2, 2, 1, 0, 0], len, min), max: toNumberWithLength([2, 7, 2, 0, 9, 9], len, max)}],
    name: paymentSystemsNames.mastercard
  },

  {
    IIN: [{min: toNumberWithLength([2, 2, 0, 0], len, min), max: toNumberWithLength([2, 2, 0, 4], len, max)}],
    name: paymentSystemsNames.mir
  },

  {
    IIN: [{min: toNumberWithLength([4], len, min), max: toNumberWithLength([4], len, max)}],
    name: paymentSystemsNames.visa
  }
]
export default paymentSystemsData
