# vnu-html-validator
Validate your HTML, CSS and SVG in the CLI without connecting to an online service.

## Why another HTML validation tool
This tool uses the Nu Html Checker (v.Nu) to validate HTML, CSS and SVG files. There are many HTML validation tools out there that use v.Nu, but all tools run against the [online v.Nu service](https://validator.w3.org/nu/). 

vnu-html-validator uses a locally installed java file (vnu.jar) to run the same checks, without the need for an online connection. So you can execute the validator in your local development or deployment environment.

## Configuration
The v.Nu configurations can be done in the vnuconfig.json and vnufilters.txt files.

### URLs
List all URLs for the validation in the urls-array.

### Options
Change or add options to the options-object.

### Filter
Filter error or warning messages.

v.Nu Options and Filter Documentation:
[The Nu Html Checker on GitHub](https://github.com/validator/validator)

## Notice
You need a Java Development Kit (JDK) installed on your device, Java Runtime Environment (JRE) doesn't work in the CLI.

[Java SE Downloads Page](https://www.oracle.com/technetwork/java/javase/downloads/index.html)

