
import { Icon } from "../../index";

/**
 * A component that renders the `cowbell` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cowbell?s=sharp-regular cowbell}
 * @preview ![cowbell](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTI4IDBsMjQgMEwyOTYgMGwyNCAwIDAgMjQgMCA3MiA2NCAwIDU0LjQgMjcyIDkuNiA0OC00OSAwTDQ5IDQxNiAwIDQxNmw5LjYtNDhMNjQgOTZsNjQgMCAwLTcyIDAtMjR6TTI3MiA0OGwtOTYgMCAwIDQ4IDk2IDAgMC00OHpNMTAzLjQgMTQ0TDU4LjYgMzY4bDMzMC45IDBMMzQ0LjYgMTQ0bC0yNDEuMyAwek0yODggNDQ4YzAgMzUuMy0yOC43IDY0LTY0IDY0cy02NC0yOC43LTY0LTY0bDEyOCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Cowbell: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 0l24 0L296 0l24 0 0 24 0 72 64 0 54.4 272 9.6 48-49 0L49 416 0 416l9.6-48L64 96l64 0 0-72 0-24zM272 48l-96 0 0 48 96 0 0-48zM103.4 144L58.6 368l330.9 0L344.6 144l-241.3 0zM288 448c0 35.3-28.7 64-64 64s-64-28.7-64-64l128 0z" />
    </Icon>
);

export default Cowbell;