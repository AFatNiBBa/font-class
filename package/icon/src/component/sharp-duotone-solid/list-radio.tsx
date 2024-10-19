
import { Icon, generic } from "../../index";

/**
 * A component that renders the `list-radio` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-radio?s=sharp-duotone-solid list-radio}
 * @preview ![list-radio](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgNjRsMzIgMCAyODggMCAzMiAwIDAgNjQtMzIgMC0yODggMC0zMiAwIDAtNjR6bTAgMTYwbDMyIDAgMjg4IDAgMzIgMCAwIDY0LTMyIDAtMjg4IDAtMzIgMCAwLTY0em0wIDE2MGwzMiAwIDI4OCAwIDMyIDAgMCA2NC0zMiAwLTI4OCAwLTMyIDAgMC02NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTY0IDE2MEE2NCA2NCAwIDEgMCA2NCAzMmE2NCA2NCAwIDEgMCAwIDEyOHptMCA3MmEyNCAyNCAwIDEgMSAwIDQ4IDI0IDI0IDAgMSAxIDAtNDh6bTAgODhhNjQgNjQgMCAxIDAgMC0xMjggNjQgNjQgMCAxIDAgMCAxMjh6bTAgNzJhMjQgMjQgMCAxIDEgMCA0OCAyNCAyNCAwIDEgMSAwLTQ4em0wIDg4YTY0IDY0IDAgMSAwIDAtMTI4IDY0IDY0IDAgMSAwIDAgMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ListRadio: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 64l32 0 288 0 32 0 0 64-32 0-288 0-32 0 0-64zm0 160l32 0 288 0 32 0 0 64-32 0-288 0-32 0 0-64zm0 160l32 0 288 0 32 0 0 64-32 0-288 0-32 0 0-64z" />
            <path d="M64 160A64 64 0 1 0 64 32a64 64 0 1 0 0 128zm0 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 88a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm0 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 88a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default ListRadio;