
import { Icon, generic } from "../../index";

/**
 * A component that renders the `backpack` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backpack?s=sharp-duotone-solid backpack}
 * @preview ![backpack](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAzODRsMCAxNiAwIDExMiAyNTYgMCAwLTExMiAwLTE2TDk2IDM4NHpNMTM2IDBsMCAyNCAwIDcyIDQ4IDAgMC00OCA4MCAwIDAgNDggNDggMCAwLTcyIDAtMjRMMjg4IDAgMTYwIDAgMTM2IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDIyNEMwIDE1My4zIDU3LjMgOTYgMTI4IDk2bDE5MiAwYzcwLjcgMCAxMjggNTcuMyAxMjggMTI4bDAgMjg4LTk2IDAgMC0xMTIgMC0xMTJMOTYgMjg4bDAgMTEyIDAgMTEyTDAgNTEyIDAgMjI0em0xNDQtNDhsLTE2IDAgMCAzMiAxNiAwIDE2MCAwIDE2IDAgMC0zMi0xNiAwLTE2MCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Backpack: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 384l0 16 0 112 256 0 0-112 0-16L96 384zM136 0l0 24 0 72 48 0 0-48 80 0 0 48 48 0 0-72 0-24L288 0 160 0 136 0z" />
            <path d="M0 224C0 153.3 57.3 96 128 96l192 0c70.7 0 128 57.3 128 128l0 288-96 0 0-112 0-112L96 288l0 112 0 112L0 512 0 224zm144-48l-16 0 0 32 16 0 160 0 16 0 0-32-16 0-160 0z" />
    </Icon>
);

export default Backpack;