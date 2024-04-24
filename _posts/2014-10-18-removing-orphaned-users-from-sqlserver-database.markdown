---
layout: post
title: "Removing orphaned users from a SQLServer database"
category: Tech
tags: [Database, SQLServer]
---


If you are using SQLServer probably you had to restore a database from a backup and got stuck with an orphaned user that was no more associated with a login.

Microsoft provides a stored procedure to remove this orphaned user.

<!--more-->

```sql
exec sp_revokedbaccess 'Orphaned_User_Name'
```

You could get an error because the user still owns a schema. To find out which schema is bound with the user you can use this query

```sql
SELECT name FROM  sys.schemas 
WHERE principal_id = USER_ID('Orphaned_User_Name')
```

And then drop the orphaned user from the schema

```sql
ALTER AUTHORIZATION ON SCHEMA::SchemaName TO dbo
GO
DROP USER Orphaned_User_Name
```
