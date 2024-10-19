
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scroll` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scroll?s=duotone scroll}
 * @preview ![scroll](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAzMmwzNTIgMGMzNS4zIDAgNjQgMjguNyA2NCA2NGwwIDI1Ni0xNjAgMGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJsMCAxNmMwIDQ0LjItMzUuOCA4MC04MCA4MHMtODAtMzUuOC04MC04MGwwLTI0MCAwLTY0YzAtMzUuMy0yOC43LTY0LTY0LTY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTI4IDE2MGwtOTYgMGMtMTcuNyAwLTMyLTE0LjMtMzItMzJMMCA5NkMwIDYwLjcgMjguNyAzMiA2NCAzMnM2NCAyOC43IDY0IDY0bDAgNjR6TTI4OCA0MDBsMC0xNmMwLTE3LjcgMTQuMy0zMiAzMi0zMmwyMjQgMGMxNy43IDAgMzIgMTQuMyAzMiAzMmMwIDUzLTQzIDk2LTk2IDk2bC0yNzIgMGM0NC4yIDAgODAtMzUuOCA4MC04MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Scroll: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 32l352 0c35.3 0 64 28.7 64 64l0 256-160 0c-17.7 0-32 14.3-32 32l0 16c0 44.2-35.8 80-80 80s-80-35.8-80-80l0-240 0-64c0-35.3-28.7-64-64-64z" />
            <path d="M128 160l-96 0c-17.7 0-32-14.3-32-32L0 96C0 60.7 28.7 32 64 32s64 28.7 64 64l0 64zM288 400l0-16c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32c0 53-43 96-96 96l-272 0c44.2 0 80-35.8 80-80z" />
    </Icon>
);

export default Scroll;