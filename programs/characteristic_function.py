def char_func(pc_set):
    result = []
    for i in range(0, 12):
        if i in pc_set:
            result.append(1)
        else:
            result.append(0)
    return result


