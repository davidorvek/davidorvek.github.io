
def trans(pc_set, n):
    trans_result = []
    for pc in pc_set:
        new_pc = pc + n
        if new_pc >= 12:
            trans_result.append(new_pc % 12)
        else:
            trans_result.append(new_pc)
    return trans_result

def inv(pc_set, n):
    inv_result = []
    for pc in pc_set:
        new_pc = n - pc
        if new_pc < 0:
            inv_result.append(new_pc + 12)
        else:
            inv_result.append(new_pc)
    return inv_result

def deg_sym(pc_set):
    T = 0
    I = 0
    values = list(range(0, 12))
    for i in values:
        if sorted(trans(pc_set, i)) == sorted(pc_set):
            T += 1
        else:
            T += 0
        if sorted(inv(pc_set, i)) == sorted(pc_set):
            I += 1
        else:
            I += 0
    return T, I
