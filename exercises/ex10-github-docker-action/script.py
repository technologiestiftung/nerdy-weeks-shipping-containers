import os
import sys
print(sys.argv)
print("Github Docker Action - Yeah baby!")
print("▄██   ▄      ▄████████    ▄████████    ▄█    █▄    ")
print("███   ██▄   ███    ███   ███    ███   ███    ███   ")
print("███▄▄▄███   ███    █▀    ███    ███   ███    ███   ")
print("▀▀▀▀▀▀███  ▄███▄▄▄       ███    ███  ▄███▄▄▄▄███▄▄ ")
print("▄██   ███ ▀▀███▀▀▀     ▀███████████ ▀▀███▀▀▀▀███▀  ")
print("███   ███   ███    █▄    ███    ███   ███    ███   ")
print("███   ███   ███    ███   ███    ███   ███    ███   ")
print(" ▀█████▀    ██████████   ███    █▀    ███    █▀    ")
os.system(
    'echo "::set-output name=out::{}{}"'.format(sys.argv[1], sys.argv[1]))
