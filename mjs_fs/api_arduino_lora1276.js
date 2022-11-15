let LORA = {

  _lora: {},

  _create: ffi('void* mgos_LORA_create(int, int, int, int)'),
  _init: ffi('bool mgos_LORA_init(void*)'),
  _tx: ffi('bool mgos_LORA_txPacket(void*, int, int)'),
  _rx: ffi('bool mgos_LORA_rxPacket(void*, int)'),
  _waitIRQ: ffi('bool mgos_LORA_waitIrq(void*, int)'),
  _rxInit: ffi('bool mgos_LORA_rxInit(void*, int, int)'),
  _enterStdBy: ffi('void* mgos_LORA_enterStbyMode(void*)'),
  _enterSlp: ffi('void* mgos_LORA_enterSleepMode(void*)'),
  _clrInt: ffi('void* mgos_LORA_clrInterrupt(void*)'),
  _setFreq: ffi('bool mgos_LORA_setFrequency(void*, int)'),
  _setRFParams: ffi('bool mgos_LORA_setRFpara(void*, int, int, int, int)'),
  _setPreamblLen: ffi('bool mgos_LORA_setPreambleLen(void*, int)'),
  _setHeaderMode: ffi('bool mgos_LORA_setHeaderMode(void*, int)'),
  _setPayloadLen: ffi('bool mgos_LORA_setPayloadLength(void*, int)'),
  _setTxPower: ffi('bool mgos_LORA_setTxPower(void*, int)'),
  _setRxTimeout: ffi('bool mgos_LORA_setRxTimeOut(void*, int)'),
  // _readSSI: ffi('void *readRSSI(void*, int)'),

  create: function(NSSPin, NRESETPin, txEnPin, rxEnPin){
    this._lora = this._create(NSSPin, NRESETPin, txEnPin, rxEnPin);
    return this;
  },
  init: function(){
    return this._init(this._lora);
  },
  txPacket: function(sendBuffer, packetLength){
    return this._tx(this._lora, sendBuffer, packetLength)
  },
  rxPacket: function(receiveBuffer){
    return this._tx(this._lora, receiveBuffer)
  },
  waitIRQ: function(loraObj){

  },
  rxInit: function(loraObj){

  },
  enterStandby: function(loraObj){

  },
  enterSleep: function(loraObj){

  },
  clearInterrupt: function(loraObj){

  },
  setFrequency: function(loraObj){

  },
  setRFParameters: function(loraObj){

  },
  setPreambleLength: function(loraObj){

  },
  setHeaderMode: function(loraObj){

  },
  setPayloadLength: function(loraObj){

  },
  setTXPower: function(loraObj){

  },
  setRXTimeout: function(loraObj){

  },
  doReadSSI: function(loraObj){

  }

}