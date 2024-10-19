
import { Icon } from "../../index";

/**
 * A component that renders the `square-minus` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-minus?s=sharp-solid square-minus}
 * @preview ![square-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDQ4IDMyTDAgMzIgMCA0ODBsNDQ4IDAgMC00NDh6TTE1MiAyMzJsMTQ0IDAgMjQgMCAwIDQ4LTI0IDAtMTQ0IDAtMjQgMCAwLTQ4IDI0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const SquareMinus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM152 232l144 0 24 0 0 48-24 0-144 0-24 0 0-48 24 0z" />
    </Icon>
);

export default SquareMinus;