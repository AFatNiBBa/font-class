
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pinball` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pinball?s=duotone pinball}
 * @preview ![pinball](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNTYgMTI4YTk2IDk2IDAgMSAwIDE5MiAwIDk2IDk2IDAgMSAwIC0xOTIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQxMi4xIDQ2My40Yy03LjIgMTMuMi0yMy4xIDE5LjktMzcuOSAxNUw2Ni4zIDM3OS4zYy0xMi4xLTMuOS0yMi44LTEwLTMyLTE3LjdjLTQwLjYtMzQuMS00Ni05NC43LTExLjktMTM1LjNzOTQuNi00NS45IDEzNS4yLTExLjhsMjQ2IDIwOC4zYzEyLjYgOS44IDE1LjggMjcuMSA4LjQgNDAuNnpNOTYgMzIwYTMyIDMyIDAgMSAwIDAtNjQgMzIgMzIgMCAxIDAgMCA2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Pinball: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M256 128a96 96 0 1 0 192 0 96 96 0 1 0 -192 0z" />
            <path d="M412.1 463.4c-7.2 13.2-23.1 19.9-37.9 15L66.3 379.3c-12.1-3.9-22.8-10-32-17.7c-40.6-34.1-46-94.7-11.9-135.3s94.6-45.9 135.2-11.8l246 208.3c12.6 9.8 15.8 27.1 8.4 40.6zM96 320a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Pinball;