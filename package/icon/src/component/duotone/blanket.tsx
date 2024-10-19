
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `blanket` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/blanket?s=duotone blanket}
 * @preview ![blanket](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ0OCAxMjhDNDQ4IDEyOCA0NDcuOTA4IDI2MS42OTcgNDQ3LjcyMyAzMDEuMjZDNDQ2LjI0IDI1OC40NDEgNDExLjE3MiAyMjQgMzY4IDIyNEgxMjhDNTcuNDIyIDIyNCAwIDI4MS40MjIgMCAzNTJWMTI4QzAgNzUuMTI1IDQzLjEyNSAzMiA5NiAzMkgzNTJDNDA0Ljg3NSAzMiA0NDggNzUuMTI1IDQ0OCAxMjhaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTQ0OCA0MzJWNDY0QzQ0OCA0NzIuNzUgNDQwLjc1IDQ4MCA0MzIgNDgwSDEyOEM1Ny4yNSA0ODAgMCA0MjIuNzUgMCAzNTJDMCAyODEuNDIyIDU3LjQyMiAyMjQgMTI4IDIyNEgzNjhDNDExLjE3MiAyMjQgNDQ2LjI0IDI1OC40NDEgNDQ3LjcyMyAzMDEuMjZMNDQ3LjYyNSAzMTIuMzc1QzQ0My4zNzUgMzU0IDQwNS4xMjUgMzg0IDM2My4yNSAzODRIMTI4QzExMC4yNSAzODQgOTYgMzY5Ljc1IDk2IDM1MlMxMTAuMjUgMzIwIDEyOCAzMjBIMzY4QzM3Ni43NSAzMjAgMzg0IDMxMi43NSAzODQgMzA0UzM3Ni43NSAyODggMzY4IDI4OEgxMjhDOTIuNzUgMjg4IDY0IDMxNi43NSA2NCAzNTJTOTIuNzUgNDE2IDEyOCA0MTZINDMyQzQ0MC43NSA0MTYgNDQ4IDQyMy4yNSA0NDggNDMyWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Blanket(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M448 128C448 128 447.908 261.697 447.723 301.26C446.24 258.441 411.172 224 368 224H128C57.422 224 0 281.422 0 352V128C0 75.125 43.125 32 96 32H352C404.875 32 448 75.125 448 128Z" />
            <path d="M448 432V464C448 472.75 440.75 480 432 480H128C57.25 480 0 422.75 0 352C0 281.422 57.422 224 128 224H368C411.172 224 446.24 258.441 447.723 301.26L447.625 312.375C443.375 354 405.125 384 363.25 384H128C110.25 384 96 369.75 96 352S110.25 320 128 320H368C376.75 320 384 312.75 384 304S376.75 288 368 288H128C92.75 288 64 316.75 64 352S92.75 416 128 416H432C440.75 416 448 423.25 448 432Z" />
        </Icon>
    </>
}