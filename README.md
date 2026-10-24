# Serverless California Payroll Tax Estimator

An event-driven serverless web application deployed on AWS that calculates federal, FICA, and California state payroll tax withholdings. The engine accounts for progressive tax brackets, statutory caps (Social Security at $168,600), the 0.9% Additional Medicare tax, and California SDI (1.1%), while persisting calculation logs to DynamoDB.

---

## Architecture Diagram

![Architecture Diagram](architecture-diagram.png)

### Key Architecture Components
* **Amazon S3**: Hosts the static web frontend (`index.html`, `style.css`, `script.js`).
* **Amazon API Gateway**: REST API handling CORS preflight (`OPTIONS` mock integration) and routing `POST` requests.
* **AWS Lambda (Python 3.12)**: Serverless compute engine executing progressive California and federal tax logic.
* **Amazon DynamoDB**: On-Demand NoSQL table persisting audit calculation logs with single-digit millisecond latency.
* **Amazon SNS**: Decoupled pub/sub messaging topic alerting administrators of completed calculations.

---

## Repository Structure

```text
├── CloudFront YAML File/                               # AWS CloudFormation / SAM templates
├── Payroll Tax Calculator Frontend UI for S3 (website)/# Web client application source
├── Project Screenshots/                                # Evidence: CLI curl, browser, & AWS console
├── architecture-diagram.png                            # Serverless cloud architecture visual
└── README.md                                           # Project documentation and deployment guide
