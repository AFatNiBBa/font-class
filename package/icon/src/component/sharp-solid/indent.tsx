
import { Icon } from "../../index";

/**
 * A component that renders the `indent` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/indent?s=sharp-solid indent}
 * @preview ![indent](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAzMmw0NDggMCAwIDY0TDAgOTYgMCAzMnpNMTkyIDE2MGwyNTYgMCAwIDY0LTI1NiAwIDAtNjR6TTQ0OCAyODhsMCA2NC0yNTYgMCAwLTY0IDI1NiAwek0wIDQxNmw0NDggMCAwIDY0TDAgNDgwbDAtNjR6bTAtNjRMMCAxNjBsMTI4IDk2TDAgMzUyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Indent: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l448 0 0 64L0 96 0 32zM192 160l256 0 0 64-256 0 0-64zM448 288l0 64-256 0 0-64 256 0zM0 416l448 0 0 64L0 480l0-64zm0-64L0 160l128 96L0 352z" />
    </Icon>
);

export default Indent;