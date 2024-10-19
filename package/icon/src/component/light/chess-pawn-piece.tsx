
import { Icon } from "../../index";

/**
 * A component that renders the `chess-pawn-piece` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chess-pawn-piece?s=light chess-pawn-piece}
 * @preview ![chess-pawn-piece](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDIuNjQxIDQyOC40MzhMMjI0IDQxOS4wNjJWNDA4QzIyNCAzOTQuNzY2IDIxMy4yMzQgMzg0IDIwMCAzODRINTZDNDIuNzY2IDM4NCAzMiAzOTQuNzY2IDMyIDQwOFY0MTkuMDYyTDEzLjQyMiA0MjguNDA2QzUuMjY2IDQzMi4yOTcgMCA0NDAuNzE5IDAgNDQ5Ljg3NVY0ODhDMCA1MDEuMjM0IDEwLjc2NiA1MTIgMjQgNTEySDIzMkMyNDUuMjM0IDUxMiAyNTYgNTAxLjIzNCAyNTYgNDg4VjQ0OS44NzVDMjU2IDQ0MC43NSAyNTAuNzY2IDQzMi4zNDQgMjQyLjY0MSA0MjguNDM4Wk0yMjQgNDgwSDMyVjQ1NC44ODFMNjQgNDM4Ljc4N1Y0MTZIMTkyVjQzOC43ODdMMjI0IDQ1NC44NzdWNDgwWk00OCAyNDBDNDggMjQ4LjgzNiA1NS4xNjQgMjU2IDY0IDI1Nkg3Ny4xMTVMNjQuMjE5IDMzMy4zNzVDNjIuNzUgMzQyLjA5NCA2OC42NTYgMzUwLjM0NCA3Ny4zNzUgMzUxLjc4MUM3OC4yNSAzNTEuOTM4IDc5LjE1NiAzNTIgODAuMDMxIDM1MkM4Ny42ODggMzUyIDk0LjQ2OSAzNDYuNDY5IDk1Ljc4MSAzMzguNjI1TDEwOS41NTMgMjU2SDE0Ni40NDdMMTYwLjIxOSAzMzguNjI1QzE2MS41MzEgMzQ2LjQ2OSAxNjguMzEyIDM1MiAxNzUuOTY5IDM1MkMxNzYuODQ0IDM1MiAxNzcuNzUgMzUxLjkzOCAxNzguNjI1IDM1MS43ODFDMTg3LjM0NCAzNTAuMzQ0IDE5My4yNSAzNDIuMDk0IDE5MS43ODEgMzMzLjM3NUwxNzguODg1IDI1NkgxOTJDMjAwLjgzOCAyNTYgMjA4IDI0OC44MzYgMjA4IDI0MFMyMDAuODM4IDIyNCAxOTIgMjI0SDE5MS42MzlDMjAxLjc2OCAyMTAuNTk4IDIwOCAxOTQuMDk0IDIwOCAxNzZDMjA4IDEzMS44MTYgMTcyLjE4NCA5NiAxMjggOTZDODMuODE4IDk2IDQ4IDEzMS44MTYgNDggMTc2QzQ4IDE5NC4wOTQgNTQuMjMyIDIxMC41OTggNjQuMzYxIDIyNEg2NEM1NS4xNjQgMjI0IDQ4IDIzMS4xNjQgNDggMjQwWk0xMjggMTI4QzE1NC40NjcgMTI4IDE3NiAxNDkuNTMzIDE3NiAxNzZTMTU0LjQ2NyAyMjQgMTI4IDIyNFM4MCAyMDIuNDY3IDgwIDE3NlMxMDEuNTMzIDEyOCAxMjggMTI4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ChessPawnPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M242.641 428.438L224 419.062V408C224 394.766 213.234 384 200 384H56C42.766 384 32 394.766 32 408V419.062L13.422 428.406C5.266 432.297 0 440.719 0 449.875V488C0 501.234 10.766 512 24 512H232C245.234 512 256 501.234 256 488V449.875C256 440.75 250.766 432.344 242.641 428.438ZM224 480H32V454.881L64 438.787V416H192V438.787L224 454.877V480ZM48 240C48 248.836 55.164 256 64 256H77.115L64.219 333.375C62.75 342.094 68.656 350.344 77.375 351.781C78.25 351.938 79.156 352 80.031 352C87.688 352 94.469 346.469 95.781 338.625L109.553 256H146.447L160.219 338.625C161.531 346.469 168.312 352 175.969 352C176.844 352 177.75 351.938 178.625 351.781C187.344 350.344 193.25 342.094 191.781 333.375L178.885 256H192C200.838 256 208 248.836 208 240S200.838 224 192 224H191.639C201.768 210.598 208 194.094 208 176C208 131.816 172.184 96 128 96C83.818 96 48 131.816 48 176C48 194.094 54.232 210.598 64.361 224H64C55.164 224 48 231.164 48 240ZM128 128C154.467 128 176 149.533 176 176S154.467 224 128 224S80 202.467 80 176S101.533 128 128 128Z" />
    </Icon>
);

export default ChessPawnPiece;