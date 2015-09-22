import requests
import random
import time
import logging
import pool

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)

handler = logging.FileHandler('/var/log/demo.log')
handler.setLevel(logging.INFO)

formatter = logging.Formatter("%(asctime)s;%(message)s", "%s")
handler.setFormatter(formatter)

logger.addHandler(handler)

port = str(8080)

while True:
    dosleep=random.randint(0,1500)

    if dosleep == 750:
        time.sleep(1)
    elif dosleep == 1000:
        r = requests.get('http://127.0.0.1:' + port + '/bogus404')
    else:
        url = random.choice(pool.urls)
        r = requests.get('http://127.0.0.1:' + port + '/' + url)
        latency = r.elapsed
        logger.info('Got ' + url + "; " + str(latency))
