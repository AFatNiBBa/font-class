
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-kanban` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-kanban?s=sharp-duotone-solid chart-kanban}
 * @preview ![chart-kanban](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgMzJsMCAyNTYgMTI4IDAgMC0yNTZMMTYwIDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDQ4IDQ4MGwtMTI4IDAgMC00NDggMTI4IDAgMCA0NDh6TTEyOCA0MTZMMCA0MTYgMCAzMmwxMjggMCAwIDM4NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ChartKanban: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M160 32l0 256 128 0 0-256L160 32z" />
            <path d="M448 480l-128 0 0-448 128 0 0 448zM128 416L0 416 0 32l128 0 0 384z" />
    </Icon>
);

export default ChartKanban;