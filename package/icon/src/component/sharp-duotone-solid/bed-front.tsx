
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bed-front` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bed-front?s=sharp-duotone-solid bed-front}
 * @preview ![bed-front](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIyNGwzMiAwIDQ4IDAgMTYwIDAgMzIgMCAxNjAgMCA0OCAwIDMyIDAgMCAzMiAwIDY0IDAgMzItMzIgMEwzMiAzNTIgMCAzNTJsMC0zMiAwLTY0IDAtMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00ODAgMzJMMzIgMzJsMCAxOTIgNDggMCAwLTk2IDE2MCAwIDAgOTYgMzIgMCAwLTk2IDE2MCAwIDAgOTYgNDggMCAwLTE5MnpNMzIgMzUyTDAgMzUybDAgMzIgMCA2NCAwIDMyIDY0IDAgMC0zMiAwLTMyIDM4NCAwIDAgMzIgMCAzMiA2NCAwIDAtMzIgMC02NCAwLTMyLTMyIDBMMzIgMzUyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BedFront: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224l32 0 48 0 160 0 32 0 160 0 48 0 32 0 0 32 0 64 0 32-32 0L32 352 0 352l0-32 0-64 0-32z" />
            <path d="M480 32L32 32l0 192 48 0 0-96 160 0 0 96 32 0 0-96 160 0 0 96 48 0 0-192zM32 352L0 352l0 32 0 64 0 32 64 0 0-32 0-32 384 0 0 32 0 32 64 0 0-32 0-64 0-32-32 0L32 352z" />
    </Icon>
);

export default BedFront;