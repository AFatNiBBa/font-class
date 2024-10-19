
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `teeth-open` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/teeth-open?s=solid teeth-open}
 * @preview ![teeth-open](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgMjg4SDY0QzI4LjY1NCAyODggMCAzMTYuNjUyIDAgMzUyVjM4NEMwIDQzNy4wMiA0Mi45OCA0ODAgOTYgNDgwSDQ4MEM1MzMuMDIgNDgwIDU3NiA0MzcuMDIgNTc2IDM4NFYzNTJDNTc2IDMxNi42NTIgNTQ3LjM0NiAyODggNTEyIDI4OFpNMTQ0IDM2OEMxNDQgMzk0LjUgMTIyLjUgNDE2IDk2IDQxNlM0OCAzOTQuNSA0OCAzNjhWMzM2QzQ4IDMyNy4xMjUgNTUuMTI1IDMyMCA2NCAzMjBIMTI4QzEzNi44NzUgMzIwIDE0NCAzMjcuMTI1IDE0NCAzMzZWMzY4Wk0yNzIgMzY4QzI3MiAzOTQuNSAyNTAuNSA0MTYgMjI0IDQxNlMxNzYgMzk0LjUgMTc2IDM2OFYzMzZDMTc2IDMyNy4xMjUgMTgzLjEyNSAzMjAgMTkyIDMyMEgyNTZDMjY0Ljg3NSAzMjAgMjcyIDMyNy4xMjUgMjcyIDMzNlYzNjhaTTQwMCAzNjhDNDAwIDM5NC41IDM3OC41IDQxNiAzNTIgNDE2UzMwNCAzOTQuNSAzMDQgMzY4VjMzNkMzMDQgMzI3LjEyNSAzMTEuMTI1IDMyMCAzMjAgMzIwSDM4NEMzOTIuODc1IDMyMCA0MDAgMzI3LjEyNSA0MDAgMzM2VjM2OFpNNTI4IDM2OEM1MjggMzk0LjUgNTA2LjUgNDE2IDQ4MCA0MTZTNDMyIDM5NC41IDQzMiAzNjhWMzM2QzQzMiAzMjcuMTI1IDQzOS4xMjUgMzIwIDQ0OCAzMjBINTEyQzUyMC44NzUgMzIwIDUyOCAzMjcuMTI1IDUyOCAzMzZWMzY4Wk00ODAgMzJIOTZDNDIuOTggMzIgMCA3NC45OCAwIDEyOFYxOTJDMCAyMjcuMzQ2IDI4LjY1NCAyNTYgNjQgMjU2SDUxMkM1NDcuMzQ2IDI1NiA1NzYgMjI3LjM0NiA1NzYgMTkyVjEyOEM1NzYgNzQuOTggNTMzLjAyIDMyIDQ4MCAzMlpNMTQ0IDIwOEMxNDQgMjE2Ljg3NSAxMzYuODc1IDIyNCAxMjggMjI0SDY0QzU1LjEyNSAyMjQgNDggMjE2Ljg3NSA0OCAyMDhWMTc2QzQ4IDE0OS41IDY5LjUgMTI4IDk2IDEyOFMxNDQgMTQ5LjUgMTQ0IDE3NlYyMDhaTTI3MiAyMTAuMjg1QzI3MiAyMTcuODkzIDI2NS44OTMgMjI0IDI1OC4yODUgMjI0SDE4OS43MTVDMTgyLjEwNyAyMjQgMTc2IDIxNy44OTMgMTc2IDIxMC4yODVWMTQ0QzE3NiAxMTcuNTM1IDE5Ny41MzUgOTYgMjI0IDk2UzI3MiAxMTcuNTM1IDI3MiAxNDRWMjEwLjI4NVpNNDAwIDIxMC4yODVDNDAwIDIxNy44OTMgMzkzLjg5MyAyMjQgMzg2LjI4NSAyMjRIMzE3LjcxNUMzMTAuMTA3IDIyNCAzMDQgMjE3Ljg5MyAzMDQgMjEwLjI4NVYxNDRDMzA0IDExNy41MzUgMzI1LjUzNSA5NiAzNTIgOTZTNDAwIDExNy41MzUgNDAwIDE0NFYyMTAuMjg1Wk01MjggMjA4QzUyOCAyMTYuODc1IDUyMC44NzUgMjI0IDUxMiAyMjRINDQ4QzQzOS4xMjUgMjI0IDQzMiAyMTYuODc1IDQzMiAyMDhWMTc2QzQzMiAxNDkuNSA0NTMuNSAxMjggNDgwIDEyOFM1MjggMTQ5LjUgNTI4IDE3NlYyMDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function TeethOpen(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M512 288H64C28.654 288 0 316.652 0 352V384C0 437.02 42.98 480 96 480H480C533.02 480 576 437.02 576 384V352C576 316.652 547.346 288 512 288ZM144 368C144 394.5 122.5 416 96 416S48 394.5 48 368V336C48 327.125 55.125 320 64 320H128C136.875 320 144 327.125 144 336V368ZM272 368C272 394.5 250.5 416 224 416S176 394.5 176 368V336C176 327.125 183.125 320 192 320H256C264.875 320 272 327.125 272 336V368ZM400 368C400 394.5 378.5 416 352 416S304 394.5 304 368V336C304 327.125 311.125 320 320 320H384C392.875 320 400 327.125 400 336V368ZM528 368C528 394.5 506.5 416 480 416S432 394.5 432 368V336C432 327.125 439.125 320 448 320H512C520.875 320 528 327.125 528 336V368ZM480 32H96C42.98 32 0 74.98 0 128V192C0 227.346 28.654 256 64 256H512C547.346 256 576 227.346 576 192V128C576 74.98 533.02 32 480 32ZM144 208C144 216.875 136.875 224 128 224H64C55.125 224 48 216.875 48 208V176C48 149.5 69.5 128 96 128S144 149.5 144 176V208ZM272 210.285C272 217.893 265.893 224 258.285 224H189.715C182.107 224 176 217.893 176 210.285V144C176 117.535 197.535 96 224 96S272 117.535 272 144V210.285ZM400 210.285C400 217.893 393.893 224 386.285 224H317.715C310.107 224 304 217.893 304 210.285V144C304 117.535 325.535 96 352 96S400 117.535 400 144V210.285ZM528 208C528 216.875 520.875 224 512 224H448C439.125 224 432 216.875 432 208V176C432 149.5 453.5 128 480 128S528 149.5 528 176V208Z" />
        </Icon>
    </>
}