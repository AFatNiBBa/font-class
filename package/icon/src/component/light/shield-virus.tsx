
import { Icon } from "../../index";

/**
 * A component that renders the `shield-virus` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/shield-virus?s=light shield-virus}
 * @preview ![shield-virus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNzIgMjQwQzI2My4xNjQgMjQwIDI1NiAyNDcuMTY0IDI1NiAyNTZTMjYzLjE2NCAyNzIgMjcyIDI3MlMyODggMjY0LjgzNiAyODggMjU2UzI4MC44MzYgMjQwIDI3MiAyNDBaTTM4NCAyMjRIMzcxLjg3OUMzNTIuNTkgMjI0IDMzOS44MTYgMjA4LjIxOSAzMzkuODE2IDE5MS43NjlDMzM5LjgxNiAxODMuOTA4IDM0Mi43MzMgMTc1Ljg5MyAzNDkuMjUyIDE2OS4zNzVMMzU3LjgyOCAxNjAuNzk3QzM2MC45NTMgMTU3LjY3MiAzNjIuNTE2IDE1My41NzggMzYyLjUxNiAxNDkuNDg0QzM2Mi41MTYgMTQwLjk1OCAzNTUuNjUgMTMzLjQ4NCAzNDYuNTE2IDEzMy40ODRDMzQyLjQyMiAxMzMuNDg0IDMzOC4zMjggMTM1LjA0NyAzMzUuMjAzIDEzOC4xNzJMMzI2LjYyNyAxNDYuNzVDMzIwLjEwNyAxNTMuMjY2IDMxMi4wOTYgMTU2LjE4NCAzMDQuMjMyIDE1Ni4xODRDMjg3Ljc4MyAxNTYuMTg0IDI3MiAxNDMuNDA2IDI3MiAxMjQuMTE3VjExMkMyNzIgMTAzLjE1NiAyNjQuODQ0IDk2IDI1NiA5NlMyNDAgMTAzLjE1NiAyNDAgMTEyVjEyNC4xMTdDMjQwIDE0My40MSAyMjQuMjE5IDE1Ni4xODQgMjA3Ljc2OCAxNTYuMTg0QzE5OS45MDYgMTU2LjE4NCAxOTEuODkzIDE1My4yNjYgMTg1LjM3MyAxNDYuNzVMMTc2Ljc5NyAxMzguMTcyQzE3My42NzIgMTM1LjA0NyAxNjkuNTc4IDEzMy40ODQgMTY1LjQ4NCAxMzMuNDg0QzE1Ni4zNDUgMTMzLjQ4NCAxNDkuNDg0IDE0MC45NTggMTQ5LjQ4NCAxNDkuNDg0QzE0OS40ODQgMTUzLjU3OCAxNTEuMDQ3IDE1Ny42NzIgMTU0LjE3MiAxNjAuNzk3TDE2Mi43NDggMTY5LjM3NUMxNjkuMjY3IDE3NS44OTMgMTcyLjE4NCAxODMuOTA4IDE3Mi4xODQgMTkxLjc2OUMxNzIuMTg0IDIwOC4yMTkgMTU5LjQxIDIyNCAxNDAuMTIxIDIyNEgxMjhDMTE5LjE1NiAyMjQgMTEyIDIzMS4xNTYgMTEyIDI0MFMxMTkuMTU2IDI1NiAxMjggMjU2SDE0MC4xMjFDMTU5LjQxIDI1NiAxNzIuMTg0IDI3MS43ODEgMTcyLjE4NCAyODguMjMxQzE3Mi4xODQgMjk2LjA5MiAxNjkuMjY3IDMwNC4xMDcgMTYyLjc0OCAzMTAuNjI1TDE1NC4xNzIgMzE5LjIwM0MxNTEuMDQ3IDMyMi4zMjggMTQ5LjQ4NCAzMjYuNDIyIDE0OS40ODQgMzMwLjUxNkMxNDkuNDg0IDMzOS4wNDIgMTU2LjM1IDM0Ni41MTYgMTY1LjQ4NCAzNDYuNTE2QzE2OS41NzggMzQ2LjUxNiAxNzMuNjcyIDM0NC45NTMgMTc2Ljc5NyAzNDEuODI4TDE4NS4zNzMgMzMzLjI1QzE5MS44ODggMzI2LjczOSAxOTkuODk2IDMyMy44MTYgMjA3Ljc1NCAzMjMuODE2QzIxNC41NDcgMzIzLjgxNiAyNDAgMzI4Ljk3MiAyNDAgMzU1Ljg3OVYzNjhDMjQwIDM3Ni44NDQgMjQ3LjE1NiAzODQgMjU2IDM4NFMyNzIgMzc2Ljg0NCAyNzIgMzY4VjM1NS44NzlDMjcyIDMzNi41OTMgMjg3Ljc3NiAzMjMuODE2IDMwNC4yMjUgMzIzLjgxNkMzMDQuMjI3IDMyMy44MTYgMzA0LjIzIDMyMy44MTYgMzA0LjIzMiAzMjMuODE2QzMxMi4wOTQgMzIzLjgxNiAzMjAuMTA5IDMyNi43MzQgMzI2LjYyNyAzMzMuMjVMMzM1LjIwMyAzNDEuODI4QzMzOC4zMjggMzQ0Ljk1MyAzNDIuNDIyIDM0Ni41MTYgMzQ2LjUxNiAzNDYuNTE2QzM1NS42NTUgMzQ2LjUxNiAzNjIuNTE2IDMzOS4wNDIgMzYyLjUxNiAzMzAuNTE2QzM2Mi41MTYgMzI2LjQyMiAzNjAuOTUzIDMyMi4zMjggMzU3LjgyOCAzMTkuMjAzTDM0OS4yNTIgMzEwLjYyNUMzNDIuNzMzIDMwNC4xMDcgMzM5LjgxNiAyOTYuMDkyIDMzOS44MTYgMjg4LjIzMUMzMzkuODE2IDI3MS43ODEgMzUyLjU5IDI1NiAzNzEuODc5IDI1NkgzODRDMzkyLjg0NCAyNTYgNDAwIDI0OC44NDQgNDAwIDI0MFMzOTIuODQ0IDIyNCAzODQgMjI0Wk0zMDcuODQ4IDI4OC4wNjZDMzA3Ljg0OCAyODkuMzU0IDMwNy44ODcgMjkwLjY0IDMwNy45NjUgMjkxLjkyMkMzMDYuNzI3IDI5MS44NTIgMzA1LjQ4MiAyOTEuODE2IDMwNC4yMzIgMjkxLjgxNkMzMDQuMjI3IDI5MS44MTYgMzA0LjIyMiAyOTEuODE2IDMwNC4yMTcgMjkxLjgxNkMyODUuMjM1IDI5MS44MTYgMjY3Ljg5NiAzMDAuMDUxIDI1NS45MTYgMzEzLjUyQzI0NC4xMzkgMzAwLjIxOSAyMjYuOTIgMjkxLjgyIDIwNy43NzMgMjkxLjgxNkMyMDYuNTIxIDI5MS44MTYgMjA1LjI3NSAyOTEuODUyIDIwNC4wMzUgMjkxLjkyNkMyMDQuMTEzIDI5MC42NDMgMjA0LjE1MiAyODkuMzU3IDIwNC4xNTIgMjg4LjA2OEMyMDQuMTUyIDI3My41NDkgMTk4LjgyNCAyNTQuNDMxIDE4Mi41MDYgMjQwQzE5NS45NjEgMjI4LjEwMSAyMDQuMTUyIDIxMC41OTMgMjA0LjE1MiAxOTEuOTM0QzIwNC4xNTIgMTkwLjY0NiAyMDQuMTEzIDE4OS4zNiAyMDQuMDM1IDE4OC4wNzhDMjA1LjI3MyAxODguMTQ4IDIwNi41MiAxODguMTg0IDIwNy43NjggMTg4LjE4NEMyMjYuOTY1IDE4OC4xODQgMjQ0LjIyMSAxNzkuNzQyIDI1NiAxNjYuMzgzQzI2Ny43ODEgMTc5Ljc0MiAyODUuMDM1IDE4OC4xODQgMzA0LjIzMiAxODguMTg0QzMwNS40OCAxODguMTg0IDMwNi43MjcgMTg4LjE0OCAzMDcuOTY1IDE4OC4wNzhDMzA3Ljg4NyAxODkuMzYgMzA3Ljg0OCAxOTAuNjQ2IDMwNy44NDggMTkxLjkzNEMzMDcuODQ4IDIwOS42OTkgMzE1LjM2OCAyMjcuNTA4IDMyOS40OTQgMjQwQzMxNi4wMzkgMjUxLjg5OSAzMDcuODQ4IDI2OS40MDcgMzA3Ljg0OCAyODguMDY2Wk0yNDAgMjA4QzIzMS4xNjQgMjA4IDIyNCAyMTUuMTY0IDIyNCAyMjRTMjMxLjE2NCAyNDAgMjQwIDI0MFMyNTYgMjMyLjgzNiAyNTYgMjI0UzI0OC44MzYgMjA4IDI0MCAyMDhaTTQ2Ni41IDgzLjY4TDI3NC41IDMuNjcyQzI2OS42MDkgMS42NDEgMjYxLjM0NCAwIDI1Ni4wNDcgMFMyNDIuNDg0IDEuNjQxIDIzNy41OTQgMy42NzJMNDUuNTk0IDgzLjY4QzI3LjcwMyA5MS4wNyAxNiAxMDguNTc0IDE2IDEyNy45ODRDMTYgMzg1LjE1NyAyMDUuMTU4IDUxMiAyNTUuOTQ3IDUxMkMzMDcuOTY5IDUxMiA0OTYgMzgzLjgxMyA0OTYgMTI3Ljk4NEM0OTYgMTA4LjU3NCA0ODQuMjk3IDkxLjA3IDQ2Ni41IDgzLjY4Wk0yNTUuOTQ3IDQ4MEMyMTIuMTY4IDQ4MCA0OCAzNTUuNTQzIDQ4IDEyNy45ODRDNDggMTIxLjUgNTEuODUyIDExNS43MTkgNTcuOTAyIDExMy4yMTlMMjQ5Ljc1OCAzMy4yNjZDMjUxLjExMSAzMi43NTggMjU0LjUwNiAzMi4wNzggMjU2LjA0NyAzMi4wMDRDMjU3LjU4NiAzMi4wNzggMjYwLjk3OSAzMi43NTggMjYyLjE5MSAzMy4yMTFMNDU0LjIyNSAxMTMuMjM0QzQ2MC4wNzIgMTE1LjY2IDQ2NCAxMjEuNTg2IDQ2NCAxMjcuOTg0QzQ2NCAzODkuODk1IDI2OC42NiA0ODAgMjU1Ljk0NyA0ODBaICI+PC9wYXRoPjwvc3ZnPg==|width=32|height=32)
 */
