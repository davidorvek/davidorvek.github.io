
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

def int_vect(pc_set):
    sort = sorted(pc_set)
    backwards = sort[::-1]
    iv_result = []
    IC1 = 0
    IC2 = 0
    IC3 = 0
    IC4 = 0
    IC5 = 0
    IC6 = 0

    while len(backwards) > 1:
        n = len(backwards)
        x = 1
        for _ in range(n - 1):
            iv_result.append(backwards[0] - backwards[x])
            x += 1
        backwards.pop(0)

    for i in iv_result:
        if i == 1 or i == 11:
            IC1 += 1
        elif i == 2 or i == 10:
            IC2 += 1
        elif i == 3 or i == 9:
            IC3 += 1
        elif i == 4 or i == 8:
            IC4 += 1
        elif i == 5 or i == 7:
            IC5 += 1
        elif i == 6:
            IC6 += 1
        else:
            pass
    return "<%s%s%s%s%s%s>" % (IC1, IC2, IC3, IC4, IC5, IC6)

def find_rel(pc_set1, pc_set2):
    T = []
    I = []
    IV = ""
    trash = []
    values = list(range(0, 12))
        
    for i in values:
        if sorted((trans(pc_set1, i))) == sorted(pc_set2):
            T.append(i)
        else:
            trash.append(i)
        if sorted((inv(pc_set1, i))) == sorted(pc_set2):
            I.append(i)
        else:
            trash.append(i)
    if int_vect(pc_set1) == int_vect(pc_set2) and T == [] and I == []:
        IV = "YES"
    else:
        IV = "NO"

    return "T = %s" % (T), "I = %s" % (I), "Z-Related? =  %s" % (IV)





 
        
        
    
