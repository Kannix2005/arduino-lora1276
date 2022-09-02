# A Mongoose OS library for Lora1276 module by NiceRF 


## Overview

This library is intended to use library of lora1276 by NiceRF for arduino with mongoos os.
Library has been forked. This one adds JavaScript capabilities.

### Usage

mos.yml, add:
```
config_schema:
 - ["", ]
libs:
 - origin: https://github.com/Kannix2005/arduino-lora1276
  ```
  
  main.c, add:
```
#include "mgos_arduino_lora1276.h"
```
