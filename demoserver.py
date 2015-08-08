import tornado.ioloop
import tornado.web

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.write("Hello, world")

class AboutHandler(tornado.web.RequestHandler):
    def get(self):
        self.write("About me")

class OtherHandler(tornado.web.RequestHandler):
    def get(self):
        self.write("Other stuff")

application = tornado.web.Application([
    (r"/", MainHandler),
    (r"/about", AboutHandler),
    (r"/other", OtherHandler),
])

if __name__ == "__main__":
    application.listen(8080)
    tornado.ioloop.IOLoop.current().start()
