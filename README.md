# fet
Front-end template and translation tool  


#### TODO:
---
- [ ] language guesser in this order:
    - localStorage.getItem('fet_current_lang') ??  'en';
    - url.domain/**lang**/ 
    - **lang**.url.domain 
    - url.domain?lang=**lang** 
    - url.domain?language=**lang**
