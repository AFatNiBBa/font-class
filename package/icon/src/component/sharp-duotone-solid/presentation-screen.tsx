
import { Icon, generic } from "../../index";

/**
 * A component that renders the `presentation-screen` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/presentation-screen?s=sharp-duotone-solid presentation-screen}
 * @preview ![presentation-screen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA2NGwwIDI1NiAwIDMyIDMyIDAgMTkyIDAgNjQgMCAxOTIgMCAzMiAwIDAtMzIgMC0yNTYtNjQgMCAwIDIyNEw5NiAyODggOTYgNjQgMzIgNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDBMMzIgMCA1NDQgMGwzMiAwIDAgNjQtMzIgMEwzMiA2NCAwIDY0IDAgMHpNMjU2IDM4Ni43bDAtMzQuNyA2NCAwIDAgMzQuNyA1NC42IDU0LjZMMzk3LjMgNDY0IDM1MiA1MDkuM2wtMjIuNi0yMi42TDI4OCA0NDUuM2wtNDEuNCA0MS40TDIyNCA1MDkuMyAxNzguNyA0NjRsMjIuNi0yMi42TDI1NiAzODYuN3oiLz48L3N2Zz4=|width=32|height=32)
 */
const PresentationScreen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 64l0 256 0 32 32 0 192 0 64 0 192 0 32 0 0-32 0-256-64 0 0 224L96 288 96 64 32 64z" />
            <path d="M0 0L32 0 544 0l32 0 0 64-32 0L32 64 0 64 0 0zM256 386.7l0-34.7 64 0 0 34.7 54.6 54.6L397.3 464 352 509.3l-22.6-22.6L288 445.3l-41.4 41.4L224 509.3 178.7 464l22.6-22.6L256 386.7z" />
    </Icon>
);

export default PresentationScreen;