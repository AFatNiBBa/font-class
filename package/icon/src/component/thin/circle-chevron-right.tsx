
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-chevron-right` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-right?s=thin circle-chevron-right}
 * @preview ![circle-chevron-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTYgMjU2QzQ5NiAxMjMuNDUzIDM4OC41NDkgMTYgMjU2IDE2UzE2IDEyMy40NTMgMTYgMjU2UzEyMy40NTEgNDk2IDI1NiA0OTZTNDk2IDM4OC41NDcgNDk2IDI1NlpNMzIgMjU2QzMyIDEzMi40ODYgMTMyLjQ4NiAzMiAyNTYgMzJTNDgwIDEzMi40ODYgNDgwIDI1NlMzNzkuNTE0IDQ4MCAyNTYgNDgwUzMyIDM3OS41MTQgMzIgMjU2Wk0zNDEuNDUzIDI2MS44NTdDMzQ0LjcwMyAyNTguODU3IDM0NC43MDMgMjUzLjE3IDM0MS40NTMgMjUwLjE3TDIyMS40NTMgMTM4LjE3QzIxOC4yMzQgMTM1LjEzOSAyMTMuMTcyIDEzNS4zMjYgMjEwLjE1NiAxMzguNTQ1QzIwNy4xNTYgMTQxLjc5NSAyMDcuMjk3IDE0Ni44MjYgMjEwLjU0NyAxNDkuODU3TDMyNC4yODEgMjU2LjAxNEwyMTAuNTQ3IDM2Mi4xN0MyMDguODU5IDM2My43MzIgMjA4IDM2NS44ODkgMjA4IDM2OC4wMTRDMjA4IDM2OS45ODIgMjA4LjcxOSAzNzEuOTIgMjEwLjE1NiAzNzMuNDgyQzIxMy4xNzIgMzc2LjcwMSAyMTguMjM0IDM3Ni44ODkgMjIxLjQ1MyAzNzMuODU3TDM0MS40NTMgMjYxLjg1N1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CircleChevronRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M496 256C496 123.453 388.549 16 256 16S16 123.453 16 256S123.451 496 256 496S496 388.547 496 256ZM32 256C32 132.486 132.486 32 256 32S480 132.486 480 256S379.514 480 256 480S32 379.514 32 256ZM341.453 261.857C344.703 258.857 344.703 253.17 341.453 250.17L221.453 138.17C218.234 135.139 213.172 135.326 210.156 138.545C207.156 141.795 207.297 146.826 210.547 149.857L324.281 256.014L210.547 362.17C208.859 363.732 208 365.889 208 368.014C208 369.982 208.719 371.92 210.156 373.482C213.172 376.701 218.234 376.889 221.453 373.857L341.453 261.857Z" />
        </Icon>
    </>
}