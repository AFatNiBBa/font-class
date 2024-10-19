
import { Icon } from "../../index";

/**
 * A component that renders the `stopwatch` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stopwatch?s=sharp-solid stopwatch}
 * @preview ![stopwatch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjI0IDBMMTQ0IDBsMCA2NCA0OCAwIDAgMzQuNEM5Mi4zIDExMy44IDE2IDIwMCAxNiAzMDRjMCAxMTQuOSA5My4xIDIwOCAyMDggMjA4czIwOC05My4xIDIwOC0yMDhjMC00MS44LTEyLjMtODAuNy0zMy41LTExMy4ybDI0LjEtMjQuMUw0NDUuMyAxNDQgNDAwIDk4LjdsLTIyLjYgMjIuNkwzNTUuNyAxNDNjLTI4LjEtMjMtNjIuMi0zOC44LTk5LjctNDQuNkwyNTYgNjRsNDggMCAwLTY0TDIyNCAwem0yNCAyMTZsMCAxMTIgMCAyNC00OCAwIDAtMjQgMC0xMTIgMC0yNCA0OCAwIDAgMjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Stopwatch: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 0L144 0l0 64 48 0 0 34.4C92.3 113.8 16 200 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-41.8-12.3-80.7-33.5-113.2l24.1-24.1L445.3 144 400 98.7l-22.6 22.6L355.7 143c-28.1-23-62.2-38.8-99.7-44.6L256 64l48 0 0-64L224 0zm24 216l0 112 0 24-48 0 0-24 0-112 0-24 48 0 0 24z" />
    </Icon>
);

export default Stopwatch;