
import { Icon } from "../../index";

/**
 * A component that renders the `table` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table?s=solid table}
 * @preview ![table](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgMjU2bDAtOTYgMTYwIDAgMCA5Nkw2NCAyNTZ6bTAgNjRsMTYwIDAgMCA5Nkw2NCA0MTZsMC05NnptMjI0IDk2bDAtOTYgMTYwIDAgMCA5Ni0xNjAgMHpNNDQ4IDI1NmwtMTYwIDAgMC05NiAxNjAgMCAwIDk2ek02NCAzMkMyOC43IDMyIDAgNjAuNyAwIDk2TDAgNDE2YzAgMzUuMyAyOC43IDY0IDY0IDY0bDM4NCAwYzM1LjMgMCA2NC0yOC43IDY0LTY0bDAtMzIwYzAtMzUuMy0yOC43LTY0LTY0LTY0TDY0IDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Table: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 256l0-96 160 0 0 96L64 256zm0 64l160 0 0 96L64 416l0-96zm224 96l0-96 160 0 0 96-160 0zM448 256l-160 0 0-96 160 0 0 96zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z" />
    </Icon>
);

export default Table;