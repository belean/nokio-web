class Config:
    # Replace sender@example.com with your "From" address.
    # This address must be verified with Amazon SES.
    SENDER = "info@sciple.ai"

    # Replace recipient@example.com with a "To" address. If your account
    # is still in the sandbox, this address must be verified.
    RECIPIENT = "info@sciple.ai"  # "info2@sciple.ai"

    # Specify a configuration set. If you do not want to use a configuration
    # set, comment the following variable, and the
    # ConfigurationSetName=CONFIGURATION_SET argument below.
    # CONFIGURATION_SET = "ConfigSet"

    # If necessary, replace us-west-2 with the AWS Region you're using for Amazon SES.
    AWS_REGION = "eu-west-1"

    # The subject line for the email.
    SUBJECT = "Web page Contact-us submission"

    # The character encoding for the email.
    CHARSET = "UTF-8"
