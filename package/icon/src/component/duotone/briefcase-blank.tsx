
import { Icon, generic } from "../../index";

/**
 * A component that renders the `briefcase-blank` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/briefcase-blank?s=duotone briefcase-blank}
 * @preview ![briefcase-blank](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggNTZsMCA0MCA0OCAwIDAtNDBjMC00LjQgMy42LTggOC04bDE0NCAwYzQuNCAwIDggMy42IDggOGwwIDQwIDQ4IDAgMC00MGMwLTMwLjktMjUuMS01Ni01Ni01NkwxODQgMGMtMzAuOSAwLTU2IDI1LjEtNTYgNTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik02NCA5NkMyOC43IDk2IDAgMTI0LjcgMCAxNjBMMCA0MTZjMCAzNS4zIDI4LjcgNjQgNjQgNjRsMzg0IDBjMzUuMyAwIDY0LTI4LjcgNjQtNjRsMC0yNTZjMC0zNS4zLTI4LjctNjQtNjQtNjRMNjQgOTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const BriefcaseBlank: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 56l0 40 48 0 0-40c0-4.4 3.6-8 8-8l144 0c4.4 0 8 3.6 8 8l0 40 48 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56z" />
            <path d="M64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 96z" />
    </Icon>
);

export default BriefcaseBlank;