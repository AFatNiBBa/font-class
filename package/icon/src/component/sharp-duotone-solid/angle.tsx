
import { Icon, generic } from "../../index";

/**
 * A component that renders the `angle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle?s=sharp-duotone-solid angle}
 * @preview ![angle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMTUuOSAyMTYuMWMyMi41IDE3LjkgNDIuMyAzOC45IDU4LjggNjIuNWw0MC44LTI1LjNjLTIxLjEtMzAuNy00Ny4xLTU3LjgtNzYuOC04MC4ybC0yMi44IDQzem03NS43IDg5LjZjMTMuMyAyNC4yIDIzLjMgNTAuNSAyOS40IDc4LjNsNDkgMGMtNy0zNy0xOS44LTcxLjktMzcuNi0xMDMuN2wtNDAuOCAyNS4zeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDQ4IDQ4MEwwIDQ4MGwwLTYxLjFMMTk1LjcgNDlsMTUtMjguMyA1Ni42IDI5LjlMMjUyLjMgNzkgNzMuOSA0MTYgNDE2IDQxNmwzMiAwIDAgNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Angle: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M215.9 216.1c22.5 17.9 42.3 38.9 58.8 62.5l40.8-25.3c-21.1-30.7-47.1-57.8-76.8-80.2l-22.8 43zm75.7 89.6c13.3 24.2 23.3 50.5 29.4 78.3l49 0c-7-37-19.8-71.9-37.6-103.7l-40.8 25.3z" />
            <path d="M448 480L0 480l0-61.1L195.7 49l15-28.3 56.6 29.9L252.3 79 73.9 416 416 416l32 0 0 64z" />
    </Icon>
);

export default Angle;