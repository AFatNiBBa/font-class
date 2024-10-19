
import { Icon, generic } from "../../index";

/**
 * A component that renders the `command` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/command?s=sharp-duotone-solid command}
 * @preview ![command](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyMGwwIDMyTDAgNDgwbDAgMzIgMzIgMCAxMjggMCAzMiAwIDAtMzIgMC05NiAwLTY0IDAtMTI4LTY0IDAgMCAxMjgtOTYgMEwwIDMyMHptNjQgNjRsNjQgMCAwIDY0LTY0IDAgMC02NHpNMzIwIDBsMCAzMiAwIDk2IDAgNjQgMCAxMjggNjQgMCAwLTEyOCA5NiAwIDMyIDAgMC0zMiAwLTEyOCAwLTMyTDQ4MCAwIDM1MiAwIDMyMCAwem02NCA2NGw2NCAwIDAgNjQtNjQgMCAwLTY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAwTDMyIDAgMTYwIDBsMzIgMCAwIDMyIDAgOTYgMTI4IDAgMCA2NC0xMjggMC02NCAwLTk2IDBMMCAxOTJsMC0zMkwwIDMyIDAgMHpNMzIwIDMyMGw2NCAwIDk2IDAgMzIgMCAwIDMyIDAgMTI4IDAgMzItMzIgMC0xMjggMC0zMiAwIDAtMzIgMC05Ni0xMjggMCAwLTY0IDEyOCAwek0xMjggMTI4bDAtNjRMNjQgNjRsMCA2NCA2NCAwek0zODQgMzg0bDAgNjQgNjQgMCAwLTY0LTY0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Command: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 320l0 32L0 480l0 32 32 0 128 0 32 0 0-32 0-96 0-64 0-128-64 0 0 128-96 0L0 320zm64 64l64 0 0 64-64 0 0-64zM320 0l0 32 0 96 0 64 0 128 64 0 0-128 96 0 32 0 0-32 0-128 0-32L480 0 352 0 320 0zm64 64l64 0 0 64-64 0 0-64z" />
            <path d="M0 0L32 0 160 0l32 0 0 32 0 96 128 0 0 64-128 0-64 0-96 0L0 192l0-32L0 32 0 0zM320 320l64 0 96 0 32 0 0 32 0 128 0 32-32 0-128 0-32 0 0-32 0-96-128 0 0-64 128 0zM128 128l0-64L64 64l0 64 64 0zM384 384l0 64 64 0 0-64-64 0z" />
    </Icon>
);

export default Command;