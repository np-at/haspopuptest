import "./styles/main";
const appEl = document.getElementById("app");
// console.log(appEl?.innerHTML + v1());

//   appEl.innerHTML = `
// <h1>Hello Parcel!</h1>
// <div>
//   Look
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
//   for more info about Parcel.
// </div>
// `;
// }

export function hoverToggle(element: HTMLElement, force?: boolean): void {
  const currentState = element.classList.contains("show");
  if (currentState === force) return;
  const newState = force === undefined ? !currentState : force;
  element.classList.toggle("show", newState);
  element.firstElementChild?.setAttribute(
    "aria-expanded",
    newState ? "true" : "false"
  );
}
document.querySelectorAll("li.dual-heading").forEach((x) => {
  x.addEventListener("click", () => hoverToggle(x as HTMLElement));
  x.addEventListener("mouseover", () => hoverToggle(x as HTMLElement, true));
  x.addEventListener("mouseout", () => hoverToggle(x as HTMLElement, false));
});
