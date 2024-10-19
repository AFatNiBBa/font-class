
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-p` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-p?s=sharp-duotone-solid circle-p}
 * @preview ![circle-p](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6TTE2MCAxMjhsMjQgMCA5MiAwYzUwLjggMCA5MiA0MS4yIDkyIDkycy00MS4yIDkyLTkyIDkybC02OCAwIDAgNDggMCAyNC00OCAwIDAtMjQgMC03MiAwLTEzNiAwLTI0em00OCA0OGwwIDg4IDY4IDBjMjQuMyAwIDQ0LTE5LjcgNDQtNDRzLTE5LjctNDQtNDQtNDRsLTY4IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNjAgMTI4bDI0IDAgOTIgMGM1MC44IDAgOTIgNDEuMiA5MiA5MnMtNDEuMiA5Mi05MiA5MmwtNjggMCAwIDQ4IDAgMjQtNDggMCAwLTI0IDAtNzIgMC0xMzYgMC0yNHptNDggMTM2bDY4IDBjMjQuMyAwIDQ0LTE5LjcgNDQtNDRzLTE5LjctNDQtNDQtNDRsLTY4IDAgMCA4OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleP: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM160 128l24 0 92 0c50.8 0 92 41.2 92 92s-41.2 92-92 92l-68 0 0 48 0 24-48 0 0-24 0-72 0-136 0-24zm48 48l0 88 68 0c24.3 0 44-19.7 44-44s-19.7-44-44-44l-68 0z" />
            <path d="M160 128l24 0 92 0c50.8 0 92 41.2 92 92s-41.2 92-92 92l-68 0 0 48 0 24-48 0 0-24 0-72 0-136 0-24zm48 136l68 0c24.3 0 44-19.7 44-44s-19.7-44-44-44l-68 0 0 88z" />
    </Icon>
);

export default CircleP;