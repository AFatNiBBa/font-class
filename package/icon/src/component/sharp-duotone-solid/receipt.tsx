
import { Icon, generic } from "../../index";

/**
 * A component that renders the `receipt` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/receipt?s=sharp-duotone-solid receipt}
 * @preview ![receipt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMNjQgNDggMTI4IDBsNjQgNDhMMjU2IDBsNjQgNDhMMzg0IDBsMCA1MTItNjQtNDgtNjQgNDgtNjQtNDgtNjQgNDhMNjQgNDY0IDAgNTEyIDAgMHpNODAgMTQ0bDAgMzIgMTYgMCAxOTIgMCAxNiAwIDAtMzItMTYgMEw5NiAxNDRsLTE2IDB6bTAgOTZsMCAzMiAxNiAwIDE5MiAwIDE2IDAgMC0zMi0xNiAwTDk2IDI0MGwtMTYgMHptMCA5NmwwIDMyIDE2IDAgMTkyIDAgMTYgMCAwLTMyLTE2IDBMOTYgMzM2bC0xNiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNODAgMTQ0bDE2IDAgMTkyIDAgMTYgMCAwIDMyLTE2IDBMOTYgMTc2bC0xNiAwIDAtMzJ6bTAgMTkybDE2IDAgMTkyIDAgMTYgMCAwIDMyLTE2IDBMOTYgMzY4bC0xNiAwIDAtMzJ6bTE2LTk2bDE5MiAwIDE2IDAgMCAzMi0xNiAwTDk2IDI3MmwtMTYgMCAwLTMyIDE2IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Receipt: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L64 48 128 0l64 48L256 0l64 48L384 0l0 512-64-48-64 48-64-48-64 48L64 464 0 512 0 0zM80 144l0 32 16 0 192 0 16 0 0-32-16 0L96 144l-16 0zm0 96l0 32 16 0 192 0 16 0 0-32-16 0L96 240l-16 0zm0 96l0 32 16 0 192 0 16 0 0-32-16 0L96 336l-16 0z" />
            <path d="M80 144l16 0 192 0 16 0 0 32-16 0L96 176l-16 0 0-32zm0 192l16 0 192 0 16 0 0 32-16 0L96 368l-16 0 0-32zm16-96l192 0 16 0 0 32-16 0L96 272l-16 0 0-32 16 0z" />
    </Icon>
);

export default Receipt;