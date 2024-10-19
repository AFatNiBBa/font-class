
import { Icon, generic } from "../../index";

/**
 * A component that renders the `computer-mouse` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/computer-mouse?s=duotone computer-mouse}
 * @preview ![computer-mouse](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE3NiAwSDE2MEM3MS42MjUgMCAwIDcxLjYyNSAwIDE2MFYxOTJIMTc2VjBaTTAgMzUyQzAgNDQwLjM3NSA3MS42MjUgNTEyIDE2MCA1MTJIMjI0QzMxMi4zNzUgNTEyIDM4NCA0NDAuMzc1IDM4NCAzNTJWMjI0SDBWMzUyWk0yMjQgMEgyMDhWMTkySDM4NFYxNjBDMzg0IDcxLjYyNSAzMTIuMzc1IDAgMjI0IDBaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTM4NCAxOTJWMjI0SDBWMTkySDE3NlYwSDIwOFYxOTJIMzg0WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const ComputerMouse: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M176 0H160C71.625 0 0 71.625 0 160V192H176V0ZM0 352C0 440.375 71.625 512 160 512H224C312.375 512 384 440.375 384 352V224H0V352ZM224 0H208V192H384V160C384 71.625 312.375 0 224 0Z" />
            <path d="M384 192V224H0V192H176V0H208V192H384Z" />
    </Icon>
);

export default ComputerMouse;