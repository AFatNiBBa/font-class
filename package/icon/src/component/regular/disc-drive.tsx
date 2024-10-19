
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `disc-drive` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/disc-drive?s=regular disc-drive}
 * @preview ![disc-drive](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTEyQzE3Ni41IDExMiAxMTIgMTc2LjUgMTEyIDI1NlMxNzYuNSA0MDAgMjU2IDQwMFM0MDAgMzM1LjUgNDAwIDI1NlMzMzUuNSAxMTIgMjU2IDExMlpNMjU2IDI4OEMyMzguMzc1IDI4OCAyMjQgMjczLjYyNSAyMjQgMjU2UzIzOC4zNzUgMjI0IDI1NiAyMjRDMjczLjYyNSAyMjQgMjg4IDIzOC4zNzUgMjg4IDI1NlMyNzMuNjI1IDI4OCAyNTYgMjg4Wk00ODggNDMySDQ4MFY5NkM0ODAgNjAuNjU0IDQ1MS4zNDYgMzIgNDE2IDMySDk2QzYwLjY1NCAzMiAzMiA2MC42NTQgMzIgOTZWNDMySDI0QzEwLjc0NSA0MzIgMCA0NDIuNzQ1IDAgNDU2VjQ1NkMwIDQ2OS4yNTUgMTAuNzQ1IDQ4MCAyNCA0ODBINDg4QzUwMS4yNTUgNDgwIDUxMiA0NjkuMjU1IDUxMiA0NTZWNDU2QzUxMiA0NDIuNzQ1IDUwMS4yNTUgNDMyIDQ4OCA0MzJaTTQzMiA0MzJIODBWOTZDODAgODcuMTI1IDg3LjEyNSA4MCA5NiA4MEg0MTZDNDI0Ljg3NSA4MCA0MzIgODcuMTI1IDQzMiA5NlY0MzJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function DiscDrive(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 112C176.5 112 112 176.5 112 256S176.5 400 256 400S400 335.5 400 256S335.5 112 256 112ZM256 288C238.375 288 224 273.625 224 256S238.375 224 256 224C273.625 224 288 238.375 288 256S273.625 288 256 288ZM488 432H480V96C480 60.654 451.346 32 416 32H96C60.654 32 32 60.654 32 96V432H24C10.745 432 0 442.745 0 456V456C0 469.255 10.745 480 24 480H488C501.255 480 512 469.255 512 456V456C512 442.745 501.255 432 488 432ZM432 432H80V96C80 87.125 87.125 80 96 80H416C424.875 80 432 87.125 432 96V432Z" />
        </Icon>
    </>
}