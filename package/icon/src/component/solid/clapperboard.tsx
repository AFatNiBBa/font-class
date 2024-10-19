
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `clapperboard` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/clapperboard?s=solid clapperboard}
 * @preview ![clapperboard](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjYuMDYyIDE2MEw0NTMuNTA4IDMyLjU1NUM0NTEuNjYyIDMyLjM5NSA0NDkuODg3IDMyIDQ0OCAzMkgzNjEuOTM4TDIzMy45MzggMTYwSDMyNi4wNjJaTTE2Ni4wNjIgMTYwTDI5NC4wNjIgMzJIMjAxLjkzOEw3My45MzggMTYwSDE2Ni4wNjJaTTQ5Ny43NDggNTYuMTg5TDM5My45MzggMTYwSDUxMlY5NkM1MTIgODAuODY3IDUwNi41MjkgNjcuMTQ2IDQ5Ny43NDggNTYuMTg5Wk0xMzQuMDYyIDMySDY0QzI4LjY1NCAzMiAwIDYwLjY1NCAwIDk2VjE2MEg2LjA2MkwxMzQuMDYyIDMyWk0wIDQxNkMwIDQ1MS4zNDYgMjguNjU0IDQ4MCA2NCA0ODBINDQ4QzQ4My4zNDYgNDgwIDUxMiA0NTEuMzQ2IDUxMiA0MTZWMTkySDBWNDE2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Clapperboard(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M326.062 160L453.508 32.555C451.662 32.395 449.887 32 448 32H361.938L233.938 160H326.062ZM166.062 160L294.062 32H201.938L73.938 160H166.062ZM497.748 56.189L393.938 160H512V96C512 80.867 506.529 67.146 497.748 56.189ZM134.062 32H64C28.654 32 0 60.654 0 96V160H6.062L134.062 32ZM0 416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V192H0V416Z" />
        </Icon>
    </>
}