
import { Icon } from "../../index";

/**
 * A component that renders the `text` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text?s=sharp-thin text}
 * @preview ![text](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYgMzJsOCAwIDIwMCAwIDIwMCAwIDggMCAwIDggMCA2NCAwIDgtMTYgMCAwLTggMC01NkwyMzIgNDhsMCA0MTYgODAgMCA4IDAgMCAxNi04IDAtODggMC04OCAwLTggMCAwLTE2IDggMCA4MCAwIDAtNDE2TDMyIDQ4bDAgNTYgMCA4LTE2IDAgMC04IDAtNjQgMC04eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Text: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 32l8 0 200 0 200 0 8 0 0 8 0 64 0 8-16 0 0-8 0-56L232 48l0 416 80 0 8 0 0 16-8 0-88 0-88 0-8 0 0-16 8 0 80 0 0-416L32 48l0 56 0 8-16 0 0-8 0-64 0-8z" />
    </Icon>
);

export default Text;