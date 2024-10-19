
import { Icon } from "../../index";

/**
 * A component that renders the `plus` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plus?s=sharp-solid plus}
 * @preview ![plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDgwbDAtMzItNjQgMCAwIDMyIDAgMTQ0TDQ4IDIyNGwtMzIgMCAwIDY0IDMyIDAgMTQ0IDAgMCAxNDQgMCAzMiA2NCAwIDAtMzIgMC0xNDQgMTQ0IDAgMzIgMCAwLTY0LTMyIDAtMTQ0IDAgMC0xNDR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Plus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M256 80l0-32-64 0 0 32 0 144L48 224l-32 0 0 64 32 0 144 0 0 144 0 32 64 0 0-32 0-144 144 0 32 0 0-64-32 0-144 0 0-144z" />
    </Icon>
);

export default Plus;