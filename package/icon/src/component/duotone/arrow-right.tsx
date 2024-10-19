
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-right` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right?s=duotone arrow-right}
 * @preview ![arrow-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMxNC44MiAyOTZINDBDMTcuOTA2IDI5NiAwIDI3OC4wOTQgMCAyNTZTMTcuOTA2IDIxNiA0MCAyMTZIMzE0LjgyTDM1Mi44MTIgMjU2TDMxNC44MiAyOTZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTQ0Ny45NzggMjU2QzQ0Ny45NzggMjY1LjkyMiA0NDQuMzIyIDI3NS44MjggNDM2Ljk3OCAyODMuNTQ3TDI4NC45NzggNDQzLjU0N0MyNjkuNzU5IDQ1OS41NjIgMjQ0LjQ0NyA0NjAuMjE5IDIyOC40MTYgNDQ1QzIxMi40NzggNDI5Ljc2NiAyMTEuNzkxIDQwNC40MjIgMjI2Ljk3OCAzODguNDUzTDM1Mi43OTEgMjU2TDIyNi45NzggMTIzLjU0N0MyMTEuNzkxIDEwNy41NjIgMjEyLjQ0NyA4Mi4yMTkgMjI4LjQxNiA2N0MyNDQuNDQ3IDUxLjc4MSAyNjkuNzU5IDUyLjQzOCAyODQuOTc4IDY4LjQ1M0w0MzYuOTc4IDIyOC40NTNDNDQ0LjMyMiAyMzYuMTcyIDQ0Ny45NzggMjQ2LjA3OCA0NDcuOTc4IDI1NloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
const ArrowRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M314.82 296H40C17.906 296 0 278.094 0 256S17.906 216 40 216H314.82L352.812 256L314.82 296Z" />
            <path d="M447.978 256C447.978 265.922 444.322 275.828 436.978 283.547L284.978 443.547C269.759 459.562 244.447 460.219 228.416 445C212.478 429.766 211.791 404.422 226.978 388.453L352.791 256L226.978 123.547C211.791 107.562 212.447 82.219 228.416 67C244.447 51.781 269.759 52.438 284.978 68.453L436.978 228.453C444.322 236.172 447.978 246.078 447.978 256Z" />
    </Icon>
);

export default ArrowRight;