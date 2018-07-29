
import glob
import os
import os.path
import random
from datetime import datetime

now = datetime.now()
date = str("%s-%s-%s" % (now.month, now.day, now.year))

# Enter your roster here between double quotes separated by commas
# \ is only needed if the names need to go on two lines
roster = ["student1", "student2", "student3", "student4", "student5", "student6", \
          "student7", "student8", "student9", "student10", "student11", "student12"]

# Change this to the path where you will be saving your files
# PC will need a different path beginning
list_of_files = glob.glob("/Users/davidorvek/Documents/aural_training_II/daily_work/*")
latest_file = max(list_of_files, key = os.path.getctime)

file = open(latest_file)
lines = file.readlines()
file.close()
priority = lines[len(lines) - 1].split()

berk_needed = int(input("How many people do you need for Berk today?:"))
hall_needed = int(input("How many people do you need for Hall today?:"))

choice1 = []
choice2 = []
absent = []
n = (berk_needed + hall_needed)
chosen = []
berk = []
hall = []
berk_scores = []
hall_scores = []
leftover = []

for student in roster:
    answer = input("Is %s there? (y/n):" % (student))
    if answer == "y" and student in priority:
        choice1.append(student)
    elif answer == "y":
        choice2.append(student)
    elif answer == "n":
        absent.append(student)
    else:
        print("Error")

m = len(choice1)

while len(choice1) > 0:
    random.shuffle(choice1)
    chosen.append(choice1.pop())

for _ in range((n - m)):
    random.shuffle(choice2)
    chosen.append(choice2.pop())

for _ in range(berk_needed):
    random.shuffle(chosen)
    berk.append(chosen.pop())

for _ in range(hall_needed):
    random.shuffle(chosen)
    hall.append(chosen.pop())

print("Berk = %s" % (berk))

for student in berk:
    berk_scores.append(input("What is %s\'s score?:" % (student)))

print("Hall = %s" % (hall))    

for student in hall:
    hall_scores.append(input("What is %s\'s score?:" % (student)))

final_berk = dict(list(zip(berk, berk_scores)))
final_hall = dict(list(zip(hall, hall_scores)))

print("Berk = %s" % (final_berk))
print("Hall = %s" % (final_hall))

for student in roster:
    if student == student in berk or student == student in hall:
        pass
    else:
        leftover.append(student)

        
# Change this to the path where you want this file saved
file = open("/Users/davidorvek/Documents/aural_training_II/daily_work/aural_training_II_" +date+ ".txt", "w+")
file.write("Aural Training II %s \n\nAbsent = %s \n\nBerk = %s \n\nHall = %s \n\nNot called: \n%s" % (date, absent, final_berk, final_hall, (" ".join(leftover))))
file.close()

# Change this to the path where you are saving the file
if os.path.isfile("/Users/davidorvek/Documents/aural_training_II/daily_work/aural_training_II_" +date+ ".txt"):
    print("Saved")
else:
    print("Error. Do not close Python!")




