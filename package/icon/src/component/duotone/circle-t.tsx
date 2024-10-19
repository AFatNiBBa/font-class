
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-t` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-t?s=duotone circle-t}
 * @preview ![circle-t](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxNkMxMjMuNDUxIDE2IDE2IDEyMy40NTEgMTYgMjU2UzEyMy40NTEgNDk2IDI1NiA0OTZTNDk2IDM4OC41NDkgNDk2IDI1NlMzODguNTQ5IDE2IDI1NiAxNlpNMzYwIDE5MkgyODBWMzYwQzI4MCAzNzMuMjUgMjY5LjI1IDM4NCAyNTYgMzg0UzIzMiAzNzMuMjUgMjMyIDM2MFYxOTJIMTUyQzEzOC43NSAxOTIgMTI4IDE4MS4yNSAxMjggMTY4UzEzOC43NSAxNDQgMTUyIDE0NEgzNjBDMzczLjI1IDE0NCAzODQgMTU0Ljc1IDM4NCAxNjhTMzczLjI1IDE5MiAzNjAgMTkyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zNjAgMTQ0SDE1MkMxMzguNzUgMTQ0IDEyOCAxNTQuNzUgMTI4IDE2OFMxMzguNzUgMTkyIDE1MiAxOTJIMjMyVjM2MEMyMzIgMzczLjI1IDI0Mi43NSAzODQgMjU2IDM4NFMyODAgMzczLjI1IDI4MCAzNjBWMTkySDM2MEMzNzMuMjUgMTkyIDM4NCAxODEuMjUgMzg0IDE2OFMzNzMuMjUgMTQ0IDM2MCAxNDRaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleT(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM360 192H280V360C280 373.25 269.25 384 256 384S232 373.25 232 360V192H152C138.75 192 128 181.25 128 168S138.75 144 152 144H360C373.25 144 384 154.75 384 168S373.25 192 360 192Z" />
            <path d="M360 144H152C138.75 144 128 154.75 128 168S138.75 192 152 192H232V360C232 373.25 242.75 384 256 384S280 373.25 280 360V192H360C373.25 192 384 181.25 384 168S373.25 144 360 144Z" />
        </Icon>
    </>
}