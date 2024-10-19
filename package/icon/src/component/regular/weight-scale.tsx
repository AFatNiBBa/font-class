
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `weight-scale` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/weight-scale?s=regular weight-scale}
 * @preview ![weight-scale](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMjY0QzI3OC4xMjUgMjY0IDI5NiAyNDYuMTI1IDI5NiAyMjRDMjk2IDIxMy41IDI5MS43NSAyMDQgMjg1IDE5Ni44NzVMMzE4Ljc1IDExOC4yNUMzMjIuMjUgMTEwLjEyNSAzMTguMzc1IDEwMC43NSAzMTAuMjUgOTcuMjVDMzAyLjI1IDkzLjc1IDI5Mi43NSA5Ny41IDI4OS4yNSAxMDUuNzVMMjU1Ljc1IDE4NEMyMzMuNzUgMTg0LjI1IDIxNiAyMDIgMjE2IDIyNEMyMTYgMjQ2LjEyNSAyMzMuODc1IDI2NCAyNTYgMjY0Wk00NDAgNjRIMzkxLjc2OEMzNTkuNDg2IDI0LjkxNCAzMTAuNjU0IDAgMjU2IDBDMjAxLjM0OCAwIDE1Mi41MTQgMjQuOTE0IDEyMC4yMzIgNjRINzJDMzIuMjk3IDY0IDAgOTYuMzEyIDAgMTM2VjQ0MEMwIDQ3OS42ODggMzIuMjk3IDUxMiA3MiA1MTJINDQwQzQ3OS43MDMgNTEyIDUxMiA0NzkuNjg4IDUxMiA0NDBWMTM2QzUxMiA5Ni4zMTIgNDc5LjcwMyA2NCA0NDAgNjRaTTI1NiA0OEMzMjYuNTggNDggMzg0IDEwNS40MjIgMzg0IDE3NlMzMjYuNTggMzA0IDI1NiAzMDRTMTI4IDI0Ni41NzggMTI4IDE3NlMxODUuNDIgNDggMjU2IDQ4Wk00NjQgNDQwQzQ2NCA0NTMuMjE5IDQ1My4yMzQgNDY0IDQ0MCA0NjRINzJDNTguNzY2IDQ2NCA0OCA0NTMuMjE5IDQ4IDQ0MFYxMzZDNDggMTIyLjc4MSA1OC43NjYgMTEyIDcyIDExMkg5Mi4xODJDODQuNDE2IDEzMS44NTUgODAgMTUzLjM5MSA4MCAxNzZDODAgMjczLjIwMyAxNTguNzk5IDM1MiAyNTYgMzUyQzM1My4yMDMgMzUyIDQzMiAyNzMuMjAzIDQzMiAxNzZDNDMyIDE1My4zOTEgNDI3LjU4NiAxMzEuODU1IDQxOS44MiAxMTJINDQwQzQ1My4yMzQgMTEyIDQ2NCAxMjIuNzgxIDQ2NCAxMzZWNDQwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function WeightScale(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 264C278.125 264 296 246.125 296 224C296 213.5 291.75 204 285 196.875L318.75 118.25C322.25 110.125 318.375 100.75 310.25 97.25C302.25 93.75 292.75 97.5 289.25 105.75L255.75 184C233.75 184.25 216 202 216 224C216 246.125 233.875 264 256 264ZM440 64H391.768C359.486 24.914 310.654 0 256 0C201.348 0 152.514 24.914 120.232 64H72C32.297 64 0 96.312 0 136V440C0 479.688 32.297 512 72 512H440C479.703 512 512 479.688 512 440V136C512 96.312 479.703 64 440 64ZM256 48C326.58 48 384 105.422 384 176S326.58 304 256 304S128 246.578 128 176S185.42 48 256 48ZM464 440C464 453.219 453.234 464 440 464H72C58.766 464 48 453.219 48 440V136C48 122.781 58.766 112 72 112H92.182C84.416 131.855 80 153.391 80 176C80 273.203 158.799 352 256 352C353.203 352 432 273.203 432 176C432 153.391 427.586 131.855 419.82 112H440C453.234 112 464 122.781 464 136V440Z" />
        </Icon>
    </>
}