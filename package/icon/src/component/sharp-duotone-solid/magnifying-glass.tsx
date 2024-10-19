
import { Icon, generic } from "../../index";

/**
 * A component that renders the `magnifying-glass` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass?s=sharp-duotone-solid magnifying-glass}
 * @preview ![magnifying-glass](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIwOGEyMDggMjA4IDAgMSAwIDQxNiAwQTIwOCAyMDggMCAxIDAgMCAyMDh6bTM1MiAwQTE0NCAxNDQgMCAxIDEgNjQgMjA4YTE0NCAxNDQgMCAxIDEgMjg4IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMzAuNyAzNzZMNDQxLjQgNDg2LjYgNDY0IDUwOS4zIDUwOS4zIDQ2NGwtMjIuNi0yMi42TDM3NiAzMzAuN0MzNjMuMyAzNDggMzQ4IDM2My4zIDMzMC43IDM3NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const MagnifyingGlass: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 208a208 208 0 1 0 416 0A208 208 0 1 0 0 208zm352 0A144 144 0 1 1 64 208a144 144 0 1 1 288 0z" />
            <path d="M330.7 376L441.4 486.6 464 509.3 509.3 464l-22.6-22.6L376 330.7C363.3 348 348 363.3 330.7 376z" />
    </Icon>
);

export default MagnifyingGlass;