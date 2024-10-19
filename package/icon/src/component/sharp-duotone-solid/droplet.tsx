
import { Icon, generic } from "../../index";

/**
 * A component that renders the `droplet` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/droplet?s=sharp-duotone-solid droplet}
 * @preview ![droplet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyMEMwIDQyNiA4NiA1MTIgMTkyIDUxMnMxOTItODYgMTkyLTE5MlMxOTIgMCAxOTIgMFMwIDIxNCAwIDMyMHptNjQgMGwzMiAwIDAgMTZjMCA0NC4yIDM1LjggODAgODAgODBsMTYgMCAwIDMyLTE2IDBjLTYxLjkgMC0xMTItNTAuMS0xMTItMTEybDAtMTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik05NiAzMjBsMCAxNmMwIDQ0LjIgMzUuOCA4MCA4MCA4MGwxNiAwIDAgMzItMTYgMGMtNjEuOSAwLTExMi01MC4xLTExMi0xMTJsMC0xNiAzMiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Droplet: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 320C0 426 86 512 192 512s192-86 192-192S192 0 192 0S0 214 0 320zm64 0l32 0 0 16c0 44.2 35.8 80 80 80l16 0 0 32-16 0c-61.9 0-112-50.1-112-112l0-16z" />
            <path d="M96 320l0 16c0 44.2 35.8 80 80 80l16 0 0 32-16 0c-61.9 0-112-50.1-112-112l0-16 32 0z" />
    </Icon>
);

export default Droplet;