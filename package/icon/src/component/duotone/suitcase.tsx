
import { Icon, generic } from "../../index";

/**
 * A component that renders the `suitcase` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/suitcase?s=duotone suitcase}
 * @preview ![suitcase](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiA5NmwzMiAwIDAgMzIgMCAzNTItMzIgMEw5NiA5NnptMjg4IDBsMzIgMCAwIDM4NC0zMiAwIDAtMzUyIDAtMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNzYgNTZsMCA0MCAxNjAgMCAwLTQwYzAtNC40LTMuNi04LTgtOEwxODQgNDhjLTQuNCAwLTggMy42LTggOHpNMTI4IDk2bDAtNDBjMC0zMC45IDI1LjEtNTYgNTYtNTZMMzI4IDBjMzAuOSAwIDU2IDI1LjEgNTYgNTZsMCA0MCAwIDMyIDAgMzUyLTI1NiAwIDAtMzUyIDAtMzJ6TTY0IDk2bDMyIDAgMCAzODQtMzIgMGMtMzUuMyAwLTY0LTI4LjctNjQtNjRMMCAxNjBjMC0zNS4zIDI4LjctNjQgNjQtNjR6TTQ0OCA0ODBsLTMyIDAgMC0zODQgMzIgMGMzNS4zIDAgNjQgMjguNyA2NCA2NGwwIDI1NmMwIDM1LjMtMjguNyA2NC02NCA2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Suitcase: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 96l32 0 0 32 0 352-32 0L96 96zm288 0l32 0 0 384-32 0 0-352 0-32z" />
            <path d="M176 56l0 40 160 0 0-40c0-4.4-3.6-8-8-8L184 48c-4.4 0-8 3.6-8 8zM128 96l0-40c0-30.9 25.1-56 56-56L328 0c30.9 0 56 25.1 56 56l0 40 0 32 0 352-256 0 0-352 0-32zM64 96l32 0 0 384-32 0c-35.3 0-64-28.7-64-64L0 160c0-35.3 28.7-64 64-64zM448 480l-32 0 0-384 32 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64z" />
    </Icon>
);

export default Suitcase;