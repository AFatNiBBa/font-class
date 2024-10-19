
import { Icon } from "../../index";

/**
 * A component that renders the `diamond` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond?s=sharp-thin diamond}
 * @preview ![diamond](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyNTZsMTEuMyAxMS4zTDI0NC43IDUwMC43IDI1NiA1MTJsMTEuMy0xMS4zTDUwMC43IDI2Ny4zIDUxMiAyNTZsLTExLjMtMTEuM0wyNjcuMyAxMS4zIDI1NiAwIDI0NC43IDExLjMgMTEuMyAyNDQuNyAwIDI1NnpNMjU2IDQ4OS40TDIyLjYgMjU2IDI1NiAyMi42IDQ4OS40IDI1NiAyNTYgNDg5LjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Diamond: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256l11.3 11.3L244.7 500.7 256 512l11.3-11.3L500.7 267.3 512 256l-11.3-11.3L267.3 11.3 256 0 244.7 11.3 11.3 244.7 0 256zM256 489.4L22.6 256 256 22.6 489.4 256 256 489.4z" />
    </Icon>
);

export default Diamond;