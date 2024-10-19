
import { Icon } from "../../index";

/**
 * A component that renders the `clock-ten` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-ten?s=thin clock-ten}
 * @preview ![clock-ten](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDk2IDI1NkEyNDAgMjQwIDAgMSAxIDE2IDI1NmEyNDAgMjQwIDAgMSAxIDQ4MCAwek0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6TTI0OCAxMDRsMCAxMzcuMS04My42LTU1LjdjLTMuNy0yLjUtOC42LTEuNS0xMS4xIDIuMnMtMS41IDguNiAyLjIgMTEuMWw5NiA2NGMyLjUgMS42IDUuNiAxLjggOC4yIC40czQuMi00LjEgNC4yLTcuMWwwLTE1MmMwLTQuNC0zLjYtOC04LThzLTggMy42LTggOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ClockTen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 1 16 256a240 240 0 1 1 480 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM248 104l0 137.1-83.6-55.7c-3.7-2.5-8.6-1.5-11.1 2.2s-1.5 8.6 2.2 11.1l96 64c2.5 1.6 5.6 1.8 8.2 .4s4.2-4.1 4.2-7.1l0-152c0-4.4-3.6-8-8-8s-8 3.6-8 8z" />
    </Icon>
);

export default ClockTen;