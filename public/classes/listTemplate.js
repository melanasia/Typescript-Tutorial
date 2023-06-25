export class ListTemplate {
    // register a list container (ul) in the constructor
    // remember, when we have 'private' modifier in front of the property, it automatically assigns whatever value we pass in as the argument to a property on the instance (so we don't need to set it inside of the curly brackets)
    constructor(container) {
        this.container = container;
    }
    // create a render method to render a new 'li' to the container
    // -- accepts arguments: invoice or payment, a heading, a position
    // -- create the html template (li, h4, p)
    // -- add the 'li' template to the start/end of the list
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
