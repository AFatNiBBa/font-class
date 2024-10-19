
import { Icon, generic } from "../../index";

/**
 * A component that renders the `down-long` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-long?s=duotone down-long}
 * @preview ![down-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAzMmwwIDI4OGM0Mi43IDAgODUuMyAwIDEyOCAwYzAtNDIuNyAwLTg1LjMgMC0xMjhjMC01My4zIDAtMTA2LjcgMC0xNjBjMC0xNy43LTE0LjMtMzItMzItMzJMMTI4IDBDMTEwLjMgMCA5NiAxNC4zIDk2IDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzEzLjQgMzYwLjVjNi42LTcgOC40LTE3LjIgNC42LTI2cy0xMi41LTE0LjUtMjItMTQuNWwtNzIgMEw5NiAzMjBsLTcyIDBjLTkuNiAwLTE4LjIgNS43LTIyIDE0LjVzLTIgMTkgNC42IDI2bDEzNiAxNDRjNC41IDQuOCAxMC44IDcuNSAxNy40IDcuNXMxMi45LTIuNyAxNy40LTcuNWwxMzYtMTQ0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const DownLong: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M96 32l0 288c42.7 0 85.3 0 128 0c0-42.7 0-85.3 0-128c0-53.3 0-106.7 0-160c0-17.7-14.3-32-32-32L128 0C110.3 0 96 14.3 96 32z" />
            <path d="M313.4 360.5c6.6-7 8.4-17.2 4.6-26s-12.5-14.5-22-14.5l-72 0L96 320l-72 0c-9.6 0-18.2 5.7-22 14.5s-2 19 4.6 26l136 144c4.5 4.8 10.8 7.5 17.4 7.5s12.9-2.7 17.4-7.5l136-144z" />
    </Icon>
);

export default DownLong;