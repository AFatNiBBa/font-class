
import { Icon } from "../../index";

/**
 * A component that renders the `battery-empty` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-empty?s=light battery-empty}
 * @preview ![battery-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNODAgMTI4Yy0yNi41IDAtNDggMjEuNS00OCA0OGwwIDE2MGMwIDI2LjUgMjEuNSA0OCA0OCA0OGwzNTIgMGMyNi41IDAgNDgtMjEuNSA0OC00OGwwLTE2MGMwLTI2LjUtMjEuNS00OC00OC00OEw4MCAxMjh6TTAgMTc2YzAtNDQuMiAzNS44LTgwIDgwLTgwbDM1MiAwYzQ0LjIgMCA4MCAzNS44IDgwIDgwbDAgMTYwYzAgNDQuMi0zNS44IDgwLTgwIDgwTDgwIDQxNmMtNDQuMiAwLTgwLTM1LjgtODAtODBMMCAxNzZ6bTU2MCAxNmM4LjggMCAxNiA3LjIgMTYgMTZsMCA5NmMwIDguOC03LjIgMTYtMTYgMTZzLTE2LTcuMi0xNi0xNmwwLTk2YzAtOC44IDcuMi0xNiAxNi0xNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const BatteryEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M80 128c-26.5 0-48 21.5-48 48l0 160c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-160c0-26.5-21.5-48-48-48L80 128zM0 176c0-44.2 35.8-80 80-80l352 0c44.2 0 80 35.8 80 80l0 160c0 44.2-35.8 80-80 80L80 416c-44.2 0-80-35.8-80-80L0 176zm560 16c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default BatteryEmpty;