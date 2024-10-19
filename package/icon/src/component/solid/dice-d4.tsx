
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `dice-d4` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d4?s=solid dice-d4}
 * @preview ![dice-d4](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMzEuNjI3IDBDMjM1Ljc3IDAgMjM5LjgxMiAzLjMxIDIzOS44MTIgOC41MjRWNTAzLjQ1N0MyMzkuODEyIDUwOC41MjkgMjM1Ljg1NiA1MTIgMjMxLjY2IDUxMkMyMjkuOTM2IDUxMiAyMjguMTcxIDUxMS40MTQgMjI2LjYyNCA1MTAuMTEzTDMuMDI2IDMyMS4zMDJDMS4wMzcgMzE5LjYyMSAwIDMxNy4xNTQgMCAzMTQuNjZDMCAzMTIuODQ0IDAuNTUgMzExLjAxMiAxLjY4MiAzMDkuNDU5TDIyNS4yODEgMy4zMzdDMjI2Ljk3MSAxLjAzMSAyMjkuMzE1IDAgMjMxLjYyNyAwWk01MTIgMzE0LjY2QzUxMiAzMTcuMTU0IDUxMC45NjMgMzE5LjYyMSA1MDguOTc0IDMyMS4zMDJMMjg1LjM3NiA1MTAuMTEzQzI4My44MjkgNTExLjQxNCAyODIuMDY0IDUxMiAyODAuMzQgNTEyQzI3Ni4xNDQgNTEyIDI3Mi4xODggNTA4LjUyOSAyNzIuMTg4IDUwMy40NTdWOC41MjRDMjcyLjE4OCAzLjMxIDI3Ni4yMyAwIDI4MC4zNzMgMEMyODIuNjg1IDAgMjg1LjAyOSAxLjAzMSAyODYuNzE5IDMuMzM3TDUxMC4zMTggMzA5LjQ1OUM1MTEuNDUgMzExLjAxMiA1MTIgMzEyLjg0NCA1MTIgMzE0LjY2WiAiPjwvcGF0aD48L3N2Zz4=|width=32|height=32)
 */
export default function DiceD4(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M231.627 0C235.77 0 239.812 3.31 239.812 8.524V503.457C239.812 508.529 235.856 512 231.66 512C229.936 512 228.171 511.414 226.624 510.113L3.026 321.302C1.037 319.621 0 317.154 0 314.66C0 312.844 0.55 311.012 1.682 309.459L225.281 3.337C226.971 1.031 229.315 0 231.627 0ZM512 314.66C512 317.154 510.963 319.621 508.974 321.302L285.376 510.113C283.829 511.414 282.064 512 280.34 512C276.144 512 272.188 508.529 272.188 503.457V8.524C272.188 3.31 276.23 0 280.373 0C282.685 0 285.029 1.031 286.719 3.337L510.318 309.459C511.45 311.012 512 312.844 512 314.66Z " />
        </Icon>
    </>
}