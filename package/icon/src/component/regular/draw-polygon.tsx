
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `draw-polygon` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/draw-polygon?s=regular draw-polygon}
 * @preview ![draw-polygon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzUyQzM4MC42MjUgMzUyIDM3Ny4zNzUgMzUyLjUgMzc0LjI1IDM1M0wzMzkgMjk0LjI1QzM0NyAyODMuNjI1IDM1MiAyNzAuMzc1IDM1MiAyNTZDMzUyIDI0MS42MjUgMzQ3IDIyOC4zNzUgMzM5IDIxNy43NUwzNzQuMjUgMTU5QzM3Ny4zNzUgMTU5LjUgMzgwLjYyNSAxNjAgMzg0IDE2MEM0MTkuMzc1IDE2MCA0NDggMTMxLjM3NSA0NDggOTZTNDE5LjM3NSAzMiAzODQgMzJDMzU3LjEyNSAzMiAzMzQuMjUgNDguNSAzMjQuNzUgNzJIMTIzLjI1QzExMy43NSA0OC41IDkwLjg3NSAzMiA2NCAzMkMyOC42MjUgMzIgMCA2MC42MjUgMCA5NkMwIDEyMi44NzUgMTYuNSAxNDUuNzUgNDAgMTU1LjI1VjM1Ni43NUMxNi41IDM2Ni4yNSAwIDM4OS4xMjUgMCA0MTZDMCA0NTEuMzc1IDI4LjYyNSA0ODAgNjQgNDgwQzkwLjg3NSA0ODAgMTEzLjc1IDQ2My41IDEyMy4yNSA0NDBIMzI0Ljc1QzMzNC4yNSA0NjMuNSAzNTcuMTI1IDQ4MCAzODQgNDgwQzQxOS4zNzUgNDgwIDQ0OCA0NTEuMzc1IDQ0OCA0MTZTNDE5LjM3NSAzNTIgMzg0IDM1MlpNODggMzU2Ljc1VjE1NS4yNUMxMDQgMTQ4Ljc1IDExNi43NSAxMzYgMTIzLjI1IDEyMEgzMjQuNzVDMzI2Ljg3NSAxMjUuMjUgMzI5Ljc1IDEyOS44NzUgMzMzIDEzNC4zNzVMMjk3Ljc1IDE5M0MyOTQuNjI1IDE5Mi41IDI5MS4zNzUgMTkyIDI4OCAxOTJDMjUyLjYyNSAxOTIgMjI0IDIyMC42MjUgMjI0IDI1NlMyNTIuNjI1IDMyMCAyODggMzIwQzI5MS4zNzUgMzIwIDI5NC42MjUgMzE5LjUgMjk3Ljc1IDMxOUwzMzMgMzc3LjYyNUMzMjkuNzUgMzgyLjEyNSAzMjYuODc1IDM4Ni44NzUgMzI0Ljc1IDM5MkgxMjMuMjVDMTE2Ljc1IDM3NiAxMDQgMzYzLjI1IDg4IDM1Ni43NVpNMjg4IDI0MEMyOTYuODc1IDI0MCAzMDQgMjQ3LjEyNSAzMDQgMjU2QzMwNCAyNjQuODc1IDI5Ni44NzUgMjcyIDI4OCAyNzJTMjcyIDI2NC44NzUgMjcyIDI1NkMyNzIgMjQ3LjEyNSAyNzkuMTI1IDI0MCAyODggMjQwWk0zODQgODBDMzkyLjg3NSA4MCA0MDAgODcuMTI1IDQwMCA5NlMzOTIuODc1IDExMiAzODQgMTEyUzM2OCAxMDQuODc1IDM2OCA5NlMzNzUuMTI1IDgwIDM4NCA4MFpNNjQgODBDNzIuODc1IDgwIDgwIDg3LjEyNSA4MCA5NlM3Mi44NzUgMTEyIDY0IDExMlM0OCAxMDQuODc1IDQ4IDk2UzU1LjEyNSA4MCA2NCA4MFpNNjQgNDMyQzU1LjEyNSA0MzIgNDggNDI0Ljg3NSA0OCA0MTZTNTUuMTI1IDQwMCA2NCA0MDBTODAgNDA3LjEyNSA4MCA0MTZTNzIuODc1IDQzMiA2NCA0MzJaTTM4NCA0MzJDMzc1LjEyNSA0MzIgMzY4IDQyNC44NzUgMzY4IDQxNlMzNzUuMTI1IDQwMCAzODQgNDAwUzQwMCA0MDcuMTI1IDQwMCA0MTZTMzkyLjg3NSA0MzIgMzg0IDQzMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function DrawPolygon(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 352C380.625 352 377.375 352.5 374.25 353L339 294.25C347 283.625 352 270.375 352 256C352 241.625 347 228.375 339 217.75L374.25 159C377.375 159.5 380.625 160 384 160C419.375 160 448 131.375 448 96S419.375 32 384 32C357.125 32 334.25 48.5 324.75 72H123.25C113.75 48.5 90.875 32 64 32C28.625 32 0 60.625 0 96C0 122.875 16.5 145.75 40 155.25V356.75C16.5 366.25 0 389.125 0 416C0 451.375 28.625 480 64 480C90.875 480 113.75 463.5 123.25 440H324.75C334.25 463.5 357.125 480 384 480C419.375 480 448 451.375 448 416S419.375 352 384 352ZM88 356.75V155.25C104 148.75 116.75 136 123.25 120H324.75C326.875 125.25 329.75 129.875 333 134.375L297.75 193C294.625 192.5 291.375 192 288 192C252.625 192 224 220.625 224 256S252.625 320 288 320C291.375 320 294.625 319.5 297.75 319L333 377.625C329.75 382.125 326.875 386.875 324.75 392H123.25C116.75 376 104 363.25 88 356.75ZM288 240C296.875 240 304 247.125 304 256C304 264.875 296.875 272 288 272S272 264.875 272 256C272 247.125 279.125 240 288 240ZM384 80C392.875 80 400 87.125 400 96S392.875 112 384 112S368 104.875 368 96S375.125 80 384 80ZM64 80C72.875 80 80 87.125 80 96S72.875 112 64 112S48 104.875 48 96S55.125 80 64 80ZM64 432C55.125 432 48 424.875 48 416S55.125 400 64 400S80 407.125 80 416S72.875 432 64 432ZM384 432C375.125 432 368 424.875 368 416S375.125 400 384 400S400 407.125 400 416S392.875 432 384 432Z" />
        </Icon>
    </>
}