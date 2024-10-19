
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sack-xmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sack-xmark?s=sharp-duotone-solid sack-xmark}
 * @preview ![sack-xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQxNmwwIDk2IDUxMiAwIDAtOTZjMC0xNjUuMS0xMjIuMy0yNDMuMy0xNzktMjc5LjZjLTQuOC0zLjEtOS4yLTUuOS0xMy04LjRsLTEyOCAwYy0zLjggMi41LTguMSA1LjMtMTMgOC40QzEyMi4zIDE3Mi43IDAgMjUwLjkgMCA0MTZ6TTEyOCAwYzIxLjMgMzIgNDIuNyA2NCA2NCA5NmwxMjggMEwzODQgMCAxMjggMHptMzAuMSAyNTZMMTkyIDIyMi4xYzUuNyA1LjcgMTEuMyAxMS4zIDE3IDE3bDQ3IDQ3IDQ3LTQ3YzUuNy01LjcgMTEuMy0xMS4zIDE3LTE3TDM1My45IDI1NmwtMTcgMTctNDcgNDcgNDcgNDcgMTcgMTdMMzIwIDQxNy45Yy01LjctNS43LTExLjMtMTEuMy0xNy0xN2MtMTUuNy0xNS43LTMxLjQtMzEuNC00Ny00N2MtMTUuNyAxNS43LTMxLjQgMzEuNC00NyA0N2MtNS43IDUuNy0xMS4zIDExLjMtMTcgMTdjLTExLjMtMTEuMy0yMi42LTIyLjYtMzMuOS0zMy45bDE3LTE3YzE1LjctMTUuNyAzMS40LTMxLjQgNDctNDdjLTE1LjctMTUuNy0zMS40LTMxLjQtNDctNDdjLTUuNy01LjctMTEuMy0xMS4zLTE3LTE3eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTkyIDk2bDEyOCAwIDE2IDAgMCAzMi0xNiAwLTEyOCAwLTE2IDAgMC0zMiAxNiAwek0xNTguMSAzODRsMTctMTcgNDctNDctNDctNDctMTctMTdMMTkyIDIyMi4xbDE3IDE3IDQ3IDQ3IDQ3LTQ3IDE3LTE3TDM1My45IDI1NmwtMTcgMTctNDcgNDcgNDcgNDcgMTcgMTdMMzIwIDQxNy45bC0xNy0xNy00Ny00Ny00NyA0Ny0xNyAxN0wxNTguMSAzODR6Ii8+PC9zdmc+|width=32|height=32)
 */
const SackXmark: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 416l0 96 512 0 0-96c0-165.1-122.3-243.3-179-279.6c-4.8-3.1-9.2-5.9-13-8.4l-128 0c-3.8 2.5-8.1 5.3-13 8.4C122.3 172.7 0 250.9 0 416zM128 0c21.3 32 42.7 64 64 96l128 0L384 0 128 0zm30.1 256L192 222.1c5.7 5.7 11.3 11.3 17 17l47 47 47-47c5.7-5.7 11.3-11.3 17-17L353.9 256l-17 17-47 47 47 47 17 17L320 417.9c-5.7-5.7-11.3-11.3-17-17c-15.7-15.7-31.4-31.4-47-47c-15.7 15.7-31.4 31.4-47 47c-5.7 5.7-11.3 11.3-17 17c-11.3-11.3-22.6-22.6-33.9-33.9l17-17c15.7-15.7 31.4-31.4 47-47c-15.7-15.7-31.4-31.4-47-47c-5.7-5.7-11.3-11.3-17-17z" />
            <path d="M192 96l128 0 16 0 0 32-16 0-128 0-16 0 0-32 16 0zM158.1 384l17-17 47-47-47-47-17-17L192 222.1l17 17 47 47 47-47 17-17L353.9 256l-17 17-47 47 47 47 17 17L320 417.9l-17-17-47-47-47 47-17 17L158.1 384z" />
    </Icon>
);

export default SackXmark;