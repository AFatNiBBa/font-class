
import { Icon } from "../../index";

/**
 * A component that renders the `square-o` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-o?s=sharp-solid square-o}
 * @preview ![square-o](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDQ4IDMyTDAgMzIgMCA0ODBsNDQ4IDAgMC00NDh6TTE0NCAyNTZhODAgODAgMCAxIDAgMTYwIDAgODAgODAgMCAxIDAgLTE2MCAwem04MCAxMjhhMTI4IDEyOCAwIDEgMSAwLTI1NiAxMjggMTI4IDAgMSAxIDAgMjU2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SquareO: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM144 256a80 80 0 1 0 160 0 80 80 0 1 0 -160 0zm80 128a128 128 0 1 1 0-256 128 128 0 1 1 0 256z" />
    </Icon>
);

export default SquareO;