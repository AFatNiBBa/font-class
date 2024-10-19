
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `speakers` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/speakers?s=regular speakers}
 * @preview ![speakers](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NTYgMTYwQzQ3OC4wOTIgMTYwIDQ5NiAxNDIuMDkyIDQ5NiAxMjBTNDc4LjA5MiA4MCA0NTYgODBTNDE2IDk3LjkwOCA0MTYgMTIwUzQzMy45MDggMTYwIDQ1NiAxNjBaTTU3NiAwSDMzNkMzMDAuNjU0IDAgMjcyIDI4LjY1MiAyNzIgNjRWNDQ4QzI3MiA0ODMuMzQ2IDMwMC42NTQgNTEyIDMzNiA1MTJINTc2QzYxMS4zNDYgNTEyIDY0MCA0ODMuMzQ2IDY0MCA0NDhWNjRDNjQwIDI4LjY1MiA2MTEuMzQ2IDAgNTc2IDBaTTU5MiA0NDhDNTkyIDQ1Ni44MjIgNTg0LjgyMiA0NjQgNTc2IDQ2NEgzMzZDMzI3LjE3OCA0NjQgMzIwIDQ1Ni44MjIgMzIwIDQ0OFY2NEMzMjAgNTUuMTc4IDMyNy4xNzggNDggMzM2IDQ4SDU3NkM1ODQuODIyIDQ4IDU5MiA1NS4xNzggNTkyIDY0VjQ0OFpNNDU2IDIyNEMzOTguNTYyIDIyNCAzNTIgMjcwLjU2MiAzNTIgMzI4UzM5OC41NjIgNDMyIDQ1NiA0MzJTNTYwIDM4NS40MzggNTYwIDMyOFM1MTMuNDM4IDIyNCA0NTYgMjI0Wk00NTYgMzg0QzQyNS4xMjEgMzg0IDQwMCAzNTguODc3IDQwMCAzMjhDNDAwIDI5Ny4xMjEgNDI1LjEyMSAyNzIgNDU2IDI3MlM1MTIgMjk3LjEyMSA1MTIgMzI4QzUxMiAzNTguODc3IDQ4Ni44NzkgMzg0IDQ1NiAzODRaTTE4NCA4MEMxNjEuOTA4IDgwIDE0NCA5Ny45MDggMTQ0IDEyMFMxNjEuOTA4IDE2MCAxODQgMTYwUzIyNCAxNDIuMDkyIDIyNCAxMjBTMjA2LjA5MiA4MCAxODQgODBaTTE4NCAyNzJDMTk5LjY3NiAyNzIgMjEzLjgyNCAyNzguNTEyIDIyNCAyODguOTI4VjIzMi4zNDZDMjExLjY3NCAyMjcuMTE1IDE5OC4yNCAyMjQgMTg0IDIyNEMxMjYuNTYyIDIyNCA4MCAyNzAuNTYyIDgwIDMyOFMxMjYuNTYyIDQzMiAxODQgNDMyQzE5OC4yNCA0MzIgMjExLjY3NCA0MjguODg1IDIyNCA0MjMuNjU0VjM2Ny4wN0MyMTMuODI0IDM3Ny40ODYgMTk5LjY3NiAzODQgMTg0IDM4NEMxNTMuMTIxIDM4NCAxMjggMzU4Ljg3NyAxMjggMzI4QzEyOCAyOTcuMTIxIDE1My4xMjEgMjcyIDE4NCAyNzJaTTI2NC45NjkgMEg2NEMyOC42NTQgMCAwIDI4LjY1MiAwIDY0VjQ0OEMwIDQ4My4zNDYgMjguNjU0IDUxMiA2NCA1MTJIMjY0Ljk2OUMyNTMuMDI1IDQ5OC43NTYgMjQ0LjcyMSA0ODIuMzI2IDI0MS42MTcgNDY0SDY0QzU1LjE3OCA0NjQgNDggNDU2LjgyMiA0OCA0NDhWNjRDNDggNTUuMTc4IDU1LjE3OCA0OCA2NCA0OEgyNDEuNjE3QzI0NC43MjEgMjkuNjc0IDI1My4wMjUgMTMuMjQ0IDI2NC45NjkgMFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Speakers(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M456 160C478.092 160 496 142.092 496 120S478.092 80 456 80S416 97.908 416 120S433.908 160 456 160ZM576 0H336C300.654 0 272 28.652 272 64V448C272 483.346 300.654 512 336 512H576C611.346 512 640 483.346 640 448V64C640 28.652 611.346 0 576 0ZM592 448C592 456.822 584.822 464 576 464H336C327.178 464 320 456.822 320 448V64C320 55.178 327.178 48 336 48H576C584.822 48 592 55.178 592 64V448ZM456 224C398.562 224 352 270.562 352 328S398.562 432 456 432S560 385.438 560 328S513.438 224 456 224ZM456 384C425.121 384 400 358.877 400 328C400 297.121 425.121 272 456 272S512 297.121 512 328C512 358.877 486.879 384 456 384ZM184 80C161.908 80 144 97.908 144 120S161.908 160 184 160S224 142.092 224 120S206.092 80 184 80ZM184 272C199.676 272 213.824 278.512 224 288.928V232.346C211.674 227.115 198.24 224 184 224C126.562 224 80 270.562 80 328S126.562 432 184 432C198.24 432 211.674 428.885 224 423.654V367.07C213.824 377.486 199.676 384 184 384C153.121 384 128 358.877 128 328C128 297.121 153.121 272 184 272ZM264.969 0H64C28.654 0 0 28.652 0 64V448C0 483.346 28.654 512 64 512H264.969C253.025 498.756 244.721 482.326 241.617 464H64C55.178 464 48 456.822 48 448V64C48 55.178 55.178 48 64 48H241.617C244.721 29.674 253.025 13.244 264.969 0Z" />
        </Icon>
    </>
}