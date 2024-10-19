
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-chart-pie` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-chart-pie?s=sharp-duotone-solid file-chart-pie}
 * @preview ![file-chart-pie](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMjI0IDBsMCAxNjAgMTYwIDAgMCAzNTJMMCA1MTIgMCAwek02NCAzMjhjMCA2Ni4zIDUzLjcgMTIwIDEyMCAxMjBjNTguMSAwIDEwNi41LTQxLjIgMTE3LjYtOTZMMTYwIDM1MmwwLTE0MS42QzEwNS4yIDIyMS41IDY0IDI2OS45IDY0IDMyOHpNMTkyIDIwMGwwIDEyMCAxMjAgMGMwLTY2LjMtNTMuNy0xMjAtMTIwLTEyMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM4NCAxNjBsLTE2MCAwTDIyNCAwIDM4NCAxNjB6TTY0IDMyOGMwLTU4LjEgNDEuMi0xMDYuNSA5Ni0xMTcuNkwxNjAgMzUybDE0MS42IDBjLTExLjEgNTQuOC01OS41IDk2LTExNy42IDk2Yy02Ni4zIDAtMTIwLTUzLjctMTIwLTEyMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const FileChartPie: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 352L0 512 0 0zM64 328c0 66.3 53.7 120 120 120c58.1 0 106.5-41.2 117.6-96L160 352l0-141.6C105.2 221.5 64 269.9 64 328zM192 200l0 120 120 0c0-66.3-53.7-120-120-120z" />
            <path d="M384 160l-160 0L224 0 384 160zM64 328c0-58.1 41.2-106.5 96-117.6L160 352l141.6 0c-11.1 54.8-59.5 96-117.6 96c-66.3 0-120-53.7-120-120z" />
    </Icon>
);

export default FileChartPie;