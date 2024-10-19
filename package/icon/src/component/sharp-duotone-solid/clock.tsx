
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock?s=sharp-duotone-solid clock}
 * @preview ![clock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6TTIzMiA5Nmw0OCAwYzAgOCAwIDE2IDAgMjRjMCA0MSAwIDgyLjEgMCAxMjMuMkwzNjUuMyAzMDBsMjAgMTMuM2MtOC45IDEzLjMtMTcuOCAyNi42LTI2LjYgMzkuOWwtMjAtMTMuM2MtMzItMjEuMy02NC00Mi43LTk2LTY0Yy0zLjYtMi40LTcuMS00LjctMTAuNy03LjFjMC00LjMgMC04LjYgMC0xMi44YzAtNDUuMyAwLTkwLjcgMC0xMzZjMC04IDAtMTYgMC0yNHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIzMiA5NmwwIDI0IDAgMTM2IDAgMTIuOCAxMC43IDcuMSA5NiA2NCAyMCAxMy4zIDI2LjYtMzkuOS0yMC0xMy4zTDI4MCAyNDMuMiAyODAgMTIwbDAtMjQtNDggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Clock: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 96l48 0c0 8 0 16 0 24c0 41 0 82.1 0 123.2L365.3 300l20 13.3c-8.9 13.3-17.8 26.6-26.6 39.9l-20-13.3c-32-21.3-64-42.7-96-64c-3.6-2.4-7.1-4.7-10.7-7.1c0-4.3 0-8.6 0-12.8c0-45.3 0-90.7 0-136c0-8 0-16 0-24z" />
            <path d="M232 96l0 24 0 136 0 12.8 10.7 7.1 96 64 20 13.3 26.6-39.9-20-13.3L280 243.2 280 120l0-24-48 0z" />
    </Icon>
);

export default Clock;