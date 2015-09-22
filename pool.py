import random
# A pool of headers and urls to choose from

class UserAgentFactory():
    def make_ua_header(self, ua_str):
        return ("user-agent", ua_str)

ua_factory = UserAgentFactory()

UAs = ["curl/7.9.8 (i686-pc-linux-gnu) libcurl 7.9.8 (OpenSSL 0.9.6b) (ipv6 enabled)",
       "Mozilla/5.0 (X11; Linux x86_64; rv:17.0) Gecko/20121202 Firefox/17.0 Iceweasel/17.0.1",
       "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko",
       "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36",
       "Mozilla/5.0 (Windows NT 6.2; WOW64; rv:1.8.0.7) Gecko/20110321 MultiZilla/4.33.2.6a SeaMonkey/8.6.55",
       "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A ",
"Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1"]

header_v1 = ("Version", "1")
header_v2 = ("Version", "2")
json_header = ("Content-Type", "application/javascript")
UA_headers = [ua_factory.make_ua_header(ua_str) for ua_str in UAs]

json_obj_1_headers = [header_v1, json_header]
json_obj_2_headers = [header_v2, json_header]
json_obj_3_headers = [header_v2, json_header]

json_obj_1 = {
    'name': 'Gencore',
    'location': 'Sunnyvale',
    'employees': 10
}

json_obj_2 = {
    'name': 'Kevin',
    'age': 22,
    'phone_type': 'Samsung'
}

json_obj_3 = {
    'order': 'pizza',
    'size': 'large',
    'toppings': ['cheese', 'mushrooms', 'onions']
}

urls = ["", "about", "other", "gencore", "kevin", "pizza"]

img1 = 'assets/caltrain.jpg'
img2 = 'assets/iphone.jpg'
img3 = 'assets/ethernet.jpg'
