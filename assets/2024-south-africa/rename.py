from glob import glob
from os import rename

filenames = sorted(glob("img - *"))
for fname in filenames:
    num = int(fname.replace("img - ", "").split(".")[0])
    ext = fname.split(".")[1]
    newname = f"img{num:02d}.{ext}"
    rename(fname, newname)
    print(f"{fname} -> {newname}")
