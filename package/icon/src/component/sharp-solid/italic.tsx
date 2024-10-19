
import { Icon } from "../../index";

/**
 * A component that renders the `italic` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/italic?s=sharp-solid italic}
 * @preview ![italic](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTI4IDMybDMyIDAgMTkyIDAgMzIgMCAwIDY0LTMyIDAtNTguNyAwTDE2MCA0MTZsNjQgMCAzMiAwIDAgNjQtMzIgMEwzMiA0ODAgMCA0ODBsMC02NCAzMiAwIDU4LjcgMEwyMjQgOTZsLTY0IDAtMzIgMCAwLTY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Italic: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M128 32l32 0 192 0 32 0 0 64-32 0-58.7 0L160 416l64 0 32 0 0 64-32 0L32 480 0 480l0-64 32 0 58.7 0L224 96l-64 0-32 0 0-64z" />
    </Icon>
);

export default Italic;