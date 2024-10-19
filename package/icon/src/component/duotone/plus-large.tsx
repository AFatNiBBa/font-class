
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plus-large` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plus-large?s=duotone plus-large}
 * @preview ![plus-large](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yODggMzJjMC0xNy43LTE0LjMtMzItMzItMzJzLTMyIDE0LjMtMzIgMzJsMCAxOTJMMzIgMjI0Yy0xNy43IDAtMzIgMTQuMy0zMiAzMnMxNC4zIDMyIDMyIDMybDE5MiAwIDAgMTkyYzAgMTcuNyAxNC4zIDMyIDMyIDMyczMyLTE0LjMgMzItMzJsMC0xOTIgMTkyIDBjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJsLTE5MiAwIDAtMTkyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSIiLz48L3N2Zz4=|width=32|height=32)
 */
const PlusLarge: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 192L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0 0 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-192 192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-192 0 0-192z" />
    </Icon>
);

export default PlusLarge;