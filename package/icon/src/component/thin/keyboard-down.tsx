
import { Icon } from "../../index";

/**
 * A component that renders the `keyboard-down` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/keyboard-down?s=thin keyboard-down}
 * @preview ![keyboard-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgMTZDMzcuNSAxNiAxNiAzNy41IDE2IDY0bDAgMTYwYzAgMjYuNSAyMS41IDQ4IDQ4IDQ4bDQ0OCAwYzI2LjUgMCA0OC0yMS41IDQ4LTQ4bDAtMTYwYzAtMjYuNS0yMS41LTQ4LTQ4LTQ4TDY0IDE2ek0wIDY0QzAgMjguNyAyOC43IDAgNjQgMEw1MTIgMGMzNS4zIDAgNjQgMjguNyA2NCA2NGwwIDE2MGMwIDM1LjMtMjguNyA2NC02NCA2NEw2NCAyODhjLTM1LjMgMC02NC0yOC43LTY0LTY0TDAgNjR6TTg4IDE3NmMtNC40IDAtOCAzLjYtOCA4bDAgMTZjMCA0LjQgMy42IDggOCA4bDE2IDBjNC40IDAgOC0zLjYgOC04bDAtMTZjMC00LjQtMy42LTgtOC04bC0xNiAwem0tMjQgOGMwLTEzLjMgMTAuNy0yNCAyNC0yNGwxNiAwYzEzLjMgMCAyNCAxMC43IDI0IDI0bDAgMTZjMCAxMy4zLTEwLjcgMjQtMjQgMjRsLTE2IDBjLTEzLjMgMC0yNC0xMC43LTI0LTI0bDAtMTZ6TTIwMCA4MGwtMTYgMGMtNC40IDAtOCAzLjYtOCA4bDAgMTZjMCA0LjQgMy42IDggOCA4bDE2IDBjNC40IDAgOC0zLjYgOC04bDAtMTZjMC00LjQtMy42LTgtOC04ek0xODQgNjRsMTYgMGMxMy4zIDAgMjQgMTAuNyAyNCAyNGwwIDE2YzAgMTMuMy0xMC43IDI0LTI0IDI0bC0xNiAwYy0xMy4zIDAtMjQtMTAuNy0yNC0yNGwwLTE2YzAtMTMuMyAxMC43LTI0IDI0LTI0em0wIDExMmMtNC40IDAtOCAzLjYtOCA4bDAgMTZjMCA0LjQgMy42IDggOCA4bDIwOCAwYzQuNCAwIDgtMy42IDgtOGwwLTE2YzAtNC40LTMuNi04LTgtOGwtMjA4IDB6bS0yNCA4YzAtMTMuMyAxMC43LTI0IDI0LTI0bDIwOCAwYzEzLjMgMCAyNCAxMC43IDI0IDI0bDAgMTZjMCAxMy4zLTEwLjcgMjQtMjQgMjRsLTIwOCAwYy0xMy4zIDAtMjQtMTAuNy0yNC0yNGwwLTE2em0zMjgtOGwtMTYgMGMtNC40IDAtOCAzLjYtOCA4bDAgMTZjMCA0LjQgMy42IDggOCA4bDE2IDBjNC40IDAgOC0zLjYgOC04bDAtMTZjMC00LjQtMy42LTgtOC04em0tMTYtMTZsMTYgMGMxMy4zIDAgMjQgMTAuNyAyNCAyNGwwIDE2YzAgMTMuMy0xMC43IDI0LTI0IDI0bC0xNiAwYy0xMy4zIDAtMjQtMTAuNy0yNC0yNGwwLTE2YzAtMTMuMyAxMC43LTI0IDI0LTI0ek04OCA4MGMtNC40IDAtOCAzLjYtOCA4bDAgMTZjMCA0LjQgMy42IDggOCA4bDE2IDBjNC40IDAgOC0zLjYgOC04bDAtMTZjMC00LjQtMy42LTgtOC04TDg4IDgwek02NCA4OGMwLTEzLjMgMTAuNy0yNCAyNC0yNGwxNiAwYzEzLjMgMCAyNCAxMC43IDI0IDI0bDAgMTZjMCAxMy4zLTEwLjcgMjQtMjQgMjRsLTE2IDBjLTEzLjMgMC0yNC0xMC43LTI0LTI0bDAtMTZ6bTIzMi04bC0xNiAwYy00LjQgMC04IDMuNi04IDhsMCAxNmMwIDQuNCAzLjYgOCA4IDhsMTYgMGM0LjQgMCA4LTMuNiA4LThsMC0xNmMwLTQuNC0zLjYtOC04LTh6TTI4MCA2NGwxNiAwYzEzLjMgMCAyNCAxMC43IDI0IDI0bDAgMTZjMCAxMy4zLTEwLjcgMjQtMjQgMjRsLTE2IDBjLTEzLjMgMC0yNC0xMC43LTI0LTI0bDAtMTZjMC0xMy4zIDEwLjctMjQgMjQtMjR6bTk2IDE2Yy00LjQgMC04IDMuNi04IDhsMCAxNmMwIDQuNCAzLjYgOCA4IDhsMTYgMGM0LjQgMCA4LTMuNiA4LThsMC0xNmMwLTQuNC0zLjYtOC04LThsLTE2IDB6bS0yNCA4YzAtMTMuMyAxMC43LTI0IDI0LTI0bDE2IDBjMTMuMyAwIDI0IDEwLjcgMjQgMjRsMCAxNmMwIDEzLjMtMTAuNyAyNC0yNCAyNGwtMTYgMGMtMTMuMyAwLTI0LTEwLjctMjQtMjRsMC0xNnptMTM2LThsLTE2IDBjLTQuNCAwLTggMy42LTggOGwwIDE2YzAgNC40IDMuNiA4IDggOGwxNiAwYzQuNCAwIDgtMy42IDgtOGwwLTE2YzAtNC40LTMuNi04LTgtOHpNNDcyIDY0bDE2IDBjMTMuMyAwIDI0IDEwLjcgMjQgMjRsMCAxNmMwIDEzLjMtMTAuNyAyNC0yNCAyNGwtMTYgMGMtMTMuMyAwLTI0LTEwLjctMjQtMjRsMC0xNmMwLTEzLjMgMTAuNy0yNCAyNC0yNHpNMTQ5LjcgMzU0LjNMMjg4IDQ5Mi43IDQyNi4zIDM1NC4zYzMuMS0zLjEgOC4yLTMuMSAxMS4zIDBzMy4xIDguMiAwIDExLjNsLTE0NCAxNDRjLTMuMSAzLjEtOC4yIDMuMS0xMS4zIDBsLTE0NC0xNDRjLTMuMS0zLjEtMy4xLTguMiAwLTExLjNzOC4yLTMuMSAxMS4zIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const KeyboardDown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 16C37.5 16 16 37.5 16 64l0 160c0 26.5 21.5 48 48 48l448 0c26.5 0 48-21.5 48-48l0-160c0-26.5-21.5-48-48-48L64 16zM0 64C0 28.7 28.7 0 64 0L512 0c35.3 0 64 28.7 64 64l0 160c0 35.3-28.7 64-64 64L64 288c-35.3 0-64-28.7-64-64L0 64zM88 176c-4.4 0-8 3.6-8 8l0 16c0 4.4 3.6 8 8 8l16 0c4.4 0 8-3.6 8-8l0-16c0-4.4-3.6-8-8-8l-16 0zm-24 8c0-13.3 10.7-24 24-24l16 0c13.3 0 24 10.7 24 24l0 16c0 13.3-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24l0-16zM200 80l-16 0c-4.4 0-8 3.6-8 8l0 16c0 4.4 3.6 8 8 8l16 0c4.4 0 8-3.6 8-8l0-16c0-4.4-3.6-8-8-8zM184 64l16 0c13.3 0 24 10.7 24 24l0 16c0 13.3-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24l0-16c0-13.3 10.7-24 24-24zm0 112c-4.4 0-8 3.6-8 8l0 16c0 4.4 3.6 8 8 8l208 0c4.4 0 8-3.6 8-8l0-16c0-4.4-3.6-8-8-8l-208 0zm-24 8c0-13.3 10.7-24 24-24l208 0c13.3 0 24 10.7 24 24l0 16c0 13.3-10.7 24-24 24l-208 0c-13.3 0-24-10.7-24-24l0-16zm328-8l-16 0c-4.4 0-8 3.6-8 8l0 16c0 4.4 3.6 8 8 8l16 0c4.4 0 8-3.6 8-8l0-16c0-4.4-3.6-8-8-8zm-16-16l16 0c13.3 0 24 10.7 24 24l0 16c0 13.3-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24l0-16c0-13.3 10.7-24 24-24zM88 80c-4.4 0-8 3.6-8 8l0 16c0 4.4 3.6 8 8 8l16 0c4.4 0 8-3.6 8-8l0-16c0-4.4-3.6-8-8-8L88 80zM64 88c0-13.3 10.7-24 24-24l16 0c13.3 0 24 10.7 24 24l0 16c0 13.3-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24l0-16zm232-8l-16 0c-4.4 0-8 3.6-8 8l0 16c0 4.4 3.6 8 8 8l16 0c4.4 0 8-3.6 8-8l0-16c0-4.4-3.6-8-8-8zM280 64l16 0c13.3 0 24 10.7 24 24l0 16c0 13.3-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24l0-16c0-13.3 10.7-24 24-24zm96 16c-4.4 0-8 3.6-8 8l0 16c0 4.4 3.6 8 8 8l16 0c4.4 0 8-3.6 8-8l0-16c0-4.4-3.6-8-8-8l-16 0zm-24 8c0-13.3 10.7-24 24-24l16 0c13.3 0 24 10.7 24 24l0 16c0 13.3-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24l0-16zm136-8l-16 0c-4.4 0-8 3.6-8 8l0 16c0 4.4 3.6 8 8 8l16 0c4.4 0 8-3.6 8-8l0-16c0-4.4-3.6-8-8-8zM472 64l16 0c13.3 0 24 10.7 24 24l0 16c0 13.3-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24l0-16c0-13.3 10.7-24 24-24zM149.7 354.3L288 492.7 426.3 354.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-144 144c-3.1 3.1-8.2 3.1-11.3 0l-144-144c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0z" />
    </Icon>
);

export default KeyboardDown;