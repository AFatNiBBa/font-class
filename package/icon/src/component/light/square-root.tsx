
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-root` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-root?s=light square-root}
 * @preview ![square-root](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIuMTI1IDQ3Ny4yN0MxODIuNjI1IDQ3My42NDUgMTc1LjI1IDQ2NS44OTQgMTcxIDQ1Ni42NDRMOTAgMjgxLjI2MUM4Ny41IDI3NS42MzYgODEuNzUgMjcyLjAxMSA3NS41IDI3Mi4wMTFIMTYuMDAxQzcuMiAyNzIuMDExIDAgMjY0LjgxMSAwIDI1Ni4wMVYyNTYuMDFDMCAyNDcuMjEgNy4yIDI0MC4wMDkgMTYuMDAxIDI0MC4wMDlINzUuNUM5NC4xMjUgMjQwLjAwOSAxMTEuMjUgMjUxLjAxIDExOS4xMjUgMjY3Ljg4NkwyMDAuMzc1IDQ0NC4xNDNDMjAyLjc1IDQ0OS4yNjkgMjExLjUgNDQ4LjUxOSAyMTMuMTI1IDQ0My4wMThMMzE0LjI1IDY3LjUwMkMzMTkuNzUgNDYuNjI2IDMzOC44NzUgMzIgMzYwLjUgMzJINTU5Ljk5OUM1NjguOCAzMiA1NzYgMzkuMiA1NzYgNDguMDAxVjQ4LjAwMUM1NzYgNTYuODAxIDU2OC44IDY0LjAwMSA1NTkuOTk5IDY0LjAwMUgzNjAuNUMzNTMuMjUgNjQuMDAxIDM0NyA2OC44NzcgMzQ1LjEyNSA3NS44NzdMMjQ0IDQ1MS4yNjlDMjM4LjEyNSA0NzIuNzcgMjE1IDQ4Ni4wMjEgMTkyLjEyNSA0NzcuMjdaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SquareRoot(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M192.125 477.27C182.625 473.645 175.25 465.894 171 456.644L90 281.261C87.5 275.636 81.75 272.011 75.5 272.011H16.001C7.2 272.011 0 264.811 0 256.01V256.01C0 247.21 7.2 240.009 16.001 240.009H75.5C94.125 240.009 111.25 251.01 119.125 267.886L200.375 444.143C202.75 449.269 211.5 448.519 213.125 443.018L314.25 67.502C319.75 46.626 338.875 32 360.5 32H559.999C568.8 32 576 39.2 576 48.001V48.001C576 56.801 568.8 64.001 559.999 64.001H360.5C353.25 64.001 347 68.877 345.125 75.877L244 451.269C238.125 472.77 215 486.021 192.125 477.27Z" />
        </Icon>
    </>
}