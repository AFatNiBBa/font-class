
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `scroll-torah` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/scroll-torah?s=thin scroll-torah}
 * @preview ![scroll-torah](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMDEuOTk5IDMxOS42NDFDMjA0Ljg3NSAzMjQuNzk3IDIxMC40MzggMzI4IDIxNi40NjkgMzI4SDI3Ni4xODJMMzA1LjkwNiAzNzYuMjE5QzMwOC45MDYgMzgxLjA5NCAzMTQuMTU2IDM4NCAzMjAgMzg0UzMzMS4wOTQgMzgxLjA5NCAzMzQuMDk0IDM3Ni4yMzRMMzYzLjgyMiAzMjhINDIzLjUzMUM0MjkuNTYzIDMyOCA0MzUuMTI1IDMyNC43OTcgNDM3Ljk5OSAzMTkuNjQxQzQ0MC44MTMgMzE0LjYwOSA0NDAuNjg4IDMwOC42ODcgNDM3LjY1NiAzMDMuNzgxTDQwOC4xOTkgMjU1Ljk5Nkw0MzcuNjU2IDIwOC4yMDNDNDQwLjY4OCAyMDMuMzEyIDQ0MC44MTMgMTk3LjM5MSA0MzcuOTk5IDE5Mi4zNTlDNDM1LjEyNSAxODcuMjAzIDQyOS41NjIgMTg0IDQyMy41MzEgMTg0SDM2My44MThMMzM0LjA5NCAxMzUuNzgxQzMyOC4wOTQgMTI2LjAzMSAzMTEuOTA2IDEyNi4wNDcgMzA1LjkwNiAxMzUuNzY2TDI3Ni4xNzggMTg0SDIxNi40NjlDMjEwLjQzNyAxODQgMjA0Ljg3NSAxODcuMjAzIDIwMS45OTkgMTkyLjM1OUMxOTkuMTg4IDE5Ny4zOTEgMTk5LjMxMiAyMDMuMzEyIDIwMi4zNDQgMjA4LjIxOUwyMzEuODAxIDI1Ni4wMDRMMjAyLjM0NCAzMDMuNzk3QzE5OS4zMTIgMzA4LjY4OCAxOTkuMTg4IDMxNC42MDkgMjAxLjk5OSAzMTkuNjQxWk0zMTkuNTMxIDM2Ny44MjhMMjk0LjkzIDMyOEgzNDQuMzAzTDMxOS41MzEgMzY3LjgyOFpNNDI0LjAzMSAzMTEuODI4QzQyNC4wMzEgMzExLjg0NCA0MjMuOTM4IDMxMiA0MjMuNTMxIDMxMkwzNzMuNjU2IDMxMi4wNDVMMzk4Ljg4MyAyNzEuMTE1TDQyNC4wMzEgMzExLjgyOFpNNDI0LjAzMSAxOTkuODEyTDM5OC42ODYgMjQwLjU2MkwzNzMuNTk0IDE5OS44NTdMNDI0LjAzMSAxOTkuODEyWk0zMjAuNDY5IDE0NC4xNzJMMzQ1LjA3IDE4NEgyOTUuNjk3TDMyMC40NjkgMTQ0LjE3MlpNMjg1Ljc4NSAxOTkuOTM4TDM1NC44NzcgMTk5Ljg3NUwzODkuMzE2IDI1NS42MjdMMzU0LjIxNSAzMTIuMDYyTDI4NS4xMjMgMzEyLjEyNUwyNTAuNjg0IDI1Ni4zNzNMMjg1Ljc4NSAxOTkuOTM4Wk0yMTUuOTY5IDIwMC4xNzJDMjE1Ljk2OSAyMDAuMTU2IDIxNi4wNjIgMjAwIDIxNi40NjkgMjAwTDI2Ni4zNDQgMTk5Ljk1NUwyNDEuMTE3IDI0MC44ODVMMjE1Ljk2OSAyMDAuMTcyWk0yNDEuMzE0IDI3MS40MzhMMjY2LjQwNiAzMTIuMTQzTDIxNS45NjkgMzEyLjE4OEwyNDEuMzE0IDI3MS40MzhaTTU2IDBDMjQuNTk0IDAgMCAxNy41NjIgMCA0MFY0NzJDMCA0OTQuNDM4IDI0LjU5NCA1MTIgNTYgNTEyUzExMiA0OTQuNDM4IDExMiA0NzJWNDBDMTEyIDE3LjU2MiA4Ny40MDYgMCA1NiAwWk05NiA0NzJDOTYgNDg1LjAxNiA3Ny42ODggNDk2IDU2IDQ5NlMxNiA0ODUuMDE2IDE2IDQ3MlY0MEMxNiAyNi45ODQgMzQuMzEyIDE2IDU2IDE2Uzk2IDI2Ljk4NCA5NiA0MFY0NzJaTTU4NCAwQzU1Mi41OTQgMCA1MjggMTcuNTYyIDUyOCA0MFY0NzJDNTI4IDQ5NC40MzggNTUyLjU5NCA1MTIgNTg0IDUxMlM2NDAgNDk0LjQzOCA2NDAgNDcyVjQwQzY0MCAxNy41NjIgNjE1LjQwNiAwIDU4NCAwWk02MjQgNDcyQzYyNCA0ODUuMDE2IDYwNS42ODggNDk2IDU4NCA0OTZTNTQ0IDQ4NS4wMTYgNTQ0IDQ3MlY0MEM1NDQgMjYuOTg0IDU2Mi4zMTIgMTYgNTg0IDE2UzYyNCAyNi45ODQgNjI0IDQwVjQ3MlpNNDkyIDMySDE0OEMxNDMuNTk0IDMyIDE0MCAzNS41NzggMTQwIDQwUzE0My41OTQgNDggMTQ4IDQ4SDQ5MkM0OTYuNDA2IDQ4IDUwMCA0NC40MjIgNTAwIDQwUzQ5Ni40MDYgMzIgNDkyIDMyWk00OTIgNDY0SDE0OEMxNDMuNTk0IDQ2NCAxNDAgNDY3LjU3OCAxNDAgNDcyUzE0My41OTQgNDgwIDE0OCA0ODBINDkyQzQ5Ni40MDYgNDgwIDUwMCA0NzYuNDIyIDUwMCA0NzJTNDk2LjQwNiA0NjQgNDkyIDQ2NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ScrollTorah(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M201.999 319.641C204.875 324.797 210.438 328 216.469 328H276.182L305.906 376.219C308.906 381.094 314.156 384 320 384S331.094 381.094 334.094 376.234L363.822 328H423.531C429.563 328 435.125 324.797 437.999 319.641C440.813 314.609 440.688 308.687 437.656 303.781L408.199 255.996L437.656 208.203C440.688 203.312 440.813 197.391 437.999 192.359C435.125 187.203 429.562 184 423.531 184H363.818L334.094 135.781C328.094 126.031 311.906 126.047 305.906 135.766L276.178 184H216.469C210.437 184 204.875 187.203 201.999 192.359C199.188 197.391 199.312 203.312 202.344 208.219L231.801 256.004L202.344 303.797C199.312 308.688 199.188 314.609 201.999 319.641ZM319.531 367.828L294.93 328H344.303L319.531 367.828ZM424.031 311.828C424.031 311.844 423.938 312 423.531 312L373.656 312.045L398.883 271.115L424.031 311.828ZM424.031 199.812L398.686 240.562L373.594 199.857L424.031 199.812ZM320.469 144.172L345.07 184H295.697L320.469 144.172ZM285.785 199.938L354.877 199.875L389.316 255.627L354.215 312.062L285.123 312.125L250.684 256.373L285.785 199.938ZM215.969 200.172C215.969 200.156 216.062 200 216.469 200L266.344 199.955L241.117 240.885L215.969 200.172ZM241.314 271.438L266.406 312.143L215.969 312.188L241.314 271.438ZM56 0C24.594 0 0 17.562 0 40V472C0 494.438 24.594 512 56 512S112 494.438 112 472V40C112 17.562 87.406 0 56 0ZM96 472C96 485.016 77.688 496 56 496S16 485.016 16 472V40C16 26.984 34.312 16 56 16S96 26.984 96 40V472ZM584 0C552.594 0 528 17.562 528 40V472C528 494.438 552.594 512 584 512S640 494.438 640 472V40C640 17.562 615.406 0 584 0ZM624 472C624 485.016 605.688 496 584 496S544 485.016 544 472V40C544 26.984 562.312 16 584 16S624 26.984 624 40V472ZM492 32H148C143.594 32 140 35.578 140 40S143.594 48 148 48H492C496.406 48 500 44.422 500 40S496.406 32 492 32ZM492 464H148C143.594 464 140 467.578 140 472S143.594 480 148 480H492C496.406 480 500 476.422 500 472S496.406 464 492 464Z" />
        </Icon>
    </>
}