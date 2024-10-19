
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `user` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user?s=duotone user}
 * @preview ![user](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM1MiAxMjhDMzUyIDE5OC42OTEgMjk0LjY5NSAyNTYgMjI0IDI1NkMxNTMuMzEyIDI1NiA5NiAxOTguNjkxIDk2IDEyOFMxNTMuMzEyIDAgMjI0IDBDMjk0LjY5NSAwIDM1MiA1Ny4zMDkgMzUyIDEyOFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMjc0LjY2NCAzMDQuMDAxSDE3My4zMzZDNzcuNjA5IDMwNC4wMDEgMCAzODEuNjAyIDAgNDc3LjMzM0MwIDQ5Ni40NzcgMTUuNTIzIDUxMi4wMDEgMzQuNjY0IDUxMi4wMDFINDEzLjMzNkM0MzIuNDc3IDUxMi4wMDEgNDQ4IDQ5Ni40NzcgNDQ4IDQ3Ny4zMzNDNDQ4IDM4MS42MDIgMzcwLjM5OCAzMDQuMDAxIDI3NC42NjQgMzA0LjAwMVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function User(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M352 128C352 198.691 294.695 256 224 256C153.312 256 96 198.691 96 128S153.312 0 224 0C294.695 0 352 57.309 352 128Z" />
            <path d="M274.664 304.001H173.336C77.609 304.001 0 381.602 0 477.333C0 496.477 15.523 512.001 34.664 512.001H413.336C432.477 512.001 448 496.477 448 477.333C448 381.602 370.398 304.001 274.664 304.001Z" />
        </Icon>
    </>
}