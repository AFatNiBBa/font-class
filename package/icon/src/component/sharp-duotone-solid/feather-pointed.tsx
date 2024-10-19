
import { Icon, generic } from "../../index";

/**
 * A component that renders the `feather-pointed` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/feather-pointed?s=sharp-duotone-solid feather-pointed}
 * @preview ![feather-pointed](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02MyAzMDMuMWMwIDMwLjcgNy43IDYwLjYgMjUuNyA4Ni4yTDI3MS45IDIwNi4xbDE3LTE3YzExLjMgMTEuMyAyMi42IDIyLjYgMzMuOSAzMy45bC0xNyAxN0wxMjIuNyA0MjMuM2MyNS42IDE4IDU1LjUgMjUuNyA4Ni4yIDI1LjdjNTggMCAxMTkuMy0yNy41IDE2MS41LTY1TDMwNCAzODRsMC0xNiAxMDguMS0zMi40YzkuOS0xNC43IDE4LjktMzAuNyAyNy4xLTQ3LjZMMzY4IDI4OGwwLTE2IDg5LjYtMjYuOUM0OTIuMiAxNTUuMiA1MDcuNiA1My43IDUxMiAwQzQyOC4zIDYuOSAyMjguNSA0MC41IDEzNy40IDEzMS42Qzk1LjIgMTczLjkgNjMgMjQwLjQgNjMgMzAzLjF6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik02LjEgNDcybDE3LTE3TDI3MS45IDIwNi4xbDE3LTE3IDMzLjkgMzMuOS0xNyAxN0w1NyA0ODlsLTE3IDE3TDYuMSA0NzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const FeatherPointed: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M63 303.1c0 30.7 7.7 60.6 25.7 86.2L271.9 206.1l17-17c11.3 11.3 22.6 22.6 33.9 33.9l-17 17L122.7 423.3c25.6 18 55.5 25.7 86.2 25.7c58 0 119.3-27.5 161.5-65L304 384l0-16 108.1-32.4c9.9-14.7 18.9-30.7 27.1-47.6L368 288l0-16 89.6-26.9C492.2 155.2 507.6 53.7 512 0C428.3 6.9 228.5 40.5 137.4 131.6C95.2 173.9 63 240.4 63 303.1z" />
            <path d="M6.1 472l17-17L271.9 206.1l17-17 33.9 33.9-17 17L57 489l-17 17L6.1 472z" />
    </Icon>
);

export default FeatherPointed;