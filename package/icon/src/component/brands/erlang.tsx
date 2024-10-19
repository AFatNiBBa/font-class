
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `erlang` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/erlang?s=brands erlang}
 * @preview ![erlang](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik04Ny4yIDUzLjVIMHY0MDVoMTAwLjRjLTQ5LjctNTIuNi03OC44LTEyNS4zLTc4LjctMjEyLjEtLjEtNzYuNyAyNC0xNDIuNyA2NS41LTE5Mi45em0yMzguMiA5LjdjLTQ1LjkuMS04NS4xIDMzLjUtODkuMiA4My4yaDE2OS45Yy0xLjEtNDkuNy0zNC41LTgzLjEtODAuNy04My4yem0yMzAuNy05LjZoLjNsLS4xLS4xem0uMyAwYzMxLjQgNDIuNyA0OC43IDk3LjUgNDYuMiAxNjIuNy41IDYgLjUgMTEuNyAwIDI0LjFIMjMwLjJjLS4yIDEwOS43IDM4LjkgMTk0LjkgMTM4LjYgMTk1LjMgNjguNS0uMyAxMTgtNTEgMTUxLjktMTA2LjFsOTYuNCA0OC4yYy0xNy40IDMwLjktMzYuNSA1Ny44LTU3LjkgODAuOEg2NDB2LTQwNXoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Erlang(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M87.2 53.5H0v405h100.4c-49.7-52.6-78.8-125.3-78.7-212.1-.1-76.7 24-142.7 65.5-192.9zm238.2 9.7c-45.9.1-85.1 33.5-89.2 83.2h169.9c-1.1-49.7-34.5-83.1-80.7-83.2zm230.7-9.6h.3l-.1-.1zm.3 0c31.4 42.7 48.7 97.5 46.2 162.7.5 6 .5 11.7 0 24.1H230.2c-.2 109.7 38.9 194.9 138.6 195.3 68.5-.3 118-51 151.9-106.1l96.4 48.2c-17.4 30.9-36.5 57.8-57.9 80.8H640v-405z" />
        </Icon>
    </>
}