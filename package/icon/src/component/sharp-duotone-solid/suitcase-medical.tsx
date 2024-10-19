
import { Icon, generic } from "../../index";

/**
 * A component that renders the `suitcase-medical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/suitcase-medical?s=sharp-duotone-solid suitcase-medical}
 * @preview ![suitcase-medical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiA5NmwwIDM4NCAzMiAwIDAtMzUyIDAtMzJMOTYgOTZ6bTI4OCAwbDAgMzIgMCAzNTIgMzIgMCAwLTM4NC0zMiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTI4IDBsMjQgMEwzNjAgMGwyNCAwIDAgMjQgMCA3MiAwIDMyIDAgMzUyLTI1NiAwIDAtMzUyIDAtMzIgMC03MiAwLTI0ek0zMzYgNDhMMTc2IDQ4bDAgNDggMTYwIDAgMC00OHpNOTYgOTZsMCAzODRMMCA0ODAgMCA5Nmw5NiAwek00MTYgNDgwbDAtMzg0IDk2IDAgMCAzODQtOTYgMHpNMjI0IDE5MmwwIDY0LTY0IDAgMCA2NCA2NCAwIDAgNjQgNjQgMCAwLTY0IDY0IDAgMC02NC02NCAwIDAtNjQtNjQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const SuitcaseMedical: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 96l0 384 32 0 0-352 0-32L96 96zm288 0l0 32 0 352 32 0 0-384-32 0z" />
            <path d="M128 0l24 0L360 0l24 0 0 24 0 72 0 32 0 352-256 0 0-352 0-32 0-72 0-24zM336 48L176 48l0 48 160 0 0-48zM96 96l0 384L0 480 0 96l96 0zM416 480l0-384 96 0 0 384-96 0zM224 192l0 64-64 0 0 64 64 0 0 64 64 0 0-64 64 0 0-64-64 0 0-64-64 0z" />
    </Icon>
);

export default SuitcaseMedical;