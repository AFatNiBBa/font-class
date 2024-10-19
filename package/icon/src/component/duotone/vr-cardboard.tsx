
import { Icon, generic } from "../../index";

/**
 * A component that renders the `vr-cardboard` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vr-cardboard?s=duotone vr-cardboard}
 * @preview ![vr-cardboard](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDEyOEwwIDM4NGMwIDM1LjMgMjguNyA2NCA2NCA2NGwxMjAuNCAwYzI0LjIgMCA0Ni40LTEzLjcgNTcuMi0zNS40bDMyLTY0YzguOC0xNy41IDI2LjctMjguNiA0Ni4zLTI4LjZzMzcuNSAxMS4xIDQ2LjMgMjguNmwzMiA2NGMxMC44IDIxLjcgMzMgMzUuNCA1Ny4yIDM1LjRMNTc2IDQ0OGMzNS4zIDAgNjQtMjguNyA2NC02NGwwLTI1NmMwLTM1LjMtMjguNy02NC02NC02NEw2NCA2NEMyOC43IDY0IDAgOTIuNyAwIDEyOHpNMjI0IDI0MEE2NCA2NCAwIDEgMSA5NiAyNDBhNjQgNjQgMCAxIDEgMTI4IDB6bTMyMCAwYTY0IDY0IDAgMSAxIC0xMjggMCA2NCA2NCAwIDEgMSAxMjggMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE2MCAzMDRhNjQgNjQgMCAxIDAgMC0xMjggNjQgNjQgMCAxIDAgMCAxMjh6bTMyMCAwYTY0IDY0IDAgMSAwIDAtMTI4IDY0IDY0IDAgMSAwIDAgMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const VrCardboard: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 128L0 384c0 35.3 28.7 64 64 64l120.4 0c24.2 0 46.4-13.7 57.2-35.4l32-64c8.8-17.5 26.7-28.6 46.3-28.6s37.5 11.1 46.3 28.6l32 64c10.8 21.7 33 35.4 57.2 35.4L576 448c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64C28.7 64 0 92.7 0 128zM224 240A64 64 0 1 1 96 240a64 64 0 1 1 128 0zm320 0a64 64 0 1 1 -128 0 64 64 0 1 1 128 0z" />
            <path d="M160 304a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm320 0a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default VrCardboard;