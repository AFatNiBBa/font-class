
import { Icon } from "../../index";

/**
 * A component that renders the `signal-stream` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/signal-stream?s=regular signal-stream}
 * @preview ![signal-stream](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NTguMTQzIDcxLjc1NEM0NDkuMTgyIDYxLjk3MyA0MzMuOTY1IDYxLjM3OSA0MjQuMTkgNzAuMzQ4QzQxNC40MzEgNzkuMzE3IDQxMy43OSA5NC41MDQgNDIyLjc2NyAxMDQuMjU0QzQ5OS44MDYgMTg3Ljk0IDQ5OS44MDYgMzI0LjA2NCA0MjIuNzY3IDQwNy43NUM0MTMuNzkgNDE3LjUgNDE0LjQzMSA0MzIuNjg4IDQyNC4xOSA0NDEuNjU2QzQyOC44MDQgNDQ1LjkwNiA0MzQuNjM3IDQ0OCA0NDAuNDU1IDQ0OEM0NDYuOTMgNDQ4IDQ1My40MDQgNDQ1LjQwNiA0NTguMTQzIDQ0MC4yNUM1NTEuNjUgMzM4LjY1OCA1NTEuNjUgMTczLjM0NyA0NTguMTQzIDcxLjc1NFpNMzQ0LjUyNCAxNDkuOTcyQzMzNC41NjIgMTU4LjcyMiAzMzMuNTc3IDE3My44NzggMzQyLjMzNSAxODMuODQ3QzM3Ny4zMDQgMjIzLjYyOCAzNzcuMzA0IDI4OC4zNzcgMzQyLjMzNSAzMjguMTU4QzMzMy41NzcgMzM4LjEyNiAzMzQuNTYyIDM1My4yODIgMzQ0LjUyNCAzNjIuMDMyQzM0OS4wOTEgMzY2LjAzMiAzNTQuNzM2IDM2OC4wMDEgMzYwLjM2NyAzNjguMDAxQzM2Ny4wNDQgMzY4LjAwMSAzNzMuNjkxIDM2NS4yNTEgMzc4LjQzIDM1OS44NDVDNDI4Ljc1NyAzMDIuNTk1IDQyOC43NTcgMjA5LjQwOSAzNzguNDMgMTUyLjE2QzM2OS43MDMgMTQyLjE5MSAzNTQuNTMzIDE0MS4yMjIgMzQ0LjUyNCAxNDkuOTcyWk01Ni4zNTYgNzAuMzQ4QzQ2LjYyOCA2MS4zNzkgMzEuNDExIDYxLjk3MyAyMi40MDMgNzEuNzU0Qy03MS4xMDQgMTczLjM0NyAtNzEuMTA0IDMzOC42NTggMjIuNDAzIDQ0MC4yNUMyNy4xNDIgNDQ1LjQwNiAzMy42MTYgNDQ4IDQwLjA5MSA0NDhDNDUuOTA5IDQ0OCA1MS43NDIgNDQ1LjkwNiA1Ni4zNTYgNDQxLjY1NkM2Ni4xMTUgNDMyLjY4OCA2Ni43NTYgNDE3LjUgNTcuNzc5IDQwNy43NUMtMTkuMjYgMzI0LjA2NCAtMTkuMjYgMTg3Ljk0IDU3Ljc3OSAxMDQuMjU0QzY2Ljc1NiA5NC41MDQgNjYuMTE1IDc5LjMxNyA1Ni4zNTYgNzAuMzQ4Wk0xMzYuMDIyIDE0OS45NzJDMTI2LjAyOSAxNDEuMjIyIDExMC44NTkgMTQyLjIyMiAxMDIuMTE2IDE1Mi4xNkM1MS43ODkgMjA5LjQwOSA1MS43ODkgMzAyLjU5NSAxMDIuMTE2IDM1OS44NDVDMTA2Ljg1NSAzNjUuMjUxIDExMy41MDIgMzY4LjAwMSAxMjAuMTggMzY4LjAwMUMxMjUuNzk0IDM2OC4wMDEgMTMxLjQ1NSAzNjYuMDMyIDEzNi4wMjIgMzYyLjAzMkMxNDUuOTg0IDM1My4yODIgMTQ2Ljk2OSAzMzguMTI2IDEzOC4yMTIgMzI4LjE1OEMxMDMuMjQyIDI4OC4zNzcgMTAzLjI0MiAyMjMuNjI4IDEzOC4yMTIgMTgzLjg0N0MxNDYuOTY5IDE3My44NzggMTQ1Ljk4NCAxNTguNzIyIDEzNi4wMjIgMTQ5Ljk3MlpNMjQwLjI3MyAyMTYuMDAzQzIxOC4xNjEgMjE2LjAwMyAyMDAuMjM3IDIzMy45MTMgMjAwLjIzNyAyNTYuMDAyQzIwMC4yMzcgMjc4LjA5MiAyMTguMTYxIDI5Ni4wMDIgMjQwLjI3MyAyOTYuMDAyUzI4MC4zMDkgMjc4LjA5MiAyODAuMzA5IDI1Ni4wMDJDMjgwLjMwOSAyMzMuOTEzIDI2Mi4zODUgMjE2LjAwMyAyNDAuMjczIDIxNi4wMDNaIi8+PC9zdmc+|width=32|height=32)
 */
const SignalStream: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M458.143 71.754C449.182 61.973 433.965 61.379 424.19 70.348C414.431 79.317 413.79 94.504 422.767 104.254C499.806 187.94 499.806 324.064 422.767 407.75C413.79 417.5 414.431 432.688 424.19 441.656C428.804 445.906 434.637 448 440.455 448C446.93 448 453.404 445.406 458.143 440.25C551.65 338.658 551.65 173.347 458.143 71.754ZM344.524 149.972C334.562 158.722 333.577 173.878 342.335 183.847C377.304 223.628 377.304 288.377 342.335 328.158C333.577 338.126 334.562 353.282 344.524 362.032C349.091 366.032 354.736 368.001 360.367 368.001C367.044 368.001 373.691 365.251 378.43 359.845C428.757 302.595 428.757 209.409 378.43 152.16C369.703 142.191 354.533 141.222 344.524 149.972ZM56.356 70.348C46.628 61.379 31.411 61.973 22.403 71.754C-71.104 173.347 -71.104 338.658 22.403 440.25C27.142 445.406 33.616 448 40.091 448C45.909 448 51.742 445.906 56.356 441.656C66.115 432.688 66.756 417.5 57.779 407.75C-19.26 324.064 -19.26 187.94 57.779 104.254C66.756 94.504 66.115 79.317 56.356 70.348ZM136.022 149.972C126.029 141.222 110.859 142.222 102.116 152.16C51.789 209.409 51.789 302.595 102.116 359.845C106.855 365.251 113.502 368.001 120.18 368.001C125.794 368.001 131.455 366.032 136.022 362.032C145.984 353.282 146.969 338.126 138.212 328.158C103.242 288.377 103.242 223.628 138.212 183.847C146.969 173.878 145.984 158.722 136.022 149.972ZM240.273 216.003C218.161 216.003 200.237 233.913 200.237 256.002C200.237 278.092 218.161 296.002 240.273 296.002S280.309 278.092 280.309 256.002C280.309 233.913 262.385 216.003 240.273 216.003Z" />
    </Icon>
);

export default SignalStream;