
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-down` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-down?s=thin circle-down}
 * @preview ![circle-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMzkuMDI5IDM4OS42NTRDMjQzLjcxNyAzOTQuMzQgMjQ5Ljg1NyAzOTYuNjg0IDI1NiAzOTYuNjg0UzI2OC4yODMgMzk0LjM0IDI3Mi45NzEgMzg5LjY1NEwzNjUuNjU0IDI5Ni45NzFDMzgwLjc3MyAyODEuODUyIDM3MC4wNjYgMjU2IDM0OC42ODQgMjU2SDMwNFYxNTJDMzA0IDEzOC43NDQgMjkzLjI1NCAxMjggMjgwIDEyOEgyMzJDMjE4Ljc0NiAxMjggMjA4IDEzOC43NDQgMjA4IDE1MlYyNTZIMTYzLjMxNkMxNDEuOTM0IDI1NiAxMzEuMjI3IDI4MS44NTIgMTQ2LjM0NiAyOTYuOTcxTDIzOS4wMjkgMzg5LjY1NFpNMTU1LjkyNCAyNzYuOTM4QzE1Ni41MzkgMjc1LjQ1MyAxNTguNDkyIDI3MiAxNjMuMzE2IDI3MkgyMjRWMTUyQzIyNCAxNDcuNTg4IDIyNy41ODggMTQ0IDIzMiAxNDRIMjgwQzI4NC40MTIgMTQ0IDI4OCAxNDcuNTg4IDI4OCAxNTJWMjcySDM0OC42ODRDMzUzLjUwOCAyNzIgMzU1LjQ2MSAyNzUuNDUzIDM1Ni4wNzYgMjc2LjkzOEMzNTYuNjg5IDI3OC40MjQgMzU3Ljc1MiAyODIuMjQ0IDM1NC4zNCAyODUuNjU2TDI2MS42NTYgMzc4LjM0QzI1OS42MTcgMzgwLjM3OSAyNTcuMjM4IDM4MC42ODQgMjU2IDM4MC42ODRTMjUyLjM4MyAzODAuMzc5IDI1MC4zNDQgMzc4LjM0TDE1Ny42NiAyODUuNjU2QzE1NC4yNDggMjgyLjI0NCAxNTUuMzExIDI3OC40MjQgMTU1LjkyNCAyNzYuOTM4Wk0yNTYgNDk2QzM4OC41NDkgNDk2IDQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZTMTYgMTIzLjQ1MSAxNiAyNTZTMTIzLjQ1MSA0OTYgMjU2IDQ5NlpNMjU2IDMyQzM3OS41MTQgMzIgNDgwIDEzMi40ODYgNDgwIDI1NlMzNzkuNTE0IDQ4MCAyNTYgNDgwUzMyIDM3OS41MTQgMzIgMjU2UzEzMi40ODYgMzIgMjU2IDMyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M239.029 389.654C243.717 394.34 249.857 396.684 256 396.684S268.283 394.34 272.971 389.654L365.654 296.971C380.773 281.852 370.066 256 348.684 256H304V152C304 138.744 293.254 128 280 128H232C218.746 128 208 138.744 208 152V256H163.316C141.934 256 131.227 281.852 146.346 296.971L239.029 389.654ZM155.924 276.938C156.539 275.453 158.492 272 163.316 272H224V152C224 147.588 227.588 144 232 144H280C284.412 144 288 147.588 288 152V272H348.684C353.508 272 355.461 275.453 356.076 276.938C356.689 278.424 357.752 282.244 354.34 285.656L261.656 378.34C259.617 380.379 257.238 380.684 256 380.684S252.383 380.379 250.344 378.34L157.66 285.656C154.248 282.244 155.311 278.424 155.924 276.938ZM256 496C388.549 496 496 388.549 496 256S388.549 16 256 16S16 123.451 16 256S123.451 496 256 496ZM256 32C379.514 32 480 132.486 480 256S379.514 480 256 480S32 379.514 32 256S132.486 32 256 32Z" />
        </Icon>
    </>
}