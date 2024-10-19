
import { Icon } from "../../index";

/**
 * A component that renders the `satellite` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/satellite?s=regular satellite}
 * @preview ![satellite](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDIuNzUxIDI2NC45ODRMNDM5LjcxMiAyMDEuOTE0TDQ2My42MjggMTc3Ljk2OUM0ODUuNDU4IDE1Ni4xMDIgNDg1LjQ1OCAxMjAuNTU1IDQ2My42MjggOTguNjg3TDQxMi44OTEgNDcuODc1QzM5MS43NjQgMjYuNzU4IDM1NC44NyAyNi42NiAzMzMuNjgyIDQ3Ljg3NUwzMDkuNzIzIDcxLjg1OUwyNDcuMTQ1IDkuMjVDMjQxLjAyIDMuMzc1IDIzMi44OTcgMCAyMjQuNTI0IDBDMjE2LjAyNCAwIDIwNy44OTkgMy4zNzUgMjAyLjAyNCA5LjI1TDEwNS4yODIgMTA1Ljk5MkM5Mi45MDcgMTE4LjQ5MiA5Mi45MDcgMTM4LjYxNyAxMDUuMjgyIDE1MS4xMTdMMTY3Ljk1OCAyMTMuNzg5TDE2Ny40NDggMjE0LjI5N0MxNTIuMDA5IDIxMC4xMDIgMTM1Ljg1NCAyMDcuNjYgMTE5LjExIDIwNy42NkM3OS40NSAyMDcuNjYgNDEuNjUxIDIyMC4wNTEgOS44MDUgMjQzLjQ1M0M0LjE2NSAyNDcuNjE3IDAuNiAyNTQgMC4wNjkgMjYxLjAwOEMtMC40NjIgMjY3Ljk4NCAyLjA4NyAyNzQuODY3IDcuMDQgMjc5LjgxMkwxMDIuNTMgMzc1LjQxTDU1LjA0MiA0MjIuOTUzQzQ1LjY2NyA0MzIuMzQgNDUuNjY3IDQ0Ny41NDcgNTUuMDQyIDQ1Ni45M0M2NC40MTkgNDY2LjMyIDc5LjYwNiA0NjYuMzIgODguOTgzIDQ1Ni45M0wxMzYuNDcgNDA5LjM5MUwyMzEuOTYyIDUwNC45OTJDMjM2LjkxNSA1MDkuOTY1IDI0My42OTYgNTEyLjMxMyAyNTAuNzYxIDUxMS45NjlDMjU3LjcyOSA1MTEuNDM4IDI2NC4xMzYgNTA3Ljg2NyAyNjguMjc2IDUwMi4yMzRDMjkxLjY2OSA0NzAuMzIgMzA0LjAzIDQzMi40OTYgMzA0LjAzIDM5Mi43ODlDMzA0LjAzIDM3Ni4wMjMgMzAxLjU5MSAzNTkuODQ0IDI5Ny4zOTcgMzQ0LjM5MUwyOTcuOTc1IDM0My44MDlMMzYwLjg4OCA0MDYuNzE5QzM3My4zODggNDE5LjA5NCAzOTMuNTExIDQxOS4wOTQgNDA1Ljg4NiA0MDYuNzE5TDUwMi42MjYgMzA5Ljk3N0M1MDguNjI2IDMwNC4xMDUgNTEyLjAwMSAyOTUuOTggNTEyLjAwMSAyODcuNDhDNTEyLjAwMSAyNzkuMTA1IDUwOC42MjYgMjcwLjk4NCA1MDIuNzUxIDI2NC45ODRaTTE1MC42NTMgMTI4LjQ5MkwyMjQuNTI0IDU0Ljc0NkwyNzUuNyAxMDUuOTIyTDIwMS45MzYgMTc5Ljc3M0wxNTAuNjUzIDEyOC40OTJaTTI0NC4wMDkgNDQ5LjA3OEw2Mi44NzIgMjY3LjczNEM4MC4zODggMjU5LjgyIDk5LjQzNiAyNTUuNzE5IDExOS4xMSAyNTUuNzE5QzE5NC42IDI1NS43MTkgMjU2LjAyNiAzMTcuMTk5IDI1Ni4wMjYgMzkyLjc4OUMyNTYuMDI2IDQxMi40NjkgMjUxLjkxNyA0MzEuNTU1IDI0NC4wMDkgNDQ5LjA3OFpNMjE0LjkwNyAyMzQuNzQyTDM2Ny42MjIgODEuODUyQzM3MS43MTYgNzcuNzg1IDM3NC44NDEgNzcuNzg1IDM3OC45MzQgODEuODUyTDQyOS42ODggMTMyLjY2NEM0MzIuNzk4IDEzNS43OTMgNDMyLjc5OCAxNDAuODU5IDQyOS42ODggMTQzLjk5MkwyNzYuOTc3IDI5Ni44NzlDMjYxLjU0IDI3MS41MTIgMjQwLjI0MyAyNTAuMTg4IDIxNC45MDcgMjM0Ljc0MlpNMzgzLjUxMSAzNjEuMzQ4TDMzMS45NTYgMzA5Ljc4OUw0MDUuNzE4IDIzNS45NDVMNDU3LjI1NSAyODcuNDhMMzgzLjUxMSAzNjEuMzQ4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Satellite: typeof Icon = x => (
    <Icon {...x}>
        <path d="M502.751 264.984L439.712 201.914L463.628 177.969C485.458 156.102 485.458 120.555 463.628 98.687L412.891 47.875C391.764 26.758 354.87 26.66 333.682 47.875L309.723 71.859L247.145 9.25C241.02 3.375 232.897 0 224.524 0C216.024 0 207.899 3.375 202.024 9.25L105.282 105.992C92.907 118.492 92.907 138.617 105.282 151.117L167.958 213.789L167.448 214.297C152.009 210.102 135.854 207.66 119.11 207.66C79.45 207.66 41.651 220.051 9.805 243.453C4.165 247.617 0.6 254 0.069 261.008C-0.462 267.984 2.087 274.867 7.04 279.812L102.53 375.41L55.042 422.953C45.667 432.34 45.667 447.547 55.042 456.93C64.419 466.32 79.606 466.32 88.983 456.93L136.47 409.391L231.962 504.992C236.915 509.965 243.696 512.313 250.761 511.969C257.729 511.438 264.136 507.867 268.276 502.234C291.669 470.32 304.03 432.496 304.03 392.789C304.03 376.023 301.591 359.844 297.397 344.391L297.975 343.809L360.888 406.719C373.388 419.094 393.511 419.094 405.886 406.719L502.626 309.977C508.626 304.105 512.001 295.98 512.001 287.48C512.001 279.105 508.626 270.984 502.751 264.984ZM150.653 128.492L224.524 54.746L275.7 105.922L201.936 179.773L150.653 128.492ZM244.009 449.078L62.872 267.734C80.388 259.82 99.436 255.719 119.11 255.719C194.6 255.719 256.026 317.199 256.026 392.789C256.026 412.469 251.917 431.555 244.009 449.078ZM214.907 234.742L367.622 81.852C371.716 77.785 374.841 77.785 378.934 81.852L429.688 132.664C432.798 135.793 432.798 140.859 429.688 143.992L276.977 296.879C261.54 271.512 240.243 250.188 214.907 234.742ZM383.511 361.348L331.956 309.789L405.718 235.945L457.255 287.48L383.511 361.348Z" />
    </Icon>
);

export default Satellite;