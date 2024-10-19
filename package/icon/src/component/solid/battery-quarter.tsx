
import { Icon } from "../../index";

/**
 * A component that renders the `battery-quarter` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-quarter?s=solid battery-quarter}
 * @preview ![battery-quarter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDY0IDE2MGM4LjggMCAxNiA3LjIgMTYgMTZsMCAxNjBjMCA4LjgtNy4yIDE2LTE2IDE2TDgwIDM1MmMtOC44IDAtMTYtNy4yLTE2LTE2bDAtMTYwYzAtOC44IDcuMi0xNiAxNi0xNmwzODQgMHpNODAgOTZDMzUuOCA5NiAwIDEzMS44IDAgMTc2TDAgMzM2YzAgNDQuMiAzNS44IDgwIDgwIDgwbDM4NCAwYzQ0LjIgMCA4MC0zNS44IDgwLTgwbDAtMTZjMTcuNyAwIDMyLTE0LjMgMzItMzJsMC02NGMwLTE3LjctMTQuMy0zMi0zMi0zMmwwLTE2YzAtNDQuMi0zNS44LTgwLTgwLTgwTDgwIDk2em0xMTIgOTZsLTk2IDAgMCAxMjggOTYgMCAwLTEyOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const BatteryQuarter: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M464 160c8.8 0 16 7.2 16 16l0 160c0 8.8-7.2 16-16 16L80 352c-8.8 0-16-7.2-16-16l0-160c0-8.8 7.2-16 16-16l384 0zM80 96C35.8 96 0 131.8 0 176L0 336c0 44.2 35.8 80 80 80l384 0c44.2 0 80-35.8 80-80l0-16c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l0-16c0-44.2-35.8-80-80-80L80 96zm112 96l-96 0 0 128 96 0 0-128z" />
    </Icon>
);

export default BatteryQuarter;