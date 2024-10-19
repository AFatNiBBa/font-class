
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-quarter` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-quarter?s=regular circle-quarter}
 * @preview ![circle-quarter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjMuOTE5IDE4LjM4M0MyMjIuMzg0IDE4LjM4MyAyMjAuODI1IDE4LjQ5OCAyMTkuMjU1IDE4LjczNkMxMTUuODE5IDM0LjQ1NyAzNC4wNzUgMTE2LjIwMSAxOC4zNTQgMjE5LjYzN0MxNS40NCAyMzguNzk5IDMwLjg4NiAyNTYgNTAuMjY3IDI1NkgyMjMuNjE2QzI0MS4yOSAyNTYgMjU1LjYxNiAyNDEuNjcyIDI1NS42MTYgMjI0VjUwLjY0OEMyNTUuNjE2IDMyLjg1NyAyNDEuMTIgMTguMzgzIDIyMy45MTkgMTguMzgzWk0yMDcuNjE2IDIwOEg2OS42NzVDODcuMDYyIDE0MC45NTcgMTQwLjU3MyA4Ny40NDMgMjA3LjYxNiA3MC4wNTlWMjA4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleQuarter(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M223.919 18.383C222.384 18.383 220.825 18.498 219.255 18.736C115.819 34.457 34.075 116.201 18.354 219.637C15.44 238.799 30.886 256 50.267 256H223.616C241.29 256 255.616 241.672 255.616 224V50.648C255.616 32.857 241.12 18.383 223.919 18.383ZM207.616 208H69.675C87.062 140.957 140.573 87.443 207.616 70.059V208Z" />
        </Icon>
    </>
}