
import { Icon } from "../../index";

/**
 * A component that renders the `n` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/n?s=sharp-regular n}
 * @preview ![n](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA1NkwwIDMybDM1LjIgMCA3LjIgOC42TDMzNiAzOTAuMSAzMzYgNTZsMC0yNCA0OCAwIDAgMjQgMCA0MDAgMCAyNC0zNS4yIDAtNy4yLTguNkw0OCAxMjEuOSA0OCA0NTZsMCAyNEwwIDQ4MGwwLTI0TDAgNTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const N: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 56L0 32l35.2 0 7.2 8.6L336 390.1 336 56l0-24 48 0 0 24 0 400 0 24-35.2 0-7.2-8.6L48 121.9 48 456l0 24L0 480l0-24L0 56z" />
    </Icon>
);

export default N;