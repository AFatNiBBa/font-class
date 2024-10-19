
import { Icon } from "../../index";

/**
 * A component that renders the `shekel-sign` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shekel-sign?s=sharp-solid shekel-sign}
 * @preview ![shekel-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIgMzJMMCAzMiAwIDY0IDAgNDgwbDY0IDBMNjQgOTZsMTI4IDBjMzUuMyAwIDY0IDI4LjcgNjQgNjRsMCAxOTIgNjQgMCAwLTE5MmMwLTcwLjctNTcuMy0xMjgtMTI4LTEyOEwzMiAzMnpNMzIwIDQ4MGM3MC43IDAgMTI4LTU3LjMgMTI4LTEyOGwwLTMyMC02NCAwIDAgMzIwYzAgMzUuMy0yOC43IDY0LTY0IDY0bC0xMjggMCAwLTI1Ni02NCAwIDAgMjg4IDAgMzIgMzIgMCAxNjAgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ShekelSign: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 32L0 32 0 64 0 480l64 0L64 96l128 0c35.3 0 64 28.7 64 64l0 192 64 0 0-192c0-70.7-57.3-128-128-128L32 32zM320 480c70.7 0 128-57.3 128-128l0-320-64 0 0 320c0 35.3-28.7 64-64 64l-128 0 0-256-64 0 0 288 0 32 32 0 160 0z" />
    </Icon>
);

export default ShekelSign;