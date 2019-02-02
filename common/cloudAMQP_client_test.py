from cloudAMQP_client import CloudAMQPClient

CLOUDAMQP_URL = "amqp://zvxtarws:Iov8iKPgnuTSLZ9i097nI6JlkN8V5hv-@otter.rmq.cloudamqp.com/zvxtarws"

TEST_QUEUE_NAME = 'test'

def test_basic():
    client = CloudAMQPClient(CLOUDAMQP_URL, TEST_QUEUE_NAME)

    sentMsg = {'test':'demo'}
    client.sendMessage(sentMsg)
    client.sleep(10)
    receivedMsg = client.getMessage()
    assert sentMsg == receivedMsg
    print "test_basic passed"

if __name__ == "__main__":
    test_basic()
