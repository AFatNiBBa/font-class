
import { Icon, generic } from "../../index";

/**
 * A component that renders the `light-ceiling` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-ceiling?s=duotone light-ceiling}
 * @preview ![light-ceiling](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xOTIgNDQ4YzAgMzUuMyAyOC43IDY0IDY0IDY0czY0LTI4LjcgNjQtNjRsLTEyOCAwek0yMjQgMzJsMCAxNjAgMzIgMCAzMiAwIDAtMTYwYzAtMTcuNy0xNC4zLTMyLTMyLTMycy0zMiAxNC4zLTMyIDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjU2IDE5MkMxMjUuNCAxOTIgMTcuNyAyODkuOCAyIDQxNi4xQy0uMiA0MzMuNiAxNC4zIDQ0OCAzMiA0NDhINDgwYzE3LjcgMCAzMi4yLTE0LjQgMzAtMzEuOUM0OTQuMyAyODkuOCAzODYuNiAxOTIgMjU2IDE5MnoiLz48L3N2Zz4=|width=32|height=32)
 */
const LightCeiling: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 448c0 35.3 28.7 64 64 64s64-28.7 64-64l-128 0zM224 32l0 160 32 0 32 0 0-160c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
            <path d="M256 192C125.4 192 17.7 289.8 2 416.1C-.2 433.6 14.3 448 32 448H480c17.7 0 32.2-14.4 30-31.9C494.3 289.8 386.6 192 256 192z" />
    </Icon>
);

export default LightCeiling;