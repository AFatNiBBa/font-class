
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle?s=thin rectangle}
 * @preview ![rectangle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDQ4IDgwYzI2LjUgMCA0OCAyMS41IDQ4IDQ4bDAgMjU2YzAgMjYuNS0yMS41IDQ4LTQ4IDQ4TDY0IDQzMmMtMjYuNSAwLTQ4LTIxLjUtNDgtNDhsMC0yNTZjMC0yNi41IDIxLjUtNDggNDgtNDhsMzg0IDB6TTY0IDY0QzI4LjcgNjQgMCA5Mi43IDAgMTI4TDAgMzg0YzAgMzUuMyAyOC43IDY0IDY0IDY0bDM4NCAwYzM1LjMgMCA2NC0yOC43IDY0LTY0bDAtMjU2YzAtMzUuMy0yOC43LTY0LTY0LTY0TDY0IDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Rectangle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 80c26.5 0 48 21.5 48 48l0 256c0 26.5-21.5 48-48 48L64 432c-26.5 0-48-21.5-48-48l0-256c0-26.5 21.5-48 48-48l384 0zM64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64z" />
    </Icon>
);

export default Rectangle;