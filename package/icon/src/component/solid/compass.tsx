
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `compass` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/compass?s=solid compass}
 * @preview ![compass](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMzMuMzc1IDIzMy4zNzVDMjIwLjg3NSAyNDUuODc1IDIyMC44NzUgMjY2LjEyNSAyMzMuMzc1IDI3OC42MjVTMjY2LjEyNSAyOTEuMTI1IDI3OC42MjUgMjc4LjYyNVMyOTEuMTI1IDI0NS44NTkgMjc4LjYyNSAyMzMuMzc1QzI2Ni4xMjUgMjIwLjg3NSAyNDUuODc1IDIyMC44NzUgMjMzLjM3NSAyMzMuMzc1Wk0yNTYgMTZDMTIzLjQ0OSAxNiAxNiAxMjMuNDQ5IDE2IDI1NlMxMjMuNDQ5IDQ5NiAyNTYgNDk2UzQ5NiAzODguNTUxIDQ5NiAyNTZTMzg4LjU1MSAxNiAyNTYgMTZaTTM4Mi4xMjUgMTU2LjA0N0wzMTYuMTU2IDMwMC40MDZDMzEzLjQzOCAzMDYuMzc1IDMwNi4zNzUgMzEzLjQzOCAzMDAuNDA2IDMxNi4xNzJMMTU2LjA2MiAzODIuMTQxQzEzOS40MDYgMzg5Ljc1IDEyMi4yNSAzNzIuNTk0IDEyOS44NzUgMzU1LjkzN0wxOTUuODQ0IDIxMS41OTRDMTk4LjU2MiAyMDUuNjA5IDIwNS42MjUgMTk4LjU0NyAyMTEuNjI1IDE5NS44MTJMMzU1LjkzNyAxMjkuODQ0QzM3Mi41OTQgMTIyLjI1IDM4OS43NSAxMzkuNDA2IDM4Mi4xMjUgMTU2LjA0N1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Compass(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M233.375 233.375C220.875 245.875 220.875 266.125 233.375 278.625S266.125 291.125 278.625 278.625S291.125 245.859 278.625 233.375C266.125 220.875 245.875 220.875 233.375 233.375ZM256 16C123.449 16 16 123.449 16 256S123.449 496 256 496S496 388.551 496 256S388.551 16 256 16ZM382.125 156.047L316.156 300.406C313.438 306.375 306.375 313.438 300.406 316.172L156.062 382.141C139.406 389.75 122.25 372.594 129.875 355.937L195.844 211.594C198.562 205.609 205.625 198.547 211.625 195.812L355.937 129.844C372.594 122.25 389.75 139.406 382.125 156.047Z" />
        </Icon>
    </>
}