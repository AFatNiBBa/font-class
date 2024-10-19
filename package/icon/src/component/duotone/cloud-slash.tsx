
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-slash?s=duotone cloud-slash}
 * @preview ![cloud-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMzNmMwIDc5LjUgNjQuNSAxNDQgMTQ0IDE0NGwzNDMuNCAwTDk3LjIgMTcyLjZjLS44IDYuNC0xLjIgMTIuOS0xLjIgMTkuNGMwIDIuNyAuMSA1LjQgLjIgOC4xQzQwLjIgMjE5LjggMCAyNzMuMiAwIDMzNnpNMTM4LjYgODMuM0w2MDAgNDQ1YzI0LjYtMjMuMyA0MC01Ni4zIDQwLTkzYzAtNjEuOS00NC0xMTMuNi0xMDIuNC0xMjUuNGM0LjEtMTAuNyA2LjQtMjIuNCA2LjQtMzQuNmMwLTUzLTQzLTk2LTk2LTk2Yy0xOS43IDAtMzguMSA2LTUzLjMgMTYuMkMzNjcgNjQuMiAzMTUuMyAzMiAyNTYgMzJjLTQ2LjQgMC04OC4yIDE5LjgtMTE3LjQgNTEuM3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTUuMSA5LjJDMTMuMy0xLjIgMjguNC0zLjEgMzguOCA1LjFsNTkyIDQ2NGMxMC40IDguMiAxMi4zIDIzLjMgNC4xIDMzLjdzLTIzLjMgMTIuMy0zMy43IDQuMUw5LjIgNDIuOUMtMS4yIDM0LjctMy4xIDE5LjYgNS4xIDkuMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const CloudSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 336c0 79.5 64.5 144 144 144l343.4 0L97.2 172.6c-.8 6.4-1.2 12.9-1.2 19.4c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336zM138.6 83.3L600 445c24.6-23.3 40-56.3 40-93c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-46.4 0-88.2 19.8-117.4 51.3z" />
            <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default CloudSlash;