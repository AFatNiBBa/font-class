
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-point-ribbon` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-point-ribbon?s=sharp-duotone-solid hand-point-ribbon}
 * @preview ![hand-point-ribbon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAyNzJsMCA5MWMwIDMzLjkgMTMuNSA2Ni41IDM3LjUgOTAuNWwxMS42IDExLjZjMzAgMzAgNzAuNyA0Ni45IDExMy4xIDQ2LjlsNjEuNyAwYzg4LjQgMCAxNjAtNzEuNiAxNjAtMTYwbC05NiAwIDAtMzItNjQgMCAwIDQ4IDAgMTYtMTYgMC0xMTIgMC0xNiAwIDAtMzIgMTYgMCA5NiAwIDAtMzIgMC00OEwzMiAyNzJ6TTY0IDBsMCAzMiA2NCAwIDAtMzJMNjQgMHptMCAxNjBsMCA4MCA2NCAwIDAtODAtNjQgMHptOTYtMzJsMCAzMiAwIDgwIDY0IDAgMC0xMTItNjQgMHptOTYgMzJsMCAxMjggNjQgMCAwLTEyOC02NCAwem05NiAzMmwwIDEyOCA2NCAwIDAtMTI4LTY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNjAgMTI4VjMySDBMNDMuNiA4MCAwIDEyOEgxNjB6Ii8+PC9zdmc+|width=32|height=32)
 */
const HandPointRibbon: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 272l0 91c0 33.9 13.5 66.5 37.5 90.5l11.6 11.6c30 30 70.7 46.9 113.1 46.9l61.7 0c88.4 0 160-71.6 160-160l-96 0 0-32-64 0 0 48 0 16-16 0-112 0-16 0 0-32 16 0 96 0 0-32 0-48L32 272zM64 0l0 32 64 0 0-32L64 0zm0 160l0 80 64 0 0-80-64 0zm96-32l0 32 0 80 64 0 0-112-64 0zm96 32l0 128 64 0 0-128-64 0zm96 32l0 128 64 0 0-128-64 0z" />
            <path d="M160 128V32H0L43.6 80 0 128H160z" />
    </Icon>
);

export default HandPointRibbon;