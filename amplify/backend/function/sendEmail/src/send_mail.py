import json
import boto3
from botocore.exceptions import ClientError
from ..config import Config


class Email:
    def __init__(self, body):
        self.config = Config()
        try:
            self.body = json.loads(body)
        except TypeError as exc:
            self.body = body

    def run(self):
        # Create a new SES resource and specify a region.
        self.client = boto3.client("ses", region_name=self.config.AWS_REGION)

        # print(f"Body== {self.body}")
        # The email body for recipients with non-HTML email clients.
        BODY_TEXT = (
            "Nokio Contact us\r\n"
            f"{self.body.get('email')} wrote: {self.body.get('message')}\r\n"
            "This email was sent with Amazon SES using the "
            "AWS SDK for Python (Boto)."
        )

        # The HTML body of the email.
        BODY_HTML = f"""<html>
        <head></head>
        <body>
            <h1>Nokio Contact Us</h1>
            <p>{self.body.get('email')} wrote:</p>
            <br/>
            <p>{self.body.get('message')}</p>
            <br/>
            <br/>
            <p><a href='https://aws.amazon.com/ses/'>Amazon SES</a> using the
                <a href='https://aws.amazon.com/sdk-for-python/'>
                AWS SDK for Python (Boto)</a>.</p>
        </body>
        </html>
                    """
        if not (recipient := self.body.get("reciever")):
            recipient = self.config.RECIPIENT

        # Try to send the email.
        try:
            # Provide the contents of the email.
            response = self.client.send_email(
                Destination={
                    "ToAddresses": [
                        recipient,
                    ],
                },
                Message={
                    "Body": {
                        "Html": {
                            "Charset": self.config.CHARSET,
                            "Data": BODY_HTML,
                        },
                        "Text": {
                            "Charset": self.config.CHARSET,
                            "Data": BODY_TEXT,
                        },
                    },
                    "Subject": {
                        "Charset": self.config.CHARSET,
                        "Data": self.config.SUBJECT,
                    },
                },
                Source=self.config.SENDER,
                # If you are not using a configuration set, comment or delete the
                # following line
                # ConfigurationSetName=CONFIGURATION_SET,
            )
        # Display an error if something goes wrong.
        except ClientError as e:
            print(e.response["Error"]["Message"])
            return False
        else:
            print("Email sent! Message ID:")
            print(response["MessageId"])
            return True


if __name__ == "__main__":
    test = {
        "body": {
            "email": "info@belean.se",
            "name": "Mikael Backlund",
            "message": "be Lean/ Nokio FTW",
        }
    }
    email = Email(test)
    email.run()
