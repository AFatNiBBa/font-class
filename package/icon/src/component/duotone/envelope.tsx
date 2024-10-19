
import { Icon, generic } from "../../index";

/**
 * A component that renders the `envelope` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope?s=duotone envelope}
 * @preview ![envelope](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDExMmMwIDE1LjEgNy4xIDI5LjMgMTkuMiAzOC40TDIzNi44IDMxMy42YzUuNyA0LjMgMTIuNCA2LjQgMTkuMiA2LjRzMTMuNS0yLjEgMTkuMi02LjRMNDkyLjggMTUwLjRjMTIuMS05LjEgMTkuMi0yMy4zIDE5LjItMzguNGwwIDI3MmMwIDM1LjMtMjguNyA2NC02NCA2NEw2NCA0NDhjLTM1LjMgMC02NC0yOC43LTY0LTY0TDAgMTEyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDggNjRDMjEuNSA2NCAwIDg1LjUgMCAxMTJjMCAxNS4xIDcuMSAyOS4zIDE5LjIgMzguNEwyMzYuOCAzMTMuNmMxMS40IDguNSAyNyA4LjUgMzguNCAwTDQ5Mi44IDE1MC40YzEyLjEtOS4xIDE5LjItMjMuMyAxOS4yLTM4LjRjMC0yNi41LTIxLjUtNDgtNDgtNDhMNDggNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Envelope: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c5.7 4.3 12.4 6.4 19.2 6.4s13.5-2.1 19.2-6.4L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4l0 272c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 112z" />
            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64z" />
    </Icon>
);

export default Envelope;