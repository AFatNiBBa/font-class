
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `user-crown` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-crown?s=solid user-crown}
 * @preview ![user-crown](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMjcyQzI5NC43NSAyNzIgMzUyIDIxNC43NSAzNTIgMTQ0VjBMMjg4IDMyTDIyNCAwTDE2MCAzMkw5NiAwVjE0NEM5NiAyMTQuNzUgMTUzLjI1IDI3MiAyMjQgMjcyWk0xNDQgMTI4SDMwNFYxNDRDMzA0IDE4OC4xMjUgMjY4LjEyNSAyMjQgMjI0IDIyNFMxNDQgMTg4LjEyNSAxNDQgMTQ0VjEyOFpNMjc0LjY2NCAzMDRIMTczLjMzNkM3Ny42MDkgMzA0IDAgMzgxLjYwMiAwIDQ3Ny4zMzJDMCA0OTYuNDc3IDE1LjUyMyA1MTIgMzQuNjY0IDUxMkg0MTMuMzM2QzQzMi40NzcgNTEyIDQ0OCA0OTYuNDc3IDQ0OCA0NzcuMzMyQzQ0OCAzODEuNjAyIDM3MC4zOTggMzA0IDI3NC42NjQgMzA0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function UserCrown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M224 272C294.75 272 352 214.75 352 144V0L288 32L224 0L160 32L96 0V144C96 214.75 153.25 272 224 272ZM144 128H304V144C304 188.125 268.125 224 224 224S144 188.125 144 144V128ZM274.664 304H173.336C77.609 304 0 381.602 0 477.332C0 496.477 15.523 512 34.664 512H413.336C432.477 512 448 496.477 448 477.332C448 381.602 370.398 304 274.664 304Z" />
        </Icon>
    </>
}