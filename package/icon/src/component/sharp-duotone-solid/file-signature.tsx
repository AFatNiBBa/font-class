
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-signature` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-signature?s=sharp-duotone-solid file-signature}
 * @preview ![file-signature](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMjI0IDBsMCAxNjAgMTYwIDAgMCA4OC45Yy0yOCAyOC01Ni4xIDU2LjEtODQuMSA4NC4xbC03LjMgNTEtNC42IDAtOCAwLTIyLjEgMC0xMS42LTIzLjItNC40LTguOC05LjkgMC0zMiAwLTkuOSAwLTQuNCA4LjgtMyA1LjktMTUuNC01MS40TDE2My45IDMwNCAxNTIgMzA0bC0xNiAwLTExLjkgMC0zLjQgMTEuNEwxMDAuMSAzODQgODAgMzg0bC0xNiAwIDAgMzIgMTYgMCAzMiAwIDExLjkgMCAzLjQtMTEuNEwxNDQgMzQ5bDE2LjcgNTUuNiAzLjQgMTEuNCAxMS45IDAgOCAwIDkuOSAwIDQuNC04LjhMMjA5LjkgMzg0bDEyLjIgMCAxMS42IDIzLjIgNC40IDguOCA5LjkgMCAzMiAwYzIuNiAwIDUuMyAwIDguMS0uMWMyNy42LTQgNTUuMi03LjkgODIuOC0xMS45TDM4NCAzOTAuOCAzODQgNTEyIDAgNTEyIDAgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM4NCAxNjBsLTE2MCAwTDIyNCAwIDM4NCAxNjB6bTEyMS0zMi4ybDcxIDcxLTQxLjMgNDEuMy03MS03MUw1MDUgMTI3Ljh6bS02My45IDYzLjlsNzEgNzFMMzcwLjkgNDA0IDI4OCA0MTUuOSAyOTkuOSAzMzMgNDQxLjEgMTkxLjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const FileSignature: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 88.9c-28 28-56.1 56.1-84.1 84.1l-7.3 51-4.6 0-8 0-22.1 0-11.6-23.2-4.4-8.8-9.9 0-32 0-9.9 0-4.4 8.8-3 5.9-15.4-51.4L163.9 304 152 304l-16 0-11.9 0-3.4 11.4L100.1 384 80 384l-16 0 0 32 16 0 32 0 11.9 0 3.4-11.4L144 349l16.7 55.6 3.4 11.4 11.9 0 8 0 9.9 0 4.4-8.8L209.9 384l12.2 0 11.6 23.2 4.4 8.8 9.9 0 32 0c2.6 0 5.3 0 8.1-.1c27.6-4 55.2-7.9 82.8-11.9L384 390.8 384 512 0 512 0 0z" />
            <path d="M384 160l-160 0L224 0 384 160zm121-32.2l71 71-41.3 41.3-71-71L505 127.8zm-63.9 63.9l71 71L370.9 404 288 415.9 299.9 333 441.1 191.8z" />
    </Icon>
);

export default FileSignature;