const Eloadas = require('./Eloadas');
let e
beforeEach(() => {
    e = new Eloadas(2, 3)

});
test('ha nullát kap a construktor hibát dob', () => {
    expect(() => {
        new Eloadas(0,0)
    }).toThrowError();
});
test('ha nullánál kisebb  számot kap a construktor hibát dob', () => {
    expect(() => {
        new Eloadas(-1,-2)
    }).toThrowError();
});
test('ha nullánál kisebb  számot kap a construktor hibát dob', () => {
    expect(() => {
        new Eloadas(-1,-2)
    }).toThrowError();
});
test('ha üres stringet kap a construktor hibát dob', () => {
    expect(() => {
        new Eloadas("","")
    }).toThrowError();
});
test('ha szövegesen számot kap a construktor nem dob hibát', () => {
    expect(() => {
        new Eloadas("1","2")
    }).not.toThrowError();
});
test('lefoglal müködik és igazat ad vissza', () => {
    expect(() => {
      e.lefoglal()  
    }).toBeTruthy();
});
test('lefoglal nem müködik ha minden asztal le van foglalva', () => {
    e.lefoglal()  
    e.lefoglal()  
    e.lefoglal()  
    e.lefoglal()  
    e.lefoglal()  
    e.lefoglal()
    expect(e.lefoglal()).toBeFalsy();
});
test('getSzabadHelyek ha mindegyeik szabad', () => {
    expect(e. getSzabadHelyek()).toBe(6);
});
test('getSzabadHelyek ha mindegyeik foglalt', () => {
    e.lefoglal()  
    e.lefoglal()  
    e.lefoglal()  
    e.lefoglal()  
    e.lefoglal() 
    e.lefoglal()
    expect(e. getSzabadHelyek()).toBe(0);
});
test('getSzabadHelyek ha 3 hely szabad', () => {
    e.lefoglal()  
    e.lefoglal()  
    e.lefoglal()
    expect(e. getSzabadHelyek()).toBe(3);
});
test('getTeli ha telivan a terem és igazat dob', () => {
    e.lefoglal()  
    e.lefoglal()  
    e.lefoglal()  
    e.lefoglal()  
    e.lefoglal() 
    e.lefoglal()
    expect(e.getTeli()).toBeTruthy();
});
test('getTeli ha nincs teli a terem és hamisat dob', () => {
    e.lefoglal()  
    e.lefoglal()  
    e.lefoglal()  
    e.lefoglal()  
    e.lefoglal()
    expect(e.getTeli()).toBeFalsy();
});
test('Foglalt ha az 1sor 1 helye foglalt és igazat dob', () => {
    e.lefoglal()  
    expect(e.Foglalt(1,1)).toBeTruthy();
});
test('Foglalt ha az 1sor 2 helye foglalt és igazat dob', () => {
    e.lefoglal() 
    e.lefoglal() 
    expect(e.Foglalt(1,2)).toBeTruthy();
});
test('Foglalt ha az 1sor 3 helye nem foglalt és hamisat dob', () => {
    e.lefoglal() 
    e.lefoglal() 
    expect(e.Foglalt(1,3)).toBeFalsy();
});
test('Foglalt ha nagyobb számot add meg mint a sorszám', () => {
    expect(() => {
      e.Foglalt(3,3)
    }).toThrowError();
});
test('Foglalt ha nagyobb számot add meg mint a helyszám', () => {
    expect(() => {
      e.Foglalt(2,4)
    }).toThrowError();
});

