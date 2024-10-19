
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `suitcase` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/suitcase?s=solid suitcase}
 * @preview ![suitcase](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0wIDE0NFY0MzJDMCA0NTcuNTk0IDIyLjQwNiA0ODAgNDggNDgwSDk2Vjk2SDQ4QzIyLjQwNiA5NiAwIDExOC40MDYgMCAxNDRaTTMzNiAwSDE3NkMxNTAuNDA2IDAgMTI4IDIyLjQwNiAxMjggNDhWNDgwSDM4NFY0OEMzODQgMjIuNDA2IDM2MS41OTQgMCAzMzYgMFpNMzM2IDk2SDE3NlY0OEgzMzZWOTZaTTQ2NCA5Nkg0MTZWNDgwSDQ2NEM0ODkuNTk0IDQ4MCA1MTIgNDU3LjU5NCA1MTIgNDMyVjE0NEM1MTIgMTE4LjQwNiA0ODkuNTk0IDk2IDQ2NCA5NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Suitcase(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M0 144V432C0 457.594 22.406 480 48 480H96V96H48C22.406 96 0 118.406 0 144ZM336 0H176C150.406 0 128 22.406 128 48V480H384V48C384 22.406 361.594 0 336 0ZM336 96H176V48H336V96ZM464 96H416V480H464C489.594 480 512 457.594 512 432V144C512 118.406 489.594 96 464 96Z" />
        </Icon>
    </>
}