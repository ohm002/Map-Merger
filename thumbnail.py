from modules import Merge
import sys
import re
import os
metadata = Merge.ParseAllBeatmapData(open(sys.argv[1], encoding="utf-8").read().splitlines())
artist = re.split(":",metadata.metadata[2])[1]
title = re.split(":",metadata.metadata[0])[1]
mapper = re.split(":",metadata.metadata[4])[1]
filepathfull = re.split("\\\\",sys.argv[1])
filepath = ""
for i in range(0, len(filepathfull)-1):
    filepath += filepathfull[i] + "\\"

print(f"""{artist} - {title} (Mapped by {mapper})
{filepath+re.sub('"',"",re.split(",", metadata.events[1])[2])}""")
