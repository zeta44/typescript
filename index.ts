// Crie, em TypeScript, uma interface chamada UserProps, que conterá as propriedades firtsName,lastName, username, email, password, cpf, contacto e isAdmin. Após criar a interface, crie uma classe User implementando essa interface. Faça os métodos getter e setter de cada propriedade.

interface UserProps {
    firtsName: string
    lastName: string
    username: string
    email: string
    password: string
    cpf: string
    contacto: string
    isAdmin: boolean
}

class User implements UserProps {
    firtsName!: string
    lastName!: string
    username!: string
    email!: string
    password!: string
    cpf!: string
    contacto!: string
    isAdmin!: boolean

    constructor(
        firtsName: string,
        lastName: string,
        username: string,
        email: string,
        password: string,
        cpf: string,
        contacto: string,
        isAdmin: boolean
    ) {
        this.firtsName = firtsName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
        this.cpf = cpf;
        this.contacto = contacto;
        this.isAdmin = isAdmin;

    };

    escreverPropriedades() {
        console.log(this.firtsName);
        console.log(this.lastName);
        console.log(this.username);
        console.log(this.email);
        console.log(this.password);
        console.log(this.cpf);
        console.log(this.contacto);
        console.log(this.isAdmin);

    };

    getFirtsName() {
        return this.firtsName;
    }

    setFirtsName(firtsName: string) {
        this.firtsName = firtsName;
    }

    getLastName() {
        return this.lastName;
    }

    setLastName(lastName: string) {
        this.lastName = lastName;
    }

    getUserName() {
        return this.username;
    }

    setUserName(UserName: string) {
        this.UserName = UserName;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email: string) {
        this.email = email;
    }

    getPassword() {
        return this.password;
    }

    setPassword(password: string) {
        this.password = password;
    }

    getCpf() {
        return this.cpf;
    }

    setCpf(cpf: string) {
        this.cpf = cpf;
    }

    getContacto() {
        return this.contacto;
    }

    setContacto(contacto: string) {
        this.contacto = contacto;
    }

    getIsAdmin() {
        return this.contacto;
    }

    setIsAdmin(isAdmin: boolean) {
        this.isAdmin = isAdmin;
    }
    
};

let user = new User('Paulo', 'Gonçalves', 'Paulo_gonçalves', 'kfkfkfk@jfhdhhd.com', 'ksjkdjdg0000', '756.654.852-20','(85) 55548-2107', true)

console.log(user)