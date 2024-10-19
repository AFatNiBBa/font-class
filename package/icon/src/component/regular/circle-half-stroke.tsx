
import { Icon } from "../../index";

/**
 * A component that renders the `circle-half-stroke` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-half-stroke?s=regular circle-half-stroke}
 * @preview ![circle-half-stroke](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MyAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUzIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0NyAxNiAyNTYgMTZaTTI1NiA0NDhWNjRDMzYxLjg2OSA2NCA0NDggMTUwLjEzMSA0NDggMjU2UzM2MS44NjkgNDQ4IDI1NiA0NDhaIi8+PC9zdmc+|width=32|height=32)
 */
const CircleHalfStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16C123.453 16 16 123.451 16 256S123.453 496 256 496S496 388.549 496 256S388.547 16 256 16ZM256 448V64C361.869 64 448 150.131 448 256S361.869 448 256 448Z" />
    </Icon>
);

export default CircleHalfStroke;