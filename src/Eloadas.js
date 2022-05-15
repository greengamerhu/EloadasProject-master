class Eloadas {
    foglalasok = []
    Számellenörző(sorokSzama, helyekSzama) {
        if (sorokSzama <= 0 || helyekSzama <= 0) {
            throw Error("Nagyobb szám legyen nullánál")
        }
        if (parseInt(sorokSzama) != sorokSzama || parseInt(helyekSzama) != helyekSzama ) {
            throw Error("Egész számot várok")
        }
        if (helyekSzama == "" || sorokSzama == "") {
            throw Error("Adjon meg egy számot")
        }
    }

    constructor(sorokSzama, helyekSzama) {
        try {
            this.Számellenörző(sorokSzama, helyekSzama)
        } catch (error) {
            throw Error("Nem megfelő formátum")
        }
        this.foglalasok = Array.from(Array(sorokSzama), () => new Array(helyekSzama))
        for (let i = 0; i < sorokSzama; i++) {
            for (let j = 0; j < helyekSzama; j++) {
                this.foglalasok[i][j] = false
            }
        }
        console.log(this.foglalasok);
        console.log(this.foglalasok.length);
        console.log(this.foglalasok[0].length);
        
    }
    lefoglal() {
        for (let i = 0; i < this.foglalasok.length; i++) {
            for (let j = 0; j < this.foglalasok[i].length; j++) {
                if (this.foglalasok[i][j] == false) {
                    this.foglalasok[i][j] = true
                    return true
                }
            }
        }
        return false  
}
    getSzabadHelyek() {
       let db = 0
        for (let i = 0; i < this.foglalasok.length; i++) {
            for (let j = 0; j < this.foglalasok[i].length; j++) {
                if (this.foglalasok[i][j] == false) {
                    db++                          
                }
            }
        }
        return db
    } 
    getTeli() {
        for (let i = 0; i < this.foglalasok.length; i++) {
            for (let j = 0; j < this.foglalasok[i].length; j++) {
                if (this.foglalasok[i][j] == false) {
                    return false
                }
            }
        }
        return true
    }
    Foglalt(sorSzam, helySzam) {
        console.log(this.foglalasok);
        console.log(this.foglalasok.length);
        console.log(this.foglalasok[0].length);
        console.log(this.foglalasok[0]);
        console.log(this.foglalasok[0].length);
        try {
            this.Számellenörző(sorSzam, helySzam)
        } catch (error) {
            throw Error("Nem megfelő formátum")
        }
        if (this.foglalasok.length < sorSzam  || this.foglalasok[0].length < helySzam ) {
            throw Error("túl nagy számot adott meg")
        }

        if (this.foglalasok[sorSzam-1][helySzam-1] == true) {
            return true
        }
        else {
            return false
        }

    }
}
    
module.exports = Eloadas