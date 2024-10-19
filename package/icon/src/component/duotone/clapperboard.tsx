
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `clapperboard` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/clapperboard?s=duotone clapperboard}
 * @preview ![clapperboard](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMiAxNjBWNDE2QzUxMiA0NTEuMzQ2IDQ4My4zNDYgNDgwIDQ0OCA0ODBINjRDMjguNjU0IDQ4MCAwIDQ1MS4zNDYgMCA0MTZWMTYwSDUxMloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNDk3Ljc0OCA1Ni4xODlMMzkzLjkzOCAxNjBINTEyVjk2QzUxMiA4MC44NjcgNTA2LjUyOSA2Ny4xNDYgNDk3Ljc0OCA1Ni4xODlaTTY0IDMyQzI4LjY1NCAzMiAwIDYwLjY1NCAwIDk2VjE2MEg2LjA2MkwxMzQuMDYyIDMySDY0Wk0yMDEuOTM4IDMyTDczLjkzOCAxNjBIMTY2LjA2MkwyOTQuMDYyIDMySDIwMS45MzhaTTQ0OCAzMkgzNjEuOTM4TDIzMy45MzggMTYwSDMyNi4wNjJMNDUzLjUwOCAzMi41NTVDNDUxLjY2MiAzMi4zOTUgNDQ5Ljg4NyAzMiA0NDggMzJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Clapperboard(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M512 160V416C512 451.346 483.346 480 448 480H64C28.654 480 0 451.346 0 416V160H512Z" />
            <path d="M497.748 56.189L393.938 160H512V96C512 80.867 506.529 67.146 497.748 56.189ZM64 32C28.654 32 0 60.654 0 96V160H6.062L134.062 32H64ZM201.938 32L73.938 160H166.062L294.062 32H201.938ZM448 32H361.938L233.938 160H326.062L453.508 32.555C451.662 32.395 449.887 32 448 32Z" />
        </Icon>
    </>
}