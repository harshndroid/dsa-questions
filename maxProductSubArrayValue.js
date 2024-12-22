function maxProductSubArrayValue(nums) {
  // multiply prefix and suffix value
  // when prefix or suffix becomes 0, reset it to 1 to restart multiplication
  let maxProduct=nums[0], prefixProduct=1, suffixProduct=1;
  for(let i=0; i<nums.length; i++){
      if(prefixProduct === 0) prefixProduct=1;
      prefixProduct *= nums[i];
      if(suffixProduct === 0) suffixProduct=1;
      suffixProduct *= nums[nums.length-i-1];
      maxProduct = Math.max(maxProduct, Math.max(prefixProduct, suffixProduct));
  }

  return maxProduct;
};
