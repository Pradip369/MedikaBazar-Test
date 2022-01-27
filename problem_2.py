def min_diff(lst):
    srt_lst = sorted(lst)
    max_speed = None
    speed_diff = max(lst)
    for i in range(len(lst)-1):
        curr_diff = srt_lst[i+1] - srt_lst[i]
        if curr_diff < speed_diff:
            speed_diff = curr_diff
            max_speed = (srt_lst[i],srt_lst[i+1],speed_diff)
    return max_speed

lst = [470,240,380,440,190,320,265]
min_diff(lst)