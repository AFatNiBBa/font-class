
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `comment-middle-top` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/comment-middle-top?s=solid comment-middle-top}
 * @preview ![comment-middle-top](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgMzA0QzUxMiA0MTguOTA2IDM5Ny40MDYgNTEyIDI1NiA1MTJTMCA0MTguOTA2IDAgMzA0QzAgMjA4LjAxMiA4MC4wNzYgMTI3LjQ2NyAxODguODM4IDEwMy40NzVMMjM3LjcyNSAxMC4wODRDMjQxLjI0MyAzLjM2MSAyNDguNjIyIDAgMjU2IDBTMjcwLjc1NyAzLjM2MSAyNzQuMjc1IDEwLjA4NEwzMjMuMTYyIDEwMy40NzVDNDMxLjkyNCAxMjcuNDY3IDUxMiAyMDguMDEyIDUxMiAzMDRaICI+PC9wYXRoPjwvc3ZnPg==|width=32|height=32)
 */
export default function CommentMiddleTop(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M512 304C512 418.906 397.406 512 256 512S0 418.906 0 304C0 208.012 80.076 127.467 188.838 103.475L237.725 10.084C241.243 3.361 248.622 0 256 0S270.757 3.361 274.275 10.084L323.162 103.475C431.924 127.467 512 208.012 512 304Z " />
        </Icon>
    </>
}