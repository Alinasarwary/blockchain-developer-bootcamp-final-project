
## Use Modifiers Only for Validation
All modifiers in contract validate a condition with require keyword. Use modifiers to replace duplicate condition checks in multiple functions, such as isOwner(), otherwise use require  inside the function.


## Floating Pragma (SWC-103)
Specific compiler pragma 0.8.7 used in this contract to avoid accidential bugs