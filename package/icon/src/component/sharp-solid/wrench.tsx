
import { Icon } from "../../index";

/**
 * A component that renders the `wrench` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wrench?s=sharp-solid wrench}
 * @preview ![wrench](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzUyIDMyMGM4OC40IDAgMTYwLTcxLjYgMTYwLTE2MGMwLTIzLjUtNS4xLTQ1LjgtMTQuMS02NS45TDQwMCAxOTJsLTgwIDAgMC04MCA5Ny45LTk3LjlDMzk3LjggNS4xIDM3NS41IDAgMzUyIDBDMjYzLjYgMCAxOTIgNzEuNiAxOTIgMTYwYzAgMTkuMSAzLjQgMzcuNSA5LjUgNTQuNUwwIDQxNmw5NiA5NkwyOTcuNSAzMTAuNWMxNyA2LjIgMzUuNCA5LjUgNTQuNSA5LjV6TTEzNy45IDQwOEwxMDQgNDQxLjkgNzAuMSA0MDggMTA0IDM3NC4xIDEzNy45IDQwOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Wrench: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 320c88.4 0 160-71.6 160-160c0-23.5-5.1-45.8-14.1-65.9L400 192l-80 0 0-80 97.9-97.9C397.8 5.1 375.5 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L0 416l96 96L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM137.9 408L104 441.9 70.1 408 104 374.1 137.9 408z" />
    </Icon>
);

export default Wrench;