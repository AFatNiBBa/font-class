
import { Icon } from "../../index";

/**
 * A component that renders the `circle-heart` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-heart?s=solid circle-heart}
 * @preview ![circle-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDUxMkEyNTYgMjU2IDAgMSAwIDI1NiAwYTI1NiAyNTYgMCAxIDAgMCA1MTJ6TTEzMS45IDI4MC45Yy0yOS40LTI5LjgtMjkuNC03OC4yIDAtMTA4czc3LTI5LjggMTA2LjQgMGwxNy43IDE4IDE3LjctMThjMjkuNC0yOS44IDc3LTI5LjggMTA2LjQgMHMyOS40IDc4LjIgMCAxMDhMMjc4LjUgMzg0LjFjLTYuMiA2LjMtMTQuMyA5LjQtMjIuNSA5LjRzLTE2LjMtMy4xLTIyLjUtOS40TDEzMS45IDI4MC45eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleHeart: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM131.9 280.9c-29.4-29.8-29.4-78.2 0-108s77-29.8 106.4 0l17.7 18 17.7-18c29.4-29.8 77-29.8 106.4 0s29.4 78.2 0 108L278.5 384.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4L131.9 280.9z" />
    </Icon>
);

export default CircleHeart;