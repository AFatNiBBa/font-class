
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tv` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tv?s=duotone tv}
 * @preview ![tv](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0QzAgMjguNyAyOC43IDAgNjQgMEw1NzYgMGMzNS4zIDAgNjQgMjguNyA2NCA2NGwwIDI4OGMwIDM1LjMtMjguNyA2NC02NCA2NEw2NCA0MTZjLTM1LjMgMC02NC0yOC43LTY0LTY0TDAgNjR6bTY0IDBsMCAyODggNTEyIDAgMC0yODhMNjQgNjR6TTk2IDQ4MGMwLTE3LjcgMTQuMy0zMiAzMi0zMmwzODQgMGMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMmwtMzg0IDBjLTE3LjcgMC0zMi0xNC4zLTMyLTMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNjQgNjRINTc2VjM1Mkg2NFY2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Tv: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L576 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 416c-35.3 0-64-28.7-64-64L0 64zm64 0l0 288 512 0 0-288L64 64zM96 480c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-384 0c-17.7 0-32-14.3-32-32z" />
            <path d="M64 64H576V352H64V64z" />
    </Icon>
);

export default Tv;