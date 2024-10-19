
import { Icon, generic } from "../../index";

/**
 * A component that renders the `seal` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/seal?s=duotone seal}
 * @preview ![seal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yODkuOSAxOC40Yy0xOC43LTE4LjctNDkuMS0xOC43LTY3LjkgMEwxNzYuNSA2NCAxMTIgNjRjLTI2LjUgMC00OCAyMS41LTQ4IDQ4bDAgNjQuNUwxOC40IDIyMi4xYy0xOC43IDE4LjctMTguNyA0OS4xIDAgNjcuOUw2NCAzMzUuNSA2NCA0MDBjMCAyNi41IDIxLjUgNDggNDggNDhsNjQuNSAwIDQ1LjYgNDUuNmMxOC43IDE4LjcgNDkuMSAxOC43IDY3LjkgMEwzMzUuNSA0NDhsNjQuNSAwYzI2LjUgMCA0OC0yMS41IDQ4LTQ4bDAtNjQuNSA0NS42LTQ1LjZjMTguNy0xOC43IDE4LjctNDkuMSAwLTY3LjlMNDQ4IDE3Ni41bDAtNjQuNWMwLTI2LjUtMjEuNS00OC00OC00OGwtNjQuNSAwTDI4OS45IDE4LjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9IiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Seal: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M289.9 18.4c-18.7-18.7-49.1-18.7-67.9 0L176.5 64 112 64c-26.5 0-48 21.5-48 48l0 64.5L18.4 222.1c-18.7 18.7-18.7 49.1 0 67.9L64 335.5 64 400c0 26.5 21.5 48 48 48l64.5 0 45.6 45.6c18.7 18.7 49.1 18.7 67.9 0L335.5 448l64.5 0c26.5 0 48-21.5 48-48l0-64.5 45.6-45.6c18.7-18.7 18.7-49.1 0-67.9L448 176.5l0-64.5c0-26.5-21.5-48-48-48l-64.5 0L289.9 18.4z" />
    </Icon>
);

export default Seal;