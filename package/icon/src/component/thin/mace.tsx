
import { Icon } from "../../index";

/**
 * A component that renders the `mace` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mace?s=thin mace}
 * @preview ![mace](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODggMTg0LjAwNkMyNjUuOTM4IDE4NC4wMDYgMjQ4IDIwMS45NDQgMjQ4IDIyNC4wMDdTMjY1LjkzOCAyNjQuMDA4IDI4OCAyNjQuMDA4UzMyOCAyNDYuMDcgMzI4IDIyNC4wMDdTMzEwLjA2MiAxODQuMDA2IDI4OCAxODQuMDA2Wk0yODggMjQ4LjAwOEMyNzQuNzY2IDI0OC4wMDggMjY0IDIzNy4yNDIgMjY0IDIyNC4wMDdTMjc0Ljc2NiAyMDAuMDA2IDI4OCAyMDAuMDA2UzMxMiAyMTAuNzcyIDMxMiAyMjQuMDA3UzMwMS4yMzQgMjQ4LjAwOCAyODggMjQ4LjAwOFpNNTA0IDIxNi4wMDdINDIzLjE5MUM0MTkuMTE3IDE0Ny41MDUgMzY0LjUwMiA5Mi44ODYgMjk2IDg4LjgxMVY4QzI5NiAzLjU3OCAyOTIuNDIyIDAgMjg4IDBTMjgwIDMuNTc4IDI4MCA4Vjg4LjgxMUMyMTEuNDk4IDkyLjg4NiAxNTYuODgzIDE0Ny41MDUgMTUyLjgwOSAyMTYuMDA3SDcyQzY3LjU3OCAyMTYuMDA3IDY0IDIxOS41ODUgNjQgMjI0LjAwN1M2Ny41NzggMjMyLjAwNyA3MiAyMzIuMDA3SDE1Mi44MDlDMTUzLjk5IDI1MS44NTkgMTU5LjQyIDI3MC40MTEgMTY4LjI0NiAyODcuMDg3TDExLjcwMyA0NDMuNjA3QzQuMTU2IDQ1MS4xNTQgMCA0NjEuMjE3IDAgNDcxLjk1MlM0LjE1NiA0OTIuNzY1IDExLjcwMyA1MDAuMjk3QzE5LjUgNTA4LjA5NCAyOS43MzQgNTEyIDM5Ljk4NCA1MTJDNTAuMjE5IDUxMiA2MC40NjkgNTA4LjA5NCA2OC4yNjYgNTAwLjI5N0wyMjQuNzg5IDM0My42OUMyNDEuNSAzNTIuNTYyIDI2MC4wOTQgMzU4LjAxOSAyODAgMzU5LjIwMlY0NDAuMDEzQzI4MCA0NDQuNDM1IDI4My41NzggNDQ4LjAxNCAyODggNDQ4LjAxNFMyOTYgNDQ0LjQzNSAyOTYgNDQwLjAxM1YzNTkuMjAyQzM2NC41MDIgMzU1LjEyOCA0MTkuMTE3IDMwMC41MDkgNDIzLjE5MSAyMzIuMDA3SDUwNEM1MDguNDIyIDIzMi4wMDcgNTEyIDIyOC40MjkgNTEyIDIyNC4wMDdTNTA4LjQyMiAyMTYuMDA3IDUwNCAyMTYuMDA3Wk01Ni45NTMgNDg4Ljk4NEM0Ny42MDkgNDk4LjMyOCAzMi4zNTkgNDk4LjMyOCAyMy4wMTYgNDg4Ljk4NEMxOC40ODQgNDg0LjQ2OCAxNiA0NzguNDIxIDE2IDQ3MS45NTJDMTYgNDY1LjQ5OSAxOC40ODQgNDU5LjQ1MiAyMy4wMTYgNDU0LjkyTDE3Ni40ODQgMzAxLjQ3OEMxODUuNzA3IDMxNC43MDUgMTk3LjIwMSAzMjYuMTk3IDIxMC40MjQgMzM1LjQzMkw1Ni45NTMgNDg4Ljk4NFpNMjg4IDM0NC4wMUMyMjEuODI4IDM0NC4wMSAxNjggMjkwLjE4MSAxNjggMjI0LjAwN1MyMjEuODI4IDEwNC4wMDMgMjg4IDEwNC4wMDNTNDA4IDE1Ny44MzMgNDA4IDIyNC4wMDdTMzU0LjE3MiAzNDQuMDEgMjg4IDM0NC4wMVoiLz48L3N2Zz4=|width=32|height=32)
 */
const Mace: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 184.006C265.938 184.006 248 201.944 248 224.007S265.938 264.008 288 264.008S328 246.07 328 224.007S310.062 184.006 288 184.006ZM288 248.008C274.766 248.008 264 237.242 264 224.007S274.766 200.006 288 200.006S312 210.772 312 224.007S301.234 248.008 288 248.008ZM504 216.007H423.191C419.117 147.505 364.502 92.886 296 88.811V8C296 3.578 292.422 0 288 0S280 3.578 280 8V88.811C211.498 92.886 156.883 147.505 152.809 216.007H72C67.578 216.007 64 219.585 64 224.007S67.578 232.007 72 232.007H152.809C153.99 251.859 159.42 270.411 168.246 287.087L11.703 443.607C4.156 451.154 0 461.217 0 471.952S4.156 492.765 11.703 500.297C19.5 508.094 29.734 512 39.984 512C50.219 512 60.469 508.094 68.266 500.297L224.789 343.69C241.5 352.562 260.094 358.019 280 359.202V440.013C280 444.435 283.578 448.014 288 448.014S296 444.435 296 440.013V359.202C364.502 355.128 419.117 300.509 423.191 232.007H504C508.422 232.007 512 228.429 512 224.007S508.422 216.007 504 216.007ZM56.953 488.984C47.609 498.328 32.359 498.328 23.016 488.984C18.484 484.468 16 478.421 16 471.952C16 465.499 18.484 459.452 23.016 454.92L176.484 301.478C185.707 314.705 197.201 326.197 210.424 335.432L56.953 488.984ZM288 344.01C221.828 344.01 168 290.181 168 224.007S221.828 104.003 288 104.003S408 157.833 408 224.007S354.172 344.01 288 344.01Z" />
    </Icon>
);

export default Mace;