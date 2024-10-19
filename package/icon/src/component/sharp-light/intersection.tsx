
import { Icon } from "../../index";

/**
 * A component that renders the `intersection` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/intersection?s=sharp-light intersection}
 * @preview ![intersection](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyMjRMMCA0ODBsMzIgMCAwLTI1NmMwLTg4LjQgNzEuNi0xNjAgMTYwLTE2MHMxNjAgNzEuNiAxNjAgMTYwbDAgMjU2IDMyIDAgMC0yNTZjMC0xMDYtODYtMTkyLTE5Mi0xOTJTMCAxMTggMCAyMjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Intersection: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 224L0 480l32 0 0-256c0-88.4 71.6-160 160-160s160 71.6 160 160l0 256 32 0 0-256c0-106-86-192-192-192S0 118 0 224z" />
    </Icon>
);

export default Intersection;