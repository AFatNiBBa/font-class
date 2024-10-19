
import { Icon, generic } from "../../index";

/**
 * A component that renders the `podium` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/podium?s=sharp-duotone-solid podium}
 * @preview ![podium](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00NC40IDE5Mkw4MCA1MTJsMjg4IDAgMzUuNi0zMjBMNDQuNCAxOTJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yODggMEwxNzYgMGwwIDI0LTggMGMtNDguNiAwLTg4IDM5LjQtODggODhsMCAzMi01NiAwTDAgMTQ0bDAgNDggMjQgMCA0MDAgMCAyNCAwIDAtNDgtMjQgMC0yOTYgMCAwLTMyYzAtMjIuMSAxNy45LTQwIDQwLTQwbDggMCAwIDI0IDExMiAwYzI2LjUgMCA0OC0yMS41IDQ4LTQ4cy0yMS41LTQ4LTQ4LTQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Podium: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M44.4 192L80 512l288 0 35.6-320L44.4 192z" />
            <path d="M288 0L176 0l0 24-8 0c-48.6 0-88 39.4-88 88l0 32-56 0L0 144l0 48 24 0 400 0 24 0 0-48-24 0-296 0 0-32c0-22.1 17.9-40 40-40l8 0 0 24 112 0c26.5 0 48-21.5 48-48s-21.5-48-48-48z" />
    </Icon>
);

export default Podium;