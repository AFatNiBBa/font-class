
import { Icon, generic } from "../../index";

/**
 * A component that renders the `light-emergency` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-emergency?s=sharp-duotone-solid light-emergency}
 * @preview ![light-emergency](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAxOTJsMCAxNjAgMzIwIDAgMC0xNjBjMC04OC40LTcxLjYtMTYwLTE2MC0xNjBTNjQgMTAzLjYgNjQgMTkyem00OCAwYzAtNjEuOSA1MC4xLTExMiAxMTItMTEybDAgMzJjLTQ0LjIgMC04MCAzNS44LTgwIDgwbC0zMiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDQ4IDM1MkwwIDM1MiAwIDQ4MGw0NDggMCAwLTEyOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const LightEmergency: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 192l0 160 320 0 0-160c0-88.4-71.6-160-160-160S64 103.6 64 192zm48 0c0-61.9 50.1-112 112-112l0 32c-44.2 0-80 35.8-80 80l-32 0z" />
            <path d="M448 352L0 352 0 480l448 0 0-128z" />
    </Icon>
);

export default LightEmergency;