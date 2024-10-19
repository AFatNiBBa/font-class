
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-blank` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-blank?s=duotone house-blank}
 * @preview ![house-blank](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAyNzAuNWM3NC43LTY1LjMgMTQ5LjMtMTMwLjYgMjI0LTE5Nkw1MTIuMSAyNzAuNmwuNCAxNzcuM2MuMSAzNS40LTI4LjYgNjQuMS02NCA2NC4xbC0zMjAuNCAwYy0zNS4zIDAtNjQtMjguNi02NC02NEw2NCAyNzAuNXoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI2Ni45IDcuOUMyNzktMi42IDI5Ny0yLjYgMzA5LjEgNy45bDI1NiAyMjRjMTMuMyAxMS42IDE0LjYgMzEuOSAzIDQ1LjJzLTMxLjkgMTQuNi00NS4yIDNMMjg4IDc0LjUgNTMuMSAyODAuMWMtMTMuMyAxMS42LTMzLjUgMTAuMy00NS4yLTNzLTEwLjMtMzMuNSAzLTQ1LjJsMjU2LTIyNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const HouseBlank: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 270.5c74.7-65.3 149.3-130.6 224-196L512.1 270.6l.4 177.3c.1 35.4-28.6 64.1-64 64.1l-320.4 0c-35.3 0-64-28.6-64-64L64 270.5z" />
            <path d="M266.9 7.9C279-2.6 297-2.6 309.1 7.9l256 224c13.3 11.6 14.6 31.9 3 45.2s-31.9 14.6-45.2 3L288 74.5 53.1 280.1c-13.3 11.6-33.5 10.3-45.2-3s-10.3-33.5 3-45.2l256-224z" />
    </Icon>
);

export default HouseBlank;