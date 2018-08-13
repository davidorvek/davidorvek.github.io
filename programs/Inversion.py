def inv(pc_set, n):
    result = []
    for pc in pc_set:
        new_pc = n - pc
        if new_pc < 0:
            result.append(new_pc + 12)
        else:
            result.append(new_pc)
    return result
