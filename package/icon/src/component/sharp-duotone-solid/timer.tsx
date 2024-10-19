
import { Icon, generic } from "../../index";

/**
 * A component that renders the `timer` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/timer?s=sharp-duotone-solid timer}
 * @preview ![timer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NkMwIDM5Ny40IDExNC42IDUxMiAyNTYgNTEyczI1Ni0xMTQuNiAyNTYtMjU2UzM5Ny40IDAgMjU2IDBMMjI0IDBsMCAzMiAwIDY0IDAgMzIgNjQgMCAwLTMyIDAtMjkuM0MzNzguOCA4MS45IDQ0OCAxNjAuOSA0NDggMjU2YzAgMTA2LTg2IDE5Mi0xOTIgMTkyUzY0IDM2MiA2NCAyNTZjMC01My43IDIyLTEwMi4zIDU3LjYtMTM3LjFMNzYuOCA3My4xQzI5LjUgMTE5LjYgMCAxODQuNCAwIDI1NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE3NiAxNDIuMWwxNyAxNyA4MCA4MCAxNyAxN0wyNTYgMjg5LjlsLTE3LTE3LTgwLTgwLTE3LTE3TDE3NiAxNDIuMXoiLz48L3N2Zz4=|width=32|height=32)
 */
const Timer: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0L224 0l0 32 0 64 0 32 64 0 0-32 0-29.3C378.8 81.9 448 160.9 448 256c0 106-86 192-192 192S64 362 64 256c0-53.7 22-102.3 57.6-137.1L76.8 73.1C29.5 119.6 0 184.4 0 256z" />
            <path d="M176 142.1l17 17 80 80 17 17L256 289.9l-17-17-80-80-17-17L176 142.1z" />
    </Icon>
);

export default Timer;