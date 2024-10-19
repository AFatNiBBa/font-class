
import { Icon, generic } from "../../index";

/**
 * A component that renders the `g` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/g?s=duotone g}
 * @preview ![g](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMjQgOTZDMTM1LjYgOTYgNjQgMTY3LjYgNjQgMjU2czcxLjYgMTYwIDE2MCAxNjBjNzcuNCAwIDE0Mi01NSAxNTYuOC0xMjhMMjU2IDI4OGMtMTcuNyAwLTMyLTE0LjMtMzItMzJzMTQuMy0zMiAzMi0zMmwxNDQgMGMyNS44IDAgNDkuNiAyMS40IDQ3LjIgNTAuNkM0MzcuOCAzODkuNiAzNDEuNCA0ODAgMjI0IDQ4MEMxMDAuMyA0ODAgMCAzNzkuNyAwIDI1NlMxMDAuMyAzMiAyMjQgMzJjNTcuNCAwIDEwOS43IDIxLjYgMTQ5LjMgNTdjMTMuMiAxMS44IDE0LjMgMzIgMi41IDQ1LjJzLTMyIDE0LjMtNDUuMiAyLjVDMzAyLjMgMTExLjQgMjY1IDk2IDIyNCA5NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const G: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M224 96C135.6 96 64 167.6 64 256s71.6 160 160 160c77.4 0 142-55 156.8-128L256 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l144 0c25.8 0 49.6 21.4 47.2 50.6C437.8 389.6 341.4 480 224 480C100.3 480 0 379.7 0 256S100.3 32 224 32c57.4 0 109.7 21.6 149.3 57c13.2 11.8 14.3 32 2.5 45.2s-32 14.3-45.2 2.5C302.3 111.4 265 96 224 96z" />
    </Icon>
);

export default G;