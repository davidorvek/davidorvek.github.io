import random
import pickle
import sys
import time

chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
         'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B',
         'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
         'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3',
         '4', '5', '6', '7', '8', '9', '`', '~', '!', '@', '#', '$', '%', '^',
         '&', '*', '(', ')', '-', '_', '=', '+', ',', '<', '.', '>', '/', '?',
         ';', ':', '[', '{', ']', '}', '|', ' ']

with open('/users/davidorvek/documents/python/password_generator/passwords.txt', 'rb') as f:
    passwords = pickle.load(f)

def print_passwords():
    for key in passwords:
        print("%s: %s" % (key, passwords[key]))
           
def add_password(n):
    for i in range(n):
        pass_array.append(chars[random.randrange(0, len(chars))])
    password = ''.join(pass_array)
    passwords[key] = password
    with open('/users/davidorvek/documents/python/password_generator/passwords.txt', 'wb') as f:
        pickle.dump(passwords, f, pickle.HIGHEST_PROTOCOL)
    print("%s was created as the password for %s" % (password, key))

def delete_password(string):
    del passwords[string]
    with open('/users/davidorvek/documents/python/password_generator/passwords.txt', 'wb') as f:
        pickle.dump(passwords, f, pickle.HIGHEST_PROTOCOL)
    if string in passwords:
        print("Error, password not removed")
    else:
        print("You have removed the password for %s" % (string))

answer = input("Welcome to the PassBook, the password generator and directory! \
\nWhat would you like to do? \n--Type 'v' to view current passwords\n--Type 'a' \
to add new password\n--Type 'd' to delete a password\n--Type 'q' to quit\n\n$ ")

while True:

    if answer == 'v':
        if passwords == {}:
            print("You don't have any saved passwords")
            time.sleep(1)
            answer = input("\n\n--Type 'v' to view current passwords\n--Type 'a' \
to add new password\n--Type 'd' to delete a password\n--Type 'q' to quit\n\n$ ")
        else:
            print_passwords()
            time.sleep(1)
            answer = input("\n\n--Type 'v' to view current passwords\n--Type 'a' \
to add new password\n--Type 'd' to delete a password\n--Type 'q' to quit\n\n$ ")

    elif answer == 'a':
        pass_array = []
        key = input("What is this password for? ")
        if key in passwords:
            cont = input('You already have a password for this webiste, are you \
sure you want to overwrite it? (y/n) ')
            if cont == 'y':
                pass_length = int(input("How many characters do you want your password to have? "))
                add_password(pass_length)
                time.sleep(1)
                answer = input("\n\n--Type 'v' to view current passwords\n--Type \
'a' to add new password\n--Type 'd' to delete a password\n--Type 'q' to quit\n\n$ ")
            elif cont == 'n':
                print('Canceled')
                time.sleep(1)
                answer = input("\n\n--Type 'v' to view current passwords\n--Type \
'a' to add new password\n--Type 'd' to delete a password\n--Type 'q' to quit\n\n$ ")
            else:
                print('Error')
                time.sleep(1)
                answer = input("\n\n--Type 'v' to view current passwords\n--Type \
'a' to add new password\n--Type 'd' to delete a password\n--Type 'q' to quit\n\n$ ")
        else:      
            pass_length = int(input("How many characters do you want your password to have? "))
            add_password(pass_length)
            time.sleep(1)
            answer = input("\n\n--Type 'v' to view current passwords\n--Type 'a' \
to add new password\n--Type 'd' to delete a password\n--Type 'q' to quit\n\n$ ")

    elif answer == 'd':
        if passwords == {}:
            print("You don't have any saved passwords")
            time.sleep(1)
            answer = input("\n\n--Type 'v' to view current passwords\n--Type 'a' \
to add new password\n--Type 'd' to delete a password\n--Type 'q' to quit\n\n$ ")
        else:
            print_passwords()
            to_delete = input("Which password would you like to delete? (type 'all' to delete all entries) ")
            if to_delete == 'all':
                double_check = input("Are you sure you want to delete all entries? (y/n) ")
                if double_check == 'y':
                    passwords.clear()
                    with open('/users/davidorvek/documents/python/password_generator/passwords.txt', 'wb') as f:
                        pickle.dump(passwords, f, pickle.HIGHEST_PROTOCOL)
                    print('All entries deleted')
                    time.sleep(1)
                    answer = input("\n\n--Type 'v' to view current passwords\n--Type \
'a' to add new password\n--Type 'd' to delete a password\n--Type 'q' to quit\n\n$ ")
                else:
                    print('Canceled')
                    time.sleep(1)
                    answer = input("\n\n--Type 'v' to view current passwords\n--Type \
'a' to add new password\n--Type 'd' to delete a password\n--Type 'q' to quit\n\n$ ")
            elif to_delete in passwords:
                delete_password(to_delete)
                time.sleep(1)
                answer = input("\n\n--Type 'v' to view current passwords\n--Type \
'a' to add new password\n--Type 'd' to delete a password\n--Type 'q' to quit\n\n$ ")
            else:
                print("Error, no password exists for this website")
                time.sleep(1)
                answer = input("\n\n--Type 'v' to view current passwords\n--Type \
'a' to add new password\n--Type 'd' to delete a password\n--Type 'q' to quit\n\n$ ")

    elif answer == 'q':
        print("Goodbye!")
        sys.exit()

    else:
        print("Error")
        time.sleep(1)
        answer = input("\n\n--Type 'v' to view current passwords\n--Type \
'a' to add new password\n--Type 'd' to delete a password\n--Type 'q' to quit\n\n$ ")
