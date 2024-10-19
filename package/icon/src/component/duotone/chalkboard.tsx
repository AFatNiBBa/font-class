
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chalkboard` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chalkboard?s=duotone chalkboard}
 * @preview ![chalkboard](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ0OGMwIDE3LjcgMTQuMyAzMiAzMiAzMmw1MTIgMGMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMmwwLTMyMGMwLTM1LjMtMjguNy02NC02NC02NEw5NiAzMkM2MC43IDMyIDMyIDYwLjcgMzIgOTZsMCAzMjBjLTE3LjcgMC0zMiAxNC4zLTMyIDMyek05NiA5NmwzODQgMCAwIDMyMC02NCAwLTE5MiAwTDk2IDQxNiA5NiA5NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQ4MCA5Nkw5NiA5NmwwIDMyMCAxMjggMCAwLTMyYzAtMTcuNyAxNC4zLTMyIDMyLTMybDEyOCAwYzE3LjcgMCAzMiAxNC4zIDMyIDMybDAgMzIgNjQgMCAwLTMyMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Chalkboard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 448c0 17.7 14.3 32 32 32l512 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-320c0-35.3-28.7-64-64-64L96 32C60.7 32 32 60.7 32 96l0 320c-17.7 0-32 14.3-32 32zM96 96l384 0 0 320-64 0-192 0L96 416 96 96z" />
            <path d="M480 96L96 96l0 320 128 0 0-32c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 32 64 0 0-320z" />
    </Icon>
);

export default Chalkboard;