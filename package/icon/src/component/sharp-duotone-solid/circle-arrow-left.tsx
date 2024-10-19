
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-arrow-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-left?s=sharp-duotone-solid circle-arrow-left}
 * @preview ![circle-arrow-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTEwMi4xIDBsMTctMTdMMjMxIDEyN2wxNy0xN2MxMS4zIDExLjMgMjIuNiAyMi42IDMzLjkgMzMuOWwtMTcgMTdjLTIzLjcgMjMuNy00Ny40IDQ3LjQtNzEgNzFjNjAuNyAwIDEyMS40IDAgMTgyLjEgMGM4IDAgMTYgMCAyNCAwbDAgNDhjLTggMC0xNiAwLTI0IDBjLTYwLjcgMC0xMjEuNCAwLTE4Mi4xIDBjMjMuNyAyMy43IDQ3LjQgNDcuNCA3MSA3MWM1LjcgNS43IDExLjMgMTEuMyAxNyAxN2MtMTEuMyAxMS4zLTIyLjYgMjIuNi0zMy45IDMzLjljLTUuNy01LjctMTEuMy0xMS4zLTE3LTE3Yy0zNy4zLTM3LjMtNzQuNy03NC43LTExMi0xMTJjLTUuNy01LjctMTEuMy0xMS4zLTE3LTE3eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTAyLjEgMjU2bDE3LTE3TDIzMSAxMjdsMTctMTdMMjgxLjkgMTQ0bC0xNyAxNy03MSA3MUwzNzYgMjMybDI0IDAgMCA0OC0yNCAwLTE4Mi4xIDAgNzEgNzEgMTcgMTdMMjQ4IDQwMS45bC0xNy0xN0wxMTkgMjczbC0xNy0xN3oiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleArrowLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm102.1 0l17-17L231 127l17-17c11.3 11.3 22.6 22.6 33.9 33.9l-17 17c-23.7 23.7-47.4 47.4-71 71c60.7 0 121.4 0 182.1 0c8 0 16 0 24 0l0 48c-8 0-16 0-24 0c-60.7 0-121.4 0-182.1 0c23.7 23.7 47.4 47.4 71 71c5.7 5.7 11.3 11.3 17 17c-11.3 11.3-22.6 22.6-33.9 33.9c-5.7-5.7-11.3-11.3-17-17c-37.3-37.3-74.7-74.7-112-112c-5.7-5.7-11.3-11.3-17-17z" />
            <path d="M102.1 256l17-17L231 127l17-17L281.9 144l-17 17-71 71L376 232l24 0 0 48-24 0-182.1 0 71 71 17 17L248 401.9l-17-17L119 273l-17-17z" />
    </Icon>
);

export default CircleArrowLeft;