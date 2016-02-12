#!/usr/bin/env node

'use strict'
const program = require('commander')
const pkg = require('../package.json')
const md5 = require('md5')
const fs = require('fs')
const path = require('path')

program
  .version(pkg.version)
  .option('-s, --string <string>', 'the string ')
  .arguments('[files...]')
  .description('md5 util')
  .parse(process.argv)
  
  
let files = program.args
let _string = program.string

if(_string){
  console.log(md5(_string))
}

if(files){
  files.forEach(function(file, index){
    let message = fs.readFileSync(path.join(file),{encoding: 'utf-8'})
    console.log(md5(message))
  })
}
