
import { Icon } from "../../index";

/**
 * A component that renders the `square-small` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-small?s=regular square-small}
 * @preview ![square-small](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDE0NGM4LjggMCAxNiA3LjIgMTYgMTZsMCAxOTJjMCA4LjgtNy4yIDE2LTE2IDE2TDY0IDM2OGMtOC44IDAtMTYtNy4yLTE2LTE2bDAtMTkyYzAtOC44IDcuMi0xNiAxNi0xNmwxOTIgMHpNNjQgOTZDMjguNyA5NiAwIDEyNC43IDAgMTYwTDAgMzUyYzAgMzUuMyAyOC43IDY0IDY0IDY0bDE5MiAwYzM1LjMgMCA2NC0yOC43IDY0LTY0bDAtMTkyYzAtMzUuMy0yOC43LTY0LTY0LTY0TDY0IDk2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SquareSmall: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M256 144c8.8 0 16 7.2 16 16l0 192c0 8.8-7.2 16-16 16L64 368c-8.8 0-16-7.2-16-16l0-192c0-8.8 7.2-16 16-16l192 0zM64 96C28.7 96 0 124.7 0 160L0 352c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64L64 96z" />
    </Icon>
);

export default SquareSmall;