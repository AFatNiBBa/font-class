
import { Icon, generic } from "../../index";

/**
 * A component that renders the `floppy-disks` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/floppy-disks?s=sharp-duotone-solid floppy-disks}
 * @preview ![floppy-disks](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2bDAgMjRMMCA0ODhsMCAyNCAyNCAwIDM2OCAwIDI0IDAgMC00OC0yNCAwTDQ4IDQ2NGwwLTM0NCAwLTI0TDAgOTZ6TTI0MCAyODhhNjQgNjQgMCAxIDAgMTI4IDAgNjQgNjQgMCAxIDAgLTEyOCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTIwIDBMOTYgMGwwIDI0IDAgMzY4IDAgMjQgMjQgMCAzNjggMCAyNCAwIDAtMjQgMC0yNjQgMC05LjktNy03TDQwMSA3bC03LTdMMzg0IDAgMTIwIDB6bTQwIDY0bDIyNCAwIDAgOTYtMjI0IDAgMC05NnpNMzA0IDIyNGE2NCA2NCAwIDEgMSAwIDEyOCA2NCA2NCAwIDEgMSAwLTEyOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const FloppyDisks: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96l0 24L0 488l0 24 24 0 368 0 24 0 0-48-24 0L48 464l0-344 0-24L0 96zM240 288a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
            <path d="M120 0L96 0l0 24 0 368 0 24 24 0 368 0 24 0 0-24 0-264 0-9.9-7-7L401 7l-7-7L384 0 120 0zm40 64l224 0 0 96-224 0 0-96zM304 224a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default FloppyDisks;