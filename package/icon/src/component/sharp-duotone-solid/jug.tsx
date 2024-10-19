
import { Icon, generic } from "../../index";

/**
 * A component that renders the `jug` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jug?s=sharp-duotone-solid jug}
 * @preview ![jug](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAyODhsMzg0IDAgMCAxMjhMMzIgNDE2bDAtMTI4ek0xMjggMGwzMiAwTDI4OCAwbDMyIDAgMCA2NC0xNiAwLTE2IDBMMTYwIDY0bC0xNiAwLTE2IDAgMC02NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE0NCA2NGwwIDMyTDMyIDI0MGwwIDQ4IDM4NCAwIDAtNDgtNi40LTguM0M0MzIuNCAyMTkuNyA0NDggMTk1LjYgNDQ4IDE2OGMwLTM5LjgtMzIuMi03Mi03Mi03MmMtMjEuMiAwLTQwLjMgOS4yLTUzLjUgMjMuOEwzMDQgOTZsMC0zMi0xNiAwTDE2MCA2NGwtMTYgMHpNMzIgNTEybDM4NCAwIDAtOTZMMzIgNDE2bDAgOTZ6TTM3OC42IDE5MS45bC0yNS4xLTMyLjJjMy40LTkuMSAxMi4yLTE1LjYgMjIuNS0xNS42YzEzLjMgMCAyNCAxMC43IDI0IDI0YzAgMTIuNC05LjQgMjIuNi0yMS40IDIzLjl6Ii8+PC9zdmc+|width=32|height=32)
 */
const Jug: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 288l384 0 0 128L32 416l0-128zM128 0l32 0L288 0l32 0 0 64-16 0-16 0L160 64l-16 0-16 0 0-64z" />
            <path d="M144 64l0 32L32 240l0 48 384 0 0-48-6.4-8.3C432.4 219.7 448 195.6 448 168c0-39.8-32.2-72-72-72c-21.2 0-40.3 9.2-53.5 23.8L304 96l0-32-16 0L160 64l-16 0zM32 512l384 0 0-96L32 416l0 96zM378.6 191.9l-25.1-32.2c3.4-9.1 12.2-15.6 22.5-15.6c13.3 0 24 10.7 24 24c0 12.4-9.4 22.6-21.4 23.9z" />
    </Icon>
);

export default Jug;