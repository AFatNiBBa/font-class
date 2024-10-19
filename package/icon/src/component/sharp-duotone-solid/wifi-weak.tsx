
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wifi-weak` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wifi-weak?s=sharp-duotone-solid wifi-weak}
 * @preview ![wifi-weak](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05LjggMTU2LjdsNDQuMyA0Ni4yQzEyMy4yIDEzNi43IDIxNi44IDk2IDMyMCA5NnMxOTYuOCA0MC43IDI2NS44IDEwNi45bDQ0LjMtNDYuMkM1NDkuNyA3OS41IDQ0MC40IDMyIDMyMCAzMlM5MC4zIDc5LjUgOS44IDE1Ni43ek0xMjkuNSAyNjRsNDIuNCA0OGMzOS41LTM0LjkgOTEuMy01NiAxNDguMi01NnMxMDguNiAyMS4xIDE0OC4yIDU2bDQyLjQtNDhDNDU5LjggMjE5LjIgMzkzIDE5MiAzMjAgMTkycy0xMzkuOCAyNy4yLTE5MC41IDcyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjU2IDQxNmE2NCA2NCAwIDEgMSAxMjggMCA2NCA2NCAwIDEgMSAtMTI4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const WifiWeak: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M9.8 156.7l44.3 46.2C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9l44.3-46.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7zM129.5 264l42.4 48c39.5-34.9 91.3-56 148.2-56s108.6 21.1 148.2 56l42.4-48C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72z" />
            <path d="M256 416a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default WifiWeak;