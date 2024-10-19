
import { Icon } from "../../index";

/**
 * A component that renders the `bird` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bird?s=sharp-solid bird}
 * @preview ![bird](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAxNjBsMCAzMkMwIDI5NC4zIDY4LjUgMzgwLjUgMTYyLjEgNDA3LjRMMjE3LjYgNTEybDU0LjMgMC0uNy0xLjJMMjIxIDQxNmMxIDAgMiAwIDMgMGMxMi42IDAgMjUtMSAzNy4xLTMuMUwzMTMuNiA1MTJsNTQuMyAwLS43LTEuMkwzMDguMyAzOTkuNkMzOTAuMyAzNjYuMyA0NDggMjg1LjkgNDQ4IDE5MmwwLTIxLjNMNTEyIDEyOCA0NDcuNCA4NC45QzQ0MS45IDM3LjEgNDAxLjMgMCAzNTIgMGMtNTMgMC05NiA0My05NiA5NmwwIDY0TDAgMTYwek0zNTIgOTZhMjQgMjQgMCAxIDEgMCA0OCAyNCAyNCAwIDEgMSAwLTQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Bird: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 160l0 32C0 294.3 68.5 380.5 162.1 407.4L217.6 512l54.3 0-.7-1.2L221 416c1 0 2 0 3 0c12.6 0 25-1 37.1-3.1L313.6 512l54.3 0-.7-1.2L308.3 399.6C390.3 366.3 448 285.9 448 192l0-21.3L512 128 447.4 84.9C441.9 37.1 401.3 0 352 0c-53 0-96 43-96 96l0 64L0 160zM352 96a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Bird;