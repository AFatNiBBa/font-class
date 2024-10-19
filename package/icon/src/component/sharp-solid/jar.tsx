
import { Icon } from "../../index";

/**
 * A component that renders the `jar` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jar?s=sharp-solid jar}
 * @preview ![jar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIgMEwyODggMGwwIDY0TDMyIDY0IDMyIDB6TTAgOTZsMzIwIDAgMCA0MTZMMCA1MTIgMCA5NnpNMjU2IDIyNEw2NCAyMjRsMCAxNjAgMTkyIDAgMC0xNjB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Jar: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M32 0L288 0l0 64L32 64 32 0zM0 96l320 0 0 416L0 512 0 96zM256 224L64 224l0 160 192 0 0-160z" />
    </Icon>
);

export default Jar;