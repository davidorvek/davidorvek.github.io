
def int_vect(pc_set):
    sort = sorted(pc_set)
    backwards = sort[::-1]
    result = []
    IC1 = 0
    IC2 = 0
    IC3 = 0
    IC4 = 0
    IC5 = 0
    IC6 = 0

    while len(backwards) > 1
        n = len(backwards)
        x = 1
        for _ in range(n - 1):
            result.append(backwards[0] - backwards[x])
            x += 1
        backwards.pop(0)

    for i in result:
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
    print("<%s%s%s%s%s%s>" % (IC1, IC2, IC3, IC4, IC5, IC6))
        
         
