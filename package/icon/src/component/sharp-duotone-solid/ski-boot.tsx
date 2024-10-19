
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ski-boot` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ski-boot?s=sharp-duotone-solid ski-boot}
 * @preview ![ski-boot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDUxMmwxMi44LTY0TDQ4MCA0NDhsMzIgMCAwIDY0TDAgNTEyek00NC44IDI4OEM2MS45IDIwMi43IDc4LjkgMTE3LjQgOTYgMzJsMTI4IDBjLTE3LjEgODUuMy0zNC4xIDE3MC43LTUxLjIgMjU2bC0xMjggMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTEyLjggNDQ4TDQ4MCA0NDhsMC05NkwzMjYuNCAyODggMjcyIDI4OGwtMTYgMCAwLTMyIDE2IDAgNjAuOCAwIDEyLjgtNjRMMjg4IDE5MmwtMTYgMCAwLTMyIDE2IDAgNjQgMEwzODQgMCAzMjAgMGwtNi40IDMyTDIyNCAzMiAxNzIuOCAyODhsLTEyOCAwLTMyIDE2MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const SkiBoot: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 512l12.8-64L480 448l32 0 0 64L0 512zM44.8 288C61.9 202.7 78.9 117.4 96 32l128 0c-17.1 85.3-34.1 170.7-51.2 256l-128 0z" />
            <path d="M12.8 448L480 448l0-96L326.4 288 272 288l-16 0 0-32 16 0 60.8 0 12.8-64L288 192l-16 0 0-32 16 0 64 0L384 0 320 0l-6.4 32L224 32 172.8 288l-128 0-32 160z" />
    </Icon>
);

export default SkiBoot;