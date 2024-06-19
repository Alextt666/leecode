var canJump = function (nums) {
    const n = nums.length;
    let rightMax = 0;
    for(let i = 0; i < n ; ++i){
       if(i <= rightMax){
           rightMax = Math.max(rightMax,i + nums[i]);
           if(rightMax >= n-1){
               return true;
           }
       }
    }
    return false

};