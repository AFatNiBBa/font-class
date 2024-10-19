
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `message-dots` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/message-dots?s=light message-dots}
 * @preview ![message-dots](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMEg2NEMyOC43NSAwIDAgMjguNzUgMCA2NFYzNTIuMDAyQzAgMzg3LjI1MiAyOC43NSA0MTYuMDAyIDY0IDQxNi4wMDJIMTYwVjUwMC4wMDJDMTYwIDUwOS44NCAxNzEuMDI1IDUxNS40NzkgMTc5LjEyNSA1MDkuNjI3TDMwNCA0MTYuMDAySDQ0OEM0ODMuMjUgNDE2LjAwMiA1MTIgMzg3LjI1MiA1MTIgMzUyLjAwMlY2NEM1MTIgMjguNzUgNDgzLjI1IDAgNDQ4IDBaTTQ4MCAzNTIuMDAyQzQ4MCAzNjkuNjAyIDQ2NS42IDM4NC4wMDIgNDQ4IDM4NC4wMDJIMzAzLjkyNEMyOTYuOTk2IDM4NC4wMDIgMjkwLjI1NCAzODYuMjUgMjg0LjcxMyAzOTAuNDA4TDE5MiA0NjAuMDAyVjQwMC4wMDJDMTkyIDM5MS4xNjQgMTg0LjgzNiAzODQuMDAyIDE3NiAzODQuMDAySDY0QzQ2LjQgMzg0LjAwMiAzMiAzNjkuNjAyIDMyIDM1Mi4wMDJWNjRDMzIgNDYuNCA0Ni40IDMyIDY0IDMySDQ0OEM0NjUuNiAzMiA0ODAgNDYuNCA0ODAgNjRWMzUyLjAwMlpNMTI4IDE4NEMxMTQuNzQ2IDE4NCAxMDQgMTk0Ljc0NCAxMDQgMjA4QzEwNCAyMjEuMjU0IDExNC43NDYgMjMyIDEyOCAyMzJTMTUyIDIyMS4yNTQgMTUyIDIwOEMxNTIgMTk0Ljc0NCAxNDEuMjU0IDE4NCAxMjggMTg0Wk0zODQgMTg0QzM3MC43NDYgMTg0IDM2MCAxOTQuNzQ0IDM2MCAyMDhDMzYwIDIyMS4yNTQgMzcwLjc0NiAyMzIgMzg0IDIzMlM0MDggMjIxLjI1NCA0MDggMjA4QzQwOCAxOTQuNzQ0IDM5Ny4yNTQgMTg0IDM4NCAxODRaTTI1NiAxODRDMjQyLjc0NiAxODQgMjMyIDE5NC43NDQgMjMyIDIwOEMyMzIgMjIxLjI1NCAyNDIuNzQ2IDIzMiAyNTYgMjMyUzI4MCAyMjEuMjU0IDI4MCAyMDhDMjgwIDE5NC43NDQgMjY5LjI1NCAxODQgMjU2IDE4NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function MessageDots(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 0H64C28.75 0 0 28.75 0 64V352.002C0 387.252 28.75 416.002 64 416.002H160V500.002C160 509.84 171.025 515.479 179.125 509.627L304 416.002H448C483.25 416.002 512 387.252 512 352.002V64C512 28.75 483.25 0 448 0ZM480 352.002C480 369.602 465.6 384.002 448 384.002H303.924C296.996 384.002 290.254 386.25 284.713 390.408L192 460.002V400.002C192 391.164 184.836 384.002 176 384.002H64C46.4 384.002 32 369.602 32 352.002V64C32 46.4 46.4 32 64 32H448C465.6 32 480 46.4 480 64V352.002ZM128 184C114.746 184 104 194.744 104 208C104 221.254 114.746 232 128 232S152 221.254 152 208C152 194.744 141.254 184 128 184ZM384 184C370.746 184 360 194.744 360 208C360 221.254 370.746 232 384 232S408 221.254 408 208C408 194.744 397.254 184 384 184ZM256 184C242.746 184 232 194.744 232 208C232 221.254 242.746 232 256 232S280 221.254 280 208C280 194.744 269.254 184 256 184Z" />
        </Icon>
    </>
}