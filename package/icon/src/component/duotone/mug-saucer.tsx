
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `mug-saucer` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mug-saucer?s=duotone mug-saucer}
 * @preview ![mug-saucer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU2MCA0MTZIMTZDNy4xNjQgNDE2IDAgNDIzLjE2NCAwIDQzMkMwIDQ1OC41MDggMjEuNDkgNDgwIDQ4IDQ4MEg1MjhDNTU0LjUxIDQ4MCA1NzYgNDU4LjUwOCA1NzYgNDMyQzU3NiA0MjMuMTY0IDU2OC44MzggNDE2IDU2MCA0MTZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTUxMiAzMkgxMjBDMTA2Ljc1IDMyIDk2IDQyLjc1IDk2IDU2VjI4OEM5NiAzNDEgMTM5IDM4NCAxOTIgMzg0SDM4NEM0MzcgMzg0IDQ4MCAzNDEgNDgwIDI4OEg1MTJDNTgyLjYyNSAyODggNjQwIDIzMC42MjUgNjQwIDE2MFM1ODIuNjI1IDMyIDUxMiAzMlpNNTEyIDIyNEg0ODBWOTZINTEyQzU0Ny4yNSA5NiA1NzYgMTI0Ljc1IDU3NiAxNjBTNTQ3LjI1IDIyNCA1MTIgMjI0WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function MugSaucer(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M560 416H16C7.164 416 0 423.164 0 432C0 458.508 21.49 480 48 480H528C554.51 480 576 458.508 576 432C576 423.164 568.838 416 560 416Z" />
            <path d="M512 32H120C106.75 32 96 42.75 96 56V288C96 341 139 384 192 384H384C437 384 480 341 480 288H512C582.625 288 640 230.625 640 160S582.625 32 512 32ZM512 224H480V96H512C547.25 96 576 124.75 576 160S547.25 224 512 224Z" />
        </Icon>
    </>
}