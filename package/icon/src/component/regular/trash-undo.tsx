
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `trash-undo` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/trash-undo?s=regular trash-undo}
 * @preview ![trash-undo](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMDEgMzU0Ljc1QzIwNS40MzggMzU4LjI4MSAyMTAuNzE5IDM2MCAyMTYgMzYwQzIyMy4wMzEgMzYwIDIzMCAzNTYuOTA2IDIzNC43NSAzNTFDMjQzLjAzMSAzNDAuNjU2IDI0MS4zNDQgMzI1LjUzMSAyMzEgMzE3LjI1TDIwNC40MjIgMjk2SDI0MEMyNjIuMDYyIDI5NiAyODAgMzEzLjkzOCAyODAgMzM2VjM2MEMyODAgMzczLjI1IDI5MC43NSAzODQgMzA0IDM4NFMzMjggMzczLjI1IDMyOCAzNjBWMzM2QzMyOCAyODcuNDY5IDI4OC41MzEgMjQ4IDI0MCAyNDhIMjA0LjQyMkwyMzEgMjI2Ljc1QzI0MS4zNDQgMjE4LjQ2OSAyNDMuMDMxIDIwMy4zNDQgMjM0Ljc1IDE5M0MyMjYuNDM4IDE4Mi42ODggMjExLjM3NSAxODEuMDMxIDIwMSAxODkuMjVMMTIxIDI1My4yNUMxMTUuMzEyIDI1Ny44MTIgMTEyIDI2NC43MTkgMTEyIDI3MlMxMTUuMzEyIDI4Ni4xODggMTIxIDI5MC43NUwyMDEgMzU0Ljc1Wk00MjQgODBIMzQ5LjYyNUwzMTUuNjI1IDIzLjI1QzMwNi44NzUgOC44NzUgMjkxLjI1IDAgMjc0LjM3NSAwSDE3My42MjVDMTU2Ljc1IDAgMTQxLjEyNSA4Ljg3NSAxMzIuMzc1IDIzLjI1TDk4LjM3NSA4MEgyNEMxMC43NDYgODAgMCA5MC43NDQgMCAxMDRDMCAxMTcuMjU0IDEwLjc0NiAxMjggMjQgMTI4SDMyTDUzLjI1IDQ2N0M1NC43NSA0OTIuMjUgNzUuNzUgNTEyIDEwMS4xMjUgNTEySDM0Ni44NzVDMzcyLjI1IDUxMiAzOTMuMjUgNDkyLjI1IDM5NC43NSA0NjdMNDE2IDEyOEg0MjRDNDM3LjI1NCAxMjggNDQ4IDExNy4yNTQgNDQ4IDEwNEM0NDggOTAuNzQ0IDQzNy4yNTQgODAgNDI0IDgwWk0xNzMuNjI1IDQ4SDI3NC4zNzVMMjkzLjYyNSA4MEgxNTQuMzc1TDE3My42MjUgNDhaTTM0Ni44NzUgNDY0SDEwMS4xMjVMODAuMTI1IDEyOEgzNjcuODc1TDM0Ni44NzUgNDY0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function TrashUndo(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M201 354.75C205.438 358.281 210.719 360 216 360C223.031 360 230 356.906 234.75 351C243.031 340.656 241.344 325.531 231 317.25L204.422 296H240C262.062 296 280 313.938 280 336V360C280 373.25 290.75 384 304 384S328 373.25 328 360V336C328 287.469 288.531 248 240 248H204.422L231 226.75C241.344 218.469 243.031 203.344 234.75 193C226.438 182.688 211.375 181.031 201 189.25L121 253.25C115.312 257.812 112 264.719 112 272S115.312 286.188 121 290.75L201 354.75ZM424 80H349.625L315.625 23.25C306.875 8.875 291.25 0 274.375 0H173.625C156.75 0 141.125 8.875 132.375 23.25L98.375 80H24C10.746 80 0 90.744 0 104C0 117.254 10.746 128 24 128H32L53.25 467C54.75 492.25 75.75 512 101.125 512H346.875C372.25 512 393.25 492.25 394.75 467L416 128H424C437.254 128 448 117.254 448 104C448 90.744 437.254 80 424 80ZM173.625 48H274.375L293.625 80H154.375L173.625 48ZM346.875 464H101.125L80.125 128H367.875L346.875 464Z" />
        </Icon>
    </>
}