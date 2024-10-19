
import { Icon } from "../../index";

/**
 * A component that renders the `cube` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cube?s=sharp-regular cube}
 * @preview ![cube](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDYuM2w4LjUgMy4yIDIzMiA4OCAxNS41IDUuOSAwIDE2LjYgMCAyNjQgMCAxNi0xNC44IDYuMS0yMzIgOTZMMjU2IDUwNmwtOS4yLTMuOC0yMzItOTZMMCA0MDBsMC0xNkwwIDEyMGwwLTE2LjYgMTUuNS01LjkgMjMyLTg4TDI1NiA2LjN6TTQ4IDM2OGwxODQgNzYuMSAwLTIwMy43TDQ4IDE2OC4xIDQ4IDM2OHptMjMyIDc2LjFMNDY0IDM2OGwwLTE5OS45TDI4MCAyNDAuNGwwIDIwMy43ek0yNTYgNTcuN2wtMTgyIDY5IDE4MiA3MS41IDE4Mi03MS41LTE4Mi02OXoiLz48L3N2Zz4=|width=32|height=32)
 */
const Cube: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 6.3l8.5 3.2 232 88 15.5 5.9 0 16.6 0 264 0 16-14.8 6.1-232 96L256 506l-9.2-3.8-232-96L0 400l0-16L0 120l0-16.6 15.5-5.9 232-88L256 6.3zM48 368l184 76.1 0-203.7L48 168.1 48 368zm232 76.1L464 368l0-199.9L280 240.4l0 203.7zM256 57.7l-182 69 182 71.5 182-71.5-182-69z" />
    </Icon>
);

export default Cube;