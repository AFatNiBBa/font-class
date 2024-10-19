
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sidebar` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sidebar?s=duotone sidebar}
 * @preview ![sidebar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMjQgMzJsMCA0NDggMjI0IDBjMzUuMyAwIDY0LTI4LjcgNjQtNjRsMC0zMjBjMC0zNS4zLTI4LjctNjQtNjQtNjRMMjI0IDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNjQgMzJDMjguNyAzMiAwIDYwLjcgMCA5NkwwIDQxNmMwIDM1LjMgMjguNyA2NCA2NCA2NGwxNjAgMCAwLTQ0OEw2NCAzMnpNODggOTZsNDggMGMxMy4zIDAgMjQgMTAuNyAyNCAyNHMtMTAuNyAyNC0yNCAyNGwtNDggMGMtMTMuMyAwLTI0LTEwLjctMjQtMjRzMTAuNy0yNCAyNC0yNHpNNjQgMjE2YzAtMTMuMyAxMC43LTI0IDI0LTI0bDQ4IDBjMTMuMyAwIDI0IDEwLjcgMjQgMjRzLTEwLjcgMjQtMjQgMjRsLTQ4IDBjLTEzLjMgMC0yNC0xMC43LTI0LTI0em0yNCA3Mmw0OCAwYzEzLjMgMCAyNCAxMC43IDI0IDI0cy0xMC43IDI0LTI0IDI0bC00OCAwYy0xMy4zIDAtMjQtMTAuNy0yNC0yNHMxMC43LTI0IDI0LTI0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Sidebar: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 32l0 448 224 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L224 32z" />
            <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l160 0 0-448L64 32zM88 96l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zM64 216c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24zm24 72l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
    </Icon>
);

export default Sidebar;