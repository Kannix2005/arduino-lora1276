let LORA = {

  _lora: {},

  _create: ffi('void *mgos_LORA_create(int, int, int, int)'),
  _init: ffi('bool mgos_LORA_init(void *)'),
  _tx: ffi('bool mgos_LORA_txPacket(void *, char *, int)'),
  _rx: ffi('bool mgos_LORA_rxPacket(void *, char *)'),
  _waitIRQ: ffi('bool mgos_LORA_waitIrq(void *, int)'),
  _rxInit: ffi('bool mgos_LORA_rxInit(void *)'),
  _enterStdBy: ffi('void* mgos_LORA_enterStbyMode(void *)'),
  _enterSlp: ffi('void* mgos_LORA_enterSleepMode(void *)'),
  _clrInt: ffi('void* mgos_LORA_clrInterrupt(void *)'),
  _setFreq: ffi('bool mgos_LORA_setFrequency(void *, int)'),
  _setRFParams: ffi('bool mgos_LORA_setRFpara(void *, int, int, int, int)'),
  _setPreamblLen: ffi('bool mgos_LORA_setPreambleLen(void *, int)'),
  _setHeaderMode: ffi('bool mgos_LORA_setHeaderMode(void *, int)'),
  _setPayloadLen: ffi('bool mgos_LORA_setPayloadLength(void *, int)'),
  _setTxPower: ffi('bool mgos_LORA_setTxPower(void *, int)'),
  _setRxTimeout: ffi('bool mgos_LORA_setRxTimeOut(void *, int)'),
  _readSSI: ffi('void *readRSSI(void*, int)'),

  create: function(NSSPin, NRESETPin, txEnPin, rxEnPin){
    //print("Create with: " + NSSPin + " " + NRESETPin + " " + txEnPin + " " + rxEnPin);
    print("Test");
    let obj = Object.create(LORA._proto);
    print("Test2");
    obj.lora = LORA._create(NSSPin, NRESETPin, txEnPin, rxEnPin);
    print("Test3");
    return obj;
  },
  _proto: {
    info: function (){
      return "LORA Interface"
    },
    init: function(){
      return LORA._init(this.lora);
    },
    txPacket: function(sendBuffer, packetLength){
      return LORA._tx(this.lora, sendBuffer, packetLength)
    },
    rxPacket: function(receiveBuffer){
      return LORA._tx(this.lora, receiveBuffer)
    },
    waitIRQ: function(irqmask){
      return LORA._waitIRQ(this.lora, irqmask)
    },
    rxInit: function(){
      return LORA._rxInit(this.lora)
    },
    enterStandby: function(){
      return LORA._enterStdBy(this.lora)
    },
    enterSleep: function(){
      return LORA._enterSlp(this.lora)
    },
    clearInterrupt: function(){
      return LORA._clrInt(this.lora)
    },
    setFrequency: function(freq){
      return LORA._setFreq(this.lora, freq)
    },
    setRFParameters: function(){//////////
      return LORA._setRFParams(this.lora, freq)
    },
    setPreambleLength: function(length){
      return LORA._setPreamblLen(this.lora, length)
    },
    setHeaderMode: function(mode){
      return LORA._setHeaderMode(this.lora, mode)
    },
    setPayloadLength: function(length){
      return LORA._setPayloadLen(this.lora, length)
    },
    setTXPower: function(power){
      return LORA._setTxPower(this.lora, power)
    },
    setRXTimeout: function(timeout){
      return LORA._setRxTimeout(this.lora, timeout)
    },
    readSSI: function(){
      return LORA._readSSI(this.lora)
    },
  }

}