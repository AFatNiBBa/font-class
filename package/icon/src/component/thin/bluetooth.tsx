
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `bluetooth` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bluetooth?s=thin bluetooth}
 * @preview ![bluetooth](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNzIuNjU2IDI1Ni4wMDRMMzE3LjA2MyAxMzguMTk1QzMxOC45MDYgMTM2LjY5NSAzMjAgMTM0LjQxNCAzMjAgMTMyLjAwOFMzMTguOTA2IDEyNy4zMiAzMTcuMDYzIDEyNS44MkwxNjUuMDYzIDEuODJDMTYyLjY1NiAtMC4xMTcgMTU5LjM3NSAtMC41ODYgMTU2LjU2MyAwLjc4OUMxNTMuNzgxIDIuMTAyIDE1MiA0LjkxNCAxNTIgOC4wMDhWMjM5LjE2TDEzLjA2MSAxMjUuODJDOS41OTIgMTIzLjAwOCA0LjU5MiAxMjMuNTA4IDEuODExIDEyNi45NDVDLTEuMDAyIDEzMC4zODMgLTAuNDcxIDEzNS40MTQgMi45MzYgMTM4LjE5NUwxNDcuMzQ0IDI1Ni4wMDRMMi45MzYgMzczLjgxM0MtMC40NzEgMzc2LjU5NCAtMS4wMDIgMzgxLjYyNSAxLjgxMSAzODUuMDYzQzQuNTkyIDM4OC40NjkgOS41OTIgMzg5IDEzLjA2MSAzODYuMTg4TDE1MiAyNzIuODQ4VjUwNEMxNTIgNTA3LjA5NCAxNTMuNzgxIDUwOS45MDYgMTU2LjU2MyA1MTEuMjE5QzE1Ny42NTYgNTExLjc1IDE1OC44NDQgNTEyIDE2MCA1MTJDMTYxLjgxMyA1MTIgMTYzLjU5NCA1MTEuMzc1IDE2NS4wNjMgNTEwLjE4OEwzMTcuMDYzIDM4Ni4xODhDMzE4LjkwNiAzODQuNjg4IDMyMCAzODIuNDA2IDMyMCAzODBTMzE4LjkwNiAzNzUuMzEyIDMxNy4wNjMgMzczLjgxMkwxNzIuNjU2IDI1Ni4wMDRaTTE2OCAyNC44NTJMMjk5LjM0NCAxMzIuMDA4TDE2OCAyMzkuMTZWMjQuODUyWk0xNjggNDg3LjE1NlYyNzIuODQ4TDI5OS4zNDQgMzgwTDE2OCA0ODcuMTU2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Bluetooth(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M172.656 256.004L317.063 138.195C318.906 136.695 320 134.414 320 132.008S318.906 127.32 317.063 125.82L165.063 1.82C162.656 -0.117 159.375 -0.586 156.563 0.789C153.781 2.102 152 4.914 152 8.008V239.16L13.061 125.82C9.592 123.008 4.592 123.508 1.811 126.945C-1.002 130.383 -0.471 135.414 2.936 138.195L147.344 256.004L2.936 373.813C-0.471 376.594 -1.002 381.625 1.811 385.063C4.592 388.469 9.592 389 13.061 386.188L152 272.848V504C152 507.094 153.781 509.906 156.563 511.219C157.656 511.75 158.844 512 160 512C161.813 512 163.594 511.375 165.063 510.188L317.063 386.188C318.906 384.688 320 382.406 320 380S318.906 375.312 317.063 373.812L172.656 256.004ZM168 24.852L299.344 132.008L168 239.16V24.852ZM168 487.156V272.848L299.344 380L168 487.156Z" />
        </Icon>
    </>
}