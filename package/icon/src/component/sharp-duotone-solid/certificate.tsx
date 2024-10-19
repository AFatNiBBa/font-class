
import { Icon, generic } from "../../index";

/**
 * A component that renders the `certificate` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/certificate?s=sharp-duotone-solid certificate}
 * @preview ![certificate](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xODcuNCAwTDI1NiA1Ny4yIDMyNC42IDBsMzAuOCA4My45IDg4LTE1LjMtMTUuMyA4OEw1MTIgMTg3LjQgNDU0LjggMjU2IDUxMiAzMjQuNmwtODMuOSAzMC44IDE1LjMgODgtODgtMTUuM0wzMjQuNiA1MTIgMjU2IDQ1NC44IDE4Ny40IDUxMmwtMzAuOC04My45LTg4IDE1LjMgMTUuMy04OEwwIDMyNC42IDU3LjIgMjU2IDAgMTg3LjRsODMuOS0zMC44LTE1LjMtODggODggMTUuM0wxODcuNCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSIiLz48L3N2Zz4=|width=32|height=32)
 */
const Certificate: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M187.4 0L256 57.2 324.6 0l30.8 83.9 88-15.3-15.3 88L512 187.4 454.8 256 512 324.6l-83.9 30.8 15.3 88-88-15.3L324.6 512 256 454.8 187.4 512l-30.8-83.9-88 15.3 15.3-88L0 324.6 57.2 256 0 187.4l83.9-30.8-15.3-88 88 15.3L187.4 0z" />
    </Icon>
);

export default Certificate;