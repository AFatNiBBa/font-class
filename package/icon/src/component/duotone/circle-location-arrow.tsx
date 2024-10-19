
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-location-arrow` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-location-arrow?s=duotone circle-location-arrow}
 * @preview ![circle-location-arrow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxNkMxMjMuNDUxIDE2IDE2IDEyMy40NTMgMTYgMjU2UzEyMy40NTEgNDk2IDI1NiA0OTZTNDk2IDM4OC41NDcgNDk2IDI1NlMzODguNTQ5IDE2IDI1NiAxNlpNMzU4LjIzNCAxODIuNjU2VjE4Mi42ODhMMjc0LjIzNCAzNzguNjg4QzI3MC43MzQgMzg2Ljc4MSAyNjIuNzk3IDM5MiAyNTQgMzkyQzI1Mi41NjMgMzkyIDI1MS4wNzggMzkxLjg3NSAyNDkuNjI1IDM5MS41OTRDMjM5LjM5MSAzODkuNSAyMzIgMzgwLjQwNiAyMzIgMzcwLjAwMVYyODBIMTQxLjk4NEMxMzEuNTc4IDI4MCAxMjIuNTMxIDI3Mi41OTQgMTIwLjQzOCAyNjIuNDA2QzExOC4zNDQgMjUyLjI1IDEyMy43NjYgMjQxLjg3NSAxMzMuMzI4IDIzNy43ODFMMzI5LjM0NCAxNTMuNzgxQzMzNy43OTcgMTUwLjI4MSAzNDcuMjk3IDE1Mi4xMjUgMzUzLjU3OCAxNTguNDY5QzM1OS45NTMgMTY0LjgxMiAzNjEuNzk3IDE3NC4zMTIgMzU4LjIzNCAxODIuNjU2WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zNTguMjQ0IDE4Mi42NTZWMTgyLjY4OEwyNzQuMjQ0IDM3OC42ODhDMjcwLjc0NCAzODYuNzgxIDI2Mi44MDYgMzkyIDI1NC4wMDkgMzkyQzI1Mi41NzIgMzkyIDI1MS4wODggMzkxLjg3NSAyNDkuNjM1IDM5MS41OTRDMjM5LjQgMzg5LjUgMjMyLjAxIDM4MC40MDYgMjMyLjAxIDM3MC4wMDFWMjgwSDE0MS45OTRDMTMxLjU4OCAyODAgMTIyLjU0MSAyNzIuNTk0IDEyMC40NDcgMjYyLjQwNkMxMTguMzUzIDI1Mi4yNSAxMjMuNzc1IDI0MS44NzUgMTMzLjMzOCAyMzcuNzgxTDMyOS4zNTMgMTUzLjc4MUMzMzcuODA2IDE1MC4yODEgMzQ3LjMwNiAxNTIuMTI1IDM1My41ODggMTU4LjQ2OUMzNTkuOTYzIDE2NC44MTIgMzYxLjgwNiAxNzQuMzEyIDM1OC4yNDQgMTgyLjY1NloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function CircleLocationArrow(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M256 16C123.451 16 16 123.453 16 256S123.451 496 256 496S496 388.547 496 256S388.549 16 256 16ZM358.234 182.656V182.688L274.234 378.688C270.734 386.781 262.797 392 254 392C252.563 392 251.078 391.875 249.625 391.594C239.391 389.5 232 380.406 232 370.001V280H141.984C131.578 280 122.531 272.594 120.438 262.406C118.344 252.25 123.766 241.875 133.328 237.781L329.344 153.781C337.797 150.281 347.297 152.125 353.578 158.469C359.953 164.812 361.797 174.312 358.234 182.656Z" />
            <path d="M358.244 182.656V182.688L274.244 378.688C270.744 386.781 262.806 392 254.009 392C252.572 392 251.088 391.875 249.635 391.594C239.4 389.5 232.01 380.406 232.01 370.001V280H141.994C131.588 280 122.541 272.594 120.447 262.406C118.353 252.25 123.775 241.875 133.338 237.781L329.353 153.781C337.806 150.281 347.306 152.125 353.588 158.469C359.963 164.812 361.806 174.312 358.244 182.656Z" />
        </Icon>
    </>
}