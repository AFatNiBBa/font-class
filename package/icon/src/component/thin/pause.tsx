
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `pause` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pause?s=thin pause}
 * @preview ![pause](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02NCA2NEM1OS41NzggNjQgNTYgNjcuNTc4IDU2IDcyVjQ0MEM1NiA0NDQuNDIyIDU5LjU3OCA0NDggNjQgNDQ4UzcyIDQ0NC40MjIgNzIgNDQwVjcyQzcyIDY3LjU3OCA2OC40MjIgNjQgNjQgNjRaTTI1NiA2NEMyNTEuNTc4IDY0IDI0OCA2Ny41NzggMjQ4IDcyVjQ0MEMyNDggNDQ0LjQyMiAyNTEuNTc4IDQ0OCAyNTYgNDQ4UzI2NCA0NDQuNDIyIDI2NCA0NDBWNzJDMjY0IDY3LjU3OCAyNjAuNDIyIDY0IDI1NiA2NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Pause(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M64 64C59.578 64 56 67.578 56 72V440C56 444.422 59.578 448 64 448S72 444.422 72 440V72C72 67.578 68.422 64 64 64ZM256 64C251.578 64 248 67.578 248 72V440C248 444.422 251.578 448 256 448S264 444.422 264 440V72C264 67.578 260.422 64 256 64Z" />
        </Icon>
    </>
}