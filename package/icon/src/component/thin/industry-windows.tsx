
import { Icon } from "../../index";

/**
 * A component that renders the `industry-windows` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/industry-windows?s=thin industry-windows}
 * @preview ![industry-windows](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODcuOTIyIDEyOEM0ODMuNjI1IDEyOCA0NzkuMjE1IDEyOS4xNzIgNDc1LjEyNSAxMzEuNzYyTDMzNiAyMjRWMTUyLjAxMkMzMzYgMTM3Ljk2MSAzMjQuNDM0IDEyOCAzMTEuOTIyIDEyOEMzMDcuNjI1IDEyNy45OTYgMzAzLjIxNSAxMjkuMTcyIDI5OS4xMjUgMTMxLjc2MkwxNjAgMjI0VjY0QzE2MCA0Ni4zMjggMTQ1LjY3MiAzMiAxMjggMzJIMzJDMTQuMzI4IDMyIDAgNDYuMzI4IDAgNjRWNDQ4QzAgNDY1LjY3MiAxNC4zMjggNDgwIDMyIDQ4MEg0ODBDNDk3LjY3MiA0ODAgNTEyIDQ2NS42NzIgNTEyIDQ0OFYxNTIuMDEyQzUxMiAxMzcuOTYxIDUwMC40MzQgMTI4IDQ4Ny45MjIgMTI4Wk00OTYgNDQ4QzQ5NiA0NTYuODI0IDQ4OC44MjQgNDY0IDQ4MCA0NjRIMzJDMjMuMTc2IDQ2NCAxNiA0NTYuODI0IDE2IDQ0OFY2NEMxNiA1NS4xNzYgMjMuMTc2IDQ4IDMyIDQ4SDEyOEMxMzYuODI0IDQ4IDE0NCA1NS4xNzYgMTQ0IDY0VjIyNEMxNDQgMjI5Ljg5NCAxNDcuMjM4IDIzNS4zMDggMTUyLjQzNCAyMzguMDk4QzE1NC44MDEgMjM5LjM3MSAxNTcuNDAyIDI0MCAxNjAgMjQwQzE2My4wOSAyNDAgMTY2LjE3MiAyMzkuMTA1IDE2OC44NCAyMzcuMzM2TDMwNy42OCAxNDUuMjgxQzMwOS4wMjcgMTQ0LjQzIDMxMC40NTMgMTQ0IDMxMS45MTggMTQ0QzMxNS44MDUgMTQ0IDMyMCAxNDcuMDYyIDMyMCAxNTIuMDEyVjIyNEMzMjAgMjI5Ljg5NCAzMjMuMjM4IDIzNS4zMDggMzI4LjQzNCAyMzguMDk4QzMzMC44MDEgMjM5LjM3MSAzMzMuNDAyIDI0MCAzMzYgMjQwQzMzOS4wOSAyNDAgMzQyLjE3MiAyMzkuMTA1IDM0NC44NCAyMzcuMzM2TDQ4My42OCAxNDUuMjgxQzQ4NS4wMjcgMTQ0LjQzIDQ4Ni40NTMgMTQ0IDQ4Ny45MjIgMTQ0QzQ5MS44MDUgMTQ0IDQ5NiAxNDcuMDYyIDQ5NiAxNTIuMDEyVjQ0OFpNNDA0IDMxMkgzNjRDMzUyLjk2OSAzMTIgMzQ0IDMyMC45NjkgMzQ0IDMzMlYzNzJDMzQ0IDM4My4wMzEgMzUyLjk2OSAzOTIgMzY0IDM5Mkg0MDRDNDE1LjAzMSAzOTIgNDI0IDM4My4wMzEgNDI0IDM3MlYzMzJDNDI0IDMyMC45NjkgNDE1LjAzMSAzMTIgNDA0IDMxMlpNNDA4IDM3MkM0MDggMzc0LjIxOSA0MDYuMjE5IDM3NiA0MDQgMzc2SDM2NEMzNjEuNzgxIDM3NiAzNjAgMzc0LjIxOSAzNjAgMzcyVjMzMkMzNjAgMzI5Ljc4MSAzNjEuNzgxIDMyOCAzNjQgMzI4SDQwNEM0MDYuMjE5IDMyOCA0MDggMzI5Ljc4MSA0MDggMzMyVjM3MlpNMjc2IDMxMkgyMzZDMjI0Ljk2OSAzMTIgMjE2IDMyMC45NjkgMjE2IDMzMlYzNzJDMjE2IDM4My4wMzEgMjI0Ljk2OSAzOTIgMjM2IDM5MkgyNzZDMjg3LjAzMSAzOTIgMjk2IDM4My4wMzEgMjk2IDM3MlYzMzJDMjk2IDMyMC45NjkgMjg3LjAzMSAzMTIgMjc2IDMxMlpNMjgwIDM3MkMyODAgMzc0LjIxOSAyNzguMjE5IDM3NiAyNzYgMzc2SDIzNkMyMzMuNzgxIDM3NiAyMzIgMzc0LjIxOSAyMzIgMzcyVjMzMkMyMzIgMzI5Ljc4MSAyMzMuNzgxIDMyOCAyMzYgMzI4SDI3NkMyNzguMjE5IDMyOCAyODAgMzI5Ljc4MSAyODAgMzMyVjM3MlpNMTQ4IDMxMkgxMDhDOTYuOTY5IDMxMiA4OCAzMjAuOTY5IDg4IDMzMlYzNzJDODggMzgzLjAzMSA5Ni45NjkgMzkyIDEwOCAzOTJIMTQ4QzE1OS4wMzEgMzkyIDE2OCAzODMuMDMxIDE2OCAzNzJWMzMyQzE2OCAzMjAuOTY5IDE1OS4wMzEgMzEyIDE0OCAzMTJaTTE1MiAzNzJDMTUyIDM3NC4yMTkgMTUwLjIxOSAzNzYgMTQ4IDM3NkgxMDhDMTA1Ljc4MSAzNzYgMTA0IDM3NC4yMTkgMTA0IDM3MlYzMzJDMTA0IDMyOS43ODEgMTA1Ljc4MSAzMjggMTA4IDMyOEgxNDhDMTUwLjIxOSAzMjggMTUyIDMyOS43ODEgMTUyIDMzMlYzNzJaIi8+PC9zdmc+|width=32|height=32)
 */
