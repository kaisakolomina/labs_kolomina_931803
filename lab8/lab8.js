document.addEventListener("DOMContentLoaded", add);
function add(){
    document.getElementById('text').textContent = '';
    let div = document.createElement('div');
    div.className = 'field';
    let input1 = document.createElement('input');
    input1.type = 'text';
    let input2 = document.createElement('input');
    input2.type = 'text';
    let but1 = document.createElement('input');
    but1.type = 'button';
    but1.value = '\u2191';
    let but2 = document.createElement('input');
    but2.type = 'button';
    but2.value = '\u2193';
    let but3 = document.createElement('input');
    but3.type = 'button';
    but3.value = '\u2613';
    document.getElementById('main').append(div);
    div.append(input1);
    div.append(input2);
    div.append(but1);
    div.append(but2);
    div.append(but3);
    but3.onclick = function(){div.remove(); document.getElementById('text').textContent = ''};
    but1.onclick = function(){
        document.getElementById('text').textContent = '';
        let main = document.getElementById('main');
        for(var i in main.children) {
            if(main.children[i] == div) break;
        }
        if(i>0){
            let old1 = main.children[i-1].getElementsByTagName('input')[0].value;
            let old2 = main.children[i-1].getElementsByTagName('input')[1].value;
            main.children[i-1].getElementsByTagName('input')[0].value = input1.value;
            main.children[i-1].getElementsByTagName('input')[1].value = input2.value;
            input1.value = old1;
            input2.value = old2;
        }
    };
    but2.onclick = function(){
        document.getElementById('text').textContent = '';
        let main = document.getElementById('main');
        for(var i in main.children) {
            if(main.children[i] == div) break;
        }
        i = Number(i) + 1;
        if(i<main.children.length){
            let old1 = main.children[i].getElementsByTagName('input')[0].value;
            let old2 = main.children[i].getElementsByTagName('input')[1].value;
            main.children[i].getElementsByTagName('input')[0].value = input1.value;
            main.children[i].getElementsByTagName('input')[1].value = input2.value;
            input1.value = old1;
            input2.value = old2;
        }
    };

}

function save(){
    let mas = document.getElementById('main').getElementsByTagName('div');
    let out = '{ ';
    for (let elem of mas) {
        out += String(elem.getElementsByTagName('input')[0].value)+':  '+String(elem.getElementsByTagName('input')[1].value)+';  ';
    }
    out+='}'
    document.getElementById('text').textContent = out;

}