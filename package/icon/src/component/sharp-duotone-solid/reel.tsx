
import { Icon, generic } from "../../index";

/**
 * A component that renders the `reel` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reel?s=sharp-duotone-solid reel}
 * @preview ![reel](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCA2NGwwIDQ4IDMyMCAwIDAtNDhMNjQgNjR6bTAgODBsMCAzMiAzMjAgMCAwLTMyTDY0IDE0NHptMCA2NGwwIDMyIDM2OCAwIDE2IDAgMC0zMi0xNiAwTDY0IDIwOHptMCA2NGwwIDMyIDMyMCAwIDAtMzJMNjQgMjcyem0wIDY0bDAgMzIgMzIwIDAgMC0zMkw2NCAzMzZ6bTAgNjRsMCA0OCAzMjAgMCAwLTQ4TDY0IDQwMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgMEwzMiAwIDQxNiAwbDMyIDAgMCA2NC0zMiAwTDMyIDY0IDAgNjQgMCAwek0wIDQ0OGwzMiAwIDM4NCAwIDMyIDAgMCA2NC0zMiAwTDMyIDUxMiAwIDUxMmwwLTY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Reel: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 64l0 48 320 0 0-48L64 64zm0 80l0 32 320 0 0-32L64 144zm0 64l0 32 368 0 16 0 0-32-16 0L64 208zm0 64l0 32 320 0 0-32L64 272zm0 64l0 32 320 0 0-32L64 336zm0 64l0 48 320 0 0-48L64 400z" />
            <path d="M0 0L32 0 416 0l32 0 0 64-32 0L32 64 0 64 0 0zM0 448l32 0 384 0 32 0 0 64-32 0L32 512 0 512l0-64z" />
    </Icon>
);

export default Reel;