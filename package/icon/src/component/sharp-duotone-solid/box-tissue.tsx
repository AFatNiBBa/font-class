
import { Icon, generic } from "../../index";

/**
 * A component that renders the `box-tissue` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-tissue?s=sharp-duotone-solid box-tissue}
 * @preview ![box-tissue](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIyNEwwIDM4NGw1MTIgMCAwLTE2MC0xMDYuNyAwTDM4NCAyODhsNjQgMCAwIDMyLTc0LjcgMC0yMzguMiAwTDY0IDMyMGwwLTMyIDY0IDBjLTQuNy0yMS4zLTkuNS00Mi43LTE0LjItNjRMMCAyMjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik02NCAwTDIwOCAwYzQwIDAgNTIgMjQgNjQgNDhzMjQgNDggNjQgNDhsMTEyIDBMMzczLjMgMzIwbC0yMzguMiAwTDY0IDB6TTUxMiAzODRsMCAxMjhMMCA1MTIgMCAzODRsNTEyIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const BoxTissue: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224L0 384l512 0 0-160-106.7 0L384 288l64 0 0 32-74.7 0-238.2 0L64 320l0-32 64 0c-4.7-21.3-9.5-42.7-14.2-64L0 224z" />
            <path d="M64 0L208 0c40 0 52 24 64 48s24 48 64 48l112 0L373.3 320l-238.2 0L64 0zM512 384l0 128L0 512 0 384l512 0z" />
    </Icon>
);

export default BoxTissue;