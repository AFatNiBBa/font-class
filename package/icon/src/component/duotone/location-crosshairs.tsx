
import { Icon, generic } from "../../index";

/**
 * A component that renders the `location-crosshairs` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-crosshairs?s=duotone location-crosshairs}
 * @preview ![location-crosshairs](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNzYgMjU2YTgwIDgwIDAgMSAwIDE2MCAwIDgwIDgwIDAgMSAwIC0xNjAgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiAwYzE3LjcgMCAzMiAxNC4zIDMyIDMybDAgMzQuN0MzNjguNCA4MC4xIDQzMS45IDE0My42IDQ0NS4zIDIyNGwzNC43IDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzJsLTM0LjcgMEM0MzEuOSAzNjguNCAzNjguNCA0MzEuOSAyODggNDQ1LjNsMCAzNC43YzAgMTcuNy0xNC4zIDMyLTMyIDMycy0zMi0xNC4zLTMyLTMybDAtMzQuN0MxNDMuNiA0MzEuOSA4MC4xIDM2OC40IDY2LjcgMjg4TDMyIDI4OGMtMTcuNyAwLTMyLTE0LjMtMzItMzJzMTQuMy0zMiAzMi0zMmwzNC43IDBDODAuMSAxNDMuNiAxNDMuNiA4MC4xIDIyNCA2Ni43TDIyNCAzMmMwLTE3LjcgMTQuMy0zMiAzMi0zMnpNMTI4IDI1NmExMjggMTI4IDAgMSAwIDI1NiAwIDEyOCAxMjggMCAxIDAgLTI1NiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const LocationCrosshairs: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M176 256a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
            <path d="M256 0c17.7 0 32 14.3 32 32l0 34.7C368.4 80.1 431.9 143.6 445.3 224l34.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-34.7 0C431.9 368.4 368.4 431.9 288 445.3l0 34.7c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.7C143.6 431.9 80.1 368.4 66.7 288L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l34.7 0C80.1 143.6 143.6 80.1 224 66.7L224 32c0-17.7 14.3-32 32-32zM128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0z" />
    </Icon>
);

export default LocationCrosshairs;