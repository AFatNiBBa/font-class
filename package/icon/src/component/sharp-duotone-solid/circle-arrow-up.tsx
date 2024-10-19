
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-arrow-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-up?s=sharp-duotone-solid circle-arrow-up}
 * @preview ![circle-arrow-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTExMC4xLThjNS43LTUuNyAxMS4zLTExLjMgMTctMTdjMzcuMy0zNy4zIDc0LjctNzQuNyAxMTItMTEybDE3LTE3IDE3IDE3YzM3LjMgMzcuMyA3NC43IDc0LjcgMTEyIDExMmM1LjcgNS43IDExLjMgMTEuMyAxNyAxN2MtMTEuMyAxMS4zLTIyLjYgMjIuNi0zMy45IDMzLjljLTUuNy01LjctMTEuMy0xMS4zLTE3LTE3Yy0yMy43LTIzLjctNDcuNC00Ny40LTcxLTcxYzAgNjAuNyAwIDEyMS40IDAgMTgyLjFjMCA4IDAgMTYgMCAyNGwtNDggMGMwLTggMC0xNiAwLTI0YzAtNjAuNyAwLTEyMS40IDAtMTgyLjFjLTIzLjcgMjMuNy00Ny40IDQ3LjQtNzEgNzFjLTUuNyA1LjctMTEuMyAxMS4zLTE3IDE3TDExMC4xIDI0OHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiAxMDIuMWwxNyAxN0wzODUgMjMxbDE3IDE3TDM2OCAyODEuOWwtMTctMTctNzEtNzFMMjgwIDM3NmwwIDI0LTQ4IDAgMC0yNCAwLTE4Mi4xLTcxIDcxLTE3IDE3TDExMC4xIDI0OGwxNy0xN0wyMzkgMTE5bDE3LTE3eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleArrowUp: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm110.1-8c5.7-5.7 11.3-11.3 17-17c37.3-37.3 74.7-74.7 112-112l17-17 17 17c37.3 37.3 74.7 74.7 112 112c5.7 5.7 11.3 11.3 17 17c-11.3 11.3-22.6 22.6-33.9 33.9c-5.7-5.7-11.3-11.3-17-17c-23.7-23.7-47.4-47.4-71-71c0 60.7 0 121.4 0 182.1c0 8 0 16 0 24l-48 0c0-8 0-16 0-24c0-60.7 0-121.4 0-182.1c-23.7 23.7-47.4 47.4-71 71c-5.7 5.7-11.3 11.3-17 17L110.1 248z" />
            <path d="M256 102.1l17 17L385 231l17 17L368 281.9l-17-17-71-71L280 376l0 24-48 0 0-24 0-182.1-71 71-17 17L110.1 248l17-17L239 119l17-17z" />
    </Icon>
);

export default CircleArrowUp;