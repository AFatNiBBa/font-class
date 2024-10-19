
import { Icon, generic } from "../../index";

/**
 * A component that renders the `right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right?s=duotone right}
 * @preview ![right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIzMmwwIDQ4YzAgMjIuMSAxNy45IDQwIDQwIDQwbDE4NCAwYzAtNDIuNyAwLTg1LjMgMC0xMjhjLTYxLjMgMC0xMjIuNyAwLTE4NCAwYy0yMi4xIDAtNDAgMTcuOS00MCA0MHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIyNCAzMjBzMCAwIDAgMGwwIDk2YzAgMTIuOSA3LjggMjQuNiAxOS44IDI5LjZzMjUuNyAyLjIgMzQuOS02LjlsMTYwLTE2MGMxMi41LTEyLjUgMTIuNS0zMi44IDAtNDUuM2wtMTYwLTE2MGMtOS4yLTkuMi0yMi45LTExLjktMzQuOS02LjlzLTE5LjggMTYuNi0xOS44IDI5LjZsMCA5NnMwIDAgMCAwbDAgMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Right: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 232l0 48c0 22.1 17.9 40 40 40l184 0c0-42.7 0-85.3 0-128c-61.3 0-122.7 0-184 0c-22.1 0-40 17.9-40 40z" />
            <path d="M224 320s0 0 0 0l0 96c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 96s0 0 0 0l0 128z" />
    </Icon>
);

export default Right;