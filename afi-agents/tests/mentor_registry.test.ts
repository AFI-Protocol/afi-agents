import {registerMentor, pairMentor, resetRegistry} from '../registry/mentor_registry';

afterEach(()=>resetRegistry());

test('pairs mentor by tag', ()=>{
  registerMentor({id:'m1',archetype:'quant',expertise:['risk','stats']});
  const mentor = pairMentor({id:'a1',tags:['risk']});
  expect(mentor?.id).toBe('m1');
});
