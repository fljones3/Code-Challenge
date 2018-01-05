import OhmCalculator  from './ohmValueCalculator';

test('calculates a resistance value of 6700 with Blue, Violet, Red, Gold',  () => {
    const calc = new OhmCalculator();
    expect(calc.CalculateOhmValue('Blue', 'Violet', 'Red', 'Gold')).toBe(6700);
});

test('calculates a min resistance value of 6365 with Blue, Violet, Red, Gold',  () => {
    const calc = new OhmCalculator();
    expect(calc.CalculateMinResist('Blue', 'Violet', 'Red', 'Gold')).toBe(6365);
});

test('calculates a max resistance value of 7035 with Blue, Violet, Red, Gold',  () => {
    const calc = new OhmCalculator();
    expect(calc.CalculateMaxResist('Blue', 'Violet', 'Red', 'Gold')).toBe(7035);
});

test('retrieves correct progress bar style when Red is passed',  () => {
    const calc = new OhmCalculator();
    expect(calc.GetStyle('Red')).toBe('progress-bar progress-bar-striped progress-bar-animated bg-danger');
});

test('throws typeerror when a null value is received for a color band',  () => {
    function testCalc() {
        const calc = new OhmCalculator();
        calc.CalculateOhmValue('Blue', 'Violet', null, 'Gold');
    }

    expect(testCalc).toThrowError(TypeError);
});

test('throws typeerror when a color band cannot be found',  () => {
    function testCalc() {
        const calc = new OhmCalculator();
        calc.CalculateOhmValue('Blue', 'Violet', 'Aquamarine', 'Gold');
    }
    
    expect(testCalc).toThrowError(TypeError);
});

test('throws typeerror when a color band cannot be found',  () => {
    function testCalc() {
        const calc = new OhmCalculator();
        calc.CalculateMaxResist('Blue', 'Violet', 'Aquamarine', 'Gold');
    }
    
    expect(testCalc).toThrowError(TypeError);
});

test('throws typeerror when a null value is received',  () => {
    function testCalc() {
        const calc = new OhmCalculator();
        calc.CalculateMaxResist('Blue', 'Violet', null, 'Gold');
    }
    
    expect(testCalc).toThrowError(TypeError);
});

test('throws typeerror when a color band cannot be found',  () => {
    function testCalc() {
        const calc = new OhmCalculator();
        calc.CalculateMinResist('Blue', 'Violet', 'Aquamarine', 'Gold');
    }
    
    expect(testCalc).toThrowError(TypeError);
});

test('throws typeerror when a null value is received',  () => {
    function testCalc() {
        const calc = new OhmCalculator();
        calc.CalculateMinResist('Blue', 'Violet', null, 'Gold');
    }
    
    expect(testCalc).toThrowError(TypeError);
});

test('throws typeerror when a color band cannot be found',  () => {
    function testCalc() {
        const calc = new OhmCalculator();
        calc.GetStyle('Aquamarine');
    }
    
    expect(testCalc).toThrowError(TypeError);
});

test('throws typeerror when a null value is received',  () => {
    function testCalc() {
        const calc = new OhmCalculator();
        calc.GetStyle(null);
    }
    
    expect(testCalc).toThrowError(TypeError);
});