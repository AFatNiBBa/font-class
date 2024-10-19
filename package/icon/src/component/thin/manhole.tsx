
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `manhole` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/manhole?s=thin manhole}
 * @preview ![manhole](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0ODBDMTMyLjQ4NiA0ODAgMzIgMzc5LjUxNCAzMiAyNTZTMTMyLjQ4NiAzMiAyNTYgMzJTNDgwIDEzMi40ODYgNDgwIDI1NlMzNzkuNTE0IDQ4MCAyNTYgNDgwWk0xOTIgMTc2QzE4My4xNjQgMTc2IDE3NiAxODMuMTYyIDE3NiAxOTJDMTc2IDIwMC44MzYgMTgzLjE2NCAyMDggMTkyIDIwOFMyMDggMjAwLjgzNiAyMDggMTkyQzIwOCAxODMuMTYyIDIwMC44MzYgMTc2IDE5MiAxNzZaTTE5MiAyNDBDMTgzLjE2NCAyNDAgMTc2IDI0Ny4xNjIgMTc2IDI1NkMxNzYgMjY0LjgzNiAxODMuMTY0IDI3MiAxOTIgMjcyUzIwOCAyNjQuODM2IDIwOCAyNTZDMjA4IDI0Ny4xNjIgMjAwLjgzNiAyNDAgMTkyIDI0MFpNMjU2IDI0MEMyNDcuMTY0IDI0MCAyNDAgMjQ3LjE2MiAyNDAgMjU2QzI0MCAyNjQuODM2IDI0Ny4xNjQgMjcyIDI1NiAyNzJTMjcyIDI2NC44MzYgMjcyIDI1NkMyNzIgMjQ3LjE2MiAyNjQuODM2IDI0MCAyNTYgMjQwWk0yNTYgMTc2QzI0Ny4xNjQgMTc2IDI0MCAxODMuMTYyIDI0MCAxOTJDMjQwIDIwMC44MzYgMjQ3LjE2NCAyMDggMjU2IDIwOFMyNzIgMjAwLjgzNiAyNzIgMTkyQzI3MiAxODMuMTYyIDI2NC44MzYgMTc2IDI1NiAxNzZaTTMyMCAxNzZDMzExLjE2NCAxNzYgMzA0IDE4My4xNjIgMzA0IDE5MkMzMDQgMjAwLjgzNiAzMTEuMTY0IDIwOCAzMjAgMjA4UzMzNiAyMDAuODM2IDMzNiAxOTJDMzM2IDE4My4xNjIgMzI4LjgzNiAxNzYgMzIwIDE3NlpNMzIwIDI0MEMzMTEuMTY0IDI0MCAzMDQgMjQ3LjE2MiAzMDQgMjU2QzMwNCAyNjQuODM2IDMxMS4xNjQgMjcyIDMyMCAyNzJTMzM2IDI2NC44MzYgMzM2IDI1NkMzMzYgMjQ3LjE2MiAzMjguODM2IDI0MCAzMjAgMjQwWk0zMjAgMzA0QzMxMS4xNjQgMzA0IDMwNCAzMTEuMTYyIDMwNCAzMjBDMzA0IDMyOC44MzYgMzExLjE2NCAzMzYgMzIwIDMzNlMzMzYgMzI4LjgzNiAzMzYgMzIwQzMzNiAzMTEuMTYyIDMyOC44MzYgMzA0IDMyMCAzMDRaTTI1NiAzMDRDMjQ3LjE2NCAzMDQgMjQwIDMxMS4xNjIgMjQwIDMyMEMyNDAgMzI4LjgzNiAyNDcuMTY0IDMzNiAyNTYgMzM2UzI3MiAzMjguODM2IDI3MiAzMjBDMjcyIDMxMS4xNjIgMjY0LjgzNiAzMDQgMjU2IDMwNFpNMTkyIDMwNEMxODMuMTY0IDMwNCAxNzYgMzExLjE2MiAxNzYgMzIwQzE3NiAzMjguODM2IDE4My4xNjQgMzM2IDE5MiAzMzZTMjA4IDMyOC44MzYgMjA4IDMyMEMyMDggMzExLjE2MiAyMDAuODM2IDMwNCAxOTIgMzA0Wk0yODcuNDA0IDgyLjk1NUMyODUuODQyIDk5LjE2OCAyNzIuNjI1IDExMiAyNTYgMTEyUzIyNi4xNTggOTkuMTY4IDIyNC41OTYgODIuOTU1QzE0Mi40MDIgOTcuNzgzIDgwIDE2OS41MzMgODAgMjU2QzgwIDM0Mi40NjUgMTQyLjQwMiA0MTQuMjE3IDIyNC41OTYgNDI5LjA0NUMyMjYuMTU4IDQxMi44MyAyMzkuMzc1IDQwMCAyNTYgNDAwUzI4NS44NDIgNDEyLjgzIDI4Ny40MDQgNDI5LjA0NUMzNjkuNiA0MTQuMjE3IDQzMiAzNDIuNDY1IDQzMiAyNTZDNDMyIDE2OS41MzMgMzY5LjYgOTcuNzgzIDI4Ny40MDQgODIuOTU1Wk0yOTguMzU0IDQxMC4xODRDMjkwLjQ1NyAzOTQuNDk0IDI3NC40MiAzODQgMjU2IDM4NFMyMjEuNTQzIDM5NC40OTQgMjEzLjY0NiA0MTAuMTg0QzE0NC42OTMgMzkxLjM5MSA5NiAzMjguNjUyIDk2IDI1NkM5NiAxODMuMzQ2IDE0NC42OTMgMTIwLjYwNyAyMTMuNjQ2IDEwMS44MTZDMjIxLjU0MyAxMTcuNTA2IDIzNy41ODIgMTI4IDI1NiAxMjhDMjc0LjQyIDEyOCAyOTAuNDU3IDExNy41MDYgMjk4LjM1NCAxMDEuODE2QzM2Ny4zMDcgMTIwLjYwNyA0MTYgMTgzLjM0NiA0MTYgMjU2QzQxNiAzMjguNjUyIDM2Ny4zMDkgMzkxLjM5MSAyOTguMzU0IDQxMC4xODRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Manhole(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480ZM192 176C183.164 176 176 183.162 176 192C176 200.836 183.164 208 192 208S208 200.836 208 192C208 183.162 200.836 176 192 176ZM192 240C183.164 240 176 247.162 176 256C176 264.836 183.164 272 192 272S208 264.836 208 256C208 247.162 200.836 240 192 240ZM256 240C247.164 240 240 247.162 240 256C240 264.836 247.164 272 256 272S272 264.836 272 256C272 247.162 264.836 240 256 240ZM256 176C247.164 176 240 183.162 240 192C240 200.836 247.164 208 256 208S272 200.836 272 192C272 183.162 264.836 176 256 176ZM320 176C311.164 176 304 183.162 304 192C304 200.836 311.164 208 320 208S336 200.836 336 192C336 183.162 328.836 176 320 176ZM320 240C311.164 240 304 247.162 304 256C304 264.836 311.164 272 320 272S336 264.836 336 256C336 247.162 328.836 240 320 240ZM320 304C311.164 304 304 311.162 304 320C304 328.836 311.164 336 320 336S336 328.836 336 320C336 311.162 328.836 304 320 304ZM256 304C247.164 304 240 311.162 240 320C240 328.836 247.164 336 256 336S272 328.836 272 320C272 311.162 264.836 304 256 304ZM192 304C183.164 304 176 311.162 176 320C176 328.836 183.164 336 192 336S208 328.836 208 320C208 311.162 200.836 304 192 304ZM287.404 82.955C285.842 99.168 272.625 112 256 112S226.158 99.168 224.596 82.955C142.402 97.783 80 169.533 80 256C80 342.465 142.402 414.217 224.596 429.045C226.158 412.83 239.375 400 256 400S285.842 412.83 287.404 429.045C369.6 414.217 432 342.465 432 256C432 169.533 369.6 97.783 287.404 82.955ZM298.354 410.184C290.457 394.494 274.42 384 256 384S221.543 394.494 213.646 410.184C144.693 391.391 96 328.652 96 256C96 183.346 144.693 120.607 213.646 101.816C221.543 117.506 237.582 128 256 128C274.42 128 290.457 117.506 298.354 101.816C367.307 120.607 416 183.346 416 256C416 328.652 367.309 391.391 298.354 410.184Z" />
        </Icon>
    </>
}