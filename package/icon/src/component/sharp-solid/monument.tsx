
import { Icon } from "../../index";

/**
 * A component that renders the `monument` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/monument?s=sharp-solid monument}
 * @preview ![monument](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTkyIDBMOTYgOTYgNTYgNDE2bDI3MiAwTDI4OCA5NiAxOTIgMHptNjQgMzIwbC0xMjggMCAwLTQ4IDEyOCAwIDAgNDh6TTMyIDQ0OEwwIDQ0OGwwIDY0IDMyIDAgMzIwIDAgMzIgMCAwLTY0LTMyIDBMMzIgNDQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Monument: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 0L96 96 56 416l272 0L288 96 192 0zm64 320l-128 0 0-48 128 0 0 48zM32 448L0 448l0 64 32 0 320 0 32 0 0-64-32 0L32 448z" />
    </Icon>
);

export default Monument;