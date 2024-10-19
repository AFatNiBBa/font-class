
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hammer-brush` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hammer-brush?s=sharp-duotone-solid hammer-brush}
 * @preview ![hammer-brush](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE0NGwwIDE2IDgwLTMyIDMyIDMyIDk2IDAgNDggMCAwLTMyIDMyIDAgMCAzMiA2NCAwTDM1MiAwIDI4OCAwbDAgMzItMzIgMCAwLTMyTDE0NCAwQzY0LjUgMCAwIDY0LjUgMCAxNDR6TTM1MiAzMjBsMCAxOTIgNjQgMCAzMi05NiAzMiA5NiAxNjAgMCAwLTE5Mi0yODggMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM1MiAyNTZsMCA2NCAyODggMCAwLTY0LTk2LTY0TDU0NCAwIDQ0OCAwbDAgMTkyLTk2IDY0ek00OTYgNjRhMTYgMTYgMCAxIDEgMC0zMiAxNiAxNiAwIDEgMSAwIDMyek0xMTIgMTYwTDk2IDUxMmwxMjggMEwyMDggMTYwbC05NiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const HammerBrush: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 144l0 16 80-32 32 32 96 0 48 0 0-32 32 0 0 32 64 0L352 0 288 0l0 32-32 0 0-32L144 0C64.5 0 0 64.5 0 144zM352 320l0 192 64 0 32-96 32 96 160 0 0-192-288 0z" />
            <path d="M352 256l0 64 288 0 0-64-96-64L544 0 448 0l0 192-96 64zM496 64a16 16 0 1 1 0-32 16 16 0 1 1 0 32zM112 160L96 512l128 0L208 160l-96 0z" />
    </Icon>
);

export default HammerBrush;