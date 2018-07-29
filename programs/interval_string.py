def int_string(pc_set):
    result = []
    cycle = pc_set[1:]
    cycle.append(pc_set[0])
    for a, b in zip(cycle, pc_set):
        if (a - b) < 0:
            result.append(a - b + 12)
        else:
            result.append(a - b)
    return result
