
import { Icon, generic } from "../../index";

/**
 * A component that renders the `washing-machine` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/washing-machine?s=sharp-duotone-solid washing-machine}
 * @preview ![washing-machine](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik04MCAzMDRjMCA3OS41IDY0LjUgMTQ0IDE0NCAxNDRjNzcuNiAwIDE0MC45LTYxLjQgMTQzLjktMTM4LjJDMzUwIDMxNS40IDMyOC4xIDMyMCAzMDQgMzIwYy0zMiAwLTU2LTE2LTgwLTMycy00OC0zMi04MC0zMmMtMTkuNyAwLTQwLjYgNC43LTU5IDEwLjRjLTMuMiAxMi01IDI0LjYtNSAzNy42ek0xNjAgODhhMjQgMjQgMCAxIDAgNDggMCAyNCAyNCAwIDEgMCAtNDggMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQ0OCAwTDAgMCAwIDUxMmw0NDggMEw0NDggMHpNMjI0IDE2MGExNDQgMTQ0IDAgMSAxIDAgMjg4IDE0NCAxNDQgMCAxIDEgMC0yODh6TTY0IDg4YTI0IDI0IDAgMSAxIDQ4IDBBMjQgMjQgMCAxIDEgNjQgODh6TTE4NCA2NGEyNCAyNCAwIDEgMSAwIDQ4IDI0IDI0IDAgMSAxIDAtNDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const WashingMachine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M80 304c0 79.5 64.5 144 144 144c77.6 0 140.9-61.4 143.9-138.2C350 315.4 328.1 320 304 320c-32 0-56-16-80-32s-48-32-80-32c-19.7 0-40.6 4.7-59 10.4c-3.2 12-5 24.6-5 37.6zM160 88a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z" />
            <path d="M448 0L0 0 0 512l448 0L448 0zM224 160a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM64 88a24 24 0 1 1 48 0A24 24 0 1 1 64 88zM184 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default WashingMachine;