/**
 * Created by felipe on 11/29/17.
 */

var assert = require('chai').assert;
var analize = require('../utils/analysisFunctions');

describe('Compare sample images', () => {

    it('Create Chrome vs Firefox images', async() => {
    analize.analyzeImages('./test/images/sample/Chrome-bloomberg-demo-current',
        './test/images/sample/Firefox-bloomberg-demo-current',
        './test/images/sample/diff/Firefox-bloomberg-demo-diff');
    });

    it('Create Chrome vs Edge images', async() => {
        analize.analyzeImages('./test/images/sample/Chrome-bloomberg-demo-current',
            './test/images/sample/Edge-bloomberg-demo-current',
            './test/images/sample/diff/Edge-bloomberg-demo-diff');
    });

    it('Create Chrome vs IE images', async() => {
        analize.analyzeImages('./test/images/sample/Chrome-bloomberg-demo-current',
            './test/images/sample/IE-bloomberg-demo-current',
            './test/images/sample/diff/IE-bloomberg-demo-diff');
    });

    it('Create Chrome vs Safari images', async() => {
        analize.analyzeImages('./test/images/sample/Chrome-bloomberg-demo-current',
            './test/images/sample/Safari-bloomberg-demo-current',
            './test/images/sample/diff/Safari-bloomberg-demo-diff');
    });
});
