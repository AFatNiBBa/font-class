
import { Icon } from "../../index";

/**
 * A component that renders the `hospitals` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hospitals?s=thin hospitals}
 * @preview ![hospitals](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNDQgMzc2SDExMkM5OC43ODEgMzc2IDg4IDM4Ni43ODEgODggNDAwVjQzMkM4OCA0NDUuMjE5IDk4Ljc4MSA0NTYgMTEyIDQ1NkgxNDRDMTU3LjIxOSA0NTYgMTY4IDQ0NS4yMTkgMTY4IDQzMlY0MDBDMTY4IDM4Ni43ODEgMTU3LjIxOSAzNzYgMTQ0IDM3NlpNMTUyIDQzMkMxNTIgNDM2LjUgMTQ4LjUgNDQwIDE0NCA0NDBIMTEyQzEwNy41IDQ0MCAxMDQgNDM2LjUgMTA0IDQzMlY0MDBDMTA0IDM5NS41IDEwNy41IDM5MiAxMTIgMzkySDE0NEMxNDguNSAzOTIgMTUyIDM5NS41IDE1MiA0MDBWNDMyWk0yMTYgMTI4SDQwQzE3LjkzOCAxMjggMCAxNDUuOTM4IDAgMTY4VjUwNEMwIDUwOC40MDYgMy41OTQgNTEyIDggNTEyUzE2IDUwOC40MDYgMTYgNTA0VjE2OEMxNiAxNTQuNzgxIDI2Ljc4MSAxNDQgNDAgMTQ0SDIxNkMyMjkuMjE5IDE0NCAyNDAgMTU0Ljc4MSAyNDAgMTY4VjUwNEMyNDAgNTA4LjQwNiAyNDMuNTk0IDUxMiAyNDggNTEyUzI1NiA1MDguNDA2IDI1NiA1MDRWMTY4QzI1NiAxNDUuOTM4IDIzOC4wNjIgMTI4IDIxNiAxMjhaTTUzNiAwSDI5NkMyNzMuOTM4IDAgMjU2IDE3LjkzOCAyNTYgNDBWODhDMjU2IDkyLjQwNiAyNTkuNTk0IDk2IDI2NCA5NlMyNzIgOTIuNDA2IDI3MiA4OFY0MEMyNzIgMjYuNzgxIDI4Mi43ODEgMTYgMjk2IDE2SDUzNkM1NDkuMjE5IDE2IDU2MCAyNi43ODEgNTYwIDQwVjUwNEM1NjAgNTA4LjQwNiA1NjMuNTk0IDUxMiA1NjggNTEyUzU3NiA1MDguNDA2IDU3NiA1MDRWNDBDNTc2IDE3LjkzOCA1NTguMDYyIDAgNTM2IDBaTTM2OCAzNzZIMzM2QzMyMi43ODEgMzc2IDMxMiAzODYuNzgxIDMxMiA0MDBWNDMyQzMxMiA0NDUuMjE5IDMyMi43ODEgNDU2IDMzNiA0NTZIMzY4QzM4MS4yMTkgNDU2IDM5MiA0NDUuMjE5IDM5MiA0MzJWNDAwQzM5MiAzODYuNzgxIDM4MS4yMTkgMzc2IDM2OCAzNzZaTTM3NiA0MzJDMzc2IDQzNi40MDYgMzcyLjQwNiA0NDAgMzY4IDQ0MEgzMzZDMzMxLjU5NCA0NDAgMzI4IDQzNi40MDYgMzI4IDQzMlY0MDBDMzI4IDM5NS41OTQgMzMxLjU5NCAzOTIgMzM2IDM5MkgzNjhDMzcyLjQwNiAzOTIgMzc2IDM5NS41OTQgMzc2IDQwMFY0MzJaTTQ5NiAzNzZINDY0QzQ1MC43ODEgMzc2IDQ0MCAzODYuNzgxIDQ0MCA0MDBWNDMyQzQ0MCA0NDUuMjE5IDQ1MC43ODEgNDU2IDQ2NCA0NTZINDk2QzUwOS4yMTkgNDU2IDUyMCA0NDUuMjE5IDUyMCA0MzJWNDAwQzUyMCAzODYuNzgxIDUwOS4yMTkgMzc2IDQ5NiAzNzZaTTUwNCA0MzJDNTA0IDQzNi40MDYgNTAwLjQwNiA0NDAgNDk2IDQ0MEg0NjRDNDU5LjU5NCA0NDAgNDU2IDQzNi40MDYgNDU2IDQzMlY0MDBDNDU2IDM5NS41OTQgNDU5LjU5NCAzOTIgNDY0IDM5Mkg0OTZDNTAwLjQwNiAzOTIgNTA0IDM5NS41OTQgNTA0IDQwMFY0MzJaTTQ5NiAyNDhINDY0QzQ1MC43ODEgMjQ4IDQ0MCAyNTguNzgxIDQ0MCAyNzJWMzA0QzQ0MCAzMTcuMjE5IDQ1MC43ODEgMzI4IDQ2NCAzMjhINDk2QzUwOS4yMTkgMzI4IDUyMCAzMTcuMjE5IDUyMCAzMDRWMjcyQzUyMCAyNTguNzgxIDUwOS4yMTkgMjQ4IDQ5NiAyNDhaTTUwNCAzMDRDNTA0IDMwOC40MDYgNTAwLjQwNiAzMTIgNDk2IDMxMkg0NjRDNDU5LjU5NCAzMTIgNDU2IDMwOC40MDYgNDU2IDMwNFYyNzJDNDU2IDI2Ny41OTQgNDU5LjU5NCAyNjQgNDY0IDI2NEg0OTZDNTAwLjQwNiAyNjQgNTA0IDI2Ny41OTQgNTA0IDI3MlYzMDRaTTM2OCAyNDhIMzM2QzMyMi43ODEgMjQ4IDMxMiAyNTguNzgxIDMxMiAyNzJWMzA0QzMxMiAzMTcuMjE5IDMyMi43ODEgMzI4IDMzNiAzMjhIMzY4QzM4MS4yMTkgMzI4IDM5MiAzMTcuMjE5IDM5MiAzMDRWMjcyQzM5MiAyNTguNzgxIDM4MS4yMTkgMjQ4IDM2OCAyNDhaTTM3NiAzMDRDMzc2IDMwOC40MDYgMzcyLjQwNiAzMTIgMzY4IDMxMkgzMzZDMzMxLjU5NCAzMTIgMzI4IDMwOC40MDYgMzI4IDMwNFYyNzJDMzI4IDI2Ny41OTQgMzMxLjU5NCAyNjQgMzM2IDI2NEgzNjhDMzcyLjQwNiAyNjQgMzc2IDI2Ny41OTQgMzc2IDI3MlYzMDRaTTQ0OCAxODMuNDY5VjE2MEw0NzEuNjg4IDE1OS43ODFDNDgwLjY4OCAxNTkuNzgxIDQ4OCAxNTIuNDY5IDQ4OCAxNDMuNDY5VjExMi4wOTRDNDg4IDEwMy4wOTQgNDgwLjY4OCA5NS43ODEgNDcxLjY4OCA5NS43ODFINDQ4VjcyLjA5NEM0NDggNjMuMDk0IDQ0MC42ODggNTUuNzgxIDQzMS42ODggNTUuNzgxSDQwMC4zMTJDMzkxLjMxMiA1NS43ODEgMzg0IDYzLjA5NCAzODQgNzIuMDk0Vjk1Ljc4MUgzNjAuMzEyQzM1MS4zMTIgOTUuNzgxIDM0NCAxMDMuMDk0IDM0NCAxMTIuMDk0VjE0My40NjlDMzQ0IDE1Mi40NjkgMzUxLjMxMiAxNTkuNzgxIDM2MC4zMTIgMTU5Ljc4MUgzODMuNzgxTDM4NCAxODMuNDY5QzM4NCAxOTIuNDY5IDM5MS4zMTIgMTk5Ljc4MSA0MDAuMzEyIDE5OS43ODFINDMxLjY4OEM0NDAuNjg4IDE5OS43ODEgNDQ4IDE5Mi40NjkgNDQ4IDE4My40NjlaTTQzMS42ODggMTgzLjc4MUw0MDAgMTgzLjM3NUwzOTkuNTk0IDE0My43ODFMMzYwIDE0My40NjlMMzYwLjMxMiAxMTEuNzgxSDQwMFY3MS43ODFMNDMyIDcyLjA5NFYxMTEuNzgxTDQ3MiAxMTIuMDk0TDQ3MS41OTQgMTQzLjc4MUw0MzIgMTQ0LjE4OEw0MzEuNjg4IDE4My43ODFaTTE4My42ODggMjIzLjc4MUgxNjBWMjAwLjA5NEMxNjAgMTkxLjA5NCAxNTIuNjg4IDE4My43ODEgMTQzLjY4OCAxODMuNzgxSDExMi4zMTJDMTAzLjMxMiAxODMuNzgxIDk2IDE5MS4wOTQgOTYgMjAwLjA5NFYyMjMuNzgxSDcyLjMxMkM2My4zMTIgMjIzLjc4MSA1NiAyMzEuMDk0IDU2IDI0MC4wOTRWMjcxLjQ2OUM1NiAyODAuNDY5IDYzLjMxMiAyODcuNzgxIDcyLjMxMiAyODcuNzgxSDk1Ljc4MUw5NiAzMTEuNDY5Qzk2IDMyMC40NjkgMTAzLjMxMiAzMjcuNzgxIDExMi4zMTIgMzI3Ljc4MUgxNDMuNjg4QzE1Mi42ODggMzI3Ljc4MSAxNjAgMzIwLjQ2OSAxNjAgMzExLjQ2OVYyODhMMTgzLjY4OCAyODcuNzgxQzE5Mi42ODggMjg3Ljc4MSAyMDAgMjgwLjQ2OSAyMDAgMjcxLjQ2OVYyNDAuMDk0QzIwMCAyMzEuMDk0IDE5Mi42ODggMjIzLjc4MSAxODMuNjg4IDIyMy43ODFaTTE4My41OTQgMjcxLjc4MUwxNDQgMjcyLjE4OEwxNDMuNjg4IDMxMS43ODFMMTEyIDMxMS4zNzVMMTExLjU5NCAyNzEuNzgxTDcyIDI3MS40NjlMNzIuMzEyIDIzOS43ODFIMTEyVjE5OS43ODFMMTQ0IDIwMC4wOTRWMjM5Ljc4MUwxODQgMjQwLjA5NEwxODMuNTk0IDI3MS43ODFaIi8+PC9zdmc+|width=32|height=32)
 */
