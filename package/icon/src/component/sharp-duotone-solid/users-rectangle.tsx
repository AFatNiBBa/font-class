
import { Icon, generic } from "../../index";

/**
 * A component that renders the `users-rectangle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/users-rectangle?s=sharp-duotone-solid users-rectangle}
 * @preview ![users-rectangle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAzMzZsOTQuMyAwIDE5LjQtNTguMSA3LjMtMjEuOUwxMjAgMjU2IDk2IDMzNnptMzEuOC0xNjBhNDggNDggMCAxIDAgOTYgMCA0OCA0OCAwIDEgMCAtOTYgMHpNMjA4IDM4NGwyMjQgMC0xNi00OC0xNi00OC0xNy42IDAtMTI0LjggMEwyNDAgMjg4bC0xNiA0OC0xNiA0OHptNDgtMTkyYTY0IDY0IDAgMSAwIDEyOCAwIDY0IDY0IDAgMSAwIC0xMjggMHptMTYwLTE2YTQ4IDQ4IDAgMSAwIDk2IDAgNDggNDggMCAxIDAgLTk2IDB6bTcuMSA4MGw3LjMgMjEuOUw0NDkuNyAzMzZsOTQuMyAwLTI0LTgwLTk2LjkgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgMEwzMiAwIDYwOCAwbDMyIDAgMCAzMiAwIDQ0OCAwIDMyLTMyIDBMMzIgNTEyIDAgNTEybDAtMzJMMCAzMiAwIDB6TTY0IDY0bDAgMzg0IDUxMiAwIDAtMzg0TDY0IDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const UsersRectangle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 336l94.3 0 19.4-58.1 7.3-21.9L120 256 96 336zm31.8-160a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zM208 384l224 0-16-48-16-48-17.6 0-124.8 0L240 288l-16 48-16 48zm48-192a64 64 0 1 0 128 0 64 64 0 1 0 -128 0zm160-16a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm7.1 80l7.3 21.9L449.7 336l94.3 0-24-80-96.9 0z" />
            <path d="M0 0L32 0 608 0l32 0 0 32 0 448 0 32-32 0L32 512 0 512l0-32L0 32 0 0zM64 64l0 384 512 0 0-384L64 64z" />
    </Icon>
);

export default UsersRectangle;