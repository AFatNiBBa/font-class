
import { Icon, generic } from "../../index";

/**
 * A component that renders the `starfighter` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/starfighter?s=sharp-duotone-solid starfighter}
 * @preview ![starfighter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDEyMGwwIDQ4IDI0IDAgMCAyODAgMCAyNCA0OCAwIDAtMjQgMC00IDAtOTIgMC0xODQgMjQgMCAwLTQ4LTI0IDAgMC0yNCAwLTI0TDI0IDcybDAgMjQgMCAyNEwwIDEyMHpNMTI4IDI4OGwwIDY0IDAgODAgOTYgMCAwLTgwIDAtNjQtOTYgMHptMTYwLTMybDAgNjQgNjQgMCAwLTY0YzAtMTcuNy0xNC4zLTMyLTMyLTMycy0zMiAxNC4zLTMyIDMyem0xMjggMzJsMCA2NCAwIDgwIDk2IDAgMC04MCAwLTY0LTk2IDB6TTU0NCAxMjBsMCA0OCAyNCAwIDAgMTg0IDAgOTIgMCA0IDAgMjQgNDggMCAwLTI0IDAtMjgwIDI0IDAgMC00OC0yNCAwIDAtMjQgMC0yNC00OCAwIDAgMjQgMCAyNC0yNCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzUyIDBMMjg4IDAgMjU2IDI1NmwwIDk2LTMyIDAgMCA4MC05NiAwIDAtODAtNTYgMCAwIDkyIDg4IDI2LjQgMCA5LjYgMCAzMiA2NCAwIDAtMzIgMzIgMCAxMjggMCAzMiAwIDAgMzIgNjQgMCAwLTMyIDAtOS42TDU2OCA0NDRsMC05Mi01NiAwIDAgODAtOTYgMCAwLTgwLTMyIDAgMC05NkwzNTIgMHpNMjg4IDI1NmMwLTE3LjcgMTQuMy0zMiAzMi0zMnMzMiAxNC4zIDMyIDMybDAgNjQtNjQgMCAwLTY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Starfighter: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 120l0 48 24 0 0 280 0 24 48 0 0-24 0-4 0-92 0-184 24 0 0-48-24 0 0-24 0-24L24 72l0 24 0 24L0 120zM128 288l0 64 0 80 96 0 0-80 0-64-96 0zm160-32l0 64 64 0 0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32zm128 32l0 64 0 80 96 0 0-80 0-64-96 0zM544 120l0 48 24 0 0 184 0 92 0 4 0 24 48 0 0-24 0-280 24 0 0-48-24 0 0-24 0-24-48 0 0 24 0 24-24 0z" />
            <path d="M352 0L288 0 256 256l0 96-32 0 0 80-96 0 0-80-56 0 0 92 88 26.4 0 9.6 0 32 64 0 0-32 32 0 128 0 32 0 0 32 64 0 0-32 0-9.6L568 444l0-92-56 0 0 80-96 0 0-80-32 0 0-96L352 0zM288 256c0-17.7 14.3-32 32-32s32 14.3 32 32l0 64-64 0 0-64z" />
    </Icon>
);

export default Starfighter;