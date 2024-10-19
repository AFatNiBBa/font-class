
import { Icon, generic } from "../../index";

/**
 * A component that renders the `stairs` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stairs?s=duotone stairs}
 * @preview ![stairs](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggMzUybDAgNjQgNjQgMCAwLTY0LTY0IDB6TTI1NiAyMjRsMCA2NCA2NCAwIDAtNjQtNjQgMHpNMzg0IDk2bDAgNjQgNjQgMCAwLTY0LTY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00MTYgMzJjLTE3LjcgMC0zMiAxNC4zLTMyIDMybDAgMzIgNjQgMCA5NiAwYzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMyTDQxNiAzMnpNMzg0IDE2MGwtOTYgMGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJsMCAzMiA2NCAwIDk2IDBjMTcuNyAwIDMyLTE0LjMgMzItMzJsMC0zMi02NCAwek0xNjAgMjg4Yy0xNy43IDAtMzIgMTQuMy0zMiAzMmwwIDMyIDY0IDAgOTYgMGMxNy43IDAgMzItMTQuMyAzMi0zMmwwLTMyLTY0IDAtOTYgMHptMzIgMTI4bC02NCAwLTk2IDBjLTE3LjcgMC0zMiAxNC4zLTMyIDMyczE0LjMgMzIgMzIgMzJsMTI4IDBjMTcuNyAwIDMyLTE0LjMgMzItMzJsMC0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Stairs: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M128 352l0 64 64 0 0-64-64 0zM256 224l0 64 64 0 0-64-64 0zM384 96l0 64 64 0 0-64-64 0z" />
            <path d="M416 32c-17.7 0-32 14.3-32 32l0 32 64 0 96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L416 32zM384 160l-96 0c-17.7 0-32 14.3-32 32l0 32 64 0 96 0c17.7 0 32-14.3 32-32l0-32-64 0zM160 288c-17.7 0-32 14.3-32 32l0 32 64 0 96 0c17.7 0 32-14.3 32-32l0-32-64 0-96 0zm32 128l-64 0-96 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-32z" />
    </Icon>
);

export default Stairs;