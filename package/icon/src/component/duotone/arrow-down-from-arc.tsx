
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-from-arc` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-from-arc?s=duotone arrow-down-from-arc}
 * @preview ![arrow-down-from-arc](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmMwIDE3LjcgMTQuMyAzMiAzMiAzMnMzMi0xNC4zIDMyLTMyQzY0IDE1MCAxNTAgNjQgMjU2IDY0czE5MiA4NiAxOTIgMTkyYzAgMTcuNyAxNC4zIDMyIDMyIDMyczMyLTE0LjMgMzItMzJDNTEyIDExNC42IDM5Ny40IDAgMjU2IDBTMCAxMTQuNiAwIDI1NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTEyMS40IDM0NS40Yy0xMi41IDEyLjUtMTIuNSAzMi44IDAgNDUuM2wxMTIgMTEyYzEyLjUgMTIuNSAzMi44IDEyLjUgNDUuMyAwbDExMi0xMTJjMTIuNS0xMi41IDEyLjUtMzIuOCAwLTQ1LjNzLTMyLjgtMTIuNS00NS4zIDBMMjg4IDQwMi43IDI4OCAxOTJjMC0xNy43LTE0LjMtMzItMzItMzJzLTMyIDE0LjMtMzIgMzJsMCAyMTAuNy01Ny40LTU3LjRjLTEyLjUtMTIuNS0zMi44LTEyLjUtNDUuMyAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ArrowDownFromArc: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256c0 17.7 14.3 32 32 32s32-14.3 32-32C64 150 150 64 256 64s192 86 192 192c0 17.7 14.3 32 32 32s32-14.3 32-32C512 114.6 397.4 0 256 0S0 114.6 0 256z" />
            <path d="M121.4 345.4c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 402.7 288 192c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0z" />
    </Icon>
);

export default ArrowDownFromArc;