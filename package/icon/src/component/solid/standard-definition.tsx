
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `standard-definition` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/standard-definition?s=solid standard-definition}
 * @preview ![standard-definition](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMjA4SDM1MlYzMDRIMzg0QzQxMC40NjkgMzA0IDQzMiAyODIuNDY5IDQzMiAyNTZTNDEwLjQ2OSAyMDggMzg0IDIwOFpNNTEyIDMySDY0QzI4LjY1NCAzMiAwIDYwLjY1MiAwIDk2VjQxNkMwIDQ1MS4zNDYgMjguNjU0IDQ4MCA2NCA0ODBINTEyQzU0Ny4zNDYgNDgwIDU3NiA0NTEuMzQ2IDU3NiA0MTZWOTZDNTc2IDYwLjY1MiA1NDcuMzQ2IDMyIDUxMiAzMlpNMjY4Ljg3NSAzMDUuMjAzQzI2My4wOTQgMzM0LjczNCAyMzUuMTg4IDM1Mi4wMTYgMTk1LjYyNSAzNTIuMDE2QzE4OC45NjkgMzUyLjAxNiAxODEuOTY5IDM1MS41MzEgMTc0LjcxOSAzNTAuNTMxQzE2MS4zMTMgMzQ4Ljc1IDE0Ny40MDYgMzQ0LjM1OSAxMzUuMTI1IDM0MC40NjlMMTI5LjQ2OSAzMzguNjcyQzExNy44NzUgMzM1LjA2MyAxMTEuMzc1IDMyMi43MzQgMTE1IDMxMS4xNDFDMTE4LjYyNSAyOTkuNTE2IDEzMC43ODEgMjkyLjk1MyAxNDIuNTMxIDI5Ni42NzJMMTQ4LjQzOCAyOTguNTE2QzE1OC45NjkgMzAxLjg1OSAxNzAuOTA2IDMwNS42NDEgMTgwLjU5NCAzMDYuOTIyQzIwNi41NjMgMzEwLjU2MyAyMjQuMTg4IDMwNC40MzggMjI1LjY4OCAyOTYuNzVDMjI2Ljk2OSAyOTAuMjk3IDIyMS43ODEgMjg2LjE3MiAxODYuNTMxIDI3Ny4yOTdMMTc5LjA2MiAyNzUuMzkxQzE1NyAyNjkuNjg4IDEwNS4zNzUgMjU2LjMxMiAxMTUuMTI1IDIwNi43ODFDMTIxLjg3NSAxNzIuMjgxIDE1OC44NzUgMTU0LjUgMjA5LjI4MSAxNjEuNDY5QzIyMC41NjIgMTYzLjAxNiAyMzIuNDM4IDE2Ni4zOTEgMjQwLjM3NSAxNjguODEyQzI1MiAxNzIuMzI4IDI1OC41OTQgMTg0LjYyNSAyNTUuMDYyIDE5Ni4yNUMyNTEuNSAyMDcuODQ0IDIzOS4yODEgMjE0LjUzMSAyMjcuNjI1IDIxMC45MDZDMjIxLjA5NCAyMDguOTM4IDIxMS41IDIwNi4xODggMjAzLjMxMiAyMDUuMDYyQzE3Ny41NjIgMjAxLjUzMSAxNTkuNzgxIDIwNy41NjIgMTU4LjMxMiAyMTUuMjVDMTU3LjUgMjE5LjQyMiAxNTYuNTYyIDIyNC4xMDkgMTkwLjA5NCAyMzIuNzk3TDE5Ny4yODEgMjM0LjYyNUMyMjcuNzUgMjQyLjI5NyAyNzguNzE5IDI1NS4xMjUgMjY4Ljg3NSAzMDUuMjAzWk0zODQgMzUySDMyOEMzMTQuNzUgMzUyIDMwNCAzNDEuMjUgMzA0IDMyOFYxODRDMzA0IDE3MC43NSAzMTQuNzUgMTYwIDMyOCAxNjBIMzg0QzQzNi45MzggMTYwIDQ4MCAyMDMuMDYyIDQ4MCAyNTZTNDM2LjkzOCAzNTIgMzg0IDM1MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function StandardDefinition(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M384 208H352V304H384C410.469 304 432 282.469 432 256S410.469 208 384 208ZM512 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H512C547.346 480 576 451.346 576 416V96C576 60.652 547.346 32 512 32ZM268.875 305.203C263.094 334.734 235.188 352.016 195.625 352.016C188.969 352.016 181.969 351.531 174.719 350.531C161.313 348.75 147.406 344.359 135.125 340.469L129.469 338.672C117.875 335.063 111.375 322.734 115 311.141C118.625 299.516 130.781 292.953 142.531 296.672L148.438 298.516C158.969 301.859 170.906 305.641 180.594 306.922C206.563 310.563 224.188 304.438 225.688 296.75C226.969 290.297 221.781 286.172 186.531 277.297L179.062 275.391C157 269.688 105.375 256.312 115.125 206.781C121.875 172.281 158.875 154.5 209.281 161.469C220.562 163.016 232.438 166.391 240.375 168.812C252 172.328 258.594 184.625 255.062 196.25C251.5 207.844 239.281 214.531 227.625 210.906C221.094 208.938 211.5 206.188 203.312 205.062C177.562 201.531 159.781 207.562 158.312 215.25C157.5 219.422 156.562 224.109 190.094 232.797L197.281 234.625C227.75 242.297 278.719 255.125 268.875 305.203ZM384 352H328C314.75 352 304 341.25 304 328V184C304 170.75 314.75 160 328 160H384C436.938 160 480 203.062 480 256S436.938 352 384 352Z" />
        </Icon>
    </>
}