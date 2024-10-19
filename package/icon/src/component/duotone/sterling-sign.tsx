
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sterling-sign` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sterling-sign?s=duotone sterling-sign}
 * @preview ![sterling-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmMwIDE3LjcgMTQuMyAzMiAzMiAzMmwxNiAwIDAtNjQtMTYgMGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ6bTExMi0zMmwwIDY0IDExMiAwYzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMybC0xMTIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE3Ni40IDk2Yy0zNS41IDAtNjQuNCAyOC44LTY0LjQgNjQuNGwwIDE3Mi4yYzAgMjktNy45IDU3LjUtMjIuOCA4Mi4zbC0uNyAxLjFMMjg4IDQxNmMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMkwzMiA0ODBjLTExLjUgMC0yMi4yLTYuMi0yNy44LTE2LjJzLTUuNS0yMi4zIC40LTMyLjJsMjkuOC00OS42YzktMTQuOSAxMy43LTMyIDEzLjctNDkuNGwwLTE3Mi4yQzQ4IDg5LjUgMTA1LjUgMzIgMTc2LjQgMzJjMTMuOCAwIDI3LjUgMi4yIDQwLjYgNi42bDgxLjIgMjcuMWMxNi44IDUuNiAyNS44IDIzLjcgMjAuMiA0MC41cy0yMy43IDI1LjgtNDAuNSAyMC4yTDE5Ni43IDk5LjNjLTYuNi0yLjItMTMuNC0zLjMtMjAuNC0zLjN6Ii8+PC9zdmc+|width=32|height=32)
 */
const SterlingSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 256c0 17.7 14.3 32 32 32l16 0 0-64-16 0c-17.7 0-32 14.3-32 32zm112-32l0 64 112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-112 0z" />
            <path d="M176.4 96c-35.5 0-64.4 28.8-64.4 64.4l0 172.2c0 29-7.9 57.5-22.8 82.3l-.7 1.1L288 416c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-11.5 0-22.2-6.2-27.8-16.2s-5.5-22.3 .4-32.2l29.8-49.6c9-14.9 13.7-32 13.7-49.4l0-172.2C48 89.5 105.5 32 176.4 32c13.8 0 27.5 2.2 40.6 6.6l81.2 27.1c16.8 5.6 25.8 23.7 20.2 40.5s-23.7 25.8-40.5 20.2L196.7 99.3c-6.6-2.2-13.4-3.3-20.4-3.3z" />
    </Icon>
);

export default SterlingSign;