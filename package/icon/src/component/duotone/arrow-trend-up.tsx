
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-trend-up` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-trend-up?s=duotone arrow-trend-up}
 * @preview ![arrow-trend-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM4NGMwIDguMiAzLjEgMTYuNCA5LjQgMjIuNnMxNC40IDkuNCAyMi42IDkuNHMxNi40LTMuMSAyMi42LTkuNEwxOTIgMjY5LjMgMjk3LjQgMzc0LjZjMTIuNSAxMi41IDMyLjggMTIuNSA0NS4zIDBMNTEyIDIwNS4zbDAtNDUuMy00NS4zIDBMMzIwIDMwNi43IDIxNC42IDIwMS40Yy0xMi41LTEyLjUtMzIuOC0xMi41LTQ1LjMgMGwtMTYwIDE2MEMzLjEgMzY3LjYgMCAzNzUuOCAwIDM4NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM1MiAxMjhjMC0xNy43IDE0LjMtMzIgMzItMzJsMTYwIDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJsMCAxNjBjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzJsMC0xMjgtMTI4IDBjLTE3LjcgMC0zMi0xNC4zLTMyLTMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ArrowTrendUp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 384c0 8.2 3.1 16.4 9.4 22.6s14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L192 269.3 297.4 374.6c12.5 12.5 32.8 12.5 45.3 0L512 205.3l0-45.3-45.3 0L320 306.7 214.6 201.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160C3.1 367.6 0 375.8 0 384z" />
            <path d="M352 128c0-17.7 14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128-128 0c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default ArrowTrendUp;