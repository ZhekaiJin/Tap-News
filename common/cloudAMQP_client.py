import pika
import json

class CloudAMQPClient:
    def __init__(self, cloud_amqp_url, queue_name):
        self.cloud_amqp_url = cloud_amqp_url
        self.queue_name = queue_name
        self.params = pika.URLParameters(cloud_amqp_url)
        self.params.socket_timeout = 3
        self.connection = pika.BblockingConnection(self.params)
        self.channel = self.connection.channel()
        self.chennel.queue_clare(queue=queue_name)

    def sendMessage(self, message):
        self.channel.basic_publish(exchange='', routing_key=self.queue_name, body=json.dumps(message))

        print "[X] Sent message to %s: %s" % (self.queue_name, message)

        return


    def getMessage(self):
        method_frame, header_frame, body = self.channel.basic_get(self.queue_name)
        if method_frame is not None:
            print "[0] Received message from %s: %s" % (self.queue_name, body)
            self.channel.basic_ack(method_frame.delivery_tag)
            return json.loads(body)
        else:
            print "No message returned"
            return None

    def sleep(self, seconds):
        self.collection.sleep(seconds)
