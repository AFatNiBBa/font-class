
import { Icon, generic } from "../../index";

/**
 * A component that renders the `moon-over-sun` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/moon-over-sun?s=sharp-duotone-solid moon-over-sun}
 * @preview ![moon-over-sun](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE1MEw3My4xIDI1NiAwIDM2MmwxMjYuNyAyMy4zTDE1MCA1MTJsMTA2LTczLjFMMzYyIDUxMmwyMy4zLTEyNi43TDUxMiAzNjIgNDM4LjkgMjU2IDUxMiAxNTAgMzg1LjMgMTI2LjcgMzYyIDAgMjU2IDczLjEgMTUwIDAgMTI2LjcgMTI2LjcgMCAxNTB6TTQwMCAyNTZhMTQ0IDE0NCAwIDEgMSAtMjg4IDAgMTQ0IDE0NCAwIDEgMSAyODggMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM0OC45IDMxOC42Yy03LjYgMi0xNS42IDMuMS0yMy45IDMuMWMtNTAuNSAwLTkxLjQtNDAuNS05MS40LTkwLjVjMC0zNi45IDIyLjMtNjguNiA1NC4yLTgyLjdjLTEwLjEtMy0yMC44LTQuNi0zMS44LTQuNmMtNjEuOSAwLTExMiA1MC4xLTExMiAxMTJzNTAuMSAxMTIgMTEyIDExMmMzOC43IDAgNzIuOC0xOS42IDkyLjktNDkuNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const MoonOverSun: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 150L73.1 256 0 362l126.7 23.3L150 512l106-73.1L362 512l23.3-126.7L512 362 438.9 256 512 150 385.3 126.7 362 0 256 73.1 150 0 126.7 126.7 0 150zM400 256a144 144 0 1 1 -288 0 144 144 0 1 1 288 0z" />
            <path d="M348.9 318.6c-7.6 2-15.6 3.1-23.9 3.1c-50.5 0-91.4-40.5-91.4-90.5c0-36.9 22.3-68.6 54.2-82.7c-10.1-3-20.8-4.6-31.8-4.6c-61.9 0-112 50.1-112 112s50.1 112 112 112c38.7 0 72.8-19.6 92.9-49.4z" />
    </Icon>
);

export default MoonOverSun;