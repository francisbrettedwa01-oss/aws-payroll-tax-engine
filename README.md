# Serverless California Payroll Tax Estimator

An event-driven serverless web application deployed on AWS that calculates federal, FICA, and California state payroll tax withholdings. The system accurately accounts for progressive tax brackets, statutory limits (Social Security cap at $168,600), the 0.9% Additional Medicare tax, and California SDI (1.1%), while persisting calculation logs to DynamoDB.

---

## Architecture Diagram

![Architecture Diagram](architecture-diagram.png)

### Core AWS Components
* **Amazon S3**: Hosts the static web frontend (`index.html`, `style.css`, `script.js`) configured for public static website hosting.
* **Amazon API Gateway**: REST API managing CORS preflight (`OPTIONS` mock integration) and proxying `POST` requests.
* **AWS Lambda (Python 3.12)**: Serverless compute engine executing progressive California and federal tax withholding logic.
* **Amazon DynamoDB**: On-Demand NoSQL audit table (`PayrollTaxAuditLog`) persisting calculation transactions with single-digit millisecond latency.
* **Amazon SNS**: Decoupled pub/sub topic (`PayrollAlertTopic`) triggering email alerts for completed payroll calculations.

---

## Repository Structure

```text
├── CloudFront YAML File/                               # AWS CloudFormation template
├── Payroll Tax Calculator Frontend UI for S3 (website)/# Web client application source
├── Project Screenshots/                                # Console deployment, browser tests, & verification proof
├── architecture-diagram.png                            # Serverless architecture visual
└── README.md                                           # Project documentation and setup guide
