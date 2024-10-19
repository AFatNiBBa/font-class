
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-clock-flip` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-clock-flip?s=sharp-duotone-solid chess-clock-flip}
 * @preview ![chess-clock-flip](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiA5NmwxNjAgMCAwIDMyTDk2IDEyOGwwLTMyem01Ny40IDIwOGwxMS4zLTExLjMgNDgtNDhMMjI0IDIzMy40IDI0Ni42IDI1NmwtMTEuMyAxMS4zLTQ4IDQ4TDE3NiAzMjYuNiAxNTMuNCAzMDR6TTM4NCAzMmwxNjAgMCAwIDQ4LTU2IDAgMCA0OC00OCAwIDAtNDgtNTYgMCAwLTQ4em02NCAxOTJsMzIgMCAwIDE2IDAgNjQgMCAxNi0zMiAwIDAtMTYgMC02NCAwLTE2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAxMjhsNjQwIDAgMCAzNTJMMCA0ODAgMCAxMjh6TTI4OCAzMDRBMTEyIDExMiAwIDEgMCA2NCAzMDRhMTEyIDExMiAwIDEgMCAyMjQgMHpNNDY0IDQxNmExMTIgMTEyIDAgMSAwIDAtMjI0IDExMiAxMTIgMCAxIDAgMCAyMjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const ChessClockFlip: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 96l160 0 0 32L96 128l0-32zm57.4 208l11.3-11.3 48-48L224 233.4 246.6 256l-11.3 11.3-48 48L176 326.6 153.4 304zM384 32l160 0 0 48-56 0 0 48-48 0 0-48-56 0 0-48zm64 192l32 0 0 16 0 64 0 16-32 0 0-16 0-64 0-16z" />
            <path d="M0 128l640 0 0 352L0 480 0 128zM288 304A112 112 0 1 0 64 304a112 112 0 1 0 224 0zM464 416a112 112 0 1 0 0-224 112 112 0 1 0 0 224z" />
    </Icon>
);

export default ChessClockFlip;