
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-flag` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-flag?s=duotone house-flag}
 * @preview ![house-flag](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yIDI2Ny4xQzYuNiAyNzkuNyAxOC42IDI4OCAzMiAyODhsMzIgMCAwIDE5MmMwIDE3LjcgMTQuMyAzMiAzMiAzMmw2NCAwYzE3LjcgMCAzMi0xNC4zIDMyLTMybDAtOTZjMC0xNy43IDE0LjMtMzIgMzItMzJsNjQgMGMxNy43IDAgMzIgMTQuMyAzMiAzMmwwIDk2YzAgMTcuNyAxNC4zIDMyIDMyIDMybDY0LjcgMC0uOCAwIDAtMzUzTDI3Ni44IDM5LjdjLTYtNS4xLTEzLjQtNy43LTIwLjgtNy43cy0xNC44IDIuNi0yMC44IDcuN2wtMjI0IDE5MkMxIDI0MC40LTIuNyAyNTQuNSAyIDI2Ny4xeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNTEyIDMyYzAtMTcuNy0xNC4zLTMyLTMyLTMycy0zMiAxNC4zLTMyIDMybDAgMTYwIDAgMzIwIDY0IDAgMC0zMjAgMTEyIDBjOC44IDAgMTYtNy4yIDE2LTE2bDAtMTI4YzAtOC44LTcuMi0xNi0xNi0xNkw1MTIgMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const HouseFlag: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M2 267.1C6.6 279.7 18.6 288 32 288l32 0 0 192c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-96c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 96c0 17.7 14.3 32 32 32l64.7 0-.8 0 0-353L276.8 39.7c-6-5.1-13.4-7.7-20.8-7.7s-14.8 2.6-20.8 7.7l-224 192C1 240.4-2.7 254.5 2 267.1z" />
            <path d="M512 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160 0 320 64 0 0-320 112 0c8.8 0 16-7.2 16-16l0-128c0-8.8-7.2-16-16-16L512 32z" />
    </Icon>
);

export default HouseFlag;