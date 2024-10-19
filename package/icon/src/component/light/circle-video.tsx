
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-video` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-video?s=light circle-video}
 * @preview ![circle-video](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0NjRDMTQxLjMwOSA0NjQgNDggMzcwLjY5MSA0OCAyNTZTMTQxLjMwOSA0OCAyNTYgNDhTNDY0IDE0MS4zMDkgNDY0IDI1NlMzNzAuNjkxIDQ2NCAyNTYgNDY0Wk00MDkuMTcyIDE3OC44OTFDNDA0LjkwNiAxNzUuOTA2IDM5OS40NTMgMTc1LjE4NyAzOTQuNTMxIDE3Ni45NjlMMzIwIDIwNC4wN1YxOTJDMzIwIDE3NC4zMjYgMzA1LjY3NCAxNjAgMjg4IDE2MEgxNjBDMTQyLjMyNiAxNjAgMTI4IDE3NC4zMjYgMTI4IDE5MlYzMjBDMTI4IDMzNy42NzIgMTQyLjMyNiAzNTIgMTYwIDM1MkgyODhDMzA1LjY3NCAzNTIgMzIwIDMzNy42NzIgMzIwIDMyMFYzMDcuOTNMMzk0LjUzMSAzMzUuMDMxQzM5Ni4zMTIgMzM1LjY4OCAzOTguMTU2IDMzNiA0MDAgMzM2QzQwMy4yMzQgMzM2IDQwNi40NTMgMzM1LjAxNiA0MDkuMTcyIDMzMy4xMDlDNDEzLjQ1MyAzMzAuMTA5IDQxNiAzMjUuMjE5IDQxNiAzMjBWMTkyQzQxNiAxODYuNzgxIDQxMy40NTMgMTgxLjg5MSA0MDkuMTcyIDE3OC44OTFaTTI4OCAzMjBIMTYwVjE5MkgyODhWMzIwWk0zODQgMjk3LjE1NkwzMjAgMjczLjg4OVYyMzguMTExTDM4NCAyMTQuODQ0VjI5Ny4xNTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleVideo(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM409.172 178.891C404.906 175.906 399.453 175.187 394.531 176.969L320 204.07V192C320 174.326 305.674 160 288 160H160C142.326 160 128 174.326 128 192V320C128 337.672 142.326 352 160 352H288C305.674 352 320 337.672 320 320V307.93L394.531 335.031C396.312 335.688 398.156 336 400 336C403.234 336 406.453 335.016 409.172 333.109C413.453 330.109 416 325.219 416 320V192C416 186.781 413.453 181.891 409.172 178.891ZM288 320H160V192H288V320ZM384 297.156L320 273.889V238.111L384 214.844V297.156Z" />
        </Icon>
    </>
}