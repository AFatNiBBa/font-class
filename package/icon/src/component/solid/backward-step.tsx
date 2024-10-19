
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `backward-step` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/backward-step?s=solid backward-step}
 * @preview ![backward-step](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMS45OTggNjQuMDMxQzE0LjMyNiA2NC4wMzEgMCA3OC4zNTcgMCA5Ni4wMzFWNDE1Ljk2N0MwIDQzMy42NDEgMTQuMzI4IDQ0Ny45NjcgMzIuMDAyIDQ0Ny45NjdDNDkuNjc0IDQ0Ny45NjcgNjQgNDMzLjY0MSA2NCA0MTUuOTY5VjI1NlY5Ni4wMzNDNjQgNzguMzU5IDQ5LjY3MiA2NC4wMzEgMzEuOTk4IDY0LjAzMVpNMjY3LjQ2MyA3MS40MDZMNzUuNDM5IDIzMS4zNzlDNjcuODE0IDIzNy44MTQgNjQgMjQ2LjkwOCA2NCAyNTZDNjQgMjY1LjA5NCA2Ny44MTQgMjc0LjE4NCA3NS40MzkgMjgwLjYyMUwyNjcuNDYzIDQ0MC41OTRDMjg4LjA5IDQ1Ny43MTUgMzE5Ljk2OSA0NDMuMzQ0IDMxOS45NjkgNDE1Ljk3M1Y5Ni4wMjdDMzE5Ljk2OSA2OC42NTYgMjg4LjA5IDU0LjI4MyAyNjcuNDYzIDcxLjQwNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BackwardStep(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M31.998 64.031C14.326 64.031 0 78.357 0 96.031V415.967C0 433.641 14.328 447.967 32.002 447.967C49.674 447.967 64 433.641 64 415.969V256V96.033C64 78.359 49.672 64.031 31.998 64.031ZM267.463 71.406L75.439 231.379C67.814 237.814 64 246.908 64 256C64 265.094 67.814 274.184 75.439 280.621L267.463 440.594C288.09 457.715 319.969 443.344 319.969 415.973V96.027C319.969 68.656 288.09 54.283 267.463 71.406Z" />
        </Icon>
    </>
}