
import { Icon } from "../../index";

/**
 * A component that renders the `square-ring` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-ring?s=sharp-solid square-ring}
 * @preview ![square-ring](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDQ4IDMyTDAgMzIgMCA0ODBsNDQ4IDAgMC00NDh6TTEyOCAyNTZhOTYgOTYgMCAxIDAgMTkyIDAgOTYgOTYgMCAxIDAgLTE5MiAwem05NiAxNjBhMTYwIDE2MCAwIDEgMSAwLTMyMCAxNjAgMTYwIDAgMSAxIDAgMzIweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SquareRing: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM128 256a96 96 0 1 0 192 0 96 96 0 1 0 -192 0zm96 160a160 160 0 1 1 0-320 160 160 0 1 1 0 320z" />
    </Icon>
);

export default SquareRing;