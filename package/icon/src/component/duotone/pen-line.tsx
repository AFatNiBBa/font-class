
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-line` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-line?s=duotone pen-line}
 * @preview ![pen-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMjQgNDg4YzAgMTMuMyAxMC43IDI0IDI0IDI0bDMwNCAwYzEzLjMgMCAyNC0xMC43IDI0LTI0cy0xMC43LTI0LTI0LTI0bC0zMDQgMGMtMTMuMyAwLTI0IDEwLjctMjQgMjR6TTMwMyA3OUMzNDYuNCAxMjIuNCAzODkuNyAxNjUuNyA0MzMgMjA5YzE5LjktMTkuOSAzOS44LTM5LjggNTkuNy01OS43YzI1LTI1IDI1LTY1LjUgMC05MC41TDQ1My4zIDE5LjNjLTI1LTI1LTY1LjUtMjUtOTAuNSAwTDMwMyA3OXoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQzMyAyMDlMMzAzIDc5IDUyLjggMzI5LjNjLTYuNiA2LjYtMTEuNSAxNC44LTE0LjEgMjMuOEwxIDQ4MS4yQy0xLjUgNDg5LjcgLjggNDk4LjggNyA1MDVzMTUuMyA4LjUgMjMuNyA2LjFsMTI4LjItMzcuN2M5LTIuNiAxNy4yLTcuNSAyMy44LTE0LjFMNDMzIDIwOXoiLz48L3N2Zz4=|width=32|height=32)
 */
const PenLine: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M224 488c0 13.3 10.7 24 24 24l304 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-304 0c-13.3 0-24 10.7-24 24zM303 79C346.4 122.4 389.7 165.7 433 209c19.9-19.9 39.8-39.8 59.7-59.7c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0L303 79z" />
            <path d="M433 209L303 79 52.8 329.3c-6.6 6.6-11.5 14.8-14.1 23.8L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l128.2-37.7c9-2.6 17.2-7.5 23.8-14.1L433 209z" />
    </Icon>
);

export default PenLine;