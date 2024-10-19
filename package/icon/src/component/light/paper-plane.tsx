
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `paper-plane` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/paper-plane?s=light paper-plane}
 * @preview ![paper-plane](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTguMTIzIDUuNjI5QzQ5Mi42OCAxLjg5MSA0ODYuMzUyIDAgNDgwLjAwMiAwQzQ3NC41NDEgMCA0NjkuMDY1IDEuMzk4IDQ2NC4xMjMgNC4yMjNMMTYuMTIzIDI2MC4yMTVDNS41MyAyNjYuMjYyIC0wLjY4OSAyNzcuODA5IDAuMDYxIDI4OS45OFM4LjQzNiAzMTIuODQgMTkuNjg2IDMxNy41MjdMMTIyLjkxMSAzNjAuNTM1TDE4NC44OTkgNTA2Ljk4QzE4Ni4zODUgNTEwLjUwNCAxODkuMTg2IDUxMiAxOTEuOTU5IDUxMkMxOTQuMDE4IDUxMiAxOTYuMDYxIDUxMS4xOCAxOTcuNTQ1IDUwOS43NTRMMjgzLjI5NyA0MjcuMzU5TDQwMy42ODYgNDc3LjUyQzQwNy45NzkgNDc5LjMxMiA0MTIuMTEyIDQ4MCA0MTUuODk5IDQ4MEM0MjIuNTE0IDQ4MCA0MjguMDg0IDQ3Ny44OTggNDMxLjY1NSA0NzUuODk1QzQ0MC4yNDggNDcxLjA2NiA0NDYuMTIzIDQ2Mi41ODIgNDQ3LjYyMyA0NTIuODQ4TDUxMS42MjMgMzYuODYzQzUxMy40OTggMjQuNzIzIDUwOC4yNDggMTIuNTgyIDQ5OC4xMjMgNS42MjlaTTMyIDI4OEw0MTIuMTEgNzAuODA1TDEyMy44ODMgMzI2LjI3M0wzMiAyODhaTTIwMC43MzkgNDYyLjMwOUwxNTIuMzc5IDM0OC4wNjNMMTUxLjA1NSAzNDQuOTM4TDM4MC41NzcgMTQxLjVMMjExLjA2MSAzNzQuNTk0QzIwOC4xNTUgMzc4LjU5NCAyMDcuMjY0IDM4My42ODggMjA4LjYyMyAzODguNDM4QzIwOS45OTggMzkzLjE4OCAyMTMuNDY3IDM5Ny4wMzEgMjE4LjA2MSAzOTguODQ0TDI1Mi40NjUgNDEyLjYwNUwyMDAuNzM5IDQ2Mi4zMDlaTTQxNi43MDUgNDQzLjM0NEwyNDkuMDMgMzc2Ljc4MUw0NzQuNjg4IDY2LjQ5Nkw0MTYuNzA1IDQ0My4zNDRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function PaperPlane(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M498.123 5.629C492.68 1.891 486.352 0 480.002 0C474.541 0 469.065 1.398 464.123 4.223L16.123 260.215C5.53 266.262 -0.689 277.809 0.061 289.98S8.436 312.84 19.686 317.527L122.911 360.535L184.899 506.98C186.385 510.504 189.186 512 191.959 512C194.018 512 196.061 511.18 197.545 509.754L283.297 427.359L403.686 477.52C407.979 479.312 412.112 480 415.899 480C422.514 480 428.084 477.898 431.655 475.895C440.248 471.066 446.123 462.582 447.623 452.848L511.623 36.863C513.498 24.723 508.248 12.582 498.123 5.629ZM32 288L412.11 70.805L123.883 326.273L32 288ZM200.739 462.309L152.379 348.063L151.055 344.938L380.577 141.5L211.061 374.594C208.155 378.594 207.264 383.688 208.623 388.438C209.998 393.188 213.467 397.031 218.061 398.844L252.465 412.605L200.739 462.309ZM416.705 443.344L249.03 376.781L474.688 66.496L416.705 443.344Z" />
        </Icon>
    </>
}