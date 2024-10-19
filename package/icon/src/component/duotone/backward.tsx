
import { Icon, generic } from "../../index";

/**
 * A component that renders the `backward` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backward?s=duotone backward}
 * @preview ![backward](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNTYgMjQxbDAgMzBMNDU5LjUgNDQwLjZjOS41IDcuOSAyMi44IDkuNyAzNC4xIDQuNHMxOC40LTE2LjYgMTguNC0yOWwwLTMyMGMwLTEyLjQtNy4yLTIzLjctMTguNC0yOXMtMjQuNS0zLjYtMzQuMSA0LjRMMjU2IDI0MXoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIwMy41IDQ0MC42YzkuNSA3LjkgMjIuOCA5LjcgMzQuMSA0LjRzMTguNC0xNi42IDE4LjQtMjlsMC0zMjBjMC0xMi40LTcuMi0yMy43LTE4LjQtMjlzLTI0LjUtMy42LTM0LjEgNC40bC0xOTIgMTYwQzQuMiAyMzcuNSAwIDI0Ni41IDAgMjU2czQuMiAxOC41IDExLjUgMjQuNmwxOTIgMTYweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Backward: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 241l0 30L459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-320c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L256 241z" />
            <path d="M203.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-320c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160z" />
    </Icon>
);

export default Backward;