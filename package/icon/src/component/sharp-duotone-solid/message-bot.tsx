
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-bot` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-bot?s=sharp-duotone-solid message-bot}
 * @preview ![message-bot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAwTDU0NCAwbDAgMTc2IDAgMzIgMCAyMDgtMTc2IDBMMjI0IDUxMmwwLTk2TDk2IDQxNmwwLTIwOCAwLTMyTDk2IDB6bTY0IDk2bDAgMTkyIDMyMCAwIDAtMTkyTDE2MCA5NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTY0IDE2MEwwIDE2MGwwIDY0IDY0IDAgMC0xNiAzMiAwIDAtMzItMzIgMCAwLTE2em0xOTIgMzJhMzIgMzIgMCAxIDAgLTY0IDAgMzIgMzIgMCAxIDAgNjQgMHptMTkyIDBhMzIgMzIgMCAxIDAgLTY0IDAgMzIgMzIgMCAxIDAgNjQgMHptOTYgMTZsMzIgMCAwIDE2IDY0IDAgMC02NC02NCAwIDAgMTYtMzIgMCAwIDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const MessageBot: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 0L544 0l0 176 0 32 0 208-176 0L224 512l0-96L96 416l0-208 0-32L96 0zm64 96l0 192 320 0 0-192L160 96z" />
            <path d="M64 160L0 160l0 64 64 0 0-16 32 0 0-32-32 0 0-16zm192 32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm192 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 16l32 0 0 16 64 0 0-64-64 0 0 16-32 0 0 32z" />
    </Icon>
);

export default MessageBot;