
import { Icon, generic } from "../../index";

/**
 * A component that renders the `road-spikes` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/road-spikes?s=sharp-duotone-solid road-spikes}
 * @preview ![road-spikes](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA5NmwwIDI4OCAxMjggMCA5NiAwIDMyIDAgOTYgMCAzMiAwIDk2IDAgOTYgMCAzMiAwTDQ0OCA5NmwtMzIgMCAwIDE0NEwzMjAgOTZsLTMyIDAgMCAxNDRMMTkyIDk2bC0zMiAwIDAgMTQ0TDY0IDk2IDMyIDk2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAzODRsMzIgMCA1NzYgMCAzMiAwIDAgNjQtMzIgMEwzMiA0NDggMCA0NDhsMC02NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const RoadSpikes: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 96l0 288 128 0 96 0 32 0 96 0 32 0 96 0 96 0 32 0L448 96l-32 0 0 144L320 96l-32 0 0 144L192 96l-32 0 0 144L64 96 32 96z" />
            <path d="M0 384l32 0 576 0 32 0 0 64-32 0L32 448 0 448l0-64z" />
    </Icon>
);

export default RoadSpikes;