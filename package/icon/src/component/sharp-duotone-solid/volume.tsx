
import { Icon, generic } from "../../index";

/**
 * A component that renders the `volume` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume?s=sharp-duotone-solid volume}
 * @preview ![volume](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00MTIuOCAyMTcuNmMxMS43IDguOCAxOS4yIDIyLjcgMTkuMiAzOC40cy03LjUgMjkuNi0xOS4yIDM4LjRsMjguOCAzOC40QzQ2NC45IDMxNS4zIDQ4MCAyODcuNCA0ODAgMjU2cy0xNS4xLTU5LjMtMzguNC03Ni44bC0yOC44IDM4LjR6bTU3LjYtNzYuOGMzNSAyNi4zIDU3LjYgNjguMSA1Ny42IDExNS4ycy0yMi42IDg4LjktNTcuNiAxMTUuMmwyOC44IDM4LjRjNDYuNi0zNSA3Ni44LTkwLjggNzYuOC0xNTMuNnMtMzAuMi0xMTguNi03Ni44LTE1My42bC0yOC44IDM4LjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMiAzNTJWMTYwSDE2MEwzMDQgMzJoNDhWNDgwSDMwNEwxNjAgMzUySDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Volume: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M412.8 217.6c11.7 8.8 19.2 22.7 19.2 38.4s-7.5 29.6-19.2 38.4l28.8 38.4C464.9 315.3 480 287.4 480 256s-15.1-59.3-38.4-76.8l-28.8 38.4zm57.6-76.8c35 26.3 57.6 68.1 57.6 115.2s-22.6 88.9-57.6 115.2l28.8 38.4c46.6-35 76.8-90.8 76.8-153.6s-30.2-118.6-76.8-153.6l-28.8 38.4z" />
            <path d="M32 352V160H160L304 32h48V480H304L160 352H32z" />
    </Icon>
);

export default Volume;