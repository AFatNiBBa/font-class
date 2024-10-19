
import { Icon, generic } from "../../index";

/**
 * A component that renders the `image-user` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-user?s=duotone image-user}
 * @preview ![image-user](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2TDAgNDE2YzAgMzUuMyAyOC43IDY0IDY0IDY0bDM4NCAwYzM1LjMgMCA2NC0yOC43IDY0LTY0bDAtMzIwYzAtMzUuMy0yOC43LTY0LTY0LTY0TDY0IDMyQzI4LjcgMzIgMCA2MC43IDAgOTZ6TTE0NCAzNTYuNmMwLTM3LjkgMzAuNy02OC42IDY4LjYtNjguNmw4Ni45IDBjMzcuOSAwIDY4LjYgMzAuNyA2OC42IDY4LjZjMCAxNS4xLTEyLjMgMjcuNC0yNy40IDI3LjRsLTE2OS4xIDBjLTE1LjEgMC0yNy40LTEyLjMtMjcuNC0yNy40ek0zMjAgMTkyYTY0IDY0IDAgMSAxIC0xMjggMCA2NCA2NCAwIDEgMSAxMjggMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiAyNTZhNjQgNjQgMCAxIDAgMC0xMjggNjQgNjQgMCAxIDAgMCAxMjh6bS00My40IDMyYy0zNy45IDAtNjguNiAzMC43LTY4LjYgNjguNmMwIDE1LjEgMTIuMyAyNy40IDI3LjQgMjcuNGwxNjkuMSAwYzE1LjEgMCAyNy40LTEyLjMgMjcuNC0yNy40YzAtMzcuOS0zMC43LTY4LjYtNjguNi02OC42bC04Ni45IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const ImageUser: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zM144 356.6c0-37.9 30.7-68.6 68.6-68.6l86.9 0c37.9 0 68.6 30.7 68.6 68.6c0 15.1-12.3 27.4-27.4 27.4l-169.1 0c-15.1 0-27.4-12.3-27.4-27.4zM320 192a64 64 0 1 1 -128 0 64 64 0 1 1 128 0z" />
            <path d="M256 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-43.4 32c-37.9 0-68.6 30.7-68.6 68.6c0 15.1 12.3 27.4 27.4 27.4l169.1 0c15.1 0 27.4-12.3 27.4-27.4c0-37.9-30.7-68.6-68.6-68.6l-86.9 0z" />
    </Icon>
);

export default ImageUser;