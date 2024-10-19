
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `luchador-mask` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/luchador-mask?s=light luchador-mask}
 * @preview ![luchador-mask](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMEMxMDAuMjUgMCAwIDEwMC4yNSAwIDIyNFYzNTJDMCA0NDAuMzc1IDcxLjYyNSA1MTIgMTYwIDUxMkgyODhDMzc2LjM3NSA1MTIgNDQ4IDQ0MC4zNzUgNDQ4IDM1MlYyMjRDNDQ4IDEwMC4yNSAzNDcuNzUgMCAyMjQgMFpNNDE2IDM1MkM0MTYgNDIyLjYyNSAzNTguNjI1IDQ4MCAyODggNDgwSDE2MEM4OS4zNzUgNDgwIDMyIDQyMi42MjUgMzIgMzUyVjIyNEMzMiAxMTguMTI1IDExOC4xMjUgMzIgMjI0IDMyUzQxNiAxMTguMTI1IDQxNiAyMjRWMzUyWk0yMjYuNSAyMjYuMjVDMjI1LjYyNSAyMjUuNSAyMjIuMjUgMjI1LjUgMjIxLjM3NSAyMjYuMjVDMjEzLjI1IDE4OC4yNSAxODIgMTYwIDE0NCAxNjBINzZDNjkuMzc1IDE2MCA2NCAxNjUuMzc1IDY0IDE3MlYyMDIuNzVDNjQgMjQ5Ljc1IDk5Ljc1IDI4OCAxNDQgMjg4SDE2Ni4zNzVDMTU5IDMwMC4yNSAxNTMuODc1IDMxMS41IDE1MC42MjUgMzIwLjg3NUMxMTkuNzUgMzI1LjUgOTYgMzUxLjg3NSA5NiAzODRDOTYgNDE5LjUgMTI1LjM3NSA0NDggMTYwLjg3NSA0NDhIMjg3QzMyMi41IDQ0OCAzNTEuODc1IDQxOS41IDM1MS44NzUgMzg0QzM1MS44NzUgMzUxLjg3NSAzMjguMjUgMzI1LjUgMjk3LjI1IDMyMC44NzVDMjk0IDMxMS4zNzUgMjg4Ljg3NSAzMDAuMjUgMjgxLjUgMjg4SDMwNEMzNDguMjUgMjg4IDM4NCAyNDkuNzUgMzg0IDIwMi43NVYxNzJDMzg0IDE2NS4zNzUgMzc4LjYyNSAxNjAgMzcyIDE2MEgzMDRDMjY2LjEyNSAxNjAgMjM0Ljc1IDE4OC4yNSAyMjYuNSAyMjYuMjVaTTI2Mi43NSAzMjBIMTg1LjI1QzE5Mi4xMjUgMzA1LjI1IDIwMy43NSAyODYuNjI1IDIyNCAyNjYuNzVDMjQ0LjI1IDI4Ni42MjUgMjU1Ljg3NSAzMDUuMjUgMjYyLjc1IDMyMFpNMTQ0IDI1NkMxMTcuNSAyNTYgOTYgMjMyLjEyNSA5NiAyMDIuNzVWMTkySDE0NEMxNzAuNSAxOTIgMTkyIDIxNS44NzUgMTkyIDI0NS4yNVYyNTRDMTkxLjM3NSAyNTQuNzUgMTkwLjc1IDI1NS4yNSAxOTAuMjUgMjU2SDE0NFpNMzIwIDM4NEMzMjAgNDAxLjYyNSAzMDUuNjI1IDQxNiAyODggNDE2SDE2MEMxNDIuMzc1IDQxNiAxMjggNDAxLjYyNSAxMjggMzg0UzE0Mi4zNzUgMzUyIDE2MCAzNTJIMjg4QzMwNS42MjUgMzUyIDMyMCAzNjYuMzc1IDMyMCAzODRaTTM1MiAyMDIuNzVDMzUyIDIzMi4xMjUgMzMwLjUgMjU2IDMwNCAyNTZIMjU3Ljc1QzI1Ny4yNSAyNTUuMjUgMjU2LjYyNSAyNTQuNzUgMjU2IDI1NFYyNDUuMjVDMjU2IDIxNS44NzUgMjc3LjUgMTkyIDMwNCAxOTJIMzUyVjIwMi43NVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function LuchadorMask(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M224 0C100.25 0 0 100.25 0 224V352C0 440.375 71.625 512 160 512H288C376.375 512 448 440.375 448 352V224C448 100.25 347.75 0 224 0ZM416 352C416 422.625 358.625 480 288 480H160C89.375 480 32 422.625 32 352V224C32 118.125 118.125 32 224 32S416 118.125 416 224V352ZM226.5 226.25C225.625 225.5 222.25 225.5 221.375 226.25C213.25 188.25 182 160 144 160H76C69.375 160 64 165.375 64 172V202.75C64 249.75 99.75 288 144 288H166.375C159 300.25 153.875 311.5 150.625 320.875C119.75 325.5 96 351.875 96 384C96 419.5 125.375 448 160.875 448H287C322.5 448 351.875 419.5 351.875 384C351.875 351.875 328.25 325.5 297.25 320.875C294 311.375 288.875 300.25 281.5 288H304C348.25 288 384 249.75 384 202.75V172C384 165.375 378.625 160 372 160H304C266.125 160 234.75 188.25 226.5 226.25ZM262.75 320H185.25C192.125 305.25 203.75 286.625 224 266.75C244.25 286.625 255.875 305.25 262.75 320ZM144 256C117.5 256 96 232.125 96 202.75V192H144C170.5 192 192 215.875 192 245.25V254C191.375 254.75 190.75 255.25 190.25 256H144ZM320 384C320 401.625 305.625 416 288 416H160C142.375 416 128 401.625 128 384S142.375 352 160 352H288C305.625 352 320 366.375 320 384ZM352 202.75C352 232.125 330.5 256 304 256H257.75C257.25 255.25 256.625 254.75 256 254V245.25C256 215.875 277.5 192 304 192H352V202.75Z" />
        </Icon>
    </>
}