
import { Icon } from "../../index";

/**
 * A component that renders the `circle-location-arrow` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-location-arrow?s=sharp-solid circle-location-arrow}
 * @preview ![circle-location-arrow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDUxMkEyNTYgMjU2IDAgMSAwIDI1NiAwYTI1NiAyNTYgMCAxIDAgMCA1MTJ6TTIzMy40IDI3OC42TDg2LjMgMjQ0LjcgMzY5LjEgMTQyLjkgMjY3LjMgNDI1LjcgMjMzLjQgMjc4LjZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleLocationArrow: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM233.4 278.6L86.3 244.7 369.1 142.9 267.3 425.7 233.4 278.6z" />
    </Icon>
);

export default CircleLocationArrow;