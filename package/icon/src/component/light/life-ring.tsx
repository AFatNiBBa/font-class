
import { Icon } from "../../index";

/**
 * A component that renders the `life-ring` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/life-ring?s=light life-ring}
 * @preview ![life-ring](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzYuNDc5IDQxMy44NTRDNDczLjQzNCAzNzEuNjM5IDQ5NiAzMTYuNTE0IDQ5NiAyNTZTNDczLjQzNCAxNDAuMzYxIDQzNi40NzkgOTguMTQ2TDQ0My4zMTIgOTEuMzEyQzQ0OS41NjIgODUuMDYyIDQ0OS41NjIgNzQuOTM3IDQ0My4zMTIgNjguNjg4UzQyNi45MzcgNjIuNDM4IDQyMC42ODggNjguNjg4TDQxMy44NTQgNzUuNTIxQzM3MS42MzkgMzguNTY2IDMxNi41MTQgMTYgMjU2IDE2UzE0MC4zNjEgMzguNTY2IDk4LjE0NiA3NS41MjFMOTEuMzEyIDY4LjY4OEM4NS4wNjIgNjIuNDM4IDc0LjkzNyA2Mi40MzggNjguNjg4IDY4LjY4OFM2Mi40MzggODUuMDYzIDY4LjY4OCA5MS4zMTJMNzUuNTIxIDk4LjE0NkMzOC41NjYgMTQwLjM2MSAxNiAxOTUuNDg2IDE2IDI1NlMzOC41NjYgMzcxLjYzOSA3NS41MjEgNDEzLjg1NEw2OC42ODggNDIwLjY4OEM2Mi40MzggNDI2LjkzOCA2Mi40MzggNDM3LjA2MyA2OC42ODggNDQzLjMxMkM3MS44MTIgNDQ2LjQzOCA3NS45MDYgNDQ4IDgwIDQ0OFM4OC4xODggNDQ2LjQzOCA5MS4zMTIgNDQzLjMxMkw5OC4xNDYgNDM2LjQ3OUMxNDAuMzYxIDQ3My40MzQgMTk1LjQ4NiA0OTYgMjU2IDQ5NlMzNzEuNjM5IDQ3My40MzQgNDEzLjg1NCA0MzYuNDc5TDQyMC42ODggNDQzLjMxMkM0MjMuODEyIDQ0Ni40MzggNDI3LjkwNiA0NDggNDMyIDQ0OFM0NDAuMTg4IDQ0Ni40MzggNDQzLjMxMiA0NDMuMzEyQzQ0OS41NjIgNDM3LjA2MiA0NDkuNTYyIDQyNi45MzcgNDQzLjMxMiA0MjAuNjg4TDQzNi40NzkgNDEzLjg1NFpNNDY0IDI1NkM0NjQgMzA3LjU5OCA0NDUuMDA0IDM1NC43NjYgNDEzLjc4MyAzOTEuMTU4TDMzNC4wODIgMzExLjQ1N0MzNDUuMjY2IDI5NS43NjIgMzUyIDI3Ni42OTkgMzUyIDI1NlMzNDUuMjY2IDIxNi4yMzggMzM0LjA4MiAyMDAuNTQzTDQxMy43ODMgMTIwLjg0MkM0NDUuMDA0IDE1Ny4yMzQgNDY0IDIwNC40MDIgNDY0IDI1NlpNMTkyIDI1NkMxOTIgMjIwLjcxOSAyMjAuNzAzIDE5MiAyNTYgMTkyUzMyMCAyMjAuNzE5IDMyMCAyNTZTMjkxLjI5NyAzMjAgMjU2IDMyMFMxOTIgMjkxLjI4MSAxOTIgMjU2Wk0yNTYgNDhDMzA3LjU5OCA0OCAzNTQuNzY2IDY2Ljk5NiAzOTEuMTU4IDk4LjIxN0wzMTEuNDU3IDE3Ny45MThDMjk1Ljc2MiAxNjYuNzM0IDI3Ni42OTkgMTYwIDI1NiAxNjBTMjE2LjIzOCAxNjYuNzM0IDIwMC41NDMgMTc3LjkxOEwxMjAuODQyIDk4LjIxN0MxNTcuMjM0IDY2Ljk5NiAyMDQuNDAyIDQ4IDI1NiA0OFpNNDggMjU2QzQ4IDIwNC40MDIgNjYuOTk2IDE1Ny4yMzQgOTguMjE3IDEyMC44NDJMMTc3LjkxOCAyMDAuNTQzQzE2Ni43MzQgMjE2LjIzOCAxNjAgMjM1LjMwMSAxNjAgMjU2UzE2Ni43MzQgMjk1Ljc2MiAxNzcuOTE4IDMxMS40NTdMOTguMjE3IDM5MS4xNThDNjYuOTk2IDM1NC43NjYgNDggMzA3LjU5OCA0OCAyNTZaTTI1NiA0NjRDMjA0LjQwMiA0NjQgMTU3LjIzNCA0NDUuMDA0IDEyMC44NDIgNDEzLjc4M0wyMDAuNTQzIDMzNC4wODJDMjE2LjIzOCAzNDUuMjY2IDIzNS4zMDEgMzUyIDI1NiAzNTJTMjk1Ljc2MiAzNDUuMjY2IDMxMS40NTcgMzM0LjA4MkwzOTEuMTU4IDQxMy43ODNDMzU0Ljc2NiA0NDUuMDA0IDMwNy41OTggNDY0IDI1NiA0NjRaIi8+PC9zdmc+|width=32|height=32)
 */
