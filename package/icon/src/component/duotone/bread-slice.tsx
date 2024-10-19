
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bread-slice` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bread-slice?s=duotone bread-slice}
 * @preview ![bread-slice](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5MkMwIDY0IDE5MiAzMiAyNTYgMzJzMjU2IDMyIDI1NiAxNjBjMCAzNS4zLTI4LjcgNjQtNjQgNjRsMCAxNzZjMCAyNi41LTIxLjUgNDgtNDggNDhsLTI4OCAwYy0yNi41IDAtNDgtMjEuNS00OC00OGwwLTE3NmMtMzUuMyAwLTY0LTI4LjctNjQtNjR6TTEyOCAzMDRhMTYgMTYgMCAxIDAgMzIgMCAxNiAxNiAwIDEgMCAtMzIgMHptMCA5NmExNiAxNiAwIDEgMCAzMiAwIDE2IDE2IDAgMSAwIC0zMiAwem05NiAwYTE2IDE2IDAgMSAwIDMyIDAgMTYgMTYgMCAxIDAgLTMyIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNDQgMzg0YTE2IDE2IDAgMSAwIDAgMzIgMTYgMTYgMCAxIDAgMC0zMnptMC05NmExNiAxNiAwIDEgMCAwIDMyIDE2IDE2IDAgMSAwIDAtMzJ6bTk2IDk2YTE2IDE2IDAgMSAwIDAgMzIgMTYgMTYgMCAxIDAgMC0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const BreadSlice: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 192C0 64 192 32 256 32s256 32 256 160c0 35.3-28.7 64-64 64l0 176c0 26.5-21.5 48-48 48l-288 0c-26.5 0-48-21.5-48-48l0-176c-35.3 0-64-28.7-64-64zM128 304a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm0 96a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm96 0a16 16 0 1 0 32 0 16 16 0 1 0 -32 0z" />
            <path d="M144 384a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm0-96a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm96 96a16 16 0 1 0 0 32 16 16 0 1 0 0-32z" />
    </Icon>
);

export default BreadSlice;