
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-pen` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-pen?s=sharp-duotone-solid file-pen}
 * @preview ![file-pen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMjI0IDBsMCAxNjAgMTYwIDAgMCAxNDAuMy0xMTcgMTE3TDI1My40IDUxMiAwIDUxMiAwIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zODQgMTYwbC0xNjAgMEwyMjQgMCAzODQgMTYwem0xMjEuMiA2My44bDcxIDcxLTQxLjMgNDEuMy03MS03MSA0MS4zLTQxLjN6bS02My45IDYzLjlsNzEgNzFMMzcwLjkgNTAwLjEgMjg4IDUxMmwxMS45LTgyLjlMNDQxLjIgMjg3Ljh6Ii8+PC9zdmc+|width=32|height=32)
 */
const FilePen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 140.3-117 117L253.4 512 0 512 0 0z" />
            <path d="M384 160l-160 0L224 0 384 160zm121.2 63.8l71 71-41.3 41.3-71-71 41.3-41.3zm-63.9 63.9l71 71L370.9 500.1 288 512l11.9-82.9L441.2 287.8z" />
    </Icon>
);

export default FilePen;