const Hospitals: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M144 376H112C98.781 376 88 386.781 88 400V432C88 445.219 98.781 456 112 456H144C157.219 456 168 445.219 168 432V400C168 386.781 157.219 376 144 376ZM152 432C152 436.5 148.5 440 144 440H112C107.5 440 104 436.5 104 432V400C104 395.5 107.5 392 112 392H144C148.5 392 152 395.5 152 400V432ZM216 128H40C17.938 128 0 145.938 0 168V504C0 508.406 3.594 512 8 512S16 508.406 16 504V168C16 154.781 26.781 144 40 144H216C229.219 144 240 154.781 240 168V504C240 508.406 243.594 512 248 512S256 508.406 256 504V168C256 145.938 238.062 128 216 128ZM536 0H296C273.938 0 256 17.938 256 40V88C256 92.406 259.594 96 264 96S272 92.406 272 88V40C272 26.781 282.781 16 296 16H536C549.219 16 560 26.781 560 40V504C560 508.406 563.594 512 568 512S576 508.406 576 504V40C576 17.938 558.062 0 536 0ZM368 376H336C322.781 376 312 386.781 312 400V432C312 445.219 322.781 456 336 456H368C381.219 456 392 445.219 392 432V400C392 386.781 381.219 376 368 376ZM376 432C376 436.406 372.406 440 368 440H336C331.594 440 328 436.406 328 432V400C328 395.594 331.594 392 336 392H368C372.406 392 376 395.594 376 400V432ZM496 376H464C450.781 376 440 386.781 440 400V432C440 445.219 450.781 456 464 456H496C509.219 456 520 445.219 520 432V400C520 386.781 509.219 376 496 376ZM504 432C504 436.406 500.406 440 496 440H464C459.594 440 456 436.406 456 432V400C456 395.594 459.594 392 464 392H496C500.406 392 504 395.594 504 400V432ZM496 248H464C450.781 248 440 258.781 440 272V304C440 317.219 450.781 328 464 328H496C509.219 328 520 317.219 520 304V272C520 258.781 509.219 248 496 248ZM504 304C504 308.406 500.406 312 496 312H464C459.594 312 456 308.406 456 304V272C456 267.594 459.594 264 464 264H496C500.406 264 504 267.594 504 272V304ZM368 248H336C322.781 248 312 258.781 312 272V304C312 317.219 322.781 328 336 328H368C381.219 328 392 317.219 392 304V272C392 258.781 381.219 248 368 248ZM376 304C376 308.406 372.406 312 368 312H336C331.594 312 328 308.406 328 304V272C328 267.594 331.594 264 336 264H368C372.406 264 376 267.594 376 272V304ZM448 183.469V160L471.688 159.781C480.688 159.781 488 152.469 488 143.469V112.094C488 103.094 480.688 95.781 471.688 95.781H448V72.094C448 63.094 440.688 55.781 431.688 55.781H400.312C391.312 55.781 384 63.094 384 72.094V95.781H360.312C351.312 95.781 344 103.094 344 112.094V143.469C344 152.469 351.312 159.781 360.312 159.781H383.781L384 183.469C384 192.469 391.312 199.781 400.312 199.781H431.688C440.688 199.781 448 192.469 448 183.469ZM431.688 183.781L400 183.375L399.594 143.781L360 143.469L360.312 111.781H400V71.781L432 72.094V111.781L472 112.094L471.594 143.781L432 144.188L431.688 183.781ZM183.688 223.781H160V200.094C160 191.094 152.688 183.781 143.688 183.781H112.312C103.312 183.781 96 191.094 96 200.094V223.781H72.312C63.312 223.781 56 231.094 56 240.094V271.469C56 280.469 63.312 287.781 72.312 287.781H95.781L96 311.469C96 320.469 103.312 327.781 112.312 327.781H143.688C152.688 327.781 160 320.469 160 311.469V288L183.688 287.781C192.688 287.781 200 280.469 200 271.469V240.094C200 231.094 192.688 223.781 183.688 223.781ZM183.594 271.781L144 272.188L143.688 311.781L112 311.375L111.594 271.781L72 271.469L72.312 239.781H112V199.781L144 200.094V239.781L184 240.094L183.594 271.781Z" />
    </Icon>
);

export default Hospitals;