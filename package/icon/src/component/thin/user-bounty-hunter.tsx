
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `user-bounty-hunter` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-bounty-hunter?s=thin user-bounty-hunter}
 * @preview ![user-bounty-hunter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgMzUySDEyOEM1Ny4zMDcgMzUyIDAgNDA5LjMwNyAwIDQ4MEMwIDQ5Ny42NzIgMTQuMzI2IDUxMiAzMiA1MTJINDE2QzQzMy42NzQgNTEyIDQ0OCA0OTcuNjcyIDQ0OCA0ODBDNDQ4IDQwOS4zMDcgMzkwLjY5MyAzNTIgMzIwIDM1MlpNMTU1LjMxMiA0OTZMMjI0IDQyNy4zMTJMMjkyLjY4OCA0OTZIMTU1LjMxMlpNNDE2IDQ5NkgzMTUuMzEyTDIyOS42NTYgNDEwLjM0NEMyMjYuNTMxIDQwNy4yMTkgMjIxLjQ2OSA0MDcuMjE5IDIxOC4zNDQgNDEwLjM0NEwxMzIuNjg4IDQ5NkgzMkMyMy4xNzggNDk2IDE2IDQ4OC44MjIgMTYgNDgwQzE2IDQxOC4yNDIgNjYuMjQyIDM2OCAxMjggMzY4SDMyMEMzODEuNzU4IDM2OCA0MzIgNDE4LjI0MiA0MzIgNDgwQzQzMiA0ODguODIyIDQyNC44MjIgNDk2IDQxNiA0OTZaTTg5LjMwMSAyOTMuOTFMMjA3Ljg0NiAzMjBIMjQwLjE1NEwzNTguNjk5IDI5My45MUMzNzQuMTc2IDI5MC41MDIgMzg0Ljg2OSAyNzYuNDc5IDM4My45NDMgMjYwLjgwM0wzNzcuMDM3IDE0My44MDFDMzcyLjc1MiA2My4xODggMzA1LjUwNiAwIDIyNCAwQzE1Ny40MzkgMCAxMDEuMDIgNDIuNDM5IDgwIDEwMS43OTVWMTZIMTA0QzEwOC40MTggMTYgMTEyIDEyLjQxOCAxMTIgOFMxMDguNDE4IDAgMTA0IDBINzJDNjcuNTgyIDAgNjQgMy41ODIgNjQgOFYyNjRDNjQgMjY0IDY0LjA3IDI2My4xMTUgNjQuMTc4IDI2MS43ODlDNjMuNzY2IDI3Ny4wNDkgNzQuMTYyIDI5MC41NzYgODkuMzAxIDI5My45MVpNMzYyLjA2NCAxNjEuNjg2QzM0Ni4xNTYgMTY3LjkzMiAyODAgMTk4LjMxNCAyODAgMjcwLjg1OUMyODAgMjc1LjI4MSAyODMuNTk0IDI3OC44NTkgMjg4IDI3OC44NTlTMjk2IDI3NS4yODEgMjk2IDI3MC44NTlDMjk2IDIxMi42OTMgMzQ0LjQ4MiAxODYuNTIzIDM2My4wNjIgMTc4LjU4TDM2Ny45NzEgMjYxLjc0NkMzNjguNDM2IDI2OS42MDUgMzYzLjA5IDI3Ni41NjEgMzU1LjI2IDI3OC4yODNMMjU2IDMwMC4xMjlWMTgyLjE0MUwzNjEuNjA5IDE1My45ODhMMzYyLjA2NCAxNjEuNjg2Wk0yMjQgMTZDMjg1LjQ2NSAxNiAzMzcuNDAyIDU2LjI0NiAzNTQuNzM0IDExMkg5My4yNUMxMTAuNTU5IDU2LjI3MSAxNjIuNTE0IDE2IDIyNCAxNlpNODkuNDc3IDEyOEgzNTguNTE4QzM1OS4xMDUgMTMxLjI1NCAzNTkuNjY0IDEzNC41MTIgMzYwLjAxNiAxMzcuODQ2TDI0NS45MzggMTY4LjI2NkMyNDIuNDM4IDE2OS4yMDMgMjQwIDE3Mi4zNzUgMjQwIDE3NlYzMDMuNjVMMjM4LjQxNCAzMDRIMjA5LjU4NkwyMDggMzAzLjY1VjE3NkMyMDggMTcyLjM3NSAyMDUuNTYyIDE2OS4yMDMgMjAyLjA2MiAxNjguMjY2TDg3Ljk3OSAxMzcuODQ0Qzg4LjMyNiAxMzQuNTEgODguODkxIDEzMS4yNTYgODkuNDc3IDEyOFpNODQuOTM5IDE3OC41OEMxMDMuNTIgMTg2LjUyMSAxNTIgMjEyLjY5MyAxNTIgMjcwLjg1OUMxNTIgMjc1LjI4MSAxNTUuNTk0IDI3OC44NTkgMTYwIDI3OC44NTlTMTY4IDI3NS4yODEgMTY4IDI3MC44NTlDMTY4IDE5OC4zMTYgMTAxLjg0NCAxNjcuOTMyIDg1LjkzNiAxNjEuNjg2TDg2LjM5MSAxNTMuOTg4TDE5MiAxODIuMTQxVjMwMC4xMjlMOTIuNzQgMjc4LjI4M0M4NC45MSAyNzYuNTYxIDc5LjU2NCAyNjkuNjA1IDgwLjAyOSAyNjEuNzQ2TDg0LjkzOSAxNzguNThaIi8+PC9zdmc+|width=32|height=32)
 */
