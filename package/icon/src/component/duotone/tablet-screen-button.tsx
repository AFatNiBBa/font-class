
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tablet-screen-button` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tablet-screen-button?s=duotone tablet-screen-button}
 * @preview ![tablet-screen-button](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NCAwLjAwMUg2NEMyOC42NTQgMC4wMDEgMCAyOC42NTMgMCA2NC4wMDFWNDQ4LjAwMUMwIDQ4My4zNDYgMjguNjU0IDUxMi4wMDEgNjQgNTEyLjAwMUgzODRDNDE5LjM0NiA1MTIuMDAxIDQ0OCA0ODMuMzQ2IDQ0OCA0NDguMDAxVjY0LjAwMUM0NDggMjguNjUzIDQxOS4zNDYgMC4wMDEgMzg0IDAuMDAxWk0yMjQgNDgwLjAwMUMyMDYuMjUgNDgwLjAwMSAxOTIgNDY1Ljc1MSAxOTIgNDQ4LjAwMVMyMDYuMjUgNDE2LjAwMSAyMjQgNDE2LjAwMVMyNTYgNDMwLjI1MSAyNTYgNDQ4LjAwMVMyNDEuNzUgNDgwLjAwMSAyMjQgNDgwLjAwMVpNMzg0IDM4NC4wMDFINjRWNjQuMDAxSDM4NFYzODQuMDAxWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zODQgMzg0LjAwMUg2NFY2NC4wMDFIMzg0VjM4NC4wMDFaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function TabletScreenButton(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M384 0.001H64C28.654 0.001 0 28.653 0 64.001V448.001C0 483.346 28.654 512.001 64 512.001H384C419.346 512.001 448 483.346 448 448.001V64.001C448 28.653 419.346 0.001 384 0.001ZM224 480.001C206.25 480.001 192 465.751 192 448.001S206.25 416.001 224 416.001S256 430.251 256 448.001S241.75 480.001 224 480.001ZM384 384.001H64V64.001H384V384.001Z" />
            <path d="M384 384.001H64V64.001H384V384.001Z" />
        </Icon>
    </>
}