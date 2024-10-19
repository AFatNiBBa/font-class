
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-peace` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-peace?s=sharp-duotone-solid hand-peace}
 * @preview ![hand-peace](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMCA2Ni4xTDQyLjggOTUuNCAxMDYuMSAyNDBsNjkuOSAwTDEwMS41IDY5LjggODguNiA0MC41IDMwIDY2LjF6TTY0IDI3MmwwIDkxYzAgMzMuOSAxMy41IDY2LjUgMzcuNSA5MC41bDExLjYgMTEuNmMzMCAzMCA3MC43IDQ2LjkgMTEzLjEgNDYuOWw2MS43IDBjODguNCAwIDE2MC03MS42IDE2MC0xNjBsLTk2IDAgMC0zMi02NCAwIDAgNDggMCAxNi0xNiAwLTExMiAwLTE2IDAgMC0zMiAxNiAwIDk2IDAgMC0zMiAwLTQ4LTY2LjEgMC02OS45IDBMNjQgMjcyek0xOTIgMGwwIDI0MCA2NCAwTDI1NiAwIDE5MiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzUyIDE2MGwtNjQgMCAwIDEyOCA2NCAwIDAtMTI4em05NiAzMmwtNjQgMCAwIDEyOCA2NCAwIDAtMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const HandPeace: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M30 66.1L42.8 95.4 106.1 240l69.9 0L101.5 69.8 88.6 40.5 30 66.1zM64 272l0 91c0 33.9 13.5 66.5 37.5 90.5l11.6 11.6c30 30 70.7 46.9 113.1 46.9l61.7 0c88.4 0 160-71.6 160-160l-96 0 0-32-64 0 0 48 0 16-16 0-112 0-16 0 0-32 16 0 96 0 0-32 0-48-66.1 0-69.9 0L64 272zM192 0l0 240 64 0L256 0 192 0z" />
            <path d="M352 160l-64 0 0 128 64 0 0-128zm96 32l-64 0 0 128 64 0 0-128z" />
    </Icon>
);

export default HandPeace;