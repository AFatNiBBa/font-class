
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bed-empty` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bed-empty?s=duotone bed-empty}
 * @preview ![bed-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU0NCAyMjRINjRWMzIwSDY0MEM2NDAgMjY2Ljk4MSA1OTcuMDE5IDIyNCA1NDQgMjI0WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik02NDAgMzIwVjQ2NEM2NDAgNDcyLjg0NCA2MzIuODQ0IDQ4MCA2MjQgNDgwSDU5MkM1ODMuMTU2IDQ4MCA1NzYgNDcyLjg0NCA1NzYgNDY0VjQxNkg2NFY0NjRDNjQgNDcyLjg0NCA1Ni44NDQgNDgwIDQ4IDQ4MEgxNkM3LjE1NiA0ODAgMCA0NzIuODQ0IDAgNDY0VjQ4QzAgMzkuMTU2IDcuMTU2IDMyIDE2IDMySDQ4QzU2Ljg0NCAzMiA2NCAzOS4xNTYgNjQgNDhWMzIwSDY0MFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function BedEmpty(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M544 224H64V320H640C640 266.981 597.019 224 544 224Z" />
            <path d="M640 320V464C640 472.844 632.844 480 624 480H592C583.156 480 576 472.844 576 464V416H64V464C64 472.844 56.844 480 48 480H16C7.156 480 0 472.844 0 464V48C0 39.156 7.156 32 16 32H48C56.844 32 64 39.156 64 48V320H640Z" />
        </Icon>
    </>
}