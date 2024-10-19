
import { Icon } from "../../index";

/**
 * A component that renders the `shower` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/shower?s=light shower}
 * @preview ![shower](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNDcuMzEyIDEwMC42ODhDMzQxLjA2MiA5NC40MzggMzMwLjkzNyA5NC40MzggMzI0LjY4OCAxMDAuNjg4TDMxNC4yMzQgMTExLjE0MUwyOTUuOTA2IDkyLjgxM0MyNjEuMzgxIDU4LjI4NyAyMDcuNjMxIDU1LjEwMiAxNjkuMjYgODIuNjM1TDE0My4xODggNTYuNTYyQzEyNy4zNDQgNDAuNzE5IDEwNi4yODEgMzIgODMuODc1IDMyQzM3LjYyNSAzMiAwIDY5LjYyNSAwIDExNS44NzVWNDY0QzAgNDcyLjg0NCA3LjE1NiA0ODAgMTYgNDgwUzMyIDQ3Mi44NDQgMzIgNDY0VjExNS44NzVDMzIgODcuMjgxIDU1LjI2NiA2NCA4My44NzUgNjRDOTcuNzM0IDY0IDExMC43NjYgNjkuNDA2IDEyMC41NjMgNzkuMTg4TDE0Ni42MDIgMTA1LjIyN0MxMzQuNjY4IDEyMS44MTEgMTI4IDE0MS41MjMgMTI4IDE2Mi4zNDRDMTI4IDE4OC42MjUgMTM4LjIzNCAyMTMuMzQ0IDE1Ni44MTIgMjMxLjkwNkwxNzUuMTQxIDI1MC4yMzRMMTY0LjY4OCAyNjAuNjg4QzE1OC40MzggMjY2LjkzOCAxNTguNDM4IDI3Ny4wNjMgMTY0LjY4OCAyODMuMzEyQzE2Ny44MTIgMjg2LjQzOCAxNzEuOTA2IDI4OCAxNzYgMjg4UzE4NC4xODggMjg2LjQzOCAxODcuMzEyIDI4My4zMTJMMzQ3LjMxMiAxMjMuMzEyQzM1My41NjIgMTE3LjA2MiAzNTMuNTYyIDEwNi45MzggMzQ3LjMxMiAxMDAuNjg4Wk0xOTcuNzY2IDIyNy42MDlMMTc5LjQzOCAyMDkuMjgxQzE2Ni45MDYgMTk2Ljc1IDE2MCAxODAuMDk0IDE2MCAxNjIuMzQ0QzE2MCAxNDQuNjI1IDE2Ni45MDYgMTI3Ljk2OSAxNzkuNDM4IDExNS40MzhDMjA1LjI5NyA4OS41OTQgMjQ3LjM5MSA4OS41MzEgMjczLjI4MSAxMTUuNDM4TDI5MS42MDkgMTMzLjc2NkwxOTcuNzY2IDIyNy42MDlaTTI5NiA0MDBDMjgyLjc0NiA0MDAgMjcyIDQxMC43NDQgMjcyIDQyNEMyNzIgNDM3LjI1NCAyODIuNzQ2IDQ0OCAyOTYgNDQ4UzMyMCA0MzcuMjU0IDMyMCA0MjRDMzIwIDQxMC43NDQgMzA5LjI1NCA0MDAgMjk2IDQwMFpNMzUyIDI2NEMzNTIgMjUwLjc0NCAzNDEuMjU0IDI0MCAzMjggMjQwUzMwNCAyNTAuNzQ0IDMwNCAyNjRDMzA0IDI3Ny4yNTQgMzE0Ljc0NiAyODggMzI4IDI4OFMzNTIgMjc3LjI1NCAzNTIgMjY0Wk0yODggMzI4QzI4OCAzMTQuNzQ0IDI3Ny4yNTQgMzA0IDI2NCAzMDRTMjQwIDMxNC43NDQgMjQwIDMyOEMyNDAgMzQxLjI1NCAyNTAuNzQ2IDM1MiAyNjQgMzUyUzI4OCAzNDEuMjU0IDI4OCAzMjhaTTQyNCAyNzJDNDEwLjc0NiAyNzIgNDAwIDI4Mi43NDQgNDAwIDI5NkM0MDAgMzA5LjI1NCA0MTAuNzQ2IDMyMCA0MjQgMzIwUzQ0OCAzMDkuMjU0IDQ0OCAyOTZDNDQ4IDI4Mi43NDQgNDM3LjI1NCAyNzIgNDI0IDI3MlpNNDg4IDIwOEM0NzQuNzQ2IDIwOCA0NjQgMjE4Ljc0NCA0NjQgMjMyQzQ2NCAyNDUuMjU0IDQ3NC43NDYgMjU2IDQ4OCAyNTZTNTEyIDI0NS4yNTQgNTEyIDIzMkM1MTIgMjE4Ljc0NCA1MDEuMjU0IDIwOCA0ODggMjA4Wk00MTYgMjAwQzQxNiAxODYuNzQ0IDQwNS4yNTQgMTc2IDM5MiAxNzZTMzY4IDE4Ni43NDQgMzY4IDIwMEMzNjggMjEzLjI1NCAzNzguNzQ2IDIyNCAzOTIgMjI0UzQxNiAyMTMuMjU0IDQxNiAyMDBaTTM2MCAzMzZDMzQ2Ljc0NiAzMzYgMzM2IDM0Ni43NDQgMzM2IDM2MEMzMzYgMzczLjI1NCAzNDYuNzQ2IDM4NCAzNjAgMzg0UzM4NCAzNzMuMjU0IDM4NCAzNjBDMzg0IDM0Ni43NDQgMzczLjI1NCAzMzYgMzYwIDMzNloiLz48L3N2Zz4=|width=32|height=32)
 */
