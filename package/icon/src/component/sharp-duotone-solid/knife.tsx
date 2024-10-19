
import { Icon, generic } from "../../index";

/**
 * A component that renders the `knife` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/knife?s=sharp-duotone-solid knife}
 * @preview ![knife](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMDkuNCAyNTcuNGMxNS4xIDE1LjEgMzAuMiAzMC4yIDQ1LjMgNDUuM2MyMS44IDIxLjggNDMuNiA0My42IDY1LjQgNjUuNEM0MzAuNiAyNTcuNCA1MTIgMTg0IDUxMiAxMDRDNTEyIDQwIDQ2Ni43IDAgNDY2LjcgMEwzMjAgMTQ2LjdjLTM2LjkgMzYuOS03My44IDczLjgtMTEwLjYgMTEwLjZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMjAgMTQ2LjdhMCAwIDAgMSAxIDAgMCAwIDAgMCAxIDEgMCAwek0yMDkuNCAyNTcuNGw0NS4zIDQ1LjMtMTg0IDE4NEw0OCA1MDkuMyAyLjcgNDY0bDIyLjYtMjIuNiAxODQtMTg0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Knife: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M209.4 257.4c15.1 15.1 30.2 30.2 45.3 45.3c21.8 21.8 43.6 43.6 65.4 65.4C430.6 257.4 512 184 512 104C512 40 466.7 0 466.7 0L320 146.7c-36.9 36.9-73.8 73.8-110.6 110.6z" />
            <path d="M320 146.7a0 0 0 1 1 0 0 0 0 0 1 1 0 0zM209.4 257.4l45.3 45.3-184 184L48 509.3 2.7 464l22.6-22.6 184-184z" />
    </Icon>
);

export default Knife;