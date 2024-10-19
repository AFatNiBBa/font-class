
import { Icon, generic } from "../../index";

/**
 * A component that renders the `intersection` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/intersection?s=sharp-duotone-solid intersection}
 * @preview ![intersection](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCA0ODBsMC0zMiAwLTIyNGMwLTcwLjcgNTcuMy0xMjggMTI4LTEyOHMxMjggNTcuMyAxMjggMTI4bDAgMjI0IDAgMzIgNjQgMCAwLTMyIDAtMjI0YzAtMTA2LTg2LTE5Mi0xOTItMTkyUzAgMTE4IDAgMjI0TDAgNDQ4bDAgMzIgNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const Intersection: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M64 480l0-32 0-224c0-70.7 57.3-128 128-128s128 57.3 128 128l0 224 0 32 64 0 0-32 0-224c0-106-86-192-192-192S0 118 0 224L0 448l0 32 64 0z" />
    </Icon>
);

export default Intersection;