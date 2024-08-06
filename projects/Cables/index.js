const { cexExports } = require('../helper/cex')

const config = {
  avax: {
    owners: [
       '0xD7961aa9ad7b6a61F2a8958C44DbF4b17DB57EBB',
    ],
  },
  arbitrum: {
    owners: [
      '0xD7961aa9ad7b6a61F2a8958C44DbF4b17DB57EBB',
    ]
  }
}

module.exports = cexExports(config)