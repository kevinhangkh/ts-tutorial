## Interface Segregation

A single fat interface should be broken into multiple interfaces. 

For example, instead of a single interface `Clock` which supports setting alarm, showing temperature and playing radio it should be split into `Alarm` , `RadioPlayer` and `Thermometer`

It is better to split the big interface into smaller ones