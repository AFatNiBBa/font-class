
import { Icon } from "../../index";

/**
 * A component that renders the `exclamation` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/exclamation?s=sharp-solid exclamation}
 * @preview ![exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNOTYgNjRsMC0zMkwzMiAzMmwwIDMyIDAgMjU2IDAgMzIgNjQgMCAwLTMyTDk2IDY0em0wIDM1MmwtNjQgMCAwIDY0IDY0IDAgMC02NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Exclamation: typeof Icon = x => (
    <Icon viewBox="0 0 128 512" {...x}>
        <path d="M96 64l0-32L32 32l0 32 0 256 0 32 64 0 0-32L96 64zm0 352l-64 0 0 64 64 0 0-64z" />
    </Icon>
);

export default Exclamation;