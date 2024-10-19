
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hand-back-point-left` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-back-point-left?s=duotone hand-back-point-left}
 * @preview ![hand-back-point-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI0MCA0MTZDMjQwIDQwNi44NTIgMjQyLjY5NyAzOTguMzg1IDI0Ny4xNDMgMzkxLjEwN0MyMjQuODY5IDM4Ni45NDEgMjA4IDM2Ny40NjcgMjA4IDM0NEMyMDggMzI2LjYyMSAyMTcuMzMgMzExLjUzNSAyMzEuMTY4IDMwMy4xMTFDMjA4Ljg4MyAyOTguOTU1IDE5MiAyNzkuNDc3IDE5MiAyNTZDMTkyIDI0My42NTIgMTk2Ljc5NyAyMzIuNTA2IDIwNC40NTkgMjI0SDQwQzE3LjkwNiAyMjQgMCAyMDYuMDk0IDAgMTg0UzE3LjkwNiAxNDQgNDAgMTQ0SDI2NC45MTZMMjY0LjkyNiAxNDMuOTg4SDMzNS45OTRDMzQ0LjgzIDE0My45ODggMzUxLjk5NCAxMzYuODI0IDM1MS45OTQgMTI3Ljk4OEMzNTEuOTk0IDExOS4xNSAzNDQuODMgMTExLjk4OCAzMzUuOTk0IDExMS45ODhIMjkwLjUyNUwzMTQuNTE2IDgyQzMyMy42MjUgNzAuNjI1IDMzNy40MjIgNjQgMzUyIDY0SDQwMEM0MTAuMzc1IDY0IDQyMC40ODQgNjcuMzc1IDQyOC43OTcgNzMuNTk0TDQ1NC4zOTEgOTIuNzgxQzQ5MC40NjkgMTE5Ljg0NCA1MTIgMTYyLjkwNiA1MTIgMjA4VjMyMEM1MTIgMzIzLjMxOCA1MTEuNjYyIDMyNi41NTcgNTExLjAyMSAzMjkuNjg2QzUwNS45MzYgNDA0LjUwNiA0NDQuMDkgNDY0IDM2OCA0NjRIMjg4QzI2MS40ODQgNDY0IDI0MCA0NDIuNSAyNDAgNDE2WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function HandBackPointLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M240 416C240 406.852 242.697 398.385 247.143 391.107C224.869 386.941 208 367.467 208 344C208 326.621 217.33 311.535 231.168 303.111C208.883 298.955 192 279.477 192 256C192 243.652 196.797 232.506 204.459 224H40C17.906 224 0 206.094 0 184S17.906 144 40 144H264.916L264.926 143.988H335.994C344.83 143.988 351.994 136.824 351.994 127.988C351.994 119.15 344.83 111.988 335.994 111.988H290.525L314.516 82C323.625 70.625 337.422 64 352 64H400C410.375 64 420.484 67.375 428.797 73.594L454.391 92.781C490.469 119.844 512 162.906 512 208V320C512 323.318 511.662 326.557 511.021 329.686C505.936 404.506 444.09 464 368 464H288C261.484 464 240 442.5 240 416Z" />
        </Icon>
    </>
}