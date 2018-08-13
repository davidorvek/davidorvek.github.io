def trans(pc_set, n):
    result = []
    for pc in pc_set:
        new_pc = pc + n
        if new_pc >= 12:
            result.append(new_pc % 12)
        else:
            result.append(new_pc)
    return result
