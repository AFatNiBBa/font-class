
import { Icon } from "../../index";

/**
 * A component that renders the `battery-empty` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-empty?s=solid battery-empty}
 * @preview ![battery-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNODAgMTYwYy04LjggMC0xNiA3LjItMTYgMTZsMCAxNjBjMCA4LjggNy4yIDE2IDE2IDE2bDM4NCAwYzguOCAwIDE2LTcuMiAxNi0xNmwwLTE2MGMwLTguOC03LjItMTYtMTYtMTZMODAgMTYwek0wIDE3NmMwLTQ0LjIgMzUuOC04MCA4MC04MGwzODQgMGM0NC4yIDAgODAgMzUuOCA4MCA4MGwwIDE2YzE3LjcgMCAzMiAxNC4zIDMyIDMybDAgNjRjMCAxNy43LTE0LjMgMzItMzIgMzJsMCAxNmMwIDQ0LjItMzUuOCA4MC04MCA4MEw4MCA0MTZjLTQ0LjIgMC04MC0zNS44LTgwLTgwTDAgMTc2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BatteryEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M80 160c-8.8 0-16 7.2-16 16l0 160c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-160c0-8.8-7.2-16-16-16L80 160zM0 176c0-44.2 35.8-80 80-80l384 0c44.2 0 80 35.8 80 80l0 16c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l0 16c0 44.2-35.8 80-80 80L80 416c-44.2 0-80-35.8-80-80L0 176z" />
    </Icon>
);

export default BatteryEmpty;