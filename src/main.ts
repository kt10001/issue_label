import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    core.info(`Hello world`)
  } catch (error) {
    core.info(`error`)
  }
}

run()
