
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-heart` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-heart?s=duotone circle-heart}
 * @preview ![circle-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTEwOS44LTI5LjFjMC0xOS41IDcuMy0zOS4xIDIyLTU0czMzLjktMjIuNCA1My4yLTIyLjRzMzguNSA3LjUgNTMuMiAyMi40YzUuOSA2IDExLjggMTIgMTcuNyAxOGM1LjktNiAxMS44LTEyIDE3LjctMThjMTQuNy0xNC45IDMzLjktMjIuNCA1My4yLTIyLjRzMzguNSA3LjUgNTMuMiAyMi40czIyIDM0LjUgMjIgNTRzLTcuMyAzOS4xLTIyIDU0TDI3OC41IDM4NC4xYy02LjIgNi4zLTE0LjMgOS40LTIyLjUgOS40cy0xNi4zLTMuMS0yMi41LTkuNEwxMzEuOSAyODAuOWMtMTQuNy0xNC45LTIyLTM0LjUtMjItNTR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMzEuOSAxNzIuOWMtMjkuNCAyOS44LTI5LjQgNzguMiAwIDEwOEwyMzMuNSAzODQuMWM2LjIgNi4zIDE0LjMgOS40IDIyLjUgOS40czE2LjMtMy4xIDIyLjUtOS40TDM4MC4xIDI4MC45YzI5LjQtMjkuOCAyOS40LTc4LjIgMC0xMDhzLTc3LTI5LjgtMTA2LjQgMGwtMTcuNyAxOC0xNy43LTE4Yy0yOS40LTI5LjgtNzctMjkuOC0xMDYuNCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleHeart: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm109.8-29.1c0-19.5 7.3-39.1 22-54s33.9-22.4 53.2-22.4s38.5 7.5 53.2 22.4c5.9 6 11.8 12 17.7 18c5.9-6 11.8-12 17.7-18c14.7-14.9 33.9-22.4 53.2-22.4s38.5 7.5 53.2 22.4s22 34.5 22 54s-7.3 39.1-22 54L278.5 384.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4L131.9 280.9c-14.7-14.9-22-34.5-22-54z" />
            <path d="M131.9 172.9c-29.4 29.8-29.4 78.2 0 108L233.5 384.1c6.2 6.3 14.3 9.4 22.5 9.4s16.3-3.1 22.5-9.4L380.1 280.9c29.4-29.8 29.4-78.2 0-108s-77-29.8-106.4 0l-17.7 18-17.7-18c-29.4-29.8-77-29.8-106.4 0z" />
    </Icon>
);

export default CircleHeart;