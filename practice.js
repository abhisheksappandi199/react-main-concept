function alphabetPosition(text) {
    let str=text.replace(/[^A-Z0-9]/ig, "")
    let s=(str.charCodeAt(0) - 64)
    for(let i=1;i<str.length;i++)
    {
        s =s +" "+(str.charCodeAt(i) - 96)
    }

      return s;
    }

    console.log(alphabetPosition("The sunset sets at twelve o' clock."));
