
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `down` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/down?s=duotone down}
 * @preview ![down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTEyOCAyNTZWNjRDMTI4IDQ2LjMyNiAxNDIuMzI4IDMyIDE2MCAzMkgyMjRDMjQxLjY3NCAzMiAyNTYgNDYuMzI2IDI1NiA2NFYyNTZIMTI4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zNzQuNjI1IDMxMC42MjVMMjE0LjYyNSA0NzAuNjI1QzIwOC4zNzUgNDc2Ljg3NSAyMDAuMTg4IDQ4MCAxOTIgNDgwUzE3NS42MjUgNDc2Ljg3NSAxNjkuMzc1IDQ3MC42MjVMOS4zNzUgMzEwLjYyNUMwLjIxOSAzMDEuNDY5IC0yLjUxNiAyODcuNzE5IDIuNDM4IDI3NS43NUM3LjM5MSAyNjMuNzk3IDE5LjA2MyAyNTYgMzIgMjU2SDM1MkMzNjQuOTM4IDI1NiAzNzYuNjA5IDI2My43OTcgMzgxLjU2MyAyNzUuNzVDMzg2LjUxNiAyODcuNzE5IDM4My43ODEgMzAxLjQ2OSAzNzQuNjI1IDMxMC42MjVaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Down(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path opacity={.4} d="M128 256V64C128 46.326 142.328 32 160 32H224C241.674 32 256 46.326 256 64V256H128Z" />
            <path d="M374.625 310.625L214.625 470.625C208.375 476.875 200.188 480 192 480S175.625 476.875 169.375 470.625L9.375 310.625C0.219 301.469 -2.516 287.719 2.438 275.75C7.391 263.797 19.063 256 32 256H352C364.938 256 376.609 263.797 381.563 275.75C386.516 287.719 383.781 301.469 374.625 310.625Z" />
        </Icon>
    </>
}