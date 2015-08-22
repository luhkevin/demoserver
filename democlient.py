import requests
import random
import time
import logging

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)

handler = logging.FileHandler('/var/log/demo.log')
handler.setLevel(logging.INFO)

formatter = logging.Formatter("%(asctime)s;%(message)s", "%s")
handler.setFormatter(formatter)

logger.addHandler(handler)

port = str(80)
while True:
    dosleep=random.randint(0,1500)
    spin=random.randint(0,2)
    #print "spin is: ", str(spin)

    if dosleep == 750:
        time.sleep(1)

    if spin == 0:
        r = requests.get('http://127.0.0.1:' + port + '/index.html')
        latency = r.elapsed
        logger.info('Got /index;' + str(latency))
    elif spin == 1:
        r = requests.get('http://127.0.0.1:' + port + '/about.html')
        latency = r.elapsed
        logger.info('Got /about;' + str(latency))
    else:
        r = requests.get('http://127.0.0.1:' + port + '/other.html')
        latency = r.elapsed
        logger.info('Got /other;' + str(latency))

