
import { Icon } from "../../index";

/**
 * A component that renders the `handshake-simple` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/handshake-simple?s=regular handshake-simple}
 * @preview ![handshake-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02NDAgMzI4QzY0MCAzNDEuMjU0IDYyOS4yNTQgMzUyIDYxNiAzNTJMNDg2LjI1IDM1MS44NDJDNDg0LjM3NSAzNjAuMDkgNDgwLjg3NSAzNjcuOTYxIDQ3NS4yNSAzNzQuODM0TDQ0OS4xMjUgNDA3LjA3NEM0MzMuMjUgNDI2LjU2OCA0MDcuMjUgNDMyLjU2NiAzODUuMTI1IDQyMy45NDNDMzcxLjYyNSA0NDAuNTYyIDM1NC41IDQ0Ny45MzYgMzM2LjI1IDQ0Ny45MzZDMzIxLjI1IDQ0Ny45MzYgMzA3Ljc1IDQ0Mi44MTMgMjk1LjI1IDQzMi4wNjZDMjYzLjM3NSA0NTMuOTM0IDIyMC41IDQ1My4zMDkgMTg5LjYyNSA0MjguMTkxTDEwNSAzNTEuODQyTDI0IDM1MkMxMC43NDYgMzUyIDAgMzQxLjI1NCAwIDMyOEMwIDMxNC43NDQgMTAuNzQ2IDMwNCAyNCAzMDRMMTIzLjc1IDMwMy44NTdMMjIxIDM5MS44MjhDMjM3LjEyNSA0MDQuOTQ5IDI2Mi4zNzUgNDAyLjMyNiAyNzYuMjUgMzg1LjIwNUwyOTEuODc1IDM2Ni4wODhMMzI4Ljc1IDM5Ny41NzZDMzMwLjc1IDM5OS4yMDEgMzM0LjI1IDQwMC4zMjYgMzM3Ljc1IDM5OS45NTFTMzQ0LjUgMzk3LjgyOCAzNDYuNzUgMzk1LjA3OEwzNzYuNzUgMzU4LjU5TDQwMC42MjUgMzc4LjA4NEM0MDQuMTI1IDM4MC44MzIgNDA5LjEyNSAzODAuMjA3IDQxMS44NzUgMzc2LjgzNEw0MzggMzQ0LjU5NEM0NDAuNzY0IDM0MS4xODQgNDQwLjI0IDMzNi4xOCA0MzYuODMyIDMzMy40MTRMMzI4LjYyNSAyNDUuNjI3TDMyMC4zNzUgMjUzLjEyM0MyODAuMTI1IDI4OS44NjMgMjMzLjc1IDI2NC44NjkgMjE4Ljg3NSAyNDguNjI1QzE5Mi4yNSAyMTkuNjM1IDE5My44NzUgMTc0LjI3NSAyMjMuMjUgMTQ3LjQwOEwyNjIgMTExLjkyTDIyNi45NTMgMTExLjk2NUMyMDkuNzE3IDExMS45ODYgMTkzLjIxOSAxMTguOTYxIDE4MS4xOTEgMTMxLjMwN0wxMzcuODc1IDE3NS43NzNMMjQgMTc2QzEwLjc0NiAxNzYgMCAxNjUuMjU0IDAgMTUyQzAgMTM4Ljc0NCAxMC43NDYgMTI4IDI0IDEyOEwxMTggMTI3Ljc4OUwxNDQuMzg3IDEwMS40MUMxNjguMzkxIDc3LjQxNiAyMDAuOTQxIDYzLjkzNiAyMzQuODgzIDYzLjkzNkg0MDIuNDI0QzQzNi4zMDcgNjMuOTM2IDQ2OC44MDcgNzcuMzY5IDQ5Mi43OTkgMTAxLjI5M0w1MTkuMjUgMTI3LjY2NEw2MTYgMTI4QzYyOS4yNTQgMTI4IDY0MCAxMzguNzQ0IDY0MCAxNTJDNjQwIDE2NS4yNTQgNjI5LjI1NCAxNzYgNjE2IDE3Nkw0OTkuMjUgMTc1LjY0OEw0NTAuNjA0IDEyOS40NTlDNDM4LjY2NCAxMTguMTIxIDQyMi44MTMgMTExLjgyMiA0MDYuMzQ2IDExMS44NzFMMzQ4LjI1IDExMi4wNDVDMzM4LjIwNSAxMTIuMDc0IDMyOC41MzUgMTE1Ljg1NSAzMjEuMTM1IDEyMi42NDZMMjU1Ljc1IDE4Mi42NDZDMjQ2LjEyNSAxOTEuMzk1IDI0NS4yNSAyMDYuNjM5IDI1NC42MjUgMjE2LjYzN0MyNjMuNSAyMjYuMDA4IDI3OS43NSAyMjUuMjU4IDI4OS4yNSAyMTYuNjM3TDM0NC4zNzUgMTY2LjAyN0MzNTAuODc1IDE2MC4xNTQgMzYxIDE2MC41MjkgMzY3IDE2Ny4wMjdMMzc3Ljg3NSAxNzguNzczQzM4My44NzUgMTg1LjI3MSAzODMuMzc1IDE5NS4zOTMgMzc2Ljg3NSAyMDEuMzkxTDM2NC4zNzUgMjEyLjc2Mkw0NjcuMTI1IDI5Ni4xMDlDNDY5Ljg3NSAyOTguNDg0IDQ3Mi41IDMwMS4xMDcgNDc0Ljc1IDMwMy44NTdMNjE2IDMwNEM2MjkuMjU0IDMwNCA2NDAgMzE0Ljc0NCA2NDAgMzI4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
const HandshakeSimple: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M640 328C640 341.254 629.254 352 616 352L486.25 351.842C484.375 360.09 480.875 367.961 475.25 374.834L449.125 407.074C433.25 426.568 407.25 432.566 385.125 423.943C371.625 440.562 354.5 447.936 336.25 447.936C321.25 447.936 307.75 442.813 295.25 432.066C263.375 453.934 220.5 453.309 189.625 428.191L105 351.842L24 352C10.746 352 0 341.254 0 328C0 314.744 10.746 304 24 304L123.75 303.857L221 391.828C237.125 404.949 262.375 402.326 276.25 385.205L291.875 366.088L328.75 397.576C330.75 399.201 334.25 400.326 337.75 399.951S344.5 397.828 346.75 395.078L376.75 358.59L400.625 378.084C404.125 380.832 409.125 380.207 411.875 376.834L438 344.594C440.764 341.184 440.24 336.18 436.832 333.414L328.625 245.627L320.375 253.123C280.125 289.863 233.75 264.869 218.875 248.625C192.25 219.635 193.875 174.275 223.25 147.408L262 111.92L226.953 111.965C209.717 111.986 193.219 118.961 181.191 131.307L137.875 175.773L24 176C10.746 176 0 165.254 0 152C0 138.744 10.746 128 24 128L118 127.789L144.387 101.41C168.391 77.416 200.941 63.936 234.883 63.936H402.424C436.307 63.936 468.807 77.369 492.799 101.293L519.25 127.664L616 128C629.254 128 640 138.744 640 152C640 165.254 629.254 176 616 176L499.25 175.648L450.604 129.459C438.664 118.121 422.813 111.822 406.346 111.871L348.25 112.045C338.205 112.074 328.535 115.855 321.135 122.646L255.75 182.646C246.125 191.395 245.25 206.639 254.625 216.637C263.5 226.008 279.75 225.258 289.25 216.637L344.375 166.027C350.875 160.154 361 160.529 367 167.027L377.875 178.773C383.875 185.271 383.375 195.393 376.875 201.391L364.375 212.762L467.125 296.109C469.875 298.484 472.5 301.107 474.75 303.857L616 304C629.254 304 640 314.744 640 328Z" />
    </Icon>
);

export default HandshakeSimple;