const LifeRing: typeof Icon = x => (
    <Icon {...x}>
        <path d="M436.479 413.854C473.434 371.639 496 316.514 496 256S473.434 140.361 436.479 98.146L443.312 91.312C449.562 85.062 449.562 74.937 443.312 68.688S426.937 62.438 420.688 68.688L413.854 75.521C371.639 38.566 316.514 16 256 16S140.361 38.566 98.146 75.521L91.312 68.688C85.062 62.438 74.937 62.438 68.688 68.688S62.438 85.063 68.688 91.312L75.521 98.146C38.566 140.361 16 195.486 16 256S38.566 371.639 75.521 413.854L68.688 420.688C62.438 426.938 62.438 437.063 68.688 443.312C71.812 446.438 75.906 448 80 448S88.188 446.438 91.312 443.312L98.146 436.479C140.361 473.434 195.486 496 256 496S371.639 473.434 413.854 436.479L420.688 443.312C423.812 446.438 427.906 448 432 448S440.188 446.438 443.312 443.312C449.562 437.062 449.562 426.937 443.312 420.688L436.479 413.854ZM464 256C464 307.598 445.004 354.766 413.783 391.158L334.082 311.457C345.266 295.762 352 276.699 352 256S345.266 216.238 334.082 200.543L413.783 120.842C445.004 157.234 464 204.402 464 256ZM192 256C192 220.719 220.703 192 256 192S320 220.719 320 256S291.297 320 256 320S192 291.281 192 256ZM256 48C307.598 48 354.766 66.996 391.158 98.217L311.457 177.918C295.762 166.734 276.699 160 256 160S216.238 166.734 200.543 177.918L120.842 98.217C157.234 66.996 204.402 48 256 48ZM48 256C48 204.402 66.996 157.234 98.217 120.842L177.918 200.543C166.734 216.238 160 235.301 160 256S166.734 295.762 177.918 311.457L98.217 391.158C66.996 354.766 48 307.598 48 256ZM256 464C204.402 464 157.234 445.004 120.842 413.783L200.543 334.082C216.238 345.266 235.301 352 256 352S295.762 345.266 311.457 334.082L391.158 413.783C354.766 445.004 307.598 464 256 464Z" />
    </Icon>
);

export default LifeRing;