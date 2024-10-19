
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-arrow-up` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-up?s=regular circle-arrow-up}
 * @preview ![circle-arrow-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNzMuNTk0IDExOS42NTZDMjY5LjAzMSAxMTQuNzgxIDI2Mi42ODggMTEyIDI1NiAxMTJTMjQyLjk2OSAxMTQuNzgxIDIzOC40MDYgMTE5LjY1NkwxMzQuNDA2IDIzMS42NTZDMTI1LjQwNiAyNDEuMzc1IDEyNS45NjkgMjU2LjU2MiAxMzUuNjU2IDI2NS41OTRDMTQ1LjM3NSAyNzQuNTk0IDE2MC41MzEgMjc0LjA2MiAxNjkuNTk0IDI2NC4zNDRMMjMyIDE5Ny4xMzNWMzY4QzIzMiAzODEuMjUgMjQyLjc1IDM5MiAyNTYgMzkyUzI4MCAzODEuMjUgMjgwIDM2OFYxOTcuMTMzTDM0Mi40MDYgMjY0LjM0NEMzNTEuNDY5IDI3NC4wNjIgMzY2LjYyNSAyNzQuNTk0IDM3Ni4zNDQgMjY1LjU5NEMzODYuMDMxIDI1Ni41NjIgMzg2LjU5NCAyNDEuMzc1IDM3Ny41OTQgMjMxLjY1NkwyNzMuNTk0IDExOS42NTZaTTI1NiAxNkMxMjMuNDUxIDE2IDE2IDEyMy40NTMgMTYgMjU2UzEyMy40NTEgNDk2IDI1NiA0OTZTNDk2IDM4OC41NDcgNDk2IDI1NlMzODguNTQ5IDE2IDI1NiAxNlpNMjU2IDQ0OEMxNTAuMTMxIDQ0OCA2NCAzNjEuODY3IDY0IDI1NlMxNTAuMTMxIDY0IDI1NiA2NFM0NDggMTUwLjEzMyA0NDggMjU2UzM2MS44NjkgNDQ4IDI1NiA0NDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleArrowUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M273.594 119.656C269.031 114.781 262.688 112 256 112S242.969 114.781 238.406 119.656L134.406 231.656C125.406 241.375 125.969 256.562 135.656 265.594C145.375 274.594 160.531 274.062 169.594 264.344L232 197.133V368C232 381.25 242.75 392 256 392S280 381.25 280 368V197.133L342.406 264.344C351.469 274.062 366.625 274.594 376.344 265.594C386.031 256.562 386.594 241.375 377.594 231.656L273.594 119.656ZM256 16C123.451 16 16 123.453 16 256S123.451 496 256 496S496 388.547 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.867 64 256S150.131 64 256 64S448 150.133 448 256S361.869 448 256 448Z" />
        </Icon>
    </>
}