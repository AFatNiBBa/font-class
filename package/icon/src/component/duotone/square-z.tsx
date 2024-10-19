
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-z` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-z?s=duotone square-z}
 * @preview ![square-z](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2TDAgNDE2YzAgMzUuMyAyOC43IDY0IDY0IDY0bDMyMCAwYzM1LjMgMCA2NC0yOC43IDY0LTY0bDAtMzIwYzAtMzUuMy0yOC43LTY0LTY0LTY0TDY0IDMyQzI4LjcgMzIgMCA2MC43IDAgOTZ6bTExMiA1NmMwLS40IDAtLjggMCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTEyIDE1MmMwLTEzLjMgMTAuNy0yNCAyNC0yNGwxNzYgMGM5LjMgMCAxNy44IDUuNCAyMS44IDEzLjlzMi42IDE4LjUtMy41IDI1LjZMMTg3LjcgMzM2IDMxMiAzMzZjMTMuMyAwIDI0IDEwLjcgMjQgMjRzLTEwLjcgMjQtMjQgMjRsLTE3NiAwYy05LjMgMC0xNy44LTUuNC0yMS44LTEzLjlzLTIuNi0xOC41IDMuNS0yNS42TDI2MC4zIDE3NiAxMzYgMTc2Yy0xMy4zIDAtMjQtMTAuNy0yNC0yNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const SquareZ: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm112 56c0-.4 0-.8 0 0z" />
            <path d="M112 152c0-13.3 10.7-24 24-24l176 0c9.3 0 17.8 5.4 21.8 13.9s2.6 18.5-3.5 25.6L187.7 336 312 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-176 0c-9.3 0-17.8-5.4-21.8-13.9s-2.6-18.5 3.5-25.6L260.3 176 136 176c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default SquareZ;