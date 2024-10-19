
import { Icon, generic } from "../../index";

/**
 * A component that renders the `voicemail` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/voicemail?s=sharp-duotone-solid voicemail}
 * @preview ![voicemail](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAyNDBhNDggNDggMCAxIDAgOTYgMCA0OCA0OCAwIDEgMCAtOTYgMHptMzUyIDBhNDggNDggMCAxIDAgOTYgMCA0OCA0OCAwIDEgMCAtOTYgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE0NCAzMjBhODAgODAgMCAxIDEgMC0xNjAgODAgODAgMCAxIDEgMCAxNjB6bTExOS44IDBjMTUuMy0yMi45IDI0LjItNTAuNCAyNC4yLTgwYzAtNzkuNS02NC41LTE0NC0xNDQtMTQ0UzAgMTYwLjUgMCAyNDBzNjQuNSAxNDQgMTQ0IDE0NGwzNTIgMGM3OS41IDAgMTQ0LTY0LjUgMTQ0LTE0NHMtNjQuNS0xNDQtMTQ0LTE0NHMtMTQ0IDY0LjUtMTQ0IDE0NGMwIDI5LjYgOC45IDU3LjEgMjQuMiA4MGwtMTEyLjUgMHpNNDk2IDE2MGE4MCA4MCAwIDEgMSAwIDE2MCA4MCA4MCAwIDEgMSAwLTE2MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Voicemail: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 240a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm352 0a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
            <path d="M144 320a80 80 0 1 1 0-160 80 80 0 1 1 0 160zm119.8 0c15.3-22.9 24.2-50.4 24.2-80c0-79.5-64.5-144-144-144S0 160.5 0 240s64.5 144 144 144l352 0c79.5 0 144-64.5 144-144s-64.5-144-144-144s-144 64.5-144 144c0 29.6 8.9 57.1 24.2 80l-112.5 0zM496 160a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
    </Icon>
);

export default Voicemail;