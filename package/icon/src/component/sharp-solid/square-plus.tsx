
import { Icon } from "../../index";

/**
 * A component that renders the `square-plus` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-plus?s=sharp-solid square-plus}
 * @preview ![square-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDQ4IDMyTDAgMzIgMCA0ODBsNDQ4IDAgMC00NDh6TTIwMCAzNjhsMC0yNCAwLTY0LTY0IDAtMjQgMCAwLTQ4IDI0IDAgNjQgMCAwLTY0IDAtMjQgNDggMCAwIDI0IDAgNjQgNjQgMCAyNCAwIDAgNDgtMjQgMC02NCAwIDAgNjQgMCAyNC00OCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SquarePlus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM200 368l0-24 0-64-64 0-24 0 0-48 24 0 64 0 0-64 0-24 48 0 0 24 0 64 64 0 24 0 0 48-24 0-64 0 0 64 0 24-48 0z" />
    </Icon>
);

export default SquarePlus;