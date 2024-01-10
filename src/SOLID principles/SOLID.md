## Single Responsibility Principle

A class should have only one responsibility

## Open-Closed Principle

An entity should be open for extension but closed for modification

## Liskov Substitution

A parent class can be substituted by its children classes without breaking the application.

All the parent class functions must be applicable to the children class.

## Interface Segregation

A single fat interface should be broken into multiple interfaces. 

For example, instead of a single interface `Clock` which supports setting alarm, showing temperature and playing radio it should be split into `Alarm` , `RadioPlayer` and `Thermometer`

It is better to split the big interface into smaller ones

## Dependency Inversion

A high level class should not depend upon a lower level class
