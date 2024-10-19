
import { Icon } from "../../index";

/**
 * A component that renders the `square-full` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-full?s=solid square-full}
 * @preview ![square-full](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0wIDBINTEyVjUxMkgwVjBaIi8+PC9zdmc+|width=32|height=32)
 */
const SquareFull: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0H512V512H0V0Z" />
    </Icon>
);

export default SquareFull;