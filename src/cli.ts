#!/usr/bin/env node

import { Command } from 'commander'

import { orderPizza } from './index'

const program = new Command()

program
  .version('0.1.0')
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq-sauce', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
  .parse(process.argv)

let opts = program.opts() as any

orderPizza({
  peppers: opts.peppers,
  pineapple: opts.pineapple,
  bbqSauce: opts.bbqSauce,
  cheeseType: opts.cheese
}).then(result => console.log(result.message))
