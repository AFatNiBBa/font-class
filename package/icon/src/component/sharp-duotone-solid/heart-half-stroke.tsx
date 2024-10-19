
import { Icon, generic } from "../../index";

/**
 * A component that renders the `heart-half-stroke` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-half-stroke?s=sharp-duotone-solid heart-half-stroke}
 * @preview ![heart-half-stroke](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNTYgOTZjMCAzMC4yIDAgNjAuNCAwIDkwLjVsNDUuMy00NS4zTDMyNS41IDExN2MxMy41LTEzLjUgMzEuNy0yMSA1MC43LTIxYzM5LjYgMCA3MS44IDMyLjEgNzEuOCA3MS44YzAgMTktNy42IDM3LjMtMjEgNTAuN2wtMjQuMiAyNC4yTDI1NiAzODkuNWMwIDMwLjIgMCA2MC4zIDAgOTAuNWMxNS4xLTE1LjEgMzAuMi0zMC4yIDQ1LjMtNDUuMkw0NDggMjg4bDI0LjItMjQuMmMyNS41LTI1LjUgMzkuOC02MCAzOS44LTk2QzUxMiA5Mi44IDQ1MS4yIDMyIDM3Ni4yIDMyYy0zNiAwLTcwLjUgMTQuMy05NiAzOS44QzI3Mi4yIDc5LjkgMjY0LjEgODcuOSAyNTYgOTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zOS44IDI2My44TDI1NiA0ODBWOTZMMjMxLjggNzEuOGMtMjUuNS0yNS41LTYwLTM5LjgtOTYtMzkuOEM2MC44IDMyIDAgOTIuOCAwIDE2Ny44YzAgMzYgMTQuMyA3MC41IDM5LjggOTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const HeartHalfStroke: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 96c0 30.2 0 60.4 0 90.5l45.3-45.3L325.5 117c13.5-13.5 31.7-21 50.7-21c39.6 0 71.8 32.1 71.8 71.8c0 19-7.6 37.3-21 50.7l-24.2 24.2L256 389.5c0 30.2 0 60.3 0 90.5c15.1-15.1 30.2-30.2 45.3-45.2L448 288l24.2-24.2c25.5-25.5 39.8-60 39.8-96C512 92.8 451.2 32 376.2 32c-36 0-70.5 14.3-96 39.8C272.2 79.9 264.1 87.9 256 96z" />
            <path d="M39.8 263.8L256 480V96L231.8 71.8c-25.5-25.5-60-39.8-96-39.8C60.8 32 0 92.8 0 167.8c0 36 14.3 70.5 39.8 96z" />
    </Icon>
);

export default HeartHalfStroke;