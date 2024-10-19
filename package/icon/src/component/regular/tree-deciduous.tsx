
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `tree-deciduous` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tree-deciduous?s=regular tree-deciduous}
 * @preview ![tree-deciduous](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTMuMjgxIDIxNi4wMzFDNDg2LjY0MSAyMDYuMzc1IDQ3NS4xNDEgMTk2LjkwNiA0NjUuMjE5IDE4OS43ODFDNDY4Ljc2NiAxNzcuNSA0NjkuNjQxIDE2NC45MzggNDY3Ljc5NyAxNTIuMjVDNDY0LjkwNiAxMzIuMzQ0IDQ1Ni41MTYgMTE0Ljk2OSA0NDIuODQ0IDEwMC42MjVDNDI5LjMxMiA4Ni40MzggNDEyLjY3MiA3Ni45MzggMzkzLjM3NSA3Mi40MDZDMzgyLjQzOCA2OS43ODEgMzcxLjQ4NCA2OS4xNTYgMzYwLjQ4NCA3MC42MjVDMzU0LjM0NCA1NC4zNzUgMzQ0LjIzNCA0MC4wMzEgMzMwLjI1IDI3LjgxM0MzMDkuMTQxIDkuMzQ0IDI4NC4xNzIgMCAyNTYgMFMyMDIuODU5IDkuMzQ0IDE4MS43NSAyNy44MTJDMTY3Ljc2NiA0MC4wMzEgMTU3LjY1NiA1NC4zNzUgMTUxLjUxNiA3MC42MjVDMTQwLjUgNjkuMTg4IDEyOS41NjIgNjkuNzgxIDExOC42MjUgNzIuNDA2Qzk5LjMyOCA3Ni45MzggODIuNjg4IDg2LjQzOCA2OS4xNTYgMTAwLjYyNUM1NS40ODQgMTE0Ljk2OSA0Ny4wOTQgMTMyLjM0NCA0NC4yMDMgMTUyLjI1QzQyLjQyMiAxNjQuNDY5IDQzLjI1IDE3Ni41IDQ2LjYyNSAxODguMjVDMzUuNjcyIDE5NS42NTYgMjYuMzQ0IDIwNC45MzggMTguNzE5IDIxNi4wMzFDNi4yOTcgMjM0LjA5NCAwIDI1NC4yODEgMCAyNzZDMCAzMDUuOTY5IDExIDMzMS43ODEgMzIuNjg4IDM1Mi43NUM1NC4xNDEgMzczLjUgODAuNDg0IDM4NCAxMTEgMzg0SDIzMi4yMDVMMjMyLjI5NyA0ODguMDMxQzIzMi4zMTIgNTAxLjI4MSAyNDMuMDQ3IDUxMiAyNTYuMjk3IDUxMkMyNTYuMjk3IDUxMiAyNTYuMzEyIDUxMiAyNTYuMzI4IDUxMkMyNjkuNTc4IDUxMiAyODAuMzEyIDUwMS4yMTkgMjgwLjI5NyA0ODcuOTY5TDI4MC4yMDUgMzg0SDQwMUM0MzEuNTE2IDM4NCA0NTcuODU5IDM3My41IDQ3OS4zMTIgMzUyLjc1QzUwMSAzMzEuNzgxIDUxMiAzMDUuOTY5IDUxMiAyNzZDNTEyIDI1NC4yODEgNTA1LjcwMyAyMzQuMDk0IDQ5My4yODEgMjE2LjAzMVpNNDQ1LjkzOCAzMTguMjVDNDMzLjU3OCAzMzAuMTg4IDQxOC44OTEgMzM2IDQwMSAzMzZIMjgwLjE2MkwyODAuMTU2IDMyOS43ODFMMzM2Ljk2OSAyNzIuOTY5QzM0Ni4zNDQgMjYzLjU5NCAzNDYuMzQ0IDI0OC40MDYgMzM2Ljk2OSAyMzkuMDMxUzMxMi40MDYgMjI5LjY1NiAzMDMuMDMxIDIzOS4wMzFMMjgwLjA5OCAyNjEuOTY1TDI4MCAxNTEuOTY5QzI3OS45ODQgMTM4LjcxOSAyNjkuMjUgMTI4IDI1NiAxMjhDMjU2IDEyOCAyNTUuOTg0IDEyOCAyNTUuOTY5IDEyOEMyNDIuNzE5IDEyOCAyMzEuOTg0IDEzOC43ODEgMjMyIDE1Mi4wMzFMMjMyLjA1NSAyMTQuMTE3TDIwOC45NjkgMTkxLjAzMUMxOTkuNTk0IDE4MS42NTYgMTg0LjQwNiAxODEuNjU2IDE3NS4wMzEgMTkxLjAzMVMxNjUuNjU2IDIxNS41OTQgMTc1LjAzMSAyMjQuOTY5TDIzMi4xMTUgMjgyLjA1M0wyMzIuMTQ4IDMxOS4yNEMyMzIuMTMzIDMxOS43NTggMjMyLjEzMyAzMjAuMjQ2IDIzMi4xNDggMzIwLjc2NkwyMzIuMTYyIDMzNkgxMTFDOTMuMTA5IDMzNiA3OC40MjIgMzMwLjE4OCA2Ni4wNjIgMzE4LjI1QzUzLjkwNiAzMDYuNSA0OCAyOTIuNjg4IDQ4IDI3NkM0OCAyNjQgNTEuMzU5IDI1My4yODEgNTguMjgxIDI0My4yMTlDNjUuMTU2IDIzMy4yMTkgNzQuMzI4IDIyNi4wMzEgODYuMjgxIDIyMS4zMTJMMTEyLjc1IDIxMC44NzVMOTcuOTg0IDE4Ni41MzFDOTIuNDIyIDE3Ny4zNzUgOTAuMzU5IDE2OC40MDYgOTEuNzAzIDE1OS4xMjVDOTMuMTU2IDE0OS4xMjUgOTcuMTQxIDE0MC44NDQgMTAzLjkwNiAxMzMuNzVDMTExIDEyNi4zMTIgMTE5LjQyMiAxMjEuNTMxIDEyOS42NTYgMTE5LjEyNUMxMzMuMDYyIDExOC4zMTIgMTM2LjQ4NCAxMTcuOTA2IDEzOS45MDYgMTE3LjkwNkMxNDYuMzU5IDExNy45MDYgMTUyLjg1OSAxMTkuMzEyIDE1OS41NjIgMTIyLjE4OEwxODkuMzEyIDEzNC45MDZMMTkyLjg1OSAxMDIuNzVDMTk0LjU2MiA4Ny4xODggMjAxLjI2NiA3NC41IDIxMy4zNDQgNjMuOTM4QzIzNy44NzUgNDIuNSAyNzQuMTI1IDQyLjUgMjk4LjY1NiA2My45MzhDMzEwLjczNCA3NC41IDMxNy40MzggODcuMTg4IDMxOS4xNDEgMTAyLjc1TDMyMi42ODcgMTM0LjkwNkwzNTIuNDM3IDEyMi4xODhDMzYyLjcwMyAxMTcuODEyIDM3Mi41IDExNi44MTIgMzgyLjM0NCAxMTkuMTI1QzM5Mi41NzggMTIxLjUzMSA0MDEgMTI2LjMxMyA0MDguMDk0IDEzMy43NUM0MTQuODU5IDE0MC44NDQgNDE4Ljg0NCAxNDkuMTI1IDQyMC4yOTcgMTU5LjEyNUM0MjEuNjcyIDE2OC42MjUgNDE5Ljc2NiAxNzcuODQ0IDQxNC40ODQgMTg3LjMxM0w0MDMuMDQ3IDIwNy44MTNMNDIzLjMxMiAyMTkuNzE5QzQzNC44NDQgMjI2LjQ2OSA0NDkuODEyIDIzNy41MzEgNDUzLjcxOSAyNDMuMjE5QzQ2MC42NDEgMjUzLjI4MSA0NjQgMjY0IDQ2NCAyNzZDNDY0IDI5Mi42ODggNDU4LjA5NCAzMDYuNSA0NDUuOTM4IDMxOC4yNVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function TreeDeciduous(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M493.281 216.031C486.641 206.375 475.141 196.906 465.219 189.781C468.766 177.5 469.641 164.938 467.797 152.25C464.906 132.344 456.516 114.969 442.844 100.625C429.312 86.438 412.672 76.938 393.375 72.406C382.438 69.781 371.484 69.156 360.484 70.625C354.344 54.375 344.234 40.031 330.25 27.813C309.141 9.344 284.172 0 256 0S202.859 9.344 181.75 27.812C167.766 40.031 157.656 54.375 151.516 70.625C140.5 69.188 129.562 69.781 118.625 72.406C99.328 76.938 82.688 86.438 69.156 100.625C55.484 114.969 47.094 132.344 44.203 152.25C42.422 164.469 43.25 176.5 46.625 188.25C35.672 195.656 26.344 204.938 18.719 216.031C6.297 234.094 0 254.281 0 276C0 305.969 11 331.781 32.688 352.75C54.141 373.5 80.484 384 111 384H232.205L232.297 488.031C232.312 501.281 243.047 512 256.297 512C256.297 512 256.312 512 256.328 512C269.578 512 280.312 501.219 280.297 487.969L280.205 384H401C431.516 384 457.859 373.5 479.312 352.75C501 331.781 512 305.969 512 276C512 254.281 505.703 234.094 493.281 216.031ZM445.938 318.25C433.578 330.188 418.891 336 401 336H280.162L280.156 329.781L336.969 272.969C346.344 263.594 346.344 248.406 336.969 239.031S312.406 229.656 303.031 239.031L280.098 261.965L280 151.969C279.984 138.719 269.25 128 256 128C256 128 255.984 128 255.969 128C242.719 128 231.984 138.781 232 152.031L232.055 214.117L208.969 191.031C199.594 181.656 184.406 181.656 175.031 191.031S165.656 215.594 175.031 224.969L232.115 282.053L232.148 319.24C232.133 319.758 232.133 320.246 232.148 320.766L232.162 336H111C93.109 336 78.422 330.188 66.062 318.25C53.906 306.5 48 292.688 48 276C48 264 51.359 253.281 58.281 243.219C65.156 233.219 74.328 226.031 86.281 221.312L112.75 210.875L97.984 186.531C92.422 177.375 90.359 168.406 91.703 159.125C93.156 149.125 97.141 140.844 103.906 133.75C111 126.312 119.422 121.531 129.656 119.125C133.062 118.312 136.484 117.906 139.906 117.906C146.359 117.906 152.859 119.312 159.562 122.188L189.312 134.906L192.859 102.75C194.562 87.188 201.266 74.5 213.344 63.938C237.875 42.5 274.125 42.5 298.656 63.938C310.734 74.5 317.438 87.188 319.141 102.75L322.687 134.906L352.437 122.188C362.703 117.812 372.5 116.812 382.344 119.125C392.578 121.531 401 126.313 408.094 133.75C414.859 140.844 418.844 149.125 420.297 159.125C421.672 168.625 419.766 177.844 414.484 187.313L403.047 207.813L423.312 219.719C434.844 226.469 449.812 237.531 453.719 243.219C460.641 253.281 464 264 464 276C464 292.688 458.094 306.5 445.938 318.25Z" />
        </Icon>
    </>
}