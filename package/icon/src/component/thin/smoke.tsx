
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `smoke` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/smoke?s=thin smoke}
 * @preview ![smoke](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMiAyMDYuMDMxQzMzLjY4OCAyMDYuMDMxIDM1LjM3NSAyMDUuNSAzNi44NDQgMjA0LjQwNkM0MC4zNDQgMjAxLjc1IDQxLjAzMSAxOTYuNzE5IDM4LjM3NSAxOTMuMTg4QzIzLjc1IDE3My45MDYgMTYgMTUxLjAzMSAxNiAxMjcuMDYyQzE2IDY1LjgxMiA2NS44MTIgMTYgMTI3LjA2MiAxNkMxNjYuMjUgMTYgMjAxLjgxMiAzNi4zNzUgMjIyLjE1NiA3MC40NjlDMjIzLjM3NSA3Mi41IDIyNS40MDYgNzMuODc1IDIyNy43MTkgNzQuMjgxUzIzMi40MzcgNzQuMDMxIDIzNC4yMTkgNzIuNDY5QzI1NC44MTIgNTUgMjc5LjUgNDUuNzUgMzA1LjY1NiA0NS43NUMzNDIuODQ0IDQ1Ljc1IDM3Ny40NjkgNjQuMzc1IDM5OC4yODEgOTUuNTYyQzQwMC42ODcgOTkuMjUgNDA1LjY1NiAxMDAuMTg3IDQwOS4zNzUgOTcuNzgxQzQxMy4wNjIgOTUuMzQ0IDQxNC4wMzEgOTAuMzc1IDQxMS41OTQgODYuNjg3QzM4Ny44MTIgNTEuMDMxIDM0OC4yMTkgMjkuNzUgMzA1LjY1NiAyOS43NUMyNzguNjI1IDI5Ljc1IDI1MyAzOC4zMTIgMjMwLjk2OSA1NC42MjVDMjA3LjEyNSAyMC4yNSAxNjguOTM4IDAgMTI3LjA2MiAwQzU3IDAgMCA1NyAwIDEyNy4wNjJDMCAxNTQuNTMxIDguODc1IDE4MC43NSAyNS42MjUgMjAyLjg3NUMyNy4xODggMjA0LjkzOCAyOS41OTQgMjA2LjAzMSAzMiAyMDYuMDMxWk0yNDAuNzE5IDE4Ni42NTZDMjM4Ljg3NSAxOTAuNjU2IDI0MC42NTYgMTk1LjQwNiAyNDQuNjU2IDE5Ny4yODFDMjQ4LjY4OCAxOTkuMDMxIDI1My40MDYgMTk3LjM3NSAyNTUuMjgxIDE5My4zNDRDMjcyLjM3NSAxNTYuMTg3IDMwOS42NTYgMTMyLjE4NyAzNTAuMjUgMTMyLjE4N0MzNzQuOTA2IDEzMi4xODcgMzk4LjIxOSAxNDAuODc1IDQxNy41OTQgMTU3LjM0NEw0MjQuODEyIDE2My40NjlMNDI5LjY1NiAxNTUuMzQ0QzQ0OC44MTIgMTIzLjE4OCA0ODIuMzQ0IDEwNCA1MTkuMzEyIDEwNEM1NzcuMDMxIDEwNCA2MjQgMTUwLjk2OSA2MjQgMjA4LjY4OEM2MjQgMjI3LjkzOCA2MTguNjg4IDI0Ni4zMTIgNjA4LjI1IDI2My4yODFDNjA1LjkzOCAyNjcuMDMxIDYwNy4wOTQgMjcxLjk2OSA2MTAuODc1IDI3NC4yODFDNjEyLjE4NyAyNzUuMDk0IDYxMy42MjUgMjc1LjQ2OSA2MTUuMDYyIDI3NS40NjlDNjE3Ljc1IDI3NS40NjkgNjIwLjM3NSAyNzQuMTI1IDYyMS44NzUgMjcxLjY1NkM2MzMuNzE5IDI1Mi40MDYgNjQwIDIzMC42MjUgNjQwIDIwOC42ODhDNjQwIDE0Mi4xMjUgNTg1Ljg3NSA4OCA1MTkuMzEyIDg4QzQ3OS42NTYgODggNDQzLjQ2OSAxMDcuMDk0IDQyMC44NDQgMTM5LjUzMUM0MDAgMTI0LjIxOSAzNzUuNzgxIDExNi4xODggMzUwLjI1IDExNi4xODhDMzAzLjQzOCAxMTYuMTg4IDI2MC40MzggMTQzLjg0NCAyNDAuNzE5IDE4Ni42NTZaTTUyMi44MTIgMjcyQzUwNy40NjkgMjcyIDQ5Mi4zMTIgMjc1LjI1IDQ3Ny42MjUgMjgxLjY4OEM0NTAuNzgxIDIzNi4wMzEgNDAzIDIwOCAzNTEuMTg4IDIwOEMzMTMuMTU2IDIwOCAyNzcuNDY5IDIyMi42MjUgMjQ5LjgxMiAyNDkuMzQ0QzIyMi4xNTYgMjIyLjYyNSAxODYuNDM4IDIwOCAxNDguNDA2IDIwOEM2Ni41NjIgMjA4IDAgMjc2LjE4OCAwIDM2MFM2Ni41NjIgNTEyIDE0OC40MDYgNTEySDUyMi44MTJDNTg3LjQzOCA1MTIgNjQwIDQ1OC4xNTYgNjQwIDM5MlM1ODcuNDM4IDI3MiA1MjIuODEyIDI3MlpNNTIyLjgxMiA0OTZIMTQ4LjQwNkM3NS40MDYgNDk2IDE2IDQzNSAxNiAzNjBTNzUuNDA2IDIyNCAxNDguNDA2IDIyNEMxODQuNjg4IDIyNCAyMTguNjI1IDIzOSAyNDMuOTY5IDI2Ni4xODhMMjQ5LjgxMiAyNzIuNUwyNTUuNjU2IDI2Ni4xODhDMjgxIDIzOSAzMTQuOTA2IDIyNCAzNTEuMTg4IDIyNEMzOTkuNTMxIDIyNCA0NDQgMjUxLjUzMSA0NjcuMTg4IDI5NS44NDRMNDcwLjg3NSAzMDIuODc1TDQ3Ny45MzggMjk5LjI1QzQ5Mi40NjkgMjkxLjc4MSA1MDcuNTk0IDI4OCA1MjIuODEyIDI4OEM1NzguNTk0IDI4OCA2MjQgMzM0LjY1NiA2MjQgMzkyUzU3OC41OTQgNDk2IDUyMi44MTIgNDk2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Smoke(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M32 206.031C33.688 206.031 35.375 205.5 36.844 204.406C40.344 201.75 41.031 196.719 38.375 193.188C23.75 173.906 16 151.031 16 127.062C16 65.812 65.812 16 127.062 16C166.25 16 201.812 36.375 222.156 70.469C223.375 72.5 225.406 73.875 227.719 74.281S232.437 74.031 234.219 72.469C254.812 55 279.5 45.75 305.656 45.75C342.844 45.75 377.469 64.375 398.281 95.562C400.687 99.25 405.656 100.187 409.375 97.781C413.062 95.344 414.031 90.375 411.594 86.687C387.812 51.031 348.219 29.75 305.656 29.75C278.625 29.75 253 38.312 230.969 54.625C207.125 20.25 168.938 0 127.062 0C57 0 0 57 0 127.062C0 154.531 8.875 180.75 25.625 202.875C27.188 204.938 29.594 206.031 32 206.031ZM240.719 186.656C238.875 190.656 240.656 195.406 244.656 197.281C248.688 199.031 253.406 197.375 255.281 193.344C272.375 156.187 309.656 132.187 350.25 132.187C374.906 132.187 398.219 140.875 417.594 157.344L424.812 163.469L429.656 155.344C448.812 123.188 482.344 104 519.312 104C577.031 104 624 150.969 624 208.688C624 227.938 618.688 246.312 608.25 263.281C605.938 267.031 607.094 271.969 610.875 274.281C612.187 275.094 613.625 275.469 615.062 275.469C617.75 275.469 620.375 274.125 621.875 271.656C633.719 252.406 640 230.625 640 208.688C640 142.125 585.875 88 519.312 88C479.656 88 443.469 107.094 420.844 139.531C400 124.219 375.781 116.188 350.25 116.188C303.438 116.188 260.438 143.844 240.719 186.656ZM522.812 272C507.469 272 492.312 275.25 477.625 281.688C450.781 236.031 403 208 351.188 208C313.156 208 277.469 222.625 249.812 249.344C222.156 222.625 186.438 208 148.406 208C66.562 208 0 276.188 0 360S66.562 512 148.406 512H522.812C587.438 512 640 458.156 640 392S587.438 272 522.812 272ZM522.812 496H148.406C75.406 496 16 435 16 360S75.406 224 148.406 224C184.688 224 218.625 239 243.969 266.188L249.812 272.5L255.656 266.188C281 239 314.906 224 351.188 224C399.531 224 444 251.531 467.188 295.844L470.875 302.875L477.938 299.25C492.469 291.781 507.594 288 522.812 288C578.594 288 624 334.656 624 392S578.594 496 522.812 496Z" />
        </Icon>
    </>
}