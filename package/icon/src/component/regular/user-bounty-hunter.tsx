
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `user-bounty-hunter` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-bounty-hunter?s=regular user-bounty-hunter}
 * @preview ![user-bounty-hunter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgMzUySDEyOEM1Ny4zMDcgMzUyIDAgNDA5LjMwNyAwIDQ4MEMwIDQ5Ny42NzIgMTQuMzI2IDUxMiAzMiA1MTJINDE2QzQzMy42NzQgNTEyIDQ0OCA0OTcuNjcyIDQ0OCA0ODBDNDQ4IDQwOS4zMDcgMzkwLjY5MyAzNTIgMzIwIDM1MlpNMjg4IDQ2NEwyMjQgNDE2TDE2MCA0NjRINDkuNjA3QzU3LjA0MSA0MjcuNTI5IDg5LjM2NyA0MDAgMTI4IDQwMEgzMjBDMzU4LjYzMyA0MDAgMzkwLjk1OSA0MjcuNTI5IDM5OC4zOTMgNDY0SDI4OFpNODkuMzAxIDI5My45MUwyMDcuODQ2IDMyMEgyNDAuMTU0TDM1OC42OTkgMjkzLjkxQzM3NC4xNzYgMjkwLjUwMiAzODQuODY5IDI3Ni40NzkgMzgzLjk0MyAyNjAuODAzTDM3Ny4wMzcgMTQzLjgwMUMzNzIuNzUyIDYzLjE4OCAzMDUuNTA2IDAgMjI0IDBDMTcwLjQxNiAwIDEyMy40MiAyNy42IDk2IDY5LjIxOVYzMkMxMDQuODM2IDMyIDExMiAyNC44MzYgMTEyIDE2QzExMiA3LjE2MiAxMDQuODM2IDAgOTYgMEg4MEM3MS4xNjQgMCA2NCA3LjE2MiA2NCAxNlYyNjRDNjQgMjY0IDY0LjI4OSAyNjMuNzIxIDY0LjM5OCAyNjMuNjE1QzY0Ljg1OSAyNzguMDkyIDc0Ljc4NyAyOTAuNzE1IDg5LjMwMSAyOTMuOTFaTTMyOS42ODYgMTU2LjE4NEwzMzAuNDk4IDE2OS45NDdDMzA1LjM1NyAxODMuODY3IDI2Ni4yNjQgMjEzLjc2NiAyNTcuODA3IDI2Ni45NjdMMjQ4IDI2OS4xMjVWMTcxLjVMMzI5LjY4NiAxNTYuMTg0Wk0yMjQgNDhDMjczLjUzNSA0OCAzMTUuMjQgODEuODQyIDMyNi4yODcgMTI4SDEyMS42OTNDMTMyLjY2IDgxLjkzOSAxNzQuMzk4IDQ4IDIyNCA0OFpNMTE4LjMxNCAxNTYuMTg0TDIwMCAxNzEuNVYyNjkuMTI1TDE5MC4xOTMgMjY2Ljk2N0MxODEuNzM2IDIxMy43NjQgMTQyLjY0MyAxODMuODY3IDExNy41MDIgMTY5Ljk0N0wxMTguMzE0IDE1Ni4xODRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function UserBountyHunter(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M320 352H128C57.307 352 0 409.307 0 480C0 497.672 14.326 512 32 512H416C433.674 512 448 497.672 448 480C448 409.307 390.693 352 320 352ZM288 464L224 416L160 464H49.607C57.041 427.529 89.367 400 128 400H320C358.633 400 390.959 427.529 398.393 464H288ZM89.301 293.91L207.846 320H240.154L358.699 293.91C374.176 290.502 384.869 276.479 383.943 260.803L377.037 143.801C372.752 63.188 305.506 0 224 0C170.416 0 123.42 27.6 96 69.219V32C104.836 32 112 24.836 112 16C112 7.162 104.836 0 96 0H80C71.164 0 64 7.162 64 16V264C64 264 64.289 263.721 64.398 263.615C64.859 278.092 74.787 290.715 89.301 293.91ZM329.686 156.184L330.498 169.947C305.357 183.867 266.264 213.766 257.807 266.967L248 269.125V171.5L329.686 156.184ZM224 48C273.535 48 315.24 81.842 326.287 128H121.693C132.66 81.939 174.398 48 224 48ZM118.314 156.184L200 171.5V269.125L190.193 266.967C181.736 213.764 142.643 183.867 117.502 169.947L118.314 156.184Z" />
        </Icon>
    </>
}