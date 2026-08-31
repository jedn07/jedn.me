const navbarTemplate = document.createElement('template');

navbarTemplate.innerHTML =
`
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
<nav class="navbar navbar-expand-sm bg-light">
    <div class="container-fluid justify-content-center">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="weights.html">Weights</a>
            </li>
        </ul>
    </div>
</nav>
`

class Navbar extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const shadowRoot = this.attachShadow( {mode: 'closed'})
		shadowRoot.appendChild(navbarTemplate.content);
	}
}

customElements.define('navbar-component', Navbar);