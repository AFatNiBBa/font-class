
import { Icon, generic } from "../../index";

/**
 * A component that renders the `blanket` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blanket?s=duotone blanket}
 * @preview ![blanket](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDEyOEwwIDM1MmMwLTcwLjcgNTcuMy0xMjggMTI4LTEyOGwyNDAgMGM0NC4yIDAgODAgMzUuOCA4MCA4MGwwLTE3NmMwLTUzLTQzLTk2LTk2LTk2TDk2IDMyQzQzIDMyIDAgNzUgMCAxMjh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMjggMjg4Yy0zNS4zIDAtNjQgMjguNy02NCA2NHMyOC43IDY0IDY0IDY0bDI4OCAwYzE3LjcgMCAzMiAxNC4zIDMyIDMycy0xNC4zIDMyLTMyIDMybC0yODggMEM1Ny4zIDQ4MCAwIDQyMi43IDAgMzUyczU3LjMtMTI4IDEyOC0xMjhsMjQwIDBjNDQuMiAwIDgwIDM1LjggODAgODBzLTM1LjggODAtODAgODBsLTI0MCAwYy0xNy43IDAtMzItMTQuMy0zMi0zMnMxNC4zLTMyIDMyLTMybDI0MCAwYzguOCAwIDE2LTcuMiAxNi0xNnMtNy4yLTE2LTE2LTE2bC0yNDAgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Blanket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 128L0 352c0-70.7 57.3-128 128-128l240 0c44.2 0 80 35.8 80 80l0-176c0-53-43-96-96-96L96 32C43 32 0 75 0 128z" />
            <path d="M128 288c-35.3 0-64 28.7-64 64s28.7 64 64 64l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0C57.3 480 0 422.7 0 352s57.3-128 128-128l240 0c44.2 0 80 35.8 80 80s-35.8 80-80 80l-240 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l240 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-240 0z" />
    </Icon>
);

export default Blanket;