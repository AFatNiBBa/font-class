
import { Icon, generic } from "../../index";

/**
 * A component that renders the `potato` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/potato?s=duotone potato}
 * @preview ![potato](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM2OGMwIDc5LjUgNjQuNSAxNDQgMTQ0IDE0NGMzMC4zIDAgNTguNC05LjMgODEuNS0yNS4zYzI4LjEtMTkuMyA2MC4yLTM1LjMgOTIuNS00Ni4yYzQ0LjEtMTQuOSA4MC4xLTUwLjkgOTMuMS05OS4yYzkuMi0zNC4yIDI5LjQtNjcuOSA1NS4yLTkyLjFDNDk0LjQgMjIyLjkgNTEyIDE4NS41IDUxMiAxNDRDNTEyIDY0LjUgNDQ3LjUgMCAzNjggMGMtMzkuOCAwLTc1LjkgMTYuMi0xMDIgNDIuM0MyMzguNiA2OS44IDIwNSA5NSAxNzAuOSAxMTMuNmMtMjQuMSAxMy4yLTQ0IDMzLjEtNTcuMyA1Ny4zQzk1IDIwNSA2OS44IDIzOC42IDQyLjMgMjY2QzE2LjIgMjkyLjEgMCAzMjguMiAwIDM2OHptMTg0IDQ4YTI0IDI0IDAgMSAxIC00OCAwIDI0IDI0IDAgMSAxIDQ4IDB6bTMyLTE5MmEyNCAyNCAwIDEgMSAtNDggMCAyNCAyNCAwIDEgMSA0OCAwem0xOTItMzJhMjQgMjQgMCAxIDEgLTQ4IDAgMjQgMjQgMCAxIDEgNDggMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM2MCAxOTJhMjQgMjQgMCAxIDEgNDggMCAyNCAyNCAwIDEgMSAtNDggMHpNMTY4IDIyNGEyNCAyNCAwIDEgMSA0OCAwIDI0IDI0IDAgMSAxIC00OCAwem0tOCAxNjhhMjQgMjQgMCAxIDEgMCA0OCAyNCAyNCAwIDEgMSAwLTQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Potato: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 368c0 79.5 64.5 144 144 144c30.3 0 58.4-9.3 81.5-25.3c28.1-19.3 60.2-35.3 92.5-46.2c44.1-14.9 80.1-50.9 93.1-99.2c9.2-34.2 29.4-67.9 55.2-92.1C494.4 222.9 512 185.5 512 144C512 64.5 447.5 0 368 0c-39.8 0-75.9 16.2-102 42.3C238.6 69.8 205 95 170.9 113.6c-24.1 13.2-44 33.1-57.3 57.3C95 205 69.8 238.6 42.3 266C16.2 292.1 0 328.2 0 368zm184 48a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm32-192a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm192-32a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
            <path d="M360 192a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM168 224a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm-8 168a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Potato;