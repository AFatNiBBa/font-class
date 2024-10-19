
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pause` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pause?s=duotone pause}
 * @preview ![pause](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00OCA2NEMyMS41IDY0IDAgODUuNSAwIDExMkwwIDQwMGMwIDI2LjUgMjEuNSA0OCA0OCA0OGwzMiAwYzI2LjUgMCA0OC0yMS41IDQ4LTQ4bDAtMjg4YzAtMjYuNS0yMS41LTQ4LTQ4LTQ4TDQ4IDY0em0xOTIgMGMtMjYuNSAwLTQ4IDIxLjUtNDggNDhsMCAyODhjMCAyNi41IDIxLjUgNDggNDggNDhsMzIgMGMyNi41IDAgNDgtMjEuNSA0OC00OGwwLTI4OGMwLTI2LjUtMjEuNS00OC00OC00OGwtMzIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const Pause: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z" />
    </Icon>
);

export default Pause;