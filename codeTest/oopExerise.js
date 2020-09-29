
const verificationProvider = ["abc-1", "abc-2", "abc-3", , "abc-4", , "abc-5",
    "abc-6", "abc-7", "abc-8", "abc-9", "abc-10",
    "abc-11", "abc-12", "abc-13", "abc-14", "abc-15",];

class Domain {
    constructor(name, yearOfRegistration) {
        this.name = name;
        this.yearOfRegistration = yearOfRegistration;
        this.renewYear = null;
    }

    //Domain name registration
    register(provider, contactId) {

        const error = [];
        //check provider 
        if (!this.verifiedProvider(provider)) {
            error.push("Invalid provider.");
        };
        //check contact id
        if (contactId.length !== 6) {
            error.push("Contact ID must be 6 charactors.");
        };
        //verified domain name
        if (this.name.length < 10) {
            error.push("Domain name must be at least 10 charactos long.");
        };
        //check error and return list of error
        if (error.length > 0) {
            return error;
        };
        //return domain name and domain expiration date
        //use helper function for expration date 
        return {
            damain: this.name,
            expirationDate: this.getExpirationDate()
        };
    }

    //Domain name renewal
    renewDate(name, renewYear) {
        this.renewYear = renewYear;
        //format date
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        
        // sum current year with new year
        const newDate = this.yearOfRegistration + renewYear;

        // create expiration date
        const newExpirationDate = new Date(new Date()
            .setFullYear(new Date()
            .getFullYear() + newDate)
        );
        
        // check name input 
        if (name !== this.name) {
            return "Incorrect domain name.";
        };
        return {
            domain: this.name,
            expirationDate: newExpirationDate.toLocaleDateString("en-US", options),
        };
    }

    //Domain deletion
    deleteDomain(name) {
        //checkname input
        if (name !== this.name) {
            return `Incorrect domain name.`;
        };

        //delete domain name
        delete this.name;

        return 'Deleted domain successfully';
    };

    //Domain info
    getDomainInfo(name) {
        //use helper function to get expiration date
        let date = this.getExpirationDate();

        //check input name
        if (name !== this.name) {
            return `Incorrect domain name.`;
        };

        //check if renew expiration date
        if (this.renewDate(name, this.renewYear)) {
            date = this.renewDate(name, this.renewYear);
        };

        return {
            domain: name,
            expirationDate: date.expirationDate
        };
    }

    // ====== Helper functions ========
    //check provider
    verifiedProvider(provider) {
        let verified = false;

        for (let i = 0; i < verificationProvider.length; i++) {
            if (provider === verificationProvider[i]) {
                verified = true;
            }
        }
        return verified;
    }

    //convert `yearOfRegistration` number to expiration date
    getExpirationDate() {
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const years = this.yearOfRegistration;
        const expirationDate = new Date(new Date()
                                .setFullYear(new Date()
                                .getFullYear() + years)
            );
      
        return expirationDate.toLocaleDateString("en-US", options);
    }
}








