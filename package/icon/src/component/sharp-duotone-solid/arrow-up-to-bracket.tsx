
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-to-bracket` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-to-bracket?s=sharp-duotone-solid arrow-up-to-bracket}
 * @preview ![arrow-up-to-bracket](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMCAzMiAwIDE2MGwwIDMyIDY0IDAgMC0zMiAwLTk2IDMyMCAwIDAgOTYgMCAzMiA2NCAwIDAtMzIgMC0xMjggMC0zMkw0MTYgMCAzMiAwIDAgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIyNCAxNDYuN2wtMjIuNiAyMi42LTEyOCAxMjhMNTAuNyAzMjAgOTYgMzY1LjNsMjIuNi0yMi42TDE5MiAyNjkuMyAxOTIgNDgwbDAgMzIgNjQgMCAwLTMyIDAtMjEwLjcgNzMuNCA3My40TDM1MiAzNjUuMyAzOTcuMyAzMjBsLTIyLjYtMjIuNi0xMjgtMTI4TDIyNCAxNDYuN3oiLz48L3N2Zz4=|width=32|height=32)
 */
const ArrowUpToBracket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 32 0 160l0 32 64 0 0-32 0-96 320 0 0 96 0 32 64 0 0-32 0-128 0-32L416 0 32 0 0 0z" />
            <path d="M224 146.7l-22.6 22.6-128 128L50.7 320 96 365.3l22.6-22.6L192 269.3 192 480l0 32 64 0 0-32 0-210.7 73.4 73.4L352 365.3 397.3 320l-22.6-22.6-128-128L224 146.7z" />
    </Icon>
);

export default ArrowUpToBracket;