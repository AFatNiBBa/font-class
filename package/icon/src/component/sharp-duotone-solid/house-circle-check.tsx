
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-circle-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-circle-check?s=sharp-duotone-solid house-circle-check}
 * @preview ![house-circle-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI0MGwwIDQ3LjYgNjQuMSAwIDAgMjI0LjRMMjI0IDUxMmwwLTE2MCA5Ni43IDBjOC4xLTg5LjcgODMuNS0xNjAgMTc1LjMtMTYwYzguMyAwIDE2LjUgLjYgMjQuNSAxLjdMMjg4LjQgMCAwIDI0MHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQ5NiA1MTJhMTQ0IDE0NCAwIDEgMCAwLTI4OCAxNDQgMTQ0IDAgMSAwIDAgMjg4em02Ny4zLTE2NC43bC03MiA3Mkw0ODAgNDMwLjZsLTExLjMtMTEuMy00MC00MEw0MTcuNCAzNjggNDQwIDM0NS40bDExLjMgMTEuM0w0ODAgMzg1LjRsNjAuNy02MC43TDU1MiAzMTMuNCA1NzQuNiAzMzZsLTExLjMgMTEuM3oiLz48L3N2Zz4=|width=32|height=32)
 */
const HouseCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 240l0 47.6 64.1 0 0 224.4L224 512l0-160 96.7 0c8.1-89.7 83.5-160 175.3-160c8.3 0 16.5 .6 24.5 1.7L288.4 0 0 240z" />
            <path d="M496 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm67.3-164.7l-72 72L480 430.6l-11.3-11.3-40-40L417.4 368 440 345.4l11.3 11.3L480 385.4l60.7-60.7L552 313.4 574.6 336l-11.3 11.3z" />
    </Icon>
);

export default HouseCircleCheck;