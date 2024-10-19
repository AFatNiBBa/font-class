
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mattress-pillow` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mattress-pillow?s=duotone mattress-pillow}
 * @preview ![mattress-pillow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDEyOEwwIDM4NGMwIDM1LjMgMjguNyA2NCA2NCA2NGwxOTIgMCAwLTM4NEw2NCA2NEMyOC43IDY0IDAgOTIuNyAwIDEyOHptNjQgMzJjMC0xNy43IDE0LjMtMzIgMzItMzJsNjQgMGMxNy43IDAgMzIgMTQuMyAzMiAzMmwwIDE5MmMwIDE3LjctMTQuMyAzMi0zMiAzMmwtNjQgMGMtMTcuNyAwLTMyLTE0LjMtMzItMzJsMC0xOTJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNTYgNjRINTc2YzM1LjMgMCA2NCAyOC43IDY0IDY0VjM4NGMwIDM1LjMtMjguNyA2NC02NCA2NEgyNTZWNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const MattressPillow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 128L0 384c0 35.3 28.7 64 64 64l192 0 0-384L64 64C28.7 64 0 92.7 0 128zm64 32c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-192z" />
            <path d="M256 64H576c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H256V64z" />
    </Icon>
);

export default MattressPillow;