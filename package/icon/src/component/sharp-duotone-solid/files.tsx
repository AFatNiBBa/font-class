
import { Icon, generic } from "../../index";

/**
 * A component that renders the `files` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/files?s=sharp-duotone-solid files}
 * @preview ![files](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAwTDM1MiAwbDAgOTYgOTYgMCAwIDMyMEw5NiA0MTYgOTYgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM1MiAwbDAgOTYgOTYgMEwzNTIgMHpNNDggMTIwbDAtMjRMMCA5NmwwIDI0TDAgNDg4bDAgMjQgMjQgMCAzMDQgMCAyNCAwIDAtNDgtMjQgMEw0OCA0NjRsMC0zNDR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Files: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 0L352 0l0 96 96 0 0 320L96 416 96 0z" />
            <path d="M352 0l0 96 96 0L352 0zM48 120l0-24L0 96l0 24L0 488l0 24 24 0 304 0 24 0 0-48-24 0L48 464l0-344z" />
    </Icon>
);

export default Files;