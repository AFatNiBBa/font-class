
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `kazoo` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/kazoo?s=thin kazoo}
 * @preview ![kazoo](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01OTIgMTQ0SDUwOC43NjZDNDkwLjYxMyAxMzQuMTI1IDQ3MC4xMjEgMTI4IDQ0OCAxMjhTNDA1LjM4NyAxMzQuMTI1IDM4Ny4yMzQgMTQ0SDI0MS43MzhDMjI5LjgzMiAxNDQgMjE3Ljk4IDE0NS42NiAyMDYuNTMxIDE0OC45MzdMMjMuMjUgMjAxLjM3NUM5LjUgMjA1LjI1IDAgMjE3Ljg3NSAwIDIzMi4xMjVWMjc5Ljg3NUMwIDI5NC4xMjUgOS41IDMwNi43NSAyMy4yNSAzMTAuNjI1TDIwNi41MzEgMzYzLjA2MkMyMTcuOTggMzY2LjM0IDIyOS44MzIgMzY4IDI0MS43MzggMzY4SDM4Ny4yMzRDNDA1LjM4NyAzNzcuODc1IDQyNS44NzkgMzg0IDQ0OCAzODRTNDkwLjYxMyAzNzcuODc1IDUwOC43NjYgMzY4SDU5MkM2MTguMzk4IDM2OCA2NDAgMzQ2LjM5OCA2NDAgMzIwVjE5MkM2NDAgMTY1LjYwMSA2MTguMzk4IDE0NCA1OTIgMTQ0Wk0yNDEuNzM4IDM1MkMyMzEuMzEyIDM1MiAyMjAuOTQ5IDM1MC41NDcgMjEwLjkzNCAzNDcuNjhMMjcuNTkgMjk1LjIyNkMyMC43NjYgMjkzLjMwMSAxNiAyODYuOTg4IDE2IDI3OS44NzVWMjMyLjEyNUMxNiAyMjUuMDEyIDIwLjc2NiAyMTguNjk5IDI3LjY1MiAyMTYuNzU4TDIxMC45MzQgMTY0LjMyQzIyMC45NDkgMTYxLjQ1MyAyMzEuMzEyIDE2MCAyNDEuNzM4IDE2MEgzNjQuMTQ1QzMzNy4zMDUgMTgzLjQ2MSAzMjAgMjE3LjU1MSAzMjAgMjU2UzMzNy4zMDUgMzI4LjUzOSAzNjQuMTQ1IDM1MkgyNDEuNzM4Wk00NDggMzY4QzM4Ni4yNDIgMzY4IDMzNiAzMTcuNzU4IDMzNiAyNTZTMzg2LjI0MiAxNDQgNDQ4IDE0NFM1NjAgMTk0LjI0MiA1NjAgMjU2UzUwOS43NTggMzY4IDQ0OCAzNjhaTTYyNCAzMjBDNjI0IDMzNy42NDQgNjA5LjY0NSAzNTIgNTkyIDM1Mkg1MzEuODU1QzU1OC42OTUgMzI4LjUzOSA1NzYgMjk0LjQ0OSA1NzYgMjU2UzU1OC42OTUgMTgzLjQ2MSA1MzEuODU1IDE2MEg1OTJDNjA5LjY0NSAxNjAgNjI0IDE3NC4zNTUgNjI0IDE5MlYzMjBaTTQ5My42NTYgMjEwLjM0NEM0OTAuNTMxIDIwNy4yMTkgNDg1LjQ2OSAyMDcuMjE5IDQ4Mi4zNDQgMjEwLjM0NEw0NDggMjQ0LjY4N0w0MTMuNjU2IDIxMC4zNDRDNDEwLjUzMSAyMDcuMjE5IDQwNS40NjkgMjA3LjIxOSA0MDIuMzQ0IDIxMC4zNDRTMzk5LjIxOSAyMTguNTMxIDQwMi4zNDQgMjIxLjY1Nkw0MzYuNjg4IDI1Nkw0MDIuMzQ0IDI5MC4zNDRDMzk5LjIxOSAyOTMuNDY5IDM5OS4yMTkgMjk4LjUzMSA0MDIuMzQ0IDMwMS42NTZDNDAzLjkwNiAzMDMuMjE5IDQwNS45MzggMzA0IDQwOCAzMDRTNDEyLjA5NCAzMDMuMjE5IDQxMy42NTYgMzAxLjY1Nkw0NDggMjY3LjMxMkw0ODIuMzQ0IDMwMS42NTZDNDgzLjkwNiAzMDMuMjE5IDQ4NS45MzggMzA0IDQ4OCAzMDRTNDkyLjA5NCAzMDMuMjE5IDQ5My42NTYgMzAxLjY1NkM0OTYuNzgxIDI5OC41MzEgNDk2Ljc4MSAyOTMuNDY5IDQ5My42NTYgMjkwLjM0NEw0NTkuMzEyIDI1Nkw0OTMuNjU2IDIyMS42NTZDNDk2Ljc4MSAyMTguNTMxIDQ5Ni43ODEgMjEzLjQ2OSA0OTMuNjU2IDIxMC4zNDRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Kazoo(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M592 144H508.766C490.613 134.125 470.121 128 448 128S405.387 134.125 387.234 144H241.738C229.832 144 217.98 145.66 206.531 148.937L23.25 201.375C9.5 205.25 0 217.875 0 232.125V279.875C0 294.125 9.5 306.75 23.25 310.625L206.531 363.062C217.98 366.34 229.832 368 241.738 368H387.234C405.387 377.875 425.879 384 448 384S490.613 377.875 508.766 368H592C618.398 368 640 346.398 640 320V192C640 165.601 618.398 144 592 144ZM241.738 352C231.312 352 220.949 350.547 210.934 347.68L27.59 295.226C20.766 293.301 16 286.988 16 279.875V232.125C16 225.012 20.766 218.699 27.652 216.758L210.934 164.32C220.949 161.453 231.312 160 241.738 160H364.145C337.305 183.461 320 217.551 320 256S337.305 328.539 364.145 352H241.738ZM448 368C386.242 368 336 317.758 336 256S386.242 144 448 144S560 194.242 560 256S509.758 368 448 368ZM624 320C624 337.644 609.645 352 592 352H531.855C558.695 328.539 576 294.449 576 256S558.695 183.461 531.855 160H592C609.645 160 624 174.355 624 192V320ZM493.656 210.344C490.531 207.219 485.469 207.219 482.344 210.344L448 244.687L413.656 210.344C410.531 207.219 405.469 207.219 402.344 210.344S399.219 218.531 402.344 221.656L436.688 256L402.344 290.344C399.219 293.469 399.219 298.531 402.344 301.656C403.906 303.219 405.938 304 408 304S412.094 303.219 413.656 301.656L448 267.312L482.344 301.656C483.906 303.219 485.938 304 488 304S492.094 303.219 493.656 301.656C496.781 298.531 496.781 293.469 493.656 290.344L459.312 256L493.656 221.656C496.781 218.531 496.781 213.469 493.656 210.344Z" />
        </Icon>
    </>
}