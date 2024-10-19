
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `minimize` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/minimize?s=light minimize}
 * @preview ![minimize](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMDQuMjM1IDUwLjQ2OUMxOTIuMjM1IDQ1LjUgMTc4LjU0NyA0OC4yMTkgMTY5LjM3NSA1Ny40MDZMMTI0LjcwMiAxMDIuMDc4TDQzLjMxMSAyMC42ODhDMzcuMDYzIDE0LjQzOCAyNi45MzQgMTQuNDM4IDIwLjY4NiAyMC42ODhDMTQuNDM4IDI2LjkzNCAxNC40MzggMzcuMDYzIDIwLjY4NiA0My4zMTJMMTAyLjA3MyAxMjQuNjk1TDU3LjM5MSAxNjkuMzc1QzUxLjI2NiAxNzUuNTMxIDQ4LjAxNiAxODMuNjU2IDQ4LjAxNiAxOTEuOTY5QzQ4LjAxNiAxOTYuMDk0IDQ4LjgyOSAyMDAuMjgxIDUwLjQ2OSAyMDQuMjVDNTUuNDU0IDIxNi4yNSA2Ny4wNDcgMjI0IDgwLjAzMiAyMjRIMTkyQzIwOS42NzQgMjI0IDIyNCAyMDkuNjcyIDIyNCAxOTJWODAuMDMxQzIyNCA2Ny4wMzEgMjE2LjIzNSA1NS40MzggMjA0LjIzNSA1MC40NjlaTTE5MiAxOTJIODAuMDMyTDE5MS45ODUgNzkuODc1QzE5MS45ODUgNzkuODc1IDE5MiA3OS45MzggMTkyIDgwLjAzMVYxOTJaTTMyMCAyMjRINDMxLjk2OUM0NDQuOTY5IDIyNCA0NTYuNTYzIDIxNi4yMzQgNDYxLjUzMiAyMDQuMjM0UzQ2My43ODIgMTc4LjU0NyA0NTQuNTk0IDE2OS4zNzVMNDA5LjkyMiAxMjQuNzAzTDQ5MS4zMTUgNDMuMzEyQzQ5Ny41NjMgMzcuMDYyIDQ5Ny41NjMgMjYuOTM0IDQ5MS4zMTUgMjAuNjg4QzQ4NS4wNjcgMTQuNDM4IDQ3NC45MzggMTQuNDM4IDQ2OC42OSAyMC42ODhMMzg3LjMwNSAxMDIuMDdMMzQyLjYyNSA1Ny4zOTFDMzM2LjQ2OSA1MS4yNjYgMzI4LjM0NCA0OC4wMTYgMzIwLjAzMiA0OC4wMTZDMzE1LjkwNyA0OC4wMTYgMzExLjcxOSA0OC44MjggMzA3Ljc1IDUwLjQ2OUMyOTUuNzUgNTUuNDUzIDI4OCA2Ny4wNDcgMjg4IDgwLjAzMVYxOTJDMjg4IDIwOS42NzIgMzAyLjMyNyAyMjQgMzIwIDIyNFpNMzIwIDgwLjAzMUw0MzIuMTI1IDE5MS45ODRDNDMyLjEyNSAxOTEuOTg0IDQzMi4wNjMgMTkyIDQzMS45NjkgMTkySDMyMFY4MC4wMzFaTTQwOS45MjggMzg3LjMwNUw0NTQuNjEgMzQyLjYyNUM0NjAuNzM1IDMzNi40NjkgNDYzLjk4NSAzMjguMzQ0IDQ2My45ODUgMzIwLjAzMUM0NjMuOTg1IDMxNS45MDYgNDYzLjE3MiAzMTEuNzE5IDQ2MS41MzIgMzA3Ljc1QzQ1Ni41NDcgMjk1Ljc1IDQ0NC45NTQgMjg4IDQzMS45NjkgMjg4SDMyMEMzMDIuMzI3IDI4OCAyODggMzAyLjMyOCAyODggMzIwVjQzMS45NjlDMjg4IDQ0NC45NjkgMjk1Ljc2NiA0NTYuNTYyIDMwNy43NjYgNDYxLjUzMVMzMzMuNDU0IDQ2My43ODEgMzQyLjYyNSA0NTQuNTk0TDM4Ny4yOTkgNDA5LjkyMkw0NjguNjkgNDkxLjMxMkM0NzQuOTM4IDQ5Ny41NjIgNDg1LjA2NyA0OTcuNTYyIDQ5MS4zMTUgNDkxLjMxMkM0OTcuNTYzIDQ4NS4wNjYgNDk3LjU2MyA0NzQuOTM3IDQ5MS4zMTUgNDY4LjY4N0w0MDkuOTI4IDM4Ny4zMDVaTTMyMC4wMTYgNDMyLjEyNUMzMjAuMDE2IDQzMi4xMjUgMzIwIDQzMi4wNjIgMzIwIDQzMS45NjlWMzIwSDQzMS45NjlMMzIwLjAxNiA0MzIuMTI1Wk0xOTIgMjg4SDgwLjAzMkM2Ny4wMzIgMjg4IDU1LjQzOCAyOTUuNzY2IDUwLjQ2OSAzMDcuNzY2UzQ4LjIxOSAzMzMuNDUzIDU3LjQwNyAzNDIuNjI1TDEwMi4wNzkgMzg3LjI5N0wyMC42ODYgNDY4LjY4OEMxNC40MzggNDc0LjkzOCAxNC40MzggNDg1LjA2NiAyMC42ODYgNDkxLjMxMkMyNi45MzQgNDk3LjU2MiAzNy4wNjMgNDk3LjU2MiA0My4zMTEgNDkxLjMxMkwxMjQuNjk2IDQwOS45M0wxNjkuMzc1IDQ1NC42MDlDMTc1LjUzMiA0NjAuNzM0IDE4My42NTcgNDYzLjk4NCAxOTEuOTY5IDQ2My45ODRDMTk2LjA5NCA0NjMuOTg0IDIwMC4yODIgNDYzLjE3MiAyMDQuMjUgNDYxLjUzMUMyMTYuMjUgNDU2LjU0NyAyMjQgNDQ0Ljk1MyAyMjQgNDMxLjk2OVYzMjBDMjI0IDMwMi4zMjggMjA5LjY3NCAyODggMTkyIDI4OFpNMTkyIDQzMS45NjlMNzkuODc1IDMyMC4wMTZDNzkuODc1IDMyMC4wMTYgNzkuOTM4IDMyMCA4MC4wMzIgMzIwSDE5MlY0MzEuOTY5WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Minimize(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M204.235 50.469C192.235 45.5 178.547 48.219 169.375 57.406L124.702 102.078L43.311 20.688C37.063 14.438 26.934 14.438 20.686 20.688C14.438 26.934 14.438 37.063 20.686 43.312L102.073 124.695L57.391 169.375C51.266 175.531 48.016 183.656 48.016 191.969C48.016 196.094 48.829 200.281 50.469 204.25C55.454 216.25 67.047 224 80.032 224H192C209.674 224 224 209.672 224 192V80.031C224 67.031 216.235 55.438 204.235 50.469ZM192 192H80.032L191.985 79.875C191.985 79.875 192 79.938 192 80.031V192ZM320 224H431.969C444.969 224 456.563 216.234 461.532 204.234S463.782 178.547 454.594 169.375L409.922 124.703L491.315 43.312C497.563 37.062 497.563 26.934 491.315 20.688C485.067 14.438 474.938 14.438 468.69 20.688L387.305 102.07L342.625 57.391C336.469 51.266 328.344 48.016 320.032 48.016C315.907 48.016 311.719 48.828 307.75 50.469C295.75 55.453 288 67.047 288 80.031V192C288 209.672 302.327 224 320 224ZM320 80.031L432.125 191.984C432.125 191.984 432.063 192 431.969 192H320V80.031ZM409.928 387.305L454.61 342.625C460.735 336.469 463.985 328.344 463.985 320.031C463.985 315.906 463.172 311.719 461.532 307.75C456.547 295.75 444.954 288 431.969 288H320C302.327 288 288 302.328 288 320V431.969C288 444.969 295.766 456.562 307.766 461.531S333.454 463.781 342.625 454.594L387.299 409.922L468.69 491.312C474.938 497.562 485.067 497.562 491.315 491.312C497.563 485.066 497.563 474.937 491.315 468.687L409.928 387.305ZM320.016 432.125C320.016 432.125 320 432.062 320 431.969V320H431.969L320.016 432.125ZM192 288H80.032C67.032 288 55.438 295.766 50.469 307.766S48.219 333.453 57.407 342.625L102.079 387.297L20.686 468.688C14.438 474.938 14.438 485.066 20.686 491.312C26.934 497.562 37.063 497.562 43.311 491.312L124.696 409.93L169.375 454.609C175.532 460.734 183.657 463.984 191.969 463.984C196.094 463.984 200.282 463.172 204.25 461.531C216.25 456.547 224 444.953 224 431.969V320C224 302.328 209.674 288 192 288ZM192 431.969L79.875 320.016C79.875 320.016 79.938 320 80.032 320H192V431.969Z" />
        </Icon>
    </>
}