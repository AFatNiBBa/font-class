
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clone` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clone?s=duotone clone}
 * @preview ![clone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIyNEwwIDQ0OGMwIDM1LjMgMjguNyA2NCA2NCA2NGwyMjQgMGMzNS4zIDAgNjQtMjguNyA2NC02NGwwLTk2LTY0IDAgMCA5Nkw2NCA0NDhsMC0yMjQgOTYgMCAwLTY0LTk2IDBjLTM1LjMgMC02NCAyOC43LTY0IDY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTYwIDI4OGMwIDM1LjMgMjguNyA2NCA2NCA2NEg0NDhjMzUuMyAwIDY0LTI4LjcgNjQtNjRWNjRjMC0zNS4zLTI4LjctNjQtNjQtNjRIMjI0Yy0zNS4zIDAtNjQgMjguNy02NCA2NFYyODh6Ii8+PC9zdmc+|width=32|height=32)
 */
const Clone: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224L0 448c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-96-64 0 0 96L64 448l0-224 96 0 0-64-96 0c-35.3 0-64 28.7-64 64z" />
            <path d="M160 288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64V288z" />
    </Icon>
);

export default Clone;