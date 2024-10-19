
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `scribd` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/scribd?s=brands scribd}
 * @preview ![scribd](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00Mi4zIDI1Mi43Yy0xNi4xLTE5LTI0LjctNDUuOS0yNC44LTc5LjkgMC0xMDAuNCA3NS4yLTE1My4xIDE2Ny4yLTE1My4xIDk4LjYtMS42IDE1Ni44IDQ5IDE4NC4zIDcwLjZsLTUwLjUgNzIuMS0zNy4zLTI0LjYgMjYuOS0zOC42Yy0zNi41LTI0LTc5LjQtMzYuNS0xMjMtMzUuOC01MC43LS44LTExMS43IDI3LjItMTExLjcgNzYuMiAwIDE4LjcgMTEuMiAyMC43IDI4LjYgMTUuNiAyMy4zLTUuMyA0MS45LjYgNTUuOCAxNCAyNi40IDI0LjMgMjMuMiA2Ny42LS43IDkxLjktMjkuMiAyOS41LTg1LjIgMjcuMy0xMTQuOC04LjR6bTMxNy43IDUuOWMtMTUuNS0xOC44LTM4LjktMjkuNC02My4yLTI4LjYtMzguMS0yLTcxLjEgMjgtNzAuNSA2Ny4yLS43IDE2LjggNiAzMyAxOC40IDQ0LjMgMTQuMSAxMy45IDMzIDE5LjcgNTYuMyAxNC40IDE3LjQtNS4xIDI4LjYtMy4xIDI4LjYgMTUuNiAwIDQuMy0uNSA4LjUtMS40IDEyLjctMTYuNyA0MC45LTU5LjUgNjQuNC0xMjEuNCA2NC40LTUxLjkuMi0xMDIuNC0xNi40LTE0NC4xLTQ3LjNsMzMuNy0zOS40LTM1LjYtMjcuNEwwIDQwNi4zbDE1LjQgMTMuOGM1Mi41IDQ2LjggMTIwLjQgNzIuNSAxOTAuNyA3Mi4yIDUxLjQgMCA5NC40LTEwLjUgMTMzLjYtNDQuMSA1Ny4xLTUxLjQgNTQuMi0xNDkuMiAyMC4zLTE4OS42eiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Scribd(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M42.3 252.7c-16.1-19-24.7-45.9-24.8-79.9 0-100.4 75.2-153.1 167.2-153.1 98.6-1.6 156.8 49 184.3 70.6l-50.5 72.1-37.3-24.6 26.9-38.6c-36.5-24-79.4-36.5-123-35.8-50.7-.8-111.7 27.2-111.7 76.2 0 18.7 11.2 20.7 28.6 15.6 23.3-5.3 41.9.6 55.8 14 26.4 24.3 23.2 67.6-.7 91.9-29.2 29.5-85.2 27.3-114.8-8.4zm317.7 5.9c-15.5-18.8-38.9-29.4-63.2-28.6-38.1-2-71.1 28-70.5 67.2-.7 16.8 6 33 18.4 44.3 14.1 13.9 33 19.7 56.3 14.4 17.4-5.1 28.6-3.1 28.6 15.6 0 4.3-.5 8.5-1.4 12.7-16.7 40.9-59.5 64.4-121.4 64.4-51.9.2-102.4-16.4-144.1-47.3l33.7-39.4-35.6-27.4L0 406.3l15.4 13.8c52.5 46.8 120.4 72.5 190.7 72.2 51.4 0 94.4-10.5 133.6-44.1 57.1-51.4 54.2-149.2 20.3-189.6z" />
        </Icon>
    </>
}