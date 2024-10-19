
import { Icon, generic } from "../../index";

/**
 * A component that renders the `images-user` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/images-user?s=sharp-duotone-solid images-user}
 * @preview ![images-user](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAzMmwwIDM1MiA0ODAgMCAwLTM1Mkw5NiAzMnpNMjMyIDMyMGwyNC02NCAxNjAgMCAyNCA2NC0yMDggMHpNNDAwIDE2MGE2NCA2NCAwIDEgMSAtMTI4IDAgNjQgNjQgMCAxIDEgMTI4IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00OCAxMjBsMC0yNEwwIDk2bDAgMjRMMCA0NTZsMCAyNCAyNCAwIDQzMiAwIDI0IDAgMC00OC0yNCAwTDQ4IDQzMmwwLTMxMnptMzUyIDQwYTY0IDY0IDAgMSAwIC0xMjggMCA2NCA2NCAwIDEgMCAxMjggMHptMTYgOTZsLTE2MCAwLTI0IDY0IDIwOCAwLTI0LTY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ImagesUser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 32l0 352 480 0 0-352L96 32zM232 320l24-64 160 0 24 64-208 0zM400 160a64 64 0 1 1 -128 0 64 64 0 1 1 128 0z" />
            <path d="M48 120l0-24L0 96l0 24L0 456l0 24 24 0 432 0 24 0 0-48-24 0L48 432l0-312zm352 40a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm16 96l-160 0-24 64 208 0-24-64z" />
    </Icon>
);

export default ImagesUser;