
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cross` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cross?s=sharp-duotone-solid cross}
 * @preview ![cross](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDEyOEwwIDI1Nmw5NiAwIDMyIDAgMTI4IDAgMzIgMCA5NiAwIDAtMTI4LTEyOCAwTDI1NiAwIDEyOCAwbDAgMTI4TDAgMTI4ek0xMjggMjg4bDAgMjI0IDEyOCAwIDAtMjI0LTEyOCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTI4IDI1NmgxMjh2MzJIMTI4di0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Cross: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 128L0 256l96 0 32 0 128 0 32 0 96 0 0-128-128 0L256 0 128 0l0 128L0 128zM128 288l0 224 128 0 0-224-128 0z" />
            <path d="M128 256h128v32H128v-32z" />
    </Icon>
);

export default Cross;