
import { Icon, generic } from "../../index";

/**
 * A component that renders the `interrobang` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/interrobang?s=duotone interrobang}
 * @preview ![interrobang](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNiAxNjBjMCAxNy43IDE0LjMgMzIgMzIgMzJzMzItMTQuMyAzMi0zMmMwLTM1LjMgMjguNy02NCA2NC02NGwzMiAwYzM1LjMgMCA2NCAyOC43IDY0IDY0bDAgMy42YzAgMjEuOC0xMS4xIDQyLjEtMjkuNCA1My44bC0xOC42IDEyIDAgODkuMmMwLTguMiA0LjItMTUuOCAxMS0yMC4ybDQyLjItMjcuMWMzNi42LTIzLjYgNTguOC02NC4xIDU4LjgtMTA3LjdsMC0zLjZjMC03MC43LTU3LjMtMTI4LTEyOC0xMjhsLTMyIDBDNzMuMyAzMiAxNiA4OS4zIDE2IDE2MHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE5MiAxNzZjMC0xNy43LTE0LjMtMzItMzItMzJzLTMyIDE0LjMtMzIgMzJsMCAxNDRjMCAxNy43IDE0LjMgMzIgMzIgMzJzMzItMTQuMyAzMi0zMmwwLTE0NHpNMTYwIDQ4MGE0MCA0MCAwIDEgMCAwLTgwIDQwIDQwIDAgMSAwIDAgODB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Interrobang: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M16 160c0 17.7 14.3 32 32 32s32-14.3 32-32c0-35.3 28.7-64 64-64l32 0c35.3 0 64 28.7 64 64l0 3.6c0 21.8-11.1 42.1-29.4 53.8l-18.6 12 0 89.2c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7l0-3.6c0-70.7-57.3-128-128-128l-32 0C73.3 32 16 89.3 16 160z" />
            <path d="M192 176c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144zM160 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
    </Icon>
);

export default Interrobang;