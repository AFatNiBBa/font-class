
import { Icon, generic } from "../../index";

/**
 * A component that renders the `light-emergency` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-emergency?s=duotone light-emergency}
 * @preview ![light-emergency](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAxOTJsMCAxNjAgMzIwIDAgMC0xNjBjMC04OC40LTcxLjYtMTYwLTE2MC0xNjBTNjQgMTAzLjYgNjQgMTkyem00OCAwYzAtNjEuOSA1MC4xLTExMiAxMTItMTEyYzguOCAwIDE2IDcuMiAxNiAxNnMtNy4yIDE2LTE2IDE2Yy00NC4yIDAtODAgMzUuOC04MCA4MGMwIDguOC03LjIgMTYtMTYgMTZzLTE2LTcuMi0xNi0xNnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMyIDM1MmMtMTcuNyAwLTMyIDE0LjMtMzIgMzJsMCA2NGMwIDE3LjcgMTQuMyAzMiAzMiAzMmwzODQgMGMxNy43IDAgMzItMTQuMyAzMi0zMmwwLTY0YzAtMTcuNy0xNC4zLTMyLTMyLTMyTDMyIDM1MnoiLz48L3N2Zz4=|width=32|height=32)
 */
const LightEmergency: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 192l0 160 320 0 0-160c0-88.4-71.6-160-160-160S64 103.6 64 192zm48 0c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80c0 8.8-7.2 16-16 16s-16-7.2-16-16z" />
            <path d="M32 352c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L32 352z" />
    </Icon>
);

export default LightEmergency;