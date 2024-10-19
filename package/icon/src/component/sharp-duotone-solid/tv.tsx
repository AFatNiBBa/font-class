
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tv` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tv?s=sharp-duotone-solid tv}
 * @preview ![tv](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMNjQgMCA1NzYgMGw2NCAwIDAgNjQgMCAyODggMCA2NC02NCAwTDY0IDQxNiAwIDQxNmwwLTY0TDAgNjQgMCAwek02NCA2NGwwIDI4OCA1MTIgMCAwLTI4OEw2NCA2NHpNOTYgNDQ4bDMyIDAgMzg0IDAgMzIgMCAwIDY0LTMyIDAtMzg0IDAtMzIgMCAwLTY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNjQgNjRINTc2VjM1Mkg2NFY2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Tv: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 0L64 0 576 0l64 0 0 64 0 288 0 64-64 0L64 416 0 416l0-64L0 64 0 0zM64 64l0 288 512 0 0-288L64 64zM96 448l32 0 384 0 32 0 0 64-32 0-384 0-32 0 0-64z" />
            <path d="M64 64H576V352H64V64z" />
    </Icon>
);

export default Tv;