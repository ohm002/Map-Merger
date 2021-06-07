from modules import Merge
import sys
import re
import os
import time
metadata = Merge.ParseAllBeatmapData(open(sys.argv[1], encoding="utf-8").read().splitlines())
version = re.split(":",metadata.metadata[5])[1]
filepathfull = re.split("\\\\",sys.argv[1])
filepath = ""
for i in range(0, len(filepathfull)-1):
    filepath += filepathfull[i] + "\\"
time.sleep(0.1)
print(f"""{version}
{filepath+re.sub('"',"",re.split(",", metadata.events[1])[2])}""")
