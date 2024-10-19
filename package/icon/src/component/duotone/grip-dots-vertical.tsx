
import { Icon, generic } from "../../index";

/**
 * A component that renders the `grip-dots-vertical` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grip-dots-vertical?s=duotone grip-dots-vertical}
 * @preview ![grip-dots-vertical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgOTZhNDggNDggMCAxIDAgOTYgMCA0OCA0OCAwIDEgMCAtOTYgMHptMCAxNjBhNDggNDggMCAxIDAgOTYgMCA0OCA0OCAwIDEgMCAtOTYgMHptMCAxNjBhNDggNDggMCAxIDAgOTYgMCA0OCA0OCAwIDEgMCAtOTYgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgOTZhNDggNDggMCAxIDEgOTYgMEE0OCA0OCAwIDEgMSAwIDk2ek0wIDI1NmE0OCA0OCAwIDEgMSA5NiAwQTQ4IDQ4IDAgMSAxIDAgMjU2ek00OCAzNjhhNDggNDggMCAxIDEgMCA5NiA0OCA0OCAwIDEgMSAwLTk2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const GripDotsVertical: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path class={generic.secondary} d="M160 96a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm0 160a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm0 160a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
            <path d="M0 96a48 48 0 1 1 96 0A48 48 0 1 1 0 96zM0 256a48 48 0 1 1 96 0A48 48 0 1 1 0 256zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default GripDotsVertical;