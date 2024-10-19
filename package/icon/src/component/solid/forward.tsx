
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `forward` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/forward?s=solid forward}
 * @preview ![forward](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01Mi41MDYgNDQwLjU5NEwyMjMuOTk2IDI5Ny43MjdWMjE0LjI3M0w1Mi41MDYgNzEuNDA2QzMxLjg3OSA1NC4yODQgMCA2OC42NTcgMCA5Ni4wMjdWNDE1Ljk3M0MwIDQ0My4zNDMgMzEuODc5IDQ1Ny43MTYgNTIuNTA2IDQ0MC41OTRaTTMwOC41MzggNDQwLjU5NEw1MDAuNTYxIDI4MC42MjFDNTE1LjgxMyAyNjcuNzQ4IDUxNS44MTMgMjQ0LjI1MiA1MDAuNTYxIDIzMS4zNzlMMzA4LjUzOCA3MS40MDZDMjg3LjkxIDU0LjI4NCAyNTYuMDMxIDY4LjY1NyAyNTYuMDMxIDk2LjAyN1Y0MTUuOTczQzI1Ni4wMzEgNDQzLjM0MyAyODcuOTEgNDU3LjcxNiAzMDguNTM4IDQ0MC41OTRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Forward(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M52.506 440.594L223.996 297.727V214.273L52.506 71.406C31.879 54.284 0 68.657 0 96.027V415.973C0 443.343 31.879 457.716 52.506 440.594ZM308.538 440.594L500.561 280.621C515.813 267.748 515.813 244.252 500.561 231.379L308.538 71.406C287.91 54.284 256.031 68.657 256.031 96.027V415.973C256.031 443.343 287.91 457.716 308.538 440.594Z" />
        </Icon>
    </>
}