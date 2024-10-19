
import { Icon } from "../../index";

/**
 * A component that renders the `hourglass` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass?s=sharp-regular hourglass}
 * @preview ![hourglass](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjQgMEwwIDAgMCA0OGwyNCAwIDggMCAwIDcyIDAgOS45IDcgNyAxMTkgMTE5TDM5IDM3NWwtNyA3IDAgOS45IDAgNzItOCAwTDAgNDY0bDAgNDggMjQgMCAzMzYgMCAyNCAwIDAtNDgtMjQgMC04IDAgMC03MiAwLTkuOS03LTctMTE5LTExOUwzNDUgMTM3bDctNyAwLTkuOSAwLTcyIDggMCAyNCAwIDAtNDhMMzYwIDAgMjQgMHpNMzA0IDQ4bDAgNjIuMS0xMTIgMTEyTDgwIDExMC4xIDgwIDQ4bDIyNCAwek0xOTIgMjg5LjlsMTEyIDExMiAwIDYyLjFMODAgNDY0bDAtNjIuMSAxMTItMTEyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Hourglass: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M24 0L0 0 0 48l24 0 8 0 0 72 0 9.9 7 7 119 119L39 375l-7 7 0 9.9 0 72-8 0L0 464l0 48 24 0 336 0 24 0 0-48-24 0-8 0 0-72 0-9.9-7-7-119-119L345 137l7-7 0-9.9 0-72 8 0 24 0 0-48L360 0 24 0zM304 48l0 62.1-112 112L80 110.1 80 48l224 0zM192 289.9l112 112 0 62.1L80 464l0-62.1 112-112z" />
    </Icon>
);

export default Hourglass;