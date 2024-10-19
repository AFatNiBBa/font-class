
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scroll` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scroll?s=sharp-duotone-solid scroll}
 * @preview ![scroll](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAzMmwzNTIgMGMzNS4zIDAgNjQgMjguNyA2NCA2NGwwIDI1Ni0xOTIgMCAwIDQ4YzAgNDQuMi0zNS44IDgwLTgwIDgwcy04MC0zNS44LTgwLTgwbDAtMjQwIDAtNjRjMC0zNS4zLTI4LjctNjQtNjQtNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMjggOTZsMCA2NEwwIDE2MCAwIDk2QzAgNjAuNyAyOC43IDMyIDY0IDMyczY0IDI4LjcgNjQgNjR6TTI4OCA0MDBsMC00OCAyODggMCAwIDMyYzAgNTMtNDMgOTYtOTYgOTZsLTI3MiAwYzQ0LjIgMCA4MC0zNS44IDgwLTgweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Scroll: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 32l352 0c35.3 0 64 28.7 64 64l0 256-192 0 0 48c0 44.2-35.8 80-80 80s-80-35.8-80-80l0-240 0-64c0-35.3-28.7-64-64-64z" />
            <path d="M128 96l0 64L0 160 0 96C0 60.7 28.7 32 64 32s64 28.7 64 64zM288 400l0-48 288 0 0 32c0 53-43 96-96 96l-272 0c44.2 0 80-35.8 80-80z" />
    </Icon>
);

export default Scroll;