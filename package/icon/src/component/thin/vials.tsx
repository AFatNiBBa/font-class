
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `vials` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/vials?s=thin vials}
 * @preview ![vials](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMTYgMzJIOEMzLjU5NCAzMiAwIDM1LjU5NCAwIDQwUzMuNTk0IDQ4IDggNDhIMjE2QzIyMC40MDYgNDggMjI0IDQ0LjQwNiAyMjQgNDBTMjIwLjQwNiAzMiAyMTYgMzJaTTE4NCA4MEMxNzkuNTk0IDgwIDE3NiA4My41OTQgMTc2IDg4VjI0OEg0OFY4OEM0OCA4My41OTQgNDQuNDA2IDgwIDQwIDgwUzMyIDgzLjU5NCAzMiA4OFY0MDBDMzIgNDQ0LjEyNSA2Ny44NzUgNDgwIDExMiA0ODBTMTkyIDQ0NC4xMjUgMTkyIDQwMFY4OEMxOTIgODMuNTk0IDE4OC40MDYgODAgMTg0IDgwWk0xNzYgNDAwQzE3NiA0MzUuMjgxIDE0Ny4yODEgNDY0IDExMiA0NjRTNDggNDM1LjI4MSA0OCA0MDBWMjY0SDE3NlY0MDBaTTUwNCAzMkgyOTZDMjkxLjU5NCAzMiAyODggMzUuNTk0IDI4OCA0MFMyOTEuNTk0IDQ4IDI5NiA0OEg1MDRDNTA4LjQwNiA0OCA1MTIgNDQuNDA2IDUxMiA0MFM1MDguNDA2IDMyIDUwNCAzMlpNNDcyIDgwQzQ2Ny41OTQgODAgNDY0IDgzLjU5NCA0NjQgODhWMjQ4SDMzNlY4OEMzMzYgODMuNTk0IDMzMi40MDYgODAgMzI4IDgwUzMyMCA4My41OTQgMzIwIDg4VjQwMEMzMjAgNDQ0LjEyNSAzNTUuODc1IDQ4MCA0MDAgNDgwUzQ4MCA0NDQuMTI1IDQ4MCA0MDBWODhDNDgwIDgzLjU5NCA0NzYuNDA2IDgwIDQ3MiA4MFpNNDY0IDQwMEM0NjQgNDM1LjI4MSA0MzUuMjgxIDQ2NCA0MDAgNDY0UzMzNiA0MzUuMjgxIDMzNiA0MDBWMjY0SDQ2NFY0MDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Vials(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M216 32H8C3.594 32 0 35.594 0 40S3.594 48 8 48H216C220.406 48 224 44.406 224 40S220.406 32 216 32ZM184 80C179.594 80 176 83.594 176 88V248H48V88C48 83.594 44.406 80 40 80S32 83.594 32 88V400C32 444.125 67.875 480 112 480S192 444.125 192 400V88C192 83.594 188.406 80 184 80ZM176 400C176 435.281 147.281 464 112 464S48 435.281 48 400V264H176V400ZM504 32H296C291.594 32 288 35.594 288 40S291.594 48 296 48H504C508.406 48 512 44.406 512 40S508.406 32 504 32ZM472 80C467.594 80 464 83.594 464 88V248H336V88C336 83.594 332.406 80 328 80S320 83.594 320 88V400C320 444.125 355.875 480 400 480S480 444.125 480 400V88C480 83.594 476.406 80 472 80ZM464 400C464 435.281 435.281 464 400 464S336 435.281 336 400V264H464V400Z" />
        </Icon>
    </>
}