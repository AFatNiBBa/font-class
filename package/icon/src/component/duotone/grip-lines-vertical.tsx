
import { Icon, generic } from "../../index";

/**
 * A component that renders the `grip-lines-vertical` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grip-lines-vertical?s=duotone grip-lines-vertical}
 * @preview ![grip-lines-vertical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggNjRjMC0xNy43IDE0LjMtMzIgMzItMzJzMzIgMTQuMyAzMiAzMmwwIDM4NGMwIDE3LjctMTQuMyAzMi0zMiAzMnMtMzItMTQuMy0zMi0zMmwwLTM4NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgNjRDMCA0Ni4zIDE0LjMgMzIgMzIgMzJzMzIgMTQuMyAzMiAzMlY0NDhjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzJWNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const GripLinesVertical: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path class={generic.secondary} d="M128 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-384z" />
            <path d="M0 64C0 46.3 14.3 32 32 32s32 14.3 32 32V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V64z" />
    </Icon>
);

export default GripLinesVertical;