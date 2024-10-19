
import { Icon } from "../../index";

/**
 * A component that renders the `square-bolt` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-bolt?s=sharp-solid square-bolt}
 * @preview ![square-bolt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDQ4IDMyTDAgMzIgMCA0ODBsNDQ4IDAgMC00NDh6TTIwMCAyNzJsLTg4IDAgMC0yNEwyODggMTEyIDI0OCAyNDBsODggMCAwIDI0TDE2MCA0MDBsNDAtMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SquareBolt: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM200 272l-88 0 0-24L288 112 248 240l88 0 0 24L160 400l40-128z" />
    </Icon>
);

export default SquareBolt;