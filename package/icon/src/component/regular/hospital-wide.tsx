
import { Icon } from "../../index";

/**
 * A component that renders the `hospital-wide` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hospital-wide?s=regular hospital-wide}
 * @preview ![hospital-wide](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xODAgNDE2SDE0MEMxMzMuMzc1IDQxNiAxMjggNDIxLjM3NSAxMjggNDI4VjQ2OEMxMjggNDc0LjYyNSAxMzMuMzc1IDQ4MCAxNDAgNDgwSDE4MEMxODYuNjI1IDQ4MCAxOTIgNDc0LjYyNSAxOTIgNDY4VjQyOEMxOTIgNDIxLjM3NSAxODYuNjI1IDQxNiAxODAgNDE2Wk0zMDggNDE2SDI2OEMyNjEuMzc1IDQxNiAyNTYgNDIxLjM3NSAyNTYgNDI4VjQ2OEMyNTYgNDc0LjYyNSAyNjEuMzc1IDQ4MCAyNjggNDgwSDMwOEMzMTQuNjI1IDQ4MCAzMjAgNDc0LjYyNSAzMjAgNDY4VjQyOEMzMjAgNDIxLjM3NSAzMTQuNjI1IDQxNiAzMDggNDE2Wk0xODAgMzIwSDE0MEMxMzMuMzc1IDMyMCAxMjggMzI1LjM3NSAxMjggMzMyVjM3MkMxMjggMzc4LjYyNSAxMzMuMzc1IDM4NCAxNDAgMzg0SDE4MEMxODYuNjI1IDM4NCAxOTIgMzc4LjYyNSAxOTIgMzcyVjMzMkMxOTIgMzI1LjM3NSAxODYuNjI1IDMyMCAxODAgMzIwWk0zMDggMzIwSDI2OEMyNjEuMzc1IDMyMCAyNTYgMzI1LjM3NSAyNTYgMzMyVjM3MkMyNTYgMzc4LjYyNSAyNjEuMzc1IDM4NCAyNjggMzg0SDMwOEMzMTQuNjI1IDM4NCAzMjAgMzc4LjYyNSAzMjAgMzcyVjMzMkMzMjAgMzI1LjM3NSAzMTQuNjI1IDMyMCAzMDggMzIwWk00MzYgMzIwSDM5NkMzODkuMzc1IDMyMCAzODQgMzI1LjM3NSAzODQgMzMyVjM3MkMzODQgMzc4LjYyNSAzODkuMzc1IDM4NCAzOTYgMzg0SDQzNkM0NDIuNjI1IDM4NCA0NDggMzc4LjYyNSA0NDggMzcyVjMzMkM0NDggMzI1LjM3NSA0NDIuNjI1IDMyMCA0MzYgMzIwWk01MTIgOTZINDgwLjQzNEw0ODAuNDY3IDY0LjA2NkM0ODAuNTA0IDI4LjY5MyA0NTEuODQgMCA0MTYuNDY3IDBIMTU5LjUzM0MxMjQuMTYgMCA5NS40OTYgMjguNjkzIDk1LjUzMyA2NC4wNjZMOTUuNTY2IDk2SDY0QzI4LjY1NCA5NiAwIDEyNC42NTIgMCAxNjBWNDg4QzAgNTAxLjI1NCAxMC43NDYgNTEyIDI0IDUxMlM0OCA1MDEuMjU0IDQ4IDQ4OFYxNjBDNDggMTUxLjE2MiA1NS4xNjQgMTQ0IDY0IDE0NEgxNDMuNjE3TDE0My41MzUgNjQuMDE2QzE0My41MjUgNTUuMTc0IDE1MC42OTEgNDggMTU5LjUzNSA0OEg0MTYuNDY3QzQyNS4zMTEgNDggNDMyLjQ3NyA1NS4xNzQgNDMyLjQ2NyA2NC4wMTZMNDMyLjM4NSAxNDRINTEyQzUyMC44MzYgMTQ0IDUyOCAxNTEuMTYyIDUyOCAxNjBWNDg4QzUyOCA1MDEuMjU0IDUzOC43NDYgNTEyIDU1MiA1MTJTNTc2IDUwMS4yNTQgNTc2IDQ4OFYxNjBDNTc2IDEyNC42NTIgNTQ3LjM0NiA5NiA1MTIgOTZaTTQzNiA0MTZIMzk2QzM4OS4zNzUgNDE2IDM4NCA0MjEuMzc1IDM4NCA0MjhWNDY4QzM4NCA0NzQuNjI1IDM4OS4zNzUgNDgwIDM5NiA0ODBINDM2QzQ0Mi42MjUgNDgwIDQ0OCA0NzQuNjI1IDQ0OCA0NjhWNDI4QzQ0OCA0MjEuMzc1IDQ0Mi42MjUgNDE2IDQzNiA0MTZaTTM1Ny42MDIgMTQ0SDMyMFYxMDYuMzk4QzMyMCAxMDAuNjU2IDMxNS4zNDQgOTYgMzA5LjYwMiA5NkgyNjYuMzk4QzI2MC42NTYgOTYgMjU2IDEwMC42NTYgMjU2IDEwNi4zOThWMTQ0SDIxOC4zOThDMjEyLjY1NiAxNDQgMjA4IDE0OC42NTYgMjA4IDE1NC4zOThWMTk3LjYwMkMyMDggMjAzLjM0NCAyMTIuNjU2IDIwOCAyMTguMzk4IDIwOEgyNTZWMjQ1LjYwMkMyNTYgMjUxLjM0NCAyNjAuNjU2IDI1NiAyNjYuMzk4IDI1NkgzMDkuNjAyQzMxNS4zNDQgMjU2IDMyMCAyNTEuMzQ0IDMyMCAyNDUuNjAyVjIwOEgzNTcuNjAyQzM2My4zNDQgMjA4IDM2OCAyMDMuMzQ0IDM2OCAxOTcuNjAyVjE1NC4zOThDMzY4IDE0OC42NTYgMzYzLjM0NCAxNDQgMzU3LjYwMiAxNDRaIi8+PC9zdmc+|width=32|height=32)
 */
