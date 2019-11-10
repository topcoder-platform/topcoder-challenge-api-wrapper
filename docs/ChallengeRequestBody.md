# ChallengeRequestBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachmentIds** | **array of string** |  | 
**challengeSettings** | **array of [**ChallengeSetting**](ChallengeSetting.md)** |  | 
**description** | **string** |  | 
**forumId** | **integer** | the forum id | 
**groups** | **array of string** |  | 
**name** | **string** |  | 
**phases** | **array of [**Phase**](Phase.md)** |  | 
**prizeSets** | **array of [**PrizeSet**](PrizeSet.md)** |  | 
**projectId** | **integer** | the project id | 
**reviewType** | **string** | the review type | 
**startDate** | **string(date-time)** | ISO-8601 formatted date times (YYYY-MM-DDTHH:mm:ss.sssZ) | 
**status** | **string** | the status | should be one of ['Draft', 'Canceled', 'Active', 'Completed']
**tags** | **array of string** |  | 
**timelineTemplateId** | **string(UUID)** |  | 
**track** | **string** |  | 
**typeId** | **string(UUID)** |  | 
**winners** | **array of [**Winner**](Winner.md)** |  | 
