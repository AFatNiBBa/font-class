
import { Icon } from "../../index";

/**
 * A component that renders the `computer-mouse` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/computer-mouse?s=solid computer-mouse}
 * @preview ![computer-mouse](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0wIDM1MkMwIDQ0MC4zNzUgNzEuNjI1IDUxMiAxNjAgNTEySDIyNEMzMTIuMzc1IDUxMiAzODQgNDQwLjM3NSAzODQgMzUyVjIyNEgwVjM1MlpNMTc2IDBIMTYwQzcxLjYyNSAwIDAgNzEuNjI1IDAgMTYwVjE5MkgxNzZWMFpNMjI0IDBIMjA4VjE5MkgzODRWMTYwQzM4NCA3MS42MjUgMzEyLjM3NSAwIDIyNCAwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ComputerMouse: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 352C0 440.375 71.625 512 160 512H224C312.375 512 384 440.375 384 352V224H0V352ZM176 0H160C71.625 0 0 71.625 0 160V192H176V0ZM224 0H208V192H384V160C384 71.625 312.375 0 224 0Z" />
    </Icon>
);

export default ComputerMouse;