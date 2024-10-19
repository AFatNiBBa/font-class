
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `nimblr` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/nimblr?s=brands nimblr}
 * @preview ![nimblr](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDYuNiAyOTkuMjljMTUuNTcgMCAyNy4xNSAxMS40NiAyNy4xNSAyN3MtMTEuNjIgMjctMjcuMTUgMjdjLTE1LjcgMC0yNy4xNS0xMS41Ny0yNy4xNS0yN3MxMS41NS0yNyAyNy4xNS0yN3pNMTEzIDMyNi4yNWMwLTE1LjYxIDExLjY4LTI3IDI3LjE1LTI3czI3LjE1IDExLjQ2IDI3LjE1IDI3LTExLjQ3IDI3LTI3LjE1IDI3Yy0xNS40NCAwLTI3LjE1LTExLjMxLTI3LjE1LTI3TTE5MS43NiAxNTlDMTU3IDE1OSA4OS40NSAxNzguNzcgNTkuMjUgMjI3TDE0IDB2MzM1LjQ4QzE0IDQzMy4xMyA5My42MSA1MTIgMTkxLjc2IDUxMnMxNzcuNzYtNzguOTUgMTc3Ljc2LTE3Ni41MlMyOTAuMTMgMTU5IDE5MS43NiAxNTl6bTAgMzA4LjEyYy03My4yNyAwLTEzMi41MS01OC45LTEzMi41MS0xMzEuNTlzNTkuMjQtMTMxLjU5IDEzMi41MS0xMzEuNTkgMTMyLjUxIDU4Ljg2IDEzMi41MSAxMzEuNTRTMjY1IDQ2Ny4wNyAxOTEuNzYgNDY3LjA3eiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Nimblr(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M246.6 299.29c15.57 0 27.15 11.46 27.15 27s-11.62 27-27.15 27c-15.7 0-27.15-11.57-27.15-27s11.55-27 27.15-27zM113 326.25c0-15.61 11.68-27 27.15-27s27.15 11.46 27.15 27-11.47 27-27.15 27c-15.44 0-27.15-11.31-27.15-27M191.76 159C157 159 89.45 178.77 59.25 227L14 0v335.48C14 433.13 93.61 512 191.76 512s177.76-78.95 177.76-176.52S290.13 159 191.76 159zm0 308.12c-73.27 0-132.51-58.9-132.51-131.59s59.24-131.59 132.51-131.59 132.51 58.86 132.51 131.54S265 467.07 191.76 467.07z" />
        </Icon>
    </>
}