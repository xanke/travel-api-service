'use strict';

const Controller = require('egg').Controller;

class FlowController extends Controller {
  async date() {
    const { code, date } = this.ctx.params;
    const data = await this.ctx.model.Flow.findAll({
      attributes: [ 'num', 'utime' ],
      where: {
        code,
        date: `${date} 8:00`,
      },
    });

    const list = data.map(item => [ item.utime, item.num ]);
    this.ctx.body = list;
  }

  async latest() {
    const { code } = this.ctx.params;
    const { limit = 20 } = this.ctx.query;

    const data = await this.ctx.model.Flow.findAll({
      attributes: [ 'num', 'utime' ],
      limit,
      where: {
        code,
      },
      order: [[ 'utime', 'DESC' ]],
    });
    const list = data.map(item => [ item.utime, item.num ]);
    this.ctx.body = list;
  }
}

module.exports = FlowController;
