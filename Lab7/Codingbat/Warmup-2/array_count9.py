def array_count9(nums):
    res = 0
    for i in range(len(nums)):
        if nums[i] == 9:
            res += 1
    return res