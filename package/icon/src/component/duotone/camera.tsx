
import { Icon, generic } from "../../index";

/**
 * A component that renders the `camera` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera?s=duotone camera}
 * @preview ![camera](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgMjg4YTk2IDk2IDAgMSAwIDE5MiAwIDk2IDk2IDAgMSAwIC0xOTIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE0OS4xIDY0LjhMMTM4LjcgOTYgNjQgOTZDMjguNyA5NiAwIDEyNC43IDAgMTYwTDAgNDE2YzAgMzUuMyAyOC43IDY0IDY0IDY0bDM4NCAwYzM1LjMgMCA2NC0yOC43IDY0LTY0bDAtMjU2YzAtMzUuMy0yOC43LTY0LTY0LTY0bC03NC43IDBMMzYyLjkgNjQuOEMzNTYuNCA0NS4yIDMzOC4xIDMyIDMxNy40IDMyTDE5NC42IDMyYy0yMC43IDAtMzkgMTMuMi00NS41IDMyLjh6TTI1NiAxOTJhOTYgOTYgMCAxIDEgMCAxOTIgOTYgOTYgMCAxIDEgMC0xOTJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Camera: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 288a96 96 0 1 0 192 0 96 96 0 1 0 -192 0z" />
            <path d="M149.1 64.8L138.7 96 64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-74.7 0L362.9 64.8C356.4 45.2 338.1 32 317.4 32L194.6 32c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
    </Icon>
);

export default Camera;