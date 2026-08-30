const headerTemplate = document.createElement('template');

headerTemplate.innerHTML =
`
<style>
nav {

    background-color: #0a0a23;
    height:40px;
    display: flex;
    align-items:center

}

ul {
    padding: 0;
}

ul li {
    list-style: none;
    display: inline;
}

a {
    color:azure;
    font-weight: 500;
    text-decoration: none;
    margin: 0 10px;
}

a:hover {
    background-color: grey;
    border: 9px solid grey;
    margin-inline: 1px;
}
</style>
<header>
	<nav>
		<ul>
			<li><a href="/">Welcome</a></li><li><a href="weights.html">Weights</a></li>
		</ul>
	</nav>
</header>
`

class Header extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const shadowRoot = this.attachShadow( {mode: 'closed'})
		shadowRoot.appendChild(headerTemplate.content);
	}
}

customElements.define('header-component', Header);