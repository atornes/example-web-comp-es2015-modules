export default class ExComponentTwo extends HTMLElement {
    // Observed attributes. Attribute changed callback will receive changes to these
    static get observedAttributes() {
        return ['title'];
    }

    // The components template
    get view() {
        return `<template>
                    <style>
                        /* Best practice default styles. Set a default display type and respect the hidden attribute */
                        :host { display: block; }
                        :host([hidden]) { display: none }
                        
                        /* Example styles */
                        :host {
                            margin: 10px 0;
                            padding: 5px;
                            border: 1px dotted #000;
                            border-radius: 4px;
                        }
                
                        span {
                            color: blue;
                        }
                    </style>
                
                    <span id="reverse"></span>
                </template>`;
    }

    // Example property
    get title() { return this.getAttribute('title'); }
    set title(val) { this.setAttribute('title', val); }

    constructor() {
        super();

        // Set a property to see if the element has been inserted in DOM.
        // Useful for checking if the element has been connected before making changes to the markup.
        this.connected = false;

        // Create a shadow root
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        // Called every time the element is inserted into the DOM. 
        // Useful for running setup code, such as fetching resources or rendering. 
        // Generally, you should try to delay work until this time.

        const template = this.getTemplate();
        this.importTemplate(template);

        this._upgradeProperties();

        this.attachEvents();
        this.updateValues();

        this.connected = true;
    }

    disconnectedCallback() {
        // Called every time the element is removed from the DOM. 
        // Useful for running clean up code.

        this.detachEvents();
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        // Called when an observed attribute has been added, removed, updated, or replaced. 
        // Also called for initial values when an element is created by the parser, or upgraded. 
        // Note: only attributes listed in the observedAttributes property will receive this callback.

        if (this.connected) {
            this.updateValues();
        }
    }

    adoptedCallback() {
        // The custom element has been moved into a new document 
        // (e.g. someone called document.adoptNode(el)).
    }

    // Get the web components template element
    getTemplate() {
        const parser = new DOMParser();
        const doc = parser.parseFromString(this.view, "text/html");
        return doc.querySelector('template');
    }

    // Import the given template into the shadow root
    importTemplate(template) {
        const clone = document.importNode(template.content, true);
        this.shadowRoot.appendChild(clone);
    }

    // Example - attach events
    attachEvents() {
        
    }

    detachEvents() {
        
    }

    // Example - set 
    updateValues() {
        const root = this.shadowRoot;

        const spanReverse = root.querySelector('#reverse');
        spanReverse.textContent = this.title.split('').reverse().join('');
    }

    // Upgrade properties by storing the value, deleting the property and re-setting.
    // This is needed to cover cases where properties are set on the element before the definition has been loaded.
    _upgradeProperties() {
        // Add the properties that should be upgraded here
        const _props = ['title'];

        _props.forEach(p => this._upgradeProperty(p));
    }

    // Upgrade a single property
    _upgradeProperty(prop) {
        if (this.hasOwnProperty(prop)) {
            const value = this[prop];
            delete this[prop];
            this[prop] = value;
        }
    }
}

customElements.define('ex-component-two', ExComponentTwo);