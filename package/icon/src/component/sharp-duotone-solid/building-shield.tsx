
import { Icon, generic } from "../../index";

/**
 * A component that renders the `building-shield` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/building-shield?s=sharp-duotone-solid building-shield}
 * @preview ![building-shield](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMCA1MTJsMTQ0IDAgMC0xMjggOTYgMCAwIDEyOCAxMjIuMSAwYy02OC41LTQ4LjktMTAyLjktMTMxLjQtMTA1LjktMjA1LjNjLS4xLS45LS4yLTEuNy0uMi0yLjdsMC04IDAtOCAwLTMwLjIgMC0xNy44IDAtMTYgMTYgMCA0OCAwIDIzLjQgMEwzODQgMjA4LjMgMzg0IDAgMCAwek02NCA5Nmw2NCAwIDAgNjQtNjQgMCAwLTY0em0wIDEyOGw2NCAwIDAgNjQtNjQgMCAwLTY0ek0xNjAgOTZsNjQgMCAwIDY0LTY0IDAgMC02NHptMCAxMjhsNjQgMCAwIDY0LTY0IDAgMC02NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQzMiAyNzUuNWwwIDE4NC45YzU2LjUtMjYuMyA5MC4yLTg3IDk1LjMtMTQ4TDQzMiAyNzUuNXpNNTc2IDI5NmMwIDg1LjgtNDggMTg0LTE0NCAyMTZjLTk2LTMyLTE0NC0xMzAuMi0xNDQtMjE2bDAtMTYuMkw0MzIgMjI0bDE0NCA1NS44IDAgMTYuMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const BuildingShield: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 512l144 0 0-128 96 0 0 128 122.1 0c-68.5-48.9-102.9-131.4-105.9-205.3c-.1-.9-.2-1.7-.2-2.7l0-8 0-8 0-30.2 0-17.8 0-16 16 0 48 0 23.4 0L384 208.3 384 0 0 0zM64 96l64 0 0 64-64 0 0-64zm0 128l64 0 0 64-64 0 0-64zM160 96l64 0 0 64-64 0 0-64zm0 128l64 0 0 64-64 0 0-64z" />
            <path d="M432 275.5l0 184.9c56.5-26.3 90.2-87 95.3-148L432 275.5zM576 296c0 85.8-48 184-144 216c-96-32-144-130.2-144-216l0-16.2L432 224l144 55.8 0 16.2z" />
    </Icon>
);

export default BuildingShield;