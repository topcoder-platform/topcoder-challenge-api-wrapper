# SearchChallengesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | **integer** | The page number. | default value is 1
**perPage** | **integer** | The number of items to list per page. | default value is 20
**id** | **string(UUID)** | Filter by id, exact match | 
**typeId** | **string(UUID)** | Filter by type id, exact match | 
**track** | **string** | Filter by track, case-insensitive, partial matches are allowed. | 
**name** | **string** | Filter by name, case-insensitive, partial matches are allowed. | 
**description** | **string** | Filter by description, case-insensitive, partial matches are allowed. | 
**timelineTemplateId** | **string(UUID)** | Filter by timeline template id, exact match | 
**reviewType** | **string** | Filter by review type, case-insensitive, partial matches are allowed. | 
**tag** | **string** | Filter by tag name, case-insensitive, partial matches are allowed. | 
**projectId** | **integer** | Filter by project id, exact match. | 
**forumId** | **integer** | Filter by forum id, exact match. | 
**legacyId** | **integer** | Filter by legacy id, exact match. | 
**status** | **string** | Filter by status, case-insensitive, partial matches are allowed. | should be one of ['Draft', 'Canceled', 'Active', 'Completed']
**group** | **string** | Filter by group name, case-insensitive, partial matches are allowed. | 
**createdDateStart** | **string(date-time)** | Filter by created date (lower bound of date range) | 
**createdDateEnd** | **string(date-time)** | Filter by created date (upper bound of date range) | 
**updatedDateStart** | **string(date-time)** | Filter by updated date (lower bound of date range) | 
**updatedDateEnd** | **string(date-time)** | Filter by updated date (upper bound of date range) | 
**createdBy** | **string** | Filter by 'createdBy' field, case-insensitive, partial matches are allowed. | 
**updatedBy** | **string** | Filter by 'updatedBy' field, case-insensitive, partial matches are allowed. | 
**memberId** | **string** | Filter by member, only return challenges this member can access to | 
