
import { Icon, generic } from "../../index";

/**
 * A component that renders the `custard` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/custard?s=sharp-duotone-solid custard}
 * @preview ![custard](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAzNTJMOTYuMyAyMDYuOGMyNi42LTcuNiA1My4xLTE1LjIgNzkuNy0yMi44YzM3LjMgMTAuNyA3NC43IDIxLjMgMTEyIDMyYzM3LjMtMTAuNyA3NC43LTIxLjMgMTEyLTMybDc5LjcgMjIuOEw1MTIgMzUyIDY0IDM1MnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTEyOCA2NGwzMjAgMCAzMS43IDE0Mi44TDQwMCAxODQgMjg4IDIxNiAxNzYgMTg0IDk2LjMgMjA2LjggMTI4IDY0ek0zMiAzODRsNTEyIDAgMzIgMCAwIDY0LTMyIDBMMzIgNDQ4IDAgNDQ4bDAtNjQgMzIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Custard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 352L96.3 206.8c26.6-7.6 53.1-15.2 79.7-22.8c37.3 10.7 74.7 21.3 112 32c37.3-10.7 74.7-21.3 112-32l79.7 22.8L512 352 64 352z" />
            <path d="M128 64l320 0 31.7 142.8L400 184 288 216 176 184 96.3 206.8 128 64zM32 384l512 0 32 0 0 64-32 0L32 448 0 448l0-64 32 0z" />
    </Icon>
);

export default Custard;