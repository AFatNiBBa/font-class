
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left-long` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-long?s=light arrow-left-long}
 * @preview ![arrow-left-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNDguNjg4IDQxMS4zMTJMNC42ODggMjY3LjMxMkMxLjU2MiAyNjQuMTg4IDAgMjYwLjA5NCAwIDI1NlMxLjU2MiAyNDcuODEyIDQuNjg4IDI0NC42ODhMMTQ4LjY4OCAxMDAuNjg4QzE1NC45MzggOTQuNDM4IDE2NS4wNjMgOTQuNDM4IDE3MS4zMTIgMTAwLjY4OFMxNzcuNTYyIDExNy4wNjMgMTcxLjMxMiAxMjMuMzEyTDU0LjYyNSAyNDBINDk2QzUwNC44NDQgMjQwIDUxMiAyNDcuMTU2IDUxMiAyNTZTNTA0Ljg0NCAyNzIgNDk2IDI3Mkg1NC42MjVMMTcxLjMxMiAzODguNjg4QzE3Ny41NjIgMzk0LjkzOCAxNzcuNTYyIDQwNS4wNjMgMTcxLjMxMiA0MTEuMzEyUzE1NC45MzggNDE3LjU2MiAxNDguNjg4IDQxMS4zMTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ArrowLeftLong(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M148.688 411.312L4.688 267.312C1.562 264.188 0 260.094 0 256S1.562 247.812 4.688 244.688L148.688 100.688C154.938 94.438 165.063 94.438 171.312 100.688S177.562 117.063 171.312 123.312L54.625 240H496C504.844 240 512 247.156 512 256S504.844 272 496 272H54.625L171.312 388.688C177.562 394.938 177.562 405.063 171.312 411.312S154.938 417.562 148.688 411.312Z" />
        </Icon>
    </>
}