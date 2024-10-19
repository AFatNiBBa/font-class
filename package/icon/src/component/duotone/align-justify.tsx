
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `align-justify` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/align-justify?s=duotone align-justify}
 * @preview ![align-justify](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQxNiAyODhIMzJDMTQuMzI3IDI4OCAwIDMwMi4zMjcgMCAzMjBWMzIwQzAgMzM3LjY3MyAxNC4zMjcgMzUyIDMyIDM1Mkg0MTZDNDMzLjY3MyAzNTIgNDQ4IDMzNy42NzMgNDQ4IDMyMFYzMjBDNDQ4IDMwMi4zMjcgNDMzLjY3MyAyODggNDE2IDI4OFpNNDE2IDMySDMyQzE0LjMyNyAzMiAwIDQ2LjMyNyAwIDY0VjY0QzAgODEuNjczIDE0LjMyNyA5NiAzMiA5Nkg0MTZDNDMzLjY3MyA5NiA0NDggODEuNjczIDQ0OCA2NFY2NEM0NDggNDYuMzI3IDQzMy42NzMgMzIgNDE2IDMyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik00MTYgNDE2SDMyQzE0LjMyNyA0MTYgMCA0MzAuMzI3IDAgNDQ4VjQ0OEMwIDQ2NS42NzMgMTQuMzI3IDQ4MCAzMiA0ODBINDE2QzQzMy42NzMgNDgwIDQ0OCA0NjUuNjczIDQ0OCA0NDhWNDQ4QzQ0OCA0MzAuMzI3IDQzMy42NzMgNDE2IDQxNiA0MTZaTTQxNiAxNjBIMzJDMTQuMzI3IDE2MCAwIDE3NC4zMjcgMCAxOTJWMTkyQzAgMjA5LjY3MyAxNC4zMjcgMjI0IDMyIDIyNEg0MTZDNDMzLjY3MyAyMjQgNDQ4IDIwOS42NzMgNDQ4IDE5MlYxOTJDNDQ4IDE3NC4zMjcgNDMzLjY3MyAxNjAgNDE2IDE2MFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function AlignJustify(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M416 288H32C14.327 288 0 302.327 0 320V320C0 337.673 14.327 352 32 352H416C433.673 352 448 337.673 448 320V320C448 302.327 433.673 288 416 288ZM416 32H32C14.327 32 0 46.327 0 64V64C0 81.673 14.327 96 32 96H416C433.673 96 448 81.673 448 64V64C448 46.327 433.673 32 416 32Z" />
            <path d="M416 416H32C14.327 416 0 430.327 0 448V448C0 465.673 14.327 480 32 480H416C433.673 480 448 465.673 448 448V448C448 430.327 433.673 416 416 416ZM416 160H32C14.327 160 0 174.327 0 192V192C0 209.673 14.327 224 32 224H416C433.673 224 448 209.673 448 192V192C448 174.327 433.673 160 416 160Z" />
        </Icon>
    </>
}