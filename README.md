[![codecov](https://codecov.io/gh/cmwylie19/task-service/branch/master/graph/badge.svg?token=BRK6V3DOQA)](https://codecov.io/gh/cmwylie19/task-service) ![Node.js CI](https://github.com/cmwylie19/task-service/workflows/Node.js%20CI/badge.svg)

# Task Service

_This repository of scenarios is intended to explain how to use Gloo Edge as an API Gateway and Kubernetes Ingress Controller to manage a simple task api. The scenarios will take you from building and deploying the application from a source to traffic routing and rate limiting scenarios. The first scenario is a provides a background and howto guide on Cloud Native Application Development and Deployment so feel free to skip it if you already know your way around the cluster._

**NOTE:** It may be advantageous to refer back to this `README.md` while you are doing the scenarios to compare and contract how the application works _without_ Gloo Edge to better understand the transformations that are being made at the proxy level.

## Delete VS
```
kubectl delete vs -n gloo-system default default-0 default-1 default-2 default-3 default-4 default-5 default-6 default-7 default-8 default-9 default-10 default-11 default-12 default-13 default-14 default-15 default-16 default-17 default-18 default-19 default-20 default-21 default-22 default-23
```
