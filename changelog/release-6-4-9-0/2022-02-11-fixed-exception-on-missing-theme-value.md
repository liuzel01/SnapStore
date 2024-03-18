---
title: Fixed exception on missing theme field value
issue: NEXT-19276
author: Stefan Sluiter
author_email: s.sluiter@snapadmin.net
---
# Storefront
* Changed `Shopware\Storefront\Theme\ThemeService::getThemeConfiguration` to not throw an excpetion if no initial value is given for a theme config field
