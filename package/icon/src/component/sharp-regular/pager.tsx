
import { Icon } from "../../index";

/**
 * A component that renders the `pager` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pager?s=sharp-regular pager}
 * @preview ![pager](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDggMTEybDAgMjg4IDQxNiAwIDAtMjg4TDQ4IDExMnpNMCA2NGw0OCAwIDQxNiAwIDQ4IDAgMCA0OCAwIDI4OCAwIDQ4LTQ4IDBMNDggNDQ4IDAgNDQ4bDAtNDhMMCAxMTIgMCA2NHptOTYgOTZsMzIwIDAgMCA5Nkw5NiAyNTZsMC05NnptOTYgMTQ0bDAgNDgtOTYgMCAwLTQ4IDk2IDB6bTMyIDQ4bDAtNDggOTYgMCAwIDQ4LTk2IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Pager: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 112l0 288 416 0 0-288L48 112zM0 64l48 0 416 0 48 0 0 48 0 288 0 48-48 0L48 448 0 448l0-48L0 112 0 64zm96 96l320 0 0 96L96 256l0-96zm96 144l0 48-96 0 0-48 96 0zm32 48l0-48 96 0 0 48-96 0z" />
    </Icon>
);

export default Pager;