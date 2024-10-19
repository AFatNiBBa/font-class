
import { Icon, generic } from "../../index";

/**
 * A component that renders the `grate` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grate?s=duotone grate}
 * @preview ![grate](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAyMjRsMCA2NCAzMiAwIDAgMTI4IDY0IDAgMC0xMjggMzIgMCAwIDEyOCA2NCAwIDAtMTI4IDMyIDAgMCAxMjggNjQgMCAwLTEyOCAzMiAwIDAtNjQtMzIgMCAwLTEyOC02NCAwIDAgMTI4LTMyIDAgMC0xMjgtNjQgMCAwIDEyOC0zMiAwIDAtMTI4TDk2IDk2bDAgMTI4LTMyIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDk2QzAgNjAuNyAyOC43IDMyIDY0IDMybDMyMCAwYzM1LjMgMCA2NCAyOC43IDY0IDY0bDAgMzIwYzAgMzUuMy0yOC43IDY0LTY0IDY0TDY0IDQ4MGMtMzUuMyAwLTY0LTI4LjctNjQtNjRMMCA5NnptNjQgMGwwIDMyMCAzMjAgMCAwLTMyMEw2NCA5NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Grate: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 224l0 64 32 0 0 128 64 0 0-128 32 0 0 128 64 0 0-128 32 0 0 128 64 0 0-128 32 0 0-64-32 0 0-128-64 0 0 128-32 0 0-128-64 0 0 128-32 0 0-128L96 96l0 128-32 0z" />
            <path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 0l0 320 320 0 0-320L64 96z" />
    </Icon>
);

export default Grate;