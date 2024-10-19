
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-down` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-down?s=regular arrow-turn-down}
 * @preview ![arrow-turn-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzYuOTY5IDM3Ni45NjlMMjA4Ljk2OSA1MDQuOTY5QzIwNC4yODEgNTA5LjY1NiAxOTguMTU2IDUxMiAxOTIgNTEyUzE3OS43MTkgNTA5LjY1NiAxNzUuMDMxIDUwNC45NjlMNDcuMDMxIDM3Ni45NjlDMzcuNjU2IDM2Ny41OTQgMzcuNjU2IDM1Mi40MDYgNDcuMDMxIDM0My4wMzFTNzEuNTk0IDMzMy42NTYgODAuOTY5IDM0My4wMzFMMTY4IDQzMC4wNjJWNDhIMjRDMTAuNzUgNDggMCAzNy4yNSAwIDI0UzEwLjc1IDAgMjQgMEgxOTJDMjA1LjI1IDAgMjE2IDEwLjc1IDIxNiAyNFY0MzAuMDYyTDMwMy4wMzEgMzQzLjAzMUMzMTIuNDA2IDMzMy42NTYgMzI3LjU5NCAzMzMuNjU2IDMzNi45NjkgMzQzLjAzMVMzNDYuMzQ0IDM2Ny41OTQgMzM2Ljk2OSAzNzYuOTY5WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowTurnDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M336.969 376.969L208.969 504.969C204.281 509.656 198.156 512 192 512S179.719 509.656 175.031 504.969L47.031 376.969C37.656 367.594 37.656 352.406 47.031 343.031S71.594 333.656 80.969 343.031L168 430.062V48H24C10.75 48 0 37.25 0 24S10.75 0 24 0H192C205.25 0 216 10.75 216 24V430.062L303.031 343.031C312.406 333.656 327.594 333.656 336.969 343.031S346.344 367.594 336.969 376.969Z" />
        </Icon>
    </>
}