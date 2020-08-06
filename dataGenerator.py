f = open("data.txt","w")
timestamp = 0
_raw = "abc123abc123abc123abc123abc123" + str(timestamp)
while timestamp<100 :
    f.write("{")
    f.write(f"""
        'timestamp' : {timestamp},
        '_raw': \"{_raw}\"
    """)
    f.write("},")
    timestamp +=1
    _raw = "abc123abc123abc123abc123abc123" + str(timestamp)