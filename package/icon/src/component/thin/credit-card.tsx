
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `credit-card` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/credit-card?s=thin credit-card}
 * @preview ![credit-card](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEg1MTJDNTQ3LjM0NiA0ODAgNTc2IDQ1MS4zNDYgNTc2IDQxNlY5NkM1NzYgNjAuNjU0IDU0Ny4zNDYgMzIgNTEyIDMyWk01NjAgNDE2QzU2MCA0NDIuNDY3IDUzOC40NjcgNDY0IDUxMiA0NjRINjRDMzcuNTMzIDQ2NCAxNiA0NDIuNDY3IDE2IDQxNlYyMjRINTYwVjQxNlpNNTYwIDIwOEgxNlYxNDRINTYwVjIwOFpNNTYwIDEyOEgxNlY5NkMxNiA2OS41MzMgMzcuNTMzIDQ4IDY0IDQ4SDUxMkM1MzguNDY3IDQ4IDU2MCA2OS41MzMgNTYwIDk2VjEyOFpNMjAwIDM2OEgzNDRDMzQ4LjQxOCAzNjggMzUyIDM2NC40MTggMzUyIDM2MFMzNDguNDE4IDM1MiAzNDQgMzUySDIwMEMxOTUuNTgyIDM1MiAxOTIgMzU1LjU4MiAxOTIgMzYwUzE5NS41ODIgMzY4IDIwMCAzNjhaTTcyIDM2OEgxNTJDMTU2LjQxOCAzNjggMTYwIDM2NC40MTggMTYwIDM2MFMxNTYuNDE4IDM1MiAxNTIgMzUySDcyQzY3LjU4MiAzNTIgNjQgMzU1LjU4MiA2NCAzNjBTNjcuNTgyIDM2OCA3MiAzNjhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CreditCard(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M512 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H512C547.346 480 576 451.346 576 416V96C576 60.654 547.346 32 512 32ZM560 416C560 442.467 538.467 464 512 464H64C37.533 464 16 442.467 16 416V224H560V416ZM560 208H16V144H560V208ZM560 128H16V96C16 69.533 37.533 48 64 48H512C538.467 48 560 69.533 560 96V128ZM200 368H344C348.418 368 352 364.418 352 360S348.418 352 344 352H200C195.582 352 192 355.582 192 360S195.582 368 200 368ZM72 368H152C156.418 368 160 364.418 160 360S156.418 352 152 352H72C67.582 352 64 355.582 64 360S67.582 368 72 368Z" />
        </Icon>
    </>
}