const IndustryWindows: typeof Icon = x => (
    <Icon {...x}>
        <path d="M487.922 128C483.625 128 479.215 129.172 475.125 131.762L336 224V152.012C336 137.961 324.434 128 311.922 128C307.625 127.996 303.215 129.172 299.125 131.762L160 224V64C160 46.328 145.672 32 128 32H32C14.328 32 0 46.328 0 64V448C0 465.672 14.328 480 32 480H480C497.672 480 512 465.672 512 448V152.012C512 137.961 500.434 128 487.922 128ZM496 448C496 456.824 488.824 464 480 464H32C23.176 464 16 456.824 16 448V64C16 55.176 23.176 48 32 48H128C136.824 48 144 55.176 144 64V224C144 229.894 147.238 235.308 152.434 238.098C154.801 239.371 157.402 240 160 240C163.09 240 166.172 239.105 168.84 237.336L307.68 145.281C309.027 144.43 310.453 144 311.918 144C315.805 144 320 147.062 320 152.012V224C320 229.894 323.238 235.308 328.434 238.098C330.801 239.371 333.402 240 336 240C339.09 240 342.172 239.105 344.84 237.336L483.68 145.281C485.027 144.43 486.453 144 487.922 144C491.805 144 496 147.062 496 152.012V448ZM404 312H364C352.969 312 344 320.969 344 332V372C344 383.031 352.969 392 364 392H404C415.031 392 424 383.031 424 372V332C424 320.969 415.031 312 404 312ZM408 372C408 374.219 406.219 376 404 376H364C361.781 376 360 374.219 360 372V332C360 329.781 361.781 328 364 328H404C406.219 328 408 329.781 408 332V372ZM276 312H236C224.969 312 216 320.969 216 332V372C216 383.031 224.969 392 236 392H276C287.031 392 296 383.031 296 372V332C296 320.969 287.031 312 276 312ZM280 372C280 374.219 278.219 376 276 376H236C233.781 376 232 374.219 232 372V332C232 329.781 233.781 328 236 328H276C278.219 328 280 329.781 280 332V372ZM148 312H108C96.969 312 88 320.969 88 332V372C88 383.031 96.969 392 108 392H148C159.031 392 168 383.031 168 372V332C168 320.969 159.031 312 148 312ZM152 372C152 374.219 150.219 376 148 376H108C105.781 376 104 374.219 104 372V332C104 329.781 105.781 328 108 328H148C150.219 328 152 329.781 152 332V372Z" />
    </Icon>
);

export default IndustryWindows;