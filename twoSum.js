var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++ ){
        for(let j=i+1;j<=nums.length;j++){
            if(nums[i]+nums[j]==target){
                console.log(`[${i},${j}]`)
            }
        }
    }
};

nums=[2,7,11,12];
twoSum(nums,9);
nums = [3,2,4]
twoSum(nums,6)
 nums = [3,3]
 twoSum(nums,6)