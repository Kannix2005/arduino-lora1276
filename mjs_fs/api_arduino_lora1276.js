let LORA = {


  _create: ffi('void *mgos_LORA_create(int, int, int, int)'),
  _init: ffi('void *mgos_LORA_init(void *)'),


  createLORA: function(NSSPin, NRESETPin, txEnPin, rxEnPin){
    let obj = Object.create(LORA._proto);
    obj.lora = LORA._create();
    let res = LORA._init(obj.lora);
    if (res !== true) {
      return undefined;
    }
    return obj;

  },

}