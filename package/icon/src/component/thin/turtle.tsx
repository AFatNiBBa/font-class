
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `turtle` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/turtle?s=thin turtle}
 * @preview ![turtle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02OS44NTkgMjMxLjcxOUM3NC4xNTYgMjMyLjkwNiA3OC41MzEgMjMwLjQwNiA3OS43MDMgMjI2LjE1NkM5OS4yODEgMTU1Ljg3NSAxNjYgODAgMjQwLjM1OSA4MEMzMTQgODAgMzgwLjcxOSAxNTUuODc1IDQwMC4yOTcgMjI2LjE1NkM0MDEuMjgxIDIyOS42ODggNDA0LjUgMjMyIDQwOCAyMzJDNDA4LjcwMyAyMzIgNDA5LjQyMiAyMzEuOTA2IDQxMC4xNDEgMjMxLjcxOUM0MTQuNDA2IDIzMC41MzEgNDE2Ljg5MSAyMjYuMTI1IDQxNS43MDMgMjIxLjg0NEMzOTQuNTYyIDE0NS45MzggMzIxLjUxNiA2NCAyMzkuNjQxIDY0QzE1OC40ODQgNjQgODUuNDM4IDE0NS45MzggNjQuMjk3IDIyMS44NDRDNjMuMTA5IDIyNi4xMjUgNjUuNTk0IDIzMC41MzEgNjkuODU5IDIzMS43MTlaTTU4MS41MTYgMTI5LjI1TDUzMy4xNDEgOTUuMjgxQzUxMy40MDYgODUuNjU2IDQ5MC41NjIgODUuNTk0IDQ3Mi4wNjIgOTUuMTU2QzQ1NS4zNTkgMTAzLjc4MSA0NDQuMDE2IDExOS40NjkgNDQwLjk4NCAxMzguMDMxQzQ0MC4yOTcgMTQxLjcxOSA0NDAgMTQ1LjQzOCA0NDAgMTQ5LjI4MVYyMTcuNTYzQzQ0MCAyMTcuNzgxIDQ0MC4wMTYgMjE4IDQ0MC4wMzEgMjE4LjI1QzQ0MC4wMTYgMjE4LjQ2OSA0NDAgMjE4LjY4OCA0NDAgMjE4LjkwNkM0NDAgMjMwLjUgNDM2LjA3OCAyNDcuODQ0IDQyOC44NDQgMjU3LjE4OEM0MTguMjAzIDI3MC42ODggNDAyLjE1NiAyNzguNDM4IDM4NC43ODEgMjc4LjQzOEw1OC4xMDkgMjgwQzQzLjIxOSAyODAgMzIgMjkwLjUzMSAzMiAzMDQuNUMzMiAzMTUuNjg4IDM5LjIwMyAzMjUuNTMxIDUwLjY1NiAzMjkuMjE5TDEzNC43NjYgMzQ3Ljg3NUw5MS4xNzIgNDEyLjk2OUM4Ni45MzggNDIwLjE4NyA4Ni45MjIgNDI4Ljg3NSA5MS4xMDkgNDM2LjE1NkM5NS4zNTkgNDQzLjU2MiAxMDMuMDE2IDQ0OCAxMTEuNTc4IDQ0OEgxNDQuNDA2QzE1OC41NjIgNDQ4IDE3MS43ODEgNDQwLjQwNiAxNzguOTIyIDQyOC4xODhMMjEwLjA0NyAzNzUuMDYzQzIzMi43MTkgMzgyLjEyNSAyNTIuMjgxIDM4Ni42NTYgMjg4Ljg5MSAzODYuNjU2QzMyNS42NzIgMzg2LjY1NiAzNDUuMjUgMzgyLjA5NCAzNjguMDYyIDM3NC45NjlMNDAzLjI4MSA0MjguMTg4QzQxMC40MjIgNDQwLjQwNiA0MjMuNjQxIDQ0OCA0MzcuNzk3IDQ0OEg0NjQuNDIyQzQ3Mi45ODQgNDQ4IDQ4MC42NDEgNDQzLjU2MiA0ODQuODkxIDQzNi4xNTZDNDg5LjA3OCA0MjguODc1IDQ4OS4wNjIgNDIwLjE4OCA0ODQuNjU2IDQxMi42ODhMNDM5LjQwNiAzNDIuMzEyQzQ1OC42MjUgMzMzLjM0NCA0NzQuNjcyIDMyMC43NSA0ODcuMjM0IDMwNC43NUM1MDAuNTk0IDI4Ny40NjkgNTA4LjcxOSAyNjEuMTU2IDUxMi4zMjggMjQwSDU0NC45NTNDNTgwLjMxMiAyNDAgNjA4IDIxMy42MjUgNjA4IDE3OS45NjlDNjA4IDE1OS44NDQgNTk4LjA5NCAxNDAuODc1IDU4MS41MTYgMTI5LjI1Wk01NDQuOTUzIDIyNEg1MDUuNDUzQzUwMS40MzggMjI0IDQ5OC4wNDcgMjI2Ljk2OSA0OTcuNTE2IDIzMC45NjlDNDk1LjAxNiAyNTAuMDMxIDQ4Ny41MTYgMjc4LjIxOSA0NzQuNjA5IDI5NC45MDZDNDYxLjk2OSAzMTEuMDMxIDQ0NS4xNzIgMzIzLjIxOSA0MjQuNjU2IDMzMS4xODhDNDIyLjQwNiAzMzIuMDYzIDQyMC42ODggMzMzLjkwNiA0MTkuOTM4IDMzNi4xODhDNDE5LjIwMyAzMzguNDY5IDQxOS41MTYgMzQwLjk2OSA0MjAuODEzIDM0Mi45NjlMNDcxLjAxNiA0MjEuMDMxQzQ3Mi44OTEgNDI0LjI1IDQ3MS42NDEgNDI3LjEyNSA0NzEuMDE2IDQyOC4xODhDNDY5LjY1NiA0MzAuNTk0IDQ2Ny4xODggNDMyIDQ2NC40MjIgNDMySDQzNy43OTdDNDI5LjMxMyA0MzIgNDIxLjM3NSA0MjcuNDM4IDQxNi44NTkgNDE5Ljc1TDM3OC4wNzggMzYxLjA5NEMzNzYuNTYyIDM1OC44MTIgMzc0LjAzMSAzNTcuNSAzNzEuNDA2IDM1Ny41QzM3MC41OTQgMzU3LjUgMzY5Ljc2NiAzNTcuNjI1IDM2OC45NTMgMzU3Ljg3NUMzNDQuOTUzIDM2NS41OTQgMzI2LjQwNiAzNzAuNjU2IDI4OC44OTEgMzcwLjY1NlMyMzIuODI4IDM2NS41OTQgMjA4LjgyOCAzNTcuODc1QzIwNS4yMzQgMzU2LjgxMyAyMDEuMzc1IDM1OC4yMTkgMTk5LjQ2OSAzNjEuNDY5TDE2NS4xMDkgNDIwLjEyNUMxNjAuODI4IDQyNy40MzggMTUyLjg5MSA0MzIgMTQ0LjQwNiA0MzJIMTExLjU3OEMxMDguODEyIDQzMiAxMDYuMzQ0IDQzMC41OTQgMTA0Ljk4NCA0MjguMTg4QzEwNC4zNTkgNDI3LjEyNSAxMDMuMTA5IDQyNC4yNSAxMDQuNzE5IDQyMS40MzhMMTU0LjU2MiAzNDcuMDMxQzE1Ni4wMzEgMzQ0Ljg0NCAxNTYuMzI4IDM0Mi4wNjMgMTU1LjM0NCAzMzkuNjI1QzE1NC4zNTkgMzM3LjE1NiAxNTIuMjM0IDMzNS4zNDQgMTQ5LjY1NiAzMzQuNzgxTDU0Ljg1OSAzMTMuODEyQzUwLjc1IDMxMi40NjkgNDggMzA4LjcxOSA0OCAzMDQuNUM0OCAyOTguNjU2IDUzLjIzNCAyOTYgNTguMTQxIDI5NkwzODQuODEyIDI5NC40MzhDNDA3LjA5NCAyOTQuNDM4IDQyNy43MTkgMjg0LjQ2OSA0NDEuNDM3IDI2Ny4wMzFDNDUxLjQzOCAyNTQuMTU2IDQ1NiAyMzMuMDYyIDQ1NiAyMTguOTA2QzQ1NiAyMTguNjg4IDQ1NS45ODQgMjE4LjQ2OSA0NTUuOTY5IDIxOC4yNUM0NTUuOTg0IDIxOCA0NTYgMjE3Ljc4MSA0NTYgMjE3LjU2MlYxNDkuMjgxQzQ1NiAxNDYuNDM4IDQ1Ni4yMDMgMTQzLjY1NiA0NTYuNzM0IDE0MC43NUM0NTkuMDE2IDEyNi45MDYgNDY3LjA2MiAxMTUuNzUgNDc5LjQwNiAxMDkuMzc1QzQ5My40MzggMTAyLjEyNSA1MTAuOTA2IDEwMi4yNSA1MjUuMDMxIDEwOUw1NzIuMzEyIDE0Mi4zNDRDNTg0LjY0MSAxNTAuOTY5IDU5MiAxNjUuMDYyIDU5MiAxNzkuOTY5QzU5MiAyMDUuMDYyIDU3MS43ODEgMjI0IDU0NC45NTMgMjI0Wk01MTIgMTQ0QzUwMy4xNjQgMTQ0IDQ5NiAxNTEuMTYyIDQ5NiAxNjBDNDk2IDE2OC44MzYgNTAzLjE2NCAxNzYgNTEyIDE3NlM1MjggMTY4LjgzNiA1MjggMTYwQzUyOCAxNTEuMTYyIDUyMC44MzYgMTQ0IDUxMiAxNDRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Turtle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M69.859 231.719C74.156 232.906 78.531 230.406 79.703 226.156C99.281 155.875 166 80 240.359 80C314 80 380.719 155.875 400.297 226.156C401.281 229.688 404.5 232 408 232C408.703 232 409.422 231.906 410.141 231.719C414.406 230.531 416.891 226.125 415.703 221.844C394.562 145.938 321.516 64 239.641 64C158.484 64 85.438 145.938 64.297 221.844C63.109 226.125 65.594 230.531 69.859 231.719ZM581.516 129.25L533.141 95.281C513.406 85.656 490.562 85.594 472.062 95.156C455.359 103.781 444.016 119.469 440.984 138.031C440.297 141.719 440 145.438 440 149.281V217.563C440 217.781 440.016 218 440.031 218.25C440.016 218.469 440 218.688 440 218.906C440 230.5 436.078 247.844 428.844 257.188C418.203 270.688 402.156 278.438 384.781 278.438L58.109 280C43.219 280 32 290.531 32 304.5C32 315.688 39.203 325.531 50.656 329.219L134.766 347.875L91.172 412.969C86.938 420.187 86.922 428.875 91.109 436.156C95.359 443.562 103.016 448 111.578 448H144.406C158.562 448 171.781 440.406 178.922 428.188L210.047 375.063C232.719 382.125 252.281 386.656 288.891 386.656C325.672 386.656 345.25 382.094 368.062 374.969L403.281 428.188C410.422 440.406 423.641 448 437.797 448H464.422C472.984 448 480.641 443.562 484.891 436.156C489.078 428.875 489.062 420.188 484.656 412.688L439.406 342.312C458.625 333.344 474.672 320.75 487.234 304.75C500.594 287.469 508.719 261.156 512.328 240H544.953C580.312 240 608 213.625 608 179.969C608 159.844 598.094 140.875 581.516 129.25ZM544.953 224H505.453C501.438 224 498.047 226.969 497.516 230.969C495.016 250.031 487.516 278.219 474.609 294.906C461.969 311.031 445.172 323.219 424.656 331.188C422.406 332.063 420.688 333.906 419.938 336.188C419.203 338.469 419.516 340.969 420.813 342.969L471.016 421.031C472.891 424.25 471.641 427.125 471.016 428.188C469.656 430.594 467.188 432 464.422 432H437.797C429.313 432 421.375 427.438 416.859 419.75L378.078 361.094C376.562 358.812 374.031 357.5 371.406 357.5C370.594 357.5 369.766 357.625 368.953 357.875C344.953 365.594 326.406 370.656 288.891 370.656S232.828 365.594 208.828 357.875C205.234 356.813 201.375 358.219 199.469 361.469L165.109 420.125C160.828 427.438 152.891 432 144.406 432H111.578C108.812 432 106.344 430.594 104.984 428.188C104.359 427.125 103.109 424.25 104.719 421.438L154.562 347.031C156.031 344.844 156.328 342.063 155.344 339.625C154.359 337.156 152.234 335.344 149.656 334.781L54.859 313.812C50.75 312.469 48 308.719 48 304.5C48 298.656 53.234 296 58.141 296L384.812 294.438C407.094 294.438 427.719 284.469 441.437 267.031C451.438 254.156 456 233.062 456 218.906C456 218.688 455.984 218.469 455.969 218.25C455.984 218 456 217.781 456 217.562V149.281C456 146.438 456.203 143.656 456.734 140.75C459.016 126.906 467.062 115.75 479.406 109.375C493.438 102.125 510.906 102.25 525.031 109L572.312 142.344C584.641 150.969 592 165.062 592 179.969C592 205.062 571.781 224 544.953 224ZM512 144C503.164 144 496 151.162 496 160C496 168.836 503.164 176 512 176S528 168.836 528 160C528 151.162 520.836 144 512 144Z" />
        </Icon>
    </>
}