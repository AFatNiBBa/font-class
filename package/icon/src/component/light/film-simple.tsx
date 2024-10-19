
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `film-simple` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/film-simple?s=light film-simple}
 * @preview ![film-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEg0NDhDNDgzLjM0NiA0ODAgNTEyIDQ1MS4zNDYgNTEyIDQxNlY5NkM1MTIgNjAuNjU0IDQ4My4zNDYgMzIgNDQ4IDMyWk0zMiA5NkMzMiA3OC4zNTUgNDYuMzU1IDY0IDY0IDY0SDk2VjE0NEgzMlY5NlpNMzIgMTc2SDk2VjI0MEgzMlYxNzZaTTMyIDI3Mkg5NlYzMzZIMzJWMjcyWk02NCA0NDhDNDYuMzU1IDQ0OCAzMiA0MzMuNjQ1IDMyIDQxNlYzNjhIOTZWNDQ4SDY0Wk0xMjggNDQ4VjY0SDM4NFY0NDhIMTI4Wk00ODAgNDE2QzQ4MCA0MzMuNjQ1IDQ2NS42NDUgNDQ4IDQ0OCA0NDhINDE2VjM2OEg0ODBWNDE2Wk00ODAgMzM2SDQxNlYyNzJINDgwVjMzNlpNNDgwIDI0MEg0MTZWMTc2SDQ4MFYyNDBaTTQ4MCAxNDRINDE2VjY0SDQ0OEM0NjUuNjQ1IDY0IDQ4MCA3OC4zNTUgNDgwIDk2VjE0NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FilmSimple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V96C512 60.654 483.346 32 448 32ZM32 96C32 78.355 46.355 64 64 64H96V144H32V96ZM32 176H96V240H32V176ZM32 272H96V336H32V272ZM64 448C46.355 448 32 433.645 32 416V368H96V448H64ZM128 448V64H384V448H128ZM480 416C480 433.645 465.645 448 448 448H416V368H480V416ZM480 336H416V272H480V336ZM480 240H416V176H480V240ZM480 144H416V64H448C465.645 64 480 78.355 480 96V144Z" />
        </Icon>
    </>
}