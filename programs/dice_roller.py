import random

results = []

dice = int(input("How many dice do you want thrown? "))

sides = int(input("How many sides do you want each die to have? "))

for i in range(dice):
    results.append(random.randrange(1, (sides + 1)))
    
print("You rolled %s, which sums to %s" % (results, sum(results)))
      
cont = input("Do you want to play again (y/n)? ")

while cont == "y":
    import random

    results = []

    dice = int(input("How many dice do you want thrown? "))

    sides = int(input("How many sides do you want each die to have? "))

    for i in range(dice):
        results.append(random.randrange(1, (sides + 1)))
    
    print("You rolled %s, which sums to %s" % (results, sum(results)))
      
    cont = input("Do you want to play again (y/n)? ")

else:
    print("Goodbye!")
    
