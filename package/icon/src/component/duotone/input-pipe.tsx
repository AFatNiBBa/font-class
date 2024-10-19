
import { Icon, generic } from "../../index";

/**
 * A component that renders the `input-pipe` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/input-pipe?s=duotone input-pipe}
 * @preview ![input-pipe](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDEyOEwwIDM4NGMwIDM1LjMgMjguNyA2NCA2NCA2NGw1MTIgMGMzNS4zIDAgNjQtMjguNyA2NC02NGwwLTI1NmMwLTM1LjMtMjguNy02NC02NC02NEw2NCA2NEMyOC43IDY0IDAgOTIuNyAwIDEyOHptNjQgMGw1MTIgMCAwIDI1Nkw2NCAzODRsMC0yNTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMDQgMTg0YzAtMTMuMyAxMC43LTI0IDI0LTI0czI0IDEwLjcgMjQgMjRWMzI4YzAgMTMuMy0xMC43IDI0LTI0IDI0cy0yNC0xMC43LTI0LTI0VjE4NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const InputPipe: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 128L0 384c0 35.3 28.7 64 64 64l512 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64C28.7 64 0 92.7 0 128zm64 0l512 0 0 256L64 384l0-256z" />
            <path d="M104 184c0-13.3 10.7-24 24-24s24 10.7 24 24V328c0 13.3-10.7 24-24 24s-24-10.7-24-24V184z" />
    </Icon>
);

export default InputPipe;