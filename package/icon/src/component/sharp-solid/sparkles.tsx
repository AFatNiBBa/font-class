
import { Icon } from "../../index";

/**
 * A component that renders the `sparkles` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sparkles?s=sharp-solid sparkles}
 * @preview ![sparkles](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzg0IDY0TDQxNiAwbDMyIDY0IDY0IDMyLTY0IDMyLTMyIDY0LTMyLTY0TDMyMCA5Nmw2NC0zMnpNMTI4IDE5MkwxOTIgNjRsNjQgMTI4IDEyOCA2NEwyNTYgMzIwIDE5MiA0NDggMTI4IDMyMCAwIDI1NmwxMjgtNjR6TTQxNiAzMjBsMzIgNjQgNjQgMzItNjQgMzItMzIgNjQtMzItNjQtNjQtMzIgNjQtMzIgMzItNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Sparkles: typeof Icon = x => (
    <Icon {...x}>
        <path d="M384 64L416 0l32 64 64 32-64 32-32 64-32-64L320 96l64-32zM128 192L192 64l64 128 128 64L256 320 192 448 128 320 0 256l128-64zM416 320l32 64 64 32-64 32-32 64-32-64-64-32 64-32 32-64z" />
    </Icon>
);

export default Sparkles;