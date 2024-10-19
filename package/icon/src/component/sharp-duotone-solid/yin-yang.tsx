
import { Icon, generic } from "../../index";

/**
 * A component that renders the `yin-yang` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/yin-yang?s=sharp-duotone-solid yin-yang}
 * @preview ![yin-yang](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggMzg0YzAgNzAuNyA1Ny4zIDEyOCAxMjggMTI4YzE0MS40IDAgMjU2LTExNC42IDI1Ni0yNTZDNTEyIDExNS45IDM5OS40IDIgMjU5LjggMEMzMjguNyAyLjEgMzg0IDU4LjYgMzg0IDEyOGMwIDcwLjctNTcuMyAxMjgtMTI4IDEyOHMtMTI4IDU3LjMtMTI4IDEyOHptODgtMjU2bDQwIDQwIDQwLTQwTDI1NiA4OGwtNDAgNDB6bTAgMjU2bDQwLTQwIDQwIDQwLTQwIDQwLTQwLTQweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAyNTZDMCAxMTQuNiAxMTQuNiAwIDI1NiAwYzcwLjcgMCAxMjggNTcuMyAxMjggMTI4cy01Ny4zIDEyOC0xMjggMTI4cy0xMjggNTcuMy0xMjggMTI4czU3LjMgMTI4IDEyOCAxMjhDMTE0LjYgNTEyIDAgMzk3LjQgMCAyNTZ6TTIxNiAzODRsNDAtNDAgNDAgNDAtNDAgNDAtNDAtNDB6TTI1NiA4OGwtNDAgNDAgNDAgNDAgNDAtNDBMMjU2IDg4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const YinYang: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 384c0 70.7 57.3 128 128 128c141.4 0 256-114.6 256-256C512 115.9 399.4 2 259.8 0C328.7 2.1 384 58.6 384 128c0 70.7-57.3 128-128 128s-128 57.3-128 128zm88-256l40 40 40-40L256 88l-40 40zm0 256l40-40 40 40-40 40-40-40z" />
            <path d="M0 256C0 114.6 114.6 0 256 0c70.7 0 128 57.3 128 128s-57.3 128-128 128s-128 57.3-128 128s57.3 128 128 128C114.6 512 0 397.4 0 256zM216 384l40-40 40 40-40 40-40-40zM256 88l-40 40 40 40 40-40L256 88z" />
    </Icon>
);

export default YinYang;