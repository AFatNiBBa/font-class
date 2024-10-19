
import { Icon, generic } from "../../index";

/**
 * A component that renders the `video` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/video?s=duotone video}
 * @preview ![video](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDEyOEMwIDkyLjcgMjguNyA2NCA2NCA2NGwyNTYgMGMzNS4zIDAgNjQgMjguNyA2NCA2NGwwIDY4LjIgMCAxMTkuNiAwIDY4LjJjMCAzNS4zLTI4LjcgNjQtNjQgNjRMNjQgNDQ4Yy0zNS4zIDAtNjQtMjguNy02NC02NEwwIDEyOHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTU3NiAxMjhjMC0xMS44LTYuNS0yMi42LTE2LjktMjguMnMtMjMtNS0zMi45IDEuNkwzODQgMTk2LjJWMzE1LjhsMTQyLjIgOTQuOGM5LjggNi41IDIyLjQgNy4yIDMyLjkgMS42czE2LjktMTYuNCAxNi45LTI4LjJWMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Video: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 68.2 0 119.6 0 68.2c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
            <path d="M576 128c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.9 1.6L384 196.2V315.8l142.2 94.8c9.8 6.5 22.4 7.2 32.9 1.6s16.9-16.4 16.9-28.2V128z" />
    </Icon>
);

export default Video;