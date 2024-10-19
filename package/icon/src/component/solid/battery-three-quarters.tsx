
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `battery-three-quarters` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/battery-three-quarters?s=solid battery-three-quarters}
 * @preview ![battery-three-quarters](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTIgMTkySDk2VjMyMEgzNTJWMTkyWk01NDQgMTkyVjE2MEM1NDQgMTI0LjY1NCA1MTUuMzQ2IDk2IDQ4MCA5Nkg2NEMyOC42NTQgOTYgMCAxMjQuNjU0IDAgMTYwVjM1MkMwIDM4Ny4zNDYgMjguNjU0IDQxNiA2NCA0MTZINDgwQzUxNS4zNDYgNDE2IDU0NCAzODcuMzQ2IDU0NCAzNTJWMzIwQzU2MS42NzQgMzIwIDU3NiAzMDUuNjc0IDU3NiAyODhWMjI0QzU3NiAyMDYuMzI2IDU2MS42NzQgMTkyIDU0NCAxOTJaTTQ4MCAzNTJINjRWMTYwSDQ4MFYzNTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function BatteryThreeQuarters(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M352 192H96V320H352V192ZM544 192V160C544 124.654 515.346 96 480 96H64C28.654 96 0 124.654 0 160V352C0 387.346 28.654 416 64 416H480C515.346 416 544 387.346 544 352V320C561.674 320 576 305.674 576 288V224C576 206.326 561.674 192 544 192ZM480 352H64V160H480V352Z" />
        </Icon>
    </>
}