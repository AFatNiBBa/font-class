
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-from-bracket` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-from-bracket?s=thin arrow-up-from-bracket}
 * @preview ![arrow-up-from-bracket](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzIgMzkyVjQ3MkM0MzIgNDg1LjIzNCA0MjEuMjM0IDQ5NiA0MDggNDk2SDQwQzI2Ljc2NiA0OTYgMTYgNDg1LjIzNCAxNiA0NzJWMzkyQzE2IDM4Ny41NzggMTIuNDIyIDM4NCA4IDM4NFMwIDM4Ny41NzggMCAzOTJWNDcyQzAgNDk0LjA2MiAxNy45MzggNTEyIDQwIDUxMkg0MDhDNDMwLjA2MiA1MTIgNDQ4IDQ5NC4wNjIgNDQ4IDQ3MlYzOTJDNDQ4IDM4Ny41NzggNDQ0LjQyMiAzODQgNDQwIDM4NFM0MzIgMzg3LjU3OCA0MzIgMzkyWk0yMTguMzQ0IDIuMzQ0TDM0LjM0NCAxODYuMzQ0QzMyLjc4MSAxODcuOTA2IDMyIDE4OS45MzggMzIgMTkyUzMyLjc4MSAxOTYuMDk0IDM0LjM0NCAxOTcuNjU2QzM3LjQ2OSAyMDAuNzgxIDQyLjUzMSAyMDAuNzgxIDQ1LjY1NiAxOTcuNjU2TDIxNiAyNy4zMTJWMzc2QzIxNiAzODAuNDA2IDIxOS41NzggMzg0IDIyNCAzODRTMjMyIDM4MC40MDYgMjMyIDM3NlYyNy4zMTJMNDAyLjM0NCAxOTcuNjU2QzQwNS40NjkgMjAwLjc4MSA0MTAuNTMxIDIwMC43ODEgNDEzLjY1NiAxOTcuNjU2QzQxNS4yMTkgMTk2LjA5NCA0MTYgMTk0LjA2MiA0MTYgMTkyUzQxNS4yMTkgMTg3LjkwNiA0MTMuNjU2IDE4Ni4zNDRMMjI5LjY1NiAyLjM0NEMyMjguMDk0IDAuNzgxIDIyNi4wNDcgMCAyMjQgMFMyMTkuOTA2IDAuNzgxIDIxOC4zNDQgMi4zNDRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ArrowUpFromBracket(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M432 392V472C432 485.234 421.234 496 408 496H40C26.766 496 16 485.234 16 472V392C16 387.578 12.422 384 8 384S0 387.578 0 392V472C0 494.062 17.938 512 40 512H408C430.062 512 448 494.062 448 472V392C448 387.578 444.422 384 440 384S432 387.578 432 392ZM218.344 2.344L34.344 186.344C32.781 187.906 32 189.938 32 192S32.781 196.094 34.344 197.656C37.469 200.781 42.531 200.781 45.656 197.656L216 27.312V376C216 380.406 219.578 384 224 384S232 380.406 232 376V27.312L402.344 197.656C405.469 200.781 410.531 200.781 413.656 197.656C415.219 196.094 416 194.062 416 192S415.219 187.906 413.656 186.344L229.656 2.344C228.094 0.781 226.047 0 224 0S219.906 0.781 218.344 2.344Z" />
        </Icon>
    </>
}