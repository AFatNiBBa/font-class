
import { Icon, generic } from "../../index";

/**
 * A component that renders the `church` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/church?s=sharp-duotone-solid church}
 * @preview ![church](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM1MkwwIDUxMmwxNjAgMCAwLTI0MEwwIDM1MnptNDgwLTgwbDAgMjQwIDE2MCAwIDAtMTYwTDQ4MCAyNzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zNDQgMGwwIDI0IDAgMjQgMzIgMCAyNCAwIDAgNDgtMjQgMC0zMiAwIDAgNDYuNEw0ODAgMjI0bDAgMjg4LTk2IDAgMC05NmMwLTM1LjMtMjguNy02NC02NC02NHMtNjQgMjguNy02NCA2NGwwIDk2LTk2IDAgMC0yODggMTM2LTgxLjZMMjk2IDk2bC0zMiAwLTI0IDAgMC00OCAyNCAwIDMyIDAgMC0yNCAwLTI0IDQ4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Church: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 352L0 512l160 0 0-240L0 352zm480-80l0 240 160 0 0-160L480 272z" />
            <path d="M344 0l0 24 0 24 32 0 24 0 0 48-24 0-32 0 0 46.4L480 224l0 288-96 0 0-96c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 96-96 0 0-288 136-81.6L296 96l-32 0-24 0 0-48 24 0 32 0 0-24 0-24 48 0z" />
    </Icon>
);

export default Church;