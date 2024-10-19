
import { Icon, generic } from "../../index";

/**
 * A component that renders the `whale` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/whale?s=sharp-duotone-solid whale}
 * @preview ![whale](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMxNy42QzAgNDA3LjMgNzIuNyA0ODAgMTYyLjQgNDgwTDY0MCA0ODBsMC0zNTItMTI5LjkgMGMtOTEuNyAwLTE4MC4zIDMyLjgtMjQ5LjkgOTIuNGwtMTAzLjggODljLTggNi44LTE4LjEgMTAuNi0yOC42IDEwLjZsLTEuMSAwYy0xOC4zIDAtMzQuNS0xMS43LTQwLjMtMjljLTQtMTItMi40LTI1LjIgNC4zLTM1LjlsMzYuNi01OC42TDIwOCAyMDhsODAtODBMMTg0IDEwNCAxNjAgMCA4MCA4MGwxMiA4NEw0My42IDIxMi40QzE1LjcgMjQwLjMgMCAyNzguMiAwIDMxNy42ek00MjQgMzA0YTI0IDI0IDAgMSAxIC00OCAwIDI0IDI0IDAgMSAxIDQ4IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00MDAgMjgwYTI0IDI0IDAgMSAwIDAgNDggMjQgMjQgMCAxIDAgMC00OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Whale: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 317.6C0 407.3 72.7 480 162.4 480L640 480l0-352-129.9 0c-91.7 0-180.3 32.8-249.9 92.4l-103.8 89c-8 6.8-18.1 10.6-28.6 10.6l-1.1 0c-18.3 0-34.5-11.7-40.3-29c-4-12-2.4-25.2 4.3-35.9l36.6-58.6L208 208l80-80L184 104 160 0 80 80l12 84L43.6 212.4C15.7 240.3 0 278.2 0 317.6zM424 304a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
            <path d="M400 280a24 24 0 1 0 0 48 24 24 0 1 0 0-48z" />
    </Icon>
);

export default Whale;