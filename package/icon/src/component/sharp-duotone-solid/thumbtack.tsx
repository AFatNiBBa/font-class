
import { Icon, generic } from "../../index";

/**
 * A component that renders the `thumbtack` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thumbtack?s=sharp-duotone-solid thumbtack}
 * @preview ![thumbtack](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyMGwwIDMyIDE2MCAwIDAtMTI4IDY0IDAgMCAxMjggMTYwIDAgMC0zMmMwLTIyLjUtMjMuNy03Ni41LTgyLjEtMTA2LjdMMjkwLjUgNjQgMzIwIDY0bDMyIDAgMC02NEwzMjAgMCA2NCAwIDMyIDBsMCA2NCAzMiAwIDI5LjUgMEw4Mi4xIDIxMi4xQzIzLjcgMjQwLjcgMCAyOTMgMCAzMjB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNjAgNDgwbDAtMjU2IDY0IDAgMCAyNTYgMCAzMi02NCAwIDAtMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Thumbtack: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 320l0 32 160 0 0-128 64 0 0 128 160 0 0-32c0-22.5-23.7-76.5-82.1-106.7L290.5 64 320 64l32 0 0-64L320 0 64 0 32 0l0 64 32 0 29.5 0L82.1 212.1C23.7 240.7 0 293 0 320z" />
            <path d="M160 480l0-256 64 0 0 256 0 32-64 0 0-32z" />
    </Icon>
);

export default Thumbtack;