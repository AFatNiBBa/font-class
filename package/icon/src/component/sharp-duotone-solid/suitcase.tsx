
import { Icon, generic } from "../../index";

/**
 * A component that renders the `suitcase` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/suitcase?s=sharp-duotone-solid suitcase}
 * @preview ![suitcase](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiA5NmwzMiAwIDAgMzIgMCAzNTItMzIgMEw5NiA5NnptMjg4IDBsMzIgMCAwIDM4NC0zMiAwIDAtMzUyIDAtMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNTIgMEwxMjggMGwwIDI0IDAgNzIgMCAzMiAwIDM1MiAyNTYgMCAwLTM1MiAwLTMyIDAtNzIgMC0yNEwzNjAgMCAxNTIgMHpNMzM2IDk2TDE3NiA5NmwwLTQ4IDE2MCAwIDAgNDh6TTAgOTZMMCA0ODBsOTYgMEw5NiA5NiAwIDk2ek01MTIgNDgwbDAtMzg0LTk2IDAgMCAzODQgOTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Suitcase: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 96l32 0 0 32 0 352-32 0L96 96zm288 0l32 0 0 384-32 0 0-352 0-32z" />
            <path d="M152 0L128 0l0 24 0 72 0 32 0 352 256 0 0-352 0-32 0-72 0-24L360 0 152 0zM336 96L176 96l0-48 160 0 0 48zM0 96L0 480l96 0L96 96 0 96zM512 480l0-384-96 0 0 384 96 0z" />
    </Icon>
);

export default Suitcase;