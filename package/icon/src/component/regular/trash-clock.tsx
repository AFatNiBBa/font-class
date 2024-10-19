
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `trash-clock` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/trash-clock?s=regular trash-clock}
 * @preview ![trash-clock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODQuNiA0NjRIMTAxLjEyNUw4MC4xMjUgMTI4SDM2Ny44NzVMMzYyLjk5NiAyMDYuMDdDMzc4LjMwMyAxOTkuNTM5IDM5NC43NCAxOTUuMTgyIDQxMS45MTIgMTkzLjIyOUw0MTYgMTI4SDQyNEM0MzcuMjU2IDEyOCA0NDggMTE3LjI1NCA0NDggMTA0QzQ0OCA5MC43NDQgNDM3LjI1NiA4MCA0MjQgODBIMzQ5LjYyNUwzMTUuNjI1IDIzLjI1QzMwNi44NzUgOC44NzUgMjkxLjI1IDAgMjc0LjM3NSAwSDE3My42MjVDMTU2Ljc1IDAgMTQxLjEyNSA4Ljg3NSAxMzIuMzc1IDIzLjI1TDk4LjM3NSA4MEgyNEMxMC43NDYgODAgMCA5MC43NDQgMCAxMDRDMCAxMTcuMjU0IDEwLjc0NiAxMjggMjQgMTI4SDMyTDUzLjI1IDQ2N0M1NC43NSA0OTIuMjUgNzUuNzUgNTEyIDEwMS4xMjUgNTEySDMzMS4wMDJDMzEyLjY0NSA0OTkuMSAyOTYuODc5IDQ4Mi44MTQgMjg0LjYgNDY0Wk0xNzMuNjI1IDQ4SDI3NC4zNzVMMjkzLjYyNSA4MEgxNTQuMzc1TDE3My42MjUgNDhaTTQzMiAyMjRDMzUyLjM3NSAyMjQgMjg4IDI4OC4zNzUgMjg4IDM2OFMzNTIuMzc1IDUxMiA0MzIgNTEyUzU3NiA0NDcuNjI1IDU3NiAzNjhTNTExLjYyNSAyMjQgNDMyIDIyNFpNNDgwIDM4NEg0MjUuNzVDNDIwLjM3NSAzODQgNDE2IDM3OS42MjUgNDE2IDM3NC4yNVYzMDRDNDE2IDI5NS4xNjQgNDIzLjE2NCAyODggNDMyIDI4OEM0NDAuODM4IDI4OCA0NDggMjk1LjE2NCA0NDggMzA0VjM1Mkg0ODBDNDg4LjgzOCAzNTIgNDk2IDM1OS4xNjQgNDk2IDM2OFM0ODguODM4IDM4NCA0ODAgMzg0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function TrashClock(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M284.6 464H101.125L80.125 128H367.875L362.996 206.07C378.303 199.539 394.74 195.182 411.912 193.229L416 128H424C437.256 128 448 117.254 448 104C448 90.744 437.256 80 424 80H349.625L315.625 23.25C306.875 8.875 291.25 0 274.375 0H173.625C156.75 0 141.125 8.875 132.375 23.25L98.375 80H24C10.746 80 0 90.744 0 104C0 117.254 10.746 128 24 128H32L53.25 467C54.75 492.25 75.75 512 101.125 512H331.002C312.645 499.1 296.879 482.814 284.6 464ZM173.625 48H274.375L293.625 80H154.375L173.625 48ZM432 224C352.375 224 288 288.375 288 368S352.375 512 432 512S576 447.625 576 368S511.625 224 432 224ZM480 384H425.75C420.375 384 416 379.625 416 374.25V304C416 295.164 423.164 288 432 288C440.838 288 448 295.164 448 304V352H480C488.838 352 496 359.164 496 368S488.838 384 480 384Z" />
        </Icon>
    </>
}