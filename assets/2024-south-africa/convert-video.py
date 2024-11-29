from glob import glob
import subprocess

filenames = sorted(glob("img*.mov"))
for fname in filenames:
    newname = fname.replace(".mov", ".mp4")
    subprocess.call(["ffmpeg", "-i", fname, newname])

    newname = newname + "-compressed.mp4"
    subprocess.call(
        [
            "ffmpeg",
            "-i",
            fname,
            "-vf",
            "scale=iw/2:ih/2",
            "-c:v",
            "libx264",
            "-profile:v",
            "high",
            "-level:v",
            "4.0",
            "-pix_fmt",
            "yuv420p",
            # "-crf",
            # "23",
            # "-preset",
            # "medium",
            "-c:a",
            "aac",
            "-b:a",
            "192k",
            newname,
        ]
    )
