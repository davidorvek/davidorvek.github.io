
def inv(pc_set, n):
    inv_result = []
    for pc in pc_set:
        new_pc = n - pc
        if new_pc < 0:
            inv_result.append(new_pc + 12)
        else:
            inv_result.append(new_pc)
    return inv_result

def ind_vect(pc_set):
    a = 0
    b = 0
    c = 0
    d = 0
    e = 0
    f = 0
    g = 0
    h = 0
    i = 0
    j = 0
    k = 0
    l = 0
    I0 = inv(pc_set, 0)
    I1 = inv(pc_set, 1)
    I2 = inv(pc_set, 2)
    I3 = inv(pc_set, 3)
    I4 = inv(pc_set, 4)
    I5 = inv(pc_set, 5)
    I6 = inv(pc_set, 6)
    I7 = inv(pc_set, 7)
    I8 = inv(pc_set, 8)
    I9 = inv(pc_set, 9)
    I10 = inv(pc_set, 10)
    I11 = inv(pc_set, 11)
    for pc in I0:
        if pc in pc_set:
            a += 1
        else:
            a += 0
    for pc in I1:
        if pc in pc_set:
            b += 1
        else:
            b += 0
    for pc in I2:
        if pc in pc_set:
            c += 1
        else:
            c += 0
    for pc in I3:
        if pc in pc_set:
            d += 1
        else:
            d += 0
    for pc in I4:
        if pc in pc_set:
            e += 1
        else:
            e += 0
    for pc in I5:
        if pc in pc_set:
            f += 1
        else:
            f += 0
    for pc in I6:
        if pc in pc_set:
            g += 1
        else:
            g += 0
    for pc in I7:
        if pc in pc_set:
            h += 1
        else:
            h += 0
    for pc in I8:
        if pc in pc_set:
            i += 1
        else:
            i += 0
    for pc in I9:
        if pc in pc_set:
            j += 1
        else:
            j += 0
    for pc in I10:
        if pc in pc_set:
            k += 1
        else:
            k += 0
    for pc in I11:
        if pc in pc_set:
            l += 1
        else:
            l += 0
    return a,b,c,d,e,f,g,h,i,j,k,l

            
