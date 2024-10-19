
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-to-arc` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-to-arc?s=duotone arrow-up-to-arc}
 * @preview ![arrow-up-to-arc](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmMwIDE3LjcgMTQuMyAzMiAzMiAzMnMzMi0xNC4zIDMyLTMyQzY0IDE1MCAxNTAgNjQgMjU2IDY0czE5MiA4NiAxOTIgMTkyYzAgMTcuNyAxNC4zIDMyIDMyIDMyczMyLTE0LjMgMzItMzJDNTEyIDExNC42IDM5Ny40IDAgMjU2IDBTMCAxMTQuNiAwIDI1NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM5MC42IDMyNi42YzEyLjUtMTIuNSAxMi41LTMyLjggMC00NS4zbC0xMTItMTEyYy0xMi41LTEyLjUtMzIuOC0xMi41LTQ1LjMgMGwtMTEyIDExMmMtMTIuNSAxMi41LTEyLjUgMzIuOCAwIDQ1LjNzMzIuOCAxMi41IDQ1LjMgMEwyMjQgMjY5LjMgMjI0IDQ4MGMwIDE3LjcgMTQuMyAzMiAzMiAzMnMzMi0xNC4zIDMyLTMybDAtMjEwLjcgNTcuNCA1Ny40YzEyLjUgMTIuNSAzMi44IDEyLjUgNDUuMyAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ArrowUpToArc: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256c0 17.7 14.3 32 32 32s32-14.3 32-32C64 150 150 64 256 64s192 86 192 192c0 17.7 14.3 32 32 32s32-14.3 32-32C512 114.6 397.4 0 256 0S0 114.6 0 256z" />
            <path d="M390.6 326.6c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 269.3 224 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 57.4 57.4c12.5 12.5 32.8 12.5 45.3 0z" />
    </Icon>
);

export default ArrowUpToArc;