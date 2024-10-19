
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gauge-circle-plus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-circle-plus?s=sharp-duotone-solid gauge-circle-plus}
 * @preview ![gauge-circle-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NkMwIDM5Ny40IDExNC42IDUxMiAyNTYgNTEyYzM5LjUgMCA3Ny05IDExMC40LTI1QzMzNy42IDQ1NS43IDMyMCA0MTMuOSAzMjAgMzY4YzAtOTcuMiA3OC44LTE3NiAxNzYtMTc2YzIuNyAwIDUuMyAuMSA4IC4yQzQ3NS42IDgxLjcgMzc1LjQgMCAyNTYgMEMxMTQuNiAwIDAgMTE0LjYgMCAyNTZ6bTEyOCAwYTMyIDMyIDAgMSAxIC02NCAwIDMyIDMyIDAgMSAxIDY0IDB6bTQ4LTExMmEzMiAzMiAwIDEgMSAtNjQgMCAzMiAzMiAwIDEgMSA2NCAwem0xNiAyMDhjMC0yNi45IDE2LjUtNDkuOSA0MC01OS4zTDIzMiA4OGwwLTI0IDQ4IDAgMCAyNCAwIDIwNC43YzIzLjUgOS41IDQwIDMyLjUgNDAgNTkuM2MwIDM1LjMtMjguNyA2NC02NCA2NHMtNjQtMjguNy02NC02NHpNNDAwIDE0NGEzMiAzMiAwIDEgMSAtNjQgMCAzMiAzMiAwIDEgMSA2NCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzUyIDM2OGExNDQgMTQ0IDAgMSAxIDI4OCAwIDE0NCAxNDQgMCAxIDEgLTI4OCAwem0xNjAtODBsLTMyIDAgMCAxNiAwIDQ4LTQ4IDAtMTYgMCAwIDMyIDE2IDAgNDggMCAwIDQ4IDAgMTYgMzIgMCAwLTE2IDAtNDggNDggMCAxNiAwIDAtMzItMTYgMC00OCAwIDAtNDggMC0xNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const GaugeCirclePlus: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512c39.5 0 77-9 110.4-25C337.6 455.7 320 413.9 320 368c0-97.2 78.8-176 176-176c2.7 0 5.3 .1 8 .2C475.6 81.7 375.4 0 256 0C114.6 0 0 114.6 0 256zm128 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm48-112a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm16 208c0-26.9 16.5-49.9 40-59.3L232 88l0-24 48 0 0 24 0 204.7c23.5 9.5 40 32.5 40 59.3c0 35.3-28.7 64-64 64s-64-28.7-64-64zM400 144a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
            <path d="M352 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm160-80l-32 0 0 16 0 48-48 0-16 0 0 32 16 0 48 0 0 48 0 16 32 0 0-16 0-48 48 0 16 0 0-32-16 0-48 0 0-48 0-16z" />
    </Icon>
);

export default GaugeCirclePlus;