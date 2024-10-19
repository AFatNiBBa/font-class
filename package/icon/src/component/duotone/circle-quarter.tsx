
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-quarter` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-quarter?s=duotone circle-quarter}
 * @preview ![circle-quarter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAyNTZWMTZDMzg4LjU0NyAxNiA0OTYgMTIzLjQ1MSA0OTYgMjU2UzM4OC41NDcgNDk2IDI1NiA0OTZDMTIzLjQ1MSA0OTYgMTYgMzg4LjU0NyAxNiAyNTZIMjU2WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yNTYgMjU2SDE2QzE2IDEyMy40NTEgMTIzLjQ1MyAxNiAyNTYgMTZWMjU2WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleQuarter: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 256V16C388.547 16 496 123.451 496 256S388.547 496 256 496C123.451 496 16 388.547 16 256H256Z" />
            <path d="M256 256H16C16 123.451 123.453 16 256 16V256Z" />
    </Icon>
);

export default CircleQuarter;