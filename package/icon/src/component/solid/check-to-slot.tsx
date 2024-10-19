
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `check-to-slot` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/check-to-slot?s=solid check-to-slot}
 * @preview ![check-to-slot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODAgODBDNDgwIDUzLjQ5MiA0NTguNTEgMzIgNDMyIDMySDE0NEMxMTcuNDkgMzIgOTYgNTMuNDkyIDk2IDgwVjM4NEg0ODBWODBaTTM3OC44NzUgMTY2LjgxMkwyOTAuODc1IDI3OC44MTJDMjg2Ljg0NCAyODMuOTY5IDI4MC44NzUgMjg3LjI1IDI3NC4zNDQgMjg3Ljg3NUMyNzMuNTYyIDI4Ny45NjkgMjcyLjc4MSAyODggMjcyIDI4OEMyNjYuMjgxIDI4OCAyNjAuNzUgMjg1Ljk2OSAyNTYuMzc1IDI4Mi4yMTlMMjAwLjM3NSAyMzQuMjE5QzE5MC4zMTIgMjI1LjU5NCAxODkuMTU2IDIxMC40MzggMTk3Ljc4MSAyMDAuMzc1QzIwNi40MzggMTkwLjMxMyAyMjEuNTk0IDE4OS4xODggMjMxLjYyNSAxOTcuNzgxTDI2OC41OTQgMjI5LjQ2OUwzNDEuMTI1IDEzNy4xODhDMzQ5LjMxMyAxMjYuNzgxIDM2NC40MzggMTI0Ljk2OSAzNzQuODEzIDEzMy4xMjVDMzg1LjI1IDE0MS4zMTIgMzg3LjA2MiAxNTYuNDA2IDM3OC44NzUgMTY2LjgxMlpNNTI4IDI4OEg1MTJWNDAwQzUxMiA0MDguODM2IDUwNC44MzYgNDE2IDQ5NiA0MTZIODBDNzEuMTY0IDQxNiA2NCA0MDguODM2IDY0IDQwMFYyODhINDhDMjEuNDkyIDI4OCAwIDMwOS40OTIgMCAzMzZWNDMyQzAgNDU4LjUwOCAyMS40OTIgNDgwIDQ4IDQ4MEg1MjhDNTU0LjUwOCA0ODAgNTc2IDQ1OC41MDggNTc2IDQzMlYzMzZDNTc2IDMwOS40OTIgNTU0LjUwOCAyODggNTI4IDI4OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CheckToSlot(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M480 80C480 53.492 458.51 32 432 32H144C117.49 32 96 53.492 96 80V384H480V80ZM378.875 166.812L290.875 278.812C286.844 283.969 280.875 287.25 274.344 287.875C273.562 287.969 272.781 288 272 288C266.281 288 260.75 285.969 256.375 282.219L200.375 234.219C190.312 225.594 189.156 210.438 197.781 200.375C206.438 190.313 221.594 189.188 231.625 197.781L268.594 229.469L341.125 137.188C349.313 126.781 364.438 124.969 374.813 133.125C385.25 141.312 387.062 156.406 378.875 166.812ZM528 288H512V400C512 408.836 504.836 416 496 416H80C71.164 416 64 408.836 64 400V288H48C21.492 288 0 309.492 0 336V432C0 458.508 21.492 480 48 480H528C554.508 480 576 458.508 576 432V336C576 309.492 554.508 288 528 288Z" />
        </Icon>
    </>
}