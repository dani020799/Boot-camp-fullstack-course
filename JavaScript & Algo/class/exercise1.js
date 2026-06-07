function twoSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === target)        
      return true; 

    if (sum < target) {
      left++;
    } else 
    {
      right--;
    }
  }

  return false;
}

function hasTwoSum(nums, target) {
    const seen = new Set();

    for (const num of nums) {
        const complement = target - num;

        if (seen.has(complement)) {
            return true;
        }

        seen.add(num);
    }

    return false;
}


function main()
{ 
    console.log(hasTwoSum([2, 7, 11, 15], 9));
}

main()