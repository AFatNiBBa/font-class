
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `compass` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/compass?s=duotone compass}
 * @preview ![compass](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxNkMxMjMuNDQ5IDE2IDE2IDEyMy40NDkgMTYgMjU2UzEyMy40NDkgNDk2IDI1NiA0OTZTNDk2IDM4OC41NTEgNDk2IDI1NlMzODguNTUxIDE2IDI1NiAxNlpNMzgyLjEyNSAxNTYuMDQ3TDMxNi4xNTYgMzAwLjQwNkMzMTMuNDM4IDMwNi4zNzUgMzA2LjM3NSAzMTMuNDM4IDMwMC40MDYgMzE2LjE3MkwxNTYuMDYyIDM4Mi4xNDFDMTM5LjQwNiAzODkuNzUgMTIyLjI1IDM3Mi41OTQgMTI5Ljg3NSAzNTUuOTM3TDE5NS44NDQgMjExLjU5NEMxOTguNTYyIDIwNS42MDkgMjA1LjYyNSAxOTguNTQ3IDIxMS42MjUgMTk1LjgxMkwzNTUuOTM3IDEyOS44NDRDMzcyLjU5NCAxMjIuMjUgMzg5Ljc1IDEzOS40MDYgMzgyLjEyNSAxNTYuMDQ3WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yMzMuMzY1IDIzMy4zNzVDMjIwLjg2NSAyNDUuODc1IDIyMC44NjUgMjY2LjEyNSAyMzMuMzY1IDI3OC42MjVTMjY2LjExNSAyOTEuMTI1IDI3OC42MTUgMjc4LjYyNVMyOTEuMTE1IDI0NS44NTkgMjc4LjYxNSAyMzMuMzc1QzI2Ni4xMTUgMjIwLjg3NSAyNDUuODY1IDIyMC44NzUgMjMzLjM2NSAyMzMuMzc1Wk0zODIuMTE1IDE1Ni4wNDdMMzE2LjE0NiAzMDAuNDA2QzMxMy40MjcgMzA2LjM3NSAzMDYuMzY1IDMxMy40MzggMzAwLjM5NiAzMTYuMTcyTDE1Ni4wNTIgMzgyLjE0MUMxMzkuMzk2IDM4OS43NSAxMjIuMjQgMzcyLjU5NCAxMjkuODY1IDM1NS45MzdMMTk1LjgzMyAyMTEuNTk0QzE5OC41NTIgMjA1LjYwOSAyMDUuNjE1IDE5OC41NDcgMjExLjYxNSAxOTUuODEyTDM1NS45MjcgMTI5Ljg0NEMzNzIuNTgzIDEyMi4yNSAzODkuNzQgMTM5LjQwNiAzODIuMTE1IDE1Ni4wNDdaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Compass(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M256 16C123.449 16 16 123.449 16 256S123.449 496 256 496S496 388.551 496 256S388.551 16 256 16ZM382.125 156.047L316.156 300.406C313.438 306.375 306.375 313.438 300.406 316.172L156.062 382.141C139.406 389.75 122.25 372.594 129.875 355.937L195.844 211.594C198.562 205.609 205.625 198.547 211.625 195.812L355.937 129.844C372.594 122.25 389.75 139.406 382.125 156.047Z" />
            <path d="M233.365 233.375C220.865 245.875 220.865 266.125 233.365 278.625S266.115 291.125 278.615 278.625S291.115 245.859 278.615 233.375C266.115 220.875 245.865 220.875 233.365 233.375ZM382.115 156.047L316.146 300.406C313.427 306.375 306.365 313.438 300.396 316.172L156.052 382.141C139.396 389.75 122.24 372.594 129.865 355.937L195.833 211.594C198.552 205.609 205.615 198.547 211.615 195.812L355.927 129.844C372.583 122.25 389.74 139.406 382.115 156.047Z" />
        </Icon>
    </>
}