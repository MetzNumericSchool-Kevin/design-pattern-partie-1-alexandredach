// Composite

interface Component {
  display(indentation: string): void;
}

class Department implements Component {
  private children: Array<Component> = [];

  constructor(private name: string) {}

  display(indentation: string = ""): void {
    console.log(indentation + " Department : " + this.name);
    this.children.forEach((child) => {
      child.display(indentation + indentation);
    });
  }

  add(component: Component): void {
    this.children.push(component);
  }
}

class Employee implements Component {
  constructor(private firstName: string, private lastName: string) {}

  display(indentation: string = ""): void {
    console.log(indentation + " Employee : " + this.firstName + this.lastName);
  }
}

const directionGenerale = new Department("Direction Générale");
const secretariatGenerale = new Department("Secretariat Général");
const dptTech = new Department("Dpt Tech");
const dptCom = new Department("Dpt Com");
const it = new Department("IT");
const web = new Department("Web");

const employee1 = new Employee("Alexandre", "Dach");

directionGenerale.add(employee1);
directionGenerale.add(secretariatGenerale);
directionGenerale.add(dptTech);
directionGenerale.add(dptCom);

dptTech.add(it);
dptCom.add(web);

dptCom.add(employee1);

it.add(employee1);
it.add(employee1);
it.add(employee1);

web.add(employee1);

directionGenerale.display("-");

// Direction Générale
//    Alexandre Dach

// Département : Direction Générale
//     Département : Secrétariat Général
//          Employé : Alexandre Dach
