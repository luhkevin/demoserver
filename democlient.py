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
    dosleep=random.randint(0,500)
    spin=random.randint(0,2)
    #print "spin is: ", str(spin)

    if dosleep == 150:
        time.sleep(1)

    if spin == 0:
        requests.get('http://127.0.0.1:8080')
        logger.info('Got /')
    elif spin == 1:
        requests.get('http://127.0.0.1:8080/about')
        logger.info('Got /about')
    else:
        requests.get('http://127.0.0.1:8080/other')
        logger.info('Got /other')

