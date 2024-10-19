
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ban` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ban?s=sharp-duotone-solid ban}
 * @preview ![ban](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05OS41IDE0NC44YzEyLjUtMTcuNSAyNy44LTMyLjggNDUuMy00NS4zTDQxMi41IDM2Ny4yYy0xMi41IDE3LjUtMjcuOCAzMi44LTQ1LjMgNDUuM0w5OS41IDE0NC44eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjU2IDY0YTE5MiAxOTIgMCAxIDEgMCAzODQgMTkyIDE5MiAwIDEgMSAwLTM4NHptMCA0NDhBMjU2IDI1NiAwIDEgMCAyNTYgMGEyNTYgMjU2IDAgMSAwIDAgNTEyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Ban: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M99.5 144.8c12.5-17.5 27.8-32.8 45.3-45.3L412.5 367.2c-12.5 17.5-27.8 32.8-45.3 45.3L99.5 144.8z" />
            <path d="M256 64a192 192 0 1 1 0 384 192 192 0 1 1 0-384zm0 448A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </Icon>
);

export default Ban;