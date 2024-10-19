
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file-invoice` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-invoice?s=thin file-invoice}
 * @preview ![file-invoice](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik03MiA4MEgxNTJDMTU2LjQwNiA4MCAxNjAgNzYuNDA2IDE2MCA3MlMxNTYuNDA2IDY0IDE1MiA2NEg3MkM2Ny41OTQgNjQgNjQgNjcuNTk0IDY0IDcyUzY3LjU5NCA4MCA3MiA4MFpNNzIgMTQ0SDE1MkMxNTYuNDA2IDE0NCAxNjAgMTQwLjQwNiAxNjAgMTM2UzE1Ni40MDYgMTI4IDE1MiAxMjhINzJDNjcuNTk0IDEyOCA2NCAxMzEuNTk0IDY0IDEzNlM2Ny41OTQgMTQ0IDcyIDE0NFpNMzc0LjYyOSAxNTAuNjI1TDIzMy4zNzEgOS4zNzVDMjI3LjM3MSAzLjM3MSAyMTkuMjMgMCAyMTAuNzQ2IDBINjRDMjguNjUyIDAgMCAyOC42NTIgMCA2NFY0NDhDMCA0ODMuMzQ0IDI4LjY1MiA1MTIgNjQgNTEySDMyMEMzNTUuMzQ4IDUxMiAzODQgNDgzLjM0NCAzODQgNDQ4VjE3My4yNTRDMzg0IDE2NC43NjYgMzgwLjYyOSAxNTYuNjI5IDM3NC42MjkgMTUwLjYyNVpNMjI0IDIyLjYyOUwzNjEuMzc1IDE2MEgyNDhDMjM0Ljc4MSAxNjAgMjI0IDE0OS4yMzQgMjI0IDEzNlYyMi42MjlaTTM2OCA0NDhDMzY4IDQ3NC40NjkgMzQ2LjQ2OSA0OTYgMzIwIDQ5Nkg2NEMzNy41MzEgNDk2IDE2IDQ3NC40NjkgMTYgNDQ4VjY0QzE2IDM3LjUzMSAzNy41MzEgMTYgNjQgMTZIMjA4VjEzNkMyMDggMTU4LjA2MiAyMjUuOTM4IDE3NiAyNDggMTc2SDM2OFY0NDhaTTMxMiA0MzJIMjMyQzIyNy41OTQgNDMyIDIyNCA0MzUuNTk0IDIyNCA0NDBTMjI3LjU5NCA0NDggMjMyIDQ0OEgzMTJDMzE2LjQwNiA0NDggMzIwIDQ0NC40MDYgMzIwIDQ0MFMzMTYuNDA2IDQzMiAzMTIgNDMyWk02NCAyNDBWMzM2QzY0IDM0NC44MzYgNzEuMTY0IDM1MiA4MCAzNTJIMzA0QzMxMi44MzYgMzUyIDMyMCAzNDQuODM2IDMyMCAzMzZWMjQwQzMyMCAyMzEuMTY0IDMxMi44MzYgMjI0IDMwNCAyMjRIODBDNzEuMTY0IDIyNCA2NCAyMzEuMTY0IDY0IDI0MFpNMzA0IDMzNkg4MFYyNDBIMzA0VjMzNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FileInvoice(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M72 80H152C156.406 80 160 76.406 160 72S156.406 64 152 64H72C67.594 64 64 67.594 64 72S67.594 80 72 80ZM72 144H152C156.406 144 160 140.406 160 136S156.406 128 152 128H72C67.594 128 64 131.594 64 136S67.594 144 72 144ZM374.629 150.625L233.371 9.375C227.371 3.371 219.23 0 210.746 0H64C28.652 0 0 28.652 0 64V448C0 483.344 28.652 512 64 512H320C355.348 512 384 483.344 384 448V173.254C384 164.766 380.629 156.629 374.629 150.625ZM224 22.629L361.375 160H248C234.781 160 224 149.234 224 136V22.629ZM368 448C368 474.469 346.469 496 320 496H64C37.531 496 16 474.469 16 448V64C16 37.531 37.531 16 64 16H208V136C208 158.062 225.938 176 248 176H368V448ZM312 432H232C227.594 432 224 435.594 224 440S227.594 448 232 448H312C316.406 448 320 444.406 320 440S316.406 432 312 432ZM64 240V336C64 344.836 71.164 352 80 352H304C312.836 352 320 344.836 320 336V240C320 231.164 312.836 224 304 224H80C71.164 224 64 231.164 64 240ZM304 336H80V240H304V336Z" />
        </Icon>
    </>
}