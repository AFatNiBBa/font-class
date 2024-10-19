
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-sleet` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-sleet?s=light cloud-sleet}
 * @preview ![cloud-sleet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NDQgMjE2QzU0NCAxNjAuOTA2IDUwMC45MzggMTE1LjY4OCA0NDYuNjg4IDExMi4yMTlDNDM5LjE1NiA2Ni43NSAzOTkuNTYyIDMyIDM1MiAzMkMzMzMuMDMxIDMyIDMxNC45MDYgMzcuNDY5IDI5OS40MDYgNDcuNjg4QzI3OC42ODggMTguMjE5IDI0NC41OTQgMCAyMDggMEMxNDYuMjUgMCA5NiA1MC4yNSA5NiAxMTJDOTYgMTE0LjcxOSA5Ni4wOTQgMTE3LjQzOCA5Ni4zMTIgMTIwLjE4OEM1Ny44NDQgMTM2LjA2MiAzMiAxNzMuNjU2IDMyIDIxNkMzMiAyNzMuMzQ0IDc4LjY1NiAzMjAgMTM2IDMyMEg0NDBDNDk3LjM0NCAzMjAgNTQ0IDI3My4zNDQgNTQ0IDIxNlpNNjQgMjE2QzY0IDE4My40MDYgODYuMTg4IDE1NC44NzUgMTE3Ljk2OSAxNDYuNjI1QzEyNi4xODcgMTQ0LjQ2OSAxMzEuMzEyIDEzNi4yODEgMTI5LjYyNSAxMjcuOTY5QzEyOC41NjIgMTIyLjc4MSAxMjggMTE3LjQ2OSAxMjggMTEyQzEyOCA2Ny44NzUgMTYzLjg3NSAzMiAyMDggMzJDMjM4Ljk2OSAzMiAyNjcuNDA2IDUwLjMxMiAyODAuNDY5IDc4LjYyNUMyODIuNjU2IDgzLjQwNiAyODcuMDYyIDg2LjgxMiAyOTIuMjUgODcuNjg3QzI5Ny40MzggODguNzgxIDMwMi43MTkgODYuOTM3IDMwNi40MDYgODMuMTU2QzMxOC41NjIgNzAuODEyIDMzNC43NSA2NCAzNTIgNjRDMzg3LjI4MSA2NCA0MTYgOTIuNzE5IDQxNiAxMjhDNDE2IDEzNi44NDQgNDIzLjE1NiAxNDQgNDMyIDE0NEg0NDBDNDc5LjY4OCAxNDQgNTEyIDE3Ni4zMTIgNTEyIDIxNlM0NzkuNjg4IDI4OCA0NDAgMjg4SDEzNkM5Ni4zMTIgMjg4IDY0IDI1NS42ODggNjQgMjE2Wk0xMTkuMTU2IDM1My42ODhDMTExLjI1IDM0OS43NSAxMDEuNjg4IDM1Mi45NjkgOTcuNjg4IDM2MC44NDRMMzMuNjg4IDQ4OC44NDRDMjkuNzUgNDk2Ljc1IDMyLjkzOCA1MDYuMzQ0IDQwLjg0NCA1MTAuMzEyQzQzLjE1NiA1MTEuNDY5IDQ1LjU5NCA1MTIgNDggNTEyQzUzLjg0NCA1MTIgNTkuNSA1MDguNzUgNjIuMzEyIDUwMy4xNTZMMTI2LjMxMiAzNzUuMTU2QzEzMC4yNSAzNjcuMjUgMTI3LjA2MiAzNTcuNjU2IDExOS4xNTYgMzUzLjY4OFpNMzc1LjE1NiAzNTMuNjg4QzM2Ny4yODEgMzQ5Ljc1IDM1Ny42NTYgMzUyLjk2OSAzNTMuNjg4IDM2MC44NDRMMjg5LjY4OCA0ODguODQ0QzI4NS43NSA0OTYuNzUgMjg4LjkzOCA1MDYuMzQ0IDI5Ni44NDQgNTEwLjMxMkMyOTkuMTU2IDUxMS40NjkgMzAxLjU5NCA1MTIgMzA0IDUxMkMzMDkuODQ0IDUxMiAzMTUuNSA1MDguNzUgMzE4LjMxMiA1MDMuMTU2TDM4Mi4zMTIgMzc1LjE1NkMzODYuMjUgMzY3LjI1IDM4My4wNjIgMzU3LjY1NiAzNzUuMTU2IDM1My42ODhaTTUxOS40MDYgMzg0QzUxNSAzNzYuMzEyIDUwNS4xODggMzczLjcxOSA0OTcuNTYyIDM3OC4xNTZMNDgwIDM4OC4yOTdWMzY4QzQ4MCAzNTkuMTU2IDQ3Mi44NDQgMzUyIDQ2NCAzNTJTNDQ4IDM1OS4xNTYgNDQ4IDM2OFYzODguMjk3TDQzMC40MzggMzc4LjE1NkM0MjIuODEyIDM3My43NSA0MTMgMzc2LjM0NCA0MDguNTk0IDM4NEM0MDQuMTU2IDM5MS42NTYgNDA2Ljc4MSA0MDEuNDM4IDQxNC40MzggNDA1Ljg0NEw0MzIuMDI1IDQxNkw0MTQuNDM4IDQyNi4xNTZDNDA2Ljc4MSA0MzAuNTYyIDQwNC4xNTYgNDQwLjM0NCA0MDguNTk0IDQ0OEM0MTEuNTMxIDQ1My4xMjUgNDE2LjkzOCA0NTYgNDIyLjQzOCA0NTZDNDI1LjE1NiA0NTYgNDI3LjkwNiA0NTUuMzEyIDQzMC40MzggNDUzLjg0NEw0NDggNDQzLjcwM1Y0NjRDNDQ4IDQ3Mi44NDQgNDU1LjE1NiA0ODAgNDY0IDQ4MFM0ODAgNDcyLjg0NCA0ODAgNDY0VjQ0My43MDNMNDk3LjU2MiA0NTMuODQ0QzUwMC4wOTQgNDU1LjMxMiA1MDIuODQ0IDQ1NiA1MDUuNTYyIDQ1NkM1MTEuMDYyIDQ1NiA1MTYuNDY5IDQ1My4xMjUgNTE5LjQwNiA0NDhDNTIzLjg0NCA0NDAuMzQ0IDUyMS4yMTkgNDMwLjU2MiA1MTMuNTYyIDQyNi4xNTZMNDk1Ljk3NSA0MTZMNTEzLjU2MiA0MDUuODQ0QzUyMS4yMTkgNDAxLjQzOCA1MjMuODQ0IDM5MS42NTYgNTE5LjQwNiAzODRaTTI2My40MDYgMzg0QzI1OSAzNzYuMzEyIDI0OS4xODggMzczLjcxOSAyNDEuNTYyIDM3OC4xNTZMMjI0IDM4OC4yOTdWMzY4QzIyNCAzNTkuMTU2IDIxNi44NDQgMzUyIDIwOCAzNTJTMTkyIDM1OS4xNTYgMTkyIDM2OFYzODguMjk3TDE3NC40MzggMzc4LjE1NkMxNjYuODEyIDM3My43NSAxNTcgMzc2LjM0NCAxNTIuNTk0IDM4NEMxNDguMTU2IDM5MS42NTYgMTUwLjc4MSA0MDEuNDM4IDE1OC40MzggNDA1Ljg0NEwxNzYuMDI1IDQxNkwxNTguNDM4IDQyNi4xNTZDMTUwLjc4MSA0MzAuNTYyIDE0OC4xNTYgNDQwLjM0NCAxNTIuNTk0IDQ0OEMxNTUuNTMxIDQ1My4xMjUgMTYwLjkzOCA0NTYgMTY2LjQzOCA0NTZDMTY5LjE1NiA0NTYgMTcxLjkwNiA0NTUuMzEyIDE3NC40MzggNDUzLjg0NEwxOTIgNDQzLjcwM1Y0NjRDMTkyIDQ3Mi44NDQgMTk5LjE1NiA0ODAgMjA4IDQ4MFMyMjQgNDcyLjg0NCAyMjQgNDY0VjQ0My43MDNMMjQxLjU2MiA0NTMuODQ0QzI0NC4wOTQgNDU1LjMxMiAyNDYuODQ0IDQ1NiAyNDkuNTYyIDQ1NkMyNTUuMDYyIDQ1NiAyNjAuNDY5IDQ1My4xMjUgMjYzLjQwNiA0NDhDMjY3Ljg0NCA0NDAuMzQ0IDI2NS4yMTkgNDMwLjU2MiAyNTcuNTYyIDQyNi4xNTZMMjM5Ljk3NSA0MTZMMjU3LjU2MiA0MDUuODQ0QzI2NS4yMTkgNDAxLjQzOCAyNjcuODQ0IDM5MS42NTYgMjYzLjQwNiAzODRaIi8+PC9zdmc+|width=32|height=32)
 */
const CloudSleet: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M544 216C544 160.906 500.938 115.688 446.688 112.219C439.156 66.75 399.562 32 352 32C333.031 32 314.906 37.469 299.406 47.688C278.688 18.219 244.594 0 208 0C146.25 0 96 50.25 96 112C96 114.719 96.094 117.438 96.312 120.188C57.844 136.062 32 173.656 32 216C32 273.344 78.656 320 136 320H440C497.344 320 544 273.344 544 216ZM64 216C64 183.406 86.188 154.875 117.969 146.625C126.187 144.469 131.312 136.281 129.625 127.969C128.562 122.781 128 117.469 128 112C128 67.875 163.875 32 208 32C238.969 32 267.406 50.312 280.469 78.625C282.656 83.406 287.062 86.812 292.25 87.687C297.438 88.781 302.719 86.937 306.406 83.156C318.562 70.812 334.75 64 352 64C387.281 64 416 92.719 416 128C416 136.844 423.156 144 432 144H440C479.688 144 512 176.312 512 216S479.688 288 440 288H136C96.312 288 64 255.688 64 216ZM119.156 353.688C111.25 349.75 101.688 352.969 97.688 360.844L33.688 488.844C29.75 496.75 32.938 506.344 40.844 510.312C43.156 511.469 45.594 512 48 512C53.844 512 59.5 508.75 62.312 503.156L126.312 375.156C130.25 367.25 127.062 357.656 119.156 353.688ZM375.156 353.688C367.281 349.75 357.656 352.969 353.688 360.844L289.688 488.844C285.75 496.75 288.938 506.344 296.844 510.312C299.156 511.469 301.594 512 304 512C309.844 512 315.5 508.75 318.312 503.156L382.312 375.156C386.25 367.25 383.062 357.656 375.156 353.688ZM519.406 384C515 376.312 505.188 373.719 497.562 378.156L480 388.297V368C480 359.156 472.844 352 464 352S448 359.156 448 368V388.297L430.438 378.156C422.812 373.75 413 376.344 408.594 384C404.156 391.656 406.781 401.438 414.438 405.844L432.025 416L414.438 426.156C406.781 430.562 404.156 440.344 408.594 448C411.531 453.125 416.938 456 422.438 456C425.156 456 427.906 455.312 430.438 453.844L448 443.703V464C448 472.844 455.156 480 464 480S480 472.844 480 464V443.703L497.562 453.844C500.094 455.312 502.844 456 505.562 456C511.062 456 516.469 453.125 519.406 448C523.844 440.344 521.219 430.562 513.562 426.156L495.975 416L513.562 405.844C521.219 401.438 523.844 391.656 519.406 384ZM263.406 384C259 376.312 249.188 373.719 241.562 378.156L224 388.297V368C224 359.156 216.844 352 208 352S192 359.156 192 368V388.297L174.438 378.156C166.812 373.75 157 376.344 152.594 384C148.156 391.656 150.781 401.438 158.438 405.844L176.025 416L158.438 426.156C150.781 430.562 148.156 440.344 152.594 448C155.531 453.125 160.938 456 166.438 456C169.156 456 171.906 455.312 174.438 453.844L192 443.703V464C192 472.844 199.156 480 208 480S224 472.844 224 464V443.703L241.562 453.844C244.094 455.312 246.844 456 249.562 456C255.062 456 260.469 453.125 263.406 448C267.844 440.344 265.219 430.562 257.562 426.156L239.975 416L257.562 405.844C265.219 401.438 267.844 391.656 263.406 384Z" />
    </Icon>
);

export default CloudSleet;