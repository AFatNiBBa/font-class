
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `g` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/g?s=duotone g}
 * @preview ![g](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIyNCA0ODBDMTY0LjE3MiA0ODAgMTA3LjkwNiA0NTYuNjg4IDY1LjYwOSA0MTQuMzc1QzIzLjI5NyAzNzIuMDk0IDAgMzE1Ljg0NCAwIDI1NlMyMy4yOTcgMTM5LjkwNiA2NS42MDkgOTcuNjI1QzEwNy45MDYgNTUuMzEyIDE2NC4xNzIgMzIgMjI0IDMyUzM0MC4wOTQgNTUuMzEyIDM4Mi4zOTEgOTcuNjI1QzQwMS4xNDEgMTE2LjM3NSA0MDEuMTQxIDE0Ni43NSAzODIuMzkxIDE2NS41UzMzMy4yMzQgMTg0LjI1IDMxNC41MTYgMTY1LjVDMjY2LjE0MSAxMTcuMTI1IDE4MS44NTkgMTE3LjEyNSAxMzMuNDg0IDE2NS41QzEwOS4zMTIgMTg5LjY4OCA5NiAyMjEuODEyIDk2IDI1NlMxMDkuMzEyIDMyMi4zMTIgMTMzLjQ4NCAzNDYuNUMxODEuODU5IDM5NC44NzUgMjY2LjE0MSAzOTQuODc1IDMxNC41MTYgMzQ2LjVDMzIyLjg3NSAzMzguMTI1IDMzMC4wOTQgMzI5LjE4OCAzMzYgMzIwSDI0MEMyMTMuNDg0IDMyMCAxOTIgMjk4LjUgMTkyIDI3MlMyMTMuNDg0IDIyNCAyNDAgMjI0SDQwMEM0MjYuNTE2IDIyNCA0NDggMjQ1LjUgNDQ4IDI3MlYyODhDNDQ4IDI5MC45MDYgNDQ3LjczNCAyOTMuODEyIDQ0Ny4yMDMgMjk2LjY4OEM0MzkuNTE2IDMzOC40NjkgNDE2LjUgMzgwLjI4MSAzODIuMzkxIDQxNC4zNzVDMzQwLjA5NCA0NTYuNjg4IDI4My44MjggNDgwIDIyNCA0ODBaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function G(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M224 480C164.172 480 107.906 456.688 65.609 414.375C23.297 372.094 0 315.844 0 256S23.297 139.906 65.609 97.625C107.906 55.312 164.172 32 224 32S340.094 55.312 382.391 97.625C401.141 116.375 401.141 146.75 382.391 165.5S333.234 184.25 314.516 165.5C266.141 117.125 181.859 117.125 133.484 165.5C109.312 189.688 96 221.812 96 256S109.312 322.312 133.484 346.5C181.859 394.875 266.141 394.875 314.516 346.5C322.875 338.125 330.094 329.188 336 320H240C213.484 320 192 298.5 192 272S213.484 224 240 224H400C426.516 224 448 245.5 448 272V288C448 290.906 447.734 293.812 447.203 296.688C439.516 338.469 416.5 380.281 382.391 414.375C340.094 456.688 283.828 480 224 480Z" />
        </Icon>
    </>
}