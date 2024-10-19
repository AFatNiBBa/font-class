
import { Icon, generic } from "../../index";

/**
 * A component that renders the `volume-high` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume-high?s=sharp-duotone-solid volume-high}
 * @preview ![volume-high](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zODAuOCAyMTcuNmMxMS43IDguOCAxOS4yIDIyLjcgMTkuMiAzOC40cy03LjUgMjkuNi0xOS4yIDM4LjRsMjguOCAzOC40QzQzMi45IDMxNS4zIDQ0OCAyODcuNCA0NDggMjU2cy0xNS4xLTU5LjMtMzguNC03Ni44bC0yOC44IDM4LjR6bTU3LjYtNzYuOGMzNSAyNi4zIDU3LjYgNjguMSA1Ny42IDExNS4ycy0yMi42IDg4LjktNTcuNiAxMTUuMmwyOC44IDM4LjRjNDYuNi0zNSA3Ni44LTkwLjggNzYuOC0xNTMuNnMtMzAuMi0xMTguNi03Ni44LTE1My42bC0yOC44IDM4LjR6TTQ5NiA2NGM1OC4zIDQzLjggOTYgMTEzLjUgOTYgMTkycy0zNy43IDE0OC4yLTk2IDE5MmwyOC44IDM4LjRDNTk0LjcgNDMzLjkgNjQwIDM1MC4zIDY0MCAyNTYuMWMwLTk0LjQtNDUuMy0xNzgtMTE1LjItMjMwLjVMNDk2IDY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAzNTJWMTYwSDEyOEwyNzIgMzJoNDhWNDgwSDI3MkwxMjggMzUySDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const VolumeHigh: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M380.8 217.6c11.7 8.8 19.2 22.7 19.2 38.4s-7.5 29.6-19.2 38.4l28.8 38.4C432.9 315.3 448 287.4 448 256s-15.1-59.3-38.4-76.8l-28.8 38.4zm57.6-76.8c35 26.3 57.6 68.1 57.6 115.2s-22.6 88.9-57.6 115.2l28.8 38.4c46.6-35 76.8-90.8 76.8-153.6s-30.2-118.6-76.8-153.6l-28.8 38.4zM496 64c58.3 43.8 96 113.5 96 192s-37.7 148.2-96 192l28.8 38.4C594.7 433.9 640 350.3 640 256.1c0-94.4-45.3-178-115.2-230.5L496 64z" />
            <path d="M0 352V160H128L272 32h48V480H272L128 352H0z" />
    </Icon>
);

export default VolumeHigh;