
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bandage` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bandage?s=duotone bandage}
 * @preview ![bandage](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MEwwIDM1MmMwIDM1LjMgMjguNyA2NCA2NCA2NGw5NiAwIDAtMzIwTDY0IDk2QzI4LjcgOTYgMCAxMjQuNyAwIDE2MHpNMTkyIDk2bDAgMzIwIDI1NiAwIDAtMzIwTDE5MiA5NnpNMjk2IDIwOGEyNCAyNCAwIDEgMSAtNDggMCAyNCAyNCAwIDEgMSA0OCAwem0wIDk2YTI0IDI0IDAgMSAxIC00OCAwIDI0IDI0IDAgMSAxIDQ4IDB6bTk2LTk2YTI0IDI0IDAgMSAxIC00OCAwIDI0IDI0IDAgMSAxIDQ4IDB6bTAgOTZhMjQgMjQgMCAxIDEgLTQ4IDAgMjQgMjQgMCAxIDEgNDggMHpNNDgwIDk2bDAgMzIwIDk2IDBjMzUuMyAwIDY0LTI4LjcgNjQtNjRsMC0xOTJjMC0zNS4zLTI4LjctNjQtNjQtNjRsLTk2IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xOTIgOTZsLTMyIDAgMCAzMjAgMzIgMCAwLTMyMHptMjg4IDBsLTMyIDAgMCAzMjAgMzIgMCAwLTMyMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Bandage: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 160L0 352c0 35.3 28.7 64 64 64l96 0 0-320L64 96C28.7 96 0 124.7 0 160zM192 96l0 320 256 0 0-320L192 96zM296 208a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm0 96a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm96-96a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm0 96a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM480 96l0 320 96 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-96 0z" />
            <path d="M192 96l-32 0 0 320 32 0 0-320zm288 0l-32 0 0 320 32 0 0-320z" />
    </Icon>
);

export default Bandage;