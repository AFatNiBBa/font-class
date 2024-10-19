
import { Icon } from "../../index";

/**
 * A component that renders the `tty-answer` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tty-answer?s=thin tty-answer}
 * @preview ![tty-answer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjk3LjggMzgyLjVjNi42IDMuMSAxNC42IDEuMyAxOS4yLTQuM2w0MC40LTQ5LjNjNi43LTguMiAxOC0xMSAyNy44LTdsOTYgNDBjMTEuMSA0LjYgMTcuMSAxNi44IDEzLjkgMjguNWwtMjQgODhDNDY4LjMgNDg4LjggNDU4LjggNDk2IDQ0OCA0OTZDMjA5LjQgNDk2IDE2IDMwMi42IDE2IDY0YzAtMTAuOCA3LjItMjAuMyAxNy43LTIzLjJsODgtMjRjMTEuNi0zLjIgMjMuOCAyLjggMjguNSAxMy45bDQwIDk2YzQuMSA5LjggMS4zIDIxLjEtNyAyNy44bC00OS4zIDQwLjRjLTUuNyA0LjctNy41IDEyLjYtNC4zIDE5LjJjMzQuOCA3My44IDk0LjUgMTMzLjUgMTY4LjMgMTY4LjN6TTM0NSAzMTguN0wzMDQuNyAzNjhDMjM0LjIgMzM0LjcgMTc3LjIgMjc3LjcgMTQ0IDIwNy4zTDE5My4zIDE2N2MxMy43LTExLjIgMTguNC0zMCAxMS42LTQ2LjNsLTQwLTk2Yy03LjctMTguNi0yOC0yOC41LTQ3LjQtMjMuMmwtODggMjRDMTIuMSAzMC4yIDAgNDYgMCA2NEMwIDMxMS40IDIwMC42IDUxMiA0NDggNTEyYzE4IDAgMzMuOC0xMi4xIDM4LjYtMjkuNWwyNC04OGM1LjMtMTkuNC00LjYtMzkuNy0yMy4yLTQ3LjRsLTk2LTQwYy0xNi4zLTYuOC0zNS4yLTIuMS00Ni4zIDExLjZ6TTMxMiA4MGwxNiAwYzQuNCAwIDggMy42IDggOGwwIDE2YzAgNC40LTMuNiA4LTggOGwtMTYgMGMtNC40IDAtOC0zLjYtOC04bDAtMTZjMC00LjQgMy42LTggOC04em0tMjQgOGwwIDE2YzAgMTMuMyAxMC43IDI0IDI0IDI0bDE2IDBjMTMuMyAwIDI0LTEwLjcgMjQtMjRsMC0xNmMwLTEzLjMtMTAuNy0yNC0yNC0yNGwtMTYgMGMtMTMuMyAwLTI0IDEwLjctMjQgMjR6bTQwIDg4YzQuNCAwIDggMy42IDggOGwwIDE2YzAgNC40LTMuNiA4LTggOGwtMTYgMGMtNC40IDAtOC0zLjYtOC04bDAtMTZjMC00LjQgMy42LTggOC04bDE2IDB6bS0xNi0xNmMtMTMuMyAwLTI0IDEwLjctMjQgMjRsMCAxNmMwIDEzLjMgMTAuNyAyNCAyNCAyNGwxNiAwYzEzLjMgMCAyNC0xMC43IDI0LTI0bDAtMTZjMC0xMy4zLTEwLjctMjQtMjQtMjRsLTE2IDB6bTk2LTgwbDE2IDBjNC40IDAgOCAzLjYgOCA4bDAgMTZjMCA0LjQtMy42IDgtOCA4bC0xNiAwYy00LjQgMC04LTMuNi04LThsMC0xNmMwLTQuNCAzLjYtOCA4LTh6bS0yNCA4bDAgMTZjMCAxMy4zIDEwLjcgMjQgMjQgMjRsMTYgMGMxMy4zIDAgMjQtMTAuNyAyNC0yNGwwLTE2YzAtMTMuMy0xMC43LTI0LTI0LTI0bC0xNiAwYy0xMy4zIDAtMjQgMTAuNy0yNCAyNHptMTM2LThjNC40IDAgOCAzLjYgOCA4bDAgMTZjMCA0LjQtMy42IDgtOCA4bC0xNiAwYy00LjQgMC04LTMuNi04LThsMC0xNmMwLTQuNCAzLjYtOCA4LThsMTYgMHpNNTA0IDY0Yy0xMy4zIDAtMjQgMTAuNy0yNCAyNGwwIDE2YzAgMTMuMyAxMC43IDI0IDI0IDI0bDE2IDBjMTMuMyAwIDI0LTEwLjcgMjQtMjRsMC0xNmMwLTEzLjMtMTAuNy0yNC0yNC0yNGwtMTYgMHptOTYgMTZsMTYgMGM0LjQgMCA4IDMuNiA4IDhsMCAxNmMwIDQuNC0zLjYgOC04IDhsLTE2IDBjLTQuNCAwLTgtMy42LTgtOGwwLTE2YzAtNC40IDMuNi04IDgtOHptLTI0IDhsMCAxNmMwIDEzLjMgMTAuNyAyNCAyNCAyNGwxNiAwYzEzLjMgMCAyNC0xMC43IDI0LTI0bDAtMTZjMC0xMy4zLTEwLjctMjQtMjQtMjRsLTE2IDBjLTEzLjMgMC0yNCAxMC43LTI0IDI0em00MCA4OGM0LjQgMCA4IDMuNiA4IDhsMCAxNmMwIDQuNC0zLjYgOC04IDhsLTE2IDBjLTQuNCAwLTgtMy42LTgtOGwwLTE2YzAtNC40IDMuNi04IDgtOGwxNiAwem0tMTYtMTZjLTEzLjMgMC0yNCAxMC43LTI0IDI0bDAgMTZjMCAxMy4zIDEwLjcgMjQgMjQgMjRsMTYgMGMxMy4zIDAgMjQtMTAuNyAyNC0yNGwwLTE2YzAtMTMuMy0xMC43LTI0LTI0LTI0bC0xNiAwek00MDggMTc2bDExMiAwYzQuNCAwIDggMy42IDggOGwwIDE2YzAgNC40LTMuNiA4LTggOGwtMTEyIDBjLTQuNCAwLTgtMy42LTgtOGwwLTE2YzAtNC40IDMuNi04IDgtOHptLTI0IDhsMCAxNmMwIDEzLjMgMTAuNyAyNCAyNCAyNGwxMTIgMGMxMy4zIDAgMjQtMTAuNyAyNC0yNGwwLTE2YzAtMTMuMy0xMC43LTI0LTI0LTI0bC0xMTIgMGMtMTMuMyAwLTI0IDEwLjctMjQgMjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const TtyAnswer: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M297.8 382.5c6.6 3.1 14.6 1.3 19.2-4.3l40.4-49.3c6.7-8.2 18-11 27.8-7l96 40c11.1 4.6 17.1 16.8 13.9 28.5l-24 88C468.3 488.8 458.8 496 448 496C209.4 496 16 302.6 16 64c0-10.8 7.2-20.3 17.7-23.2l88-24c11.6-3.2 23.8 2.8 28.5 13.9l40 96c4.1 9.8 1.3 21.1-7 27.8l-49.3 40.4c-5.7 4.7-7.5 12.6-4.3 19.2c34.8 73.8 94.5 133.5 168.3 168.3zM345 318.7L304.7 368C234.2 334.7 177.2 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6zM312 80l16 0c4.4 0 8 3.6 8 8l0 16c0 4.4-3.6 8-8 8l-16 0c-4.4 0-8-3.6-8-8l0-16c0-4.4 3.6-8 8-8zm-24 8l0 16c0 13.3 10.7 24 24 24l16 0c13.3 0 24-10.7 24-24l0-16c0-13.3-10.7-24-24-24l-16 0c-13.3 0-24 10.7-24 24zm40 88c4.4 0 8 3.6 8 8l0 16c0 4.4-3.6 8-8 8l-16 0c-4.4 0-8-3.6-8-8l0-16c0-4.4 3.6-8 8-8l16 0zm-16-16c-13.3 0-24 10.7-24 24l0 16c0 13.3 10.7 24 24 24l16 0c13.3 0 24-10.7 24-24l0-16c0-13.3-10.7-24-24-24l-16 0zm96-80l16 0c4.4 0 8 3.6 8 8l0 16c0 4.4-3.6 8-8 8l-16 0c-4.4 0-8-3.6-8-8l0-16c0-4.4 3.6-8 8-8zm-24 8l0 16c0 13.3 10.7 24 24 24l16 0c13.3 0 24-10.7 24-24l0-16c0-13.3-10.7-24-24-24l-16 0c-13.3 0-24 10.7-24 24zm136-8c4.4 0 8 3.6 8 8l0 16c0 4.4-3.6 8-8 8l-16 0c-4.4 0-8-3.6-8-8l0-16c0-4.4 3.6-8 8-8l16 0zM504 64c-13.3 0-24 10.7-24 24l0 16c0 13.3 10.7 24 24 24l16 0c13.3 0 24-10.7 24-24l0-16c0-13.3-10.7-24-24-24l-16 0zm96 16l16 0c4.4 0 8 3.6 8 8l0 16c0 4.4-3.6 8-8 8l-16 0c-4.4 0-8-3.6-8-8l0-16c0-4.4 3.6-8 8-8zm-24 8l0 16c0 13.3 10.7 24 24 24l16 0c13.3 0 24-10.7 24-24l0-16c0-13.3-10.7-24-24-24l-16 0c-13.3 0-24 10.7-24 24zm40 88c4.4 0 8 3.6 8 8l0 16c0 4.4-3.6 8-8 8l-16 0c-4.4 0-8-3.6-8-8l0-16c0-4.4 3.6-8 8-8l16 0zm-16-16c-13.3 0-24 10.7-24 24l0 16c0 13.3 10.7 24 24 24l16 0c13.3 0 24-10.7 24-24l0-16c0-13.3-10.7-24-24-24l-16 0zM408 176l112 0c4.4 0 8 3.6 8 8l0 16c0 4.4-3.6 8-8 8l-112 0c-4.4 0-8-3.6-8-8l0-16c0-4.4 3.6-8 8-8zm-24 8l0 16c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24l0-16c0-13.3-10.7-24-24-24l-112 0c-13.3 0-24 10.7-24 24z" />
    </Icon>
);

export default TtyAnswer;