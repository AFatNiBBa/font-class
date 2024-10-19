
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-pie-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-pie-simple?s=sharp-duotone-solid chart-pie-simple}
 * @preview ![chart-pie-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI3MkMwIDQwNC42IDEwNy41IDUxMiAyNDAgNTEyYzEyNy4yIDAgMjMxLjItOTguOSAyMzkuNS0yMjRMMjI0IDI4OGwwLTI1NS41Qzk4LjkgNDAuOCAwIDE0NC44IDAgMjcyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjcyIDI0MEg1MTEuNGMuNC01LjMgLjYtMTAuNiAuNi0xNkM1MTIgMTAwLjMgNDExLjcgMCAyODggMGMtNS40IDAtMTAuNyAuMi0xNiAuNlYyNDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const ChartPieSimple: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 272C0 404.6 107.5 512 240 512c127.2 0 231.2-98.9 239.5-224L224 288l0-255.5C98.9 40.8 0 144.8 0 272z" />
            <path d="M272 240H511.4c.4-5.3 .6-10.6 .6-16C512 100.3 411.7 0 288 0c-5.4 0-10.7 .2-16 .6V240z" />
    </Icon>
);

export default ChartPieSimple;