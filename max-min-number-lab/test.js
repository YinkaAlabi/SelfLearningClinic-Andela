(function() {
  'use strict';
  
  var myCode = require('./code.js');

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(myCode.findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(myCode.findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(myCode.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

      it('should return [-2, 10] for [10, 0, 1, -2]', function () {
        expect(myCode.findMinMax([10, 0, 1, -2])).toEqual([-2, 10]);
      });

      it('should return [-5, 0] for [-5, 0, -1, -2]', function () {
        expect(myCode.findMinMax([-5, 0, -1, -2])).toEqual([-5, 0]);
      });

      it('should return [-7, -1] for [-6, -7, -3, -1]', function () {
        expect(myCode.findMinMax([-6, -7, -3, -1])).toEqual([-7, -1]);
      });

      it('should return [-1.5, -0.5] for [-1.3, -1.1, -1.5, -0.5]', function () {
        expect(myCode.findMinMax([-1.3, -1.1, -1.5, -0.5])).toEqual([-1.5, -0.5]);
      });

      it('should return [1.23, 2.54] for [1.3, 1.2, 2.5, 1.32, 1.9, 2.2, 2.54, 2.45]', function () {
        expect(myCode.findMinMax([1.3, 1.23, 2.5, 1.32, 1.9, 1.235, 2.2, 2.54, 2.45])).toEqual([1.23, 2.54]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(myCode.findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

      it('should return [5] for [5, 5]', function () {
        expect(myCode.findMinMax([5,5])).toEqual([5]);
      });

      it('should return [-15] for [-15, -15]', function () {
        expect(myCode.findMinMax([-15,-15])).toEqual([-15]);
      });

    });

  });

})();