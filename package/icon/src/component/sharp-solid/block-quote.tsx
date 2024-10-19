
import { Icon } from "../../index";

/**
 * A component that renders the `block-quote` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/block-quote?s=sharp-solid block-quote}
 * @preview ![block-quote](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDQ4IDY0TDAgNjRsMCA2NCA0NDggMCAwLTY0em0wIDE2MGwtMzIwIDAgMCA2NCAzMjAgMCAwLTY0ek0xMjggMzg0bDAgNjQgMzIwIDAgMC02NC0zMjAgMHpNNjQgMjI0TDAgMjI0IDAgNDQ4bDY0IDAgMC0yMjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const BlockQuote: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 64L0 64l0 64 448 0 0-64zm0 160l-320 0 0 64 320 0 0-64zM128 384l0 64 320 0 0-64-320 0zM64 224L0 224 0 448l64 0 0-224z" />
    </Icon>
);

export default BlockQuote;