const ShieldVirus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 240C263.164 240 256 247.164 256 256S263.164 272 272 272S288 264.836 288 256S280.836 240 272 240ZM384 224H371.879C352.59 224 339.816 208.219 339.816 191.769C339.816 183.908 342.733 175.893 349.252 169.375L357.828 160.797C360.953 157.672 362.516 153.578 362.516 149.484C362.516 140.958 355.65 133.484 346.516 133.484C342.422 133.484 338.328 135.047 335.203 138.172L326.627 146.75C320.107 153.266 312.096 156.184 304.232 156.184C287.783 156.184 272 143.406 272 124.117V112C272 103.156 264.844 96 256 96S240 103.156 240 112V124.117C240 143.41 224.219 156.184 207.768 156.184C199.906 156.184 191.893 153.266 185.373 146.75L176.797 138.172C173.672 135.047 169.578 133.484 165.484 133.484C156.345 133.484 149.484 140.958 149.484 149.484C149.484 153.578 151.047 157.672 154.172 160.797L162.748 169.375C169.267 175.893 172.184 183.908 172.184 191.769C172.184 208.219 159.41 224 140.121 224H128C119.156 224 112 231.156 112 240S119.156 256 128 256H140.121C159.41 256 172.184 271.781 172.184 288.231C172.184 296.092 169.267 304.107 162.748 310.625L154.172 319.203C151.047 322.328 149.484 326.422 149.484 330.516C149.484 339.042 156.35 346.516 165.484 346.516C169.578 346.516 173.672 344.953 176.797 341.828L185.373 333.25C191.888 326.739 199.896 323.816 207.754 323.816C214.547 323.816 240 328.972 240 355.879V368C240 376.844 247.156 384 256 384S272 376.844 272 368V355.879C272 336.593 287.776 323.816 304.225 323.816C304.227 323.816 304.23 323.816 304.232 323.816C312.094 323.816 320.109 326.734 326.627 333.25L335.203 341.828C338.328 344.953 342.422 346.516 346.516 346.516C355.655 346.516 362.516 339.042 362.516 330.516C362.516 326.422 360.953 322.328 357.828 319.203L349.252 310.625C342.733 304.107 339.816 296.092 339.816 288.231C339.816 271.781 352.59 256 371.879 256H384C392.844 256 400 248.844 400 240S392.844 224 384 224ZM307.848 288.066C307.848 289.354 307.887 290.64 307.965 291.922C306.727 291.852 305.482 291.816 304.232 291.816C304.227 291.816 304.222 291.816 304.217 291.816C285.235 291.816 267.896 300.051 255.916 313.52C244.139 300.219 226.92 291.82 207.773 291.816C206.521 291.816 205.275 291.852 204.035 291.926C204.113 290.643 204.152 289.357 204.152 288.068C204.152 273.549 198.824 254.431 182.506 240C195.961 228.101 204.152 210.593 204.152 191.934C204.152 190.646 204.113 189.36 204.035 188.078C205.273 188.148 206.52 188.184 207.768 188.184C226.965 188.184 244.221 179.742 256 166.383C267.781 179.742 285.035 188.184 304.232 188.184C305.48 188.184 306.727 188.148 307.965 188.078C307.887 189.36 307.848 190.646 307.848 191.934C307.848 209.699 315.368 227.508 329.494 240C316.039 251.899 307.848 269.407 307.848 288.066ZM240 208C231.164 208 224 215.164 224 224S231.164 240 240 240S256 232.836 256 224S248.836 208 240 208ZM466.5 83.68L274.5 3.672C269.609 1.641 261.344 0 256.047 0S242.484 1.641 237.594 3.672L45.594 83.68C27.703 91.07 16 108.574 16 127.984C16 385.157 205.158 512 255.947 512C307.969 512 496 383.813 496 127.984C496 108.574 484.297 91.07 466.5 83.68ZM255.947 480C212.168 480 48 355.543 48 127.984C48 121.5 51.852 115.719 57.902 113.219L249.758 33.266C251.111 32.758 254.506 32.078 256.047 32.004C257.586 32.078 260.979 32.758 262.191 33.211L454.225 113.234C460.072 115.66 464 121.586 464 127.984C464 389.895 268.66 480 255.947 480Z " />
    </Icon>
);

export default ShieldVirus;