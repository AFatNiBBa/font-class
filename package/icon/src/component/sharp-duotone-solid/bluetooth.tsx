
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bluetooth` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bluetooth?s=sharp-duotone-solid bluetooth}
 * @preview ![bluetooth](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgMGw1MS4yIDM4LjQgMTI4IDk2TDM3My4zIDE2MGwtMzQuMSAyNS42TDI0NS4zIDI1Nmw5My45IDcwLjRMMzczLjMgMzUybC0zNC4xIDI1LjYtMTI4IDk2TDE2MCA1MTJsMC02NCAwLTEyOEw4My4yIDM3Ny42IDU3LjYgMzk2LjggMTkuMiAzNDUuNmwyNS42LTE5LjJMMTM4LjcgMjU2IDQ0LjggMTg1LjYgMTkuMiAxNjYuNGwzOC40LTUxLjIgMjUuNiAxOS4yTDE2MCAxOTJsMC0xMjggMC02NHptNjQgMzIwbDAgNjQgNDIuNy0zMkwyMjQgMzIwem0wLTEyOGw0Mi43LTMyTDIyNCAxMjhsMCA2NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const Bluetooth: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M160 0l51.2 38.4 128 96L373.3 160l-34.1 25.6L245.3 256l93.9 70.4L373.3 352l-34.1 25.6-128 96L160 512l0-64 0-128L83.2 377.6 57.6 396.8 19.2 345.6l25.6-19.2L138.7 256 44.8 185.6 19.2 166.4l38.4-51.2 25.6 19.2L160 192l0-128 0-64zm64 320l0 64 42.7-32L224 320zm0-128l42.7-32L224 128l0 64z" />
    </Icon>
);

export default Bluetooth;