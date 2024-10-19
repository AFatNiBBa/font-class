
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lock-keyhole-open` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-keyhole-open?s=sharp-duotone-solid lock-keyhole-open}
 * @preview ![lock-keyhole-open](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yODggMTQ0bDAgNDggNjQgMCAwLTQ4YzAtNDQuMiAzNS44LTgwIDgwLTgwczgwIDM1LjggODAgODBsMCA0OCAwIDMyIDY0IDAgMC0zMiAwLTQ4QzU3NiA2NC41IDUxMS41IDAgNDMyIDBTMjg4IDY0LjUgMjg4IDE0NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQ0OCAxOTJMMCAxOTIgMCA1MTJsNDQ4IDAgMC0zMjB6TTI1NiAzODRsLTY0IDAtMzIgMCAwLTY0IDMyIDAgNjQgMCAzMiAwIDAgNjQtMzIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const LockKeyholeOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M288 144l0 48 64 0 0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 0 32 64 0 0-32 0-48C576 64.5 511.5 0 432 0S288 64.5 288 144z" />
            <path d="M448 192L0 192 0 512l448 0 0-320zM256 384l-64 0-32 0 0-64 32 0 64 0 32 0 0 64-32 0z" />
    </Icon>
);

export default LockKeyholeOpen;