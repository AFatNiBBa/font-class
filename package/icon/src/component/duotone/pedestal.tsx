
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pedestal` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pedestal?s=duotone pedestal}
 * @preview ![pedestal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA2NEMzMiAyOC43IDYwLjcgMCA5NiAwTDM1MiAwYzM1LjMgMCA2NCAyOC43IDY0IDY0bDAgMzg0TDMyIDQ0OCAzMiA2NHpNOTYgODhhMjQgMjQgMCAxIDAgNDggMEEyNCAyNCAwIDEgMCA5NiA4OHptMjA4IDBhMjQgMjQgMCAxIDAgNDggMCAyNCAyNCAwIDEgMCAtNDggMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE0NCA4OEEyNCAyNCAwIDEgMCA5NiA4OGEyNCAyNCAwIDEgMCA0OCAwem0yMDggMGEyNCAyNCAwIDEgMCAtNDggMCAyNCAyNCAwIDEgMCA0OCAwek0zMiA0NDhjLTE3LjcgMC0zMiAxNC4zLTMyIDMyczE0LjMgMzIgMzIgMzJsMzg0IDBjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJMMzIgNDQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Pedestal: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 64C32 28.7 60.7 0 96 0L352 0c35.3 0 64 28.7 64 64l0 384L32 448 32 64zM96 88a24 24 0 1 0 48 0A24 24 0 1 0 96 88zm208 0a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z" />
            <path d="M144 88A24 24 0 1 0 96 88a24 24 0 1 0 48 0zm208 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 448z" />
    </Icon>
);

export default Pedestal;