
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `message-xmark` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/message-xmark?s=light message-xmark}
 * @preview ![message-xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMEg2NEMyOC43NSAwIDAgMjguNzUgMCA2NFYzNTIuMDAyQzAgMzg3LjI1MiAyOC43NSA0MTYuMDAyIDY0IDQxNi4wMDJIMTYwVjUwMC4wMDJDMTYwIDUwOS44NCAxNzEuMDIzIDUxNS40NzkgMTc5LjEyNSA1MDkuNjI3TDMwNCA0MTYuMDAySDQ0OEM0ODMuMjUgNDE2LjAwMiA1MTIgMzg3LjI1MiA1MTIgMzUyLjAwMlY2NEM1MTIgMjguNzUgNDgzLjI1IDAgNDQ4IDBaTTQ4MCAzNTIuMDAyQzQ4MCAzNjkuNjAyIDQ2NS42MDIgMzg0LjAwMiA0NDggMzg0LjAwMkgzMDMuOTIyQzI5Ni45OTYgMzg0LjAwMiAyOTAuMjU0IDM4Ni4yNSAyODQuNzExIDM5MC40MDhMMTkyIDQ2MC4wMDJWNDAwLjAwMkMxOTIgMzkxLjE2NCAxODQuODM2IDM4NC4wMDIgMTc2IDM4NC4wMDJINjRDNDYuMzk4IDM4NC4wMDIgMzIgMzY5LjYwMiAzMiAzNTIuMDAyVjY0QzMyIDQ2LjQgNDYuMzk4IDMyIDY0IDMySDQ0OEM0NjUuNjAyIDMyIDQ4MCA0Ni40IDQ4MCA2NFYzNTIuMDAyWk0zMzEuMzEyIDEzMi42ODhDMzI1LjA2MiAxMjYuNDM4IDMxNC45MzcgMTI2LjQzOCAzMDguNjg4IDEzMi42ODhMMjU2IDE4NS4zNzVMMjAzLjMxMiAxMzIuNjg4QzE5Ny4wNjIgMTI2LjQzOCAxODYuOTM3IDEyNi40MzggMTgwLjY4OCAxMzIuNjg4UzE3NC40MzggMTQ5LjA2MyAxODAuNjg4IDE1NS4zMTJMMjMzLjM3NSAyMDhMMTgwLjY4OCAyNjAuNjg4QzE3NC40MzggMjY2LjkzOCAxNzQuNDM4IDI3Ny4wNjMgMTgwLjY4OCAyODMuMzEyQzE4Ni45MyAyODkuNTU5IDE5Ny4wNTUgMjg5LjU2NiAyMDMuMzEyIDI4My4zMTJMMjU2IDIzMC42MjVMMzA4LjY4OCAyODMuMzEyQzMxNC45MyAyODkuNTU5IDMyNS4wNTUgMjg5LjU2NiAzMzEuMzEyIDI4My4zMTJDMzM3LjU2MiAyNzcuMDYyIDMzNy41NjIgMjY2LjkzNyAzMzEuMzEyIDI2MC42ODhMMjc4LjYyNSAyMDhMMzMxLjMxMiAxNTUuMzEyQzMzNy41NjIgMTQ5LjA2MiAzMzcuNTYyIDEzOC45MzggMzMxLjMxMiAxMzIuNjg4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function MessageXmark(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 0H64C28.75 0 0 28.75 0 64V352.002C0 387.252 28.75 416.002 64 416.002H160V500.002C160 509.84 171.023 515.479 179.125 509.627L304 416.002H448C483.25 416.002 512 387.252 512 352.002V64C512 28.75 483.25 0 448 0ZM480 352.002C480 369.602 465.602 384.002 448 384.002H303.922C296.996 384.002 290.254 386.25 284.711 390.408L192 460.002V400.002C192 391.164 184.836 384.002 176 384.002H64C46.398 384.002 32 369.602 32 352.002V64C32 46.4 46.398 32 64 32H448C465.602 32 480 46.4 480 64V352.002ZM331.312 132.688C325.062 126.438 314.937 126.438 308.688 132.688L256 185.375L203.312 132.688C197.062 126.438 186.937 126.438 180.688 132.688S174.438 149.063 180.688 155.312L233.375 208L180.688 260.688C174.438 266.938 174.438 277.063 180.688 283.312C186.93 289.559 197.055 289.566 203.312 283.312L256 230.625L308.688 283.312C314.93 289.559 325.055 289.566 331.312 283.312C337.562 277.062 337.562 266.937 331.312 260.688L278.625 208L331.312 155.312C337.562 149.062 337.562 138.938 331.312 132.688Z" />
        </Icon>
    </>
}