
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `vine` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/vine?s=brands vine}
 * @preview ![vine](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMjU0Ljd2NTIuMWMtMTguNCA0LjItMzYuOSA2LjEtNTIuMSA2LjEtMzYuOSA3Ny40LTEwMyAxNDMuOC0xMjUuMSAxNTYuMi0xNCA3LjktMjcuMSA4LjQtNDIuNy0uOEMxMzcgNDUyIDM0LjIgMzY3LjcgMCAxMDIuN2g3NC41QzkzLjIgMjYxLjggMTM5IDM0My40IDE4OS4zIDQwNC41YzI3LjktMjcuOSA1NC44LTY1LjEgNzUuNi0xMDYuOS00OS44LTI1LjMtODAuMS04MC45LTgwLjEtMTQ1LjYgMC02NS42IDM3LjctMTE1LjEgMTAyLjItMTE1LjEgMTE0LjkgMCAxMDYuMiAxMjcuOSA4MS42IDE4MS41IDAgMC00Ni40IDkuMi02My41LTIwLjUgMy40LTExLjMgOC4yLTMwLjggOC4yLTQ4LjUgMC0zMS4zLTExLjMtNDYuNi0yOC40LTQ2LjYtMTguMiAwLTMwLjggMTcuMS0zMC44IDUwIC4xIDc5LjIgNTkuNCAxMTguNyAxMjkuOSAxMDEuOXoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Vine(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M384 254.7v52.1c-18.4 4.2-36.9 6.1-52.1 6.1-36.9 77.4-103 143.8-125.1 156.2-14 7.9-27.1 8.4-42.7-.8C137 452 34.2 367.7 0 102.7h74.5C93.2 261.8 139 343.4 189.3 404.5c27.9-27.9 54.8-65.1 75.6-106.9-49.8-25.3-80.1-80.9-80.1-145.6 0-65.6 37.7-115.1 102.2-115.1 114.9 0 106.2 127.9 81.6 181.5 0 0-46.4 9.2-63.5-20.5 3.4-11.3 8.2-30.8 8.2-48.5 0-31.3-11.3-46.6-28.4-46.6-18.2 0-30.8 17.1-30.8 50 .1 79.2 59.4 118.7 129.9 101.9z" />
        </Icon>
    </>
}