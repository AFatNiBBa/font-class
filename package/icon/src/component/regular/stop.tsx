
import { Icon } from "../../index";

/**
 * A component that renders the `stop` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stop?s=regular stop}
 * @preview ![stop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIwIDExMmM4LjggMCAxNiA3LjIgMTYgMTZsMCAyNTZjMCA4LjgtNy4yIDE2LTE2IDE2TDY0IDQwMGMtOC44IDAtMTYtNy4yLTE2LTE2bDAtMjU2YzAtOC44IDcuMi0xNiAxNi0xNmwyNTYgMHpNNjQgNjRDMjguNyA2NCAwIDkyLjcgMCAxMjhMMCAzODRjMCAzNS4zIDI4LjcgNjQgNjQgNjRsMjU2IDBjMzUuMyAwIDY0LTI4LjcgNjQtNjRsMC0yNTZjMC0zNS4zLTI4LjctNjQtNjQtNjRMNjQgNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Stop: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M320 112c8.8 0 16 7.2 16 16l0 256c0 8.8-7.2 16-16 16L64 400c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l256 0zM64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64z" />
    </Icon>
);

export default Stop;