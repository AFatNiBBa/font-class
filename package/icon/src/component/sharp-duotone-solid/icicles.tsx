
import { Icon, generic } from "../../index";

/**
 * A component that renders the `icicles` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/icicles?s=sharp-duotone-solid icicles}
 * @preview ![icicles](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMzYgMTYwYzEzLjMtNTMuMyAyNi43LTEwNi43IDQwLTE2MEw1MTIgMCA0MTYgNTEyIDMzNiAxNjB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik05NiAzNTJMMCAwSDM3NkwyODggMzUyIDI0MCAxOTIgMTkyIDQxNiAxNDQgMTkyIDk2IDM1MnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Icicles: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M336 160c13.3-53.3 26.7-106.7 40-160L512 0 416 512 336 160z" />
            <path d="M96 352L0 0H376L288 352 240 192 192 416 144 192 96 352z" />
    </Icon>
);

export default Icicles;