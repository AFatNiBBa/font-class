
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gas-pump` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gas-pump?s=sharp-duotone-solid gas-pump}
 * @preview ![gas-pump](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAwbDAgNDQ4IDI4OCAwIDAtMTQ0IDAtNDhMMzIwIDAgMzIgMHpNOTYgNjRsMTYwIDAgMCAxMjhMOTYgMTkyIDk2IDY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzY4IDQ4bDQ4IDQ4IDAgNjRjMCAyOS44IDIwLjQgNTQuOSA0OCA2MmwwIDE1NGMwIDEzLjMtMTAuNyAyNC0yNCAyNHMtMjQtMTAuNy0yNC0yNGwwLTMyYzAtNDguNi0zOS40LTg4LTg4LTg4bC04IDAgMCA0OCA4IDBjMjIuMSAwIDQwIDE3LjkgNDAgNDBsMCAzMmMwIDM5LjggMzIuMiA3MiA3MiA3MnM3Mi0zMi4yIDcyLTcybDAtMTUyIDAtMzIgMC0yNCAwLTQwTDQwMCAxNiAzNjggNDh6TTAgNDQ4bDAgNjQgMzUyIDAgMC02NEwwIDQ0OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const GasPump: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 0l0 448 288 0 0-144 0-48L320 0 32 0zM96 64l160 0 0 128L96 192 96 64z" />
            <path d="M368 48l48 48 0 64c0 29.8 20.4 54.9 48 62l0 154c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32c0-48.6-39.4-88-88-88l-8 0 0 48 8 0c22.1 0 40 17.9 40 40l0 32c0 39.8 32.2 72 72 72s72-32.2 72-72l0-152 0-32 0-24 0-40L400 16 368 48zM0 448l0 64 352 0 0-64L0 448z" />
    </Icon>
);

export default GasPump;