var jump = function(nums) {
    let res = 0;
    let cur = 0;
    let max = 0;
    for(let i = 0 ; i < nums.length -1 ; i++){
        max = Math.max(max,i + nums[i]);
        if(i === cur){
            cur = max;
            res++;
        }
    }
    return res;
};