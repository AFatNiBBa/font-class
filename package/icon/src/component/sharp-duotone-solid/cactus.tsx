
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cactus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cactus?s=sharp-duotone-solid cactus}
 * @preview ![cactus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2bDAgNDhMMCAyNzJsMCA0OCA0OCAwIDY0IDAgNDggMCAwLTk2LTQ4IDAtMTYgMCAwLTgwIDAtNDhMMCA5NnpNMzUyIDM1MmwwIDk2IDQ4IDAgNjQgMCA0OCAwIDAtNDggMC0xMjggMC00OC05NiAwIDAgNDggMCA4MC0xNiAwLTQ4IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNjAgOTZjMC01MyA0My05NiA5Ni05NnM5NiA0MyA5NiA5NmwwIDQxNi0xOTIgMCAwLTQxNnptODAgNjRhMTYgMTYgMCAxIDAgLTMyIDAgMTYgMTYgMCAxIDAgMzIgMHptNDggMjQwYTE2IDE2IDAgMSAwIDAtMzIgMTYgMTYgMCAxIDAgMCAzMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Cactus: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96l0 48L0 272l0 48 48 0 64 0 48 0 0-96-48 0-16 0 0-80 0-48L0 96zM352 352l0 96 48 0 64 0 48 0 0-48 0-128 0-48-96 0 0 48 0 80-16 0-48 0z" />
            <path d="M160 96c0-53 43-96 96-96s96 43 96 96l0 416-192 0 0-416zm80 64a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 240a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Cactus;