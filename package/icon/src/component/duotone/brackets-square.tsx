
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `brackets-square` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/brackets-square?s=duotone brackets-square}
 * @preview ![brackets-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQxNiAzMkgzMjBDMzAyLjMyNyAzMiAyODggNDYuMzI3IDI4OCA2NFY2NEMyODggODEuNjczIDMwMi4zMjcgOTYgMzIwIDk2SDM4NFY0MTZIMzIwQzMwMi4zMjcgNDE2IDI4OCA0MzAuMzI3IDI4OCA0NDhWNDQ4QzI4OCA0NjUuNjczIDMwMi4zMjcgNDgwIDMyMCA0ODBINDE2QzQzMy42IDQ4MCA0NDggNDY1LjYgNDQ4IDQ0OFY2NEM0NDggNDYuNCA0MzMuNiAzMiA0MTYgMzJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTEyOCAzMkgzMkMxNC40IDMyIDAgNDYuNCAwIDY0VjQ0OEMwIDQ2NS42IDE0LjQgNDgwIDMyIDQ4MEgxMjhDMTQ1LjY3MyA0ODAgMTYwIDQ2NS42NzMgMTYwIDQ0OFY0NDhDMTYwIDQzMC4zMjcgMTQ1LjY3MyA0MTYgMTI4IDQxNkg2NFY5NkgxMjhDMTQ1LjY3MyA5NiAxNjAgODEuNjczIDE2MCA2NFY2NEMxNjAgNDYuMzI3IDE0NS42NzMgMzIgMTI4IDMyWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BracketsSquare(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path opacity={.4} d="M416 32H320C302.327 32 288 46.327 288 64V64C288 81.673 302.327 96 320 96H384V416H320C302.327 416 288 430.327 288 448V448C288 465.673 302.327 480 320 480H416C433.6 480 448 465.6 448 448V64C448 46.4 433.6 32 416 32Z" />
            <path d="M128 32H32C14.4 32 0 46.4 0 64V448C0 465.6 14.4 480 32 480H128C145.673 480 160 465.673 160 448V448C160 430.327 145.673 416 128 416H64V96H128C145.673 96 160 81.673 160 64V64C160 46.327 145.673 32 128 32Z" />
        </Icon>
    </>
}