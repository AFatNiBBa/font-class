
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-up` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-up?s=regular circle-up}
 * @preview ![circle-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNzIuODY5IDEzNS43MTlDMjY4LjMzOCAxMzAuNzgxIDI2MS45MzIgMTI4IDI1NS4yNDQgMTI4QzI0Ny40NjMgMTI4LjMxMiAyNDEuOTk0IDEzMC44NzUgMjM3LjQ5NCAxMzUuODQ0TDE1MC4yNDQgMjMxLjg0NEMxNDMuODM4IDIzOC44NzUgMTQyLjIxMyAyNDkuMDMxIDE0Ni4wNTkgMjU3LjcxOUMxNDkuOTAyIDI2Ni40MDYgMTU4LjQ5NiAyNzIgMTY3Ljk5NiAyNzJIMjIzLjk5NkwyMjQuMDAyIDM2MEMyMjQuMDAyIDM3My4yNSAyMzQuNzUyIDM4NCAyNDguMDAyIDM4NEgyNjQuMDAyQzI3Ny4yNTIgMzg0IDI4OC4wMDIgMzczLjI1IDI4OC4wMDIgMzYwTDI4Ny45OTYgMjcySDM0My45OTZDMzUzLjUyNyAyNzIgMzYyLjE1MiAyNjYuMzQ0IDM2NS45OTYgMjU3LjYyNUMzNjkuODA3IDI0OC44NzUgMzY4LjA4OCAyMzguNzE5IDM2MS42MTkgMjMxLjcxOUwyNzIuODY5IDEzNS43MTlaTTI1NiAxNkMxMjMuNDUxIDE2IDE2IDEyMy40NTMgMTYgMjU2UzEyMy40NTEgNDk2IDI1NiA0OTZTNDk2IDM4OC41NDcgNDk2IDI1NlMzODguNTQ5IDE2IDI1NiAxNlpNMjU2IDQ0OEMxNTAuMTMxIDQ0OCA2NCAzNjEuODY3IDY0IDI1NlMxNTAuMTMxIDY0IDI1NiA2NFM0NDggMTUwLjEzMyA0NDggMjU2UzM2MS44NjkgNDQ4IDI1NiA0NDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M272.869 135.719C268.338 130.781 261.932 128 255.244 128C247.463 128.312 241.994 130.875 237.494 135.844L150.244 231.844C143.838 238.875 142.213 249.031 146.059 257.719C149.902 266.406 158.496 272 167.996 272H223.996L224.002 360C224.002 373.25 234.752 384 248.002 384H264.002C277.252 384 288.002 373.25 288.002 360L287.996 272H343.996C353.527 272 362.152 266.344 365.996 257.625C369.807 248.875 368.088 238.719 361.619 231.719L272.869 135.719ZM256 16C123.451 16 16 123.453 16 256S123.451 496 256 496S496 388.547 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.867 64 256S150.131 64 256 64S448 150.133 448 256S361.869 448 256 448Z" />
        </Icon>
    </>
}