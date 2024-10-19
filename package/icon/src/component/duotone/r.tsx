
import { Icon, generic } from "../../index";

/**
 * A component that renders the `r` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/r?s=duotone r}
 * @preview ![r](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAzMkMyOC43IDMyIDAgNjAuNyAwIDk2TDAgMjg4IDAgNDQ4YzAgMTcuNyAxNC4zIDMyIDMyIDMyczMyLTE0LjMgMzItMzJsMC0xMjggOTUuMyAwTDI2MS44IDQ2Ni40YzEwLjEgMTQuNSAzMC4xIDE4IDQ0LjYgNy45czE4LTMwLjEgNy45LTQ0LjZMMjMwLjEgMzA5LjVDMjgyLjggMjg4LjEgMzIwIDIzNi40IDMyMCAxNzZjMC03OS41LTY0LjUtMTQ0LTE0NC0xNDRMNjQgMzJ6TTE3NiAyNTZMNjQgMjU2IDY0IDk2bDExMiAwYzQ0LjIgMCA4MCAzNS44IDgwIDgwcy0zNS44IDgwLTgwIDgweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSIiLz48L3N2Zz4=|width=32|height=32)
 */
const R: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M64 32C28.7 32 0 60.7 0 96L0 288 0 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 95.3 0L261.8 466.4c10.1 14.5 30.1 18 44.6 7.9s18-30.1 7.9-44.6L230.1 309.5C282.8 288.1 320 236.4 320 176c0-79.5-64.5-144-144-144L64 32zM176 256L64 256 64 96l112 0c44.2 0 80 35.8 80 80s-35.8 80-80 80z" />
    </Icon>
);

export default R;