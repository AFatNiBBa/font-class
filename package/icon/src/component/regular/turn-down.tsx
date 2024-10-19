
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `turn-down` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/turn-down?s=regular turn-down}
 * @preview ![turn-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTMuNTk2IDM5Mi4zMjhMMjA5LjU5NiA1MDQuMzI4QzIwMC4wOTYgNTE0LjU1NSAxODMuOTA2IDUxNC41NTUgMTc0LjQwOCA1MDQuMzI4TDcwLjQwOCAzOTIuMzI4QzYzLjkyNCAzODUuMzQ0IDYyLjE4OSAzNzUuMTU2IDY2LjAwMiAzNjYuNDA2Uzc4LjQ1NSAzNTIgODguMDAyIDM1MkgxNjhWNDhIMjRDMTAuNzUgNDggMCAzNy4yNSAwIDI0UzEwLjc1IDAgMjQgMEgxOTJDMjA1LjI1IDAgMjE2IDEwLjc1IDIxNiAyNFYzNTJIMjk2LjAwMkMzMDUuNTQ5IDM1MiAzMTQuMTg5IDM1Ny42NTYgMzE4LjAwMiAzNjYuNDA2UzMyMC4wOCAzODUuMzQ0IDMxMy41OTYgMzkyLjMyOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function TurnDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M313.596 392.328L209.596 504.328C200.096 514.555 183.906 514.555 174.408 504.328L70.408 392.328C63.924 385.344 62.189 375.156 66.002 366.406S78.455 352 88.002 352H168V48H24C10.75 48 0 37.25 0 24S10.75 0 24 0H192C205.25 0 216 10.75 216 24V352H296.002C305.549 352 314.189 357.656 318.002 366.406S320.08 385.344 313.596 392.328Z" />
        </Icon>
    </>
}