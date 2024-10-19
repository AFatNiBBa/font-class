
import { Icon, generic } from "../../index";

/**
 * A component that renders the `unlock-keyhole` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/unlock-keyhole?s=duotone unlock-keyhole}
 * @preview ![unlock-keyhole](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik04MCAxNDRsMCA0OCA2NCAwIDAtNDhjMC00NC4yIDM1LjgtODAgODAtODBjMzEuOSAwIDU5LjQgMTguNiA3Mi4zIDQ1LjdjNy42IDE2IDI2LjcgMjIuOCA0Mi42IDE1LjJzMjIuOC0yNi43IDE1LjItNDIuNkMzMzEgMzMuNyAyODEuNSAwIDIyNCAwQzE0NC41IDAgODAgNjQuNSA4MCAxNDR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik02NCAxOTJjLTM1LjMgMC02NCAyOC43LTY0IDY0TDAgNDQ4YzAgMzUuMyAyOC43IDY0IDY0IDY0bDMyMCAwYzM1LjMgMCA2NC0yOC43IDY0LTY0bDAtMTkyYzAtMzUuMy0yOC43LTY0LTY0LTY0TDY0IDE5MnpNMjU2IDM4NGwtNjQgMGMtMTcuNyAwLTMyLTE0LjMtMzItMzJzMTQuMy0zMiAzMi0zMmw2NCAwYzE3LjcgMCAzMiAxNC4zIDMyIDMycy0xNC4zIDMyLTMyIDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const UnlockKeyhole: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M80 144l0 48 64 0 0-48c0-44.2 35.8-80 80-80c31.9 0 59.4 18.6 72.3 45.7c7.6 16 26.7 22.8 42.6 15.2s22.8-26.7 15.2-42.6C331 33.7 281.5 0 224 0C144.5 0 80 64.5 80 144z" />
            <path d="M64 192c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64L64 192zM256 384l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
    </Icon>
);

export default UnlockKeyhole;