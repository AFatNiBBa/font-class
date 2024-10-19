
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `clapperboard` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/clapperboard?s=thin clapperboard}
 * @preview ![clapperboard](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEg0NDhDNDgzLjM0NiA0ODAgNTEyIDQ1MS4zNDYgNTEyIDQxNlY5NkM1MTIgNjAuNjU0IDQ4My4zNDYgMzIgNDQ4IDMyWk00NDggNDhDNDUxLjg4MyA0OCA0NTUuNjA3IDQ4LjU4OCA0NTkuMjI1IDQ5LjQ2M0wzMzIuNjg4IDE3NkgyMDMuMzEyTDMzMS4zMTIgNDhINDQ4Wk0zMDguNjg4IDQ4TDE4MC42ODggMTc2SDUxLjMxMkwxNzkuMzEyIDQ4SDMwOC42ODhaTTE2IDk2QzE2IDY5LjUzMyAzNy41MzMgNDggNjQgNDhIMTU2LjY4OEwyOC42ODggMTc2SDE2Vjk2Wk00OTYgNDE2QzQ5NiA0NDIuNDY3IDQ3NC40NjcgNDY0IDQ0OCA0NjRINjRDMzcuNTMzIDQ2NCAxNiA0NDIuNDY3IDE2IDQxNlYxOTJINDk2VjQxNlpNNDk2IDE3NkgzNTUuMzEyTDQ3NC45NzUgNTYuMzM4QzQ4Ny42NSA2NC45ODggNDk2IDc5LjUzMSA0OTYgOTZWMTc2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Clapperboard(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V96C512 60.654 483.346 32 448 32ZM448 48C451.883 48 455.607 48.588 459.225 49.463L332.688 176H203.312L331.312 48H448ZM308.688 48L180.688 176H51.312L179.312 48H308.688ZM16 96C16 69.533 37.533 48 64 48H156.688L28.688 176H16V96ZM496 416C496 442.467 474.467 464 448 464H64C37.533 464 16 442.467 16 416V192H496V416ZM496 176H355.312L474.975 56.338C487.65 64.988 496 79.531 496 96V176Z" />
        </Icon>
    </>
}