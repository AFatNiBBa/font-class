
import { Icon } from "../../index";

/**
 * A component that renders the `text` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text?s=sharp-regular text}
 * @preview ![text](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAzMmwyNCAwIDQwMCAwIDI0IDAgMCAyNCAwIDcyIDAgMjQtNDggMCAwLTI0IDAtNDhMMjQ4IDgwbDAgMzUyIDQ4IDAgMjQgMCAwIDQ4LTI0IDAtMTQ0IDAtMjQgMCAwLTQ4IDI0IDAgNDggMCAwLTM1Mkw0OCA4MGwwIDQ4IDAgMjRMMCAxNTJsMC0yNEwwIDU2IDAgMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Text: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l24 0 400 0 24 0 0 24 0 72 0 24-48 0 0-24 0-48L248 80l0 352 48 0 24 0 0 48-24 0-144 0-24 0 0-48 24 0 48 0 0-352L48 80l0 48 0 24L0 152l0-24L0 56 0 32z" />
    </Icon>
);

export default Text;