
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-calendar` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-calendar?s=duotone circle-calendar}
 * @preview ![circle-calendar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTEyOC05NmMwLTE3LjcgMTQuMy0zMiAzMi0zMmwzMiAwIDAtMTZjMC04LjggNy4yLTE2IDE2LTE2czE2IDcuMiAxNiAxNmwwIDE2IDY0IDAgMC0xNmMwLTguOCA3LjItMTYgMTYtMTZzMTYgNy4yIDE2IDE2bDAgMTYgMzIgMGMxNy43IDAgMzIgMTQuMyAzMiAzMmwwIDY0IDAgMTI4YzAgMTcuNy0xNC4zIDMyLTMyIDMybC0xOTIgMGMtMTcuNyAwLTMyLTE0LjMtMzItMzJsMC0xMjggMC02NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE5MiAxMTJjMC04LjggNy4yLTE2IDE2LTE2czE2IDcuMiAxNiAxNmwwIDE2IDY0IDAgMC0xNmMwLTguOCA3LjItMTYgMTYtMTZzMTYgNy4yIDE2IDE2bDAgMTYgMzIgMGMxNy43IDAgMzIgMTQuMyAzMiAzMmwwIDY0LTI1NiAwIDAtNjRjMC0xNy43IDE0LjMtMzIgMzItMzJsMzIgMCAwLTE2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleCalendar: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128-96c0-17.7 14.3-32 32-32l32 0 0-16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 16 64 0 0-16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 16 32 0c17.7 0 32 14.3 32 32l0 64 0 128c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-128 0-64z" />
            <path d="M192 112c0-8.8 7.2-16 16-16s16 7.2 16 16l0 16 64 0 0-16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 16 32 0c17.7 0 32 14.3 32 32l0 64-256 0 0-64c0-17.7 14.3-32 32-32l32 0 0-16z" />
    </Icon>
);

export default CircleCalendar;