---
sidebar_position: 2
---

# Drafty Login Post Handler

```mermaid
sequenceDiagram

User ->>+ LoginPost : User submits the login page
LoginPost ->>+ CUIDB : Checks for Migration eligibility else throws exception
 

```

