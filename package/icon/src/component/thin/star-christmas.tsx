
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `star-christmas` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/star-christmas?s=thin star-christmas}
 * @preview ![star-christmas](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTMuNTYyIDIzMi4zNzVMMzIyLjQwNiAxODkuNTk0TDI3OS42MjUgMTguNDM4QzI3Ni44NDQgNy40MDYgMjY3LjM0NCAwIDI1NiAwUzIzNS4xNTYgNy40MDYgMjMyLjM3NSAxOC40NjlMMTg5LjU5NCAxODkuNTk0TDE4LjQzOCAyMzIuMzc1QzcuNDA2IDIzNS4xNTYgMCAyNDQuNjU2IDAgMjU2UzcuNDA2IDI3Ni44NDQgMTguNDY5IDI3OS42MjVMMTg5LjU5NCAzMjIuNDA2TDIzMi4yNSA0OTMuNTYyQzIzNS4wMzEgNTA0LjU5NCAyNDQuNTMxIDUxMiAyNTUuODc1IDUxMlMyNzYuNzE5IDUwNC41OTQgMjc5LjUgNDkzLjUzMUwzMjIuMjgxIDMyMi40MDZMNDkzLjU2MyAyNzkuNjI1QzUwNC41OTQgMjc2Ljg0NCA1MTIgMjY3LjM0NCA1MTIgMjU2UzUwNC41OTQgMjM1LjE1NiA0OTMuNTYyIDIzMi4zNzVaTTQ4OS42ODYgMjY0LjEwMkwzMTguNDA0IDMwNi44ODNMMzA5LjA4OCAzMDkuMjExTDMwNi43NiAzMTguNTI1TDI2My45ODQgNDg5LjYyOUMyNjIuOTk2IDQ5My41NTkgMjU5Ljg4OSA0OTYgMjU1Ljg3NSA0OTZDMjUxLjg1OSA0OTYgMjQ4Ljc1MiA0OTMuNTY2IDI0Ny43NzUgNDg5LjY5M0wyMDUuMTE5IDMxOC41MzdMMjAyLjc5NSAzMDkuMjE1TDE5My40NzUgMzA2Ljg4NUwyMi4zNzEgMjY0LjEwN0MxOC40NDEgMjYzLjExOSAxNiAyNjAuMDE0IDE2IDI1NkMxNiAyNTEuOTg0IDE4LjQzNCAyNDguODc3IDIyLjMxOCAyNDcuODk4TDE5My40NzUgMjA1LjExNUwyMDIuNzg3IDIwMi43ODdMMjA1LjExNyAxOTMuNDc1TDI0Ny44OTMgMjIuMzY5QzI0OC44ODEgMTguNDQxIDI1MS45ODYgMTYgMjU2IDE2QzI2MC4wMTYgMTYgMjYzLjEyMyAxOC40MzIgMjY0LjEwNCAyMi4zMTZMMzA2Ljg4NSAxOTMuNDczTDMwOS4yMTMgMjAyLjc4N0wzMTguNTI3IDIwNS4xMTVMNDg5LjY1MiAyNDcuODg5QzQ5My41NjggMjQ4Ljg3NyA0OTYgMjUxLjk4NCA0OTYgMjU2UzQ5My41NjggMjYzLjEyMyA0ODkuNjg2IDI2NC4xMDJaTTE0Ni4zNDQgMTU3LjY1NkMxNDcuOTA2IDE1OS4yMTkgMTQ5LjkzOCAxNjAgMTUyIDE2MFMxNTYuMDk0IDE1OS4yMTkgMTU3LjY1NiAxNTcuNjU2QzE2MC43ODEgMTU0LjUzMSAxNjAuNzgxIDE0OS40NjkgMTU3LjY1NiAxNDYuMzQ0TDc3LjY1NiA2Ni4zNDRDNzQuNTMxIDYzLjIxOSA2OS40NjkgNjMuMjE5IDY2LjM0NCA2Ni4zNDRTNjMuMjE5IDc0LjUzMSA2Ni4zNDQgNzcuNjU2TDE0Ni4zNDQgMTU3LjY1NlpNMzYwIDE2MEMzNjIuMDYyIDE2MCAzNjQuMDk0IDE1OS4yMTkgMzY1LjY1NiAxNTcuNjU2TDQ0NS42NTYgNzcuNjU2QzQ0OC43ODEgNzQuNTMxIDQ0OC43ODEgNjkuNDY5IDQ0NS42NTYgNjYuMzQ0UzQzNy40NjkgNjMuMjE5IDQzNC4zNDQgNjYuMzQ0TDM1NC4zNDQgMTQ2LjM0NEMzNTEuMjE5IDE0OS40NjkgMzUxLjIxOSAxNTQuNTMxIDM1NC4zNDQgMTU3LjY1NkMzNTUuOTA2IDE1OS4yMTkgMzU3LjkzOCAxNjAgMzYwIDE2MFpNMzY1LjY1NiAzNTQuMzQ0QzM2Mi41MzEgMzUxLjIxOSAzNTcuNDY5IDM1MS4yMTkgMzU0LjM0NCAzNTQuMzQ0UzM1MS4yMTkgMzYyLjUzMSAzNTQuMzQ0IDM2NS42NTZMNDM0LjM0NCA0NDUuNjU2QzQzNS45MDYgNDQ3LjIxOSA0MzcuOTM4IDQ0OCA0NDAgNDQ4UzQ0NC4wOTQgNDQ3LjIxOSA0NDUuNjU2IDQ0NS42NTZDNDQ4Ljc4MSA0NDIuNTMxIDQ0OC43ODEgNDM3LjQ2OSA0NDUuNjU2IDQzNC4zNDRMMzY1LjY1NiAzNTQuMzQ0Wk0xNDYuMzQ0IDM1NC4zNDRMNjYuMzQ0IDQzNC4zNDRDNjMuMjE5IDQzNy40NjkgNjMuMjE5IDQ0Mi41MzEgNjYuMzQ0IDQ0NS42NTZDNjcuOTA2IDQ0Ny4yMTkgNjkuOTM4IDQ0OCA3MiA0NDhTNzYuMDk0IDQ0Ny4yMTkgNzcuNjU2IDQ0NS42NTZMMTU3LjY1NiAzNjUuNjU2QzE2MC43ODEgMzYyLjUzMSAxNjAuNzgxIDM1Ny40NjkgMTU3LjY1NiAzNTQuMzQ0UzE0OS40NjkgMzUxLjIxOSAxNDYuMzQ0IDM1NC4zNDRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function StarChristmas(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M493.562 232.375L322.406 189.594L279.625 18.438C276.844 7.406 267.344 0 256 0S235.156 7.406 232.375 18.469L189.594 189.594L18.438 232.375C7.406 235.156 0 244.656 0 256S7.406 276.844 18.469 279.625L189.594 322.406L232.25 493.562C235.031 504.594 244.531 512 255.875 512S276.719 504.594 279.5 493.531L322.281 322.406L493.563 279.625C504.594 276.844 512 267.344 512 256S504.594 235.156 493.562 232.375ZM489.686 264.102L318.404 306.883L309.088 309.211L306.76 318.525L263.984 489.629C262.996 493.559 259.889 496 255.875 496C251.859 496 248.752 493.566 247.775 489.693L205.119 318.537L202.795 309.215L193.475 306.885L22.371 264.107C18.441 263.119 16 260.014 16 256C16 251.984 18.434 248.877 22.318 247.898L193.475 205.115L202.787 202.787L205.117 193.475L247.893 22.369C248.881 18.441 251.986 16 256 16C260.016 16 263.123 18.432 264.104 22.316L306.885 193.473L309.213 202.787L318.527 205.115L489.652 247.889C493.568 248.877 496 251.984 496 256S493.568 263.123 489.686 264.102ZM146.344 157.656C147.906 159.219 149.938 160 152 160S156.094 159.219 157.656 157.656C160.781 154.531 160.781 149.469 157.656 146.344L77.656 66.344C74.531 63.219 69.469 63.219 66.344 66.344S63.219 74.531 66.344 77.656L146.344 157.656ZM360 160C362.062 160 364.094 159.219 365.656 157.656L445.656 77.656C448.781 74.531 448.781 69.469 445.656 66.344S437.469 63.219 434.344 66.344L354.344 146.344C351.219 149.469 351.219 154.531 354.344 157.656C355.906 159.219 357.938 160 360 160ZM365.656 354.344C362.531 351.219 357.469 351.219 354.344 354.344S351.219 362.531 354.344 365.656L434.344 445.656C435.906 447.219 437.938 448 440 448S444.094 447.219 445.656 445.656C448.781 442.531 448.781 437.469 445.656 434.344L365.656 354.344ZM146.344 354.344L66.344 434.344C63.219 437.469 63.219 442.531 66.344 445.656C67.906 447.219 69.938 448 72 448S76.094 447.219 77.656 445.656L157.656 365.656C160.781 362.531 160.781 357.469 157.656 354.344S149.469 351.219 146.344 354.344Z" />
        </Icon>
    </>
}