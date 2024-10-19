
import { Icon } from "../../index";

/**
 * A component that renders the `info` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/info?s=sharp-solid info}
 * @preview ![info](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTI4IDMybDAgODAtODAgMCAwLTgwIDgwIDB6TTAgMTkybDMyIDAgNjQgMCAzMiAwIDAgMzIgMCAyMjQgMzIgMCAzMiAwIDAgNjQtMzIgMC0zMiAwLTY0IDAtMzIgMEwwIDUxMmwwLTY0IDMyIDAgMzIgMCAwLTE5Mi0zMiAwTDAgMjU2bDAtNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Info: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M128 32l0 80-80 0 0-80 80 0zM0 192l32 0 64 0 32 0 0 32 0 224 32 0 32 0 0 64-32 0-32 0-64 0-32 0L0 512l0-64 32 0 32 0 0-192-32 0L0 256l0-64z" />
    </Icon>
);

export default Info;