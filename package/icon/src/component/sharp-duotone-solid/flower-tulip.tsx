
import { Icon, generic } from "../../index";

/**
 * A component that renders the `flower-tulip` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flower-tulip?s=sharp-duotone-solid flower-tulip}
 * @preview ![flower-tulip](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyMGwwIDE2YzAgOTcuMiA3OC44IDE3NiAxNzYgMTc2bDQ4IDAgMzIgMCAzMiAwIDQ4IDBjOTcuMiAwIDE3Ni03OC44IDE3Ni0xNzZsMC0xNi04MCAwYy01OS41IDAtMTEyLjEgMjkuNS0xNDQgNzQuOEwyODggMjU2bC02NCAwIDAgMTM4LjhDMTkyLjEgMzQ5LjUgMTM5LjUgMzIwIDgwIDMyMEwwIDMyMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTk2IDEyOFYzMmw4MCA0OEwyNTYgMGw4MCA4MCA4MC00OHY5NmMwIDcwLjctNTcuMyAxMjgtMTI4IDEyOEgyMjRjLTcwLjcgMC0xMjgtNTcuMy0xMjgtMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const FlowerTulip: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 320l0 16c0 97.2 78.8 176 176 176l48 0 32 0 32 0 48 0c97.2 0 176-78.8 176-176l0-16-80 0c-59.5 0-112.1 29.5-144 74.8L288 256l-64 0 0 138.8C192.1 349.5 139.5 320 80 320L0 320z" />
            <path d="M96 128V32l80 48L256 0l80 80 80-48v96c0 70.7-57.3 128-128 128H224c-70.7 0-128-57.3-128-128z" />
    </Icon>
);

export default FlowerTulip;