export default function UserBountyHunter(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M320 352H128C57.307 352 0 409.307 0 480C0 497.672 14.326 512 32 512H416C433.674 512 448 497.672 448 480C448 409.307 390.693 352 320 352ZM155.312 496L224 427.312L292.688 496H155.312ZM416 496H315.312L229.656 410.344C226.531 407.219 221.469 407.219 218.344 410.344L132.688 496H32C23.178 496 16 488.822 16 480C16 418.242 66.242 368 128 368H320C381.758 368 432 418.242 432 480C432 488.822 424.822 496 416 496ZM89.301 293.91L207.846 320H240.154L358.699 293.91C374.176 290.502 384.869 276.479 383.943 260.803L377.037 143.801C372.752 63.188 305.506 0 224 0C157.439 0 101.02 42.439 80 101.795V16H104C108.418 16 112 12.418 112 8S108.418 0 104 0H72C67.582 0 64 3.582 64 8V264C64 264 64.07 263.115 64.178 261.789C63.766 277.049 74.162 290.576 89.301 293.91ZM362.064 161.686C346.156 167.932 280 198.314 280 270.859C280 275.281 283.594 278.859 288 278.859S296 275.281 296 270.859C296 212.693 344.482 186.523 363.062 178.58L367.971 261.746C368.436 269.605 363.09 276.561 355.26 278.283L256 300.129V182.141L361.609 153.988L362.064 161.686ZM224 16C285.465 16 337.402 56.246 354.734 112H93.25C110.559 56.271 162.514 16 224 16ZM89.477 128H358.518C359.105 131.254 359.664 134.512 360.016 137.846L245.938 168.266C242.438 169.203 240 172.375 240 176V303.65L238.414 304H209.586L208 303.65V176C208 172.375 205.562 169.203 202.062 168.266L87.979 137.844C88.326 134.51 88.891 131.256 89.477 128ZM84.939 178.58C103.52 186.521 152 212.693 152 270.859C152 275.281 155.594 278.859 160 278.859S168 275.281 168 270.859C168 198.316 101.844 167.932 85.936 161.686L86.391 153.988L192 182.141V300.129L92.74 278.283C84.91 276.561 79.564 269.605 80.029 261.746L84.939 178.58Z" />
        </Icon>
    </>
}