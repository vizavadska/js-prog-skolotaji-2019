let masivs=[];

    function Papildini(){
      const a=parseInt(prompt('ievadi skaitli'));
      masivs.push(a);
      print();
    }
    function Samazini(){
      masivs.pop();
      print()
    }

    function Ievieto() {
    masivs.splice(2, 0, 10)
    print()
    }

    function print(){
      document.getElementById('Izvade').innerHTML=masivs;
    }

    function Dzes(i) {
    masivs.splice(3, 2);
    print()
}