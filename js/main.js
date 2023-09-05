function MudaDesenho() {
    const texto = document.querySelector("h1");
    const imagem = document.querySelector("img");
    const escrita = document.querySelector("p");
    const mes = document.querySelector("#mes").value;
    const dia = document.querySelector("#dia").value;
    const data = "2023" + "/" + mes + "/" + dia;

    if (data >= "2023/05/21" && data <= "2023/06/21") {
        texto.innerHTML = "Gêmeos";
        imagem.setAttribute("src", "img/gemeos.webp");
        imagem.setAttribute("width", "300px");
        escrita.innerHTML = "Saga de Gêmeos é um poderoso cavaleiro de ouro, sendo considerado como o mais poderoso dentre os doze cavaleiros de ouro, ele era um exemplo de conduta e comprometimento para com sua deusa Athena. O cavaleiro de gêmeos possuía um irmão gêmeo chamado Kanon, que propôs que eles matassem Athena e comandassem o mundo.";
    }

    else if (data >= "2023/10/23" && data <= "2023/11/21") {
        texto.innerHTML = "Escorpião";
        imagem.setAttribute("src", "img/escorpiao.webp");
        imagem.setAttribute("width", "300px");
        escrita.innerHTML = "Milo é o Cavaleiro de Ouro da Constelação de Escorpião durante os eventos do Século XX, servindo como o guardião da Casa de Escorpião no Santuário. Tem grande orgulho de seu cargo e torna-se implacável diante dos inimigos."
    }

    else if (data >= "2023/06/21" && data <= "2023/07/21") {
        texto.innerHTML = "Câncer";
        imagem.setAttribute("src", "img/cancer.webp");
        imagem.setAttribute("width", "300px");
        escrita.innerHTML = "O Contador da Morte é o Cavaleiro de Câncer e possui características um tanto diferentes em relação aos demais Cavaleiros de Ouro. O personagem é bastante poderoso e habilidoso, mas sempre é retratado de maneira caricata em razão do seu senso de humor."
    }
    else if (data >= "2023/02/19" && data <= "2023/03/20") {
        texto.innerHTML = "Peixes";
        imagem.setAttribute("src", "img/peixes.jpg");
        imagem.setAttribute("width", "300px");
        escrita.innerHTML = "Afrodite de Peixes é o Cavaleiro de Ouro de Peixes e protetor da última Casa do Zodíaco do século XX. Usa variações de golpes com rosas, como o Rosas Diabólicas Reais. Sua ideia é de que só um poder supremo pode manter a paz e ordem no mundo, mesmo que esse poder provenha do mal."
    }

    else if (data >= "2023/01/21" && data <= "2023/02/19") {
        texto.innerHTML = "Aquário";
        imagem.setAttribute("src", "img/aquarioo.webp");
        imagem.setAttribute("width", "300px");
        escrita.innerHTML = "Camus é um dos 12 Cavaleiros de Ouro que protegem a deusa Athena e o Santuário contra diversas forças malignas. Apesar de seu comportamento frio, ele é um indivíduo bastante controlado e leal aos seus companheiros."
    }

    else if (data >= "2023/07/23" && data <= "2023/08/22") {
        texto.innerHTML = "Leão";
        imagem.setAttribute("src", "img/leao.jpg");
        imagem.setAttribute("width", "300px");
        escrita.innerHTML = "O mais famoso Cavaliero de Leão é Aiolia, que sofreu no santuário após seu irmão, Aiolos, ser acusado de traição. Reconhecido por seu poder, Aiolia foi um dos principais personagens em Gigantomachia e também no anime Soul of Gold."
    }

    else if (data >= "2023/04/21" && data <= "2023/05/20") {
        texto.innerHTML = "Touro";
        imagem.setAttribute("src", "img/touro.webp");
        imagem.setAttribute("width", "300px");
        escrita.innerHTML = "Fazendo jus à sua constelação, Aldebaran de Touro é o maior dos Cavaleiros de Ouro de Atena, um verdadeiro tanque. No entanto, sua velocidade não deve ser subestimada por isso, afinal ele tem um dos golpes mais velozes de Cavaleiros do Zodíaco."
    }

    else if (data >= "2023/08/23" && data <= "2023/08/22") {
        texto.innerHTML = "Virgem";
        imagem.setAttribute("src", "img/virgem.webp");
        imagem.setAttribute("width", "300px");
        escrita.innerHTML = "Shaka de Virgem é o Cavaleiro de Ouro de Virgem do Século XX, que protege a Casa de Virgem no Santuário. Considerado como a reencarnação de Buda, possui um poder de observação que permite conhecer a verdade escondida sob as aparências."
    }

    else if (data >= "2023/03/21" && data <= "2023/03/20") {
        texto.innerHTML = "Áries";
        imagem.setAttribute("src", "img/aries.jpg");
        imagem.setAttribute("width", "300px");
        escrita.innerHTML = "Mu é o Cavaleiro de Ouro de Áries do século XX, que protege a Casa de Áries no Santuário. Mu é um homem de estatura alta e de pele clara. Possui longos e lisos cabelos loiros (lilás claro no Anime), olhos verde-escuros e finas sobrancelhas."
    }

    else if (data >= "2023/09/23" && data <= "2023/10/22") {
        texto.innerHTML = "Libra";
        imagem.setAttribute("src", "img/libra.jpg");
        imagem.setAttribute("width", "300px");
        escrita.innerHTML = "Dohko de Libra fora um lendário e renomado Cavaleiro de Ouro do Santuário de Atena. Dohko era um homem alto, de porte atlético e muscular, pele parda, olhos carmesins (azuis no anime) e cabelos pretos (castanho avermelhado no anime)"
    }

    else if (data >= "2023/11/21" && data <= "2023/12/22") {
        texto.innerHTML = "Sagitário";
        imagem.setAttribute("src", "img/sagitario.webp");
        imagem.setAttribute("width", "300px");
        escrita.innerHTML = "Aiolos de Sagitário é o Cavaleiro de Ouro de Sagitário do século XX."
    }

    else if (data >= "2023/12/22" && data <= "2024/12/31" || data >= "2023/01/01" && data <= "2023/01/20" ) {
        texto.innerHTML = "Capricórnio";
        imagem.setAttribute("src", "img/capricornio.webp");
        imagem.setAttribute("width", "300px");
        escrita.innerHTML = "Shura de Capricórnio é o Cavaleiro de Ouro que protege a Casa de Capricórnio.  No anime, os seus cabelos foram adaptados para verde escuro. Seu olhar é um tanto inexpressivo, ele possui olhos pequenos, e não possui íris grandes e brilhantes, o que é contrastante com o típico rosto triangular e delicado. "
    }

    else {
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src", "img/x.webp");
        imagem.setAttribute("width", "250px");
    }
}