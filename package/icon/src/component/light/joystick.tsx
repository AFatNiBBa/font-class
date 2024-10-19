
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `joystick` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/joystick?s=light joystick}
 * @preview ![joystick](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDAgMzUySDI0MFYyMjIuMzg3QzI5NC4yMDkgMjE0LjU2MyAzMzYgMTY4LjM3NSAzMzYgMTEyQzMzNiA1MC4xNDUgMjg1Ljg1NSAwIDIyNCAwUzExMiA1MC4xNDUgMTEyIDExMkMxMTIgMTY4LjM3NSAxNTMuNzkxIDIxNC41NjIgMjA4IDIyMi4zODdWMzUySDQ4QzIxLjQ5IDM1MiAwIDM3My40OSAwIDQwMFY0NjRDMCA0OTAuNTEgMjEuNDkgNTEyIDQ4IDUxMkg0MDBDNDI2LjUxIDUxMiA0NDggNDkwLjUxIDQ0OCA0NjRWNDAwQzQ0OCAzNzMuNDkgNDI2LjUxIDM1MiA0MDAgMzUyWk0xNDQgMTEyQzE0NCA2Ny44ODkgMTc5Ljg4OSAzMiAyMjQgMzJTMzA0IDY3Ljg4OSAzMDQgMTEyUzI2OC4xMTEgMTkyIDIyNCAxOTJTMTQ0IDE1Ni4xMTEgMTQ0IDExMlpNNDE2IDQ2NEM0MTYgNDcyLjgyMiA0MDguODIyIDQ4MCA0MDAgNDgwSDQ4QzM5LjE3OCA0ODAgMzIgNDcyLjgyMiAzMiA0NjRWNDAwQzMyIDM5MS4xNzggMzkuMTc4IDM4NCA0OCAzODRINDAwQzQwOC44MjIgMzg0IDQxNiAzOTEuMTc4IDQxNiA0MDBWNDY0Wk0yMzIgODBDMjMyIDY2Ljc0NCAyMjEuMjU0IDU2IDIwOCA1NlMxODQgNjYuNzQ0IDE4NCA4MEMxODQgOTMuMjU0IDE5NC43NDYgMTA0IDIwOCAxMDRTMjMyIDkzLjI1NCAyMzIgODBaTTY0IDMyMEgxMjhDMTM2Ljg0NCAzMjAgMTQ0IDMxMi44NDQgMTQ0IDMwNFMxMzYuODQ0IDI4OCAxMjggMjg4SDY0QzU1LjE1NiAyODggNDggMjk1LjE1NiA0OCAzMDRTNTUuMTU2IDMyMCA2NCAzMjBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Joystick(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M400 352H240V222.387C294.209 214.563 336 168.375 336 112C336 50.145 285.855 0 224 0S112 50.145 112 112C112 168.375 153.791 214.562 208 222.387V352H48C21.49 352 0 373.49 0 400V464C0 490.51 21.49 512 48 512H400C426.51 512 448 490.51 448 464V400C448 373.49 426.51 352 400 352ZM144 112C144 67.889 179.889 32 224 32S304 67.889 304 112S268.111 192 224 192S144 156.111 144 112ZM416 464C416 472.822 408.822 480 400 480H48C39.178 480 32 472.822 32 464V400C32 391.178 39.178 384 48 384H400C408.822 384 416 391.178 416 400V464ZM232 80C232 66.744 221.254 56 208 56S184 66.744 184 80C184 93.254 194.746 104 208 104S232 93.254 232 80ZM64 320H128C136.844 320 144 312.844 144 304S136.844 288 128 288H64C55.156 288 48 295.156 48 304S55.156 320 64 320Z" />
        </Icon>
    </>
}