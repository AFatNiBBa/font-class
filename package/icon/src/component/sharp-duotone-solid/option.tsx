
import { Icon, generic } from "../../index";

/**
 * A component that renders the `option` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/option?s=sharp-duotone-solid option}
 * @preview ![option](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00MTYgNjRsMCA2NCAzMiAwIDE2MCAwIDMyIDAgMC02NC0zMiAwTDQ0OCA2NGwtMzIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQzMi42IDQ0OGwxNS40IDAgMTYwIDAgMzIgMCAwLTY0LTMyIDAtMTQ0LjYgMEwyMTcgNzZsLTkuNi0xMkwxOTIgNjQgMzIgNjQgMCA2NGwwIDY0IDMyIDAgMTQ0LjYgMEw0MjMgNDM2bDkuNiAxMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Option: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M416 64l0 64 32 0 160 0 32 0 0-64-32 0L448 64l-32 0z" />
            <path d="M432.6 448l15.4 0 160 0 32 0 0-64-32 0-144.6 0L217 76l-9.6-12L192 64 32 64 0 64l0 64 32 0 144.6 0L423 436l9.6 12z" />
    </Icon>
);

export default Option;