
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-heart` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-heart?s=sharp-duotone-solid circle-heart}
 * @preview ![circle-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTExMi0yOC40YzAtNDEuOCAzMy45LTc1LjYgNzUuNi03NS42YzIzIDAgNDQuNyAxMC40IDU5LjEgMjguNGw5LjMgMTEuNiA5LjMtMTEuNmMxNC40LTE3LjkgMzYuMS0yOC40IDU5LjEtMjguNGM0MS44IDAgNzUuNiAzMy45IDc1LjYgNzUuNmwwIDMuNmMwIDIxLTguMyA0MS4xLTIzLjIgNTZMMzUyIDMxMS45bC05NiA5Ni05Ni05Ni0yNC44LTI0LjhjLTE0LjktMTQuOS0yMy4yLTM1LTIzLjItNTZsMC0zLjZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNjAgMzExLjlsLTI0LjgtMjQuOGMtMTQuOS0xNC45LTIzLjItMzUtMjMuMi01NmwwLTMuNmMwLTQxLjggMzMuOS03NS42IDc1LjYtNzUuNmMyMyAwIDQ0LjcgMTAuNCA1OS4xIDI4LjRsOS4zIDExLjYgOS4zLTExLjZjMTQuNC0xNy45IDM2LjEtMjguNCA1OS4xLTI4LjRjNDEuOCAwIDc1LjYgMzMuOSA3NS42IDc1LjZsMCAzLjZjMCAyMS04LjMgNDEuMS0yMy4yIDU2TDM1MiAzMTEuOWwtOTYgOTYtOTYtOTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleHeart: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm112-28.4c0-41.8 33.9-75.6 75.6-75.6c23 0 44.7 10.4 59.1 28.4l9.3 11.6 9.3-11.6c14.4-17.9 36.1-28.4 59.1-28.4c41.8 0 75.6 33.9 75.6 75.6l0 3.6c0 21-8.3 41.1-23.2 56L352 311.9l-96 96-96-96-24.8-24.8c-14.9-14.9-23.2-35-23.2-56l0-3.6z" />
            <path d="M160 311.9l-24.8-24.8c-14.9-14.9-23.2-35-23.2-56l0-3.6c0-41.8 33.9-75.6 75.6-75.6c23 0 44.7 10.4 59.1 28.4l9.3 11.6 9.3-11.6c14.4-17.9 36.1-28.4 59.1-28.4c41.8 0 75.6 33.9 75.6 75.6l0 3.6c0 21-8.3 41.1-23.2 56L352 311.9l-96 96-96-96z" />
    </Icon>
);

export default CircleHeart;