const Shower: typeof Icon = x => (
    <Icon {...x}>
        <path d="M347.312 100.688C341.062 94.438 330.937 94.438 324.688 100.688L314.234 111.141L295.906 92.813C261.381 58.287 207.631 55.102 169.26 82.635L143.188 56.562C127.344 40.719 106.281 32 83.875 32C37.625 32 0 69.625 0 115.875V464C0 472.844 7.156 480 16 480S32 472.844 32 464V115.875C32 87.281 55.266 64 83.875 64C97.734 64 110.766 69.406 120.563 79.188L146.602 105.227C134.668 121.811 128 141.523 128 162.344C128 188.625 138.234 213.344 156.812 231.906L175.141 250.234L164.688 260.688C158.438 266.938 158.438 277.063 164.688 283.312C167.812 286.438 171.906 288 176 288S184.188 286.438 187.312 283.312L347.312 123.312C353.562 117.062 353.562 106.938 347.312 100.688ZM197.766 227.609L179.438 209.281C166.906 196.75 160 180.094 160 162.344C160 144.625 166.906 127.969 179.438 115.438C205.297 89.594 247.391 89.531 273.281 115.438L291.609 133.766L197.766 227.609ZM296 400C282.746 400 272 410.744 272 424C272 437.254 282.746 448 296 448S320 437.254 320 424C320 410.744 309.254 400 296 400ZM352 264C352 250.744 341.254 240 328 240S304 250.744 304 264C304 277.254 314.746 288 328 288S352 277.254 352 264ZM288 328C288 314.744 277.254 304 264 304S240 314.744 240 328C240 341.254 250.746 352 264 352S288 341.254 288 328ZM424 272C410.746 272 400 282.744 400 296C400 309.254 410.746 320 424 320S448 309.254 448 296C448 282.744 437.254 272 424 272ZM488 208C474.746 208 464 218.744 464 232C464 245.254 474.746 256 488 256S512 245.254 512 232C512 218.744 501.254 208 488 208ZM416 200C416 186.744 405.254 176 392 176S368 186.744 368 200C368 213.254 378.746 224 392 224S416 213.254 416 200ZM360 336C346.746 336 336 346.744 336 360C336 373.254 346.746 384 360 384S384 373.254 384 360C384 346.744 373.254 336 360 336Z" />
    </Icon>
);

export default Shower;