const { applyDiscount } = require("./theprescription");

describe("applyDiscount()", () => {
    it("applies the corret discount to the total cost" , () => {
        const pricePerRefill = 50;
        const refills = 2;
        const discount = 0.2; // 20 percent discount
        const totalCost = getTotalCost(pricePerRefill, refills)

        const discountedCost = applyDiscount(totalCost, discount)

        const expectedDiscountedCost = totalCost * (1 - discount);
        expect(discountedCost).toBe(expectedDiscountedCost);
    });

    it("returns 0 if the total cost is 0", () => {
        const totalCost = 0;
        const discount = 0.1; // 10 percent discount

        const discountedCost = applyDiscount (totalCost, discount);

        expect (discountedCost).toBe(0);
    });

    it("returns the same cost if the discount is 0", () => {
        const pricePerRefill = 30;
        const refills = 4;
        const totalCost = getTotalCost(pricePerRefill, refills);
        const discount = 0; //No Discount

        const discountedCost = applyDiscount(totalCost, discount);

        expect(discountedCost).toBe(totalCost);
    });
});

describe("applyCoupon()", () => {
    it("applies the correct coupon reduction to the total cost", () => {
      const pricePerRefill = 40;
      const refills = 3;
      const couponReduction = 15;
      const totalCost = getTotalCost(pricePerRefill, refills);
  
      const costAfterCoupon = applyCoupon(totalCost, couponReduction);
  
      const expectedCostAfterCoupon = totalCost - couponReduction;
      expect(costAfterCoupon).toBe(expectedCostAfterCoupon);
    });


    it("returns 0 if the coupon reduction is greater than the total cost", () => {
        const totalCost = 30;
        const couponReduction = 40;
    
        const costAfterCoupon = applyCoupon(totalCost, couponReduction);
    
        expect(costAfterCoupon).toBe(0);
      });

      it("returns the same cost if the coupon reduction is 0", () => {
        const pricePerRefill = 20;
        const refills = 2;
        const totalCost = getTotalCost(pricePerRefill, refills);
        const couponReduction = 0; // No coupon reduction
    
        const costAfterCoupon = applyCoupon(totalCost, couponReduction);
    
        expect(costAfterCoupon).toBe(totalCost);
      });
    });