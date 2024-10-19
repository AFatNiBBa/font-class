
import { Icon, generic } from "../../index";

/**
 * A component that renders the `popsicle` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/popsicle?s=duotone popsicle}
 * @preview ![popsicle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MEwwIDMzNmMwIDI2LjUgMjEuNSA0OCA0OCA0OGw4MCAwIDAtMTkyYzAtMTcuNyAxNC4zLTMyIDMyLTMyczMyIDE0LjMgMzIgMzJsMCAxOTIgODAgMGMyNi41IDAgNDgtMjEuNSA0OC00OGwwLTE3NkMzMjAgNzEuNiAyNDguNCAwIDE2MCAwUzAgNzEuNiAwIDE2MHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTEyOCAxOTJjMC0xNy43IDE0LjMtMzIgMzItMzJzMzIgMTQuMyAzMiAzMlY0ODBjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzJWMTkyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Popsicle: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 160L0 336c0 26.5 21.5 48 48 48l80 0 0-192c0-17.7 14.3-32 32-32s32 14.3 32 32l0 192 80 0c26.5 0 48-21.5 48-48l0-176C320 71.6 248.4 0 160 0S0 71.6 0 160z" />
            <path d="M128 192c0-17.7 14.3-32 32-32s32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V192z" />
    </Icon>
);

export default Popsicle;