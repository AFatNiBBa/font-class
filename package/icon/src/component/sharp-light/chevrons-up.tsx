
import { Icon } from "../../index";

/**
 * A component that renders the `chevrons-up` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-up?s=sharp-light chevrons-up}
 * @preview ![chevrons-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjY3LjMgNTIuN0wyNTYgNDEuNCAyNDQuNyA1Mi43bC0xOTIgMTkyTDQxLjQgMjU2IDY0IDI3OC42bDExLjMtMTEuM0wyNTYgODYuNiA0MzYuNyAyNjcuMyA0NDggMjc4LjYgNDcwLjYgMjU2bC0xMS4zLTExLjMtMTkyLTE5MnptMCAxOTJMMjU2IDIzMy40bC0xMS4zIDExLjMtMTkyIDE5Mkw0MS40IDQ0OCA2NCA0NzAuNmwxMS4zLTExLjNMMjU2IDI3OC42IDQzNi43IDQ1OS4zIDQ0OCA0NzAuNiA0NzAuNiA0NDhsLTExLjMtMTEuMy0xOTItMTkyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ChevronsUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M267.3 52.7L256 41.4 244.7 52.7l-192 192L41.4 256 64 278.6l11.3-11.3L256 86.6 436.7 267.3 448 278.6 470.6 256l-11.3-11.3-192-192zm0 192L256 233.4l-11.3 11.3-192 192L41.4 448 64 470.6l11.3-11.3L256 278.6 436.7 459.3 448 470.6 470.6 448l-11.3-11.3-192-192z" />
    </Icon>
);

export default ChevronsUp;