
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `droplet` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/droplet?s=thin droplet}
 * @preview ![droplet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjEuMjUgMjIuMTI3QzIxNy4yMDcgNy41MzkgMjA0LjYxMSAwIDE5MS45NzkgMEMxNzkuNjA3IDAgMTY3LjIwMyA3LjIyMyAxNjIuNzUgMjIuMTI3QzExNiAxNzkuODc3IDE2IDIyMi43NTIgMTYgMzMzLjg3NUMxNiA0MzIuMzc1IDk0Ljc1IDUxMiAxOTIgNTEyUzM2OCA0MzIuMzc1IDM2OCAzMzMuODc1QzM2OCAyMjIuMTI3IDI2OC4yNSAxODAuNjI3IDIyMS4yNSAyMi4xMjdaTTE5MiA0OTZDMTAzLjc3NSA0OTYgMzIgNDIzLjI3MSAzMiAzMzMuODc1QzMyIDI4MC41MzMgNTcuNDU3IDI0NC4wNTUgODkuNjg4IDE5Ny44NjlDMTIwLjM3NyAxNTMuODkxIDE1NS4xNjIgMTA0LjA0MyAxNzguMDggMjYuNzA3QzE4MC45NjcgMTcuMDQzIDE4OC43NjIgMTYgMTkxLjk3OSAxNkMxOTcuMjgxIDE2IDIwMy43MDcgMTguNzMyIDIwNS45MSAyNi42NzZDMjI4Ljk2NyAxMDQuNDI4IDI2My43NTIgMTU0LjEzMyAyOTQuNDQzIDE5Ny45ODZDMzI2LjYgMjQzLjkzNiAzNTIgMjgwLjIyOSAzNTIgMzMzLjg3NUMzNTIgNDIzLjI3MSAyODAuMjI1IDQ5NiAxOTIgNDk2Wk0xODQgNDI0QzEzOS44NzUgNDI0IDEwNCAzODguMTA5IDEwNCAzNDRDMTA0IDMzOS41NzggMTAwLjQwNiAzMzYgOTYgMzM2Uzg4IDMzOS41NzggODggMzQ0Qzg4IDM5Ni45MzggMTMxLjA2MiA0NDAgMTg0IDQ0MEMxODguNDA2IDQ0MCAxOTIgNDM2LjQyMiAxOTIgNDMyUzE4OC40MDYgNDI0IDE4NCA0MjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Droplet(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M221.25 22.127C217.207 7.539 204.611 0 191.979 0C179.607 0 167.203 7.223 162.75 22.127C116 179.877 16 222.752 16 333.875C16 432.375 94.75 512 192 512S368 432.375 368 333.875C368 222.127 268.25 180.627 221.25 22.127ZM192 496C103.775 496 32 423.271 32 333.875C32 280.533 57.457 244.055 89.688 197.869C120.377 153.891 155.162 104.043 178.08 26.707C180.967 17.043 188.762 16 191.979 16C197.281 16 203.707 18.732 205.91 26.676C228.967 104.428 263.752 154.133 294.443 197.986C326.6 243.936 352 280.229 352 333.875C352 423.271 280.225 496 192 496ZM184 424C139.875 424 104 388.109 104 344C104 339.578 100.406 336 96 336S88 339.578 88 344C88 396.938 131.062 440 184 440C188.406 440 192 436.422 192 432S188.406 424 184 424Z" />
        </Icon>
    </>
}