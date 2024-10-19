
import { Icon } from "../../index";

/**
 * A component that renders the `certificate` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/certificate?s=light certificate}
 * @preview ![certificate](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTUuNzg2IDI3Mi4yNjJMNDc5LjAzMyAyNTUuODg3TDQ5NS43ODYgMjM5LjYzN0M1MjUuNzkgMjEwLjc2MSA1MTIuMDM4IDE2MC4wMSA0NzEuOTA3IDE1MC4yNTlMNDQ5LjE1NCAxNDQuMzg0TDQ1NS42NTUgMTIxLjc1OUM0NjYuOTA2IDgxLjc1OCA0MjkuNTI2IDQ1LjI1NyAzOTAuMTQ1IDU2LjI1N0wzNjcuNTE3IDYyLjc1N0wzNjEuNzY2IDM5Ljg4MkMzNTEuODg5IDAuMDA2IDMwMC44ODIgLTEzLjc0NCAyNzIuMjUyIDE2LjEzMUwyNTYgMzIuODgyTDIzOS43NDggMTYuMTMxQzIxMS4zNjggLTEzLjQ5NCAxNjAuMTExIC0wLjM2OSAxNTAuMjM0IDM5Ljg4MkwxNDQuNDgzIDYyLjc1N0wxMjEuODU1IDU2LjI1N0M4Mi41OTkgNDUuMjU3IDQ1LjA5NCA4MS41MDggNTYuMzQ1IDEyMS43NTlMNjIuODQ2IDE0NC4zODRMNDAuMDkzIDE1MC4yNTlDLTAuMDM4IDE2MC4wMSAtMTMuNzkgMjEwLjc2MSAxNi4yMTQgMjM5LjYzN0wzMi45NjcgMjU1Ljg4N0wxNi4yMTQgMjcyLjI2MkMtMTMuNzkgMzAxLjEzOCAtMC4wMzggMzUxLjg4OSA0MC4wOTMgMzYxLjY0TDYyLjg0NiAzNjcuNTE1TDU2LjM0NSAzOTAuMTRDNDUuMDk0IDQzMC4zOTEgODIuNTk5IDQ2Ni42NDIgMTIxLjg1NSA0NTUuNjQyTDE0NC40ODMgNDQ5LjE0MkwxNTAuMjM0IDQ3MS44OTJDMTYwLjIzNiA1MTIuNTE4IDIxMS4xMTggNTI1LjUxOCAyMzkuNjIzIDQ5NS43NjhMMjU2IDQ3OS4wMTdMMjcyLjI1MiA0OTUuNjQzQzMwMC41MDcgNTI1LjY0MyAzNTEuNzY0IDUxMi4zOTMgMzYxLjc2NiA0NzEuODkyTDM2Ny41MTcgNDQ5LjE0MkwzOTAuMTQ1IDQ1NS42NDJDNDI5LjY1MSA0NjYuNzY3IDQ2Ni43ODEgNDMwLjE0MSA0NTUuNjU1IDM5MC4xNEw0NDkuMTU0IDM2Ny41MTVMNDcxLjkwNyAzNjEuNjRDNTEyLjAzOCAzNTEuODg5IDUyNS43OSAzMDEuMTM4IDQ5NS43ODYgMjcyLjI2MlpNNDY0LjI4MSAzMzAuNjM5TDQwOS4zOTggMzQ0LjYzOUw0MjQuOSAzOTguODlDNDI5LjI3NiA0MTQuNTE2IDQxNC41MjQgNDI5LjI2NiAzOTguODk2IDQyNC44OTFMMzQ0LjYzOCA0MDkuMzkxTDMzMC42MzYgNDY0LjI2N0MzMjYuODg2IDQ4MC4xNDIgMzA2LjI1NyA0ODUuMzkyIDI5NS4zODEgNDczLjUxN0wyNTYgNDMzLjI2NkwyMTYuNjE5IDQ3My41MTdDMjA1LjYxNyA0ODUuMjY3IDE4NS4yMzkgNDgwLjUxNyAxODEuMzY0IDQ2NC4yNjdMMTY3LjM2MiA0MDkuMzkxTDExMy4xMDQgNDI0Ljg5MUM5Ny40NzYgNDI5LjI2NiA4Mi43MjQgNDE0LjUxNiA4Ny4xIDM5OC44OUwxMDIuNjAyIDM0NC42MzlMNDcuNzE5IDMzMC42MzlDMzIuMDkyIDMyNi44ODkgMjYuNDY2IDMwNi42MzggMzguNDY4IDI5NS4yNjNMNzguNzI0IDI1NS44ODdMMzguNDY4IDIxNi41MTFDMjYuNDY2IDIwNS4yNjEgMzEuOTY3IDE4NS4wMSA0Ny43MTkgMTgxLjI2TDEwMi42MDIgMTY3LjI2TDg3LjEgMTEzLjAwOUM4Mi43MjQgOTcuMzgzIDk3LjQ3NiA4Mi42MzMgMTEzLjEwNCA4Ny4wMDhMMTY3LjM2MiAxMDIuNTA4TDE4MS4zNjQgNDcuNjMyQzE4NS4xMTQgMzIuMDA3IDIwNS42MTcgMjYuNjMyIDIxNi42MTkgMzguMzgyTDI1NiA3OC44ODNMMjk1LjM4MSAzOC4zODJDMzA2LjUwOCAyNi41MDcgMzI3LjAxMSAzMi4xMzIgMzMwLjYzNiA0Ny42MzJMMzQ0LjYzOCAxMDIuNTA4TDM5OC44OTYgODcuMDA4QzQxNC41MjQgODIuNjMzIDQyOS4yNzYgOTcuMzgzIDQyNC45IDExMy4wMDlMNDA5LjM5OCAxNjcuMjZMNDY0LjI4MSAxODEuMjZDNDc5LjkwOCAxODUuMDEgNDg1LjUzNCAyMDUuMjYxIDQ3My41MzIgMjE2LjUxMUw0MzMuMjc2IDI1NS44ODdMNDczLjUzMiAyOTUuMjYzQzQ4NS41MzQgMzA2LjYzOCA0ODAuMDMzIDMyNi44ODkgNDY0LjI4MSAzMzAuNjM5WiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Certificate: typeof Icon = x => (
    <Icon {...x}>
        <path d="M495.786 272.262L479.033 255.887L495.786 239.637C525.79 210.761 512.038 160.01 471.907 150.259L449.154 144.384L455.655 121.759C466.906 81.758 429.526 45.257 390.145 56.257L367.517 62.757L361.766 39.882C351.889 0.006 300.882 -13.744 272.252 16.131L256 32.882L239.748 16.131C211.368 -13.494 160.111 -0.369 150.234 39.882L144.483 62.757L121.855 56.257C82.599 45.257 45.094 81.508 56.345 121.759L62.846 144.384L40.093 150.259C-0.038 160.01 -13.79 210.761 16.214 239.637L32.967 255.887L16.214 272.262C-13.79 301.138 -0.038 351.889 40.093 361.64L62.846 367.515L56.345 390.14C45.094 430.391 82.599 466.642 121.855 455.642L144.483 449.142L150.234 471.892C160.236 512.518 211.118 525.518 239.623 495.768L256 479.017L272.252 495.643C300.507 525.643 351.764 512.393 361.766 471.892L367.517 449.142L390.145 455.642C429.651 466.767 466.781 430.141 455.655 390.14L449.154 367.515L471.907 361.64C512.038 351.889 525.79 301.138 495.786 272.262ZM464.281 330.639L409.398 344.639L424.9 398.89C429.276 414.516 414.524 429.266 398.896 424.891L344.638 409.391L330.636 464.267C326.886 480.142 306.257 485.392 295.381 473.517L256 433.266L216.619 473.517C205.617 485.267 185.239 480.517 181.364 464.267L167.362 409.391L113.104 424.891C97.476 429.266 82.724 414.516 87.1 398.89L102.602 344.639L47.719 330.639C32.092 326.889 26.466 306.638 38.468 295.263L78.724 255.887L38.468 216.511C26.466 205.261 31.967 185.01 47.719 181.26L102.602 167.26L87.1 113.009C82.724 97.383 97.476 82.633 113.104 87.008L167.362 102.508L181.364 47.632C185.114 32.007 205.617 26.632 216.619 38.382L256 78.883L295.381 38.382C306.508 26.507 327.011 32.132 330.636 47.632L344.638 102.508L398.896 87.008C414.524 82.633 429.276 97.383 424.9 113.009L409.398 167.26L464.281 181.26C479.908 185.01 485.534 205.261 473.532 216.511L433.276 255.887L473.532 295.263C485.534 306.638 480.033 326.889 464.281 330.639Z" />
    </Icon>
);

export default Certificate;