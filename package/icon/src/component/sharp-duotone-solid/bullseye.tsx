
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bullseye` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bullseye?s=sharp-duotone-solid bullseye}
 * @preview ![bullseye](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMTIgMjU2YTE0NCAxNDQgMCAxIDAgMjg4IDAgMTQ0IDE0NCAwIDEgMCAtMjg4IDB6bTIyNCAwYTgwIDgwIDAgMSAxIC0xNjAgMCA4MCA4MCAwIDEgMSAxNjAgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQ0OCAyNTZBMTkyIDE5MiAwIDEgMCA2NCAyNTZhMTkyIDE5MiAwIDEgMCAzODQgMHpNMCAyNTZhMjU2IDI1NiAwIDEgMSA1MTIgMEEyNTYgMjU2IDAgMSAxIDAgMjU2em0yNTYtMzJhMzIgMzIgMCAxIDEgMCA2NCAzMiAzMiAwIDEgMSAwLTY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Bullseye: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M112 256a144 144 0 1 0 288 0 144 144 0 1 0 -288 0zm224 0a80 80 0 1 1 -160 0 80 80 0 1 1 160 0z" />
            <path d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Bullseye;