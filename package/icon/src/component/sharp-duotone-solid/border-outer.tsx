
import { Icon, generic } from "../../index";

/**
 * A component that renders the `border-outer` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-outer?s=sharp-duotone-solid border-outer}
 * @preview ![border-outer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAyMjRsNjQgMCAwIDY0LTY0IDAgMC02NHptOTYtOTZsNjQgMCAwIDY0LTY0IDAgMC02NHptMCA5Nmw2NCAwIDAgNjQtNjQgMCAwLTY0em0wIDk2bDY0IDAgMCA2NC02NCAwIDAtNjR6bTk2LTk2bDY0IDAgMCA2NC02NCAwIDAtNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zODQgOTZsMCAzMjBMNjQgNDE2IDY0IDk2bDMyMCAwek02NCAzMkwwIDMyIDAgOTYgMCA0MTZsMCA2NCA2NCAwIDMyMCAwIDY0IDAgMC02NCAwLTMyMCAwLTY0LTY0IDBMNjQgMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const BorderOuter: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 224l64 0 0 64-64 0 0-64zm96-96l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm96-96l64 0 0 64-64 0 0-64z" />
            <path d="M384 96l0 320L64 416 64 96l320 0zM64 32L0 32 0 96 0 416l0 64 64 0 320 0 64 0 0-64 0-320 0-64-64 0L64 32z" />
    </Icon>
);

export default BorderOuter;