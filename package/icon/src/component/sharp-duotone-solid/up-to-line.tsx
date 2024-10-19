
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up-to-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-to-line?s=sharp-duotone-solid up-to-line}
 * @preview ![up-to-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgOTZsMzIgMCAzMjAgMCAzMiAwIDAtNjQtMzIgMEwzMiAzMiAwIDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTkyIDEyOEwzNTIgMjg4bDAgMzItOTYgMCAwIDE2MC0xMjggMCAwLTE2MC05NiAwIDAtMzJMMTkyIDEyOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const UpToLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 96l32 0 320 0 32 0 0-64-32 0L32 32 0 32z" />
            <path d="M192 128L352 288l0 32-96 0 0 160-128 0 0-160-96 0 0-32L192 128z" />
    </Icon>
);

export default UpToLine;