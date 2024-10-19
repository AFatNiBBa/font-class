
import { Icon, generic } from "../../index";

/**
 * A component that renders the `magnifying-glass` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass?s=duotone magnifying-glass}
 * @preview ![magnifying-glass](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIwOGEyMDggMjA4IDAgMSAwIDQxNiAwQTIwOCAyMDggMCAxIDAgMCAyMDh6bTM1MiAwQTE0NCAxNDQgMCAxIDEgNjQgMjA4YTE0NCAxNDQgMCAxIDEgMjg4IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMzAuNyAzNzZMNDU3LjQgNTAyLjZjMTIuNSAxMi41IDMyLjggMTIuNSA0NS4zIDBzMTIuNS0zMi44IDAtNDUuM0wzNzYgMzMwLjdDMzYzLjMgMzQ4IDM0OCAzNjMuMyAzMzAuNyAzNzZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const MagnifyingGlass: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 208a208 208 0 1 0 416 0A208 208 0 1 0 0 208zm352 0A144 144 0 1 1 64 208a144 144 0 1 1 288 0z" />
            <path d="M330.7 376L457.4 502.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L376 330.7C363.3 348 348 363.3 330.7 376z" />
    </Icon>
);

export default MagnifyingGlass;