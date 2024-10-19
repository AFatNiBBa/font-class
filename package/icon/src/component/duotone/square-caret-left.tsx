
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-caret-left` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-caret-left?s=duotone square-caret-left}
 * @preview ![square-caret-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NCAzMkg2NEMyOC42NTQgMzIgMCA2MC42NTIgMCA5NlY0MTZDMCA0NTEuMzQ0IDI4LjY1NCA0ODAgNjQgNDgwSDM4NEM0MTkuMzQ2IDQ4MCA0NDggNDUxLjM0NCA0NDggNDE2Vjk2QzQ0OCA2MC42NTIgNDE5LjM0NiAzMiAzODQgMzJaTTI4OCAzNjBDMjg4IDM2OS41MzEgMjgyLjM0NCAzNzguMTg4IDI3My41OTQgMzgyQzI3MC41IDM4My4zNDQgMjY3LjI1IDM4NCAyNjQgMzg0QzI1OC4wNjIgMzg0IDI1Mi4xODggMzgxLjc4MSAyNDcuNjU2IDM3Ny41OTRMMTM1LjY1NiAyNzMuNTk0QzEzMC43ODEgMjY5LjAzMSAxMjggMjYyLjY4OCAxMjggMjU2UzEzMC43ODEgMjQyLjk2OSAxMzUuNjU2IDIzOC40MDZMMjQ3LjY1NiAxMzQuNDA2QzI1NC42ODggMTI3LjkzOCAyNjQuODc1IDEyNi4yNSAyNzMuNTk0IDEzMEMyODIuMzQ0IDEzMy44MTIgMjg4IDE0Mi40NjkgMjg4IDE1MlYzNjBaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI4OCAzNjBDMjg4IDM2OS41MzEgMjgyLjM0NCAzNzguMTg4IDI3My41OTQgMzgyQzI3MC41IDM4My4zNDQgMjY3LjI1IDM4NCAyNjQgMzg0QzI1OC4wNjIgMzg0IDI1Mi4xODggMzgxLjc4MSAyNDcuNjU2IDM3Ny41OTRMMTM1LjY1NiAyNzMuNTk0QzEzMC43ODEgMjY5LjAzMSAxMjggMjYyLjY4OCAxMjggMjU2UzEzMC43ODEgMjQyLjk2OSAxMzUuNjU2IDIzOC40MDZMMjQ3LjY1NiAxMzQuNDA2QzI1NC42ODggMTI3LjkzOCAyNjQuODc1IDEyNi4yNSAyNzMuNTk0IDEzMEMyODIuMzQ0IDEzMy44MTIgMjg4IDE0Mi40NjkgMjg4IDE1MlYzNjBaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SquareCaretLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M384 32H64C28.654 32 0 60.652 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.652 419.346 32 384 32ZM288 360C288 369.531 282.344 378.188 273.594 382C270.5 383.344 267.25 384 264 384C258.062 384 252.188 381.781 247.656 377.594L135.656 273.594C130.781 269.031 128 262.688 128 256S130.781 242.969 135.656 238.406L247.656 134.406C254.688 127.938 264.875 126.25 273.594 130C282.344 133.812 288 142.469 288 152V360Z" />
            <path d="M288 360C288 369.531 282.344 378.188 273.594 382C270.5 383.344 267.25 384 264 384C258.062 384 252.188 381.781 247.656 377.594L135.656 273.594C130.781 269.031 128 262.688 128 256S130.781 242.969 135.656 238.406L247.656 134.406C254.688 127.938 264.875 126.25 273.594 130C282.344 133.812 288 142.469 288 152V360Z" />
        </Icon>
    </>
}