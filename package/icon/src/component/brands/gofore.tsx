
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `gofore` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/gofore?s=brands gofore}
 * @preview ![gofore](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjQgMzE5LjhoLTEzLjJ2MzQuN2MtMjQuNSAyMy4xLTU2LjMgMzUuOC04OS45IDM1LjgtNzMuMiAwLTEzMi40LTYwLjItMTMyLjQtMTM0LjQgMC03NC4xIDU5LjItMTM0LjQgMTMyLjQtMTM0LjQgMzUuMyAwIDY4LjYgMTQgOTMuNiAzOS40bDYyLjMtNjMuM0MzMzUgNTUuMyAyNzkuNyAzMiAyMjAuNyAzMiA5OCAzMiAwIDEzMi42IDAgMjU2YzAgMTIyLjUgOTcgMjI0IDIyMC43IDIyNCA2My4yIDAgMTI0LjUtMjYuMiAxNzEtODIuNS0yLTI3LjYtMTMuNC03Ny43LTY3LjctNzcuN3ptLTEyLjEtMTEyLjVIMjA1LjZ2ODlIMzI0YzMzLjUgMCA2MC41IDE1LjEgNzYgNDEuOHYtMzAuNmMwLTY1LjItNDAuNC0xMDAuMi04OC4xLTEwMC4yeiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Gofore(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 400 512" {...props}>
            <path d="M324 319.8h-13.2v34.7c-24.5 23.1-56.3 35.8-89.9 35.8-73.2 0-132.4-60.2-132.4-134.4 0-74.1 59.2-134.4 132.4-134.4 35.3 0 68.6 14 93.6 39.4l62.3-63.3C335 55.3 279.7 32 220.7 32 98 32 0 132.6 0 256c0 122.5 97 224 220.7 224 63.2 0 124.5-26.2 171-82.5-2-27.6-13.4-77.7-67.7-77.7zm-12.1-112.5H205.6v89H324c33.5 0 60.5 15.1 76 41.8v-30.6c0-65.2-40.4-100.2-88.1-100.2z" />
        </Icon>
    </>
}