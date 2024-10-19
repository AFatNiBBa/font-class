
import { Icon, generic } from "../../index";

/**
 * A component that renders the `highlighter-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/highlighter-line?s=sharp-duotone-solid highlighter-line}
 * @preview ![highlighter-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00OCA0MDBjNC4yIDQuMiA4LjUgOC41IDEyLjcgMTIuN2w3MC42IDcwLjZjNC4yIDQuMiA4LjUgOC41IDEyLjcgMTIuN2w4MC04MCA5NiAwIDQwLjEtNTUuOUwxODMuOSAxODMuOSAxMjggMjI0bDAgOTZjLTI2LjcgMjYuNy01My4zIDUzLjMtODAgODB6bTE3NiA2NGwwIDQ4IDI0IDAgMzA0IDAgMjQgMCAwLTQ4LTI0IDAtMzA0IDAtMjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTU0NCAxMDRMMzYwLjEgMzYwLjEgMTgzLjkgMTgzLjkgNDQwIDAgNTQ0IDEwNHpNNC43IDQ2OC43bDU2LTU2IDcwLjYgNzAuNi0yNCAyNC00LjcgNC43TDk2IDUxMmwtODAgMEwwIDUxMmwwLTE2IDAtMTYgMC02LjYgNC43LTQuN3oiLz48L3N2Zz4=|width=32|height=32)
 */
const HighlighterLine: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M48 400c4.2 4.2 8.5 8.5 12.7 12.7l70.6 70.6c4.2 4.2 8.5 8.5 12.7 12.7l80-80 96 0 40.1-55.9L183.9 183.9 128 224l0 96c-26.7 26.7-53.3 53.3-80 80zm176 64l0 48 24 0 304 0 24 0 0-48-24 0-304 0-24 0z" />
            <path d="M544 104L360.1 360.1 183.9 183.9 440 0 544 104zM4.7 468.7l56-56 70.6 70.6-24 24-4.7 4.7L96 512l-80 0L0 512l0-16 0-16 0-6.6 4.7-4.7z" />
    </Icon>
);

export default HighlighterLine;