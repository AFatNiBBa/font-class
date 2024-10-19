
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `eye` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/eye?s=solid eye}
 * @preview ![eye](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NzIuNTMxIDIzOC45NzNDNTE4LjI4MSAxMTUuNTI1IDQxMC45MzggMzIgMjg4IDMyUzU3LjY4OCAxMTUuNTggMy40NjkgMjM4Ljk3M0MxLjU2MiAyNDMuNDAyIDAgMjUxLjA0MSAwIDI1NkMwIDI2MC45NzcgMS41NjIgMjY4LjU5NiAzLjQ2OSAyNzMuMDI1QzU3LjcxOSAzOTYuNDczIDE2NS4wNjIgNDgwIDI4OCA0ODBTNTE4LjMxMiAzOTYuNDE4IDU3Mi41MzEgMjczLjAyNUM1NzQuNDM4IDI2OC41OTYgNTc2IDI2MC45NTcgNTc2IDI1NkM1NzYgMjUxLjAyMyA1NzQuNDM4IDI0My40MDIgNTcyLjUzMSAyMzguOTczWk00MzIgMjU2LjA2MkM0MzIgMzM1LjUxNiAzNjcuNTMxIDQwMCAyODguMDYyIDQwMEgyODhDMjA4LjUgNDAwIDE0NCAzMzUuNDg0IDE0NCAyNTZTMjA4LjUgMTEyIDI4OCAxMTJTNDMyIDE3Ni41MTYgNDMyIDI1NlYyNTYuMDYyWk0yODggMTYwSDI4Ny43ODFDMjg1LjQ4IDE2MC4wMjkgMjgyLjQyNiAxNjAuNDQxIDI3OS41MzkgMTYwLjc2NEMyODQuNzcgMTcwLjAzNyAyODggMTgwLjU5NCAyODggMTkyQzI4OCAyMjcuMzQ2IDI1OS4zNDYgMjU2IDIyNCAyNTZDMjEyLjU1MSAyNTYgMjAxLjk1OSAyNTIuNzQ4IDE5Mi42NiAyNDcuNDgyQzE5Mi4zNjMgMjUwLjQ3OSAxOTIgMjUzLjYyNSAxOTIgMjU2QzE5MiAzMDguOTk2IDIzNS4wMDQgMzUyIDI4OCAzNTJTMzg0IDMwOC45OTYgMzg0IDI1NlMzNDAuOTk2IDE2MCAyODggMTYwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Eye(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M572.531 238.973C518.281 115.525 410.938 32 288 32S57.688 115.58 3.469 238.973C1.562 243.402 0 251.041 0 256C0 260.977 1.562 268.596 3.469 273.025C57.719 396.473 165.062 480 288 480S518.312 396.418 572.531 273.025C574.438 268.596 576 260.957 576 256C576 251.023 574.438 243.402 572.531 238.973ZM432 256.062C432 335.516 367.531 400 288.062 400H288C208.5 400 144 335.484 144 256S208.5 112 288 112S432 176.516 432 256V256.062ZM288 160H287.781C285.48 160.029 282.426 160.441 279.539 160.764C284.77 170.037 288 180.594 288 192C288 227.346 259.346 256 224 256C212.551 256 201.959 252.748 192.66 247.482C192.363 250.479 192 253.625 192 256C192 308.996 235.004 352 288 352S384 308.996 384 256S340.996 160 288 160Z" />
        </Icon>
    </>
}