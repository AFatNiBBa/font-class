
import { Icon } from "../../index";

/**
 * A component that renders the `house-building` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-building?s=thin house-building}
 * @preview ![house-building](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzg0IDE2bDE5MiAwYzI2LjUgMCA0OCAyMS41IDQ4IDQ4bDAgMzg0YzAgMjYuNS0yMS41IDQ4LTQ4IDQ4bC0xNjYuNyAwYy0yLjUgNS43LTUuNiAxMS4xLTkuMyAxNmwxNzYgMGMzNS4zIDAgNjQtMjguNyA2NC02NGwwLTM4NGMwLTM1LjMtMjguNy02NC02NC02NEwzODQgMGMtMzUuMyAwLTY0IDI4LjctNjQgNjRsMCA4OS45IDE2IDE0LjdMMzM2IDY0YzAtMjYuNSAyMS41LTQ4IDQ4LTQ4em0zMiAyNzJsMjQgMGMxMy4zIDAgMjQtMTAuNyAyNC0yNGwwLTMyYzAtMTMuMy0xMC43LTI0LTI0LTI0bC0zMiAwYy03LjcgMC0xNC41IDMuNi0xOC45IDkuMmwxIC45YzMuOCAzLjUgNy4zIDcuMyAxMC4zIDExLjVjMS0zLjIgNC4xLTUuNiA3LjYtNS42bDMyIDBjNC40IDAgOCAzLjYgOCA4bDAgMzJjMCA0LjQtMy42IDgtOCA4bC0yNC4yIDBjLjEgMS43IC4yIDMuNCAuMiA1LjFsMCAxMC45em0wIDExMmwyNCAwYzEzLjMgMCAyNC0xMC43IDI0LTI0bDAtMzJjMC0xMy4zLTEwLjctMjQtMjQtMjRsLTI0IDAgMCAxNiAyNCAwYzQuNCAwIDggMy42IDggOGwwIDMyYzAgNC40LTMuNiA4LTggOGwtMjQgMCAwIDE2ek01MjAgMjA4Yy0xMy4zIDAtMjQgMTAuNy0yNCAyNGwwIDMyYzAgMTMuMyAxMC43IDI0IDI0IDI0bDMyIDBjMTMuMyAwIDI0LTEwLjcgMjQtMjRsMC0zMmMwLTEzLjMtMTAuNy0yNC0yNC0yNGwtMzIgMHptLTggMjRjMC00LjQgMy42LTggOC04bDMyIDBjNC40IDAgOCAzLjYgOCA4bDAgMzJjMCA0LjQtMy42IDgtOCA4bC0zMiAwYy00LjQgMC04LTMuNi04LThsMC0zMnpNNDk2IDM0NGwwIDMyYzAgMTMuMyAxMC43IDI0IDI0IDI0bDMyIDBjMTMuMyAwIDI0LTEwLjcgMjQtMjRsMC0zMmMwLTEzLjMtMTAuNy0yNC0yNC0yNGwtMzIgMGMtMTMuMyAwLTI0IDEwLjctMjQgMjR6bTI0LThsMzIgMGM0LjQgMCA4IDMuNiA4IDhsMCAzMmMwIDQuNC0zLjYgOC04IDhsLTMyIDBjLTQuNCAwLTgtMy42LTgtOGwwLTMyYzAtNC40IDMuNi04IDgtOHpNNDA4IDk2Yy0xMy4zIDAtMjQgMTAuNy0yNCAyNGwwIDMyYzAgMTMuMyAxMC43IDI0IDI0IDI0bDMyIDBjMTMuMyAwIDI0LTEwLjcgMjQtMjRsMC0zMmMwLTEzLjMtMTAuNy0yNC0yNC0yNGwtMzIgMHptLTggMjRjMC00LjQgMy42LTggOC04bDMyIDBjNC40IDAgOCAzLjYgOCA4bDAgMzJjMCA0LjQtMy42IDgtOCA4bC0zMiAwYy00LjQgMC04LTMuNi04LThsMC0zMnptOTYgMGwwIDMyYzAgMTMuMyAxMC43IDI0IDI0IDI0bDMyIDBjMTMuMyAwIDI0LTEwLjcgMjQtMjRsMC0zMmMwLTEzLjMtMTAuNy0yNC0yNC0yNGwtMzIgMGMtMTMuMyAwLTI0IDEwLjctMjQgMjR6bTI0LThsMzIgMGM0LjQgMCA4IDMuNiA4IDhsMCAzMmMwIDQuNC0zLjYgOC04IDhsLTMyIDBjLTQuNCAwLTgtMy42LTgtOGwwLTMyYzAtNC40IDMuNi04IDgtOHpNMTYgMjgwLjZjMC0xMS4yIDQuNy0yMS45IDEzLTI5LjVMMTY1IDEyNi41YzE1LjMtMTQgMzguOC0xNCA1NC4xIDBMMzU1IDI1MS4xYzguMyA3LjYgMTMgMTguMyAxMyAyOS41TDM2OCA0NTZjMCAyMi4xLTE3LjkgNDAtNDAgNDBMNTYgNDk2Yy0yMi4xIDAtNDAtMTcuOS00MC00MGwwLTE3NS40ek0wIDQ1NmMwIDMwLjkgMjUuMSA1NiA1NiA1NmwyNzIgMGMzMC45IDAgNTYtMjUuMSA1Ni01NmwwLTE3NS40YzAtMTUuNy02LjYtMzAuNy0xOC4yLTQxLjNsLTEzNi0xMjQuN2MtMjEuNC0xOS42LTU0LjMtMTkuNi03NS43IDBMMTguMiAyMzkuNEM2LjYgMjUwIDAgMjY0LjkgMCAyODAuNkwwIDQ1NnpNMjI0IDI4MGM0LjQgMCA4IDMuNiA4IDhsMCA2NGMwIDQuNC0zLjYgOC04IDhsLTY0IDBjLTQuNCAwLTgtMy42LTgtOGwwLTY0YzAtNC40IDMuNi04IDgtOGw2NCAwem0tNjQtMTZjLTEzLjMgMC0yNCAxMC43LTI0IDI0bDAgNjRjMCAxMy4zIDEwLjcgMjQgMjQgMjRsNjQgMGMxMy4zIDAgMjQtMTAuNyAyNC0yNGwwLTY0YzAtMTMuMy0xMC43LTI0LTI0LTI0bC02NCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const HouseBuilding: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M384 16l192 0c26.5 0 48 21.5 48 48l0 384c0 26.5-21.5 48-48 48l-166.7 0c-2.5 5.7-5.6 11.1-9.3 16l176 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L384 0c-35.3 0-64 28.7-64 64l0 89.9 16 14.7L336 64c0-26.5 21.5-48 48-48zm32 272l24 0c13.3 0 24-10.7 24-24l0-32c0-13.3-10.7-24-24-24l-32 0c-7.7 0-14.5 3.6-18.9 9.2l1 .9c3.8 3.5 7.3 7.3 10.3 11.5c1-3.2 4.1-5.6 7.6-5.6l32 0c4.4 0 8 3.6 8 8l0 32c0 4.4-3.6 8-8 8l-24.2 0c.1 1.7 .2 3.4 .2 5.1l0 10.9zm0 112l24 0c13.3 0 24-10.7 24-24l0-32c0-13.3-10.7-24-24-24l-24 0 0 16 24 0c4.4 0 8 3.6 8 8l0 32c0 4.4-3.6 8-8 8l-24 0 0 16zM520 208c-13.3 0-24 10.7-24 24l0 32c0 13.3 10.7 24 24 24l32 0c13.3 0 24-10.7 24-24l0-32c0-13.3-10.7-24-24-24l-32 0zm-8 24c0-4.4 3.6-8 8-8l32 0c4.4 0 8 3.6 8 8l0 32c0 4.4-3.6 8-8 8l-32 0c-4.4 0-8-3.6-8-8l0-32zM496 344l0 32c0 13.3 10.7 24 24 24l32 0c13.3 0 24-10.7 24-24l0-32c0-13.3-10.7-24-24-24l-32 0c-13.3 0-24 10.7-24 24zm24-8l32 0c4.4 0 8 3.6 8 8l0 32c0 4.4-3.6 8-8 8l-32 0c-4.4 0-8-3.6-8-8l0-32c0-4.4 3.6-8 8-8zM408 96c-13.3 0-24 10.7-24 24l0 32c0 13.3 10.7 24 24 24l32 0c13.3 0 24-10.7 24-24l0-32c0-13.3-10.7-24-24-24l-32 0zm-8 24c0-4.4 3.6-8 8-8l32 0c4.4 0 8 3.6 8 8l0 32c0 4.4-3.6 8-8 8l-32 0c-4.4 0-8-3.6-8-8l0-32zm96 0l0 32c0 13.3 10.7 24 24 24l32 0c13.3 0 24-10.7 24-24l0-32c0-13.3-10.7-24-24-24l-32 0c-13.3 0-24 10.7-24 24zm24-8l32 0c4.4 0 8 3.6 8 8l0 32c0 4.4-3.6 8-8 8l-32 0c-4.4 0-8-3.6-8-8l0-32c0-4.4 3.6-8 8-8zM16 280.6c0-11.2 4.7-21.9 13-29.5L165 126.5c15.3-14 38.8-14 54.1 0L355 251.1c8.3 7.6 13 18.3 13 29.5L368 456c0 22.1-17.9 40-40 40L56 496c-22.1 0-40-17.9-40-40l0-175.4zM0 456c0 30.9 25.1 56 56 56l272 0c30.9 0 56-25.1 56-56l0-175.4c0-15.7-6.6-30.7-18.2-41.3l-136-124.7c-21.4-19.6-54.3-19.6-75.7 0L18.2 239.4C6.6 250 0 264.9 0 280.6L0 456zM224 280c4.4 0 8 3.6 8 8l0 64c0 4.4-3.6 8-8 8l-64 0c-4.4 0-8-3.6-8-8l0-64c0-4.4 3.6-8 8-8l64 0zm-64-16c-13.3 0-24 10.7-24 24l0 64c0 13.3 10.7 24 24 24l64 0c13.3 0 24-10.7 24-24l0-64c0-13.3-10.7-24-24-24l-64 0z" />
    </Icon>
);

export default HouseBuilding;