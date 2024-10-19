
import { Icon, generic } from "../../index";

/**
 * A component that renders the `battery-empty` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-empty?s=duotone battery-empty}
 * @preview ![battery-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik04MCAxNjBjLTguOCAwLTE2IDcuMi0xNiAxNmwwIDE2MGMwIDguOCA3LjIgMTYgMTYgMTZsMzg0IDBjOC44IDAgMTYtNy4yIDE2LTE2bDAtMTYwYzAtOC44LTcuMi0xNi0xNi0xNkw4MCAxNjB6TTAgMTc2YzAtNDQuMiAzNS44LTgwIDgwLTgwbDM4NCAwYzQ0LjIgMCA4MCAzNS44IDgwIDgwbDAgMTZjMTcuNyAwIDMyIDE0LjMgMzIgMzJsMCA2NGMwIDE3LjctMTQuMyAzMi0zMiAzMmwwIDE2YzAgNDQuMi0zNS44IDgwLTgwIDgwTDgwIDQxNmMtNDQuMiAwLTgwLTM1LjgtODAtODBMMCAxNzZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9IiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BatteryEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M80 160c-8.8 0-16 7.2-16 16l0 160c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-160c0-8.8-7.2-16-16-16L80 160zM0 176c0-44.2 35.8-80 80-80l384 0c44.2 0 80 35.8 80 80l0 16c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l0 16c0 44.2-35.8 80-80 80L80 416c-44.2 0-80-35.8-80-80L0 176z" />
    </Icon>
);

export default BatteryEmpty;