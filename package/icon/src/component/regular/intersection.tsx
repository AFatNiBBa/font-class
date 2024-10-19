
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `intersection` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/intersection?s=regular intersection}
 * @preview ![intersection](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMjI0VjQ1NkMzODQgNDY5LjI1IDM3My4yNSA0ODAgMzYwIDQ4MFMzMzYgNDY5LjI1IDMzNiA0NTZWMjI0QzMzNiAxNDQuNTk0IDI3MS40MDYgODAgMTkyIDgwUzQ4IDE0NC41OTQgNDggMjI0VjQ1NkM0OCA0NjkuMjUgMzcuMjUgNDgwIDI0IDQ4MFMwIDQ2OS4yNSAwIDQ1NlYyMjRDMCAxMTguMTI1IDg2LjEyNSAzMiAxOTIgMzJTMzg0IDExOC4xMjUgMzg0IDIyNFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Intersection(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M384 224V456C384 469.25 373.25 480 360 480S336 469.25 336 456V224C336 144.594 271.406 80 192 80S48 144.594 48 224V456C48 469.25 37.25 480 24 480S0 469.25 0 456V224C0 118.125 86.125 32 192 32S384 118.125 384 224Z" />
        </Icon>
    </>
}