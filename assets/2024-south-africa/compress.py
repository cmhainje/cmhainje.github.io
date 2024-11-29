from glob import glob
from PIL import Image

filenames = sorted(glob("img[0-9][0-9].jpeg"))
for fname in filenames:
    with Image.open(fname) as img:
        newname = fname + "-compressed.jpeg"
        m, n = img.size
        res_img = img.resize((int(m / 2), int(n / 2)))
        res_img.save(newname, "JPEG", quality=85)
