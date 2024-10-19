
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `washing-machine` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/washing-machine?s=thin washing-machine}
 * @preview ![washing-machine](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjAgMTEyQzE2OC44MzYgMTEyIDE3NiAxMDQuODM2IDE3NiA5NkMxNzYgODcuMTYyIDE2OC44MzYgODAgMTYwIDgwUzE0NCA4Ny4xNjIgMTQ0IDk2QzE0NCAxMDQuODM2IDE1MS4xNjQgMTEyIDE2MCAxMTJaTTExMiA5NkMxMTIgODcuMTYyIDEwNC44MzYgODAgOTYgODBTODAgODcuMTYyIDgwIDk2QzgwIDEwNC44MzYgODcuMTY0IDExMiA5NiAxMTJTMTEyIDEwNC44MzYgMTEyIDk2Wk0zODQgMEg2NEMyOC42NTQgMCAwIDI4LjY1NCAwIDY0VjQ0OEMwIDQ4My4zNDYgMjguNjU0IDUxMiA2NCA1MTJIMzg0QzQxOS4zNDYgNTEyIDQ0OCA0ODMuMzQ2IDQ0OCA0NDhWNjRDNDQ4IDI4LjY1NCA0MTkuMzQ2IDAgMzg0IDBaTTQzMiA0NDhDNDMyIDQ3NC40NjcgNDEwLjQ2NyA0OTYgMzg0IDQ5Nkg2NEMzNy41MzMgNDk2IDE2IDQ3NC40NjcgMTYgNDQ4VjY0QzE2IDM3LjUzMyAzNy41MzMgMTYgNjQgMTZIMzg0QzQxMC40NjcgMTYgNDMyIDM3LjUzMyA0MzIgNjRWNDQ4Wk0yMjQgMTY4QzE0OC44ODkgMTY4IDg4IDIyOC44ODkgODggMzA0UzE0OC44ODkgNDQwIDIyNCA0NDBTMzYwIDM3OS4xMTEgMzYwIDMwNFMyOTkuMTExIDE2OCAyMjQgMTY4Wk0yMjQgNDI0QzE2My42MzcgNDI0IDExNC4wMzkgMzc5LjA0OSAxMDUuNzEzIDMyMC45NTNDMTI5Ljc4NSAzMjguMTcyIDE1NS41NjEgMzIxLjk4NCAxNzQuODU5IDMwMy42NTZDMjAyLjAxNiAzMjkuNjU2IDI0NS45NjkgMzI5LjY1NiAyNzMuMTU2IDMwMy42NTZDMjg3LjIzNCAzMTcuMDMxIDMwNC44MTIgMzI0LjAzMSAzMjIuNjQxIDMyNC4wMzFDMzI5LjIyOSAzMjQuMDMxIDMzNS44MDUgMzIyLjc2IDM0Mi4zMDEgMzIwLjgxMUMzMzQuMDM3IDM3OC45NzcgMjg0LjQxMiA0MjQgMjI0IDQyNFpNMjc5LjIwMyAyODYuODEyQzI3Ny42ODggMjg1LjAzMSAyNzUuNDUzIDI4NCAyNzMuMTA5IDI4NEMyNzEuMzkxIDI4NC4xMjUgMjY4LjQ4NCAyODUuMDMxIDI2Ni45NTMgMjg2Ljg3NUMyNTUuODEyIDMwMC4yODEgMjQwLjE1NiAzMDcuOTY5IDIyNCAzMDcuOTY5QzIwNy44NTkgMzA3Ljk2OSAxOTIuMjAzIDMwMC4yODEgMTgxLjAzMSAyODYuODc1QzE3OS41MzEgMjg1LjA2MiAxNzcuMjk3IDI4NCAxNzQuOTIyIDI4NEMxNzQuOTIyIDI4NCAxNzQuOTA2IDI4NCAxNzQuODkxIDI4NEMxNzIuNTQ3IDI4NCAxNzAuMzEyIDI4NS4wMzEgMTY4Ljc5NyAyODYuODEyQzE1MS44MjggMzA2Ljg1MiAxMjYuNCAzMTIuNjIzIDEwNC4xMTEgMzAyLjkwMkMxMDQuNzE5IDIzNy4yNDggMTU4LjIwNyAxODQgMjI0IDE4NEMyODkuNzg5IDE4NCAzNDMuMjc5IDIzNy4yNDggMzQzLjg4OSAzMDIuODk2QzMyMS42IDMxMi41NzQgMjk2LjE3IDMwNi44NSAyNzkuMjAzIDI4Ni44MTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function WashingMachine(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M160 112C168.836 112 176 104.836 176 96C176 87.162 168.836 80 160 80S144 87.162 144 96C144 104.836 151.164 112 160 112ZM112 96C112 87.162 104.836 80 96 80S80 87.162 80 96C80 104.836 87.164 112 96 112S112 104.836 112 96ZM384 0H64C28.654 0 0 28.654 0 64V448C0 483.346 28.654 512 64 512H384C419.346 512 448 483.346 448 448V64C448 28.654 419.346 0 384 0ZM432 448C432 474.467 410.467 496 384 496H64C37.533 496 16 474.467 16 448V64C16 37.533 37.533 16 64 16H384C410.467 16 432 37.533 432 64V448ZM224 168C148.889 168 88 228.889 88 304S148.889 440 224 440S360 379.111 360 304S299.111 168 224 168ZM224 424C163.637 424 114.039 379.049 105.713 320.953C129.785 328.172 155.561 321.984 174.859 303.656C202.016 329.656 245.969 329.656 273.156 303.656C287.234 317.031 304.812 324.031 322.641 324.031C329.229 324.031 335.805 322.76 342.301 320.811C334.037 378.977 284.412 424 224 424ZM279.203 286.812C277.688 285.031 275.453 284 273.109 284C271.391 284.125 268.484 285.031 266.953 286.875C255.812 300.281 240.156 307.969 224 307.969C207.859 307.969 192.203 300.281 181.031 286.875C179.531 285.062 177.297 284 174.922 284C174.922 284 174.906 284 174.891 284C172.547 284 170.312 285.031 168.797 286.812C151.828 306.852 126.4 312.623 104.111 302.902C104.719 237.248 158.207 184 224 184C289.789 184 343.279 237.248 343.889 302.896C321.6 312.574 296.17 306.85 279.203 286.812Z" />
        </Icon>
    </>
}