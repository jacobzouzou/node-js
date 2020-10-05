const customerApi = require('./api');
const assert= require('chai').assert;

describe('Customer API  Module',()=>{
    it('Should return true',(done)=>{
        customerApi.test((result) => { 
            assert.isTrue(result===true);
            done();     
        });
    });
    it('Should return a list of customers',(done)=>{
        customerApi.getCustomers(customers => { 
            assert.isTrue(customers!==null);
            done();     
        });
    });

    it('Should return a list of cours',(done)=>{
        //customers come from done()
        customerApi.getCours(cours => { 
            assert.isTrue(cours.length>0);
            done();     
        });
    });
});

function done (){
 console.log("done");
}
//other mocha functions
//const customerApi = require('./customerApi) 
//const assert = require('chai').assert  
// describe('Customer API module', () => {   
//     before(() => { /* this run once before all tests of this module*/ }); 
//     beforeEach(() => { /* this run before every test of this module*/ });
//     after(() => { /* this run once after all tests of this module*/ }); 
//     afterforeEach(() => { /* this run before every test of this module*/ });
// });