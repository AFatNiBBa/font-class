
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pinball` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pinball?s=sharp-duotone-solid pinball}
 * @preview ![pinball](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNTYgMTI4YTk2IDk2IDAgMSAwIDE5MiAwIDk2IDk2IDAgMSAwIC0xOTIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTY2LjMgMzc5LjNjLTEyLjEtMy45LTIyLjgtMTAtMzItMTcuN2MtNDAuNi0zNC4xLTQ2LTk0LjctMTEuOS0xMzUuM3M5NC42LTQ1LjkgMTM1LjItMTEuOGwyNDYgMjA4LjMtMjkuNiA1NS43TDY2LjMgMzc5LjN6TTk2IDMyMGEzMiAzMiAwIDEgMCAwLTY0IDMyIDMyIDAgMSAwIDAgNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Pinball: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M256 128a96 96 0 1 0 192 0 96 96 0 1 0 -192 0z" />
            <path d="M66.3 379.3c-12.1-3.9-22.8-10-32-17.7c-40.6-34.1-46-94.7-11.9-135.3s94.6-45.9 135.2-11.8l246 208.3-29.6 55.7L66.3 379.3zM96 320a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Pinball;