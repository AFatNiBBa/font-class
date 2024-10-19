
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bath` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bath?s=regular bath}
 * @preview ![bath](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODggMjU2LjA2NEg4MFY2OS4zNjFDODAgNjAuNzM4IDg1LjI1IDUyLjk5IDkzLjEyNSA0OS43NDJDMTAxLjEyNSA0Ni40OTIgMTEwLjI1IDQ4LjI0MiAxMTYuMjUgNTQuMzY1TDExOS40MTIgNTcuNTI3QzEwNi40MzggODQuNjMzIDExMC44OTUgMTE3Ljk5MiAxMzMuMzU0IDE0MC40NTFMMTQ4LjE5NyAxNTUuMjk3QzE0Mi4yNjIgMTY0LjU4MiAxNDIuOTE2IDE3Ni44NTQgMTUxLjAzMSAxODQuOTY5QzE1NS43MTkgMTg5LjY1NiAxNjEuODU5IDE5MiAxNjggMTkyUzE4MC4yODEgMTg5LjY1NiAxODQuOTY5IDE4NC45NjlMMjgwLjk2OSA4OC45NjlDMjkwLjM0NCA3OS41OTQgMjkwLjM0NCA2NC40MDYgMjgwLjk2OSA1NS4wMzFDMjc2LjQwNiA1MC40NjkgMjcwLjUyOSA0OC4yNjQgMjY0LjYwNyA0OC4yNjZDMjU5Ljk5OCA0OC4yNjYgMjU1LjM2MSA0OS42IDI1MS4yOTcgNTIuMTk3TDIzNi40NTEgMzcuMzUyQzIxMy45NTkgMTQuODYxIDE4MC41MTYgMTAuNDIgMTUzLjM3MSAyMy40OTRMMTUxLjg4NSAyMi4wMDhDMTM2LjQwMiA2LjUyOSAxMTQuNzUyIC0yLjI4OSA5My4wMzcgMC41MTZDNTcuMTExIDUuMTU4IDMyIDM1LjIxNSAzMiA2OS4zNjFWMjU2LjA2NEgyNEMxMC43NDYgMjU2LjA2NCAwIDI2Ni44MDcgMCAyODAuMDU5UzEwLjc0NiAzMDQuMDUzIDI0IDMwNC4wNTNIMzJWMzg0LjAzMUMzMiA0MTEuMTUgNDMuNzUgNDM3LjAxOCA2NCA0NTUuMTM5VjQ4OC4wMDZDNjQgNTAxLjI1OCA3NC43NDYgNTEyIDg4IDUxMlMxMTIgNTAxLjI1OCAxMTIgNDg4LjAwNlY0NzguMzgzQzExNy4yNSA0NzkuMzgzIDEyMi42MjUgNDc5Ljg4MyAxMjggNDgwLjAwOEgzODRDMzg5LjM3NSA0NzkuODgzIDM5NC43NSA0NzkuMzgzIDQwMCA0NzguMzgzVjQ4OC4wMDZDNDAwIDUwMS4yNTggNDEwLjc0NiA1MTIgNDI0IDUxMlM0NDggNTAxLjI1OCA0NDggNDg4LjAwNlY0NTUuMTM5QzQ2OC4yNSA0MzcuMDE4IDQ4MCA0MTEuMTUgNDgwIDM4NC4wMzFWMzA0LjA1M0g0ODhDNTAxLjI1NCAzMDQuMDUzIDUxMiAyOTMuMzExIDUxMiAyODAuMDU5UzUwMS4yNTQgMjU2LjA2NCA0ODggMjU2LjA2NFpNMjAyLjUxIDcxLjI5M0wyMTYuNjM3IDg1LjQyTDE4MS40MiAxMjAuNjM3TDE2Ny4yOTUgMTA2LjUxQzE1Ny41ODYgOTYuODAxIDE1Ny41ODYgODEuMDAyIDE2Ny4yOTMgNzEuMjkzQzE3Ny4wMjEgNjEuNTY4IDE5Mi43NyA2MS41NTMgMjAyLjUxIDcxLjI5M1pNNDMyIDM4NC4wMzFDNDMyIDQxMC41MjUgNDEwLjUgNDMyLjAyIDM4NCA0MzIuMDJIMTI4QzEwMS41IDQzMi4wMiA4MCA0MTAuNTI1IDgwIDM4NC4wMzFWMzA0LjA1M0g0MzJWMzg0LjAzMVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Bath(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M488 256.064H80V69.361C80 60.738 85.25 52.99 93.125 49.742C101.125 46.492 110.25 48.242 116.25 54.365L119.412 57.527C106.438 84.633 110.895 117.992 133.354 140.451L148.197 155.297C142.262 164.582 142.916 176.854 151.031 184.969C155.719 189.656 161.859 192 168 192S180.281 189.656 184.969 184.969L280.969 88.969C290.344 79.594 290.344 64.406 280.969 55.031C276.406 50.469 270.529 48.264 264.607 48.266C259.998 48.266 255.361 49.6 251.297 52.197L236.451 37.352C213.959 14.861 180.516 10.42 153.371 23.494L151.885 22.008C136.402 6.529 114.752 -2.289 93.037 0.516C57.111 5.158 32 35.215 32 69.361V256.064H24C10.746 256.064 0 266.807 0 280.059S10.746 304.053 24 304.053H32V384.031C32 411.15 43.75 437.018 64 455.139V488.006C64 501.258 74.746 512 88 512S112 501.258 112 488.006V478.383C117.25 479.383 122.625 479.883 128 480.008H384C389.375 479.883 394.75 479.383 400 478.383V488.006C400 501.258 410.746 512 424 512S448 501.258 448 488.006V455.139C468.25 437.018 480 411.15 480 384.031V304.053H488C501.254 304.053 512 293.311 512 280.059S501.254 256.064 488 256.064ZM202.51 71.293L216.637 85.42L181.42 120.637L167.295 106.51C157.586 96.801 157.586 81.002 167.293 71.293C177.021 61.568 192.77 61.553 202.51 71.293ZM432 384.031C432 410.525 410.5 432.02 384 432.02H128C101.5 432.02 80 410.525 80 384.031V304.053H432V384.031Z" />
        </Icon>
    </>
}