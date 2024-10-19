
import { Icon, generic } from "../../index";

/**
 * A component that renders the `genderless` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/genderless?s=duotone genderless}
 * @preview ![genderless](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMTIgMjU2YTgwIDgwIDAgMSAwIDE2MCAwIDgwIDgwIDAgMSAwIC0xNjAgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE5MiAxNDRhMTEyIDExMiAwIDEgMSAwIDIyNCAxMTIgMTEyIDAgMSAxIDAtMjI0em0wIDI4OGExNzYgMTc2IDAgMSAwIDAtMzUyIDE3NiAxNzYgMCAxIDAgMCAzNTJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Genderless: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M112 256a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
            <path d="M192 144a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm0 288a176 176 0 1 0 0-352 176 176 0 1 0 0 352z" />
    </Icon>
);

export default Genderless;