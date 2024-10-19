
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scarecrow` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scarecrow?s=sharp-duotone-solid scarecrow}
 * @preview ![scarecrow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggOTZjMCAxMS4yIDEuOSAyMiA1LjUgMzJjMTMuMiAzNy4zIDQ4LjcgNjQgOTAuNSA2NHM3Ny40LTI2LjcgOTAuNS02NGMzLjUtMTAgNS41LTIwLjggNS41LTMyYzAtNTMtNDMtOTYtOTYtOTZzLTk2IDQzLTk2IDk2em04MC0xNmExNiAxNiAwIDEgMSAtMzIgMCAxNiAxNiAwIDEgMSAzMiAwek0xOTIgNDAwbDAgODAgMCAzMiA2NCAwIDAtMzIgMC04MC0zMiAxNi0zMi0xNnpNMjcyIDk2YTE2IDE2IDAgMSAxIC0zMiAwIDE2IDE2IDAgMSAxIDMyIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMzMuNSAxMjhMMTYgMTI4bDE2IDMyTDAgMTkybDMyIDMyTDE2IDI1NmwxMTIgMEw5NiA0MTZsNjQtMzIgNjQgMzIgNjQtMzIgNjQgMzJMMzIwIDI1NmwxMTIgMC0xNi0zMiAzMi0zMi0zMi0zMiAxNi0zMi0xMTcuNSAwYy0xMy4yIDM3LjMtNDguNyA2NC05MC41IDY0cy03Ny40LTI2LjctOTAuNS02NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Scarecrow: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M128 96c0 11.2 1.9 22 5.5 32c13.2 37.3 48.7 64 90.5 64s77.4-26.7 90.5-64c3.5-10 5.5-20.8 5.5-32c0-53-43-96-96-96s-96 43-96 96zm80-16a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zM192 400l0 80 0 32 64 0 0-32 0-80-32 16-32-16zM272 96a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
            <path d="M133.5 128L16 128l16 32L0 192l32 32L16 256l112 0L96 416l64-32 64 32 64-32 64 32L320 256l112 0-16-32 32-32-32-32 16-32-117.5 0c-13.2 37.3-48.7 64-90.5 64s-77.4-26.7-90.5-64z" />
    </Icon>
);

export default Scarecrow;