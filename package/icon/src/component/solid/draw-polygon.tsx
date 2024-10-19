
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `draw-polygon` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/draw-polygon?s=solid draw-polygon}
 * @preview ![draw-polygon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzUyQzM4My42MjUgMzUyIDM4My4zNzUgMzUyLjEyNSAzODMgMzUyLjEyNUwzNDMuNzUgMjg2Ljc1QzM0OC44NzUgMjc3LjYyNSAzNTIgMjY3LjI1IDM1MiAyNTZDMzUyIDI0NC43NSAzNDguODc1IDIzNC4zNzUgMzQzLjc1IDIyNS4yNUwzODMgMTU5Ljg3NUMzODMuMzc1IDE1OS44NzUgMzgzLjYyNSAxNjAgMzg0IDE2MEM0MTkuMzc1IDE2MCA0NDggMTMxLjM3NSA0NDggOTZTNDE5LjM3NSAzMiAzODQgMzJDMzYwLjM3NSAzMiAzNDAgNDUgMzI4Ljg3NSA2NEgxMTkuMTI1QzEwOCA0NSA4Ny42MjUgMzIgNjQgMzJDMjguNjI1IDMyIDAgNjAuNjI1IDAgOTZDMCAxMTkuNjI1IDEzIDE0MCAzMiAxNTEuMTI1VjM2MC44NzVDMTMgMzcyIDAgMzkyLjM3NSAwIDQxNkMwIDQ1MS4zNzUgMjguNjI1IDQ4MCA2NCA0ODBDODcuNjI1IDQ4MCAxMDggNDY3IDExOS4xMjUgNDQ4SDMyOC44NzVDMzQwIDQ2NyAzNjAuMzc1IDQ4MCAzODQgNDgwQzQxOS4zNzUgNDgwIDQ0OCA0NTEuMzc1IDQ0OCA0MTZTNDE5LjM3NSAzNTIgMzg0IDM1MlpNOTYgMzYwLjg3NVYxNTEuMTI1QzEwNS42MjUgMTQ1LjUgMTEzLjUgMTM3LjYyNSAxMTkuMTI1IDEyOEgzMjcuNUwyODkgMTkyLjEyNUMyODguNjI1IDE5Mi4xMjUgMjg4LjM3NSAxOTIgMjg4IDE5MkMyNTIuNjI1IDE5MiAyMjQgMjIwLjYyNSAyMjQgMjU2UzI1Mi42MjUgMzIwIDI4OCAzMjBDMjg4LjM3NSAzMjAgMjg4LjYyNSAzMTkuODc1IDI4OSAzMTkuODc1TDMyNy41IDM4NEgxMTkuMTI1QzExMy41IDM3NC4zNzUgMTA1LjYyNSAzNjYuNSA5NiAzNjAuODc1Wk0yNzIgMjU2QzI3MiAyNDcuMTI1IDI3OS4xMjUgMjQwIDI4OCAyNDBTMzA0IDI0Ny4xMjUgMzA0IDI1NkMzMDQgMjY0Ljg3NSAyOTYuODc1IDI3MiAyODggMjcyUzI3MiAyNjQuODc1IDI3MiAyNTZaTTQwMCA5NkM0MDAgMTA0Ljg3NSAzOTIuODc1IDExMiAzODQgMTEyUzM2OCAxMDQuODc1IDM2OCA5NlMzNzUuMTI1IDgwIDM4NCA4MFM0MDAgODcuMTI1IDQwMCA5NlpNNjQgODBDNzIuODc1IDgwIDgwIDg3LjEyNSA4MCA5NlM3Mi44NzUgMTEyIDY0IDExMlM0OCAxMDQuODc1IDQ4IDk2UzU1LjEyNSA4MCA2NCA4MFpNNDggNDE2QzQ4IDQwNy4xMjUgNTUuMTI1IDQwMCA2NCA0MDBTODAgNDA3LjEyNSA4MCA0MTZTNzIuODc1IDQzMiA2NCA0MzJTNDggNDI0Ljg3NSA0OCA0MTZaTTM4NCA0MzJDMzc1LjEyNSA0MzIgMzY4IDQyNC44NzUgMzY4IDQxNlMzNzUuMTI1IDQwMCAzODQgNDAwUzQwMCA0MDcuMTI1IDQwMCA0MTZTMzkyLjg3NSA0MzIgMzg0IDQzMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function DrawPolygon(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 352C383.625 352 383.375 352.125 383 352.125L343.75 286.75C348.875 277.625 352 267.25 352 256C352 244.75 348.875 234.375 343.75 225.25L383 159.875C383.375 159.875 383.625 160 384 160C419.375 160 448 131.375 448 96S419.375 32 384 32C360.375 32 340 45 328.875 64H119.125C108 45 87.625 32 64 32C28.625 32 0 60.625 0 96C0 119.625 13 140 32 151.125V360.875C13 372 0 392.375 0 416C0 451.375 28.625 480 64 480C87.625 480 108 467 119.125 448H328.875C340 467 360.375 480 384 480C419.375 480 448 451.375 448 416S419.375 352 384 352ZM96 360.875V151.125C105.625 145.5 113.5 137.625 119.125 128H327.5L289 192.125C288.625 192.125 288.375 192 288 192C252.625 192 224 220.625 224 256S252.625 320 288 320C288.375 320 288.625 319.875 289 319.875L327.5 384H119.125C113.5 374.375 105.625 366.5 96 360.875ZM272 256C272 247.125 279.125 240 288 240S304 247.125 304 256C304 264.875 296.875 272 288 272S272 264.875 272 256ZM400 96C400 104.875 392.875 112 384 112S368 104.875 368 96S375.125 80 384 80S400 87.125 400 96ZM64 80C72.875 80 80 87.125 80 96S72.875 112 64 112S48 104.875 48 96S55.125 80 64 80ZM48 416C48 407.125 55.125 400 64 400S80 407.125 80 416S72.875 432 64 432S48 424.875 48 416ZM384 432C375.125 432 368 424.875 368 416S375.125 400 384 400S400 407.125 400 416S392.875 432 384 432Z" />
        </Icon>
    </>
}