
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-pause` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-pause?s=sharp-duotone-solid circle-pause}
 * @preview ![circle-pause](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTE2MC05Nmw2NCAwIDAgMzIgMCAxMjggMCAzMi02NCAwIDAtMzIgMC0xMjggMC0zMnptMTI4IDBsNjQgMCAwIDMyIDAgMTI4IDAgMzItNjQgMCAwLTMyIDAtMTI4IDAtMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yMjQgMTYwbDAgMzIgMCAxMjggMCAzMi02NCAwIDAtMzIgMC0xMjggMC0zMiA2NCAwem0xMjggMGwwIDMyIDAgMTI4IDAgMzItNjQgMCAwLTMyIDAtMTI4IDAtMzIgNjQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CirclePause: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm160-96l64 0 0 32 0 128 0 32-64 0 0-32 0-128 0-32zm128 0l64 0 0 32 0 128 0 32-64 0 0-32 0-128 0-32z" />
            <path d="M224 160l0 32 0 128 0 32-64 0 0-32 0-128 0-32 64 0zm128 0l0 32 0 128 0 32-64 0 0-32 0-128 0-32 64 0z" />
    </Icon>
);

export default CirclePause;