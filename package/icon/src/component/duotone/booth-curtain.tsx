
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `booth-curtain` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/booth-curtain?s=duotone booth-curtain}
 * @preview ![booth-curtain](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTAgMzJWNDk2QzAgNTA0Ljc1IDcuMjUgNTEyIDE2IDUxMkg0OEM1Ni43NSA1MTIgNjQgNTA0Ljc1IDY0IDQ5NlY2NEgxNjBWMEgzMkMxNC4yNSAwIDAgMTQuMjUgMCAzMlpNNDgwIDBINDQ4VjQ5NkM0NDggNTA0Ljc1IDQ1NS4yNSA1MTIgNDY0IDUxMkg0OTZDNTA0Ljc1IDUxMiA1MTIgNTA0Ljc1IDUxMiA0OTZWMzJDNTEyIDE0LjI1IDQ5Ny43NSAwIDQ4MCAwWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik00NDggMFY0MDBDNDQ4IDQyNi41IDQyNi41IDQ0OCA0MDAgNDQ4QzM3NS41NDEgNDQ4IDM1NS41NTMgNDI5Ljc4NSAzNTIgNDA2LjQ2MUMzNDguNDQ3IDQyOS43ODUgMzI4LjQ1OSA0NDggMzA0IDQ0OFMyNTkuNTUxIDQyOS43ODMgMjU2IDQwNi40NTlDMjUyLjQ0OSA0MjkuNzgzIDIzMi40NTkgNDQ4IDIwOCA0NDhDMTgxLjUgNDQ4IDE2MCA0MjYuNSAxNjAgNDAwVjBINDQ4WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BoothCurtain(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M0 32V496C0 504.75 7.25 512 16 512H48C56.75 512 64 504.75 64 496V64H160V0H32C14.25 0 0 14.25 0 32ZM480 0H448V496C448 504.75 455.25 512 464 512H496C504.75 512 512 504.75 512 496V32C512 14.25 497.75 0 480 0Z" />
            <path d="M448 0V400C448 426.5 426.5 448 400 448C375.541 448 355.553 429.785 352 406.461C348.447 429.785 328.459 448 304 448S259.551 429.783 256 406.459C252.449 429.783 232.459 448 208 448C181.5 448 160 426.5 160 400V0H448Z" />
        </Icon>
    </>
}