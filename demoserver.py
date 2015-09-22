import tornado.ioloop
import tornado.web
from tornado.escape import json_encode
import pool

# headers is a list of tuples
class MyHandler(tornado.web.RequestHandler):
    def initialize(self, response, headers):
        self.response = response
        for header in headers:
            if len(header) > 1:
                self.set_header(header[0], header[1])

    def get(self):
        self.write(self.response)

root_data = {"response": "Hello, world!\n", "headers":[()]}
about_data = {"response": "About me\n", "headers":[()]}
other_data = {"response": "Other stuff\n", "headers":[()]}
gencore_data = {"response": json_encode(pool.json_obj_1), "headers":pool.json_obj_1_headers}
kevin_data = {"response": json_encode(pool.json_obj_2), "headers":pool.json_obj_2_headers}
pizza_data = {"response": json_encode(pool.json_obj_3), "headers":pool.json_obj_3_headers}

application = tornado.web.Application([
    (r"/", MyHandler, root_data),
    (r"/about", MyHandler, about_data),
    (r"/other", MyHandler, other_data),
    (r"/gencore", MyHandler, gencore_data),
    (r"/kevin", MyHandler, kevin_data),
    (r"/pizza", MyHandler, pizza_data),
])

if __name__ == "__main__":
    application.listen(8080)
    tornado.ioloop.IOLoop.current().start()
