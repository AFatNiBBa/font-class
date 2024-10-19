
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `hippo` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hippo?s=thin hippo}
 * @preview ![hippo](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMTQ0QzQzOS4xMjUgMTQ0IDQzMiAxNTEuMTI1IDQzMiAxNjBTNDM5LjEyNSAxNzYgNDQ4IDE3NlM0NjQgMTY4Ljg3NSA0NjQgMTYwUzQ1Ni44NzUgMTQ0IDQ0OCAxNDRaTTYzOS45NzUgMTc1Ljc1OEM2MzkuODM4IDEzMS42ODggNjA0LjEgOTYgNTYwIDk2QzUzOS4yMzYgOTYgNTIwLjQ5NiAxMDQuMTEzIDUwNi4yNzcgMTE3LjA4NkM0ODguNDI4IDg3LjQzOCA0NTEuNTg4IDY0IDQxNiA2NEM0MDQuNzUgNjQgMzk0IDY2LjI1IDM4NCA2OS44NzVWNTZDMzg0IDQyLjc1IDM3My4yNSAzMiAzNjAgMzJIMzQ0QzMzMC43NSAzMiAzMjAgNDIuNzUgMzIwIDU2VjEwNUMyODYgNzkuNjI1IDI0MS4yNSA2NCAxOTIgNjRDODYgNjQgMCAxMzUuNjI1IDAgMjI0VjQ0OEMwIDQ2NS42NzIgMTQuMzI2IDQ4MCAzMiA0ODBIODBDOTcuNjc0IDQ4MCAxMTIgNDY1LjY3MiAxMTIgNDQ4VjM5OS43MTlDMTM5LjgyMiA0MTAuMjAzIDE3Ny41NzIgNDE2IDIwOCA0MTZTMjc2LjE3OCA0MTAuMjAzIDMwNCAzOTkuNzE5VjQ0OEMzMDQgNDY1LjY3MiAzMTguMzI2IDQ4MCAzMzYgNDgwSDM4NEM0MDEuNjc0IDQ4MCA0MTYgNDY1LjY3MiA0MTYgNDQ4VjI4OEg1MzZWMzEyQzUzNiAzMjUuMjU0IDU0Ni43NDYgMzM2IDU2MCAzMzZINTg0QzU5Ny4yNTQgMzM2IDYwOCAzMjUuMjU0IDYwOCAzMTJWMjg4QzYyNS42MjUgMjg4IDY0MCAyNzMuNjI1IDY0MCAyNTZWMTc1LjkyNkM2NDAgMTc1Ljg3MSA2MzkuOTc1IDE3NS44MTIgNjM5Ljk3NSAxNzUuNzU4Wk01OTIgMzEyQzU5MiAzMTYuNDEgNTg4LjQxMiAzMjAgNTg0IDMyMEg1NjBDNTU1LjU5IDMyMCA1NTIgMzE2LjQxIDU1MiAzMTJWMjg4SDU5MlYzMTJaTTYyNCAyNTZDNjI0IDI2NC44MzYgNjE2LjgzNiAyNzIgNjA4IDI3Mkg0MDBWNDQ4QzQwMCA0NTYuODM2IDM5Mi44MzYgNDY0IDM4NCA0NjRIMzM2QzMyNy4xNjQgNDY0IDMyMCA0NTYuODM2IDMyMCA0NDhWMzkyLjkzOEMzMjYuNzU2IDM4OS44MTYgMzMzLjU2NiAzODYuNzk3IDM0MCAzODMuMDYyQzM0My44NDQgMzgwLjg0NCAzNDUuMTI1IDM3NS45NjkgMzQyLjkwNiAzNzIuMTU2QzM0MC42ODggMzY4LjI4MSAzMzUuNzE5IDM2Ni45NjkgMzMyIDM2OS4yNUMyNjIuNTYyIDQwOS41IDE1My40MzggNDA5LjUgODQgMzY5LjI1QzgwLjI1IDM2Ni45NjkgNzUuMjgxIDM2OC4yODEgNzMuMDk0IDM3Mi4xNTZDNzAuODc1IDM3NS45NjkgNzIuMTU2IDM4MC44NDQgNzYgMzgzLjA2MkM4Mi40MzQgMzg2Ljc5NyA4OS4yNDQgMzg5LjgxNiA5NiAzOTIuOTM4VjQ0OEM5NiA0NTYuODM2IDg4LjgzNiA0NjQgODAgNDY0SDMyQzIzLjE2NCA0NjQgMTYgNDU2LjgzNiAxNiA0NDhWMjI0QzE2IDE0NC41OTggOTQuOTUzIDgwIDE5MiA4MEMyMzUuNjkxIDgwIDI3Ny43NSA5My40MzQgMzEwLjQzIDExNy44MjRMMzIzLjIxNSAxMjcuMzY3QzMyOC40OTIgMTMxLjMwNSAzMzYgMTI3LjUzOSAzMzYgMTIwLjk1M1Y1NkMzMzYgNTEuNTgyIDMzOS41ODIgNDggMzQ0IDQ4SDM2MEMzNjQuNDE4IDQ4IDM2OCA1MS41ODIgMzY4IDU2VjkyLjY5NUwzODkuNDUzIDg0LjkxOEMzOTguNDUzIDgxLjY1NiA0MDcuMzg3IDgwIDQxNiA4MEM0NDQuNTUzIDgwIDQ3Ni43NTQgOTkuMDY2IDQ5Mi41NyAxMjUuMzRMNTAyLjY0MSAxNDIuMDYyTDUxNy4wNjMgMTI4LjkwNkM1MzguMjA3IDEwOS42MDkgNTY5LjY5NyAxMDUuNjU2IDU5NS45MzkgMTIzLjE4QzYxMy43MDEgMTM1LjAzNSA2MjMuODI0IDE1NS40OTIgNjIzLjk4MiAxNzYuODQ4TDYyMy45ODggMTc3LjYwNUw2MjQgMTc3LjY2VjI1NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Hippo(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M448 144C439.125 144 432 151.125 432 160S439.125 176 448 176S464 168.875 464 160S456.875 144 448 144ZM639.975 175.758C639.838 131.688 604.1 96 560 96C539.236 96 520.496 104.113 506.277 117.086C488.428 87.438 451.588 64 416 64C404.75 64 394 66.25 384 69.875V56C384 42.75 373.25 32 360 32H344C330.75 32 320 42.75 320 56V105C286 79.625 241.25 64 192 64C86 64 0 135.625 0 224V448C0 465.672 14.326 480 32 480H80C97.674 480 112 465.672 112 448V399.719C139.822 410.203 177.572 416 208 416S276.178 410.203 304 399.719V448C304 465.672 318.326 480 336 480H384C401.674 480 416 465.672 416 448V288H536V312C536 325.254 546.746 336 560 336H584C597.254 336 608 325.254 608 312V288C625.625 288 640 273.625 640 256V175.926C640 175.871 639.975 175.812 639.975 175.758ZM592 312C592 316.41 588.412 320 584 320H560C555.59 320 552 316.41 552 312V288H592V312ZM624 256C624 264.836 616.836 272 608 272H400V448C400 456.836 392.836 464 384 464H336C327.164 464 320 456.836 320 448V392.938C326.756 389.816 333.566 386.797 340 383.062C343.844 380.844 345.125 375.969 342.906 372.156C340.688 368.281 335.719 366.969 332 369.25C262.562 409.5 153.438 409.5 84 369.25C80.25 366.969 75.281 368.281 73.094 372.156C70.875 375.969 72.156 380.844 76 383.062C82.434 386.797 89.244 389.816 96 392.938V448C96 456.836 88.836 464 80 464H32C23.164 464 16 456.836 16 448V224C16 144.598 94.953 80 192 80C235.691 80 277.75 93.434 310.43 117.824L323.215 127.367C328.492 131.305 336 127.539 336 120.953V56C336 51.582 339.582 48 344 48H360C364.418 48 368 51.582 368 56V92.695L389.453 84.918C398.453 81.656 407.387 80 416 80C444.553 80 476.754 99.066 492.57 125.34L502.641 142.062L517.063 128.906C538.207 109.609 569.697 105.656 595.939 123.18C613.701 135.035 623.824 155.492 623.982 176.848L623.988 177.605L624 177.66V256Z" />
        </Icon>
    </>
}