
import { Icon, generic } from "../../index";

/**
 * A component that renders the `backpack` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backpack?s=duotone backpack}
 * @preview ![backpack](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAzODRsMCAxNiAwIDExMiAyNTYgMCAwLTExMiAwLTE2TDk2IDM4NHpNMTM2IDU2bDAgNDAgNDggMCAwLTQwYzAtNC40IDMuNi04IDgtOGw2NCAwYzQuNCAwIDggMy42IDggOGwwIDQwIDQ4IDAgMC00MGMwLTMwLjktMjUuMS01Ni01Ni01NkwxOTIgMGMtMzAuOSAwLTU2IDI1LjEtNTYgNTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDIyNEMwIDE1My4zIDU3LjMgOTYgMTI4IDk2bDE5MiAwYzcwLjcgMCAxMjggNTcuMyAxMjggMTI4bDAgMjI0YzAgMzUuMy0yOC43IDY0LTY0IDY0bC0zMiAwIDAtMTEyIDAtNjRjMC0yNi41LTIxLjUtNDgtNDgtNDhsLTE2MCAwYy0yNi41IDAtNDggMjEuNS00OCA0OGwwIDY0IDAgMTEyLTMyIDBjLTM1LjMgMC02NC0yOC43LTY0LTY0TDAgMjI0em0xNDQtNDhjLTguOCAwLTE2IDcuMi0xNiAxNnM3LjIgMTYgMTYgMTZsMTYwIDBjOC44IDAgMTYtNy4yIDE2LTE2cy03LjItMTYtMTYtMTZsLTE2MCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Backpack: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 384l0 16 0 112 256 0 0-112 0-16L96 384zM136 56l0 40 48 0 0-40c0-4.4 3.6-8 8-8l64 0c4.4 0 8 3.6 8 8l0 40 48 0 0-40c0-30.9-25.1-56-56-56L192 0c-30.9 0-56 25.1-56 56z" />
            <path d="M0 224C0 153.3 57.3 96 128 96l192 0c70.7 0 128 57.3 128 128l0 224c0 35.3-28.7 64-64 64l-32 0 0-112 0-64c0-26.5-21.5-48-48-48l-160 0c-26.5 0-48 21.5-48 48l0 64 0 112-32 0c-35.3 0-64-28.7-64-64L0 224zm144-48c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0z" />
    </Icon>
);

export default Backpack;