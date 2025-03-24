const myModal = new bootstrap.Modal("#register-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

checkLogged();

//LOGAR NO SISTEMA
document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault(); //controla o comportamento do evento, nesse caso não mandar para uma página externa. Login será controlado aqui.

    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value; 
    const checkSession = document.getElementById("session-check").checked;

    const account = getAccount(email);

    if(!account) {
        alert("Ops! Verifique o usuário ou a senha.");
        return;
    }

    if(account) {
        if(account.password !== password) {
            alert("Ops, Verifique o usuário ou a senha");
            return;
        }

        saveSession(email, checkSession);

        window.location.href = "home.html";
    }
});


// CRIAR CONTA
document.getElementById("create-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email-create-input").value;
    const password = document.getElementById("password-create-input").value;
    
    if(email.length < 5) {
        alert("Preencha o campo com um e-mail válido.");
        return;
    }

    if(password.length < 4) {
        alert("Preencha a senha com no mínimo 4 dígitos.");
    }

    saveAccount({ //chamando função saveAccount
        login: email,
        password: password,
        transactions: []
    });

    myModal.hide(); //fecha a modal se estiver tudo certo

    alert("Conta criada com sucesso.");
});

function checkLogged() {
    if(session) {
        sessionStorage.setItem("logged", session);
        logged = session;
    }

    if(logged) {
        saveSession(logged, session);
        window.location.href = "home.html";
    }
}

function saveAccount(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
} //setItem: guarda o valor da chave declarada "data"
//localsotarge armazena strings, json.stringfy converte o objeto

function saveSession(data, saveSession) {
    if(saveSession) {
        localStorage.setItem("session", data); //info login salvas (no localStorage)
    }
    sessionStorage.setItem("logged", data); //info login não salvas, apaga quando fecha sessão.
}

function getAccount(key) {
    const account = localStorage.getItem(key);
//getItem: busca e retorna o valor armazenado

    if(account) {
        return JSON.parse(account);
    } //json.parse: converte string json em objeto js

    return "";
}

