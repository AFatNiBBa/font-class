
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sim-card` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sim-card?s=sharp-duotone-solid sim-card}
 * @preview ![sim-card](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMzIgMCAyNTYgMGwxMy4zIDAgOS40IDkuNCA5NiA5NiA5LjQgOS40IDAgMTMuMyAwIDM1MiAwIDMyLTMyIDBMMzIgNTEyIDAgNTEybDAtMzJMMCAzMiAwIDB6TTY0IDE5MmwwIDY0IDAgMzIgMCA2NCAwIDMyIDAgNjQgNjQgMCAzMiAwIDY0IDAgMzIgMCA2NCAwIDAtNjQgMC0zMiAwLTY0IDAtMzIgMC02NC02NCAwLTMyIDAtNjQgMC0zMiAwLTY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMjggMTkybC02NCAwIDAgNjQgNjQgMCAwLTY0ek02NCAyODhsMCA2NCA4MCAwIDk2IDAgODAgMCAwLTY0LTgwIDAtOTYgMC04MCAwem0yNTYtMzJsMC02NC02NCAwIDAgNjQgNjQgMHptLTk2LTY0bC02NCAwIDAgNjQgNjQgMCAwLTY0em05NiAxOTJsLTY0IDAgMCA2NCA2NCAwIDAtNjR6bS05NiA2NGwwLTY0LTY0IDAgMCA2NCA2NCAwem0tOTYgMGwwLTY0LTY0IDAgMCA2NCA2NCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SimCard: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L32 0 256 0l13.3 0 9.4 9.4 96 96 9.4 9.4 0 13.3 0 352 0 32-32 0L32 512 0 512l0-32L0 32 0 0zM64 192l0 64 0 32 0 64 0 32 0 64 64 0 32 0 64 0 32 0 64 0 0-64 0-32 0-64 0-32 0-64-64 0-32 0-64 0-32 0-64 0z" />
            <path d="M128 192l-64 0 0 64 64 0 0-64zM64 288l0 64 80 0 96 0 80 0 0-64-80 0-96 0-80 0zm256-32l0-64-64 0 0 64 64 0zm-96-64l-64 0 0 64 64 0 0-64zm96 192l-64 0 0 64 64 0 0-64zm-96 64l0-64-64 0 0 64 64 0zm-96 0l0-64-64 0 0 64 64 0z" />
    </Icon>
);

export default SimCard;