
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `speaker-deck` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/speaker-deck?s=brands speaker-deck}
 * @preview ![speaker-deck](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMTMuODYgMjk2SDEwMGExMDAgMTAwIDAgMCAxIDAtMjAwaDEzMi44NGE0MCA0MCAwIDAgMSAwIDgwSDk4Yy0yNi40NyAwLTI2LjQ1IDQwIDAgNDBoMTEzLjgyYTEwMCAxMDAgMCAwIDEgMCAyMDBINDBhNDAgNDAgMCAwIDEgMC04MGgxNzMuODZjMjYuNDggMCAyNi40Ni00MCAwLTQwek0yOTggNDE2YTEyMC4yMSAxMjAuMjEgMCAwIDAgNTEuMTEtODBoNjQuNTVhMTkuODMgMTkuODMgMCAwIDAgMTkuNjYtMjBWMTk2YTE5LjgzIDE5LjgzIDAgMCAwLTE5LjY2LTIwSDI5Ni40MmE2MC43NyA2MC43NyAwIDAgMCAwLTgwaDEzNi45M2M0My40NCAwIDc4LjY1IDM1LjgyIDc4LjY1IDgwdjE2MGMwIDQ0LjE4LTM1LjIxIDgwLTc4LjY1IDgweiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SpeakerDeck(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M213.86 296H100a100 100 0 0 1 0-200h132.84a40 40 0 0 1 0 80H98c-26.47 0-26.45 40 0 40h113.82a100 100 0 0 1 0 200H40a40 40 0 0 1 0-80h173.86c26.48 0 26.46-40 0-40zM298 416a120.21 120.21 0 0 0 51.11-80h64.55a19.83 19.83 0 0 0 19.66-20V196a19.83 19.83 0 0 0-19.66-20H296.42a60.77 60.77 0 0 0 0-80h136.93c43.44 0 78.65 35.82 78.65 80v160c0 44.18-35.21 80-78.65 80z" />
        </Icon>
    </>
}