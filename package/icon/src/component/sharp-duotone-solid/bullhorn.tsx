
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bullhorn` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bullhorn?s=sharp-duotone-solid bullhorn}
 * @preview ![bullhorn](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xOTIgMTI4bDAgMTkyIDAgMzJjODEuMyAwIDE1OC43IDM1LjEgMjEyLjMgOTYuM0w0MzIgNDgwbDQ4IDAgMC0xNzkuNiAwLTEyMC43TDQ4MCAwIDQzMiAwIDQwNC4zIDMxLjdDMzUwLjcgOTIuOSAyNzMuMyAxMjggMTkyIDEyOHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgMTI4bDE5MiAwIDAgMTkyIDAgMzIgMCAxNjBMNjQgNTEybDAtMTYwTDAgMzUyIDAgMTI4ek01MTIgMjQwYzAgMjcuOS0xMy40IDUxLjYtMzIgNjAuNGwwLTEyMC43YzE4LjYgOC44IDMyIDMyLjUgMzIgNjAuNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Bullhorn: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 128l0 192 0 32c81.3 0 158.7 35.1 212.3 96.3L432 480l48 0 0-179.6 0-120.7L480 0 432 0 404.3 31.7C350.7 92.9 273.3 128 192 128z" />
            <path d="M0 128l192 0 0 192 0 32 0 160L64 512l0-160L0 352 0 128zM512 240c0 27.9-13.4 51.6-32 60.4l0-120.7c18.6 8.8 32 32.5 32 60.4z" />
    </Icon>
);

export default Bullhorn;