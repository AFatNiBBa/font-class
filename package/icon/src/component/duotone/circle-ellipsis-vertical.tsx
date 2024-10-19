
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-ellipsis-vertical` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-ellipsis-vertical?s=duotone circle-ellipsis-vertical}
 * @preview ![circle-ellipsis-vertical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTI4OC05NmEzMiAzMiAwIDEgMSAtNjQgMCAzMiAzMiAwIDEgMSA2NCAwem0wIDk2YTMyIDMyIDAgMSAxIC02NCAwIDMyIDMyIDAgMSAxIDY0IDB6bTAgOTZhMzIgMzIgMCAxIDEgLTY0IDAgMzIgMzIgMCAxIDEgNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiAzODRhMzIgMzIgMCAxIDEgMC02NCAzMiAzMiAwIDEgMSAwIDY0em0wLTk2YTMyIDMyIDAgMSAxIDAtNjQgMzIgMzIgMCAxIDEgMCA2NHpNMjI0IDE2MGEzMiAzMiAwIDEgMSA2NCAwIDMyIDMyIDAgMSAxIC02NCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleEllipsisVertical: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm288-96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm0 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm0 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
            <path d="M256 384a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm0-96a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM224 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default CircleEllipsisVertical;