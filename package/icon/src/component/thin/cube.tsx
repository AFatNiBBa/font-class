
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `cube` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cube?s=thin cube}
 * @preview ![cube](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODYuMDQ3IDg2LjEwOUwyNzAuMDQ3IDUuMTA5QzI2MC45ODQgMS43MDMgMjUxLjAxNiAxLjcwMyAyNDEuOTUzIDUuMTA5TDI1Ljk2OSA4Ni4wOTRDMTAuNDM4IDkxLjkwNiAwIDEwNi45NTMgMCAxMjMuNTQ3VjM5My41N0MwIDQxMC4xNjQgMTAuNDM4IDQyNS4yMTEgMjUuOTUzIDQzMS4wMDhMMjQxLjk1MyA1MTIuMDA4QzI0Ni40ODQgNTEzLjcxMSAyNTEuMjUgNTE0LjU1NSAyNTYgNTE0LjU1NVMyNjUuNTE2IDUxMy43MTEgMjcwLjA0NyA1MTIuMDA4TDQ4Ni4wMzEgNDMxLjAyM0M1MDEuNTYzIDQyNS4yMTEgNTEyIDQxMC4xNjQgNTEyIDM5My41N1YxMjMuNTQ3QzUxMiAxMDYuOTUzIDUwMS41NjMgOTEuOTA2IDQ4Ni4wNDcgODYuMTA5Wk0zMS41NzggMTAxLjA3OEwyNDcuNTc4IDIwLjA3OEMyNTAuMjk3IDE5LjA2MiAyNTMuMTQxIDE4LjU2MiAyNTYgMTguNTYyUzI2MS43MDMgMTkuMDYyIDI2NC40MjIgMjAuMDc4TDQ4MC40MzggMTAxLjA5NEM0ODMuNjY0IDEwMi4zMDEgNDg2LjMzNiAxMDQuMzQ0IDQ4OC42OTUgMTA2LjY4OEwyNTYgMTk5Ljc2NkwyMy4zMDcgMTA2LjY4OEMyNS42NjggMTA0LjM0IDI4LjM0NCAxMDIuMjkxIDMxLjU3OCAxMDEuMDc4Wk0zMS41NjMgNDE2LjAyM0MyMi4yNSA0MTIuNTM5IDE2IDQwMy41MjMgMTYgMzkzLjU3VjEyMy41NDdDMTYgMTIyLjcxNSAxNi4yODkgMTIxLjk1MSAxNi4zNzUgMTIxLjEzNUwyNDggMjEzLjc4NVY0OTcuMTE1QzI0Ny44NjMgNDk3LjA2NiAyNDcuNzE1IDQ5Ny4wOSAyNDcuNTc4IDQ5Ny4wMzlMMzEuNTYzIDQxNi4wMjNaTTQ5NiAzOTMuNTdDNDk2IDQwMy41MjMgNDg5Ljc1IDQxMi41MzkgNDgwLjQyMiA0MTYuMDM5TDI2NC40MjIgNDk3LjAzOUMyNjQuMjg1IDQ5Ny4wOSAyNjQuMTM3IDQ5Ny4wNjYgMjY0IDQ5Ny4xMTVWMjEzLjc4NUw0OTUuNjI1IDEyMS4xMzVDNDk1LjcxMSAxMjEuOTUxIDQ5NiAxMjIuNzE1IDQ5NiAxMjMuNTQ3VjM5My41N1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Cube(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M486.047 86.109L270.047 5.109C260.984 1.703 251.016 1.703 241.953 5.109L25.969 86.094C10.438 91.906 0 106.953 0 123.547V393.57C0 410.164 10.438 425.211 25.953 431.008L241.953 512.008C246.484 513.711 251.25 514.555 256 514.555S265.516 513.711 270.047 512.008L486.031 431.023C501.563 425.211 512 410.164 512 393.57V123.547C512 106.953 501.563 91.906 486.047 86.109ZM31.578 101.078L247.578 20.078C250.297 19.062 253.141 18.562 256 18.562S261.703 19.062 264.422 20.078L480.438 101.094C483.664 102.301 486.336 104.344 488.695 106.688L256 199.766L23.307 106.688C25.668 104.34 28.344 102.291 31.578 101.078ZM31.563 416.023C22.25 412.539 16 403.523 16 393.57V123.547C16 122.715 16.289 121.951 16.375 121.135L248 213.785V497.115C247.863 497.066 247.715 497.09 247.578 497.039L31.563 416.023ZM496 393.57C496 403.523 489.75 412.539 480.422 416.039L264.422 497.039C264.285 497.09 264.137 497.066 264 497.115V213.785L495.625 121.135C495.711 121.951 496 122.715 496 123.547V393.57Z" />
        </Icon>
    </>
}