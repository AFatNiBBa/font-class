
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-window` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-window?s=duotone house-window}
 * @preview ![house-window](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAyNzAuNUw2NC4xIDQ0OGMwIDM1LjMgMjguNyA2NCA2NCA2NGwzMjAuNCAwYzM1LjQgMCA2NC0yOC43IDY0LTY0Yy0uMS01OS4yLS4zLTExOC4zLS40LTE3Ny40TDI4OCA3NC41IDY0IDI3MC41ek0yMjQgMjY0YzAtMTMuMyAxMC43LTI0IDI0LTI0bDgwIDBjMTMuMyAwIDI0IDEwLjcgMjQgMjRsMCA4MGMwIDEzLjMtMTAuNyAyNC0yNCAyNGwtODAgMGMtMTMuMyAwLTI0LTEwLjctMjQtMjRsMC04MHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI2Ni45IDcuOUMyNzktMi42IDI5Ny0yLjYgMzA5LjEgNy45bDI1NiAyMjRjMTMuMyAxMS42IDE0LjYgMzEuOSAzIDQ1LjJzLTMxLjkgMTQuNi00NS4yIDNMMjg4IDc0LjUgNTMuMSAyODAuMWMtMTMuMyAxMS42LTMzLjUgMTAuMy00NS4yLTNzLTEwLjMtMzMuNSAzLTQ1LjJsMjU2LTIyNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const HouseWindow: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 270.5L64.1 448c0 35.3 28.7 64 64 64l320.4 0c35.4 0 64-28.7 64-64c-.1-59.2-.3-118.3-.4-177.4L288 74.5 64 270.5zM224 264c0-13.3 10.7-24 24-24l80 0c13.3 0 24 10.7 24 24l0 80c0 13.3-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24l0-80z" />
            <path d="M266.9 7.9C279-2.6 297-2.6 309.1 7.9l256 224c13.3 11.6 14.6 31.9 3 45.2s-31.9 14.6-45.2 3L288 74.5 53.1 280.1c-13.3 11.6-33.5 10.3-45.2-3s-10.3-33.5 3-45.2l256-224z" />
    </Icon>
);

export default HouseWindow;