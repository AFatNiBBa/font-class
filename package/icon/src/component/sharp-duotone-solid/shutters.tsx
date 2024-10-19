
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shutters` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shutters?s=sharp-duotone-solid shutters}
 * @preview ![shutters](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIyNGw1MTIgMC0yNC05NkwyNCAxMjggMCAyMjR6TTAgMzUybDUxMiAwLTI0LTk2TDI0IDI1NiAwIDM1MnpNMCA0ODBsNTEyIDAtMjQtOTZMMjQgMzg0IDAgNDgweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAzMmwzMiAwIDQ0OCAwIDMyIDAgMCA2NC0zMiAwTDMyIDk2IDAgOTYgMCAzMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Shutters: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224l512 0-24-96L24 128 0 224zM0 352l512 0-24-96L24 256 0 352zM0 480l512 0-24-96L24 384 0 480z" />
            <path d="M0 32l32 0 448 0 32 0 0 64-32 0L32 96 0 96 0 32z" />
    </Icon>
);

export default Shutters;