const HospitalWide: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M180 416H140C133.375 416 128 421.375 128 428V468C128 474.625 133.375 480 140 480H180C186.625 480 192 474.625 192 468V428C192 421.375 186.625 416 180 416ZM308 416H268C261.375 416 256 421.375 256 428V468C256 474.625 261.375 480 268 480H308C314.625 480 320 474.625 320 468V428C320 421.375 314.625 416 308 416ZM180 320H140C133.375 320 128 325.375 128 332V372C128 378.625 133.375 384 140 384H180C186.625 384 192 378.625 192 372V332C192 325.375 186.625 320 180 320ZM308 320H268C261.375 320 256 325.375 256 332V372C256 378.625 261.375 384 268 384H308C314.625 384 320 378.625 320 372V332C320 325.375 314.625 320 308 320ZM436 320H396C389.375 320 384 325.375 384 332V372C384 378.625 389.375 384 396 384H436C442.625 384 448 378.625 448 372V332C448 325.375 442.625 320 436 320ZM512 96H480.434L480.467 64.066C480.504 28.693 451.84 0 416.467 0H159.533C124.16 0 95.496 28.693 95.533 64.066L95.566 96H64C28.654 96 0 124.652 0 160V488C0 501.254 10.746 512 24 512S48 501.254 48 488V160C48 151.162 55.164 144 64 144H143.617L143.535 64.016C143.525 55.174 150.691 48 159.535 48H416.467C425.311 48 432.477 55.174 432.467 64.016L432.385 144H512C520.836 144 528 151.162 528 160V488C528 501.254 538.746 512 552 512S576 501.254 576 488V160C576 124.652 547.346 96 512 96ZM436 416H396C389.375 416 384 421.375 384 428V468C384 474.625 389.375 480 396 480H436C442.625 480 448 474.625 448 468V428C448 421.375 442.625 416 436 416ZM357.602 144H320V106.398C320 100.656 315.344 96 309.602 96H266.398C260.656 96 256 100.656 256 106.398V144H218.398C212.656 144 208 148.656 208 154.398V197.602C208 203.344 212.656 208 218.398 208H256V245.602C256 251.344 260.656 256 266.398 256H309.602C315.344 256 320 251.344 320 245.602V208H357.602C363.344 208 368 203.344 368 197.602V154.398C368 148.656 363.344 144 357.602 144Z" />
    </Icon>
);

export default HospitalWide;