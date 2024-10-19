
import { Icon, generic } from "../../index";

/**
 * A component that renders the `popsicle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/popsicle?s=sharp-duotone-solid popsicle}
 * @preview ![popsicle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MEwwIDM4NGwxMjggMCAwLTIyNCA2NCAwIDAgMjI0IDEyOCAwIDAtMjI0QzMyMCA3MS42IDI0OC40IDAgMTYwIDBTMCA3MS42IDAgMTYweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTI4IDE2MGg2NFY1MTJIMTI4VjE2MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Popsicle: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 160L0 384l128 0 0-224 64 0 0 224 128 0 0-224C320 71.6 248.4 0 160 0S0 71.6 0 160z" />
            <path d="M128 160h64V512H128V160z" />
    </Icon>
);

export default Popsicle;