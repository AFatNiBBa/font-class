
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-pie-simple` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-pie-simple?s=duotone chart-pie-simple}
 * @preview ![chart-pie-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI3MkMwIDQwNC42IDEwNy41IDUxMiAyNDAgNTEyYzEyMS40IDAgMjIxLjctOTAuMSAyMzcuNy0yMDdjLjEtLjcgLjEtMS40IC4xLTJjMC04LjMtNi45LTE1LTE1LjUtMTVMMjI0IDI4OGwwLTIzOC40YzAtOC42LTYuNy0xNS41LTE1LTE1LjVjLS43IDAtMS40IDAtMiAuMUM5MC4xIDUwLjMgMCAxNTAuNyAwIDI3MnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI3MiAyNDBINDk1LjRjOSAwIDE2LjYtNyAxNi42LTE2QzUxMiAxMDAuMyA0MTEuNyAwIDI4OCAwYy05IDAtMTYgNy42LTE2IDE2LjZWMjQweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ChartPieSimple: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 272C0 404.6 107.5 512 240 512c121.4 0 221.7-90.1 237.7-207c.1-.7 .1-1.4 .1-2c0-8.3-6.9-15-15.5-15L224 288l0-238.4c0-8.6-6.7-15.5-15-15.5c-.7 0-1.4 0-2 .1C90.1 50.3 0 150.7 0 272z" />
            <path d="M272 240H495.4c9 0 16.6-7 16.6-16C512 100.3 411.7 0 288 0c-9 0-16 7.6-16 16.6V240z" />
    </Icon>
);

export default ChartPieSimple;