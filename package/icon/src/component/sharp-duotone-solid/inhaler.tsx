
import { Icon, generic } from "../../index";

/**
 * A component that renders the `inhaler` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inhaler?s=sharp-duotone-solid inhaler}
 * @preview ![inhaler](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEzMiAzMiAwIDEgMCA2NCAwQTMyIDMyIDAgMSAwIDAgMjU2em0wIDk2YTMyIDMyIDAgMSAwIDY0IDBBMzIgMzIgMCAxIDAgMCAzNTJ6bTAgOTZhMzIgMzIgMCAxIDAgNjQgMEEzMiAzMiAwIDEgMCAwIDQ0OHpNOTYgMzA0YTMyIDMyIDAgMSAwIDY0IDAgMzIgMzIgMCAxIDAgLTY0IDB6bTAgOTZhMzIgMzIgMCAxIDAgNjQgMCAzMiAzMiAwIDEgMCAtNjQgMHpNMzg1LjcgMTQ1LjdjNDQuNCA0NC40IDg4LjggODguOCAxMzMuMiAxMzMuMkw1NzYgNzIgNDE2IDMyIDM4NS43IDE0NS43eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNTM2LjYgMjk2LjZMMzY0LjIgMTI0LjIgMzM3LjMgMjI0IDE5MiAyMjRsMCAyNTYgMjk0LjYgMCA1MC0xODMuNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Inhaler: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 256a32 32 0 1 0 64 0A32 32 0 1 0 0 256zm0 96a32 32 0 1 0 64 0A32 32 0 1 0 0 352zm0 96a32 32 0 1 0 64 0A32 32 0 1 0 0 448zM96 304a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm0 96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM385.7 145.7c44.4 44.4 88.8 88.8 133.2 133.2L576 72 416 32 385.7 145.7z" />
            <path d="M536.6 296.6L364.2 124.2 337.3 224 192 224l0 256 294.6 0 50-183.4z" />
    </Icon>
);

export default Inhaler;