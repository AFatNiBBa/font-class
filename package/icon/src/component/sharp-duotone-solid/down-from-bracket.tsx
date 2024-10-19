
import { Icon, generic } from "../../index";

/**
 * A component that renders the `down-from-bracket` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-from-bracket?s=sharp-duotone-solid down-from-bracket}
 * @preview ![down-from-bracket](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMCAzMiAwIDE2MGwwIDMyIDY0IDAgMC0zMiAwLTk2IDMyMCAwIDAgOTYgMCAzMiA2NCAwIDAtMzIgMC0xMjggMC0zMkw0MTYgMCAzMiAwIDAgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIyNCA1MTJMMzg0IDM1MmwwLTMyLTk2IDAgMC0xNjAtMTI4IDAgMCAxNjAtOTYgMCAwIDMyTDIyNCA1MTJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const DownFromBracket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 32 0 160l0 32 64 0 0-32 0-96 320 0 0 96 0 32 64 0 0-32 0-128 0-32L416 0 32 0 0 0z" />
            <path d="M224 512L384 352l0-32-96 0 0-160-128 0 0 160-96 0 0 32L224 512z" />
    </Icon>
);

export default DownFromBracket;