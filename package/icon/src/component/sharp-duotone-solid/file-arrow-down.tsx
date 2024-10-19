
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-arrow-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-arrow-down?s=sharp-duotone-solid file-arrow-down}
 * @preview ![file-arrow-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMjI0IDBjMCA1My4zIDAgMTA2LjcgMCAxNjBsMTYwIDAgMCAzNTJMMCA1MTIgMCAwek04Ni4xIDMyMGM1LjcgNS43IDExLjMgMTEuMyAxNyAxN2MyNCAyNCA0OCA0OCA3MiA3MmM1LjcgNS43IDExLjMgMTEuMyAxNyAxN2M1LjctNS43IDExLjMtMTEuMyAxNy0xN2MyNC0yNCA0OC00OCA3Mi03MmM1LjctNS43IDExLjMtMTEuMyAxNy0xN2MtMTEuMy0xMS4zLTIyLjYtMjIuNi0zMy45LTMzLjljLTUuNyA1LjctMTEuMyAxMS4zLTE3IDE3bC0zMSAzMWMwLTM0IDAtNjggMC0xMDIuMWMwLTggMC0xNiAwLTI0bC00OCAwYzAgOCAwIDE2IDAgMjRjMCAzNCAwIDY4IDAgMTAyLjFsLTMxLTMxLTE3LTE3Yy0xMS4zIDExLjMtMjIuNiAyMi42LTMzLjkgMzMuOXoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM4NCAxNjBMMjI0IDBsMCAxNjAgMTYwIDB6TTIxNiAyMzJsMC0yNC00OCAwIDAgMjQgMCAxMDIuMS0zMS0zMS0xNy0xN0w4Ni4xIDMyMGwxNyAxNyA3MiA3MiAxNyAxNyAxNy0xNyA3Mi03MiAxNy0xN0wyNjQgMjg2LjFsLTE3IDE3LTMxIDMxTDIxNiAyMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const FileArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0c0 53.3 0 106.7 0 160l160 0 0 352L0 512 0 0zM86.1 320c5.7 5.7 11.3 11.3 17 17c24 24 48 48 72 72c5.7 5.7 11.3 11.3 17 17c5.7-5.7 11.3-11.3 17-17c24-24 48-48 72-72c5.7-5.7 11.3-11.3 17-17c-11.3-11.3-22.6-22.6-33.9-33.9c-5.7 5.7-11.3 11.3-17 17l-31 31c0-34 0-68 0-102.1c0-8 0-16 0-24l-48 0c0 8 0 16 0 24c0 34 0 68 0 102.1l-31-31-17-17c-11.3 11.3-22.6 22.6-33.9 33.9z" />
            <path d="M384 160L224 0l0 160 160 0zM216 232l0-24-48 0 0 24 0 102.1-31-31-17-17L86.1 320l17 17 72 72 17 17 17-17 72-72 17-17L264 286.1l-17 17-31 31L216 232z" />
    </Icon>
);

export default FileArrowDown;