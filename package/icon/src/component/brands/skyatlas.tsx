
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `skyatlas` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/skyatlas?s=brands skyatlas}
 * @preview ![skyatlas](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02NDAgMzI5LjNjMCA2NS45LTUyLjUgMTE0LjQtMTE3LjUgMTE0LjQtMTY1LjkgMC0xOTYuNi0yNDkuNy0zNTkuNy0yNDkuNy0xNDYuOSAwLTE0Ny4xIDIxMi4yIDUuNiAyMTIuMiA0Mi41IDAgOTAuOS0xNy44IDEyNS4zLTQyLjUgNS42LTQuMSAxNi45LTE2LjMgMjIuOC0xNi4zczEwLjkgNSAxMC45IDEwLjljMCA3LjgtMTMuMSAxOS4xLTE4LjcgMjQuMS00MC45IDM1LjYtMTAwLjMgNjEuMi0xNTQuNyA2MS4yLTgzLjQuMS0xNTQtNTktMTU0LTE0NC45czY3LjUtMTQ5LjEgMTUyLjgtMTQ5LjFjMTg1LjMgMCAyMjIuNSAyNDUuOSAzNjEuOSAyNDUuOSA5OS45IDAgOTQuOC0xMzkuNyAzLjQtMTM5LjctMTcuNSAwLTM1IDExLjYtNDYuOSAxMS42LTguNCAwLTE1LjktNy4yLTE1LjktMTUuNiAwLTExLjYgNS4zLTIzLjcgNS4zLTM2LjMgMC02Ni42LTUwLjktMTE0LjctMTE2LjktMTE0LjctNTMuMSAwLTgwIDM2LjktODguOCAzNi45LTYuMiAwLTExLjItNS0xMS4yLTExLjIgMC01LjYgNC4xLTEwLjMgNy44LTE0LjQgMjUuMy0yOC44IDY0LjctNDMuNyAxMDIuOC00My43IDc5LjQgMCAxMzkuMSA1OC40IDEzOS4xIDEzNy44IDAgNi45LS4zIDEzLjctMS4yIDIwLjYgMTEuOS0zLjEgMjQuMS00LjcgMzUuOS00LjcgNjAuNyAwIDExMS45IDQ1LjMgMTExLjkgMTA3LjJ6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Skyatlas(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M640 329.3c0 65.9-52.5 114.4-117.5 114.4-165.9 0-196.6-249.7-359.7-249.7-146.9 0-147.1 212.2 5.6 212.2 42.5 0 90.9-17.8 125.3-42.5 5.6-4.1 16.9-16.3 22.8-16.3s10.9 5 10.9 10.9c0 7.8-13.1 19.1-18.7 24.1-40.9 35.6-100.3 61.2-154.7 61.2-83.4.1-154-59-154-144.9s67.5-149.1 152.8-149.1c185.3 0 222.5 245.9 361.9 245.9 99.9 0 94.8-139.7 3.4-139.7-17.5 0-35 11.6-46.9 11.6-8.4 0-15.9-7.2-15.9-15.6 0-11.6 5.3-23.7 5.3-36.3 0-66.6-50.9-114.7-116.9-114.7-53.1 0-80 36.9-88.8 36.9-6.2 0-11.2-5-11.2-11.2 0-5.6 4.1-10.3 7.8-14.4 25.3-28.8 64.7-43.7 102.8-43.7 79.4 0 139.1 58.4 139.1 137.8 0 6.9-.3 13.7-1.2 20.6 11.9-3.1 24.1-4.7 35.9-4.7 60.7 0 111.9 45.3 111.9 107.2z" />
        </Icon>
    </>
}