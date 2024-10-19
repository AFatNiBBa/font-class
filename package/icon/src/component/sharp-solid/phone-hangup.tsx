
import { Icon } from "../../index";

/**
 * A component that renders the `phone-hangup` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-hangup?s=sharp-solid phone-hangup}
 * @preview ![phone-hangup](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyNDBMNjQgMzg0bDE2MC0zMlYyMjRjNjIuMy0yMC44IDEyOS43LTIwLjggMTkyIDBWMzUybDE2MCAzMiA2NC0xNDRDNjAyLjcgMTkyIDQ4Ni40IDk2IDMyMCA5NlMzNy4zIDE5MiAwIDI0MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const PhoneHangup: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 240L64 384l160-32V224c62.3-20.8 129.7-20.8 192 0V352l160 32 64-144C602.7 192 486.4 96 320 96S37.3 192 0 240z" />
    </Icon>
);

export default PhoneHangup;