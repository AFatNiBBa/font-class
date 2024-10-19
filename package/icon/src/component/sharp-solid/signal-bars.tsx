
import { Icon } from "../../index";

/**
 * A component that renders the `signal-bars` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-bars?s=sharp-solid signal-bars}
 * @preview ![signal-bars](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjA4IDBMNTEyIDBsMCA1MTIgOTYgMEw2MDggMHpNMzUyIDEyOGwwIDM4NCA5NiAwIDAtMzg0LTk2IDB6TTI4OCAyNTZsLTk2IDAgMCAyNTYgOTYgMCAwLTI1NnpNMTI4IDM4NGwtOTYgMCAwIDEyOCA5NiAwIDAtMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SignalBars: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M608 0L512 0l0 512 96 0L608 0zM352 128l0 384 96 0 0-384-96 0zM288 256l-96 0 0 256 96 0 0-256zM128 384l-96 0 0 128 96 0 0-128z" />
    </Icon>
);

export default SignalBars;