import requests
import random
import time
import logging

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)

handler = logging.FileHandler('/var/log/demo.log')
handler.setLevel(logging.INFO)

formatter = logging.Formatter("%(levelname)s;%(asctime)s;%(message)s", "%s")
handler.setFormatter(formatter)

logger.addHandler(handler)

while True:
    dosleep=random.randint(0,750)
    spin=random.randint(0,2)
    #print "spin is: ", str(spin)

    if dosleep == 350:
        time.sleep(1)

    if spin == 0:
        requests.get('http://127.0.0.1/index.html')
        logger.info('Got /')
    elif spin == 1:
        requests.get('http://127.0.0.1/about.html')
        logger.info('Got /about')
    else:
        requests.get('http://127.0.0.1/other.html')
        logger.info('Got /other')

