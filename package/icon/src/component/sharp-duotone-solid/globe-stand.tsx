
import { Icon, generic } from "../../index";

/**
 * A component that renders the `globe-stand` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/globe-stand?s=sharp-duotone-solid globe-stand}
 * @preview ![globe-stand](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAyMDhhMTQ0IDE0NCAwIDEgMCAyODggMEExNDQgMTQ0IDAgMSAwIDY0IDIwOHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIzIDM1OWwtMTcgMTdMNDAgNDA5LjlsMTctMTcgMTAuNS0xMC41YzM0LjMgMjcuNyA3NC45IDQzLjggMTE2LjUgNDguM2wwIDMzLjNMNjQgNDY0bDAgNDggMjg4IDAgMC00OC0xMjAgMCAwLTMzLjNjNDkuMS01LjMgOTYuOC0yNi43IDEzNC40LTY0LjNjODEuNy04MS43IDg3LjEtMjExIDE2LjEtMjk4LjlMMzkzIDU3bDE3LTE3TDM3NiA2LjEgMzU5IDIzIDMzMi41IDQ5LjZsLTE3IDE3IDE3IDE3YzY4LjcgNjguNyA2OC43IDE4MC4yIDAgMjQ4LjlzLTE4MC4yIDY4LjctMjQ4LjkgMGwtMTctMTctMTcgMTdMMjMgMzU5eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const GlobeStand: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 208a144 144 0 1 0 288 0A144 144 0 1 0 64 208z" />
            <path d="M23 359l-17 17L40 409.9l17-17 10.5-10.5c34.3 27.7 74.9 43.8 116.5 48.3l0 33.3L64 464l0 48 288 0 0-48-120 0 0-33.3c49.1-5.3 96.8-26.7 134.4-64.3c81.7-81.7 87.1-211 16.1-298.9L393 57l17-17L376 6.1 359 23 332.5 49.6l-17 17 17 17c68.7 68.7 68.7 180.2 0 248.9s-180.2 68.7-248.9 0l-17-17-17 17L23 359z" />
    </Icon>
);

export default GlobeStand;