
import { Icon, generic } from "../../index";

/**
 * A component that renders the `print` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/print?s=duotone print}
 * @preview ![print](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCA2NGwwIDEyOCAzODQgMCAwLTEwMS41YzAtMTctNi43LTMzLjMtMTguNy00NS4zTDQwMi43IDE4LjdDMzkwLjcgNi43IDM3NC41IDAgMzU3LjUgMEwxMjggMEM5Mi43IDAgNjQgMjguNyA2NCA2NHpNOTYgMzUybDAgMzIgMCA2NGMwIDM1LjMgMjguNyA2NCA2NCA2NGwxOTIgMGMzNS4zIDAgNjQtMjguNyA2NC02NGwwLTY0IDAtMzJMOTYgMzUyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAyNTZjMC0zNS4zIDI4LjctNjQgNjQtNjRsMzg0IDBjMzUuMyAwIDY0IDI4LjcgNjQgNjRsMCA5NmMwIDE3LjctMTQuMyAzMi0zMiAzMmwtNjQgMCAwLTMyTDk2IDM1MmwwIDMyLTY0IDBjLTE3LjcgMC0zMi0xNC4zLTMyLTMybDAtOTZ6bTQ1NiAxNmEyNCAyNCAwIDEgMCAtNDggMCAyNCAyNCAwIDEgMCA0OCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Print: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 64l0 128 384 0 0-101.5c0-17-6.7-33.3-18.7-45.3L402.7 18.7C390.7 6.7 374.5 0 357.5 0L128 0C92.7 0 64 28.7 64 64zM96 352l0 32 0 64c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-64 0-32L96 352z" />
            <path d="M0 256c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 96c0 17.7-14.3 32-32 32l-64 0 0-32L96 352l0 32-64 0c-17.7 0-32-14.3-32-32l0-96zm456 16a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default Print;