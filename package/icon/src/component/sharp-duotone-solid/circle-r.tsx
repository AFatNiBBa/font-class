
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-r` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-r?s=sharp-duotone-solid circle-r}
 * @preview ![circle-r](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6TTE2MCAxMjhsMjQgMCAxMDQgMGM0NC4yIDAgODAgMzUuOCA4MCA4MGMwIDM3LjgtMjYuMyA2OS41LTYxLjYgNzcuOUwzNjkuMSAzODRsLTU3IDAtNjEuMy05NkwyMDggMjg4bDAgNzIgMCAyNC00OCAwIDAtMjQgMC05NiAwLTExMiAwLTI0em00OCA0OGwwIDY0IDU2IDAgMjQgMGMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMmwtODAgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE4NCAxMjhsLTI0IDAgMCAyNCAwIDExMiAwIDk2IDAgMjQgNDggMCAwLTI0IDAtNzIgNDIuOSAwIDYxLjMgOTYgNTcgMC02Mi43LTk4LjFjMzUuMy04LjMgNjEuNi00MCA2MS42LTc3LjljMC00NC4yLTM1LjgtODAtODAtODBsLTEwNCAwem04MCAxMTJsLTU2IDAgMC02NCA4MCAwYzE3LjcgMCAzMiAxNC4zIDMyIDMycy0xNC4zIDMyLTMyIDMybC0yNCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleR: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM160 128l24 0 104 0c44.2 0 80 35.8 80 80c0 37.8-26.3 69.5-61.6 77.9L369.1 384l-57 0-61.3-96L208 288l0 72 0 24-48 0 0-24 0-96 0-112 0-24zm48 48l0 64 56 0 24 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-80 0z" />
            <path d="M184 128l-24 0 0 24 0 112 0 96 0 24 48 0 0-24 0-72 42.9 0 61.3 96 57 0-62.7-98.1c35.3-8.3 61.6-40 61.6-77.9c0-44.2-35.8-80-80-80l-104 0zm80 112l-56 0 0-64 80 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-24 0z" />
    </Icon>
);

export default CircleR;