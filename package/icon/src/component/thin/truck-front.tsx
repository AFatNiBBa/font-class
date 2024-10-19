
import { Icon } from "../../index";

/**
 * A component that renders the `truck-front` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/truck-front?s=thin truck-front}
 * @preview ![truck-front](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDAgMEg3MkMzMi4zMTIgMCAwIDMyLjI5NyAwIDcyVjIxNkMwIDIyMC40MjIgMy41OTQgMjI0IDggMjI0UzE2IDIyMC40MjIgMTYgMjE2VjcyQzE2IDQxLjEyNSA0MS4xMjUgMTYgNzIgMTZINDQwQzQ3MC44NzUgMTYgNDk2IDQxLjEyNSA0OTYgNzJWMjE2QzQ5NiAyMjAuNDIyIDQ5OS41OTQgMjI0IDUwNCAyMjRTNTEyIDIyMC40MjIgNTEyIDIxNlY3MkM1MTIgMzIuMjk3IDQ3OS42ODggMCA0NDAgMFpNNDUwLjgzIDI0MC4yODVMNDE5LjE0MSAxNDUuMjM0QzQwOS4zMjggMTE1Ljc4MSAzODEuODkxIDk2IDM1MC44NDQgOTZIMTYxLjE1NkMxMzAuMTA5IDk2IDEwMi42NzIgMTE1Ljc4MSA5Mi44NTkgMTQ1LjIzNEw2MS4xNyAyNDAuMjg1QzI3LjE2OCAyNDEuNzk3IDAgMjY5LjYyMyAwIDMwNFY0MDBDMCA0MjAuODY5IDEzLjQgNDM4LjQ1MSAzMiA0NDUuMDYyVjUwNEMzMiA1MDguNDE4IDM1LjU4MiA1MTIgNDAgNTEyUzQ4IDUwOC40MTggNDggNTA0VjQ0OEg0NjRWNTA0QzQ2NCA1MDguNDE4IDQ2Ny41ODIgNTEyIDQ3MiA1MTJTNDgwIDUwOC40MTggNDgwIDUwNFY0NDUuMDYyQzQ5OC42IDQzOC40NTEgNTEyIDQyMC44NjkgNTEyIDQwMFYzMDRDNTEyIDI2OS42MjMgNDg0LjgzMiAyNDEuNzk3IDQ1MC44MyAyNDAuMjg1Wk0xMDguMDQ3IDE1MC4yOTdDMTE1LjY3MiAxMjcuMzkxIDEzNy4wMTYgMTEyIDE2MS4xNTYgMTEySDM1MC44NDRDMzc0Ljk4NCAxMTIgMzk2LjMyOCAxMjcuMzkxIDQwMy45NTMgMTUwLjI5N0w0MzMuODU3IDI0MEg3OC4xNDNMMTA4LjA0NyAxNTAuMjk3Wk00OTYgNDAwQzQ5NiA0MTcuNjQ1IDQ4MS42NDUgNDMyIDQ2NCA0MzJINDhDMzAuMzU1IDQzMiAxNiA0MTcuNjQ1IDE2IDQwMFYzMDRDMTYgMjc3LjUzMyAzNy41MzMgMjU2IDY0IDI1Nkg0NDhDNDc0LjQ2NyAyNTYgNDk2IDI3Ny41MzMgNDk2IDMwNFY0MDBaTTEwNCAzMDRDODEuOTEgMzA0IDY0IDMyMS45MDggNjQgMzQ0QzY0IDM2Ni4wOSA4MS45MSAzODQgMTA0IDM4NFMxNDQgMzY2LjA5IDE0NCAzNDRDMTQ0IDMyMS45MDggMTI2LjA5IDMwNCAxMDQgMzA0Wk0xMDQgMzY4QzkwLjc2NiAzNjggODAgMzU3LjIzMiA4MCAzNDRDODAgMzMwLjc2NiA5MC43NjYgMzIwIDEwNCAzMjBTMTI4IDMzMC43NjYgMTI4IDM0NEMxMjggMzU3LjIzMiAxMTcuMjM0IDM2OCAxMDQgMzY4Wk00MDggMzA0QzM4NS45MSAzMDQgMzY4IDMyMS45MDggMzY4IDM0NEMzNjggMzY2LjA5IDM4NS45MSAzODQgNDA4IDM4NFM0NDggMzY2LjA5IDQ0OCAzNDRDNDQ4IDMyMS45MDggNDMwLjA5IDMwNCA0MDggMzA0Wk00MDggMzY4QzM5NC43NjYgMzY4IDM4NCAzNTcuMjMyIDM4NCAzNDRDMzg0IDMzMC43NjYgMzk0Ljc2NiAzMjAgNDA4IDMyMFM0MzIgMzMwLjc2NiA0MzIgMzQ0QzQzMiAzNTcuMjMyIDQyMS4yMzQgMzY4IDQwOCAzNjhaIi8+PC9zdmc+|width=32|height=32)
 */
const TruckFront: typeof Icon = x => (
    <Icon {...x}>
        <path d="M440 0H72C32.312 0 0 32.297 0 72V216C0 220.422 3.594 224 8 224S16 220.422 16 216V72C16 41.125 41.125 16 72 16H440C470.875 16 496 41.125 496 72V216C496 220.422 499.594 224 504 224S512 220.422 512 216V72C512 32.297 479.688 0 440 0ZM450.83 240.285L419.141 145.234C409.328 115.781 381.891 96 350.844 96H161.156C130.109 96 102.672 115.781 92.859 145.234L61.17 240.285C27.168 241.797 0 269.623 0 304V400C0 420.869 13.4 438.451 32 445.062V504C32 508.418 35.582 512 40 512S48 508.418 48 504V448H464V504C464 508.418 467.582 512 472 512S480 508.418 480 504V445.062C498.6 438.451 512 420.869 512 400V304C512 269.623 484.832 241.797 450.83 240.285ZM108.047 150.297C115.672 127.391 137.016 112 161.156 112H350.844C374.984 112 396.328 127.391 403.953 150.297L433.857 240H78.143L108.047 150.297ZM496 400C496 417.645 481.645 432 464 432H48C30.355 432 16 417.645 16 400V304C16 277.533 37.533 256 64 256H448C474.467 256 496 277.533 496 304V400ZM104 304C81.91 304 64 321.908 64 344C64 366.09 81.91 384 104 384S144 366.09 144 344C144 321.908 126.09 304 104 304ZM104 368C90.766 368 80 357.232 80 344C80 330.766 90.766 320 104 320S128 330.766 128 344C128 357.232 117.234 368 104 368ZM408 304C385.91 304 368 321.908 368 344C368 366.09 385.91 384 408 384S448 366.09 448 344C448 321.908 430.09 304 408 304ZM408 368C394.766 368 384 357.232 384 344C384 330.766 394.766 320 408 320S432 330.766 432 344C432 357.232 421.234 368 408 368Z" />
    </Icon>
);

export default TruckFront;