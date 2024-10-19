
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-arrow-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-arrow-down?s=sharp-duotone-solid folder-arrow-down}
 * @preview ![folder-arrow-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDUxMiAwIDAtMzg0TDI3MiA5NiAyMjQgMzIgMCAzMnpNMTUwLjEgMjg4YzExLjMtMTEuMyAyMi42LTIyLjYgMzMuOS0zMy45bDE3IDE3IDMxIDMxYzAtMzQgMC02OCAwLTEwMi4xYzAtOCAwLTE2IDAtMjRsNDggMGMwIDggMCAxNiAwIDI0YzAgMzQgMCA2OCAwIDEwMi4xbDMxLTMxIDE3LTE3TDM2MS45IDI4OGwtMTcgMTdjLTI0IDI0LTQ4IDQ4LTcyIDcyYy01LjcgNS43LTExLjMgMTEuMy0xNyAxN2MtNS43LTUuNy0xMS4zLTExLjMtMTctMTdjLTI0LTI0LTQ4LTQ4LTcyLTcyYy01LjctNS43LTExLjMtMTEuMy0xNy0xN3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI4MCAxNzZsMCAyNCAwIDEwMi4xIDMxLTMxIDE3LTE3TDM2MS45IDI4OGwtMTcgMTctNzIgNzItMTcgMTctMTctMTctNzItNzItMTctMTdMMTg0IDI1NC4xbDE3IDE3IDMxIDMxTDIzMiAyMDBsMC0yNCA0OCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const FolderArrowDown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 480l512 0 0-384L272 96 224 32 0 32zM150.1 288c11.3-11.3 22.6-22.6 33.9-33.9l17 17 31 31c0-34 0-68 0-102.1c0-8 0-16 0-24l48 0c0 8 0 16 0 24c0 34 0 68 0 102.1l31-31 17-17L361.9 288l-17 17c-24 24-48 48-72 72c-5.7 5.7-11.3 11.3-17 17c-5.7-5.7-11.3-11.3-17-17c-24-24-48-48-72-72c-5.7-5.7-11.3-11.3-17-17z" />
            <path d="M280 176l0 24 0 102.1 31-31 17-17L361.9 288l-17 17-72 72-17 17-17-17-72-72-17-17L184 254.1l17 17 31 31L232 200l0-24 48 0z" />
    </Icon>
);

export default FolderArrowDown;