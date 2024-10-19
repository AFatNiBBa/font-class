
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shirt` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shirt?s=sharp-duotone-solid shirt}
 * @preview ![shirt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE0NEw4OCAyNTZsNzItNTguOUwxNjAgNTEybDMyMCAwIDAtMzE0LjlMNTUyIDI1Nmw4OC0xMTJMNDY0IDAgNDMyIDBjMCA2MS45LTUwLjEgMTEyLTExMiAxMTJTMjA4IDYxLjkgMjA4IDBMMTc2IDAgMCAxNDR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yMDggMGMwIDYxLjkgNTAuMSAxMTIgMTEyIDExMnMxMTItNTAuMSAxMTItMTEyTDQwMCAwYzAgNDQuMi0zNS44IDgwLTgwIDgwcy04MC0zNS44LTgwLTgwTDIwOCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Shirt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 144L88 256l72-58.9L160 512l320 0 0-314.9L552 256l88-112L464 0 432 0c0 61.9-50.1 112-112 112S208 61.9 208 0L176 0 0 144z" />
            <path d="M208 0c0 61.9 50.1 112 112 112s112-50.1 112-112L400 0c0 44.2-35.8 80-80 80s-80-35.8-80-80L208 0z" />
    </Icon>
);

export default Shirt;