
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-check?s=sharp-duotone-solid folder-check}
 * @preview ![folder-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDUxMiAwIDAtMzg0TDI3MiA5NiAyMjQgMzIgMCAzMnpNMTI3IDI4OWMxMS4zLTExLjMgMjIuNi0yMi42IDMzLjktMzMuOWMyMSAyMSA0MiA0MiA2MyA2M2M0Mi4zLTQyLjMgODQuNy04NC43IDEyNy0xMjdjMTEuMyAxMS4zIDIyLjYgMjIuNiAzMy45IDMzLjljLTQ4IDQ4LTk2IDk2LTE0NCAxNDRjLTUuNyA1LjctMTEuMyAxMS4zLTE3IDE3Yy01LjctNS43LTExLjMtMTEuMy0xNy0xN2MtMjYuNy0yNi43LTUzLjMtNTMuMy04MC04MHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM4NSAyMjVMMjQxIDM2OWwtMTcgMTctMTctMTctODAtODBMMTYxIDI1NWw2MyA2M0wzNTEgMTkxIDM4NSAyMjV6Ii8+PC9zdmc+|width=32|height=32)
 */
const FolderCheck: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 480l512 0 0-384L272 96 224 32 0 32zM127 289c11.3-11.3 22.6-22.6 33.9-33.9c21 21 42 42 63 63c42.3-42.3 84.7-84.7 127-127c11.3 11.3 22.6 22.6 33.9 33.9c-48 48-96 96-144 144c-5.7 5.7-11.3 11.3-17 17c-5.7-5.7-11.3-11.3-17-17c-26.7-26.7-53.3-53.3-80-80z" />
            <path d="M385 225L241 369l-17 17-17-17-80-80L161 255l63 63L351 191 385 225z" />
    </Icon>
);

export default FolderCheck;