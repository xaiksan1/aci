# import aws_cdk as core
# import aws_cdk.assertions as assertions
# from provision.provision_stack import ProvisionStack


# # example tests. To run these tests, uncomment this file along with the example
# # resource in provision/provision_stack.py
# def test_sqs_queue_created() -> None:
#     app = core.App()
#     stack = ProvisionStack(app, "provision")
#     template = assertions.Template.from_stack(stack)

#     template.has_resource_properties("AWS::SQS::Queue", {"VisibilityTimeout": 300})
