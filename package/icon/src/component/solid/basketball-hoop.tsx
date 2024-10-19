
import { Icon } from "../../index";

/**
 * A component that renders the `basketball-hoop` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/basketball-hoop?s=solid basketball-hoop}
 * @preview ![basketball-hoop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMjA4SDE5MlYxNjBINDQ4VjIwOFpNNjQwIDIwOC4xMDRWMzI2LjE0M0M2NDAgMzUxLjU3IDYyNC45NDcgMzc0LjU4NiA2MDEuNjUyIDM4NC43NzdMNTA4LjU2NCA0MjUuNTA0TDUyNC42MDcgMjg4SDQ5Mi4zOTFMNDY3LjkwNiA0OTcuODU5QzQ2Ny4xODggNTA0LjAxNiA0NjIuOTM4IDUwOS4yMTkgNDU3LjA2MiA1MTEuMTcyQzQ1NS40MDYgNTExLjczNCA0NTMuNjg4IDUxMiA0NTIgNTEyQzQ0Ny42ODggNTEyIDQ0My40NjkgNTEwLjI1IDQ0MC40MDYgNTA3LjAxNkwzODUuOTk5IDQ0OS43NDZMMzMxLjU5NCA1MDcuMDE2QzMyOC41OTQgNTEwLjIwMyAzMjQuMzc1IDUxMiAzMjAgNTEyUzMxMS40MDYgNTEwLjIwMyAzMDguNDA2IDUwNy4wMTZMMjUzLjk5OSA0NDkuNzQ2TDE5OS41OTQgNTA3LjAxNkMxOTYuNTMxIDUxMC4yNSAxOTIuMzEyIDUxMiAxODggNTEyQzE4Ni4zMTIgNTEyIDE4NC41OTQgNTExLjczNCAxODIuOTM4IDUxMS4xNzJDMTc3LjA2MiA1MDkuMjE5IDE3Mi44MTMgNTA0LjAxNiAxNzIuMDk0IDQ5Ny44NTlMMTQ3LjYwOSAyODhIMTE1LjM5M0wxMzEuNDM0IDQyNS41MDJMMzguMzQ4IDM4NC43NzdDMTUuMDUzIDM3NC41ODYgMCAzNTEuNTcgMCAzMjYuMTQzVjIwOC4xMDRDMCAxOTcuNTMzIDIuMzI4IDE4Ni45NjcgNy40NTUgMTc3LjcyM0M2NS45NjUgNzIuMjM2IDE4My44MTIgMCAzMjAgMFM1NzQuMDM1IDcyLjIzNiA2MzIuNTQ1IDE3Ny43MjNDNjM3LjY3MiAxODYuOTY3IDY0MCAxOTcuNTMzIDY0MCAyMDguMTA0Wk0yMjYuMDk2IDI4OEgxNzkuODU1TDE4NC4wNTcgMzI0LjAzM0wyMjYuMDk2IDI4OFpNMjMxLjkzOCA0MjYuNTIxTDE5MC45ODIgMzgzLjQxTDE5OS45MzggNDYwLjIwM0wyMzEuOTM4IDQyNi41MjFaTTI1My45OTkgNDAzLjI5OUwyOTcuOTM5IDM1Ny4wNDlMMjUxLjU5NCAzMDguMjY2TDIwMy4xNTYgMzQ5Ljc4M0wyNTMuOTk5IDQwMy4yOTlaTTMyMCAzMzMuODI4TDM2My41MzkgMjg4SDI3Ni40NjFMMzIwIDMzMy44MjhaTTM2My45MzggNDI2LjUyMUwzMjAgMzgwLjI3MUwyNzYuMDYyIDQyNi41MjFMMzIwIDQ3Mi43NjZMMzYzLjkzOCA0MjYuNTIxWk0zODUuOTk5IDQwMy4yOTlMNDM2Ljg0NCAzNDkuNzgzTDM4OC40MDYgMzA4LjI2NkwzNDIuMDYxIDM1Ny4wNDlMMzg1Ljk5OSA0MDMuMjk5Wk00NDkuMDE4IDM4My40MUw0MDguMDYyIDQyNi41MjFMNDQwLjA2MiA0NjAuMjAzTDQ0OS4wMTggMzgzLjQxWk00NjAuMTQ1IDI4OEg0MTMuOTA0TDQ1NS45NDMgMzI0LjAzM0w0NjAuMTQ1IDI4OFpNNTQ0IDIxNkM1NDQgMjExLjU4MiA1NDAuNDE4IDIwOCA1MzYgMjA4SDQ4MFYxNjBDNDgwIDE0Mi4zNTkgNDY1LjY1NiAxMjggNDQ4IDEyOEgxOTJDMTc0LjM0NCAxMjggMTYwIDE0Mi4zNTkgMTYwIDE2MFYyMDhIMTA0Qzk5LjU4MiAyMDggOTYgMjExLjU4MiA5NiAyMTZWMjMyQzk2IDIzNi40MTggOTkuNTgyIDI0MCAxMDQgMjQwSDUzNkM1NDAuNDE4IDI0MCA1NDQgMjM2LjQxOCA1NDQgMjMyVjIxNloiLz48L3N2Zz4=|width=32|height=32)
 */
const BasketballHoop: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 208H192V160H448V208ZM640 208.104V326.143C640 351.57 624.947 374.586 601.652 384.777L508.564 425.504L524.607 288H492.391L467.906 497.859C467.188 504.016 462.938 509.219 457.062 511.172C455.406 511.734 453.688 512 452 512C447.688 512 443.469 510.25 440.406 507.016L385.999 449.746L331.594 507.016C328.594 510.203 324.375 512 320 512S311.406 510.203 308.406 507.016L253.999 449.746L199.594 507.016C196.531 510.25 192.312 512 188 512C186.312 512 184.594 511.734 182.938 511.172C177.062 509.219 172.813 504.016 172.094 497.859L147.609 288H115.393L131.434 425.502L38.348 384.777C15.053 374.586 0 351.57 0 326.143V208.104C0 197.533 2.328 186.967 7.455 177.723C65.965 72.236 183.812 0 320 0S574.035 72.236 632.545 177.723C637.672 186.967 640 197.533 640 208.104ZM226.096 288H179.855L184.057 324.033L226.096 288ZM231.938 426.521L190.982 383.41L199.938 460.203L231.938 426.521ZM253.999 403.299L297.939 357.049L251.594 308.266L203.156 349.783L253.999 403.299ZM320 333.828L363.539 288H276.461L320 333.828ZM363.938 426.521L320 380.271L276.062 426.521L320 472.766L363.938 426.521ZM385.999 403.299L436.844 349.783L388.406 308.266L342.061 357.049L385.999 403.299ZM449.018 383.41L408.062 426.521L440.062 460.203L449.018 383.41ZM460.145 288H413.904L455.943 324.033L460.145 288ZM544 216C544 211.582 540.418 208 536 208H480V160C480 142.359 465.656 128 448 128H192C174.344 128 160 142.359 160 160V208H104C99.582 208 96 211.582 96 216V232C96 236.418 99.582 240 104 240H536C540.418 240 544 236.418 544 232V216Z" />
    </Icon>
);

export default BasketballHoop;