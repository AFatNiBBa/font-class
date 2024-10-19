
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `bars-filter` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bars-filter?s=solid bars-filter}
 * @preview ![bars-filter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTIgMjI0SDk2Qzc4LjMyNyAyMjQgNjQgMjM4LjMyNyA2NCAyNTZWMjU2QzY0IDI3My42NzMgNzguMzI3IDI4OCA5NiAyODhIMzUyQzM2OS42NzMgMjg4IDM4NCAyNzMuNjczIDM4NCAyNTZWMjU2QzM4NCAyMzguMzI3IDM2OS42NzMgMjI0IDM1MiAyMjRaTTI1NiAzODRIMTkyQzE3NC4zMjcgMzg0IDE2MCAzOTguMzI3IDE2MCA0MTZWNDE2QzE2MCA0MzMuNjczIDE3NC4zMjcgNDQ4IDE5MiA0NDhIMjU2QzI3My42NzMgNDQ4IDI4OCA0MzMuNjczIDI4OCA0MTZWNDE2QzI4OCAzOTguMzI3IDI3My42NzMgMzg0IDI1NiAzODRaTTQxNiA2NEgzMkMxNC4zMjcgNjQgMCA3OC4zMjcgMCA5NlY5NkMwIDExMy42NzMgMTQuMzI3IDEyOCAzMiAxMjhINDE2QzQzMy42NzMgMTI4IDQ0OCAxMTMuNjczIDQ0OCA5NlY5NkM0NDggNzguMzI3IDQzMy42NzMgNjQgNDE2IDY0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BarsFilter(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M352 224H96C78.327 224 64 238.327 64 256V256C64 273.673 78.327 288 96 288H352C369.673 288 384 273.673 384 256V256C384 238.327 369.673 224 352 224ZM256 384H192C174.327 384 160 398.327 160 416V416C160 433.673 174.327 448 192 448H256C273.673 448 288 433.673 288 416V416C288 398.327 273.673 384 256 384ZM416 64H32C14.327 64 0 78.327 0 96V96C0 113.673 14.327 128 32 128H416C433.673 128 448 113.673 448 96V96C448 78.327 433.673 64 416 64Z" />
        </Icon>
    </>
}