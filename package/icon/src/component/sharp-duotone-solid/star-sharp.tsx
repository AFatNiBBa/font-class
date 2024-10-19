
import { Icon, generic } from "../../index";

/**
 * A component that renders the `star-sharp` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-sharp?s=sharp-duotone-solid star-sharp}
 * @preview ![star-sharp](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yODguMSAwbDYzLjUgMTk1LjZINTU3LjJMMzkwLjkgMzE2LjQgNDU0LjQgNTEyIDI4OC4xIDM5MS4xIDEyMS43IDUxMmw2My41LTE5NS42TDE4LjkgMTk1LjZIMjI0LjVMMjg4LjEgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const StarSharp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M288.1 0l63.5 195.6H557.2L390.9 316.4 454.4 512 288.1 391.1 121.7 512l63.5-195.6L18.9 195.6H224.5L288.1 0z" />
    </Icon>
);

export default StarSharp;