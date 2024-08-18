import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
            <h1>Welcome back, Dom</h1>
            <p>
                Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure do. Reprehenderit anim fugiat sint exercitation consequat. Sit anim laborum sit amet Lorem adipisicing ullamco duis. Anim in do magna ea pariatur et.
            </p>
            <p>
                <a href="/posts" data-link>View recent posts</a>.
                <a href="/posts/1">1</a>
                <a href="/posts/2">2</a>
                <a href="/posts/3">3</a>
                <a href="/posts/4">4</a>
                <a href="/posts/5">5</a>
            </p>
            <div id="cont">
            </div>
        `;
  }
}
