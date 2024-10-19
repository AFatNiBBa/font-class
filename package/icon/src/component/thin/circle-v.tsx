
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-v` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-v?s=thin circle-v}
 * @preview ![circle-v](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjguODQ0IDE0OC40MjJMMjU2IDM3NC4xMDlMMTQzLjE1NiAxNDguNDIyQzE0MS4xNzIgMTQ0LjQ2OSAxMzYuMzkxIDE0Mi44NTkgMTMyLjQyMiAxNDQuODQ0QzEyOC40NjkgMTQ2LjgyOCAxMjYuODc1IDE1MS42MjUgMTI4Ljg0NCAxNTUuNTc4TDI0OC44NDQgMzk1LjU3OEMyNTAuMjAzIDM5OC4yODEgMjUyLjk2OSA0MDAgMjU2IDQwMFMyNjEuNzk3IDM5OC4yODEgMjYzLjE1NiAzOTUuNTc4TDM4My4xNTYgMTU1LjU3OEMzODUuMTI1IDE1MS42MjUgMzgzLjUzMSAxNDYuODI4IDM3OS41NzggMTQ0Ljg0NEMzNzUuNjA5IDE0Mi44OTEgMzcwLjgyOCAxNDQuNSAzNjguODQ0IDE0OC40MjJaTTI1NiAxNkMxMjMuNDUxIDE2IDE2IDEyMy40NTEgMTYgMjU2UzEyMy40NTEgNDk2IDI1NiA0OTZTNDk2IDM4OC41NDkgNDk2IDI1NlMzODguNTQ5IDE2IDI1NiAxNlpNMjU2IDQ4MEMxMzIuNDg2IDQ4MCAzMiAzNzkuNTE0IDMyIDI1NlMxMzIuNDg2IDMyIDI1NiAzMlM0ODAgMTMyLjQ4NiA0ODAgMjU2UzM3OS41MTQgNDgwIDI1NiA0ODBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleV(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M368.844 148.422L256 374.109L143.156 148.422C141.172 144.469 136.391 142.859 132.422 144.844C128.469 146.828 126.875 151.625 128.844 155.578L248.844 395.578C250.203 398.281 252.969 400 256 400S261.797 398.281 263.156 395.578L383.156 155.578C385.125 151.625 383.531 146.828 379.578 144.844C375.609 142.891 370.828 144.5 368.844 148.422ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480Z" />
        </Icon>
    </>
}