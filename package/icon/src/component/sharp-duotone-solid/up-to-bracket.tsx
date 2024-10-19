
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up-to-bracket` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-to-bracket?s=sharp-duotone-solid up-to-bracket}
 * @preview ![up-to-bracket](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMCAzMiAwIDE2MGwwIDMyIDY0IDAgMC0zMiAwLTk2IDMyMCAwIDAgOTYgMCAzMiA2NCAwIDAtMzIgMC0xMjggMC0zMkw0MTYgMCAzMiAwIDAgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIyNCAxNjBMNjQgMzIwbDAgMzIgOTYgMCAwIDE2MCAxMjggMCAwLTE2MCA5NiAwIDAtMzJMMjI0IDE2MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const UpToBracket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 32 0 160l0 32 64 0 0-32 0-96 320 0 0 96 0 32 64 0 0-32 0-128 0-32L416 0 32 0 0 0z" />
            <path d="M224 160L64 320l0 32 96 0 0 160 128 0 0-160 96 0 0-32L224 160z" />
    </Icon>
);

export default UpToBracket;