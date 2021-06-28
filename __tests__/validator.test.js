'use strict';
const validatorMiddleware = require('../src/middleware/logger');

describe('validator Middleware',()=>{

  let consoleSpy;
  const req = {};
  const res = {};
  const next = jest.fn()

  beforeEach(()=>{
    consoleSpy = jest.spyOn(console,'log').mockImplementation();
  })
  afterEach(()=>{
    consoleSpy.mockRestore();
  })

  it('logs output correctly',()=>{
    validatorMiddleware(req,res,next);
    expect(consoleSpy).toHaveBeenCalled()
  })
  it('moves to the next middleware',()=>{
    validatorMiddleware(req,res,next);
    expect(next).toHaveBeenCalledWith();
  })
})