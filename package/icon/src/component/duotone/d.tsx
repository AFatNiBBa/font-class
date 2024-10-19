
import { Icon, generic } from "../../index";

/**
 * A component that renders the `d` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/d?s=duotone d}
 * @preview ![d](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2QzAgNjAuNyAyOC43IDMyIDY0IDMybDk2IDBjMTIzLjcgMCAyMjQgMTAwLjMgMjI0IDIyNHMtMTAwLjMgMjI0LTIyNCAyMjRsLTk2IDBjLTM1LjMgMC02NC0yOC43LTY0LTY0TDAgOTZ6bTE2MCAwTDY0IDk2bDAgMzIwIDk2IDBjODguNCAwIDE2MC03MS42IDE2MC0xNjBzLTcxLjYtMTYwLTE2MC0xNjB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9IiIvPjwvc3ZnPg==|width=32|height=32)
 */
const D: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 96C0 60.7 28.7 32 64 32l96 0c123.7 0 224 100.3 224 224s-100.3 224-224 224l-96 0c-35.3 0-64-28.7-64-64L0 96zm160 0L64 96l0 320 96 0c88.4 0 160-71.6 160-160s-71.6-160-160-160z" />
    </Icon>
);

export default D;