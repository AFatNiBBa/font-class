
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `less-than` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/less-than?s=regular less-than}
 * @preview ![less-than](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNzAuMzEyIDExNy42NTZMNzkuODEyIDI1NkwzNzAuMzEyIDM5NC4zNDRDMzgyLjI4MSA0MDAuMDMxIDM4Ny4zNzUgNDE0LjM0NCAzODEuNjU2IDQyNi4zMTJDMzc3LjU2MiA0MzQuOTY5IDM2OC45MzggNDQwIDM1OS45NjkgNDQwQzM1Ni41MzEgNDQwIDM1MyA0MzkuMjUgMzQ5LjY4NyA0MzcuNjU2TDEzLjY4NyAyNzcuNjU2QzUuMzEyIDI3My42ODggMCAyNjUuMjUgMCAyNTZTNS4zMTIgMjM4LjMxMiAxMy42ODggMjM0LjM0NEwzNDkuNjg4IDc0LjM0NEMzNjEuNjI1IDY4LjU5NCAzNzYgNzMuNzE5IDM4MS42NTYgODUuNjg4QzM4Ny4zNzUgOTcuNjU2IDM4Mi4yODEgMTExLjk2OSAzNzAuMzEyIDExNy42NTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function LessThan(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M370.312 117.656L79.812 256L370.312 394.344C382.281 400.031 387.375 414.344 381.656 426.312C377.562 434.969 368.938 440 359.969 440C356.531 440 353 439.25 349.687 437.656L13.687 277.656C5.312 273.688 0 265.25 0 256S5.312 238.312 13.688 234.344L349.688 74.344C361.625 68.594 376 73.719 381.656 85.688C387.375 97.656 382.281 111.969 370.312 117.656Z" />
        </Icon>
    </>
}