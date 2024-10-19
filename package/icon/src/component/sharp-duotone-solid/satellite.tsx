
import { Icon, generic } from "../../index";

/**
 * A component that renders the `satellite` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/satellite?s=sharp-duotone-solid satellite}
 * @preview ![satellite](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAxMjhsOTYgOTZMMzIwIDk2IDIyNCAwIDk2IDEyOHpNMjg4IDMyMGw5NiA5Nkw1MTIgMjg4bC05Ni05NmMtNDIuNyA0Mi43LTg1LjMgODUuMy0xMjggMTI4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTc1IDI0MUw0MDAgMTZsOTYgOTZMMjcxIDMzN2MxMC45IDI0LjEgMTcgNTAuOSAxNyA3OWMwIDM0LjUtOS4xIDY2LjktMjUuMSA5NC45TDE0My4zIDM5MS4zbC0yNC40IDI0LjRjLjcgMi42IDEuMSA1LjQgMS4xIDguM2MwIDE3LjctMTQuMyAzMi0zMiAzMnMtMzItMTQuMy0zMi0zMnMxNC4zLTMyIDMyLTMyYzIuOSAwIDUuNiAuNCA4LjMgMS4xbDI0LjQtMjQuNEwxLjEgMjQ5LjFjMjgtMTYgNjAuNC0yNS4xIDk0LjktMjUuMWMyOC4yIDAgNTQuOSA2LjEgNzkgMTd6Ii8+PC9zdmc+|width=32|height=32)
 */
const Satellite: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 128l96 96L320 96 224 0 96 128zM288 320l96 96L512 288l-96-96c-42.7 42.7-85.3 85.3-128 128z" />
            <path d="M175 241L400 16l96 96L271 337c10.9 24.1 17 50.9 17 79c0 34.5-9.1 66.9-25.1 94.9L143.3 391.3l-24.4 24.4c.7 2.6 1.1 5.4 1.1 8.3c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32c2.9 0 5.6 .4 8.3 1.1l24.4-24.4L1.1 249.1c28-16 60.4-25.1 94.9-25.1c28.2 0 54.9 6.1 79 17z" />
    </Icon>
);

export default Satellite;