
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `buildings` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/buildings?s=thin buildings}
 * @preview ![buildings](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xODQgMTI4SDQwQzE3LjkzOCAxMjggMCAxNDUuOTM4IDAgMTY4VjUwNEMwIDUwOC40MDYgMy41OTQgNTEyIDggNTEyUzE2IDUwOC40MDYgMTYgNTA0VjE2OEMxNiAxNTQuNzgxIDI2Ljc4MSAxNDQgNDAgMTQ0SDE4NEMxOTcuMjE5IDE0NCAyMDggMTU0Ljc4MSAyMDggMTY4VjUwNEMyMDggNTA4LjQwNiAyMTEuNTk0IDUxMiAyMTYgNTEyUzIyNCA1MDguNDA2IDIyNCA1MDRWMTY4QzIyNCAxNDUuOTM4IDIwNi4wNjIgMTI4IDE4NCAxMjhaTTMwNCA4OEgyNzJDMjU4Ljc4MSA4OCAyNDggOTguNzgxIDI0OCAxMTJWMTQ0QzI0OCAxNTcuMjE5IDI1OC43ODEgMTY4IDI3MiAxNjhIMzA0QzMxNy4yMTkgMTY4IDMyOCAxNTcuMjE5IDMyOCAxNDRWMTEyQzMyOCA5OC43ODEgMzE3LjIxOSA4OCAzMDQgODhaTTMxMiAxNDRDMzEyIDE0OC40MDYgMzA4LjQwNiAxNTIgMzA0IDE1MkgyNzJDMjY3LjU5NCAxNTIgMjY0IDE0OC40MDYgMjY0IDE0NFYxMTJDMjY0IDEwNy41OTQgMjY3LjU5NCAxMDQgMjcyIDEwNEgzMDRDMzA4LjQwNiAxMDQgMzEyIDEwNy41OTQgMzEyIDExMlYxNDRaTTQ3MiAwSDIxNkMxOTMuOTM4IDAgMTc2IDE3LjkzOCAxNzYgNDBWODhDMTc2IDkyLjQwNiAxNzkuNTk0IDk2IDE4NCA5NlMxOTIgOTIuNDA2IDE5MiA4OFY0MEMxOTIgMjYuNzgxIDIwMi43ODEgMTYgMjE2IDE2SDQ3MkM0ODUuMjE5IDE2IDQ5NiAyNi43ODEgNDk2IDQwVjUwNEM0OTYgNTA4LjQwNiA0OTkuNTk0IDUxMiA1MDQgNTEyUzUxMiA1MDguNDA2IDUxMiA1MDRWNDBDNTEyIDE3LjkzOCA0OTQuMDYyIDAgNDcyIDBaTTEyOCAzMjhIOTZDODIuNzgxIDMyOCA3MiAzMzguNzgxIDcyIDM1MlYzODRDNzIgMzk3LjIxOSA4Mi43ODEgNDA4IDk2IDQwOEgxMjhDMTQxLjIxOSA0MDggMTUyIDM5Ny4yMTkgMTUyIDM4NFYzNTJDMTUyIDMzOC43ODEgMTQxLjIxOSAzMjggMTI4IDMyOFpNMTM2IDM4NEMxMzYgMzg4LjUgMTMyLjUgMzkyIDEyOCAzOTJIOTZDOTEuNSAzOTIgODggMzg4LjUgODggMzg0VjM1MkM4OCAzNDcuNSA5MS41IDM0NCA5NiAzNDRIMTI4QzEzMi41IDM0NCAxMzYgMzQ3LjUgMTM2IDM1MlYzODRaTTQzMiAzNDRINDAwQzM4Ni43ODEgMzQ0IDM3NiAzNTQuNzgxIDM3NiAzNjhWNDAwQzM3NiA0MTMuMjE5IDM4Ni43ODEgNDI0IDQwMCA0MjRINDMyQzQ0NS4yMTkgNDI0IDQ1NiA0MTMuMjE5IDQ1NiA0MDBWMzY4QzQ1NiAzNTQuNzgxIDQ0NS4yMTkgMzQ0IDQzMiAzNDRaTTQ0MCA0MDBDNDQwIDQwNC40MDYgNDM2LjQwNiA0MDggNDMyIDQwOEg0MDBDMzk1LjU5NCA0MDggMzkyIDQwNC40MDYgMzkyIDQwMFYzNjhDMzkyIDM2My41OTQgMzk1LjU5NCAzNjAgNDAwIDM2MEg0MzJDNDM2LjQwNiAzNjAgNDQwIDM2My41OTQgNDQwIDM2OFY0MDBaTTEyOCAyMDBIOTZDODIuNzgxIDIwMCA3MiAyMTAuNzgxIDcyIDIyNFYyNTZDNzIgMjY5LjIxOSA4Mi43ODEgMjgwIDk2IDI4MEgxMjhDMTQxLjIxOSAyODAgMTUyIDI2OS4yMTkgMTUyIDI1NlYyMjRDMTUyIDIxMC43ODEgMTQxLjIxOSAyMDAgMTI4IDIwMFpNMTM2IDI1NkMxMzYgMjYwLjUgMTMyLjUgMjY0IDEyOCAyNjRIOTZDOTEuNSAyNjQgODggMjYwLjUgODggMjU2VjIyNEM4OCAyMTkuNSA5MS41IDIxNiA5NiAyMTZIMTI4QzEzMi41IDIxNiAxMzYgMjE5LjUgMTM2IDIyNFYyNTZaTTMwNCAyMTZIMjcyQzI1OC43ODEgMjE2IDI0OCAyMjYuNzgxIDI0OCAyNDBWMjcyQzI0OCAyODUuMjE5IDI1OC43ODEgMjk2IDI3MiAyOTZIMzA0QzMxNy4yMTkgMjk2IDMyOCAyODUuMjE5IDMyOCAyNzJWMjQwQzMyOCAyMjYuNzgxIDMxNy4yMTkgMjE2IDMwNCAyMTZaTTMxMiAyNzJDMzEyIDI3Ni40MDYgMzA4LjQwNiAyODAgMzA0IDI4MEgyNzJDMjY3LjU5NCAyODAgMjY0IDI3Ni40MDYgMjY0IDI3MlYyNDBDMjY0IDIzNS41OTQgMjY3LjU5NCAyMzIgMjcyIDIzMkgzMDRDMzA4LjQwNiAyMzIgMzEyIDIzNS41OTQgMzEyIDI0MFYyNzJaTTQzMiAyMTZINDAwQzM4Ni43ODEgMjE2IDM3NiAyMjYuNzgxIDM3NiAyNDBWMjcyQzM3NiAyODUuMjE5IDM4Ni43ODEgMjk2IDQwMCAyOTZINDMyQzQ0NS4yMTkgMjk2IDQ1NiAyODUuMjE5IDQ1NiAyNzJWMjQwQzQ1NiAyMjYuNzgxIDQ0NS4yMTkgMjE2IDQzMiAyMTZaTTQ0MCAyNzJDNDQwIDI3Ni40MDYgNDM2LjQwNiAyODAgNDMyIDI4MEg0MDBDMzk1LjU5NCAyODAgMzkyIDI3Ni40MDYgMzkyIDI3MlYyNDBDMzkyIDIzNS41OTQgMzk1LjU5NCAyMzIgNDAwIDIzMkg0MzJDNDM2LjQwNiAyMzIgNDQwIDIzNS41OTQgNDQwIDI0MFYyNzJaTTQzMiA4OEg0MDBDMzg2Ljc4MSA4OCAzNzYgOTguNzgxIDM3NiAxMTJWMTQ0QzM3NiAxNTcuMjE5IDM4Ni43ODEgMTY4IDQwMCAxNjhINDMyQzQ0NS4yMTkgMTY4IDQ1NiAxNTcuMjE5IDQ1NiAxNDRWMTEyQzQ1NiA5OC43ODEgNDQ1LjIxOSA4OCA0MzIgODhaTTQ0MCAxNDRDNDQwIDE0OC40MDYgNDM2LjQwNiAxNTIgNDMyIDE1Mkg0MDBDMzk1LjU5NCAxNTIgMzkyIDE0OC40MDYgMzkyIDE0NFYxMTJDMzkyIDEwNy41OTQgMzk1LjU5NCAxMDQgNDAwIDEwNEg0MzJDNDM2LjQwNiAxMDQgNDQwIDEwNy41OTQgNDQwIDExMlYxNDRaTTMwNCAzNDRIMjcyQzI1OC43ODEgMzQ0IDI0OCAzNTQuNzgxIDI0OCAzNjhWNDAwQzI0OCA0MTMuMjE5IDI1OC43ODEgNDI0IDI3MiA0MjRIMzA0QzMxNy4yMTkgNDI0IDMyOCA0MTMuMjE5IDMyOCA0MDBWMzY4QzMyOCAzNTQuNzgxIDMxNy4yMTkgMzQ0IDMwNCAzNDRaTTMxMiA0MDBDMzEyIDQwNC40MDYgMzA4LjQwNiA0MDggMzA0IDQwOEgyNzJDMjY3LjU5NCA0MDggMjY0IDQwNC40MDYgMjY0IDQwMFYzNjhDMjY0IDM2My41OTQgMjY3LjU5NCAzNjAgMjcyIDM2MEgzMDRDMzA4LjQwNiAzNjAgMzEyIDM2My41OTQgMzEyIDM2OFY0MDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Buildings(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M184 128H40C17.938 128 0 145.938 0 168V504C0 508.406 3.594 512 8 512S16 508.406 16 504V168C16 154.781 26.781 144 40 144H184C197.219 144 208 154.781 208 168V504C208 508.406 211.594 512 216 512S224 508.406 224 504V168C224 145.938 206.062 128 184 128ZM304 88H272C258.781 88 248 98.781 248 112V144C248 157.219 258.781 168 272 168H304C317.219 168 328 157.219 328 144V112C328 98.781 317.219 88 304 88ZM312 144C312 148.406 308.406 152 304 152H272C267.594 152 264 148.406 264 144V112C264 107.594 267.594 104 272 104H304C308.406 104 312 107.594 312 112V144ZM472 0H216C193.938 0 176 17.938 176 40V88C176 92.406 179.594 96 184 96S192 92.406 192 88V40C192 26.781 202.781 16 216 16H472C485.219 16 496 26.781 496 40V504C496 508.406 499.594 512 504 512S512 508.406 512 504V40C512 17.938 494.062 0 472 0ZM128 328H96C82.781 328 72 338.781 72 352V384C72 397.219 82.781 408 96 408H128C141.219 408 152 397.219 152 384V352C152 338.781 141.219 328 128 328ZM136 384C136 388.5 132.5 392 128 392H96C91.5 392 88 388.5 88 384V352C88 347.5 91.5 344 96 344H128C132.5 344 136 347.5 136 352V384ZM432 344H400C386.781 344 376 354.781 376 368V400C376 413.219 386.781 424 400 424H432C445.219 424 456 413.219 456 400V368C456 354.781 445.219 344 432 344ZM440 400C440 404.406 436.406 408 432 408H400C395.594 408 392 404.406 392 400V368C392 363.594 395.594 360 400 360H432C436.406 360 440 363.594 440 368V400ZM128 200H96C82.781 200 72 210.781 72 224V256C72 269.219 82.781 280 96 280H128C141.219 280 152 269.219 152 256V224C152 210.781 141.219 200 128 200ZM136 256C136 260.5 132.5 264 128 264H96C91.5 264 88 260.5 88 256V224C88 219.5 91.5 216 96 216H128C132.5 216 136 219.5 136 224V256ZM304 216H272C258.781 216 248 226.781 248 240V272C248 285.219 258.781 296 272 296H304C317.219 296 328 285.219 328 272V240C328 226.781 317.219 216 304 216ZM312 272C312 276.406 308.406 280 304 280H272C267.594 280 264 276.406 264 272V240C264 235.594 267.594 232 272 232H304C308.406 232 312 235.594 312 240V272ZM432 216H400C386.781 216 376 226.781 376 240V272C376 285.219 386.781 296 400 296H432C445.219 296 456 285.219 456 272V240C456 226.781 445.219 216 432 216ZM440 272C440 276.406 436.406 280 432 280H400C395.594 280 392 276.406 392 272V240C392 235.594 395.594 232 400 232H432C436.406 232 440 235.594 440 240V272ZM432 88H400C386.781 88 376 98.781 376 112V144C376 157.219 386.781 168 400 168H432C445.219 168 456 157.219 456 144V112C456 98.781 445.219 88 432 88ZM440 144C440 148.406 436.406 152 432 152H400C395.594 152 392 148.406 392 144V112C392 107.594 395.594 104 400 104H432C436.406 104 440 107.594 440 112V144ZM304 344H272C258.781 344 248 354.781 248 368V400C248 413.219 258.781 424 272 424H304C317.219 424 328 413.219 328 400V368C328 354.781 317.219 344 304 344ZM312 400C312 404.406 308.406 408 304 408H272C267.594 408 264 404.406 264 400V368C264 363.594 267.594 360 272 360H304C308.406 360 312 363.594 312 368V400Z" />
        </Icon>
    </>
}