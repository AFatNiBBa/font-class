
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-rainbow` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-rainbow?s=regular cloud-rainbow}
 * @preview ![cloud-rainbow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NjAuNjI1IDQ4LjAxMkM1NjkuMjUgNDcuNjM3IDU3NiA0MC44ODcgNTc2IDMyLjI2MlYxNi4yNjNDNTc2IDcuMjYzIDU2OC4zNzUgLTAuMzYyIDU1OS4zNzUgMC4wMTNDNDE5LjI1IDYuMDEzIDI5OC41IDg3LjI2MSAyMzUuODc1IDIwNC4yNThDMjIwIDE5Ni4zODMgMjAyLjM3NSAxOTIuMDA4IDE4NCAxOTIuMDA4QzEyMCAxOTIuMDA4IDY3LjYyNSAyNDIuMjU3IDY0LjI1IDMwNS4zOEMyNS42MjUgMzIyLjM4IDAgMzYwLjUwNCAwIDQwNC4wMDNDMCA0NjMuNTAxIDQ4LjM3NSA1MTIgMTA4IDUxMkg0MDRDNDYzLjYyNSA1MTIgNTEyIDQ2My41MDEgNTEyIDQwNC4wMDNDNTEyIDM2NS41MDQgNDkxLjYyNSAzMzIuMTMgNDYxLjI1IDMxMi44OEM0ODQuODc1IDI4Mi4yNTYgNTIwLjI1IDI2MC44ODIgNTYwLjg3NSAyNTYuNzU3QzU2OS4yNSAyNTUuNzU3IDU3NiAyNDkuMjU3IDU3NiAyNDAuNzU3VjIyNC43NTdDNTc2IDIxNS41MDggNTY4LjI1IDIwNy43NTggNTU5LjI1IDIwOC42MzNDNDk4LjI1IDIxMy44ODMgNDQ1LjM3NSAyNDcuNzU3IDQxMy43NSAyOTYuNTA2QzQxMi43NSAyOTYuMzgxIDQxMS43NSAyOTYuMTMxIDQxMC43NSAyOTYuMDA2QzQwNS4xMjUgMjc4LjI1NiAzOTQuNzUgMjYyLjg4MSAzODEuMzc1IDI1MC43NTdDNDIyLjYyNSAxOTQuNzU4IDQ4Ny4xMjUgMTU2Ljg4NCA1NjAuNzUgMTUyLjI1OUM1NjkuMjUgMTUxLjc1OSA1NzYgMTQ1LjEzNCA1NzYgMTM2LjUxVjEyMC41MUM1NzYgMTExLjM4NSA1NjguMzc1IDEwMy43NjEgNTU5LjI1IDEwNC4yNjFDNDY4LjI1IDEwOS41MSAzODguNjI1IDE1Ny4yNTkgMzM5LjI1IDIyNy43NTdDMzMwLjUgMjI1LjI1NyAzMjEuMzc1IDIyMy43NTcgMzEyIDIyMy43NTdDMzAwIDIyMy43NTcgMjg4LjI1IDIyNi4yNTcgMjc3IDIzMC4yNTdDMzMxLjI1IDEyNi41MSA0MzYuODc1IDUzLjYzNyA1NjAuNjI1IDQ4LjAxMlpNMzEyIDI3Mi4wMDZDMzQwLjYyNSAyNzIuMDA2IDM2NC4zNzUgMjkzLjc1NiAzNjcuMjUgMzIyLjM4TDM2OS41IDM0NC4wMDRINDA0QzQzNy4xMjUgMzQ0LjAwNCA0NjQgMzcwLjg3OSA0NjQgNDA0LjAwM1M0MzcuMTI1IDQ2NC4wMDEgNDA0IDQ2NC4wMDFIMTA4Qzc0Ljg3NSA0NjQuMDAxIDQ4IDQzNy4xMjcgNDggNDA0LjAwM0M0OCAzNzYuMDA0IDY3LjEyNSAzNTIuMDA0IDk0LjM3NSAzNDUuNzU0TDExNS4yNSAzNDAuODc5TDExMi4zNzUgMzE2LjAwNUMxMTIuMjUgMzE0Ljc1NSAxMTIgMzEzLjM4IDExMiAzMTIuMDA1QzExMiAyNzIuMjU2IDE0NC4yNSAyNDAuMDA3IDE4NCAyNDAuMDA3QzIwOS4yNSAyNDAuMDA3IDIzMi4yNSAyNTMuMTMyIDI0NS4zNzUgMjc1LjEzMUwyNTguNzUgMjk3LjI1NkwyNzkuNzUgMjgyLjI1NkMyODkuMzc1IDI3NS42MzEgMzAwLjUgMjcyLjAwNiAzMTIgMjcyLjAwNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CloudRainbow(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M560.625 48.012C569.25 47.637 576 40.887 576 32.262V16.263C576 7.263 568.375 -0.362 559.375 0.013C419.25 6.013 298.5 87.261 235.875 204.258C220 196.383 202.375 192.008 184 192.008C120 192.008 67.625 242.257 64.25 305.38C25.625 322.38 0 360.504 0 404.003C0 463.501 48.375 512 108 512H404C463.625 512 512 463.501 512 404.003C512 365.504 491.625 332.13 461.25 312.88C484.875 282.256 520.25 260.882 560.875 256.757C569.25 255.757 576 249.257 576 240.757V224.757C576 215.508 568.25 207.758 559.25 208.633C498.25 213.883 445.375 247.757 413.75 296.506C412.75 296.381 411.75 296.131 410.75 296.006C405.125 278.256 394.75 262.881 381.375 250.757C422.625 194.758 487.125 156.884 560.75 152.259C569.25 151.759 576 145.134 576 136.51V120.51C576 111.385 568.375 103.761 559.25 104.261C468.25 109.51 388.625 157.259 339.25 227.757C330.5 225.257 321.375 223.757 312 223.757C300 223.757 288.25 226.257 277 230.257C331.25 126.51 436.875 53.637 560.625 48.012ZM312 272.006C340.625 272.006 364.375 293.756 367.25 322.38L369.5 344.004H404C437.125 344.004 464 370.879 464 404.003S437.125 464.001 404 464.001H108C74.875 464.001 48 437.127 48 404.003C48 376.004 67.125 352.004 94.375 345.754L115.25 340.879L112.375 316.005C112.25 314.755 112 313.38 112 312.005C112 272.256 144.25 240.007 184 240.007C209.25 240.007 232.25 253.132 245.375 275.131L258.75 297.256L279.75 282.256C289.375 275.631 300.5 272.006 312 272.006Z" />
        </Icon>
    </>
}