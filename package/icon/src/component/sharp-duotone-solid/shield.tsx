
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shield` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield?s=sharp-duotone-solid shield}
 * @preview ![shield](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNjcuNiA0LjVMMjU2IDAgMjQ0LjQgNC41IDM2LjkgODUgMTcuOCA5Mi41IDE2LjYgMTEzYy0yLjkgNDkuOSA0LjkgMTI2LjMgMzcuMyAyMDAuOWMzMi43IDc1LjMgOTEgMTUwIDE4OS40IDE5Mi42TDI1NiA1MTJsMTIuNy01LjVjOTguNC00Mi42IDE1Ni43LTExNy4zIDE4OS40LTE5Mi42YzMyLjQtNzQuNyA0MC4yLTE1MSAzNy4zLTIwMC45bC0xLjItMjAuNUw0NzUuMSA4NSAyNjcuNiA0LjV6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9IiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Shield: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M267.6 4.5L256 0 244.4 4.5 36.9 85 17.8 92.5 16.6 113c-2.9 49.9 4.9 126.3 37.3 200.9c32.7 75.3 91 150 189.4 192.6L256 512l12.7-5.5c98.4-42.6 156.7-117.3 189.4-192.6c32.4-74.7 40.2-151 37.3-200.9l-1.2-20.5L475.1 85 267.6 4.5z" />
    </Icon>
);

export default Shield;