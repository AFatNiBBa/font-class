
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `snow-blowing` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/snow-blowing?s=light snow-blowing}
 * @preview ![snow-blowing](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNDEuODU3IDE2MEMzMzcuNDE2IDE1Mi4zNDQgMzI3LjY0NCAxNDkuNjU2IDMyMC4wNTQgMTU0LjE1NkwyODQuMzA0IDE3NC44NDhMMjkxLjg2MSAxNDYuNTYzQzI5NC4xMzcgMTM4LjAzMSAyODkuMDg2IDEyOS4yODEgMjgwLjU3NiAxMjYuOTY5QzI3Mi4wOTcgMTI0LjkwNiAyNjMuMzI0IDEyOS43ODEgMjYxLjAzMyAxMzguMzEyTDI0NS4yMjIgMTk3LjQ3MUwxOTEuOTU5IDIyOC4zMDFWMTY2LjYyNUwyMzUuMTYyIDEyMy4zMTJDMjQxLjM5NiAxMTcuMDYyIDI0MS4zOTYgMTA2LjkzNyAyMzUuMTYyIDEwMC42ODhTMjE4LjgyOCA5NC40MzggMjEyLjU5NCAxMDAuNjg4TDE5MS45NTkgMTIxLjM3NVY4MEMxOTEuOTU5IDcxLjE1NiAxODQuODIgNjQgMTc2IDY0UzE2MC4wNDEgNzEuMTU2IDE2MC4wNDEgODBWMTIxLjM3NUwxMzkuNDA2IDEwMC42ODhDMTMzLjE3MiA5NC40MzggMTIzLjA3MiA5NC40MzggMTE2LjgzOCAxMDAuNjg4UzExMC42MDMgMTE3LjA2MyAxMTYuODM4IDEyMy4zMTJMMTYwLjA0MSAxNjYuNjI1VjIyOC4zMDFMMTA2Ljc3NyAxOTcuNDcxTDkwLjk2NyAxMzguMzEyQzg4LjcwNyAxMjkuNzgxIDc5Ljk0OSAxMjQuODc1IDcxLjQyNCAxMjYuOTY5QzYyLjkxNCAxMjkuMjgxIDU3Ljg2MyAxMzguMDMxIDYwLjEzOCAxNDYuNTYyTDY3LjY5NSAxNzQuODQ4TDMxLjk0NSAxNTQuMTU2QzI0LjMwOCAxNDkuNjU2IDE0LjUzNyAxNTIuMzQ0IDEwLjE0MiAxNjBDNS43MzIgMTY3LjY1NiA4LjM0OSAxNzcuNDM4IDE1Ljk4NiAxODEuODQ0TDUxLjczIDIwMi41MzNMMjMuNTQ1IDIxMC4wOTRDMTUuMDM1IDIxMi40MDYgOS45ODYgMjIxLjE1NiAxMi4yNjIgMjI5LjY4OEMxNC4xNjIgMjM2Ljg0NCAyMC42MTUgMjQxLjU2MyAyNy42NiAyNDEuNTYzQzI5LjAzMSAyNDEuNTYzIDMwLjQxOCAyNDEuMzc1IDMxLjgwNCAyNDEuMDMxTDkwLjgzMiAyMjUuMTY2TDE0NC4xMDMgMjU2TDkwLjgzMiAyODYuODM0TDMxLjgwNCAyNzAuOTY5QzIzLjM1NyAyNjguOTA2IDE0LjUzNyAyNzMuNzgxIDEyLjI2MiAyODIuMzEyUzE1LjAzNSAyOTkuNTk0IDIzLjU0NSAzMDEuOTA2TDUxLjczIDMwOS40NjdMMTUuOTg2IDMzMC4xNTZDOC4zNDkgMzM0LjU2MiA1LjczMiAzNDQuMzQ0IDEwLjE0MiAzNTJDMTMuMTAzIDM1Ny4xMjUgMTguNDY1IDM2MCAyMy45ODIgMzYwQzI2LjY5MyAzNjAgMjkuNDM3IDM1OS4zMTIgMzEuOTQ1IDM1Ny44NDRMNjcuNjk1IDMzNy4xNTJMNjAuMTM4IDM2NS40MzhDNTcuODYzIDM3My45NjkgNjIuOTE0IDM4Mi43MTkgNzEuNDI0IDM4NS4wMzFDNzIuODEgMzg1LjM3NSA3NC4xOTcgMzg1LjU2MyA3NS41NjggMzg1LjU2M0M4Mi42MTMgMzg1LjU2MyA4OS4wNjYgMzgwLjg0NCA5MC45NjcgMzczLjY4OEwxMDYuNzc3IDMxNC41MjlMMTYwLjA0MSAyODMuNjk5VjM0NS4zNzVMMTE2LjgzOCAzODguNjg4QzExMC42MDMgMzk0LjkzOCAxMTAuNjAzIDQwNS4wNjMgMTE2LjgzOCA0MTEuMzEyUzEzMy4xNzIgNDE3LjU2MiAxMzkuNDA2IDQxMS4zMTJMMTYwLjA0MSAzOTAuNjI1VjQzMkMxNjAuMDQxIDQ0MC44NDQgMTY3LjE3OSA0NDggMTc2IDQ0OFMxOTEuOTU5IDQ0MC44NDQgMTkxLjk1OSA0MzJWMzkwLjYyNUwyMTIuNTk0IDQxMS4zMTJDMjE1LjcxMSA0MTQuNDM4IDIxOS43OTUgNDE2IDIyMy44NzcgNDE2QzIyNy45NjEgNDE2IDIzMi4wNDUgNDE0LjQzOCAyMzUuMTYyIDQxMS4zMTJDMjQxLjM5NiA0MDUuMDYyIDI0MS4zOTYgMzk0LjkzNyAyMzUuMTYyIDM4OC42ODhMMTkxLjk1OSAzNDUuMzc1VjI4My42OTlMMjQ1LjIyMiAzMTQuNTI5TDI2MS4wMzMgMzczLjY4N0MyNjIuOTMzIDM4MC44NDQgMjY5LjM4NyAzODUuNTYyIDI3Ni40MzEgMzg1LjU2MkMyNzcuODAzIDM4NS41NjIgMjc5LjE4OSAzODUuMzc1IDI4MC41NzYgMzg1LjAzMUMyODkuMDg2IDM4Mi43MTkgMjk0LjEzNyAzNzMuOTY5IDI5MS44NjEgMzY1LjQzN0wyODQuMzA0IDMzNy4xNTJMMzIwLjA1NCAzNTcuODQ0QzMyMi41NjIgMzU5LjMxMiAzMjUuMzA2IDM2MCAzMjguMDE3IDM2MEMzMzMuNTM1IDM2MCAzMzguODk2IDM1Ny4xMjUgMzQxLjg1NyAzNTJDMzQ2LjI2NyAzNDQuMzQ0IDM0My42NSAzMzQuNTYyIDMzNi4wMTMgMzMwLjE1NkwzMDAuMjY5IDMwOS40NjdMMzI4LjQ1NSAzMDEuOTA2QzMzNi45NjUgMjk5LjU5NCAzNDIuMDEzIDI5MC44NDQgMzM5LjczOCAyODIuMzEyUzMyOC43MDMgMjY4LjkwNiAzMjAuMTk1IDI3MC45NjlMMjYxLjE2OCAyODYuODM0TDIwNy44OTYgMjU2TDI2MS4xNjggMjI1LjE2NkwzMjAuMTk1IDI0MS4wMzFDMzIxLjU4MiAyNDEuMzc1IDMyMi45NjkgMjQxLjU2MyAzMjQuMzQgMjQxLjU2M0MzMzEuMzg1IDI0MS41NjMgMzM3LjgzOCAyMzYuODQ0IDMzOS43MzggMjI5LjY4OEMzNDIuMDEzIDIyMS4xNTYgMzM2Ljk2NSAyMTIuNDA2IDMyOC40NTUgMjEwLjA5NEwzMDAuMjY5IDIwMi41MzNMMzM2LjAxMyAxODEuODQ0QzM0My42NSAxNzcuNDM4IDM0Ni4yNjcgMTY3LjY1NiAzNDEuODU3IDE2MFpNNDAwIDIyNEg1NjBDNjA0LjEwOSAyMjQgNjQwIDE4OC4xMjUgNjQwIDE0NFM2MDQuMTA5IDY0IDU2MCA2NEg1MjhDNTE5LjE1NiA2NCA1MTIgNzEuMTU2IDUxMiA4MFM1MTkuMTU2IDk2IDUyOCA5Nkg1NjBDNTg2LjQ2OSA5NiA2MDggMTE3LjUzMSA2MDggMTQ0UzU4Ni40NjkgMTkyIDU2MCAxOTJINDAwQzM5MS4xNTYgMTkyIDM4NCAxOTkuMTU2IDM4NCAyMDhTMzkxLjE1NiAyMjQgNDAwIDIyNFpNNTYwIDI4OEg0MDBDMzkxLjE1NiAyODggMzg0IDI5NS4xNTYgMzg0IDMwNFMzOTEuMTU2IDMyMCA0MDAgMzIwSDU2MEM1ODYuNDY5IDMyMCA2MDggMzQxLjUzMSA2MDggMzY4UzU4Ni40NjkgNDE2IDU2MCA0MTZINTI4QzUxOS4xNTYgNDE2IDUxMiA0MjMuMTU2IDUxMiA0MzJTNTE5LjE1NiA0NDggNTI4IDQ0OEg1NjBDNjA0LjEwOSA0NDggNjQwIDQxMi4xMjUgNjQwIDM2OFM2MDQuMTA5IDI4OCA1NjAgMjg4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SnowBlowing(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M341.857 160C337.416 152.344 327.644 149.656 320.054 154.156L284.304 174.848L291.861 146.563C294.137 138.031 289.086 129.281 280.576 126.969C272.097 124.906 263.324 129.781 261.033 138.312L245.222 197.471L191.959 228.301V166.625L235.162 123.312C241.396 117.062 241.396 106.937 235.162 100.688S218.828 94.438 212.594 100.688L191.959 121.375V80C191.959 71.156 184.82 64 176 64S160.041 71.156 160.041 80V121.375L139.406 100.688C133.172 94.438 123.072 94.438 116.838 100.688S110.603 117.063 116.838 123.312L160.041 166.625V228.301L106.777 197.471L90.967 138.312C88.707 129.781 79.949 124.875 71.424 126.969C62.914 129.281 57.863 138.031 60.138 146.562L67.695 174.848L31.945 154.156C24.308 149.656 14.537 152.344 10.142 160C5.732 167.656 8.349 177.438 15.986 181.844L51.73 202.533L23.545 210.094C15.035 212.406 9.986 221.156 12.262 229.688C14.162 236.844 20.615 241.563 27.66 241.563C29.031 241.563 30.418 241.375 31.804 241.031L90.832 225.166L144.103 256L90.832 286.834L31.804 270.969C23.357 268.906 14.537 273.781 12.262 282.312S15.035 299.594 23.545 301.906L51.73 309.467L15.986 330.156C8.349 334.562 5.732 344.344 10.142 352C13.103 357.125 18.465 360 23.982 360C26.693 360 29.437 359.312 31.945 357.844L67.695 337.152L60.138 365.438C57.863 373.969 62.914 382.719 71.424 385.031C72.81 385.375 74.197 385.563 75.568 385.563C82.613 385.563 89.066 380.844 90.967 373.688L106.777 314.529L160.041 283.699V345.375L116.838 388.688C110.603 394.938 110.603 405.063 116.838 411.312S133.172 417.562 139.406 411.312L160.041 390.625V432C160.041 440.844 167.179 448 176 448S191.959 440.844 191.959 432V390.625L212.594 411.312C215.711 414.438 219.795 416 223.877 416C227.961 416 232.045 414.438 235.162 411.312C241.396 405.062 241.396 394.937 235.162 388.688L191.959 345.375V283.699L245.222 314.529L261.033 373.687C262.933 380.844 269.387 385.562 276.431 385.562C277.803 385.562 279.189 385.375 280.576 385.031C289.086 382.719 294.137 373.969 291.861 365.437L284.304 337.152L320.054 357.844C322.562 359.312 325.306 360 328.017 360C333.535 360 338.896 357.125 341.857 352C346.267 344.344 343.65 334.562 336.013 330.156L300.269 309.467L328.455 301.906C336.965 299.594 342.013 290.844 339.738 282.312S328.703 268.906 320.195 270.969L261.168 286.834L207.896 256L261.168 225.166L320.195 241.031C321.582 241.375 322.969 241.563 324.34 241.563C331.385 241.563 337.838 236.844 339.738 229.688C342.013 221.156 336.965 212.406 328.455 210.094L300.269 202.533L336.013 181.844C343.65 177.438 346.267 167.656 341.857 160ZM400 224H560C604.109 224 640 188.125 640 144S604.109 64 560 64H528C519.156 64 512 71.156 512 80S519.156 96 528 96H560C586.469 96 608 117.531 608 144S586.469 192 560 192H400C391.156 192 384 199.156 384 208S391.156 224 400 224ZM560 288H400C391.156 288 384 295.156 384 304S391.156 320 400 320H560C586.469 320 608 341.531 608 368S586.469 416 560 416H528C519.156 416 512 423.156 512 432S519.156 448 528 448H560C604.109 448 640 412.125 640 368S604.109 288 560 288Z" />
        </Icon>
    </>
}