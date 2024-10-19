
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-n` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-n?s=duotone circle-n}
 * @preview ![circle-n](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxNkMxMjMuNDUxIDE2IDE2IDEyMy40NTEgMTYgMjU2UzEyMy40NTEgNDk2IDI1NiA0OTZTNDk2IDM4OC41NDkgNDk2IDI1NlMzODguNTQ5IDE2IDI1NiAxNlpNMzUyIDM2MEMzNTIgMzcwLjUgMzQ1LjE3MiAzNzkuNzgxIDMzNS4xNTYgMzgyLjkwNkMzMzIuNzk3IDM4My42NDEgMzMwLjM5MSAzODQgMzI4IDM4NEMzMjAuMjgxIDM4NCAzMTIuODI4IDM4MC4yNjYgMzA4LjI2NiAzNzMuNjU2TDIwOCAyMjguODI4VjM2MEMyMDggMzczLjI1IDE5Ny4yNSAzODQgMTg0IDM4NFMxNjAgMzczLjI1IDE2MCAzNjBWMTUyQzE2MCAxNDEuNSAxNjYuODI4IDEzMi4yMTkgMTc2Ljg0NCAxMjkuMDk0QzE4Ni44NTkgMTI2LjAzMSAxOTcuNzgxIDEyOS43MDMgMjAzLjczNCAxMzguMzQ0TDMwNCAyODMuMTcyVjE1MkMzMDQgMTM4Ljc1IDMxNC43NSAxMjggMzI4IDEyOFMzNTIgMTM4Ljc1IDM1MiAxNTJWMzYwWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zMjggMTI4QzMxNC43NSAxMjggMzA0IDEzOC43NSAzMDQgMTUyVjI4My4xNzJMMjAzLjczNCAxMzguMzQ0QzE5Ny43ODEgMTI5LjcwMyAxODYuODU5IDEyNi4wMzEgMTc2Ljg0NCAxMjkuMDk0QzE2Ni44MjggMTMyLjIxOSAxNjAgMTQxLjUgMTYwIDE1MlYzNjBDMTYwIDM3My4yNSAxNzAuNzUgMzg0IDE4NCAzODRTMjA4IDM3My4yNSAyMDggMzYwVjIyOC44MjhMMzA4LjI2NiAzNzMuNjU2QzMxMi44MjggMzgwLjI2NiAzMjAuMjgxIDM4NCAzMjggMzg0QzMzMC4zOTEgMzg0IDMzMi43OTcgMzgzLjY0MSAzMzUuMTU2IDM4Mi45MDZDMzQ1LjE3MiAzNzkuNzgxIDM1MiAzNzAuNSAzNTIgMzYwVjE1MkMzNTIgMTM4Ljc1IDM0MS4yNSAxMjggMzI4IDEyOFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function CircleN(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM352 360C352 370.5 345.172 379.781 335.156 382.906C332.797 383.641 330.391 384 328 384C320.281 384 312.828 380.266 308.266 373.656L208 228.828V360C208 373.25 197.25 384 184 384S160 373.25 160 360V152C160 141.5 166.828 132.219 176.844 129.094C186.859 126.031 197.781 129.703 203.734 138.344L304 283.172V152C304 138.75 314.75 128 328 128S352 138.75 352 152V360Z" />
            <path d="M328 128C314.75 128 304 138.75 304 152V283.172L203.734 138.344C197.781 129.703 186.859 126.031 176.844 129.094C166.828 132.219 160 141.5 160 152V360C160 373.25 170.75 384 184 384S208 373.25 208 360V228.828L308.266 373.656C312.828 380.266 320.281 384 328 384C330.391 384 332.797 383.641 335.156 382.906C345.172 379.781 352 370.5 352 360V152C352 138.75 341.25 128 328 128Z" />
        </Icon>
    </>
}