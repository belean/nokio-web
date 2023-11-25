import json
from send_mail import Email


def handler(event, context):
    print("received event:")
    print(event)

    # User code
    send_mail = Email(event.get("body"))
    status = send_mail.run()

    return {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
        "body": json.dumps(f"send_email: {status}"),
    }
