
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `route-interstate` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/route-interstate?s=duotone route-interstate}
 * @preview ![route-interstate](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE3IDE5Mkg0OTQuNzgxQzQ4Ni4yMzIgMzA3LjczIDQyNi4zNjEgNDQxLjc2NCAyNTUuODkxIDUxMkM4NS40MiA0NDEuNzY0IDI1LjU0OSAzMDcuNzMgMTcgMTkyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik00OTQuODkxIDE5MkgxNy4xMDlDMTMuMjkgMTQwLjI3OSAxOS42NjcgOTIuMTg5IDMxLjA5NSA1NS4xMjVDMzQuNzIxIDQzLjUgNDYuMDk3IDM2IDU3LjM1IDM5LjEyNUM3NS42MDMgNDQuMjUgOTUuMTA0IDQ3LjEyNSAxMTUuNDgyIDQ3LjEyNUMxNjQuNjE0IDQ3LjEyNSAyMDkuMTE5IDMxLjEyNSAyNDEuNjIzIDVDMjQ1Ljg3NCAxLjYyNSAyNTAuODc0IDAgMjU2IDBTMjY2LjEyNiAxLjYyNSAyNzAuMzc3IDVDMzAzLjAwNiAzMS4xMjUgMzQ3LjM4NiA0Ny4xMjUgMzk2LjUxOCA0Ny4xMjVDNDE2Ljg5NiA0Ny4xMjUgNDM2LjM5NyA0NC4yNSA0NTQuNjUgMzkuMjVDNDY1LjkwMyAzNiA0NzcuMjc5IDQzLjUgNDgwLjkwNSA1NS4xMjVDNDkyLjMzMyA5Mi4xODkgNDk4LjcxIDE0MC4yNzkgNDk0Ljg5MSAxOTJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function RouteInterstate(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M17 192H494.781C486.232 307.73 426.361 441.764 255.891 512C85.42 441.764 25.549 307.73 17 192Z" />
            <path d="M494.891 192H17.109C13.29 140.279 19.667 92.189 31.095 55.125C34.721 43.5 46.097 36 57.35 39.125C75.603 44.25 95.104 47.125 115.482 47.125C164.614 47.125 209.119 31.125 241.623 5C245.874 1.625 250.874 0 256 0S266.126 1.625 270.377 5C303.006 31.125 347.386 47.125 396.518 47.125C416.896 47.125 436.397 44.25 454.65 39.25C465.903 36 477.279 43.5 480.905 55.125C492.333 92.189 498.71 140.279 494.891 192Z" />
        </Icon>
    </>
}