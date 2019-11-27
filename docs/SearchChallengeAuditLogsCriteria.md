# SearchChallengeAuditLogsCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | **integer** | The page number. | default value is 1
**perPage** | **integer** | The number of items to list per page. | default value is 20
**challengeId** | **string** | Filter by challengeId |
**fieldName** | **string** | Filter by fieldName. partial matches are allowed |
**createdDateStart** | **string(date-time)** | Filter by created date (lower bound of date range) |
**createdDateEnd** | **string(date-time)** | Filter by created date (upper bound of date range) |
**createdBy** | **string** | Filter by 'createdBy' field, case-insensitive, partial matches are allowed. |
