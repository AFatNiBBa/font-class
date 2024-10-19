
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comment` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment?s=duotone comment}
 * @preview ![comment](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik01MTIgMjQwYzAgMTE0LjktMTE0LjYgMjA4LTI1NiAyMDhjLTM3LjEgMC03Mi4zLTYuNC0xMDQuMS0xNy45Yy0xMS45IDguNy0zMS4zIDIwLjYtNTQuMyAzMC42QzczLjYgNDcxLjEgNDQuNyA0ODAgMTYgNDgwYy02LjUgMC0xMi4zLTMuOS0xNC44LTkuOWMtMi41LTYtMS4xLTEyLjggMy40LTE3LjRjMCAwIDAgMCAwIDBzMCAwIDAgMHMwIDAgMCAwYzAgMCAwIDAgMCAwbC4zLS4zYy4zLS4zIC43LS43IDEuMy0xLjRjMS4xLTEuMiAyLjgtMy4xIDQuOS01LjdjNC4xLTUgOS42LTEyLjQgMTUuMi0yMS42YzEwLTE2LjYgMTkuNS0zOC40IDIxLjQtNjIuOUMxNy43IDMyNi44IDAgMjg1LjEgMCAyNDBDMCAxMjUuMSAxMTQuNiAzMiAyNTYgMzJzMjU2IDkzLjEgMjU2IDIwOHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const Comment: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c0 0 0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" />
    </Icon>
);

export default Comment;