
import { Icon } from "../../index";

/**
 * A component that renders the `battery-empty` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-empty?s=regular battery-empty}
 * @preview ![battery-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNODAgMTQ0Yy0xNy43IDAtMzIgMTQuMy0zMiAzMmwwIDE2MGMwIDE3LjcgMTQuMyAzMiAzMiAzMmwzODQgMGMxNy43IDAgMzItMTQuMyAzMi0zMmwwLTE2MGMwLTE3LjctMTQuMy0zMi0zMi0zMkw4MCAxNDR6TTAgMTc2YzAtNDQuMiAzNS44LTgwIDgwLTgwbDM4NCAwYzQ0LjIgMCA4MCAzNS44IDgwIDgwbDAgMTZjMTcuNyAwIDMyIDE0LjMgMzIgMzJsMCA2NGMwIDE3LjctMTQuMyAzMi0zMiAzMmwwIDE2YzAgNDQuMi0zNS44IDgwLTgwIDgwTDgwIDQxNmMtNDQuMiAwLTgwLTM1LjgtODAtODBMMCAxNzZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const BatteryEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M80 144c-17.7 0-32 14.3-32 32l0 160c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L80 144zM0 176c0-44.2 35.8-80 80-80l384 0c44.2 0 80 35.8 80 80l0 16c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l0 16c0 44.2-35.8 80-80 80L80 416c-44.2 0-80-35.8-80-80L0 176z" />
    </Icon>
);

export default BatteryEmpty;