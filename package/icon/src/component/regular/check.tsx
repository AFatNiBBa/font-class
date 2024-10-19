
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `check` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/check?s=regular check}
 * @preview ![check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODAuOTY5IDEyOC45NjlMMjA4Ljk2OSA0MDAuOTY5QzIwNC4yODEgNDA1LjY1NiAxOTguMTU2IDQwOCAxOTIgNDA4UzE3OS43MTkgNDA1LjY1NiAxNzUuMDMxIDQwMC45NjlMMzEuMDMxIDI1Ni45NjlDMjEuNjU2IDI0Ny41OTQgMjEuNjU2IDIzMi40MDYgMzEuMDMxIDIyMy4wMzFTNTUuNTk0IDIxMy42NTYgNjQuOTY5IDIyMy4wMzFMMTkyIDM1MC4wNjJMNDQ3LjAzMSA5NS4wMzFDNDU2LjQwNiA4NS42NTYgNDcxLjU5NCA4NS42NTYgNDgwLjk2OSA5NS4wMzFTNDkwLjM0NCAxMTkuNTk0IDQ4MC45NjkgMTI4Ljk2OVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Check(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M480.969 128.969L208.969 400.969C204.281 405.656 198.156 408 192 408S179.719 405.656 175.031 400.969L31.031 256.969C21.656 247.594 21.656 232.406 31.031 223.031S55.594 213.656 64.969 223.031L192 350.062L447.031 95.031C456.406 85.656 471.594 85.656 480.969 95.031S490.344 119.594 480.969 128.969Z" />
        </Icon>
    </>
}