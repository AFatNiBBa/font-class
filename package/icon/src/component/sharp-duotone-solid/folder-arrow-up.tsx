
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-arrow-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-arrow-up?s=sharp-duotone-solid folder-arrow-up}
 * @preview ![folder-arrow-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDUxMiAwIDAtMzg0TDI3MiA5NiAyMjQgMzIgMCAzMnpNMTUwLjEgMjcyYzUuNy01LjcgMTEuMy0xMS4zIDE3LTE3YzI0LTI0IDQ4LTQ4IDcyLTcybDE3LTE3IDE3IDE3YzI0IDI0IDQ4IDQ4IDcyIDcyYzUuNyA1LjcgMTEuMyAxMS4zIDE3IDE3Yy0xMS4zIDExLjMtMjIuNiAyMi42LTMzLjkgMzMuOWMtNS43LTUuNy0xMS4zLTExLjMtMTctMTdjLTEwLjMtMTAuMy0yMC43LTIwLjctMzEtMzFjMCAzNCAwIDY4IDAgMTAyLjFjMCA4IDAgMTYgMCAyNGwtNDggMGMwLTggMC0xNiAwLTI0YzAtMzQgMC02OCAwLTEwMi4xYy0xMC4zIDEwLjMtMjAuNyAyMC43LTMxIDMxYy01LjcgNS43LTExLjMgMTEuMy0xNyAxN2MtMTEuMy0xMS4zLTIyLjYtMjIuNi0zMy45LTMzLjl6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yODAgMzg0bDAtMjQgMC0xMDIuMSAzMSAzMSAxNyAxN0wzNjEuOSAyNzJsLTE3LTE3LTcyLTcyLTE3LTE3LTE3IDE3LTcyIDcyLTE3IDE3TDE4NCAzMDUuOWwxNy0xNyAzMS0zMUwyMzIgMzYwbDAgMjQgNDggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const FolderArrowUp: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 480l512 0 0-384L272 96 224 32 0 32zM150.1 272c5.7-5.7 11.3-11.3 17-17c24-24 48-48 72-72l17-17 17 17c24 24 48 48 72 72c5.7 5.7 11.3 11.3 17 17c-11.3 11.3-22.6 22.6-33.9 33.9c-5.7-5.7-11.3-11.3-17-17c-10.3-10.3-20.7-20.7-31-31c0 34 0 68 0 102.1c0 8 0 16 0 24l-48 0c0-8 0-16 0-24c0-34 0-68 0-102.1c-10.3 10.3-20.7 20.7-31 31c-5.7 5.7-11.3 11.3-17 17c-11.3-11.3-22.6-22.6-33.9-33.9z" />
            <path d="M280 384l0-24 0-102.1 31 31 17 17L361.9 272l-17-17-72-72-17-17-17 17-72 72-17 17L184 305.9l17-17 31-31L232 360l0 24 48 0z" />
    </Icon>
);

export default FolderArrowUp;