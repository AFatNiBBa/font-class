
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-to-square` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-to-square?s=duotone arrow-down-to-square}
 * @preview ![arrow-down-to-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDExMkMwIDY3LjggMzUuOCAzMiA4MCAzMmwzMiAwYzE3LjcgMCAzMiAxNC4zIDMyIDMycy0xNC4zIDMyLTMyIDMyTDgwIDk2Yy04LjggMC0xNiA3LjItMTYgMTZsMCAzMjBjMCA4LjggNy4yIDE2IDE2IDE2bDM1MiAwYzguOCAwIDE2LTcuMiAxNi0xNmwwLTMyMGMwLTguOC03LjItMTYtMTYtMTZsLTMyIDBjLTE3LjcgMC0zMi0xNC4zLTMyLTMyczE0LjMtMzIgMzItMzJsMzIgMGM0NC4yIDAgODAgMzUuOCA4MCA4MGwwIDMyMGMwIDQ0LjItMzUuOCA4MC04MCA4MEw4MCA1MTJjLTQ0LjIgMC04MC0zNS44LTgwLTgwTDAgMTEyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjMzLjQgMzQyLjZjMTIuNSAxMi41IDMyLjggMTIuNSA0NS4zIDBsOTYtOTZjMTIuNS0xMi41IDEyLjUtMzIuOCAwLTQ1LjNzLTMyLjgtMTIuNS00NS4zIDBMMjg4IDI0Mi43IDI4OCAzMmMwLTE3LjctMTQuMy0zMi0zMi0zMnMtMzIgMTQuMy0zMiAzMmwwIDIxMC43LTQxLjQtNDEuNGMtMTIuNS0xMi41LTMyLjgtMTIuNS00NS4zIDBzLTEyLjUgMzIuOCAwIDQ1LjNsOTYgOTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const ArrowDownToSquare: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 112C0 67.8 35.8 32 80 32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 96c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l352 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c44.2 0 80 35.8 80 80l0 320c0 44.2-35.8 80-80 80L80 512c-44.2 0-80-35.8-80-80L0 112z" />
            <path d="M233.4 342.6c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 242.7 288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96z" />
    </Icon>
);

export default ArrowDownToSquare;