
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `skeleton` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/skeleton?s=solid skeleton}
 * @preview ![skeleton](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTYgMTYwSDI4OFYxMjhINDMyQzQ0MC44NzUgMTI4IDQ0OCAxMjAuODc1IDQ0OCAxMTJWODBDNDQ4IDcxLjEyNSA0NDAuODc1IDY0IDQzMiA2NEgyODhWMTZDMjg4IDcuMTI1IDI4MC44NzUgMCAyNzIgMEgyNDBDMjMxLjEyNSAwIDIyNCA3LjEyNSAyMjQgMTZWNjRIODBDNzEuMTI1IDY0IDY0IDcxLjEyNSA2NCA4MFYxMTJDNjQgMTIwLjg3NSA3MS4xMjUgMTI4IDgwIDEyOEgyMjRWMTYwSDE2QzcuMTI1IDE2MCAwIDE2Ny4xMjUgMCAxNzZWMjA4QzAgMjE2Ljg3NSA3LjEyNSAyMjQgMTYgMjI0SDIyNFYyNTZIODBDNzEuMTI1IDI1NiA2NCAyNjMuMTI1IDY0IDI3MlYzMDRDNjQgMzEyLjg3NSA3MS4xMjUgMzIwIDgwIDMyMEgyMjRWMzUySDExMi4wNzRDNzQuNzY0IDM1MiA1MS43MTkgMzkyLjcwMyA3MC45MTQgNDI0LjY5NUwxMTMuOTc1IDQ5Ni40NjNDMTE5Ljc1OCA1MDYuMTAyIDEzMC4xNzYgNTEyIDE0MS40MTYgNTEySDM3MC41ODRDMzgxLjgyNCA1MTIgMzkyLjI0MiA1MDYuMTAyIDM5OC4wMjUgNDk2LjQ2M0w0NDEuMDg2IDQyNC42OTVDNDYwLjI4MSAzOTIuNzAzIDQzNy4yMzYgMzUyIDM5OS45MjYgMzUySDI4OFYzMjBINDMyQzQ0MC44NzUgMzIwIDQ0OCAzMTIuODc1IDQ0OCAzMDRWMjcyQzQ0OCAyNjMuMTI1IDQ0MC44NzUgMjU2IDQzMiAyNTZIMjg4VjIyNEg0OTZDNTA0Ljg3NSAyMjQgNTEyIDIxNi44NzUgNTEyIDIwOFYxNzZDNTEyIDE2Ny4xMjUgNTA0Ljg3NSAxNjAgNDk2IDE2MFpNMjAwIDQ2NEMxODYuNzQ2IDQ2NCAxNzYgNDUzLjI1NCAxNzYgNDQwUzE4Ni43NDYgNDE2IDIwMCA0MTZTMjI0IDQyNi43NDYgMjI0IDQ0MFMyMTMuMjU0IDQ2NCAyMDAgNDY0Wk0zMTIgNDE2QzMyNS4yNTQgNDE2IDMzNiA0MjYuNzQ2IDMzNiA0NDBTMzI1LjI1NCA0NjQgMzEyIDQ2NFMyODggNDUzLjI1NCAyODggNDQwUzI5OC43NDYgNDE2IDMxMiA0MTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Skeleton(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M496 160H288V128H432C440.875 128 448 120.875 448 112V80C448 71.125 440.875 64 432 64H288V16C288 7.125 280.875 0 272 0H240C231.125 0 224 7.125 224 16V64H80C71.125 64 64 71.125 64 80V112C64 120.875 71.125 128 80 128H224V160H16C7.125 160 0 167.125 0 176V208C0 216.875 7.125 224 16 224H224V256H80C71.125 256 64 263.125 64 272V304C64 312.875 71.125 320 80 320H224V352H112.074C74.764 352 51.719 392.703 70.914 424.695L113.975 496.463C119.758 506.102 130.176 512 141.416 512H370.584C381.824 512 392.242 506.102 398.025 496.463L441.086 424.695C460.281 392.703 437.236 352 399.926 352H288V320H432C440.875 320 448 312.875 448 304V272C448 263.125 440.875 256 432 256H288V224H496C504.875 224 512 216.875 512 208V176C512 167.125 504.875 160 496 160ZM200 464C186.746 464 176 453.254 176 440S186.746 416 200 416S224 426.746 224 440S213.254 464 200 464ZM312 416C325.254 416 336 426.746 336 440S325.254 464 312 464S288 453.254 288 440S298.746 416 312 416Z" />
        </Icon>
    </>
}