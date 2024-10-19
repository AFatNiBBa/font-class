
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-xmark` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/folder-xmark?s=duotone folder-xmark}
 * @preview ![folder-xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ2NCA5NkgyNzJMMjA4IDMySDQ4QzIxLjUgMzIgMCA1My41IDAgODBWNDMyQzAgNDU4LjUgMjEuNSA0ODAgNDggNDgwSDQ2NEM0OTAuNSA0ODAgNTEyIDQ1OC41IDUxMiA0MzJWMTQ0QzUxMiAxMTcuNSA0OTAuNSA5NiA0NjQgOTZaTTMzNi45NjkgMzM1LjAzMUMzNDYuMzQ0IDM0NC40MDYgMzQ2LjM0NCAzNTkuNTk0IDMzNi45NjkgMzY4Ljk2OUMzMjcuNTg2IDM3OC4zNDggMzEyLjQwNiAzNzguMzQgMzAzLjAzMSAzNjguOTY5TDI1NiAzMjEuOTM4TDIwOC45NjkgMzY4Ljk2OUMxOTkuNTg2IDM3OC4zNDggMTg0LjQwNiAzNzguMzQgMTc1LjAzMSAzNjguOTY5QzE2NS42NTYgMzU5LjU5NCAxNjUuNjU2IDM0NC40MDYgMTc1LjAzMSAzMzUuMDMxTDIyMi4wNjIgMjg4TDE3NS4wMzEgMjQwLjk2OUMxNjUuNjU2IDIzMS41OTQgMTY1LjY1NiAyMTYuNDA2IDE3NS4wMzEgMjA3LjAzMVMxOTkuNTk0IDE5Ny42NTYgMjA4Ljk2OSAyMDcuMDMxTDI1NiAyNTQuMDYyTDMwMy4wMzEgMjA3LjAzMUMzMTIuNDA2IDE5Ny42NTYgMzI3LjU5NCAxOTcuNjU2IDMzNi45NjkgMjA3LjAzMVMzNDYuMzQ0IDIzMS41OTQgMzM2Ljk2OSAyNDAuOTY5TDI4OS45MzggMjg4TDMzNi45NjkgMzM1LjAzMVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzM2Ljk2OSAzMzUuMDMxQzM0Ni4zNDQgMzQ0LjQwNiAzNDYuMzQ0IDM1OS41OTQgMzM2Ljk2OSAzNjguOTY5QzMyNy41ODYgMzc4LjM0OCAzMTIuNDA2IDM3OC4zNCAzMDMuMDMxIDM2OC45NjlMMjU2IDMyMS45MzhMMjA4Ljk2OSAzNjguOTY5QzE5OS41ODYgMzc4LjM0OCAxODQuNDA2IDM3OC4zNCAxNzUuMDMxIDM2OC45NjlDMTY1LjY1NiAzNTkuNTk0IDE2NS42NTYgMzQ0LjQwNiAxNzUuMDMxIDMzNS4wMzFMMjIyLjA2MyAyODhMMTc1LjAzMSAyNDAuOTY5QzE2NS42NTYgMjMxLjU5NCAxNjUuNjU2IDIxNi40MDYgMTc1LjAzMSAyMDcuMDMxUzE5OS41OTQgMTk3LjY1NiAyMDguOTY5IDIwNy4wMzFMMjU2IDI1NC4wNjJMMzAzLjAzMSAyMDcuMDMxQzMxMi40MDYgMTk3LjY1NiAzMjcuNTk0IDE5Ny42NTYgMzM2Ljk2OSAyMDcuMDMxUzM0Ni4zNDQgMjMxLjU5NCAzMzYuOTY5IDI0MC45NjlMMjg5LjkzOCAyODhMMzM2Ljk2OSAzMzUuMDMxWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const FolderXmark: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M464 96H272L208 32H48C21.5 32 0 53.5 0 80V432C0 458.5 21.5 480 48 480H464C490.5 480 512 458.5 512 432V144C512 117.5 490.5 96 464 96ZM336.969 335.031C346.344 344.406 346.344 359.594 336.969 368.969C327.586 378.348 312.406 378.34 303.031 368.969L256 321.938L208.969 368.969C199.586 378.348 184.406 378.34 175.031 368.969C165.656 359.594 165.656 344.406 175.031 335.031L222.062 288L175.031 240.969C165.656 231.594 165.656 216.406 175.031 207.031S199.594 197.656 208.969 207.031L256 254.062L303.031 207.031C312.406 197.656 327.594 197.656 336.969 207.031S346.344 231.594 336.969 240.969L289.938 288L336.969 335.031Z" />
            <path d="M336.969 335.031C346.344 344.406 346.344 359.594 336.969 368.969C327.586 378.348 312.406 378.34 303.031 368.969L256 321.938L208.969 368.969C199.586 378.348 184.406 378.34 175.031 368.969C165.656 359.594 165.656 344.406 175.031 335.031L222.063 288L175.031 240.969C165.656 231.594 165.656 216.406 175.031 207.031S199.594 197.656 208.969 207.031L256 254.062L303.031 207.031C312.406 197.656 327.594 197.656 336.969 207.031S346.344 231.594 336.969 240.969L289.938 288L336.969 335.031Z" />
    </Icon>
);

export default FolderXmark;