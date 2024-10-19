
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `pushed` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pushed?s=brands pushed}
 * @preview ![pushed](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MzIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDcgMTExLjlsLTk4LjUtOSAxNC0zMy40YzEwLjQtMjMuNS0xMC44LTQwLjQtMjguNy0zN0wyMi41IDc2LjljLTE1LjEgMi43LTI2IDE4LjMtMjEuNCAzNi42bDEwNS4xIDM0OC4zYzYuNSAyMS4zIDM2LjcgMjQuMiA0Ny43IDdsMzUuMy04MC44IDIzNS4yLTIzMS4zYzE2LjQtMTYuOCA0LjMtNDIuOS0xNy40LTQ0Ljh6TTI5Ny42IDUzLjZjNS4xLS43IDcuNSAyLjUgNS4yIDcuNEwyODYgMTAwLjkgMTA4LjYgODQuNmwxODktMzF6TTIyLjcgMTA3LjljLTMuMS01LjEgMS0xMCA2LjEtOS4xbDI0OC43IDIyLjctOTYuOSAyMzAuN0wyMi43IDEwNy45ek0xMzYgNDU2LjRjLTIuNiA0LTcuOSAzLjEtOS40LTEuMkw0My41IDE3OS43bDEyNy43IDE5Ny42Yy03IDE1LTM1LjIgNzkuMS0zNS4yIDc5LjF6bTI3Mi44LTMxNC41TDIxMC4xIDMzNy4zbDg5LjctMjEzLjcgMTA2LjQgOS43YzQgMS4xIDUuNyA1LjMgMi42IDguNnoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Pushed(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 432 512" {...props}>
            <path d="M407 111.9l-98.5-9 14-33.4c10.4-23.5-10.8-40.4-28.7-37L22.5 76.9c-15.1 2.7-26 18.3-21.4 36.6l105.1 348.3c6.5 21.3 36.7 24.2 47.7 7l35.3-80.8 235.2-231.3c16.4-16.8 4.3-42.9-17.4-44.8zM297.6 53.6c5.1-.7 7.5 2.5 5.2 7.4L286 100.9 108.6 84.6l189-31zM22.7 107.9c-3.1-5.1 1-10 6.1-9.1l248.7 22.7-96.9 230.7L22.7 107.9zM136 456.4c-2.6 4-7.9 3.1-9.4-1.2L43.5 179.7l127.7 197.6c-7 15-35.2 79.1-35.2 79.1zm272.8-314.5L210.1 337.3l89.7-213.7 106.4 9.7c4 1.1 5.7 5.3 2.6 8.6z" />
        </Icon>
    </>
}