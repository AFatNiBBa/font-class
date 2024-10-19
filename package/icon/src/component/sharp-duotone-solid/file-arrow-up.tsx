
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-arrow-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-arrow-up?s=sharp-duotone-solid file-arrow-up}
 * @preview ![file-arrow-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBDNzQuNyAwIDE0OS4zIDAgMjI0IDBjMCA1My4zIDAgMTA2LjcgMCAxNjBsMTYwIDAgMCAzNTJMMCA1MTIgMCAwek04Ni4xIDMwNGMxMS4zIDExLjMgMjIuNiAyMi42IDMzLjkgMzMuOWM1LjctNS43IDExLjMtMTEuMyAxNy0xN2MxMC4zLTEwLjMgMjAuNy0yMC43IDMxLTMxYzAgMzQgMCA2OCAwIDEwMi4xYzAgOCAwIDE2IDAgMjRsNDggMGMwLTggMC0xNiAwLTI0YzAtMzQgMC02OCAwLTEwMi4xYzEwLjMgMTAuMyAyMC43IDIwLjcgMzEgMzFjNS43IDUuNyAxMS4zIDExLjMgMTcgMTdjMTEuMy0xMS4zIDIyLjYtMjIuNiAzMy45LTMzLjljLTUuNy01LjctMTEuMy0xMS4zLTE3LTE3Yy0yNC0yNC00OC00OC03Mi03MmwtMTctMTctMTcgMTdjLTI0IDI0LTQ4IDQ4LTcyIDcybC0xNyAxN3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM4NCAxNjBsLTE2MCAwTDIyNCAwIDM4NCAxNjB6TTIxNiAzOTJsMCAyNC00OCAwIDAtMjQgMC0xMDIuMS0zMSAzMS0xNyAxN0w4Ni4xIDMwNGwxNy0xNyA3Mi03MiAxNy0xNyAxNyAxNyA3MiA3MiAxNyAxN0wyNjQgMzM3LjlsLTE3LTE3LTMxLTMxTDIxNiAzOTJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const FileArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0C74.7 0 149.3 0 224 0c0 53.3 0 106.7 0 160l160 0 0 352L0 512 0 0zM86.1 304c11.3 11.3 22.6 22.6 33.9 33.9c5.7-5.7 11.3-11.3 17-17c10.3-10.3 20.7-20.7 31-31c0 34 0 68 0 102.1c0 8 0 16 0 24l48 0c0-8 0-16 0-24c0-34 0-68 0-102.1c10.3 10.3 20.7 20.7 31 31c5.7 5.7 11.3 11.3 17 17c11.3-11.3 22.6-22.6 33.9-33.9c-5.7-5.7-11.3-11.3-17-17c-24-24-48-48-72-72l-17-17-17 17c-24 24-48 48-72 72l-17 17z" />
            <path d="M384 160l-160 0L224 0 384 160zM216 392l0 24-48 0 0-24 0-102.1-31 31-17 17L86.1 304l17-17 72-72 17-17 17 17 72 72 17 17L264 337.9l-17-17-31-31L216 392z" />
    </Icon>
);

export default FileArrowUp;