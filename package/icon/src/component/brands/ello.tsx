
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `ello` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ello?s=brands ello}
 * @preview ![ello](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDggOEMxMTEuMDMgOCAwIDExOS4wMyAwIDI1NnMxMTEuMDMgMjQ4IDI0OCAyNDggMjQ4LTExMS4wMyAyNDgtMjQ4UzM4NC45NyA4IDI0OCA4em0xNDMuODQgMjg1LjJDMzc1LjMxIDM1OC41MSAzMTUuNzkgNDA0LjggMjQ4IDQwNC44cy0xMjcuMzEtNDYuMjktMTQzLjg0LTExMS42Yy0xLjY1LTcuNDQgMi40OC0xNS43MSA5LjkyLTE3LjM2IDcuNDQtMS42NSAxNS43MSAyLjQ4IDE3LjM2IDkuOTIgMTQuMDUgNTIuOTEgNjIgOTAuMTEgMTE2LjU2IDkwLjExczEwMi41MS0zNy4yIDExNi41Ni05MC4xMWMxLjY1LTcuNDQgOS45Mi0xMi40IDE3LjM2LTkuOTIgNy40NCAxLjY1IDEyLjQgOS45MiA5LjkyIDE3LjM2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Ello(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 496 512" {...props}>
            <path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm143.84 285.2C375.31 358.51 315.79 404.8 248 404.8s-127.31-46.29-143.84-111.6c-1.65-7.44 2.48-15.71 9.92-17.36 7.44-1.65 15.71 2.48 17.36 9.92 14.05 52.91 62 90.11 116.56 90.11s102.51-37.2 116.56-90.11c1.65-7.44 9.92-12.4 17.36-9.92 7.44 1.65 12.4 9.92 9.92 17.36z" />
        </Icon>
    </>
}