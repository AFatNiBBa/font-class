
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `wifi-weak` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wifi-weak?s=thin wifi-weak}
 * @preview ![wifi-weak](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgMzUyQzI4NC42NTYgMzUyIDI1NiAzODAuNjU2IDI1NiA0MTUuOTk5QzI1NiA0NTEuMzQ0IDI4NC42NTYgNDgwIDMyMCA0ODBTMzg0IDQ1MS4zNDQgMzg0IDQxNS45OTlDMzg0IDM4MC42NTYgMzU1LjM0NCAzNTIgMzIwIDM1MlpNMzIwIDQ2NEMyOTMuNTMxIDQ2NCAyNzIgNDQyLjQ2NyAyNzIgNDE1Ljk5OUMyNzIgMzg5LjUzMyAyOTMuNTMxIDM2OCAzMjAgMzY4UzM2OCAzODkuNTMzIDM2OCA0MTUuOTk5QzM2OCA0NDIuNDY3IDM0Ni40NjkgNDY0IDMyMCA0NjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function WifiWeak(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M320 352C284.656 352 256 380.656 256 415.999C256 451.344 284.656 480 320 480S384 451.344 384 415.999C384 380.656 355.344 352 320 352ZM320 464C293.531 464 272 442.467 272 415.999C272 389.533 293.531 368 320 368S368 389.533 368 415.999C368 442.467 346.469 464 320 464Z" />
        </Icon>
    </>
}