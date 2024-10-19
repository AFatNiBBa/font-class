
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bread-slice` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bread-slice?s=sharp-duotone-solid bread-slice}
 * @preview ![bread-slice](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5MkMwIDY0IDE5MiAzMiAyNTYgMzJzMjU2IDMyIDI1NiAxNjBjMCAzNS4zLTI4LjcgNjQtNjQgNjRsMCAyMjRMNjQgNDgwbDAtMjI0Yy0zNS4zIDAtNjQtMjguNy02NC02NHptMTI4IDk2bDAgMzIgMzIgMCAwLTMyLTMyIDB6bTAgOTZsMCAzMiAzMiAwIDAtMzItMzIgMHptOTYgMGwwIDMyIDMyIDAgMC0zMi0zMiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTI4IDI4OGwzMiAwIDAgMzItMzIgMCAwLTMyem0wIDk2bDMyIDAgMCAzMi0zMiAwIDAtMzJ6bTEyOCAwbDAgMzItMzIgMCAwLTMyIDMyIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const BreadSlice: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 192C0 64 192 32 256 32s256 32 256 160c0 35.3-28.7 64-64 64l0 224L64 480l0-224c-35.3 0-64-28.7-64-64zm128 96l0 32 32 0 0-32-32 0zm0 96l0 32 32 0 0-32-32 0zm96 0l0 32 32 0 0-32-32 0z" />
            <path d="M128 288l32 0 0 32-32 0 0-32zm0 96l32 0 0 32-32 0 0-32zm128 0l0 32-32 0 0-32 32 0z" />
    </Icon>
);

export default BreadSlice;