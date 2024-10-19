
import { Icon } from "../../index";

/**
 * A component that renders the `gamepad` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gamepad?s=solid gamepad}
 * @preview ![gamepad](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTkyIDY0Qzg2IDY0IDAgMTUwIDAgMjU2Uzg2IDQ0OCAxOTIgNDQ4bDI1NiAwYzEwNiAwIDE5Mi04NiAxOTItMTkycy04Ni0xOTItMTkyLTE5MkwxOTIgNjR6TTQ5NiAxNjhhNDAgNDAgMCAxIDEgMCA4MCA0MCA0MCAwIDEgMSAwLTgwek0zOTIgMzA0YTQwIDQwIDAgMSAxIDgwIDAgNDAgNDAgMCAxIDEgLTgwIDB6TTE2OCAyMDBjMC0xMy4zIDEwLjctMjQgMjQtMjRzMjQgMTAuNyAyNCAyNGwwIDMyIDMyIDBjMTMuMyAwIDI0IDEwLjcgMjQgMjRzLTEwLjcgMjQtMjQgMjRsLTMyIDAgMCAzMmMwIDEzLjMtMTAuNyAyNC0yNCAyNHMtMjQtMTAuNy0yNC0yNGwwLTMyLTMyIDBjLTEzLjMgMC0yNC0xMC43LTI0LTI0czEwLjctMjQgMjQtMjRsMzIgMCAwLTMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Gamepad: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M192 64C86 64 0 150 0 256S86 448 192 448l256 0c106 0 192-86 192-192s-86-192-192-192L192 64zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24l0 32 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0 0 32c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l32 0 0-32z" />
    </Icon>
);

export default Gamepad;