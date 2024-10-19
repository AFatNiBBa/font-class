
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-pen` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-pen?s=duotone file-pen}
 * @preview ![file-pen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0QzAgMjguNyAyOC43IDAgNjQgMEwyMjQgMGwwIDEyOGMwIDE3LjcgMTQuMyAzMiAzMiAzMmwxMjggMCAwIDEzOS41LTk0LjcgOTQuN2MtOC4yIDguMi0xNCAxOC41LTE2LjggMjkuN2wtMTUgNjAuMWMtMi4zIDkuNC0xLjggMTkuMSAxLjQgMjcuOUw2NCA1MTJjLTM1LjMgMC02NC0yOC43LTY0LTY0TDAgNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zODQgMTYwbC0xMjggMGMtMTcuNyAwLTMyLTE0LjMtMzItMzJMMjI0IDAgMzg0IDE2MHptMTY1LjkgNzUuN2wxNC40IDE0LjRjMTUuNiAxNS42IDE1LjYgNDAuOSAwIDU2LjZsLTI5LjQgMjkuNS03MS03MSAyOS40LTI5LjRjMTUuNi0xNS42IDQwLjktMTUuNiA1Ni42IDB6TTMxMS45IDQxNy4xTDQ0MS4yIDI4Ny44bDcxIDcxTDM4Mi45IDQ4OC4xYy00LjEgNC4xLTkuMiA3LTE0LjkgOC40bC02MC4yIDE1Yy01LjUgMS40LTExLjItLjItMTUuMi00LjJzLTUuNi05LjctNC4yLTE1LjJsMTUtNjAuMmMxLjQtNS42IDQuMy0xMC44IDguNC0xNC45eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const FilePen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 139.5-94.7 94.7c-8.2 8.2-14 18.5-16.8 29.7l-15 60.1c-2.3 9.4-1.8 19.1 1.4 27.9L64 512c-35.3 0-64-28.7-64-64L0 64z" />
            <path d="M384 160l-128 0c-17.7 0-32-14.3-32-32L224 0 384 160zm165.9 75.7l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-29.4 29.5-71-71 29.4-29.4c15.6-15.6 40.9-15.6 56.6 0zM311.9 417.1L441.2 287.8l71 71L382.9 488.1c-4.1 4.1-9.2 7-14.9 8.4l-60.2 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.2c1.4-5.6 4.3-10.8 8.4-14.9z" />
    </Icon>
);

export default FilePen;