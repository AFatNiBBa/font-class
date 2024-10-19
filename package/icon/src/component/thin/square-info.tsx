
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `square-info` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-info?s=thin square-info}
 * @preview ![square-info](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjMuOTE4IDE3NkMyMzIuNzQgMTc2IDIzOS45MTggMTY4LjgyMiAyMzkuOTE4IDE2MFMyMzIuNzQgMTQ0IDIyMy45MTggMTQ0UzIwNy45MTggMTUxLjE3OCAyMDcuOTE4IDE2MFMyMTUuMDk2IDE3NiAyMjMuOTE4IDE3NlpNMjU2IDM1MkgyMzEuOThWMjE2LjA0N0MyMzEuOTggMjE2LjAyOSAyMzIgMjE2LjAxOCAyMzIgMjE2QzIzMiAyMTEuNTk0IDIyOC40MDYgMjA4IDIyNCAyMDhIMTkyQzE4Ny41OTQgMjA4IDE4NCAyMTEuNTk0IDE4NCAyMTZTMTg3LjU5NCAyMjQgMTkyIDIyNEgyMTUuOThWMzUySDE5MkMxODcuNTk0IDM1MiAxODQgMzU1LjU5NCAxODQgMzYwUzE4Ny41OTQgMzY4IDE5MiAzNjhIMjU2QzI2MC40MDYgMzY4IDI2NCAzNjQuNDA2IDI2NCAzNjBTMjYwLjQwNiAzNTIgMjU2IDM1MlpNMzg0IDMySDY0QzI4LjY1NiAzMiAwIDYwLjY1NiAwIDk2VjQxNkMwIDQ1MS4zNDQgMjguNjU2IDQ4MCA2NCA0ODBIMzg0QzQxOS4zNDggNDgwIDQ0OCA0NTEuMzQ0IDQ0OCA0MTZWOTZDNDQ4IDYwLjY1NiA0MTkuMzQ4IDMyIDM4NCAzMlpNNDMyIDQxNkM0MzIgNDQyLjQ2OSA0MTAuNDY5IDQ2NCAzODQgNDY0SDY0QzM3LjUzMSA0NjQgMTYgNDQyLjQ2OSAxNiA0MTZWOTZDMTYgNjkuNTMxIDM3LjUzMSA0OCA2NCA0OEgzODRDNDEwLjQ2OSA0OCA0MzIgNjkuNTMxIDQzMiA5NlY0MTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SquareInfo(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M223.918 176C232.74 176 239.918 168.822 239.918 160S232.74 144 223.918 144S207.918 151.178 207.918 160S215.096 176 223.918 176ZM256 352H231.98V216.047C231.98 216.029 232 216.018 232 216C232 211.594 228.406 208 224 208H192C187.594 208 184 211.594 184 216S187.594 224 192 224H215.98V352H192C187.594 352 184 355.594 184 360S187.594 368 192 368H256C260.406 368 264 364.406 264 360S260.406 352 256 352ZM384 32H64C28.656 32 0 60.656 0 96V416C0 451.344 28.656 480 64 480H384C419.348 480 448 451.344 448 416V96C448 60.656 419.348 32 384 32ZM432 416C432 442.469 410.469 464 384 464H64C37.531 464 16 442.469 16 416V96C16 69.531 37.531 48 64 48H384C410.469 48 432 69.531 432 96V416Z" />
        </Icon>
    </>
}