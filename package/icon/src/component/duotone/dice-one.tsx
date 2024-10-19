
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `dice-one` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dice-one?s=duotone dice-one}
 * @preview ![dice-one](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NCAzMkg2NEMyOC42MjUgMzIgMCA2MC42MjUgMCA5NlY0MTZDMCA0NTEuMzc1IDI4LjYyNSA0ODAgNjQgNDgwSDM4NEM0MTkuMzc1IDQ4MCA0NDggNDUxLjM3NSA0NDggNDE2Vjk2QzQ0OCA2MC42MjUgNDE5LjM3NSAzMiAzODQgMzJaTTIyNCAyODhDMjA2LjM3NSAyODggMTkyIDI3My42MjUgMTkyIDI1NlMyMDYuMzc1IDIyNCAyMjQgMjI0UzI1NiAyMzguMzc1IDI1NiAyNTZTMjQxLjYyNSAyODggMjI0IDI4OFogIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ij48L3BhdGg+PHBhdGggZD0iTTI1NiAyNTZDMjU2IDI3My42MjUgMjQxLjYyNSAyODggMjI0IDI4OFMxOTIgMjczLjYyNSAxOTIgMjU2UzIwNi4zNzUgMjI0IDIyNCAyMjRTMjU2IDIzOC4zNzUgMjU2IDI1NlogIiBjbGFzcz0iZmEtcHJpbWFyeSI+PC9wYXRoPjwvc3ZnPg==|width=32|height=32)
 */
export default function DiceOne(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path opacity={.4} d="M384 32H64C28.625 32 0 60.625 0 96V416C0 451.375 28.625 480 64 480H384C419.375 480 448 451.375 448 416V96C448 60.625 419.375 32 384 32ZM224 288C206.375 288 192 273.625 192 256S206.375 224 224 224S256 238.375 256 256S241.625 288 224 288Z " />
            <path d="M256 256C256 273.625 241.625 288 224 288S192 273.625 192 256S206.375 224 224 224S256 238.375 256 256Z " />
        </Icon>
    </>
}