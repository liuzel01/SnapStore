---
title: Fix entity mapping service
issue: NEXT-26081
author: Sebastian Seggewiss
author_email: s.seggewiss@snapadmin.net
author_github: @seggewiss
---
# Administration
* Changed `entity-mapping.service.js` to use `Shopware.EntityDefinition.getDefinitionRegistry()` instead of `Entity.getDefiniton`
