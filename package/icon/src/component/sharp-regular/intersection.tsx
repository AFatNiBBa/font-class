
import { Icon } from "../../index";

/**
 * A component that renders the `intersection` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/intersection?s=sharp-regular intersection}
 * @preview ![intersection](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyMjRMMCA0ODBsNDggMCAwLTI1NmMwLTc5LjUgNjQuNS0xNDQgMTQ0LTE0NHMxNDQgNjQuNSAxNDQgMTQ0bDAgMjU2IDQ4IDAgMC0yNTZjMC0xMDYtODYtMTkyLTE5Mi0xOTJTMCAxMTggMCAyMjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Intersection: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 224L0 480l48 0 0-256c0-79.5 64.5-144 144-144s144 64.5 144 144l0 256 48 0 0-256c0-106-86-192-192-192S0 118 0 224z" />
    </Icon>
);

export default Intersection;