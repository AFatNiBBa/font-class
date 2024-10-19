
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gavel` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gavel?s=sharp-duotone-solid gavel}
 * @preview ![gavel](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQzMmw4MCA4MEwyMzIgMzYwbC0xNy40LTE3LjQgODgtODhjLTE1LjEtMTUuMS0zMC4yLTMwLjItNDUuMy00NS4zbC04OCA4OEwxNTIgMjgwIDAgNDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzQ0IDU2TDMyMCA4MCA0MzIgMTkybDI0LTI0IDU2IDU2TDM2OCAzNjhsLTU2LTU2IDI0LTI0TDIyNCAxNzZsLTI0IDI0LTU2LTU2TDI4OCAwbDU2IDU2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Gavel: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 432l80 80L232 360l-17.4-17.4 88-88c-15.1-15.1-30.2-30.2-45.3-45.3l-88 88L152 280 0 432z" />
            <path d="M344 56L320 80 432 192l24-24 56 56L368 368l-56-56 24-24L224 176l-24 24-56-56L288 0l56 56z" />
    </Icon>
);

export default Gavel;